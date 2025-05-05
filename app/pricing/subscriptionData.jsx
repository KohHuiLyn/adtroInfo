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
  export const getBrandBundles = () => [
    {
      id: 1,
      name: "Brand Connect",
      description: "For small businesses",
      price: "SGD 149.99/mo",
      trialText: "Try 14 days for SGD 0",
      isFreeTrial: true,
      features: [
        { text: "1 outlet supported", available: true },
        { text: "Inventory Management (Up to 100 SKUs)", available: true },
        { text: "Access Creator List", available: true },
        { text: "Basic Order System", available: true },
        { text: "WhatsApp CRM (3 users)", available: true },
        { text: "Pay-per-blast Promo Push", available: true },
        { text: "Basic Order Analytics", available: true },
        { text: "Booking System", available: false },
        { text: "Email Support", available: true },
      ],
    },
    {
      id: 2,
      name: "Brand Growth",
      description: "For growing businesses",
      price: "SGD 399/mo",
      trialText: "Subscribe now for SGD 39.99/mo",
      isFreeTrial: false,
      features: [
        { text: "Up to 3 outlets supported", available: true },
        { text: "Inventory Management (Up to 2,000 SKUs)", available: true },
        { text: "Assign Campaigns to Creators", available: true },
        { text: "Order System Integrated with CRM", available: true },
        { text: "WhatsApp CRM (10 users)", available: true },
        { text: "Pay-per-blast Promo Push", available: true },
        { text: "Cross-outlet insights", available: true },
        { text: "Advanced flow w/ POS integration", available: true },
        { text: "Dedicated CSM + onboarding", available: true },
      ],
    },
    {
      id: 3,
      name: "Brand Enterprise",
      description: "For large businesses",
      price: "Custom Pricing",
      trialText: "Contact us for a quote",
      isFreeTrial: false,
      features: [
        { text: "Unlimited outlets", available: true },
        { text: "Unlimited SKUs + API", available: true },
        { text: "Private Streamer Network", available: true },
        { text: "Full funnel tracking", available: true },
        { text: "Custom roles + permissions", available: true },
        { text: "Pay-per-blast (API integrated)", available: true },
        { text: "Exportable + ROI dashboards", available: true },
        { text: "Advanced flow w/ POS integration", available: true },
        { text: "Dedicated CSM + onboarding", available: true },
      ],
    },
  ];
  

    
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
  title: "Brand Plans Comparison",
  columns: [
    "Feature",
    "Brand Connect ($149/mo)",
    "Brand Growth ($399/mo)",
    "Brand Enterprise (Custom)"
  ],
  rows: [
    ["Outlets Supported", "1 outlet", "Up to 3 outlets", "Unlimited"],
    ["Inventory Management", "Up to 100 SKUs", "Up to 2,000 SKUs", "Unlimited + API"],
    ["Streamer Recruitment", "Access Creator List", "Assign Campaigns", "Private Streamer Network"],
    ["Order System (FB/IG/YT)", "Basic", "Integrated with CRM", "Full funnel tracking"],
    ["WhatsApp CRM", "3 users", "10 users", "Custom roles + permissions"],
    ["Promo Push (WhatsApp)", "Pay-per-blast", "Pay-per-blast", "Pay-per-blast (API integrated)"],
    ["Order Analytics", "Basic", "Cross-outlet insights", "Exportable + ROI dashboards"],
    ["Booking System", false, "In-store & online bookings", "Advanced flow w/ POS integration"],
    ["Support", "Email support", "Priority support", "Dedicated CSM + onboarding"]
  ]
};

export const brandAddOns = {
  title: "Add-Ons",
  subtitle: "Enhance your plan with these additional features",
  columns: ["Add-On", "Price", "Description"],
  rows: [
    ["Extra CRM User", "$10/user/month", "Add additional users to your WhatsApp CRM"],
    ["WhatsApp Message Credit", "$0.008–$0.015/message (volume-based)", "Credits for sending promotional messages via WhatsApp"],
    ["API Access", "$99/month (or Enterprise)", "Connect your systems directly to our platform"],
    ["Influencer Analytics Add-on", "$49–$99/month", "Advanced analytics for tracking influencer performance"],
    ["Commission Engine", "$49/month (or Enterprise)", "Custom commission rules and management"]
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
