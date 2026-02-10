import axios from "axios";
import Cookies from "js-cookie";

// --- Configuration ---
const DJANGO_URL = "/api";
// Using the URL from your apiVercel.js
const NODE_URL = "https://mechanic-setu-backend.vercel.app/api";

// State to track current API source
let activeBaseURL = DJANGO_URL;
let isCheckingHealth = false;

// Create Axios Instance
const api = axios.create({
  baseURL: activeBaseURL,
  withCredentials: true,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  timeout: 15000, // 15s timeout to detect "sleeping" Render instances faster
});

// --- Health Check & Recovery Logic ---
const startDjangoHealthCheck = () => {
  if (isCheckingHealth) return;
  isCheckingHealth = true;
  console.log("⚠️ Django server appears down. Switched to Node proxy. Starting health check...");

  const healthCheckInterval = setInterval(async () => {
    try {
      // Attempt to reach the Django server.
      // We use the base '/api/' endpoint. Even a 404 or 401 response means the server is UP.
      // 502/503/504 or Network Error means it's still down/starting.
      await axios.get(DJANGO_URL + "/", { timeout: 5000 });
      
      // If request succeeds (2xx), server is definitely up.
      recoverDjango();
    } catch (error) {
       // If we get a response that isn't a Gateway Error (like 404 Not Found, 403 Forbidden),
       // it means the Django app is running and responded.
       if (error.response && error.response.status < 500) {
          recoverDjango();
       }
       // Otherwise (Network Error, 502 Bad Gateway), keep waiting...
    }
  }, 10000); // Check every 10 seconds

  function recoverDjango() {
    console.log("✅ Django server is back! Switching back to Django proxy.");
    activeBaseURL = DJANGO_URL;
    api.defaults.baseURL = DJANGO_URL;
    isCheckingHealth = false;
    clearInterval(healthCheckInterval);
  }
};


// --- Flags for Token Refresh ---
let isRefreshing = false;
let refreshSubscribers = [];

function onRefreshed() {
  refreshSubscribers.forEach((cb) => cb());
  refreshSubscribers = [];
}

function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}

// --- Interceptors ---

// Request Interceptor: Ensure correct BaseURL and Token
api.interceptors.request.use(
  (config) => {
    // Force the active URL (unless request specifically overrides it)
    if (!config.baseURL || config.baseURL === DJANGO_URL || config.baseURL === NODE_URL) {
      config.baseURL = activeBaseURL;
    }

    const accessToken = Cookies.get("access");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle Failover & Token Refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // 1. FAILOVER LOGIC: Switch to Node if Django is down
    const isNetworkError = !error.response;
    const isServerError = error.response && (error.response.status === 502 || error.response.status === 503 || error.response.status === 504);
    
    // If error is "Server Down" AND we are currently on Django AND we haven't retried yet
    if ((isNetworkError || isServerError) && activeBaseURL === DJANGO_URL && !originalRequest._retryFallback) {
        console.warn("Primary API (Django) failed. Falling back to Node Proxy.");
        
        // Switch global state to Node
        activeBaseURL = NODE_URL;
        api.defaults.baseURL = NODE_URL;
        
        // Mark request to prevent infinite loops and set new base URL
        originalRequest._retryFallback = true;
        originalRequest.baseURL = NODE_URL;
        
        // Start polling Django to switch back when it wakes up
        startDjangoHealthCheck();
        
        // Retry the failed request on the Node server
        return api(originalRequest);
    }

    // 2. REFRESH TOKEN LOGIC
    const url = originalRequest.url || "";
    const isRefreshRequest = url.includes("core/token/refresh");

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshRequest
    ) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh(() => resolve(api(originalRequest)));
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = Cookies.get("refresh");
        const csrftoken = Cookies.get("csrftoken"); 

        // Construct refresh URL based on currently active server
        // If activeBaseURL is "/api", this results in "/api/core/token/refresh/"
        // If activeBaseURL is "https://.../api", this results in "https://.../api/core/token/refresh/"
        const baseUrlClean = activeBaseURL.endsWith('/') ? activeBaseURL : activeBaseURL + '/';
        const refreshUrl = `${baseUrlClean}core/token/refresh/`;

        const res = await axios.post(refreshUrl,
          { refresh: refreshToken },
          {
            withCredentials: true,
            headers: {
              'X-CSRFToken': csrftoken
            }
          }
        );

        console.log("Refresh successful, updating cookies...");

        if (res.data?.access) {
          Cookies.set("access", res.data.access);
          api.defaults.headers.common['Authorization'] = `Bearer ${res.data.access}`;
        }
        if (res.data?.refresh) {
          Cookies.set("refresh", res.data.refresh);
        }

        isRefreshing = false;
        onRefreshed();
        Cookies.set("Logged", true);

        if (res.data?.access) {
          originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
        }

        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh failed, logging out:", refreshError);
        isRefreshing = false;
        Cookies.set("Logged", false);
        Cookies.remove("access");
        Cookies.remove("refresh");

        if (!window.location.pathname.includes("/login")) {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
