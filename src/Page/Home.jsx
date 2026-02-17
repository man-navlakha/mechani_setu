import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Search,
  Loader,
  Clock,
  Star,
  Zap,
  Battery,
  Wrench,
  Droplet,
  CheckCircle2,
  ChevronDown,
  Heart,
  MessageSquare,
  History,
} from "lucide-react";

/* ---------------- HERO ---------------- */

function Hero() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDetectLocation = async () => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(() => {
      navigate("/login");
      setLoading(false);
    });
  };

  return (
    <section className="min-h-screen bg-white pt-24 pb-16 px-4 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Find mechanic near you in seconds
      </h1>

      <p className="text-xl text-gray-500 mb-10">
        Emergency breakdown? Get help instantly anywhere in Ahmedabad.
      </p>

      <div className="flex gap-4 justify-center flex-wrap">
        <button
          onClick={handleDetectLocation}
          className="bg-red-500 text-white px-8 py-4 rounded-full text-lg"
        >
          {loading ? "Detecting..." : "Detect My Location"}
        </button>

        <button
          onClick={() => navigate("/login")}
          className="border border-red-500 text-red-500 px-8 py-4 rounded-full text-lg"
        >
          Search Problem
        </button>
      </div>
    </section>
  );
}

/* ---------------- EMERGENCY ---------------- */

function EmergencyActions() {
  const navigate = useNavigate();

  const actions = [
    "Puncture repair",
    "Battery jumpstart",
    "Engine issue",
    "Fuel delivery",
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Emergency Help</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {actions.map((a) => (
          <button
            key={a}
            onClick={() => navigate("/login")}
            className="bg-white border px-6 py-5 rounded-xl"
          >
            {a}
          </button>
        ))}
      </div>
    </section>
  );
}

/* ---------------- MECHANICS ---------------- */

function NearbyMechanics() {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const res = await fetch(
        `https://mechanic-setu-backend.vercel.app/api/ms-mechanics/nearby?latitude=${latitude}&longitude=${longitude}&radius=39`
      );
      const data = await res.json();
      setMechanics(data.mechanics || []);
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Mechanics available near you
      </h2>

      <div className="max-w-4xl mx-auto">
        {mechanics.map((m, i) => (
          <div key={i} className="border rounded-xl p-5 mb-4">
            <h3 className="font-bold">{m.name}</h3>
            <p>{m.rating} ⭐</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */

function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">How it works</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div>
          <h3 className="font-bold mb-2">1. Select issue</h3>
        </div>
        <div>
          <h3 className="font-bold mb-2">2. Choose mechanic</h3>
        </div>
        <div>
          <h3 className="font-bold mb-2">3. Get help</h3>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY ---------------- */

function WhyMechanicSetu() {
  const features = [
    "Verified mechanics",
    "Fast response",
    "Ahmedabad focused",
    "Emergency ready",
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Why Mechanic Setu</h2>

      {features.map((f) => (
        <p key={f} className="mb-3 font-semibold">
          ✓ {f}
        </p>
      ))}
    </section>
  );
}

/* ---------------- LOCAL SEO ---------------- */

function LocalServiceAreas() {
  const locations = [
    "Law Garden",
    "Nehru Nagar",
    "Iscon",
    "Shivranjani",
    "Paldi",
    "Chandkheda",
    "Sabarmati Riverfront",
  ];

  return (
    <section className="py-12 bg-gray-50 text-center">
      <h3 className="text-xl font-bold mb-6">
        Mechanic available across Ahmedabad
      </h3>

      <div className="flex flex-wrap justify-center gap-3">
        {locations.map((loc) => (
          <span key={loc} className="bg-white px-4 py-2 rounded-full border">
            Mechanic near {loc}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQ() {
  const faqs = [
    {
      q: "Law Garden ma puncture thayu che?",
      a: "Mechanic Setu provides fast puncture repair in Law Garden and Paldi.",
    },
    {
      q: "Iscon crossroad par mechanic male?",
      a: "Yes. Nearby mechanics are available for instant help.",
    },
    {
      q: "Riverfront par car breakdown thay to shu karvu?",
      a: "Use emergency help to call a mechanic instantly.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>

        {faqs.map((item, i) => (
          <div key={i} className="mb-6 border-b pb-4">
            <h4 className="font-semibold text-lg mb-2">{item.q}</h4>
            <p className="text-gray-600">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTALogin() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Create account to unlock features
      </h2>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => navigate("/login")}
          className="bg-red-500 text-white px-8 py-4 rounded-full"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/login")}
          className="border border-red-500 px-8 py-4 rounded-full"
        >
          Sign Up
        </button>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-10">
      <p>© 2026 Mechanic Setu</p>
    </footer>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function Home() {
  return (
    <main>
      <Hero />
      <EmergencyActions />
      <NearbyMechanics />
      <HowItWorks />
      <WhyMechanicSetu />
      <LocalServiceAreas />
      <FAQ />
      <CTALogin />
      <Footer />
    </main>
  );
}
