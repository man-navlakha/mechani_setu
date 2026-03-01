import React from 'react';
import { Scale, Calendar, Clock, AlertTriangle, XCircle, FileText, CheckCircle2 } from 'lucide-react';

const TermsAndConditions = () => {

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="bg-white rounded-t-2xl shadow-sm border border-gray-200 border-b-0 p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Scale size={200} />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl relative z-10">
                <Scale size={28} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight relative z-10">
                Terms & Conditions
              </h1>
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-100 w-fit relative z-10">
              <FileText size={16} />
              <span>Legally Binding Agreement</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-6 max-w-2xl relative z-10">
            Please read these terms carefully. They govern your use of the Mechanic Setu platform and services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 relative z-10">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
              <Calendar size={16} className="text-indigo-500" />
              <span><strong>Effective Date:</strong> 1 March 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
              <Clock size={16} className="text-indigo-500" />
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
              These Terms and Conditions ("Terms") constitute a legally binding agreement 
              between you ("User", "Customer", "Mechanic", "Service Partner", or "you") 
              and Mechanic Setu ("Company", "Platform", "we", "our", or "us") governing 
              your access to and use of:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mechanic Setu mobile applications</li>
              <li>Mechanic Setu web platform</li>
              <li>APIs, services, and related technologies</li>
            </ul>
            
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg flex gap-3 items-start">
              <AlertTriangle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-sm text-yellow-800 font-medium">
                  By accessing, registering, or using the Platform, you acknowledge that you 
                  have read, understood, and agreed to these Terms. If you do not agree with these Terms, you must not use the Platform.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Platform Overview */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">2. Platform Overview</h2>
            <p>
              Mechanic Setu operates as a technology-enabled intermediary platform connecting:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Individuals seeking vehicle repair or roadside assistance ("Customers")</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Independent automotive professionals ("Mechanics" or "Service Partners")</li>
            </ul>
            
            <div className="bg-red-50 border border-red-100 rounded-xl p-5 mt-6">
              <h3 className="font-bold text-red-900 mb-3">Important Clarification</h3>
              <p className="text-sm text-red-800 mb-2"><strong>Mechanic Setu:</strong></p>
              <ul className="space-y-2 text-sm text-red-800 mb-4">
                <li className="flex items-center gap-2"><XCircle size={16} /> Does not provide vehicle repair services directly</li>
                <li className="flex items-center gap-2"><XCircle size={16} /> Does not employ mechanics</li>
                <li className="flex items-center gap-2"><XCircle size={16} /> Does not control repair execution</li>
              </ul>
              <p className="text-sm text-red-800">
                Mechanics operate as independent service providers responsible for their own services. 
                The Platform only facilitates discovery, communication, and service coordination.
              </p>
            </div>
          </section>

          {/* 3. Eligibility & 4. Account Security */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section className="space-y-4 text-gray-600 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">3. Eligibility</h2>
              <p>To use Mechanic Setu:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>You must be at least 18 years old.</li>
                <li>You must possess legal capacity under Indian law.</li>
                <li>Information provided must be accurate and lawful.</li>
              </ul>
              <p className="text-sm text-gray-500">We reserve the right to refuse service to anyone violating eligibility requirements.</p>
            </section>

            <section className="space-y-4 text-gray-600 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">4. Account Security</h2>
              <p>Users may register using OTP, Email, or Google OAuth. You are responsible for:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Maintaining device security</li>
                <li>Protecting OTPs and login credentials</li>
                <li>Activities conducted under your account</li>
              </ul>
              <p className="text-sm text-gray-500">You must immediately notify us of unauthorized account access.</p>
            </section>
          </div>

          {/* 5. RC Data Usage */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">5. Vehicle Registration Certificate (RC) Data Usage</h2>
            <p>The Platform allows users to retrieve vehicle information using registration numbers via authorized external APIs connected to government or licensed databases.</p>
            <p>Data may include owner details, insurance status, pollution compliance, and vehicle specifications. Mechanic Setu does not guarantee accuracy or uptime of third-party services.</p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-4">
              <h3 className="font-bold text-gray-900 mb-2">Authorized Use Declaration</h3>
              <p className="text-sm mb-2">By searching or saving vehicle data, you confirm:</p>
              <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
                <li>You are the lawful owner, OR</li>
                <li>You possess permission from the vehicle owner.</li>
              </ul>
              <p className="text-sm font-semibold text-red-600">Unauthorized usage, scraping, or misuse is strictly prohibited.</p>
            </div>
          </section>

          {/* 6 & 7. Customers vs Mechanics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Customers */}
            <section className="space-y-4 text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">6. Terms for Customers</h2>
              <h3 className="font-semibold text-gray-900 mt-4">6.1 Service Requests</h3>
              <p className="text-sm">You agree to provide accurate vehicle categories, problem descriptions, and precise GPS locations. Misleading info may result in account restrictions.</p>
              
              <h3 className="font-semibold text-gray-900 mt-4">6.2 Payments</h3>
              <p className="text-sm">Customers agree to pay service charges, call-out fees, and agreed repair costs directly to Mechanics or through approved platform systems.</p>
              
              <h3 className="font-semibold text-gray-900 mt-4">6.3 Cancellations</h3>
              <p className="text-sm">Repeated unjustified cancellations or abuse of emergency services may result in account suspension.</p>
            </section>

            {/* Mechanics */}
            <section className="space-y-4 text-gray-600 leading-relaxed bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 border-b border-blue-200 pb-2">7. Terms for Mechanics</h2>
              <h3 className="font-semibold text-blue-900 mt-4">7.1 Verification & Status</h3>
              <p className="text-sm text-blue-800">Mechanics must submit KYC documents (Aadhaar, shop details). You acknowledge you are an independent professional, not an employee.</p>
              
              <h3 className="font-semibold text-blue-900 mt-4">7.2 Background Location Tracking</h3>
              <p className="text-sm text-blue-800 font-medium bg-white p-3 rounded border border-blue-200">
                By enabling availability, Mechanics consent to live GPS and background location tracking for job routing, ETA visibility, and safety monitoring. Tracking stops when availability is disabled.
              </p>

              <h3 className="font-semibold text-blue-900 mt-4">7.3 Service Standards</h3>
              <p className="text-sm text-blue-800">Must perform services professionally, use lawful tools, and avoid misleading pricing. Platform may track performance for fees.</p>
            </section>
          </div>

          {/* 8, 9, 10, 11... Grid of Rules */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">8. Location Services</h2>
              <p className="text-sm">Mechanic Setu relies heavily on GPS data. Customers share location with assigned mechanics; Mechanics share live location during service execution.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">9. Platform Usage Rules</h2>
              <p className="text-sm">Users agree NOT to use the platform illegally, harass others, upload false info, hack systems, or misuse RC data. Violation equals termination.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">10. Disclaimers</h2>
              <p className="text-sm">Platform is "AS IS". We do not guarantee continuous availability, error-free operation, or repair outcomes. KYC does not constitute endorsement.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">11. Limitation of Liability</h2>
              <p className="text-sm">We are not liable for vehicle damage, injuries, service disputes, or data loss. Maximum liability will not exceed the platform fee paid for that transaction.</p>
            </div>
          </section>

          {/* 21. Refunds, Pricing, Cancellation */}
          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">21. Refunds, Pricing and Cancellation Policy</h2>
            <p>Mechanic Setu acts solely as an intermediary platform facilitating service connections.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">21.1 Pricing & Payments</h3>
                <p className="text-sm">Prices shown are estimates. Final pricing is determined by the Mechanic post-inspection. Customers agree to pay visit charges, repair costs, and spare part costs.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">21.3 Refund Eligibility</h3>
                <p className="text-sm">Refunds are limited to duplicate payments, failed services (no inspection), or platform technical errors. Service quality disputes are not handled by us.</p>
              </div>
            </div>
          </section>

          {/* 22, 23, 24 Safety & Emergency Disclaimers */}
          <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-6 text-gray-600">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">22 & 23. Safety & Emergency Disclaimer</h2>
              <p className="text-sm">We prioritize safety but do not supervise physical services. Repairs involve inherent risks. Mechanic Setu provides connections, not emergency-grade rescue services. Contact official emergency services if in danger.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">24. Mechanic Liability</h2>
              <p className="text-sm">Mechanics are solely responsible for repair decisions, tools, parts, and safety compliance. We assume no liability for improper repairs, warranty disputes, or post-service damage.</p>
            </div>
          </section>

          {/* Additional Legal Clauses (Accordion style visually, but stacked) */}
          <section className="space-y-6 text-gray-600 text-sm leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2 text-base">Additional Legal Provisions</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-gray-900">12. Dispute Resolution</h3>
                <p>Disputes must primarily be resolved between Customer and Mechanic. We may assist mediation but are not obligated.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">13. Intellectual Property</h3>
                <p>All source code, designs, and algorithms are exclusive property of Mechanic Setu. Copying is prohibited.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">25. Reviews & Ratings</h3>
                <p>Reviews must be truthful and not defamatory. We reserve the right to remove abusive feedback.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">26. Fraud Monitoring</h3>
                <p>We monitor activity for fake requests, payment manipulation, and RC misuse to maintain platform integrity.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">27 & 28. Comms & Data</h3>
                <p>You consent to electronic comms (OTPs, updates). Data handling is governed by our Privacy Policy.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">29, 30 & 18. General</h3>
                <p>These terms are the entire agreement. We are not liable for Force Majeure events (outages, disasters).</p>
              </div>
            </div>
          </section>

          {/* 17. Governing Law & 19/31. Grievance */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 text-indigo-900">
              <h2 className="text-lg font-bold mb-2">17. Governing Law</h2>
              <p className="text-sm mb-3">These Terms are governed by the laws of India. All disputes shall fall under the exclusive jurisdiction of courts located in:</p>
              <p className="font-bold text-base bg-white w-fit px-3 py-1.5 rounded shadow-sm">Ahmedabad, Gujarat, India.</p>
            </div>
            
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 text-gray-800">
              <h2 className="text-lg font-bold mb-2">31. Grievance Redressal Mechanism</h2>
              <p className="text-sm mb-3">In accordance with Indian law, users may raise complaints to our Grievance Officer:</p>
              <div className="text-sm space-y-1">
                <p><strong>Email:</strong> <a href="mailto:mechanicsetu+support@gmail.com" className="text-blue-600 hover:underline">mechanicsetu+support@gmail.com</a></p>
                <p><strong>Location:</strong> Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </section>

        </div>
        
        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Mechanic Setu. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;