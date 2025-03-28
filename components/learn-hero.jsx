"use client"

import { motion } from "framer-motion"

export default function LearnHero() {
  return (
    <div className="hero-section centered" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="container w-container max-w-6xl mx-auto px-4">
        <motion.h1
          className="hero-heading noncapitalise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Adtro Learning Center
        </motion.h1>
        <motion.div
          className="hero-subheading learnpage max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Everything you need to know to maximize your streaming potential
        </motion.div>
      </div>
    </div>
  )
}

