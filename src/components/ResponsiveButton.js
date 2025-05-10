"use client"

import { motion } from "framer-motion"



const ResponsiveButton = ({ text }) => {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-black bg-gradient-to-r from-green-300 to-green-500 rounded-md shadow-md group"
      
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
      <span className="relative font-bold">{text}</span>
    </motion.button>
  )
}

export default ResponsiveButton
