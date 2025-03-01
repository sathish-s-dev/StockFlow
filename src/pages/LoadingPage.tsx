"use client";

import { motion } from "motion/react";

const SLoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.svg
        width="150"
        height="150"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Glowing Background Effect */}
        <motion.filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </motion.filter>

        {/* Glowing S Path */}
        <motion.path
          d="M70 20C50 10 20 20 20 40C20 60 80 60 80 80C80 90 60 90 50 90C30 90 20 80 20 80"
          stroke="url(#neonGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="150"
          strokeDashoffset="150"
          filter="url(#glow)"
          animate={{
            strokeDashoffset: [150, 0, 150],
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />

        {/* Neon Gradient for Stroke */}
        <defs>
          <linearGradient id="neonGradient" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#00FF88" />
            <stop offset="100%" stopColor="#FF00FF" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default SLoadingScreen;
