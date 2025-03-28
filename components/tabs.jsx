"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("talents")
  const [talentSlide, setTalentSlide] = useState(0)
  const [brandSlide, setBrandslide] = useState(0)
  const liveSellerSlides = [
    {
      img: "/images/tabs/livesellerSlide/seller_applyStreamProducts.png",
      heading: "Apply to help brands live-sell!",
      text: "Connect with Clients and apply for their products or brand streams effortlessly!",
    },
    {
      img: "/images/tabs/livesellerSlide/seller_points.png",
      heading: "Earn More with each product you sell!",
      text: "Complete Orders, Earn a Bonus! Complete liveselling missions to earn bonuses!",
    },
  ]

  const brandSlides = [
    {
      img: "/images/tabs/brandSlide/brand_seePortfolio.png",
      heading: "Find the most suited Liveseller for you!",
      text: "No more browsing through countless social media, now all social media statistics for each liveseller are collated into one place for you!",
    },
  ]

  return (
    <div className="section section-2 display-flex">
      <div className="container-5 w-container max-w-full my-auto flex justify-center items-center">
        <Tabs
          defaultValue="talents"
          className="w-full max-w-4xl" // Reduced max width for the entire tabs component
          onValueChange={setActiveTab}
        >
          <TabsList className="tab-menu text-center mb-10">
            <TabsTrigger
              value="talents"
              style={{
                backgroundColor: activeTab === "talents" ? "#EF7636" : "#92a0ad",
              }}
              className="button tab hover:bg-[#e05f24] mx-2 px-8 py-3 rounded-md"
            >
              FOR TALENTS
            </TabsTrigger>

            <TabsTrigger
              value="clients"
              style={{
                backgroundColor: activeTab === "clients" ? "#EF7636" : "#92a0ad",
              }}
              className="button tab hover:bg-[#e05f24] mx-2 px-8 py-3 rounded-md"
            >
              FOR CLIENTS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="talents" className="mt-0">
            <div className="big-screens hidden md:block">
              <div className="relative flex items-center justify-center">
                {/* Left Arrow */}
                <button
                  onClick={() =>
                    setTalentSlide((prev) => (prev - 1 + liveSellerSlides.length) % liveSellerSlides.length)
                  }
                  className="absolute left-0 z-10 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Slide */}
                <div className="w-full max-w-3xl mx-auto">
                  {" "}
                  {/* Reduced width and centered */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={talentSlide}
                      className="div-block-14 flex max-w-full mx-auto mb-10"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.img
                        src={liveSellerSlides[talentSlide].img}
                        alt=""
                        className="fullwidth-image w-full min-w-[50%] max-w-[50%] h-full my-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      />
                      <div className="div-block-15 max-w-[50%] m-auto pl-[30px]">
                        <h3 className="section-heading heading">{liveSellerSlides[talentSlide].heading}</h3>
                        <p className="paragraph">{liveSellerSlides[talentSlide].text}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => setTalentSlide((prev) => (prev + 1) % liveSellerSlides.length)}
                  className="absolute right-0 z-10 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {liveSellerSlides.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 rounded-full ${i === talentSlide ? "bg-blue-600" : "bg-gray-300"}`}
                    onClick={() => setTalentSlide(i)}
                  />
                ))}
              </div>
            </div>

            <div className="small-screens block md:hidden">
              {liveSellerSlides.map((slide, i) => (
                <motion.div
                  key={i}
                  className="div-block-14 flex flex-col items-center justify-center max-w-[90%] mx-auto mb-[30px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full flex justify-center">
                    {" "}
                    {/* Center image container */}
                    <img
                      src={slide.img || "/placeholder.svg"}
                      alt=""
                      className="fullwidth-image w-[70%] h-auto mt-5 mb-4" /* Reduced width to 70% */
                    />
                  </div>
                  <div className="div-block-15 w-full text-center px-4">
                    {" "}
                    {/* Center text content */}
                    <h3 className="section-heading heading">{slide.heading}</h3>
                    <p className="paragraph btm">{slide.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="clients" className="mt-0">
            <div className="big-screens hidden md:block">
              <div className="relative flex items-center justify-center">
                {/* Left Arrow */}
                <button
                  onClick={() => setBrandslide((prev) => (prev - 1 + brandSlides.length) % brandSlides.length)}
                  className="absolute left-0 z-10 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Slide */}
                <div className="w-full max-w-3xl mx-auto">
                  {" "}
                  {/* Reduced width and centered */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={brandSlide}
                      className="div-block-14 flex max-w-full mx-auto mb-10"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.img
                        src={brandSlides[brandSlide].img}
                        alt=""
                        className="fullwidth-image w-full min-w-[50%] max-w-[50%] h-full my-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      />
                      <div className="div-block-15 max-w-[50%] m-auto pl-[30px]">
                        <h3 className="section-heading heading">{brandSlides[brandSlide].heading}</h3>
                        <p className="paragraph">{brandSlides[brandSlide].text}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => setBrandslide((prev) => (prev + 1) % brandSlides.length)}
                  className="absolute right-0 z-10 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {brandSlides.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 rounded-full ${i === brandSlide ? "bg-blue-600" : "bg-gray-300"}`}
                    onClick={() => setBrandslide(i)}
                  />
                ))}
              </div>
            </div>

            <div className="small-screens block md:hidden my-auto">
              {brandSlides.map((slide, i) => (
                <motion.div
                  key={i}
                  className="div-block-14 flex flex-col items-center justify-center max-w-[90%] mx-auto mb-[30px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full flex justify-center">
                    {" "}
                    {/* Center image container */}
                    <img
                      src={slide.img || "/placeholder.svg"}
                      alt=""
                      className="fullwidth-image w-[70%] h-auto mt-5 mb-4" /* Reduced width to 70% */
                    />
                  </div>
                  <div className="div-block-15 w-full text-center px-4">
                    {" "}
                    {/* Center text content */}
                    <h3 className="heading section-heading">{slide.heading}</h3>
                    <p className="paragraph btm">{slide.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

