export const getStreamerBundles = () => [
    {
      id: 1,
      name: "Creator Starter",
      description: "Perfect for beginners",
      price: "14 days free",
      trialText: "Subscribe now for SGD 19/month",
      isFreeTrial: true,
      features: [
        { text: "Multistream to 2 platforms at a time", available: true },
        { text: "Apply to sell on Product Marketplace", available: true },
        { text: "Basic manual order system", available: true },
        { text: "WhatsApp CRM (100 contacts)", available: true },
        { text: "Pay-per-blast Promo Push", available: true },
        { text: "Sales Analytics", available: false },
        { text: "Commission Earnings", available: true },
        { text: "Community Support Access", available: true },
      ],
    },
    {
      id: 2,
      name: "Creator Pro",
      description: "For growing influencers",
      price: "SGD 69/mo",
      trialText: "Subscribe now for SGD 69/month",
      isFreeTrial: false,
      features: [
        { text: "Multistream up to 3 Platforms at a time", available: true },
        { text: "Product Marketplace + Priority Campaigns", available: true },
        { text: "Auto order + payment link", available: true },
        { text: "WhatsApp CRM (1,000 contacts + bulk tools)", available: true },
        { text: "Pay-per-blast Promo Push", available: true },
        { text: "Basic earnings report", available: true },
        { text: "Commissions Earnings", available: true },
        { text: "Email Support", available: true },
      ],
    },
    {
      id: 3,
      name: "Creator Agency",
      description: "For professional influencer teams",
      price: "SGD 149+/mo",
      trialText: "Subscribe now for SGD 149/month",
      isFreeTrial: false,
      features: [
        { text: "Multistream to unlimited platforms at a time", available: true },
        { text: "Product Marketplace + Manage Streamer Team", available: true },
        { text: "Advanced dashboard for orders", available: true },
        { text: "WhatsApp CRM with multi-account support", available: true },
        { text: "Pay-per-blast Promo Push (discounted)", available: true },
        { text: "Full performance insights", available: true },
        { text: "Commission Earnings + Custom commission management", available: true },
        { text: "Priority Support + Success Manager", available: true },
      ],
    },
  ];
  
export const getBrandBundles = (planType = "monthly") => {
  const isYearly = planType === "yearly";

  return [
    {
      id: 1,
      name: "Adtro+",
      description: "Perfect for Small Businesses",
      price: isYearly ? "SGD 2,335.80/year" : "SGD 229/month",
      trialText: isYearly ? "14-day free trial" : "14-day free trial",
      isFreeTrial: true,
      features: [
        { text: "Supports 1 outlet", available: true },
        { text: "Inventory management (up to 100 SKUs)", available: true },
        { text: "Access to live streaming & marketing packages", available: true },
        { text: "Basic order system", available: true },
        { text: "Delivery integration", available: true },
        { text: "WhatsApp CRM (3 users)", available: true },
        { text: "Pay-per-blast promo push", available: true },
        { text: "Basic order analytics", available: true },
        { text: "Up to 3 multistream accounts", available: true },
        { text: "Email support", available: true },
      ],
    },
    {
      id: 2,
      name: "Adtro Pro",
      description: "Designed for Growing Businesses",
      price: isYearly ? "SGD 5,599.80/year" : "SGD 549/month",
      trialText: "Contact us for onboarding",
      isFreeTrial: false,
      features: [
        { text: "Supports up to 3 outlets", available: true },
        { text: "Inventory management (up to 2,000 SKUs)", available: true },
        { text: "Access to exclusive live streaming & marketing packages", available: true },
        { text: "Advanced order system with customer data & lead integration", available: true },
        { text: "WhatsApp CRM (10 users)", available: true },
        { text: "Pay-per-blast promo push", available: true },
        { text: "Cross-outlet insights", available: true },
        { text: "POS-integrated advanced workflow", available: true },
        { text: "Dedicated CSM with onboarding support", available: true },
        { text: "Built-in booking system", available: true },
        { text: "Up to 10 multistream accounts", available: true },
      ],
    },
    {
      id: 3,
      name: "Adtro Biz",
      description: "Tailored for Large Enterprises",
      price: "Custom Pricing",
      trialText: "Contact us for a quote",
      isFreeTrial: false,
      features: [
        { text: "Unlimited outlets", available: true },
        { text: "Unlimited SKUs with full API integration", available: true },
        { text: "Access to private streamer network", available: true },
        { text: "Full-funnel performance tracking", available: true },
        { text: "Custom roles & permission controls", available: true },
        { text: "API-integrated pay-per-blast", available: true },
        { text: "Exportable ROI dashboards", available: true },
        { text: "POS-integrated advanced workflow", available: true },
        { text: "Dedicated CSM with onboarding support", available: true },
      ],
    },
  ];
};

  

    
  export const faqs = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "We offer a 14-day free trial for all our paid plans. No credit card required to start.",
    },
    {
      question: "How does the WhatsApp CRM work?",
      answer:
        "Our WhatsApp CRM allows you to manage customer conversations, send promotional messages, and track orders—all through WhatsApp.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
  ];
  

export const brandComparison = {
  title: "Adtro Plan Features",
  columns: [
    "Feature",
    "Adtro+ (S$229/mo)",
    "Adtro Pro (S$549/mo)",
    "Adtro Biz (Custom Pricing)"
  ],
  rows: [
    ["Outlets Supported", "1 outlet", "Up to 3 outlets", "Unlimited"],
    ["Inventory Management", "Up to 100 SKUs", "Up to 2,000 SKUs", "Unlimited + API integration"],
    ["Live Streaming & Marketing", "Access to exclusive packages", "Access to exclusive packages", "Private streamer network"],
    ["Order System", "Basic order system", "Advanced, CRM-integrated", "Full-funnel performance tracking"],
    ["Delivery Integration", "✅", "✅", "✅"],
    ["WhatsApp CRM", "3 users", "10 users", "Custom roles & permissions"],
    ["Promo Push (WhatsApp)", "Pay-per-blast", "Pay-per-blast", "API-integrated pay-per-blast"],
    ["Order Analytics", "Basic analytics", "Cross-outlet insights", "Exportable ROI dashboards"],
    ["Booking System", "❌", "Built-in system", "POS-integrated advanced flow"],
    ["Multistream Accounts", "Up to 3 accounts", "Up to 10 accounts", "Custom limit"],
    ["Support", "Email support", "Dedicated CSM + onboarding", "Dedicated CSM + onboarding"]
  ]
};


export const brandAddOns = {
  title: "Optional Add-Ons",
  subtitle: "Enhance your plan with powerful extensions",
  columns: ["Add-On", "Price", "Details"],
  rows: [
    ["Extra WhatsApp CRM User", "S$10/user/month", "Add more internal team members"],
    ["Influencer Analytics Add-on", "S$49 – S$99/month", "Track campaign performance and creator ROI"],
    ["Custom Integrations", "Custom Pricing", "Tailored API syncs, system integrations, or workflows"],
    ["Enterprise Upgrades", "Custom Pricing", "Bespoke onboarding, features, and scalability options"]
  ]
};


export const streamerComparison = {
  title: "Creator Plans Comparison",
  columns: [
    "Feature",
    "Creator Starter (Free / $19)",
    "Creator Pro ($69/mo)",
    "Creator Agency ($149+/mo)"
  ],
  rows: [
    ["Multistreaming", "1 platform", "Up to 3 platforms", "Unlimited platforms"],
    ["Product Marketplace Access", "Apply to sell", "+ Priority Campaigns", "+ Manage Streamer Team"],
    ["Order System (FB/IG/YT)", "Basic manual order", "Auto order + payment link", "Advanced dashboard"],
    ["WhatsApp CRM", "100 contacts (basic)", "1,000 contacts + bulk tools", "Multi-account support"],
    ["Promo Push (WhatsApp)", "Pay-per-blast", "Pay-per-blast", "Pay-per-blast (discounted)"],
    ["Sales Analytics", false, "Basic earnings report", "Full performance insights"],
    ["Commission Earnings", true, true, "+ Custom commission mgmt"],
    ["Support", "Community access", "Email support", "Priority + Success Manager"]
  ]
};

export const streamerAddOns = [
  {
    name: "Extra CRM User",
    price: "$10/user/month",
    description: "Add additional users to your WhatsApp CRM",
  },
  {
    name: "WhatsApp Message Credit",
    price: "$0.008–$0.015/message (volume-based)",
    description: "Credits for sending promotional messages via WhatsApp",
  },
  {
    name: "API Access",
    price: "$99/month (or Enterprise)",
    description: "Connect your systems directly to our platform",
  },
  {
    name: "Influencer Analytics Add-on",
    price: "$49–$99/month",
    description: "Advanced analytics for tracking influencer performance",
  },
];
