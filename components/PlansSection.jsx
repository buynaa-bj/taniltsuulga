import React from 'react'

export const PlansSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-300 mb-16">Choose the plan that&apos;s right for you</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 text-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">SINGLE</h3>
              <div className="text-4xl font-bold mb-6">Free</div>
              <p className="text-gray-600 mb-8">All plans are include, People Search, and A/B Testing Report.</p>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                GET STARTED
              </button>
            </div>
            
            <div className="bg-gray-100 text-gray-800 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold mb-4">PREMIUM</h3>
              <div className="text-4xl font-bold mb-6">$19</div>
              <p className="text-gray-600 mb-8">All plans are include, People Search, and A/B Testing Report.</p>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                GET STARTED NOW
              </button>
            </div>
            
            <div className="bg-gray-100 text-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">AGENCY</h3>
              <div className="text-4xl font-bold mb-6">$29</div>
              <p className="text-gray-600 mb-8">All plans are include, People Search, and A/B Testing Report.</p>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
    </section>
  )
}
