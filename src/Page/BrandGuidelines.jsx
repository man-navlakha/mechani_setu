import React from 'react';
import { Palette, Type, Image as ImageIcon, ShieldCheck, Grid, Layers } from 'lucide-react';

const BrandGuidelines = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 p-8 opacity-5 pointer-events-none">
            <Palette size={300} />
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100 mb-4 relative z-10">
            <ShieldCheck size={16} />
            <span>Official Assets</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 relative z-10">
            Mechanic Setu Brand Guidelines
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl relative z-10">
            The foundational elements of our visual identity. Use these guidelines to ensure consistency across all touchpoints.
          </p>
        </div>

        {/* 1. Logo Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <ImageIcon size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">1. Logo & Mark</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Clear Space */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Logo and Clear Space</h3>
              <p className="text-sm text-gray-600">
                Always maintain a minimum clear space around the logo equivalent to half the logo's height (x/2) to ensure visibility and impact.
              </p>
              <div className="bg-gray-100 border border-gray-200 border-dashed rounded-xl p-12 flex items-center justify-center relative">
                {/* Clear space markers */}
                <div className="absolute inset-8 border border-blue-300 border-dashed rounded opacity-50"></div>
                <div className="relative bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                  <img src="/ms_logo_trans.png" alt="Mechanic Setu" className="w-12 h-12" />
                  <span className="text-2xl font-bold text-gray-900">Mechanic Setu</span>
                </div>
              </div>
            </div>

            {/* Lock-ups */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Lock-ups: Partnership & Product</h3>
              <p className="text-sm text-gray-600">
                Use a vertical hairline separator when pairing the primary logo with partner brands or specific sub-products.
              </p>
              <div className="space-y-4">
                {/* Product Lockup */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-center gap-4">
                 <img src="/ms_logo_trans.png" alt="Mechanic Setu" className="w-12 h-12 opacity-80" />
                  <span className="text-xl font-bold text-gray-800">Mechanic Setu</span>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <span className="text-xl font-medium text-blue-600">Enterprise</span>
                </div>
                {/* Partnership Lockup */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-center gap-4">
                 <img src="/ms_logo_trans.png" alt="Mechanic Setu" className="w-12 h-12 opacity-80" />
                  <span className="text-xl font-bold text-gray-800">Mechanic Setu</span>
                  <span className="text-sm font-bold text-gray-400 mx-2">✕</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    PR
                  </div>
                  <span className="text-lg font-medium text-gray-600">Partner</span>
                </div>
                {/* Partnership Lockup */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-center gap-4">
                  <img src="/ms_logo_trans.png" alt="Mechanic Setu" className="w-12 h-12 opacity-80" />
                  <span className="text-xl font-bold text-gray-800">Mechanic Setu</span>
                  <span className="text-sm font-bold text-gray-400 mx-2">✕</span>
                 <img src="/ms_logo_copy.png" alt="Mechanic Setu" className=" h-12 opacity-80" />
                  {/* <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Color Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Palette size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">2. Color Palette</h2>
          </div>

          <div className="space-y-10">
            {/* Primary & Safety */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Brand & Safety Colors</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* Primary Blue */}
                <div className="space-y-2">
                  <div className="h-24 bg-blue-600 rounded-xl shadow-sm border border-gray-100"></div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Primary Blue</p>
                    <p className="text-xs text-gray-500 font-mono">HEX: #2563EB</p>
                    <p className="text-xs text-gray-500 font-mono">TW: blue-600</p>
                  </div>
                </div>
                {/* Safety Red */}
                <div className="space-y-2">
                  <div className="h-24 bg-red-600 rounded-xl shadow-sm border border-gray-100"></div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Emergency Red</p>
                    <p className="text-xs text-gray-500 font-mono">HEX: #DC2626</p>
                    <p className="text-xs text-gray-500 font-mono">TW: red-600</p>
                  </div>
                </div>
                {/* Verification Green */}
                <div className="space-y-2">
                  <div className="h-24 bg-green-500 rounded-xl shadow-sm border border-gray-100"></div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Verified Green</p>
                    <p className="text-xs text-gray-500 font-mono">HEX: #22C55E</p>
                    <p className="text-xs text-gray-500 font-mono">TW: green-500</p>
                  </div>
                </div>
                {/* Alert Amber */}
                <div className="space-y-2">
                  <div className="h-24 bg-amber-400 rounded-xl shadow-sm border border-gray-100"></div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Alert Amber</p>
                    <p className="text-xs text-gray-500 font-mono">HEX: #FBBF24</p>
                    <p className="text-xs text-gray-500 font-mono">TW: amber-400</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary & Proportions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Secondary Neutral Colors</h3>
                <div className="flex rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <div className="flex-1 h-16 bg-gray-900 flex items-center justify-center text-white text-xs font-mono">gray-900</div>
                  <div className="flex-1 h-16 bg-gray-600 flex items-center justify-center text-white text-xs font-mono">gray-600</div>
                  <div className="flex-1 h-16 bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-mono">gray-100</div>
                  <div className="flex-1 h-16 bg-white flex items-center justify-center text-gray-600 text-xs font-mono">white</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Proportions (60-30-10 Rule)</h3>
                <div className="h-16 flex rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <div className="w-[60%] bg-gray-50 flex items-center px-4 text-xs font-bold text-gray-500">60% Neutrals</div>
                  <div className="w-[30%] bg-blue-600 flex items-center px-4 text-xs font-bold text-white">30% Primary</div>
                  <div className="w-[10%] bg-red-600 flex items-center justify-center text-xs font-bold text-white">10%</div>
                </div>
                <p className="text-xs text-gray-500 mt-2">White/Grays dominate for clean layout. Primary blue leads interaction. Safety colors (red/green) are used sparingly for accents and alerts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Typography Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Type size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">3. Typography & Hierarchy</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Primary Font & Pairings */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Primary Font Family</h3>
                <p className="text-sm text-gray-600 mb-4">We use the default modern System Sans-serif (Inter / San Francisco) for maximum readability and native performance.</p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">Aa</div>
                  <p className="text-lg font-medium text-gray-800">System UI Sans-Serif</p>
                  <p className="text-sm text-gray-500 font-mono mt-1">font-family: ui-sans-serif, system-ui, -apple-system;</p>
                  
                  <div className="mt-4 flex gap-4 text-2xl text-gray-800">
                    <span className="font-light">Light</span>
                    <span className="font-normal">Regular</span>
                    <span className="font-bold">Bold</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Call to Action (CTA) styling</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:bg-blue-700 transition">
                    Primary CTA
                  </button>
                  <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-medium shadow-sm hover:bg-gray-50 transition">
                    Secondary
                  </button>
                  <button className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:bg-red-700 transition">
                    Emergency CTA
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">Buttons should always have a `rounded-lg` or `rounded-xl` border-radius, font-medium/semibold, and subtle shadows.</p>
              </div>
            </div>

            {/* Hierarchy Examples */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Hierarchy Examples</h3>
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-6">
                <div>
                  <p className="text-xs font-mono text-blue-600 mb-1">Heading 1 (text-4xl font-extrabold)</p>
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Find a Mechanic Near You</h1>
                </div>
                
                <div>
                  <p className="text-xs font-mono text-blue-600 mb-1">Heading 2 (text-2xl font-bold)</p>
                  <h2 className="text-2xl font-bold text-gray-900">Vehicle Registration Details</h2>
                </div>
                
                <div>
                  <p className="text-xs font-mono text-blue-600 mb-1">Heading 3 (text-lg font-semibold)</p>
                  <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                </div>
                
                <div>
                  <p className="text-xs font-mono text-blue-600 mb-1">Body Text (text-base font-normal text-gray-600)</p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Mechanic Setu provides reliable, on-demand emergency assistance for your vehicle. Ensure your location is enabled to get the fastest routing available.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-mono text-blue-600 mb-1">Small / Caption (text-sm text-gray-500)</p>
                  <p className="text-sm text-gray-500">
                    * Terms and conditions apply. By booking, you agree to our privacy policy.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default BrandGuidelines;