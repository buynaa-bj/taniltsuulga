"use client";
import { motion } from "framer-motion"

export const Footer = () => {
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
    <footer className="bg-gray-800 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Subscribe To Get Updates
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Stay updated with our latest news and features
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.input 
            type="email" 
            placeholder="E-mail Address" 
            className="px-6 py-4 rounded-lg text-gray-800 w-full sm:w-80"
            variants={item}
          />
          <motion.button 
            className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            variants={item}
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>
        
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-400">© 2017 Appy Crafted With ❤️ By Zytheme.Com</p>
        </motion.div>
      </div>
    </footer>
  )
}
