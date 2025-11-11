"use client";
import React from 'react'
import { motion } from "framer-motion";

// Өөрчлөлт: bg зураг хэрэглэн, blur, fixed байрлалтай, зөөврийн anim-гүй
export const WorksSection = () => {
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

  // BG зурган линкийг өөрчлөв (шинэ зураг хэрэглэв)
  const bgImageUrl =
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80";

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* BACKGROUND IMAGE: fixed, blur, fade дэвсгэртэй */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-0"
        aria-hidden="true"
        style={{}}
      >
        {/* <div
  className="absolute inset-0 w-full h-full bg-center bg-cover blur-sm brightness-75"
  style={{
    backgroundImage: `url('${bgImageUrl}')`,
    filter: 'blur(12px) brightness(0.85)',
  }}
></div> */}
      </div>

      {/* Content хэсэг, absolute биш тул scroll хийхэд bg зураг хөдөлдөггүй */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          How Does It Work?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Simple steps to get started
        </motion.p>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.13, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-80 h-48 bg-black rounded-2xl mx-auto p-2 bg-opacity-60">
            <div className="w-full h-full bg-blue-500 rounded-xl flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
                alt="Work Step Illustrative"
                className="w-24 h-24 rounded-full object-cover opacity-80"
                draggable={false}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={item} className="text-center">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Download Appy
            </h3>
            <p className="text-gray-600">
              Get the app from App Store or Google Play store.
            </p>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Install & Sign Up
            </h3>
            <p className="text-gray-600">
              Create your account and complete the setup process.
            </p>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Upload Your Images
            </h3>
            <p className="text-gray-600">
              Start uploading and organizing your photos and videos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
