"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getStreamerBundles, getBrandBundles, faqs, streamerComparison, brandComparison, brandAddOns, streamerAddOns } from "./subscriptionData";
import ComparisonTable from "./ComparisonTable";
import AddOnsTable from "./AddOnsTable";
export default function Pricing() {
  const [planType, setPlanType] = useState("streamer")

  const streamerPlans = getStreamerBundles();
  const brandPlans = getBrandBundles();

  // function to split tiers into rows dynamically
  const splitIntoRows = (items, perRowOptions = [3, 2]) => {
    const rows = [];
    let i = 0;
  
    while (i < items.length) {
      const remaining = items.length - i;
  
      const perRow =
        remaining >= perRowOptions[0]
          ? perRowOptions[0]
          : perRowOptions.includes(remaining)
          ? remaining
          : perRowOptions[1];
  
      rows.push(items.slice(i, i + perRow));
      i += perRow;
    }
  
    return rows;
  };


  const streamerBundles = getStreamerBundles();
  const brandBundles = getBrandBundles();
  const currentTiers = planType === "streamer" ? streamerBundles:  brandBundles;
  const addOns = planType === "streamer" ? streamerAddOns : brandAddOns;

  return (
    <main className=" text-white min-h-screen paragraph">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
        <motion.h1
          className="text-5xl font-bold mb-6 hero-heading text-[var(--primary-colour)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Plans and Pricing
        </motion.h1>
        <motion.p
          className="text-lg  max-w-3xl mx-auto section-subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We want to empower every creator to reach their audience across multiple platforms. From individuals to
          businesses, we have a plan that fits your streaming needs.
        </motion.p>

        {/* Plan Type Toggle */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-[gray] p-1 rounded-full inline-flex">
            <button
              onClick={() => setPlanType("streamer")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                planType === "streamer" ? "bg-[var(--primary-colour)] text-white" : "text-white hover:text-white"
              }`}
            >
              Streamer
            </button>
            <button
              onClick={() => setPlanType("brand")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                planType === "brand"
                  ? "bg-[var(--primary-colour)] text-white"
                  : "text-white hover:text-white"
              }`}
            >
              Brand
            </button>
          </div>
        </motion.div>
      </div>

      <section className="max-w-6xl mx-auto px-4 pb-10">
      <div className="text-center flex flex-col items-center justify-center">
  <h2 className="text-2xl font-bold text-[var(--primary-colour)]">
    {planType === "streamer" ? "Streamer Plans" : "Brand Plans"}
  </h2>
  <p className="text-lg mb-8 section-subheading" >
    {planType === "streamer"
      ? "For influencers and individual sellers who want to Stream, Sell and Earn."
      : "For businesses that want to sell through livestreamers and manage sales operations"}
  </p>
</div>

{splitIntoRows(currentTiers).map((row, rowIndex) => (
  <div key={rowIndex} className={`grid grid-cols-1 md:grid-cols-${row.length} gap-6 mb-8`}>
    {row.map((tier, index) => (
      <motion.div
        key={tier.name}
        className={`rounded-xl overflow-hidden ${
          tier.highlight ? "border-2 border-[var(--accent-colour)]" : "border border-gray-200"
        } bg-white shadow-sm`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {tier.popular && (
          <div className="bg-[var(--accent-colour)] text-white text-center py-1 text-sm font-medium">Popular</div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--accent-colour)]" style={{letterSpacing:2}}>{tier.name}</h3>
          <div className="mt-2 mb-1 flex items-baseline">
            <span className="text-4xl font-bold text-gray-800">{tier.price}</span>
          </div>
          <p className="text-gray-600 mb-6">{tier.description}</p>

          <div className="space-y-4 mb-8">
            {tier.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start">
                {feature.available ? (
  <Check className="h-5 w-5 text-[#30d0b7] flex-shrink-0 mt-0.5" />
) : (
  
  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
)}

                <span className="ml-3 text-sm text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>


          <button
              className={`w-full py-2 px-4 rounded-md flex items-center justify-center space-x-2 text-sm font-medium transition-colors ${
                tier.highlight
                  ? "bg-[var(--accent-colour)] text-white hover:bg-[#EF6136]"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
            <span>{tier.trialText}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    ))}
  </div>
))}

      </section>

            {/* Comparison Table */}
            <section className="max-w-7xl mx-auto px-4 pb-20">
            <ComparisonTable
  title={planType === "streamer" ? streamerComparison.title : brandComparison.title}
  columns={planType === "streamer" ? streamerComparison.columns : brandComparison.columns}
  rows={planType === "streamer" ? streamerComparison.rows : brandComparison.rows}
/>

<AddOnsTable
  title="Add-Ons"
  addons={planType === "streamer" ? streamerAddOns : brandAddOns.rows.map(([name, price, description]) => ({
    name,
    price,
    description
  }))}
/>

      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-center text-[var(--primary-colour)]">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border   border-gray-200 rounded-lg overflow-hidden bg-[#FFFFFF]"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-[var(--primary-colour)] hover:no-underline" style={{letterSpacing: 1}}>
                <span className="text-lg font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

          {/* contact section */}
          <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--primary-colour)]"  >Ready to Grow Your Streaming Business?</h2>
        <p className="text-lg mb-8 section-subheading">
          Join thousands of creators and brands already using our platform to boost their sales and reach.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-[var(--accent-colour)] text-white rounded-md font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-md font-medium hover:bg-gray-100 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
      <Footer />
    </main>
  )
}
