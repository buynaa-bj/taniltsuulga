"use client";
import React from 'react'
import { motion } from "framer-motion"

export const InstallSection = () => {
  // framer-motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="download" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Download & Install Appy Now
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Get started with our amazing app today
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button
            variants={item}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </motion.button>
          <motion.button
            variants={item}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L12.866 12l4.832-4.491zM5.864 2.658L18.802 8.99l-4.135 3.842L5.864 2.658z"/>
            </svg>
            Google Play
          </motion.button>
        </motion.div>

        <div className="relative">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl mx-auto">
              <div className="w-full h-full bg-blue-500 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-400 rounded-full opacity-80"></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl z-0"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 0.7, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full h-full bg-blue-500 rounded-2xl flex items-center justify-center">
              <div className="w-32 h-32 bg-blue-400 rounded-full opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
