"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function StreamKeyGuide() {
  const [activePlatform, setActivePlatform] = useState("facebook")

  const platforms = [
    { id: "facebook", name: "Facebook", color: "#1877F2" },
    { id: "instagram", name: "Instagram", color: "#C13584" },
    { id: "shopee", name: "Shopee", color: "#EE4D2D" },
    { id: "tiktok", name: "TikTok", color: "#000000" },
    { id: "youtube", name: "YouTube", color: "#FF0000" },
  ]

  const guides = {
    facebook: {
      title: "Connecting to Facebook Live",
      steps: [
        {
          title: "Access Facebook Live Producer",
          description: "Go to Facebook and click on 'Live Video', then select 'Streaming Software'.",
          image: "/images/facebook2.png",
          imageWidth: 330,
        },
        {
          title: "Copy Your Stream Key",
          description:
            "Copy the stream key provided by Facebook. Make sure to enable 'Persistent stream key' so it doesn't reset after each stream.",
          image: "/images/stream_key.jpg",
          imageWidth: 383,
        },
        {
          title: "Enter Stream Key in Adtro",
          description: "Paste the stream key into either Adtro App or Adtro Creator Portal.",
          image: "/images/stream_key.jpg",
          imageWidth: 383,
        },
        {
          title: "Go Live",
          description:
            "Once Facebook receives the input, the 'Go Live' button will be activated. Add a title/description if desired, then click to start your stream.",
          image: "/images/facebook3.png",
          imageWidth: 418,
        },
      ],
    },
    instagram: {
      title: "Connecting to Instagram Live",
      steps: [
        {
          title: "Start Instagram Live Setup",
          description:
            "Go to Instagram and click on Create > Live video. Add a title and choose your preferred live mode.",
          image: "/images/instagram1.png",
          imageWidth: 245,
        },
        {
          title: "Get Your Stream Key",
          description: "Instagram will provide you with a stream key for your broadcast.",
          image: "/images/instagram2.png",
          imageWidth: 323,
        },
        {
          title: "Enter Stream Key in Adtro",
          description: "Copy Instagram's stream key into either Adtro App or Adtro Creator Portal.",
          image: "/images/stream_key.jpg",
          imageWidth: 383,
        },
        {
          title: "Start Your Broadcast",
          description:
            "Once Instagram receives the video feed, you can click 'Go Live' to start broadcasting to your followers.",
          image: "/images/instagram3.png",
          imageWidth: 488,
        },
      ],
    },
    shopee: {
      title: "Connecting to Shopee Live",
      steps: [
        {
          title: "Access Shopee Live",
          description: "Open the Shopee app and navigate to the Seller Center, then select 'Go Live'.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
        {
          title: "Set Up Your Live Stream",
          description: "Configure your live stream settings and select 'External Streaming'.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
        {
          title: "Copy Stream Key",
          description: "Copy the provided stream key from Shopee.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
        {
          title: "Enter Stream Key in Adtro",
          description: "Paste the stream key into Adtro and start streaming.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
      ],
    },
    tiktok: {
      title: "Connecting to TikTok Live",
      steps: [
        {
          title: "Access TikTok LIVE",
          description: "Open TikTok and tap the '+' button, then select 'LIVE'.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
        {
          title: "Choose External Streaming",
          description: "Select 'External Streaming' option from the LIVE settings.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
        {
          title: "Copy Stream Key",
          description: "Copy the provided stream key and server URL from TikTok.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
        {
          title: "Enter Stream Key in Adtro",
          description: "Paste the stream key into Adtro and start streaming.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
      ],
    },
    youtube: {
      title: "Connecting to YouTube Live",
      steps: [
        {
          title: "Access YouTube Studio",
          description: "Go to YouTube Studio and click on 'Create' > 'Go Live'.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
        {
          title: "Set Up Stream",
          description: "Configure your stream settings and select 'Stream'.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
        {
          title: "Copy Stream Key",
          description: "Copy the stream key provided by YouTube.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
        {
          title: "Enter Stream Key in Adtro",
          description: "Paste the stream key into Adtro and start streaming.",
          image: "/placeholder.svg?height=300&width=300",
          imageWidth: 300,
        },
      ],
    },
  }

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="section-heading mb-4">How to Connect Your Stream Keys</h2>
        <p className="paragraph max-w-3xl mx-auto">
          Follow these step-by-step guides to connect Adtro with your favorite streaming platforms. Select a platform
          below to get started.
        </p>
      </div>

      <Tabs defaultValue="facebook" className="w-full" onValueChange={setActivePlatform}>
        <TabsList className="flex flex-wrap justify-center gap-3 mb-10 bg-transparent">
          {platforms.map((platform) => (
            <TabsTrigger
              key={platform.id}
              value={platform.id}
              className={`px-6 py-3 rounded-full transition-all duration-300 border-2 paragraph ${
                activePlatform === platform.id
                  ? `text-white bg-[${platform.color}] border-[${platform.color}]`
                  : "text-[var(--primary-colour)] text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
              style={{
                backgroundColor: activePlatform === platform.id ? platform.color : "white",
                color: activePlatform === platform.id ? "white" : "#4B5563",
                borderColor: activePlatform === platform.id ? platform.color : "#E5E7EB",
              }}
            >
              {platform.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(guides).map((platformId) => (
          <TabsContent key={platformId} value={platformId} className="mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${platformId}-content`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-lg rounded-xl overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold section-subheading">{guides[platformId].title}</h3>
                    </div>

                    <div className="p-6">
                      <div className="space-y-12">
                        {guides[platformId].steps.map((step, index) => (
                          <div key={index} className="relative">
                            {index < guides[platformId].steps.length - 1 && (
                                <div
                                    className="absolute left-6 top-12 bottom-0 w-0.5 z-0 hidden md:block"
                                    style={{ backgroundColor: platforms.find((p) => p.id === platformId)?.color }}
                                    ></div>

                              
                            )}

                            <div className="flex flex-col md:flex-row gap-6 relative z-10">
                              <div className="flex-shrink-0 flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-[var(--primary-colour)] text-white flex items-center justify-center font-bold text-xl"
                                
                                style={{ backgroundColor: platforms.find((p) => p.id === platformId)?.color }}>
                                  {index + 1}
                                </div>
                              </div>

                              <div className="flex-grow space-y-4">
                                <h4 className="text-xl font-semibold text-[var(--primary-colour)]">{step.title}</h4>
                                <p className="paragraph text-gray-700">{step.description}</p>

                                <motion.div
                                  className="mt-4 flex justify-center bg-gray-50 p-4 rounded-lg"
                                  whileHover={{ scale: 1.02 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                  <img
                                    src={step.image || "/placeholder.svg"}
                                    alt={step.title}
                                    width={step.imageWidth}
                                    className="rounded-md shadow-md"
                                  />
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>

      {/* <div className="bg-[var(--white-smoke-2)] p-6 rounded-xl mt-12">
        <h3 className="text-xl font-semibold text-[var(--primary-colour)] mb-4">Pro Tips for Streaming</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-[var(--medium-sea-green)] flex-shrink-0 mt-1" />
            <p className="paragraph">
              Always test your stream before going live to ensure everything is working properly.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-[var(--medium-sea-green)] flex-shrink-0 mt-1" />
            <p className="paragraph">Keep your stream keys secure and never share them publicly.</p>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-[var(--medium-sea-green)] flex-shrink-0 mt-1" />
            <p className="paragraph">
              For Facebook and YouTube, enable persistent stream keys to avoid having to update them for each stream.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-[var(--medium-sea-green)] flex-shrink-0 mt-1" />
            <p className="paragraph">
              If you're experiencing issues, try regenerating your stream key as a troubleshooting step.
            </p>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

