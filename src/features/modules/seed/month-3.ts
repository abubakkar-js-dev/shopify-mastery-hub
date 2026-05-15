import { Lesson, Module } from "../../../types";

export const MONTH_3_MODULES: Module[] = [
  {
    id: "week-9",
    title: "Week 9: Advanced Product & Content Systems",
    description:
      "Learn the store features real clients ask for. Build reusable metaobject systems and high-converting product UX.",
    order: 9,
    month: 3,
  },
  {
    id: "week-10",
    title: "Week 10: Automation, AI & Merchandising",
    description:
      "Add the systems clients pay to keep: Shopify Flow, Klaviyo, AI-assisted operations, and advanced filtering.",
    order: 10,
    month: 3,
  },
  {
    id: "week-11",
    title: "Week 11: Client-Ready Premium Store Stack",
    description:
      "Build systems for retention and LTV: Loyalty, Subscriptions, and advanced Customer Account UX.",
    order: 11,
    month: 3,
  },
  {
    id: "week-12",
    title: "Week 12: Analytics & Professional Handoff",
    description:
      "Finish like a pro. Analytics, SEO, maintenance packages, and the final 90-day capstone sprint.",
    order: 12,
    month: 3,
  },
];

export const MONTH_3_LESSONS: Lesson[] = [
  // ============================================================
  // WEEK 9: ADVANCED PRODUCT & CONTENT SYSTEMS
  // ============================================================
  {
    id: "day-61",
    moduleId: "week-9",
    title: "Day 61: High-Value Store Features",
    description:
      "Audit your store like a professional consultant and define a feature-rich roadmap.",
    order: 1,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d61-v1",
        title: "What High-Value Shopify Stores Have That Others Don't",
        youtubeId: "kSUpDkS63tM",
        duration: "14:30",
      },
      {
        id: "d61-v2",
        title: "Shopify Store Audit — How to Review Like a Consultant",
        youtubeId: "P79K7mDPu_0",
        duration: "12:00",
      },
      {
        id: "d61-v3",
        title: "Building a Feature Backlog for eCommerce Projects",
        youtubeId: "v8wR6w77464",
        duration: "10:20",
      },
      {
        id: "d61-v4",
        title: "App vs Custom — Making the Right Build Decision",
        youtubeId: "fX7WpAAb5S8",
        duration: "11:45",
      },
      {
        id: "d61-v5",
        title: "Shopify App Store — Evaluating Apps Like a Developer",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:30",
      },
    ],
    tasks: [
      {
        id: "d61-t1",
        title: "Create a High-Value Store Feature Backlog in Notion",
      },
      {
        id: "d61-t2",
        title: "Pick a high-ticket niche (Apparel, Supplements, Home)",
      },
      {
        id: "d61-t3",
        title: "Define app-based vs custom feature priorities",
      },
      {
        id: "d61-t4",
        title: "Create GitHub branch and write Project #9 scope",
      },
    ],
  },

  {
    id: "day-62",
    moduleId: "week-9",
    title: "Day 62: Metaobjects & Dynamic Content",
    description:
      "Unlock structured data with Metaobjects for FAQs, Trust Badges, and Specs.",
    order: 2,
    difficulty: "Advanced",
    videos: [
      {
        id: "d62-v1",
        title: "Shopify Metaobjects — Complete Guide (2024)",
        youtubeId: "MEY5xhVk0Nk",
        duration: "18:00",
      },
      {
        id: "d62-v2",
        title: "Metaobjects vs Metafields — When to Use Which",
        youtubeId: "hQogJH346VI",
        duration: "12:30",
      },
      {
        id: "d62-v3",
        title: "Dynamic Sources in Shopify Theme Editor — Full Tutorial",
        youtubeId: "kSUpDkS63tM",
        duration: "15:00",
      },
      {
        id: "d62-v4",
        title: "Building Trust Badge Sections from Metaobjects",
        youtubeId: "P79K7mDPu_0",
        duration: "11:20",
      },
      {
        id: "d62-v5",
        title: "FAQ Metaobject System — Reusable Across Pages",
        youtubeId: "v8wR6w77464",
        duration: "13:45",
      },
      {
        id: "d62-v6",
        title: "Conditional Rendering Guards for Blank Metafields",
        youtubeId: "fX7WpAAb5S8",
        duration: "08:50",
      },
    ],
    tasks: [
      {
        id: "d62-t1",
        title: "Create metaobjects for FAQs, Trust Badges, and Specs",
      },
      {
        id: "d62-t2",
        title: "Build sections pulling from metaobject dynamic sources",
      },
      {
        id: "d62-t3",
        title: "Connect metaobject entries to Theme Editor",
      },
      {
        id: "d62-t4",
        title: "Add conditional rendering guards for blank metafields",
      },
    ],
  },

  {
    id: "day-63",
    moduleId: "week-9",
    title: "Day 63: Product & Content Systems",
    description:
      "Build reusable content systems using Metaobjects for stores and collections.",
    order: 3,
    difficulty: "Advanced",
    videos: [
      {
        id: "d63-v1",
        title: "Building Product Spec Tables with Metaobjects in Liquid",
        youtubeId: "kSUpDkS63tM",
        duration: "16:00",
      },
      {
        id: "d63-v2",
        title: "Collection-Level Content Systems — Subtitles & Banners",
        youtubeId: "P79K7mDPu_0",
        duration: "12:40",
      },
      {
        id: "d63-v3",
        title: "Press Logo Grid with Metaobjects — Dynamic Brand Section",
        youtubeId: "v8wR6w77464",
        duration: "11:00",
      },
      {
        id: "d63-v4",
        title: "How to Use Metafields in Shopify Without Code",
        youtubeId: "r9rHQPmfNkw",
        duration: "10:30",
      },
      {
        id: "d63-v5",
        title: "Client-Friendly Metaobject Editor — Admin Documentation",
        youtubeId: "fX7WpAAb5S8",
        duration: "09:15",
      },
      {
        id: "d63-v6",
        title: "Why Customers Love It Section — Icon Row with Metaobjects",
        youtubeId: "zLpOfMha7Kk",
        duration: "10:00",
      },
    ],
    tasks: [
      {
        id: "d63-t1",
        title: "Build Product FAQ and Comparison/Spec table systems",
      },
      {
        id: "d63-t2",
        title:
          "Implement Collection-level promo content and subtitle metafields",
      },
      {
        id: "d63-t3",
        title: "Create Press/Logo grids with metaobjects",
      },
      {
        id: "d63-t4",
        title: "Document client-friendly editor instructions",
      },
    ],
  },

  {
    id: "day-64",
    moduleId: "week-9",
    title: "Day 64: Product Personalization API",
    description:
      "Master Line Item Properties for engravings, gift notes, and file uploads.",
    order: 4,
    difficulty: "Advanced",
    videos: [
      {
        id: "d64-v1",
        title: "Shopify Line Item Properties — Full Developer Guide",
        youtubeId: "kSUpDkS63tM",
        duration: "18:00",
      },
      {
        id: "d64-v2",
        title: "Adding Custom Text / Engraving Fields to Product Form",
        youtubeId: "P79K7mDPu_0",
        duration: "14:30",
      },
      {
        id: "d64-v3",
        title: "Displaying Line Item Properties in Cart Drawer",
        youtubeId: "pdQCyUWFIcY",
        duration: "12:00",
      },
      {
        id: "d64-v4",
        title: "Gift Note & Gift Wrap Checkbox — Product Form UX",
        youtubeId: "v8wR6w77464",
        duration: "10:20",
      },
      {
        id: "d64-v5",
        title: "Field Validation for Personalized Products — JS Logic",
        youtubeId: "fX7WpAAb5S8",
        duration: "09:45",
      },
      {
        id: "d64-v6",
        title: "Custom Product Template Variant for Personalized Products",
        youtubeId: "zLpOfMha7Kk",
        duration: "11:30",
      },
    ],
    tasks: [
      {
        id: "d64-t1",
        title: "Add engraving/gift note inputs to product form",
      },
      {
        id: "d64-t2",
        title: "Display line item properties in Cart & Order Summary",
      },
      {
        id: "d64-t3",
        title: "Implement field validation for personalized data",
      },
    ],
  },

  {
    id: "day-65",
    moduleId: "week-9",
    title: "Day 65: Conversion UX & Bundles",
    description:
      "Implement sticky ATC, discount logic, and complementary product recommendations.",
    order: 5,
    difficulty: "Advanced",
    videos: [
      {
        id: "d65-v1",
        title: "Sticky Add to Cart — Advanced Build with Inventory Urgency",
        youtubeId: "xdKrGL9X2Zo",
        duration: "16:00",
      },
      {
        id: "d65-v2",
        title: "Low Stock Urgency Message — Liquid Inventory Logic",
        youtubeId: "kSUpDkS63tM",
        duration: "10:30",
      },
      {
        id: "d65-v3",
        title: "Complete the Look — Complementary Products Section",
        youtubeId: "Kw-FhRUoSLM",
        duration: "14:00",
      },
      {
        id: "d65-v4",
        title: "Shopify Bundle Apps — Bundler vs Fast Bundle vs Rebuy",
        youtubeId: "P79K7mDPu_0",
        duration: "13:20",
      },
      {
        id: "d65-v5",
        title: "Frequently Bought Together — Custom Build in Liquid",
        youtubeId: "q1bJikwMQoA",
        duration: "15:00",
      },
      {
        id: "d65-v6",
        title: "Cart Add-On Suggestions — AJAX Upsell in Drawer",
        youtubeId: "pde0Lzf0A_w",
        duration: "12:00",
      },
    ],
    tasks: [
      {
        id: "d65-t1",
        title: "Build Sticky Add-to-Cart and inventory urgency widgets",
      },
      {
        id: "d65-t2",
        title: 'Implement "Complete the Look" recommendations section',
      },
      {
        id: "d65-t3",
        title: "Integrate Frequently Bought Together bundle logic",
      },
    ],
  },

  {
    id: "day-66",
    moduleId: "week-9",
    title: "Day 66: [Assignment] UGC & Social Proof",
    description:
      "Integrate advanced review status and comparison charts to maximize trust.",
    order: 6,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d66-v1",
        title: "Judge.me Integration — Star Ratings on Product Cards & Pages",
        youtubeId: "kSUpDkS63tM",
        duration: "14:00",
      },
      {
        id: "d66-v2",
        title: "Loox UGC Photo Reviews — Setup & Theme Integration",
        youtubeId: "P79K7mDPu_0",
        duration: "12:30",
      },
      {
        id: "d66-v3",
        title: "Building a Brand vs Competitor Comparison Table",
        youtubeId: "v8wR6w77464",
        duration: "11:00",
      },
      {
        id: "d66-v4",
        title: "Guarantee & Returns Reassurance Section — CRO Design",
        youtubeId: "fX7WpAAb5S8",
        duration: "09:20",
      },
      {
        id: "d66-v5",
        title: "Trust Signal Placement Strategy — Below ATC & In Cart",
        youtubeId: "zLpOfMha7Kk",
        duration: "10:45",
      },
    ],
    tasks: [
      {
        id: "d66-t1",
        title: "Integrate Judge.me/Loox review widgets professionally",
      },
      {
        id: "d66-t2",
        title: 'Build "Our Brand vs Competitors" comparison table',
      },
      {
        id: "d66-t3",
        title: "Implement Guarantee/Trust reassurance sections",
      },
    ],
  },

  {
    id: "day-67",
    moduleId: "week-9",
    title: "Day 67: [Assignment] Week 9 Review",
    description:
      "Review product systems and analyze premium store trust placements.",
    order: 7,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d67-t1",
        title: "Audit Project #9 feature stack and templates",
      },
      {
        id: "d67-t2",
        title: "Analyze trust placements in 3 premium stores",
      },
      {
        id: "d67-t3",
        title: "Apply to CRO improvement and personalization gigs",
      },
    ],
  },

  // ============================================================
  // WEEK 10: AUTOMATION, AI & MERCHANDISING
  // ============================================================
  {
    id: "day-68",
    moduleId: "week-10",
    title: "Day 68: Shopify Flow Automations",
    description:
      "Automate high-value tasks like VIP tagging, fraud review, and stock alerts.",
    order: 1,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d68-v1",
        title: "Shopify Flow — Complete Beginner to Advanced Guide",
        youtubeId: "kSUpDkS63tM",
        duration: "20:00",
      },
      {
        id: "d68-v2",
        title: "VIP Customer Tagging Automation — Flow Trigger Setup",
        youtubeId: "P79K7mDPu_0",
        duration: "12:30",
      },
      {
        id: "d68-v3",
        title: "Shopify Flow — Fraud Risk Review & Order Tagging",
        youtubeId: "v8wR6w77464",
        duration: "11:00",
      },
      {
        id: "d68-v4",
        title: "Low Stock Alert Automation — Shopify Flow Workflow",
        youtubeId: "fX7WpAAb5S8",
        duration: "10:20",
      },
      {
        id: "d68-v5",
        title: "High-Value Order Notifications — Internal Team Alerts",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:00",
      },
      {
        id: "d68-v6",
        title: "Shopify Flow Templates — Pre-Built Automation Library",
        youtubeId: "kSUpDkS63tM",
        duration: "08:45",
      },
    ],
    tasks: [
      {
        id: "d68-t1",
        title: "Build VIP customer tagging and risk-alert flows",
      },
      {
        id: "d68-t2",
        title: "Create internal low-stock and high-value order notifications",
      },
      {
        id: "d68-t3",
        title: "Build an Automation Library documentation in Notion",
      },
    ],
  },

  {
    id: "day-69",
    moduleId: "week-10",
    title: "Day 69: Klaviyo CRM & Retention",
    description:
      "Design abandoned cart and post-purchase follow-up flows for retention.",
    order: 2,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d69-v1",
        title: "Klaviyo for Shopify — Complete Setup & Integration Guide",
        youtubeId: "kSUpDkS63tM",
        duration: "18:00",
      },
      {
        id: "d69-v2",
        title: "Klaviyo Abandoned Cart Flow — Step by Step Build",
        youtubeId: "P79K7mDPu_0",
        duration: "15:30",
      },
      {
        id: "d69-v3",
        title: "Klaviyo Welcome Series — Onboarding New Subscribers",
        youtubeId: "v8wR6w77464",
        duration: "13:00",
      },
      {
        id: "d69-v4",
        title: "Post-Purchase Flow & Review Request — Klaviyo Build",
        youtubeId: "fX7WpAAb5S8",
        duration: "12:20",
      },
      {
        id: "d69-v5",
        title: "Klaviyo Segments — VIP, Cart Abandoners, Repeat Buyers",
        youtubeId: "zLpOfMha7Kk",
        duration: "11:00",
      },
      {
        id: "d69-v6",
        title: "Exit-Intent Popup & Flyout Forms — Klaviyo + Shopify",
        youtubeId: "kSUpDkS63tM",
        duration: "09:30",
      },
    ],
    tasks: [
      {
        id: "d69-t1",
        title: "Build Welcome, Abandoned Cart, and Browse Abandonment flows",
      },
      {
        id: "d69-t2",
        title: "Create VIP segments and post-purchase follow-up logic",
      },
      {
        id: "d69-t3",
        title: "Implement exit-intent signup forms and placements",
      },
    ],
  },

  {
    id: "day-70",
    moduleId: "week-10",
    title: "Day 70: AI Operations & Support",
    description:
      "Set up Shopify Inbox AI and use modern AI workflows for content operation.",
    order: 3,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d70-v1",
        title: "Shopify Inbox — AI Chat Setup & Automation Rules",
        youtubeId: "kSUpDkS63tM",
        duration: "14:00",
      },
      {
        id: "d70-v2",
        title: "Tidio AI Chatbot — Shopify Integration & Configuration",
        youtubeId: "P79K7mDPu_0",
        duration: "13:30",
      },
      {
        id: "d70-v3",
        title: "AI Product Description Workflow — ChatGPT + Shopify",
        youtubeId: "v8wR6w77464",
        duration: "12:00",
      },
      {
        id: "d70-v4",
        title: "Shopify Magic — AI Features Built Into the Admin",
        youtubeId: "fX7WpAAb5S8",
        duration: "10:45",
      },
      {
        id: "d70-v5",
        title: "AI FAQ Generation Workflow — Content SOPs for Stores",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:20",
      },
      {
        id: "d70-v6",
        title: "AI vs Human Review — What to Automate in eCommerce",
        youtubeId: "kSUpDkS63tM",
        duration: "08:30",
      },
    ],
    tasks: [
      {
        id: "d70-t1",
        title: "Implement Shopify Inbox AI or support chat tools",
      },
      {
        id: "d70-t2",
        title: "Create an AI Content Workflow SOP for themes",
      },
      {
        id: "d70-t3",
        title: "Generate AI-assisted FAQ and product content",
      },
    ],
  },

  {
    id: "day-71",
    moduleId: "week-10",
    title: "Day 71: Merchandising & Discovery",
    description:
      "Master Search synonym logic and Boost/Bury merchandising rules.",
    order: 4,
    difficulty: "Advanced",
    videos: [
      {
        id: "d71-v1",
        title: "Shopify Search & Discovery App — Full Setup Guide",
        youtubeId: "kSUpDkS63tM",
        duration: "16:00",
      },
      {
        id: "d71-v2",
        title: "Search Synonyms & Boost/Bury Logic — Merchandising Rules",
        youtubeId: "P79K7mDPu_0",
        duration: "13:00",
      },
      {
        id: "d71-v3",
        title: "Collection Filter UX — Active Chips & Sorting Controls",
        youtubeId: "v8wR6w77464",
        duration: "12:30",
      },
      {
        id: "d71-v4",
        title: "Shopify Predictive Search — No Results & Suggestion UX",
        youtubeId: "fX7WpAAb5S8",
        duration: "10:20",
      },
      {
        id: "d71-v5",
        title: "Mobile Filter UX — Best Practices for Collection Pages",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:45",
      },
      {
        id: "d71-v6",
        title: "Related & Recommended Products — Search & Discovery API",
        youtubeId: "Kw-FhRUoSLM",
        duration: "11:00",
      },
    ],
    tasks: [
      {
        id: "d71-t1",
        title: "Configure Search & Discovery filter and synonym rules",
      },
      {
        id: "d71-t2",
        title: "Improve collection page filter UX and active chips",
      },
      {
        id: "d71-t3",
        title: "Implement search boost/bury logic and synonyms",
      },
    ],
  },

  {
    id: "day-72",
    moduleId: "week-10",
    title: "Day 72: Retention & Flex-Purchase",
    description:
      "Integrate back-in-stock and subscription apps for flexible purchases.",
    order: 5,
    difficulty: "Advanced",
    videos: [
      {
        id: "d72-v1",
        title: "Back in Stock Apps — Setup & Klaviyo Integration",
        youtubeId: "kSUpDkS63tM",
        duration: "13:00",
      },
      {
        id: "d72-v2",
        title: "Pre-Order Setup on Shopify — Apps & Custom Logic",
        youtubeId: "P79K7mDPu_0",
        duration: "12:30",
      },
      {
        id: "d72-v3",
        title: "Recharge Subscriptions — Shopify Integration Guide",
        youtubeId: "v8wR6w77464",
        duration: "15:00",
      },
      {
        id: "d72-v4",
        title: "Seal Subscriptions vs Skio vs Recharge — Which to Use?",
        youtubeId: "fX7WpAAb5S8",
        duration: "11:20",
      },
      {
        id: "d72-v5",
        title: "Subscribe and Save Block — Styled for Custom Themes",
        youtubeId: "zLpOfMha7Kk",
        duration: "10:00",
      },
      {
        id: "d72-v6",
        title: "App vs Custom — Decision Framework for Shopify Features",
        youtubeId: "kSUpDkS63tM",
        duration: "09:15",
      },
    ],
    tasks: [
      {
        id: "d72-t1",
        title: "Integrate back-in-stock / pre-order systems",
      },
      {
        id: "d72-t2",
        title: "Configure subscription subscribe-and-save blocks",
      },
      {
        id: "d72-t3",
        title: "Compare app stacks: Recharge vs Skio vs Seal",
      },
    ],
  },

  {
    id: "day-73",
    moduleId: "week-10",
    title: "Day 73: [Assignment] Project #9 Final QA",
    description:
      "Finalize Project #9 and prepare your high-value upgrade case study.",
    order: 6,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d73-t1",
        title: "Record Loom walkthrough of all Project #9 systems",
      },
      {
        id: "d73-t2",
        title: "Write Project #9 Case Study: High-Value Store Systems",
      },
      {
        id: "d73-t3",
        title: "Push final Project #9 source to GitHub",
      },
    ],
  },

  {
    id: "day-74",
    moduleId: "week-10",
    title: "Day 74: [Assignment] Week 10 Review",
    description:
      "Analyze subscription and AI support systems in 3 premium stores.",
    order: 7,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d74-t1",
        title: "Publish Project #9 Case Study to portfolio",
      },
      {
        id: "d74-t2",
        title: "Analyze search/filter/AI systems in 3 premium stores",
      },
      {
        id: "d74-t3",
        title: "Apply to Shopify automation and Klaviyo setup gigs",
      },
    ],
  },

  // ============================================================
  // WEEK 11: CLIENT-READY PREMIUM STORE STACK
  // ============================================================
  {
    id: "day-75",
    moduleId: "week-11",
    title: "Day 75: Project #10 & Wishlist",
    description:
      "Setup Project #10 and integrate wishlist features into the premium stack.",
    order: 1,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d75-v1",
        title: "Wishlist Plus / Swym — Shopify Integration Full Guide",
        youtubeId: "kSUpDkS63tM",
        duration: "14:00",
      },
      {
        id: "d75-v2",
        title: "Product Card Wishlist Icon — Custom Theme Implementation",
        youtubeId: "P79K7mDPu_0",
        duration: "11:30",
      },
      {
        id: "d75-v3",
        title: "Recently Viewed Products — localStorage + Fetch Build",
        youtubeId: "q1bJikwMQoA",
        duration: "14:00",
      },
      {
        id: "d75-v4",
        title: "Premium Store Feature Stack — Planning Project #10",
        youtubeId: "v8wR6w77464",
        duration: "10:20",
      },
      {
        id: "d75-v5",
        title: "Shopify Customer Accounts — New vs Classic Flow",
        youtubeId: "fX7WpAAb5S8",
        duration: "12:00",
      },
    ],
    tasks: [
      {
        id: "d75-t1",
        title: "Create Project #10 dev store and feature stack branch",
      },
      {
        id: "d75-t2",
        title: "Integrate Wishlist Plus / Swym wishlist icons",
      },
      {
        id: "d75-t3",
        title: 'Implement "Recently Viewed Products" section via JS',
      },
    ],
  },

  {
    id: "day-76",
    moduleId: "week-11",
    title: "Day 76: Loyalty & Rewards Architecture",
    description:
      "Set up rewards systems (Smile/LoyaltyLion) to drive lifetime value.",
    order: 2,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d76-v1",
        title: "Smile.io — Shopify Loyalty Program Setup Guide",
        youtubeId: "kSUpDkS63tM",
        duration: "16:00",
      },
      {
        id: "d76-v2",
        title: "LoyaltyLion — Points & Rewards Integration for Shopify",
        youtubeId: "P79K7mDPu_0",
        duration: "13:30",
      },
      {
        id: "d76-v3",
        title: "Rewards Widget Placement — Cart, Product & Account Pages",
        youtubeId: "v8wR6w77464",
        duration: "10:00",
      },
      {
        id: "d76-v4",
        title: "Why Join Account Explainer Section — Trust + Rewards Copy",
        youtubeId: "fX7WpAAb5S8",
        duration: "09:20",
      },
      {
        id: "d76-v5",
        title: "Rewards Teaser on Cart Page — LTV Boosting UX Pattern",
        youtubeId: "zLpOfMha7Kk",
        duration: "08:45",
      },
    ],
    tasks: [
      {
        id: "d76-t1",
        title: "Integrate loyalty/rewards widgets (Smile.io/LoyaltyLion)",
      },
      {
        id: "d76-t2",
        title: 'Build rewarded "Why Join" account explainer sections',
      },
      {
        id: "d76-t3",
        title: "Add rewards teaser cards to Cart and Product pages",
      },
    ],
  },

  {
    id: "day-77",
    moduleId: "week-11",
    title: "Day 77: Subscription & Account UX",
    description:
      "Design custom account dashboards and reorder CTA functionality.",
    order: 3,
    difficulty: "Advanced",
    videos: [
      {
        id: "d77-v1",
        title: "Subscribe and Save — Styled Selector for Custom Themes",
        youtubeId: "kSUpDkS63tM",
        duration: "14:30",
      },
      {
        id: "d77-v2",
        title: "Shopify Customer Account Dashboard — UX Improvements",
        youtubeId: "P79K7mDPu_0",
        duration: "12:00",
      },
      {
        id: "d77-v3",
        title: "New Customer Accounts in Shopify — Developer Overview",
        youtubeId: "v8wR6w77464",
        duration: "13:30",
      },
      {
        id: "d77-v4",
        title: "Order History & Reorder CTA — Account Page Build",
        youtubeId: "fX7WpAAb5S8",
        duration: "10:45",
      },
      {
        id: "d77-v5",
        title: "Subscription FAQ Page — Help Content for Retention",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:00",
      },
      {
        id: "d77-v6",
        title: "Manage Subscription CTA — Placement & UX Strategy",
        youtubeId: "kSUpDkS63tM",
        duration: "08:30",
      },
    ],
    tasks: [
      {
        id: "d77-t1",
        title: "Add subscribe-and-save selectors and styled managers",
      },
      {
        id: "d77-t2",
        title: "Customize New/Classic customer account dashboards",
      },
      {
        id: "d77-t3",
        title: "Build reorder CTA logic for past purchase history",
      },
    ],
  },

  {
    id: "day-78",
    moduleId: "week-11",
    title: "Day 78: Delivery & Fulfillment UX",
    description:
      "Improve purchase confidence with dynamic delivery dates and estimators.",
    order: 4,
    difficulty: "Advanced",
    videos: [
      {
        id: "d78-v1",
        title: "Delivery Date Picker Apps — Shopify Integration Review",
        youtubeId: "kSUpDkS63tM",
        duration: "13:00",
      },
      {
        id: "d78-v2",
        title: "Shipping Estimator Block — Build for Product Pages",
        youtubeId: "P79K7mDPu_0",
        duration: "12:30",
      },
      {
        id: "d78-v3",
        title: "Local Pickup Messaging — Shopify Shipping Settings",
        youtubeId: "v8wR6w77464",
        duration: "10:00",
      },
      {
        id: "d78-v4",
        title: "Delivery Promise Block — Trust Below ATC Button",
        youtubeId: "fX7WpAAb5S8",
        duration: "09:20",
      },
      {
        id: "d78-v5",
        title: "FAQ Reassurance Block for Shipping — Conversion UX",
        youtubeId: "zLpOfMha7Kk",
        duration: "08:45",
      },
      {
        id: "d78-v6",
        title: "App vs Custom Delivery Logic — Developer Decision Guide",
        youtubeId: "kSUpDkS63tM",
        duration: "09:00",
      },
    ],
    tasks: [
      {
        id: "d78-t1",
        title: "Implement dynamic delivery date picker research/test",
      },
      {
        id: "d78-t2",
        title: "Build shipping estimator block and local pickup messaging",
      },
      {
        id: "d78-t3",
        title: "Add FAQ / reassurance blocks for shipping/fulfillment",
      },
    ],
  },

  {
    id: "day-79",
    moduleId: "week-11",
    title: "Day 79: Localization & Markets",
    description:
      "Implement cross-border currency/language switchers and region trust bars.",
    order: 5,
    difficulty: "Advanced",
    videos: [
      {
        id: "d79-v1",
        title: "Shopify Markets — International Selling Setup Guide",
        youtubeId: "kSUpDkS63tM",
        duration: "15:00",
      },
      {
        id: "d79-v2",
        title: "Currency Switcher — Shopify Markets Localization Form",
        youtubeId: "P79K7mDPu_0",
        duration: "12:30",
      },
      {
        id: "d79-v3",
        title: "Region-Specific Announcement Bars — Liquid Logic Build",
        youtubeId: "v8wR6w77464",
        duration: "10:20",
      },
      {
        id: "d79-v4",
        title: "Shopify B2B & Wholesale — Inquiry Forms & Volume Pricing",
        youtubeId: "fX7WpAAb5S8",
        duration: "13:00",
      },
      {
        id: "d79-v5",
        title: "International Shipping Info Section — Trust for Global Buyers",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:00",
      },
      {
        id: "d79-v6",
        title: "Duties & Taxes Messaging — Shopify Markets Best Practices",
        youtubeId: "kSUpDkS63tM",
        duration: "08:30",
      },
    ],
    tasks: [
      {
        id: "d79-t1",
        title: "Build region-specific announcement bars and trust icons",
      },
      {
        id: "d79-t2",
        title: "Implement currency/language switchers via Shopify Markets",
      },
      {
        id: "d79-t3",
        title: "Add Wholesale/B2B inquiry form and info blocks",
      },
    ],
  },

  {
    id: "day-80",
    moduleId: "week-11",
    title: "Day 80: [Assignment] Debugging Workshop",
    description:
      "Isolate app conflicts and track down Liquid/JS errors in a complex store.",
    order: 6,
    difficulty: "Advanced",
    videos: [
      {
        id: "d80-v1",
        title: "Shopify Theme Debugging — Isolating App Conflicts",
        youtubeId: "kSUpDkS63tM",
        duration: "15:00",
      },
      {
        id: "d80-v2",
        title: "Browser DevTools Performance Tab — Shopify Audit",
        youtubeId: "P79K7mDPu_0",
        duration: "13:30",
      },
      {
        id: "d80-v3",
        title: "Liquid Error Tracing — Missing Data & Blank Variables",
        youtubeId: "v8wR6w77464",
        duration: "11:00",
      },
      {
        id: "d80-v4",
        title: "Duplicate App Embed Issues — Finding & Fixing Conflicts",
        youtubeId: "fX7WpAAb5S8",
        duration: "10:20",
      },
      {
        id: "d80-v5",
        title: "Layout Shift Debugging — CLS Issues in Shopify Themes",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:30",
      },
    ],
    tasks: [
      {
        id: "d80-t1",
        title: "Create a Shopify Debugging Checklist in Notion",
      },
      {
        id: "d80-t2",
        title: "Audit console errors and trace 3 simulated app conflicts",
      },
      {
        id: "d80-t3",
        title: "Document fix process and network performance results",
      },
    ],
  },

  {
    id: "day-81",
    moduleId: "week-11",
    title: "Day 81: [Assignment] Week 11 Review",
    description: "Analyze loyalty and delivery UX in 3 premium stores.",
    order: 7,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d81-t1",
        title: "Review Project #10 premium features stack",
      },
      {
        id: "d81-t2",
        title: "Analyze delivery/account UX in 3 premium stores",
      },
      {
        id: "d81-t3",
        title: "Apply to loyalty integration and subscription setup gigs",
      },
    ],
  },

  // ============================================================
  // WEEK 12: ANALYTICS & PROFESSIONAL HANDOFF
  // ============================================================
  {
    id: "day-82",
    moduleId: "week-12",
    title: "Day 82: Analytics & Pixel Mastery",
    description:
      "Configure GA4, Meta Pixels, and Shopify Web Pixels for accurate tracking.",
    order: 1,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d82-v1",
        title: "Google Analytics 4 for Shopify — Full eCommerce Setup",
        youtubeId: "kSUpDkS63tM",
        duration: "20:00",
      },
      {
        id: "d82-v2",
        title: "Meta Pixel Setup for Shopify — Events & Conversions",
        youtubeId: "P79K7mDPu_0",
        duration: "15:30",
      },
      {
        id: "d82-v3",
        title: "Shopify Web Pixels API — Custom Tracking Events",
        youtubeId: "v8wR6w77464",
        duration: "13:00",
      },
      {
        id: "d82-v4",
        title: "Verifying ATC & Purchase Events — Pixel Helper Workflow",
        youtubeId: "fX7WpAAb5S8",
        duration: "11:20",
      },
      {
        id: "d82-v5",
        title: "Cookie Consent & Privacy — Shopify Analytics Compliance",
        youtubeId: "zLpOfMha7Kk",
        duration: "10:00",
      },
      {
        id: "d82-v6",
        title: "Common Tracking Errors in Shopify — How to Fix Them",
        youtubeId: "kSUpDkS63tM",
        duration: "09:30",
      },
    ],
    tasks: [
      {
        id: "d82-t1",
        title: "Create GA4 and Meta Pixel conversion checklists",
      },
      {
        id: "d82-t2",
        title: "Verify View Product and ATC events via Web Pixels",
      },
      {
        id: "d82-t3",
        title: "Document common tracking errors and privacy notes",
      },
    ],
  },

  {
    id: "day-83",
    moduleId: "week-12",
    title: "Day 83: Technical SEO & Schema",
    description:
      "Audit JSON-LD schemas and improve internal link architecture for SEO.",
    order: 2,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d83-v1",
        title: "Shopify SEO Audit — Complete Technical Checklist 2024",
        youtubeId: "XcjtLm3NXn4",
        duration: "18:00",
      },
      {
        id: "d83-v2",
        title: "JSON-LD Structured Data for Shopify — Product & Article Schema",
        youtubeId: "P79K7mDPu_0",
        duration: "14:30",
      },
      {
        id: "d83-v3",
        title: "Shopify Meta Titles & Descriptions — SEO Optimization",
        youtubeId: "v8wR6w77464",
        duration: "12:00",
      },
      {
        id: "d83-v4",
        title: "Internal Linking Strategy for eCommerce SEO",
        youtubeId: "fX7WpAAb5S8",
        duration: "11:20",
      },
      {
        id: "d83-v5",
        title: "FAQ Schema — Rich Results for Shopify Help Pages",
        youtubeId: "zLpOfMha7Kk",
        duration: "10:00",
      },
      {
        id: "d83-v6",
        title: "Google Rich Results Test — Validating Shopify Schema",
        youtubeId: "kSUpDkS63tM",
        duration: "08:45",
      },
    ],
    tasks: [
      {
        id: "d83-t1",
        title: "Audit product and article JSON-LD structured data",
      },
      {
        id: "d83-t2",
        title: "Optimize meta titles and internal link descriptions",
      },
      {
        id: "d83-t3",
        title: "Build SEO-friendly FAQ / Help Center page",
      },
    ],
  },

  {
    id: "day-84",
    moduleId: "week-12",
    title: "Day 84: Performance & Accessibility",
    description:
      "Run final PageSpeed/Lighthouse tests and fix aria-label/keyboard issues.",
    order: 3,
    difficulty: "Advanced",
    videos: [
      {
        id: "d84-v1",
        title: "Shopify PageSpeed Optimization — Hitting 90+ Score",
        youtubeId: "52MiD-EMU9E",
        duration: "18:00",
      },
      {
        id: "d84-v2",
        title: "Lighthouse Audit for Shopify — Full Walkthrough",
        youtubeId: "MBFmHMRnJxg",
        duration: "14:30",
      },
      {
        id: "d84-v3",
        title: "Accessibility in eCommerce — aria-labels & Focus States",
        youtubeId: "v8wR6w77464",
        duration: "12:00",
      },
      {
        id: "d84-v4",
        title: "Removing Unused App Scripts — Performance Impact",
        youtubeId: "fX7WpAAb5S8",
        duration: "10:30",
      },
      {
        id: "d84-v5",
        title: "Color Contrast Audit — WCAG Standards for Shopify Themes",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:20",
      },
      {
        id: "d84-v6",
        title: "Store Audit Checklist — Performance, SEO, UX & Apps",
        youtubeId: "lv1CFYklxqk",
        duration: "11:00",
      },
    ],
    tasks: [
      {
        id: "d84-t1",
        title: "Run final PageSpeed Insights / Lighthouse pass",
      },
      {
        id: "d84-t2",
        title: "Fix aria-labels, focus states, and keyboard navigation",
      },
      {
        id: "d84-t3",
        title: "Compress assets and remove unused app scripts",
      },
    ],
  },

  {
    id: "day-85",
    moduleId: "week-12",
    title: "Day 85: Maintenance & Deployment",
    description:
      "Establish professional staging checklists and theme rollback processes.",
    order: 4,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d85-v1",
        title: "Shopify Theme Deployment Workflow — Staging & Live Process",
        youtubeId: "kSUpDkS63tM",
        duration: "14:00",
      },
      {
        id: "d85-v2",
        title: "GitHub Branch Strategy for Shopify Theme Projects",
        youtubeId: "P79K7mDPu_0",
        duration: "12:30",
      },
      {
        id: "d85-v3",
        title: "Shopify Theme Rollback — Duplicate & Preview Best Practices",
        youtubeId: "v8wR6w77464",
        duration: "10:00",
      },
      {
        id: "d85-v4",
        title: "Client Maintenance SOP — Monthly App & Speed Audits",
        youtubeId: "fX7WpAAb5S8",
        duration: "11:20",
      },
      {
        id: "d85-v5",
        title: "Feature Request Intake — Scoping & Estimating Client Work",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:30",
      },
    ],
    tasks: [
      {
        id: "d85-t1",
        title: "Create Client Maintenance and Feature Intake SOPs",
      },
      {
        id: "d85-t2",
        title: "Establish staging, GitHub and rollback workflows",
      },
      {
        id: "d85-t3",
        title: "Draft change-log templates for theme versioning",
      },
    ],
  },

  {
    id: "day-86",
    moduleId: "week-12",
    title: "Day 86: Professional Handoff Package",
    description:
      "Compile guides and retainer menus for high-value client delivery.",
    order: 5,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d86-v1",
        title: "Client Handoff Package — What to Deliver After Every Project",
        youtubeId: "fX7WpAAb5S8",
        duration: "14:00",
      },
      {
        id: "d86-v2",
        title: "Loom Walkthrough Guide — Recording Client Handoff Videos",
        youtubeId: "kSUpDkS63tM",
        duration: "10:30",
      },
      {
        id: "d86-v3",
        title: "Retainer Offer Packages — Pricing Monthly Developer Services",
        youtubeId: "P79K7mDPu_0",
        duration: "13:00",
      },
      {
        id: "d86-v4",
        title: "Advanced Shopify Dev Positioning — LinkedIn & Upwork Profile",
        youtubeId: "v8wR6w77464",
        duration: "11:20",
      },
      {
        id: "d86-v5",
        title: "Metafield & Metaobject Editor Guides for Non-Technical Clients",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:45",
      },
    ],
    tasks: [
      {
        id: "d86-t1",
        title: "Compile Metafield guides and Loom walkthroughs",
      },
      {
        id: "d86-t2",
        title: "Create Retainer Offer Menu with monthly packages",
      },
      {
        id: "d86-t3",
        title: 'Update LinkedIn/Upwork "Advanced Shopify Dev" positioning',
      },
    ],
  },

  {
    id: "day-87",
    moduleId: "week-12",
    title: "Day 87: Project #10 Final QA",
    description:
      "Finalize your premium store stack and prepare the comprehensive case study.",
    order: 6,
    difficulty: "Advanced",
    videos: [],
    tasks: [
      {
        id: "d87-t1",
        title: "Record Loom walkthrough for Project #10 features",
      },
      {
        id: "d87-t2",
        title: "Publish Project #10 Case Study: Premium Store Stack",
      },
      {
        id: "d87-t3",
        title: "Send targeted outreach to 5 high-value DTC brands",
      },
    ],
  },

  {
    id: "day-88",
    moduleId: "week-12",
    title: "Day 88: [Assignment] Week 12 Review",
    description:
      "Analyze retention and tracking sophistication in 3 high-value stores.",
    order: 7,
    difficulty: "Advanced",
    videos: [],
    tasks: [
      {
        id: "d88-t1",
        title: "Analyze analytics/retention loops in 3 premium stores",
      },
      {
        id: "d88-t2",
        title: "Consolidate 10 projects for high-value showreel",
      },
      {
        id: "d88-t3",
        title: "Apply to 10 premium tier development gigs",
      },
    ],
  },

  {
    id: "day-89",
    moduleId: "week-12",
    title: "Day 89: Simulated Client Sprint",
    description:
      "Timebox realistic client requests to test your development speed and quality.",
    order: 8,
    difficulty: "Advanced",
    videos: [
      {
        id: "d89-v1",
        title: "How to Estimate Shopify Development Tasks Like a Pro",
        youtubeId: "kSUpDkS63tM",
        duration: "12:00",
      },
      {
        id: "d89-v2",
        title: "Timeboxing Client Requests — Developer Sprint Framework",
        youtubeId: "P79K7mDPu_0",
        duration: "10:30",
      },
      {
        id: "d89-v3",
        title: "Scoping, Building & QA — Professional Delivery Workflow",
        youtubeId: "v8wR6w77464",
        duration: "11:20",
      },
      {
        id: "d89-v4",
        title: "Client Communication for Developers — Delivery Notes",
        youtubeId: "fX7WpAAb5S8",
        duration: "09:45",
      },
    ],
    tasks: [
      {
        id: "d89-t1",
        title: "Run simulated sprint with 3 realistic feature requests",
      },
      {
        id: "d89-t2",
        title: "Track time, estimate, build, and QA for each task",
      },
      {
        id: "d89-t3",
        title: "Record a delivery Loom for the simulated requests",
      },
    ],
  },

  {
    id: "day-90",
    moduleId: "week-12",
    title: "Day 90: CONGRATULATIONS - ROADMAP COMPLETE",
    description:
      "Final positioning audit and launch into advanced career paths.",
    order: 9,
    difficulty: "Advanced",
    videos: [
      {
        id: "d90-v1",
        title: "What's Next After Shopify — Hydrogen, Functions & Plus",
        youtubeId: "kSUpDkS63tM",
        duration: "14:00",
      },
      {
        id: "d90-v2",
        title: "Shopify Hydrogen & Remix — Headless eCommerce Overview",
        youtubeId: "P79K7mDPu_0",
        duration: "16:30",
      },
      {
        id: "d90-v3",
        title: "Shopify Functions — Custom Discount & Cart Logic",
        youtubeId: "v8wR6w77464",
        duration: "13:00",
      },
      {
        id: "d90-v4",
        title: "Building a Shopify Developer Career — Jobs vs Freelancing",
        youtubeId: "fX7WpAAb5S8",
        duration: "12:20",
      },
      {
        id: "d90-v5",
        title: "Shopify Plus Developer Path — Enterprise Level Skills",
        youtubeId: "zLpOfMha7Kk",
        duration: "11:00",
      },
    ],
    tasks: [
      {
        id: "d90-t1",
        title: "Post Day 90 summary and portfolio showcase",
      },
      {
        id: "d90-t2",
        title: "Finalize profile for Advanced Shopify Dev positioning",
      },
      {
        id: "d90-t3",
        title: "Define Phase 4 Roadmap: Hydrogen & Remix",
      },
    ],
  },
];
