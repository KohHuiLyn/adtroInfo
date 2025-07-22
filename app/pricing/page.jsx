"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getBrandBundles, faqs, brandComparison, brandAddOns } from "./subscriptionData";
import ComparisonTable from "./ComparisonTable";
import AddOnsTable from "./AddOnsTable";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const brandBundles = getBrandBundles(billingCycle);
  const currentTiers = brandBundles;
  const addOns = brandAddOns;

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

  return (
    <main className="text-white min-h-screen paragraph">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
        <motion.h1
          className="text-5xl font-bold mb-6 hero-heading text-[var(--primary-colour)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Brand Plans & Pricing
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto section-subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          For businesses that want to sell through livestreamers and manage sales operations.
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-[gray] p-1 rounded-full inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-[var(--primary-colour)] text-white"
                  : "text-white hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "yearly"
                  ? "bg-[var(--primary-colour)] text-white"
                  : "text-white hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>
      </div>

      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-[var(--primary-colour)]">Brand Plans</h2>
          <p className="text-lg mb-8 section-subheading">
            Compare pricing and features by billing cycle.
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
                  <div className="bg-[var(--accent-colour)] text-white text-center py-1 text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--accent-colour)]" style={{ letterSpacing: 2 }}>
                    {tier.name}
                  </h3>
                  <div className="mt-2 mb-1 flex items-baseline">
                    <span className="text-3xl font-bold text-gray-800">{tier.price}</span>
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
          title={brandComparison.title}
          columns={brandComparison.columns}
          rows={brandComparison.rows}
        />
        <AddOnsTable
          title="Add-Ons"
          addons={addOns.rows.map(([name, price, description]) => ({ name, price, description }))}
        />
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-center text-[var(--primary-colour)]">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-gray-200 rounded-lg overflow-hidden bg-[#FFFFFF]"
            >
              <AccordionTrigger
                className="px-6 py-4 text-left text-[var(--primary-colour)] hover:no-underline"
                style={{ letterSpacing: 1 }}
              >
                <span className="text-lg font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-center text-[var(--primary-colour)]">
            Ready to Grow Your Streaming Business?
          </h2>
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
  );
}
