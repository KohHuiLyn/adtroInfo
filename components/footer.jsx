"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <>
<div className="footer">
  <div className="w-container">
    <div className="div-block-16 flex flex-col md:flex-row justify-center items-start gap-12 text-left mx-auto max-w-5xl">
      {/* Acknowledgements */}
      <motion.div
        className="div-block-15 acknowledgment flex-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="section-heading heading acknowledgements">Acknowledgements</h3>
        <p className="paragraph acknowledgements">
          This website uses assets from @tirachardz @benzoix @Racool_studio @master1305 on FreePik.
        </p>
      </motion.div>

      {/* Contact Us */}
      <motion.div
        className="div-block-15 acknowledgment flex-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="section-heading heading acknowledgements">Contact Us</h3>
        <p className="paragraph acknowledgements">
          Email: <span className="text-span-3">contact@adtro.com</span>
        </p>
      </motion.div>

      {/* Legal */}
      <motion.div
        className="div-block-15 acknowledgment flex-[0.7]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="section-heading heading acknowledgements">Legal</h3>
        <p className="paragraph acknowledgements">
          {/* <Link href="https://www.privacypolicies.com/live/04f6f3fc-5401-4713-8d95-e4859deacef6" className="link text-[#9dd9f3]"> */}
          <Link href="/privacyPolicy" className="link text-[#9dd9f3]">
            Terms of Use
            <br />
            Privacy Policy
          </Link>
        </p>
      </motion.div>
    </div>
  </div>
</div>


      <div className="footer center">
        <div className="w-container">
          <div className="div-block-17 flex justify-center items-center">
            <div className="div-block-18 mr-5  md:self-center">
              <motion.img
                src="/images/dark_logo-1.png"
                loading="lazy"
                width="106"
                className="image-4 block max-h-full"
              />
            </div>
            <div className="footer-text">
              Copyright © {new Date().getFullYear()} Adtro Media All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
