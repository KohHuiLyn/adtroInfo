"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import StreamKeyGuide from "@/components/stream-key-guide"
import CreatorPortalGuide from "@/components/creator-portal-guide"

export default function LearnNavigation() {
  const [activeTab, setActiveTab] = useState("stream-keys")

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="stream-keys" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full flex justify-center mb-12 bg-transparent">
            <TabsTrigger
              value="stream-keys"
              className={`button ${activeTab === "stream-keys" ? "bg-[#ef7636]" : "bg-[#92a0ad]"} mx-2 px-8 py-3 rounded-md transition-colors duration-300`}
            >
              Stream Keys
            </TabsTrigger>
            <TabsTrigger
              value="creator-portal"
              className={`button ${activeTab === "creator-portal" ? "bg-[#ef7636]" : "bg-[#92a0ad]"} mx-2 px-8 py-3 rounded-md transition-colors duration-300`}
            >
              Creator Portal
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="stream-keys" className="mt-0">
              <motion.div
                key="stream-keys-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <StreamKeyGuide />
              </motion.div>
            </TabsContent>

            <TabsContent value="creator-portal" className="mt-0">
              <motion.div
                key="creator-portal-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* <CreatorPortalGuide /> */}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}

