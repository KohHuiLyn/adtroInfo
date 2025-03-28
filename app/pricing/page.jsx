"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("monthly")

  const individualTiers = [
    {
      name: "Free",
      price: { monthly: 0, annually: 0 },
      description: "For getting started.",
      features: [
        "2 Channels for social media streaming",
        "10 products in inventory",
        "Basic templates for overlays",
        "HD video quality (720p)",
        "2 hours of recording storage",
      ],
      cta: "Start Learning",
      popular: false,
      highlight: false,
    },
    {
      name: "Plus",
      price: { monthly: 29.99, annually: 299.99 },
      description: "For more features.",
      features: [
        "3 Channels for social media streaming",
        "50 products in inventory",
        "Custom overlays and backgrounds",
        "Full HD video quality (1080p)",
        "1 day of recording storage",
        "Voucher & seller matching",
        "100 orders per month",
      ],
      cta: "Upgrade to Plus",
      popular: true,
      highlight: true,
    },
    {
      name: "Pro",
      price: { monthly: 49.99, annually: 499.99 },
      description: "For power users.",
      features: [
        "5 Channels for social media streaming",
        "Unlimited inventory management",
        "Custom overlays and backgrounds",
        "Full HD video quality (1080p)",
        "5 days of recording storage",
        "Unlimited order management",
        "Unlimited supplier network access",
      ],
      cta: "Upgrade to Pro",
      popular: false,
      highlight: false,
    },
  ]

  const businessTiers = [
    {
      name: "Biz",
      price: { monthly: 99.99, annually: 999.99 },
      description: "For collaborative teams.",
      features: [
        "8 Channels for social media streaming",
        "Team access for multiple users",
        "Premium templates for overlays",
        "Full HD video quality (1080p)",
        "30 days of recording storage",
        "Unlimited inventory management",
        "Unlimited order management",
        "Unlimited supplier network access",
      ],
      cta: "Start a Business Plan",
      popular: false,
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom Pricing", annually: "Custom Pricing" },
      description: "For larger companies.",
      features: [
        "Custom number of channels",
        "Dedicated account manager",
        "Custom branding solutions",
        "Priority technical support",
        "Extended recording storage",
        "Advanced analytics and reporting",
        "Custom integration options",
        "Training and onboarding",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "What is Adtro Media?",
      answer:
        "Adtro Media is a comprehensive live streaming platform designed for creators and businesses to easily manage multi-platform streaming, product inventory, and sales during live broadcasts.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual plans. For enterprise solutions, we also offer invoice-based payments.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial of our Plus plan for new users. No credit card is required to start your trial.",
    },
    {
      question: "What does 'Multiple Streams to Social Media' mean?",
      answer:
        "This feature allows you to simultaneously broadcast your live stream to multiple platforms (like Facebook, Instagram, YouTube, etc.) at once. The number indicates how many platforms you can stream to simultaneously.",
    },
    {
      question: "How does the Recording Storage work?",
      answer:
        "Recording Storage refers to how long we store your past live streams on our servers. For example, with the Free plan, we store 2 hours of your past streams, while with the Biz plan, we store up to 30 days of streaming content.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your current plan until the end of your billing period.",
    },
  ]

  return (
    <main className=" text-white min-h-screen paragraph">
      <Navbar />

      {/* Hero Section */}
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

        {/* Billing Toggle */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-[gray] p-1 rounded-full inline-flex">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "monthly" ? "bg-[var(--primary-colour)] text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annually")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "annually"
                  ? "bg-[var(--primary-colour)] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annually <span className="text-xs font-bold text-[var(--salmon)]">Save 20%</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Individual Plans Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-8">For Individuals</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {individualTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`rounded-xl overflow-hidden ${
                tier.highlight ? "border-2 border-[var(--accent-colour)]" : "border border-[#333333]"
              } bg-[#1e1e1e]`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tier.popular && (
                <div className="bg-[var(--accent-colour)] text-black text-center py-1 text-sm font-medium">Popular</div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-2 mb-1 flex items-baseline">
                  <span className="text-4xl font-bold">
                    {typeof tier.price[billingPeriod] === "number" ? "$" : ""}
                    {tier.price[billingPeriod]}
                  </span>
                  {typeof tier.price[billingPeriod] === "number" && tier.price[billingPeriod] > 0 && (
                    <span className="text-gray-400 ml-1">/{billingPeriod === "monthly" ? "month" : "year"}</span>
                  )}
                </div>
                <p className="text-gray-400 mb-6">{tier.description}</p>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-[#30d0b7] flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-2 px-4 rounded-full flex items-center justify-center space-x-2 text-sm font-medium transition-colors ${
                    tier.highlight
                      ? "bg-[var(--accent-colour)] text-white hover:bg-[#EF6136]"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Plans Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-8">For Teams and Companies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businessTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="rounded-xl overflow-hidden border border-[#333333] bg-[#1e1e1e]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-2 mb-1 flex items-baseline">
                  <span className="text-4xl font-bold">
                    {typeof tier.price[billingPeriod] === "number" ? "$" : ""}
                    {tier.price[billingPeriod]}
                  </span>
                  {typeof tier.price[billingPeriod] === "number" && tier.price[billingPeriod] > 0 && (
                    <span className="text-gray-400 ml-1">/{billingPeriod === "monthly" ? "month" : "year"}</span>
                  )}
                </div>
                <p className="text-gray-400 mb-6">{tier.description}</p>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-[#30d0b7] flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-2 px-4 rounded-full flex items-center justify-center space-x-2 text-sm font-medium transition-colors bg-white text-black hover:bg-gray-200">
                  <span>{tier.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Full Feature Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#333333]">
                <th className="py-4 px-4 text-left text-gray-400 font-medium">Features</th>
                <th className="py-4 px-4 text-center text-white font-medium">Free</th>
                <th className="py-4 px-4 text-center text-white font-medium">Plus</th>
                <th className="py-4 px-4 text-center text-white font-medium">Pro</th>
                <th className="py-4 px-4 text-center text-white font-medium">Biz</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Team Access</td>
                <td className="py-4 px-4 text-center text-gray-400">-</td>
                <td className="py-4 px-4 text-center text-gray-400">-</td>
                <td className="py-4 px-4 text-center text-gray-400">-</td>
                <td className="py-4 px-4 text-center text-[#30d0b7]">✓</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Multiple Streams to Social Media</td>
                <td className="py-4 px-4 text-center text-gray-300">2 Channels</td>
                <td className="py-4 px-4 text-center text-gray-300">3 Channels</td>
                <td className="py-4 px-4 text-center text-gray-300">5 Channels</td>
                <td className="py-4 px-4 text-center text-gray-300">8 Channels</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Voucher Management</td>
                <td className="py-4 px-4 text-center text-gray-400">-</td>
                <td className="py-4 px-4 text-center text-[#30d0b7]">✓</td>
                <td className="py-4 px-4 text-center text-[#30d0b7]">✓</td>
                <td className="py-4 px-4 text-center text-[#30d0b7]">✓</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Order Management</td>
                <td className="py-4 px-4 text-center text-gray-400">-</td>
                <td className="py-4 px-4 text-center text-gray-300">100/month</td>
                <td className="py-4 px-4 text-center text-gray-300">Unlimited</td>
                <td className="py-4 px-4 text-center text-gray-300">Unlimited</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Delivery Arrangement</td>
                <td className="py-4 px-4 text-center text-gray-300">10/month</td>
                <td className="py-4 px-4 text-center text-gray-300">100/month</td>
                <td className="py-4 px-4 text-center text-gray-300">Unlimited</td>
                <td className="py-4 px-4 text-center text-gray-300">Unlimited</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Supplier Network Access</td>
                <td className="py-4 px-4 text-center text-gray-400">-</td>
                <td className="py-4 px-4 text-center text-gray-300">10 products</td>
                <td className="py-4 px-4 text-center text-gray-300">Unlimited</td>
                <td className="py-4 px-4 text-center text-gray-300">Unlimited</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Seller Matching</td>
                <td className="py-4 px-4 text-center text-gray-400">-</td>
                <td className="py-4 px-4 text-center text-[#30d0b7]">✓</td>
                <td className="py-4 px-4 text-center text-[#30d0b7]">✓</td>
                <td className="py-4 px-4 text-center text-[#30d0b7]">✓</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Inventory Management</td>
                <td className="py-4 px-4 text-center text-gray-300">10 Products</td>
                <td className="py-4 px-4 text-center text-gray-300">50 Products</td>
                <td className="py-4 px-4 text-center text-gray-300">Unlimited</td>
                <td className="py-4 px-4 text-center text-gray-300">Unlimited</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Recording Storage</td>
                <td className="py-4 px-4 text-center text-gray-300">2 Hours</td>
                <td className="py-4 px-4 text-center text-gray-300">1 Day</td>
                <td className="py-4 px-4 text-center text-gray-300">5 Days</td>
                <td className="py-4 px-4 text-center text-gray-300">30 Days</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Video Quality</td>
                <td className="py-4 px-4 text-center text-gray-300">HD, 720p</td>
                <td className="py-4 px-4 text-center text-gray-300">Full HD, 1080p</td>
                <td className="py-4 px-4 text-center text-gray-300">Full HD, 1080p</td>
                <td className="py-4 px-4 text-center text-gray-300">Full HD, 1080p</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="py-4 px-4 text-left text-gray-300">Overlays and Background</td>
                <td className="py-4 px-4 text-center text-gray-300">Basic Template</td>
                <td className="py-4 px-4 text-center text-[#30d0b7]">✓</td>
                <td className="py-4 px-4 text-center text-[#30d0b7]">✓</td>
                <td className="py-4 px-4 text-center text-gray-300">Premium Template</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-[#333333] rounded-lg overflow-hidden bg-[#1e1e1e]"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-white hover:no-underline">
                <span className="text-lg font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-300">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#1e1e1e] border-t border-[#333333]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to take your streaming to the next level?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are growing their audience and increasing sales with Adtro Media.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#30d0b7] text-black py-2 px-6 rounded-full font-medium hover:bg-[#25a590] transition-colors">
              Start Free Trial
            </button>
            <button className="bg-transparent text-white py-2 px-6 rounded-full font-medium border border-white hover:bg-white/10 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

