"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Info, BarChart3, ShoppingCart, Users } from "lucide-react"

export default function CreatorPortalGuide() {
  const [activeSection, setActiveSection] = useState("inventory")

  const sections = [
    { id: "inventory", name: "Inventory Management", icon: <ShoppingCart className="h-5 w-5" /> },
    { id: "crm", name: "CRM System", icon: <Users className="h-5 w-5" /> },
    { id: "analytics", name: "Analytics Dashboard", icon: <BarChart3 className="h-5 w-5" /> },
  ]

  const guides = {
    inventory: {
      title: "Inventory Management",
      description: "Learn how to effectively manage your product inventory through the Adtro Creator Portal.",
      sections: [
        {
          title: "Adding Products",
          steps: [
            "Navigate to the 'Inventory' tab in your Creator Portal",
            "Click the '+ Add Product' button in the top right corner",
            "Fill in the product details including name, description, price, and images",
            "Set inventory quantity and SKU information",
            "Click 'Save' to add the product to your inventory",
          ],
          image: "/placeholder.svg?height=300&width=500",
          imageWidth: 500,
        },
        {
          title: "Managing Stock Levels",
          steps: [
            "Go to the 'Inventory' tab in your Creator Portal",
            "View your current stock levels in the inventory overview",
            "Click on a product to update its stock quantity",
            "Use the bulk edit feature to update multiple products at once",
            "Set up low stock alerts to be notified when inventory is running low",
          ],
          image: "/placeholder.svg?height=300&width=500",
          imageWidth: 500,
        },
        {
          title: "Creating Product Collections",
          steps: [
            "Navigate to the 'Collections' section under 'Inventory'",
            "Click 'Create New Collection' and give it a name",
            "Add products to your collection by selecting them from your inventory",
            "Arrange the display order of products within the collection",
            "Publish your collection to make it available during your streams",
          ],
          image: "/placeholder.svg?height=300&width=500",
          imageWidth: 500,
        },
      ],
    },
    crm: {
      title: "Customer Relationship Management",
      description: "Discover how to use Adtro's CRM system to manage customer relationships and boost sales.",
      sections: [
        {
          title: "Viewing Customer Profiles",
          steps: [
            "Access the 'Customers' tab in your Creator Portal",
            "Browse through your customer list or use the search function to find specific customers",
            "Click on a customer name to view their detailed profile",
            "Review purchase history, engagement metrics, and contact information",
            "Add notes to customer profiles for future reference",
          ],
          image: "/placeholder.svg?height=300&width=500",
          imageWidth: 500,
        },
        {
          title: "Creating Customer Segments",
          steps: [
            "Go to the 'Segments' section under 'Customers'",
            "Click 'Create New Segment' to start defining a customer group",
            "Set criteria for your segment (e.g., purchase frequency, total spend, location)",
            "Name your segment and save it",
            "Use segments for targeted marketing campaigns and special offers",
          ],
          image: "/placeholder.svg?height=300&width=500",
          imageWidth: 500,
        },
        {
          title: "Managing Customer Communications",
          steps: [
            "Navigate to the 'Communications' section in the CRM tab",
            "Create email or notification templates for different purposes",
            "Select a customer segment to target with your communication",
            "Schedule your communication or send it immediately",
            "Track open rates and engagement with your communications",
          ],
          image: "/placeholder.svg?height=300&width=500",
          imageWidth: 500,
        },
      ],
    },
    analytics: {
      title: "Analytics Dashboard",
      description: "Learn how to interpret and leverage data from your streams to improve performance and sales.",
      sections: [
        {
          title: "Understanding Stream Performance",
          steps: [
            "Access the 'Analytics' tab in your Creator Portal",
            "View key metrics such as viewer count, engagement rate, and watch time",
            "Compare performance across different streams and platforms",
            "Identify peak viewing times and audience demographics",
            "Use insights to optimize future stream scheduling and content",
          ],
          image: "/placeholder.svg?height=300&width=500",
          imageWidth: 500,
        },
        {
          title: "Sales Analytics",
          steps: [
            "Navigate to the 'Sales' section under 'Analytics'",
            "Review revenue data, conversion rates, and average order value",
            "Identify top-selling products and peak sales periods",
            "Analyze the correlation between engagement and sales",
            "Export reports for further analysis or record-keeping",
          ],
          image: "/placeholder.svg?height=300&width=500",
          imageWidth: 500,
        },
        {
          title: "Setting and Tracking Goals",
          steps: [
            "Go to the 'Goals' section in the Analytics dashboard",
            "Create new goals for viewers, engagement, or sales",
            "Set timeframes and target values for your goals",
            "Track progress through visual indicators and percentage completion",
            "Receive notifications when goals are achieved or at risk",
          ],
          image: "/placeholder.svg?height=300&width=500",
          imageWidth: 500,
        },
      ],
    },
  }

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="section-heading mb-4">Mastering the Creator Portal</h2>
        <p className="paragraph max-w-3xl mx-auto">
          Learn how to use all the powerful features of the Adtro Creator Portal to manage your inventory, customer
          relationships, and analyze your performance.
        </p>
      </div>

      <Tabs defaultValue="inventory" className="w-full" onValueChange={setActiveSection}>
        <TabsList className="flex flex-wrap justify-center gap-3 mb-10 bg-transparent">
          {sections.map((section) => (
            <TabsTrigger
              key={section.id}
              value={section.id}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-[var(--primary-colour)] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {section.icon}
              {section.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(guides).map((sectionId) => (
          <TabsContent key={sectionId} value={sectionId} className="mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${sectionId}-content`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-lg rounded-xl overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="p-6 bg-gradient-to-r from-[var(--primary-colour)] to-[#2e80b6]">
                      <h3 className="text-2xl font-semibold text-white">{guides[sectionId].title}</h3>
                      <p className="text-white/80 mt-2">{guides[sectionId].description}</p>
                    </div>

                    <div className="p-6">
                      <div className="space-y-16">
                        {guides[sectionId].sections.map((section, index) => (
                          <div key={index} className="relative">
                            <div className="space-y-6">
                              <h4 className="text-xl font-semibold text-[var(--primary-colour)] flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[var(--primary-colour)] text-white flex items-center justify-center font-bold text-sm">
                                  {index + 1}
                                </div>
                                {section.title}
                              </h4>

                              <div className="bg-[var(--white-smoke-2)] p-6 rounded-lg">
                                <ol className="space-y-3">
                                  {section.steps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="flex items-start gap-3">
                                      <div className="w-6 h-6 rounded-full bg-[var(--steel-blue)] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                        {stepIndex + 1}
                                      </div>
                                      <p className="paragraph">{step}</p>
                                    </li>
                                  ))}
                                </ol>
                              </div>

                              <motion.div
                                className="mt-4 flex justify-center bg-gray-50 p-4 rounded-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                              >
                                <img
                                  src={section.image || "/placeholder.svg"}
                                  alt={section.title}
                                  width={section.imageWidth}
                                  className="rounded-md shadow-md"
                                />
                              </motion.div>
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

      <div className="bg-[var(--white-smoke-2)] p-6 rounded-xl mt-12 border-l-4 border-[var(--steel-blue)]">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-[var(--steel-blue)]" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--primary-colour)] mb-2">Need More Help?</h3>
            <p className="paragraph mb-4">
              If you need additional assistance with the Creator Portal, our support team is here to help.
            </p>
            <p className="paragraph">
              Contact us at <span className="text-[var(--primary-colour)] font-semibold">support@adtromedia.com</span>{" "}
              or use the live chat feature in the Creator Portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

