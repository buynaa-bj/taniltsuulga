"use client";
import React from 'react'
import { motion } from "framer-motion"

const reviews = [
  {
    text:
      "We have worked with appy.io as we have grown and evolved, appy has created all of our profit. What I value most about our relationship is that appy knows us and our business.",
    name: "Naya Smith",
  },
  {
    text:
      "We have worked with appy.io as we have grown and evolved, appy has created all of our profit. What I value most about our relationship is that appy knows us and our business.",
    name: "Jessy Arthur",
  },
  {
    text:
      "We have worked with appy.io as we have grown and evolved, appy has created all of our profit. What I value most about our relationship is that appy knows us and our business.",
    name: "Ninia Jonson",
  },
];

export const ReviewsSection = () => {
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
    <section id="reviews" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          User Reviews
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          What our users say about us
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reviews.map((review, idx) => (
            <motion.div
              variants={item}
              key={idx}
              className="bg-gray-100 rounded-2xl p-6"
            >
              <p className="text-gray-700 mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-center mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="font-semibold text-gray-800">{review.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
