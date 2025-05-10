"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import ResponsiveButton from "./responsive-button"
import ResponsiveButton from "./ResponsiveButton";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 z-0" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 bg-repeat opacity-10 z-0"
        
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12 md:gap-16 pt-2">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left px-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="block">Dev Raj</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
              Verma
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            A passionate Full Stack Developer with a focus on building clean, user-friendly, and efficient web applications.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#case-studies">
              <ResponsiveButton text="Let's get Started" />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-300 to-green-500 rounded-full blur-lg opacity-70"></div>

            {/* Main image with border */}
            <div className="relative">
              <img
                src="/profile-pic.jpg"
                alt="Dev Raj Verma"
                className="rounded-full w-56 h-56 sm:w-72 sm:h-72 object-cover border-4 border-white/10 shadow-2xl"
              />

              
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isVisible ? 0.7 : 0, y: isVisible ? 0 : -10 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
