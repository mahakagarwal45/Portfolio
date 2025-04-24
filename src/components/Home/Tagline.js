import React from 'react';
import { motion } from 'framer-motion';

// Hero section component with animated tagline
export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-2xl px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building intelligent tech, fueled by AI,
        </motion.h1>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-indigo-400"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          driven by purpose — one real-world problem at a time
        </motion.h1>
        
      </div>
    </section>
  );
}
