"use client";

import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="bg-gray-800 text-white py-20 px-4 pt-32">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto">
        <motion.div variants={item} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={item}>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              This Will Be The Main Headline You Can Edit
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              This should be used to tell a story and let your users know a little more about your app and it&apos;s use. How can your app benefit them?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <FaApple className="w-6 h-6 mr-2" />
                App Store
              </button>
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <FaGooglePlay className="w-6 h-6 mr-2" />
                Google Play
              </button>
            </div>
          </motion.div>

          <motion.div variants={item} className="relative">
            <div className="relative z-10">
              <div className="w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-blue-500 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-400 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-8 left-8 w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl z-0">
              <div className="w-full h-full bg-blue-500 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-400 rounded-full opacity-80"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
