import React from 'react';
import { ShieldCheck, Calendar, Clock } from 'lucide-react';

const PrivacyPolicy = () => {


  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="bg-white rounded-t-2xl shadow-sm border border-gray-200 border-b-0 p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <ShieldCheck size={200} />
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <ShieldCheck size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Privacy Policy
            </h1>
          </div>
          
          <p className="text-lg text-gray-600 mb-6 max-w-2xl">
            Transparency and security are at the core of Mechanic Setu. Learn how we handle, protect, and use your data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
              <Calendar size={16} className="text-blue-500" />
              <span><strong>Effective Date:</strong> 1 March 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
              <Clock size={16} className="text-blue-500" />
              <span><strong>Last Updated:</strong> 1 March 2026</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-b-2xl shadow-sm border border-gray-200 p-8 sm:p-10 space-y-12">
          
          {/* 1. Introduction */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">1. Introduction</h2>
            <p>Welcome to Mechanic Setu.</p>
            <p>
              Mechanic Setu ("we", "our", "us", or "Platform") is a digital platform designed 
              to connect vehicle owners with verified mechanics and service partners for 
              emergency breakdown assistance, scheduled servicing, and vehicle management solutions.
            </p>
            <p>We are committed to protecting your privacy and ensuring transparency in how your personal data is collected, processed, stored, and shared.</p>
            
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 my-4">
              <p className="font-semibold text-gray-900 mb-2">This Privacy Policy explains:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>What information we collect</li>
                <li>Why we collect it</li>
                <li>How we use and protect it</li>
                <li>Your rights regarding your data</li>
              </ul>
            </div>

            <p className="font-semibold text-gray-900 mt-6">This policy applies to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mechanic Setu Mobile Applications</li>
              <li>Mechanic Setu Website</li>
              <li>Associated APIs and backend services</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-6">This Privacy Policy is designed in compliance with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>India's Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
              <li>Information Technology Act, 2000</li>
              <li>Google Play Store Developer Policies</li>
              <li>Applicable Indian data protection and consumer laws.</li>
            </ul>
            <p className="pt-2 font-medium text-gray-800">
              By using Mechanic Setu, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          {/* 2. Definitions */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">2. Definitions</h2>
            <p>For clarity within this policy:</p>
            <ul className="space-y-3">
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <div><strong>User / Customer</strong> — Individual requesting vehicle services.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <div><strong>Service Partner / Mechanic</strong> — Verified mechanic or workshop registered on Mechanic Setu.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <div><strong>Personal Data</strong> — Any information that identifies an individual directly or indirectly.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <div><strong>Sensitive Personal Data</strong> — Identity documents, location data, and verification records.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <div><strong>Processing</strong> — Collection, storage, usage, sharing, or deletion of data.</div></li>
            </ul>
          </section>

          {/* 3. Information We Collect */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">3. Information We Collect</h2>
            <p>We collect only the data necessary to operate and improve our services.</p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">3.1 Account Information (Users)</h3>
            <p>When creating an account, we may collect:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> First Name and Last Name</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Mobile Number</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Email Address</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Profile Photo</li>
              <li className="flex items-center gap-2 col-span-1 sm:col-span-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Authentication identifiers (Google Login ID or OTP verification data)</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-8">3.2 Mechanic / Service Partner Information (KYC)</h3>
            <p>To maintain trust and safety on the platform, we verify mechanics through Know Your Customer (KYC) procedures. We may collect:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Shop Name</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Business Address</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Contact Information</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Aadhaar Card details</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Identity verification documents</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Workshop images</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Banking or payout info</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Service history data</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-8">3.3 Vehicle & Registration Certificate (RC) Data</h3>
            <p>To provide accurate vehicle-specific services, we may collect or retrieve:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vehicle Identifiers (Registration Number, Chassis Number, Engine Number)</li>
              <li>Owner Information (Registered Owner Name, Address info)</li>
              <li>Vehicle classification</li>
              <li>Compliance Details (Insurance expiry, PUCC, Tax validity, Permit info)</li>
              <li>Financer details</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-8">3.4 Location Information (Core Platform Requirement)</h3>
            <p>Location data is essential for Mechanic Setu's functionality.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <div className="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="font-bold text-gray-900 mb-2">Customers</p>
                <p className="text-sm mb-2">We collect precise GPS location when you:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Request emergency service</li>
                  <li>Search nearby mechanics</li>
                  <li>Track mechanic arrival</li>
                </ul>
              </div>
              <div className="flex-1 bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="font-bold text-blue-900 mb-2">Mechanics</p>
                <p className="text-sm text-blue-800 mb-2">We may collect:</p>
                <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
                  <li>Shop location coordinates</li>
                  <li>Live background location during active availability</li>
                  <li>Real-time location during assigned jobs</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="font-bold text-yellow-800 text-sm">Important Disclosure (Google Play Compliance):</p>
              <p className="text-sm text-yellow-700 mt-1">
                Location data may be collected even when the app is running in the background 
                for active service partners to enable job routing, ETA tracking, and safety monitoring.
                Location tracking occurs only when service availability is enabled.
              </p>
            </div>
          </section>

          {/* 4. How We Use Your Information */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">4. How We Use Your Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="text-md font-bold text-gray-900 mb-2">Service Delivery</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Match customers with nearby mechanics</li>
                  <li>Dispatch emergency assistance</li>
                  <li>Provide real-time tracking</li>
                  <li>Maintain service history</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md font-bold text-gray-900 mb-2">Identity & Trust</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Verify mechanics through KYC</li>
                  <li>Prevent fraudulent activities</li>
                  <li>Detect misuse or fake accounts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md font-bold text-gray-900 mb-2">Communication</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>OTP verification messages</li>
                  <li>Service updates & Booking confirmations</li>
                  <li>Support responses</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md font-bold text-gray-900 mb-2">Platform Improvement</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Improve matching algorithms</li>
                  <li>Optimize service response time</li>
                  <li>Enhance user experience</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Data Sharing */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">5. Data Sharing and Disclosure</h2>
            <p>We do not sell personal data. We share data only when necessary.</p>
            
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">When a job is accepted:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-2">Customers share:</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Name & Contact number</li>
                    <li>Vehicle details & Location</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-600 mb-2">Mechanics share:</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Profile & Shop details</li>
                    <li>Live location during service</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mt-6">Third-Party Service Providers & Legal</h3>
            <p>We may share limited data with trusted cloud hosts (e.g., Vercel, Render), DB providers, SMS gateways, and vehicle APIs. We may also disclose information to Indian law enforcement to comply with legal obligations or fraud investigations.</p>
          </section>

          {/* 7. Data Retention (Table styling) */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">7. Data Retention</h2>
            <p>We retain data only as long as necessary.</p>
            
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <thead className="bg-gray-50 text-gray-900">
                  <tr>
                    <th className="px-6 py-3 font-semibold border-b border-gray-200">Data Type</th>
                    <th className="px-6 py-3 font-semibold border-b border-gray-200">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">Account Information</td>
                    <td className="px-6 py-4">Until account deletion</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">Service History</td>
                    <td className="px-6 py-4">Operational necessity</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">KYC Documents</td>
                    <td className="px-6 py-4">As required by law</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">Financial Records</td>
                    <td className="px-6 py-4">As required by tax laws</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">Inactive or unnecessary data may be periodically removed.</p>
          </section>

          {/* 8. Your Rights */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">8. Your Rights Under DPDP Act, 2023</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <p className="font-bold text-gray-900">Access & Correction</p>
                <p className="text-sm mt-1">Request a copy of your personal data or update incorrect information.</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <p className="font-bold text-gray-900">Erasure & Consent</p>
                <p className="text-sm mt-1">Request deletion of your account and data, or withdraw location permissions.</p>
              </div>
            </div>
          </section>

          {/* 14. Contact */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">Contact & Grievance Officer</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="font-bold text-gray-900 text-lg mb-4">Mechanic Setu – Grievance Officer</p>
              <div className="space-y-2 text-sm">
                <p><strong className="text-gray-900">Support Email:</strong> <a href="mailto:mechanicsetu+support@gmail.com" className="text-blue-600 hover:underline">mechanicsetu+support@gmail.com</a></p>
                <p><strong className="text-gray-900">Business Contact:</strong> <a href="mailto:mechanicsetu+business@gmail.com" className="text-blue-600 hover:underline">mechanicsetu+business@gmail.com</a></p>
                <p><strong className="text-gray-900">Address:</strong> [Insert Registered Business Address]</p>
              </div>
              <p className="mt-4 text-sm text-gray-500">We aim to respond within legally required timelines under Indian law.</p>
            </div>
          </section>

          {/* Commitment Footer */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-10 text-white shadow-xl text-center sm:text-left relative overflow-hidden">
            <ShieldCheck size={120} className="absolute -right-10 -bottom-10 opacity-10 text-white" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Privacy Commitment</h2>
            <p className="text-blue-100 leading-relaxed max-w-2xl text-lg relative z-10">
              Mechanic Setu is built on trust. We design our systems with privacy-first principles, 
              minimizing data collection wherever possible while ensuring safe and reliable vehicle 
              assistance services. We continuously improve our security, transparency, and user control mechanisms.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;