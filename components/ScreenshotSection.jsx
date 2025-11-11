"use client";

import React from 'react'
import { motion } from "framer-motion"

export const ScreenshotSection = () => {
  // framer-motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  return (
    <section id="screenshots" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Screenshots
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            See what our app looks like
          </motion.p>
          
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={item} className="bg-white rounded-2xl shadow-lg p-4">
              <div className="w-64 h-96 bg-gray-100 rounded-xl mx-auto mb-4 p-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Audio Recorder</h3>
                  <div className="text-3xl font-mono text-gray-600 mb-4">00:01.12</div>
                  <div className="w-full h-16 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-2 h-8 bg-blue-500 rounded-full mx-1"></div>
                    <div className="w-2 h-12 bg-blue-500 rounded-full mx-1"></div>
                    <div className="w-2 h-6 bg-blue-500 rounded-full mx-1"></div>
                    <div className="w-2 h-10 bg-blue-500 rounded-full mx-1"></div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="bg-white rounded-2xl shadow-lg p-4">
              <div className="w-64 h-96 bg-gray-100 rounded-xl mx-auto mb-4 p-4 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Hello</h3>
                <p className="text-gray-600 text-center">Welcome to our secure platform</p>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="bg-white rounded-2xl shadow-lg p-4">
              <div className="w-64 h-96 bg-gray-100 rounded-xl mx-auto mb-4 p-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-2">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold">appy</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Sign up</h3>
                  <div className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="text" placeholder="Username" className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg" />
                    <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold">Sign Up Now</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
    </section>
  )
}
