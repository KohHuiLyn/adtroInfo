"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div
  className="hero-section centered homepagelanding"

>

      <div className="div-block-3 block w-full justify-center items-center">
        <div className="container w-container">
          <motion.h1
            className="hero-heading diffanim"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sell Anywhere. Connect Everywhere.
          </motion.h1>
          <div className="container w-container">
            <div className="hero-subheading"></div>
            <motion.div
              className="hero-subheading"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Bridging <span className="text-span">the gap</span> between Brands
              <br />
              and Sellers
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

