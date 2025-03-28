"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function LearnCards() {
  return (
    <div className="hero-section centered">
      <div className="container-6 w-container flex justify-center self-center items-stretch max-w-full">
        <motion.div
          className="container-7 flex justify-center self-center items-center max-w-[40%] min-h-[50vh] mx-[5px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="text-block header">Stream Keys</div>
            <div className="text-block smalltext">Find out how to connect to various platforms using Adtro </div>
            <Button className="button-2 cursor-pointer bg-[#ef7636] border border-red-500 rounded-full mt-[18px] px-[30px] font-['Poppins',sans-serif] font-bold">
              Let&apos;s Go!
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="container-7 flex justify-center self-center items-center max-w-[40%] min-h-[50vh] mx-[5px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <div className="text-block header">Creator Portal</div>
            <div className="text-block smalltext">
              See detailed statistics and manage better with our Creator Portal!
            </div>
            <Button className="button-2 cursor-pointer bg-[#ef7636] border border-red-500 rounded-full mt-[18px] px-[30px] font-['Poppins',sans-serif] font-bold">
              Let&apos;s Go!
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

