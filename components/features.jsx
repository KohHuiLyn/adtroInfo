"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Plane, Lightbulb, Handshake } from "lucide-react"

export default function Features() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section className="section" ref={sectionRef}>
      <div className="container-4 w-container max-w-[90%] mx-auto">
        {/* First Feature Section */}
        <div className="flex flex-col md:flex-row mx-auto mb-[60px] gap-8">
          {/* Image (shows first on mobile) */}
          <div className="w-full md:hidden flex justify-center mb-8">
            <motion.img className="max-w-[80%]" src="/images/mockup.png" style={{ y }} />
          </div>

          {/* Text Content */}
          <div className="w-full md:max-w-[45%] m-auto text-center md:text-left">
            <h2 className="big changer" style={{ color: "#1f1d42" }}>
              Specially Designed for
              <br />
            </h2>
            <div className="text-wrap big flex justify-center md:justify-start">
              <div className="changer-overflow">
                <div className="changer-move big">
                  <div className="changer big">SELLERS</div>
                  <div className="changer big">BRANDS</div>
                  <div className="changer big">SELLERS</div>
                </div>
              </div>
            </div>
            <div
              className="section-subheading"
              style={{
                color: "#1f1d42",
                textAlign: "center",
                marginTop: "10px",
                "@media (minWidth: 768px)": {
                  textAlign: "left",
                },
              }}
            >
              Adtro is a platform designed to bridge the gap between Livesellers and Brands across various creative
              industries. <br />
              <br />
              We&apos;ll help you showcase your skills, connect with potential Brands, and grow your portfolio. <br />
              <br />
              Get ready to discover a world of opportunities, all in one place!
            </div>
          </div>

          {/* Image (hidden on mobile, visible on desktop) */}
          <div className="hidden md:block md:max-w-[45%] md:max-h-[45%]">
            <motion.img className="image-3" src="/images/mockup.png" style={{ y }} />
          </div>
        </div>

        {/* Second Feature Section */}
        <div className="flex flex-col md:flex-row mx-auto mb-[60px] gap-8" >
          {/* Image (shows first on mobile) */}
          <div className="w-full flex justify-center mb-8">
            <motion.img className="max-w-[80%] md:max-w-full" src="/images/main.png" style={{ y }} />
          </div>

<div className="w-full md:max-w-[45%] mx-auto text-center flex flex-col items-center" style={{justifyContent:"center"}}>
  <h2 className="big changer text-center" style={{ color: "#1f1d42" }}>
    ALL-IN-ONE APP!
  </h2>
  <div
    className="section-subheading mt-2"
    style={{ color: "#1f1d42", textAlign: "center" }}
  >
    Stream to multiple platforms with us today! Your livestream statistics, like products sold, viewers, and more, all in one place!
    If you're a brand looking to find sellers, look no further!
    Kickstart your journey with us, and get ready to discover a world of opportunities!
  </div>
</div>


          {/* Image is hidden on desktop for second section since we're showing it at the top for all devices */}
          <div className="hidden md:hidden md:max-w-[45%] md:max-h-[45%]">
            <motion.img className="image-3" src="/images/main.png" style={{ y }} />
          </div>
        </div>

        {/* Feature Cards Section - Added for better mobile experience */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Plane className="h-10 w-10 text-[var(--primary-colour)]" />,
              title: "Seamless Streaming",
              description: "Stream to multiple platforms simultaneously with just a few clicks.",
            },
            {
              icon: <Lightbulb className="h-10 w-10 text-[var(--primary-colour)]" />,
              title: "Smart Inventory",
              description: "Manage your products efficiently during live streams for maximum sales.",
            },
            {
              icon: <Handshake className="h-10 w-10 text-[var(--primary-colour)]" />,
              title: "Brand Connections",
              description: "Connect with brands and grow your network within the platform.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[var(--primary-colour)] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

