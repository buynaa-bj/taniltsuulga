import React from 'react'

export const DemoSection = () => {
  return (
    <section id="video" className="py-20 px-4 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Watch A Demo</h2>
              <p className="text-xl text-gray-300">See how our app works in action</p>
            </div>
            
            <div className="relative">
              <div className="w-80 h-60 bg-black rounded-2xl p-2 mx-auto">
                <div className="w-full h-full bg-blue-500 rounded-xl relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-50 rounded-lg p-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="flex-1 bg-gray-600 rounded-full h-1">
                        <div className="bg-white h-1 rounded-full w-1/3"></div>
                      </div>
                      <div className="w-4 h-4 text-white">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4-3.816a1 1 0 011-.108zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
