import { Lesson, Module } from "../../../types";

export const MONTH_1_MODULES: Module[] = [
  {
    id: "week-1",
    title: "Week 1: Full Store Setup",
    description:
      "Master Shopify Admin, architecture, and logistics. Goal: Ship your first complete demo store.",
    order: 1,
    month: 1,
  },
  {
    id: "week-2",
    title: "Week 2: Theme Customization",
    description:
      "Move from configuration to code. Build Liquid confidence and master visual theme architecture.",
    order: 2,
    month: 1,
  },
  {
    id: "week-3",
    title: "Week 3: No-Code Prowess (PageFly)",
    description:
      "Master conversion-led design and rapid landing page creation using industrial-grade builders.",
    order: 3,
    month: 1,
  },
  {
    id: "week-4",
    title: "Week 4: Campaign Engineering",
    description:
      "Build complex seasonal campaigns, urgency systems, and finalize your professional portfolio.",
    order: 4,
    month: 1,
  },
];

export const MONTH_1_LESSONS: Lesson[] = [
  // ============================================================
  // WEEK 1: FULL STORE SETUP
  // ============================================================

  {
    id: "day-1",
    moduleId: "week-1",
    title: "Day 1: Setup & Admin Tour",
    description:
      "Establish your developer workspace and explore the Shopify ecosystem internals.",
    order: 1,
    difficulty: "Beginner",
    videos: [
      {
        id: "d1-v1",
        title: "The Shopify Developer Ecosystem",
        youtubeId: "OYYzArtmr3E",
        duration: "12:45",
      },
      {
        id: "d1-v2",
        title: "Setting up your Partner Account",
        youtubeId: "NSetHvaZjBA",
        duration: "08:20",
      },
      {
        id: "d1-v3",
        title: "Shopify Admin Interface Tour",
        youtubeId: "Iire74oiRyE",
        duration: "15:10",
      },
      {
        id: "d1-v4",
        title: "Environment Setup: VS Code & Liquid Extensions",
        youtubeId: "bhAMaeePmsQ",
        duration: "10:30",
      },
      {
        id: "d1-v5",
        title: "How to Learn Shopify Development in 2025",
        youtubeId: "F_KB7EpkbcY",
        duration: "14:00",
      },
      {
        id: "d1-v6",
        title: "Shopify Partner Dashboard Walkthrough",
        youtubeId: "0bSXNmqCdO4",
        duration: "11:15",
      },
      {
        id: "d1-v7",
        title: "How to Create a Shopify Development Store",
        youtubeId: "uPGz_mNBEGs",
        duration: "07:40",
      },
      {
        id: "d1-v8",
        title: "Shopify vs Other eCommerce Platforms — Why Shopify Wins",
        youtubeId: "r5pR6s3xCyU",
        duration: "09:50",
      },
      {
        id: "d1-v9",
        title: "Getting Started with the Shopify CLI (Theme Development)",
        youtubeId: "wX7q29PY2ps",
        duration: "14:30",
      },
      {
        id: "d1-v10",
        title:
          "Shopify Theme Development — Introduction & Local Environment Setup with CLI",
        youtubeId: "1dznKWXkL3E",
        duration: "18:45",
      },
      {
        id: "d1-v11",
        title: "How to Use Shopify CLI 3.x for Theme Development",
        youtubeId: "keRtZNx_cco",
        duration: "22:10",
      },
    ],
    tasks: [
      {
        id: "d1-t1",
        title: "Create Shopify Partner account + first dev store",
      },
      {
        id: "d1-t2",
        title: "Install VS Code + Shopify Liquid extension + Theme Check",
      },
      {
        id: "d1-t3",
        title: "Set up Notion workspace (portfolio log + daily tracker)",
      },
      {
        id: "d1-t4",
        title: "Optimize LinkedIn profile headline & banner",
      },
      {
        id: "d1-t5",
        title: "Post intro on LinkedIn/X",
      },
    ],
    resources: [
      {
        id: "d1-r1",
        title: "Shopify Developer Docs — Getting Started Overview",
        url: "https://shopify.dev/docs/themes/getting-started",
        type: "docs",
      },
      {
        id: "d1-r2",
        title: "Shopify CLI — Install & Reference",
        url: "https://shopify.dev/docs/api/shopify-cli",
        type: "docs",
      },
      {
        id: "d1-r3",
        title: "Shopify Liquid VS Code Extension — Official Docs",
        url: "https://shopify.dev/docs/storefronts/themes/tools/shopify-liquid-vscode",
        type: "docs",
      },
      {
        id: "d1-r4",
        title: "Dawn Theme — Official Shopify Reference Theme on GitHub",
        url: "https://github.com/Shopify/dawn",
        type: "github",
      },
      {
        id: "d1-r5",
        title: "Shopify Partner Program — How to Become a Partner",
        url: "https://www.shopify.com/partners",
        type: "docs",
      },
      {
        id: "d1-r6",
        title: "Shopify Academy — Developer Learning Path",
        url: "https://www.shopifyacademy.com/page/track-developer",
        type: "blog",
      },
    ],
  },
  {
    id: "day-2",
    moduleId: "week-1",
    title: "Day 2: Catalog & Shipping Architecture",
    description:
      "Master product data, collection logic, and backend logistics like shipping.",
    order: 2,
    difficulty: "Beginner",
    videos: [
      {
        id: "d2-v1",
        title: "Product Data Management",
        youtubeId: "tBnEICQiceY",
        duration: "14:20",
      },
      {
        id: "d2-v2",
        title: "Automatic vs Manual Collections",
        youtubeId: "AyUq7B9JgV4",
        duration: "11:45",
      },
      {
        id: "d2-v3",
        title: "Navigation & Menu Architecture",
        youtubeId: "781romSzAn4",
        duration: "09:15",
      },
      {
        id: "d2-v4",
        title: "Shipping Profiles Deep Dive",
        youtubeId: "nMNgSZknryo",
        duration: "13:50",
      },
      {
        id: "d2-v5",
        title: "Shopify Shipping Zones & Rates Setup",
        youtubeId: "611Ja2jvD70",
        duration: "10:00",
      },
      {
        id: "d2-v6",
        title: "How to Add Products to Shopify — Full Walkthrough",
        youtubeId: "y3XHBR4mRkA",
        duration: "12:30",
      },
      {
        id: "d2-v7",
        title: "Shopify Collections — Smart vs Manual Explained",
        youtubeId: "5sVFNx5DAxU",
        duration: "08:45",
      },
      {
        id: "d2-v8",
        title: "Setting Up Shopify Payments & Test Mode",
        youtubeId: "6K5g9FbdNIE",
        duration: "10:20",
      },
      {
        id: "d2-v9",
        title: "How to Create Shopify Collections and Display Them in Dawn",
        youtubeId: "LwQhQwgXnus",
        duration: "16:00",
      },
      {
        id: "d2-v10",
        title: "How To Create Collections On Shopify Store Step by Step",
        youtubeId: "YCEmSQ7gz2g",
        duration: "11:20",
      },
      {
        id: "d2-v11",
        title:
          "Organize Your Products in Shopify — Collections, Subcollections & Subcategories",
        youtubeId: "CgHWdGrV8S0",
        duration: "09:45",
      },
    ],
    tasks: [
      {
        id: "d2-t1",
        title: "Add 12+ demo products",
      },
      {
        id: "d2-t2",
        title: "Create manual and automated collections",
      },
      {
        id: "d2-t3",
        title: "Build main and footer navigation",
      },
      {
        id: "d2-t4",
        title: "Set up shipping profiles",
      },
      {
        id: "d2-t5",
        title: "Install Judge.me, Klaviyo, and an upsell app",
      },
    ],
    resources: [
      {
        id: "d2-r1",
        title: "Shopify Help — Add and Update Products",
        url: "https://help.shopify.com/en/manual/products/add-update-products",
        type: "docs",
      },
      {
        id: "d2-r2",
        title: "Shopify Help — Create and Manage Collections",
        url: "https://help.shopify.com/en/manual/products/collections",
        type: "docs",
      },
      {
        id: "d2-r3",
        title: "Shopify Help — Setting Up Shipping",
        url: "https://help.shopify.com/en/manual/shipping",
        type: "docs",
      },
      {
        id: "d2-r4",
        title: "Shopify Help — Navigation and Menus",
        url: "https://help.shopify.com/en/manual/online-store/menus-and-links",
        type: "docs",
      },
      {
        id: "d2-r5",
        title: "Shopify Blog — How to Organize Products with Collections",
        url: "https://www.shopify.com/blog/how-to-organize-your-shopify-products-into-collections",
        type: "blog",
      },
      {
        id: "d2-r6",
        title: "Shopify Help — Shopify Payments Setup",
        url: "https://help.shopify.com/en/manual/payments/shopify-payments/setting-up-shopify-payments",
        type: "docs",
      },
    ],
  },
  {
    id: "day-3",
    moduleId: "week-1",
    title: "Day 3: Deep Dive & Checkout",
    description: "Master metafields and test the full checkout flow.",
    order: 3,
    difficulty: "Beginner",
    videos: [
      {
        id: "d3-v1",
        title: "Shopify Metafields Explained",
        youtubeId: "MEY5xhVk0Nk",
        duration: "12:10",
      },
      {
        id: "d3-v2",
        title: "Dynamic Metafield Mapping",
        youtubeId: "hQogJH346VI",
        duration: "09:45",
      },
      {
        id: "d3-v3",
        title: "Testing the Checkout Flow",
        youtubeId: "WofBv_4tmdg",
        duration: "11:20",
      },
      {
        id: "d3-v4",
        title: "How to Place a Test Order on Shopify",
        youtubeId: "8j5LG1_ojqc",
        duration: "08:30",
      },
      {
        id: "d3-v5",
        title: "Shopify Metafields — Complete Beginner Guide (2024)",
        youtubeId: "r9rHQPmfNkw",
        duration: "14:00",
      },
      {
        id: "d3-v6",
        title: "Shopify SEO Basics — Titles, Descriptions & URLs",
        youtubeId: "XcjtLm3NXn4",
        duration: "11:00",
      },
      {
        id: "d3-v7",
        title: "How to Review App Dashboards in Shopify",
        youtubeId: "o3lHAe28AEE",
        duration: "09:10",
      },
      {
        id: "d3-v8",
        title:
          "Shopify Metafields Tutorial For Beginners — Everything You Need to Know",
        youtubeId: "VghcPn3AzYs",
        duration: "13:30",
      },
      {
        id: "d3-v9",
        title: "Shopify 2.0 Metafields Tutorial with Real Store Examples",
        youtubeId: "Dh7EyD7-o50",
        duration: "17:40",
      },
      {
        id: "d3-v10",
        title: "Shopify Checkout Page Customization Step-By-Step",
        youtubeId: "dkdxHmhHeo8",
        duration: "12:55",
      },
    ],
    tasks: [
      {
        id: "d3-t1",
        title: "Deep dive into Metafields (add custom metafield)",
      },
      {
        id: "d3-t2",
        title: "Test full checkout flow in test mode",
      },
      {
        id: "d3-t3",
        title: "Add basic SEO titles + meta descriptions",
      },
      {
        id: "d3-t4",
        title: "Document architecture decisions in Notion",
      },
    ],
    resources: [
      {
        id: "d3-r1",
        title: "Shopify Dev — About Metafields (Official Docs)",
        url: "https://shopify.dev/docs/apps/build/metafields",
        type: "docs",
      },
      {
        id: "d3-r2",
        title: "Shopify Dev — Liquid Objects: Metafield Reference",
        url: "https://shopify.dev/docs/api/liquid/objects/metafield",
        type: "docs",
      },
      {
        id: "d3-r3",
        title: "Shopify Help — Place a Test Order",
        url: "https://help.shopify.com/en/manual/orders/test-orders",
        type: "docs",
      },
      {
        id: "d3-r4",
        title: "Shopify Partners Blog — How to Work with Metafields in Themes",
        url: "https://www.shopify.com/partners/blog/metafields",
        type: "blog",
      },
      {
        id: "d3-r5",
        title: "Shopify Dev — Metafield Types Reference",
        url: "https://shopify.dev/docs/apps/build/metafields/types",
        type: "reference",
      },
      {
        id: "d3-r6",
        title: "Shopify Help — SEO Best Practices for Your Store",
        url: "https://help.shopify.com/en/manual/promoting-marketing/seo",
        type: "docs",
      },
    ],
  },
  {
    id: "day-4",
    moduleId: "week-1",
    title: "Day 4: Theme Polish & First Liquid",
    description:
      "Start customizing the visual identity and touch Liquid code for the first time.",
    order: 4,
    difficulty: "Beginner",
    videos: [
      {
        id: "d4-v1",
        title: "Theme Settings & Customization",
        youtubeId: "yelJTyI-5gU",
        duration: "15:30",
      },
      {
        id: "d4-v2",
        title: "Introduction to Liquid Syntax",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "14:15",
      },
      {
        id: "d4-v3",
        title: "Product Object Variables",
        youtubeId: "nM4anis2odE",
        duration: "10:45",
      },
      {
        id: "d4-v4",
        title: "Shopify Liquid in 100 Seconds",
        youtubeId: "RzWzM9LuQHE",
        duration: "02:00",
      },
      {
        id: "d4-v5",
        title: "How to Customize Your Shopify Theme Without Code",
        youtubeId: "YTobKoB4438",
        duration: "13:20",
      },
      {
        id: "d4-v6",
        title: "Adding Trust Badges to Shopify — Full Tutorial",
        youtubeId: "3ck7P-eRqME",
        duration: "08:55",
      },
      {
        id: "d4-v7",
        title: "Google PageSpeed Insights — How to Read & Fix Scores",
        youtubeId: "MBFmHMRnJxg",
        duration: "12:10",
      },
      {
        id: "d4-v8",
        title:
          "Shopify Theme Customization Full Course 2024 — Step by Step for Beginners",
        youtubeId: "GSAzs6OMufI",
        duration: "28:15",
      },
      {
        id: "d4-v9",
        title: "Shopify Liquid in 2 Minutes — Objects, Tags & Filters",
        youtubeId: "lUdyX2gycZs",
        duration: "02:15",
      },
      {
        id: "d4-v10",
        title:
          "Tags, Objects and Filters — Shopify Liquid Tutorial for Beginners",
        youtubeId: "tOGzml44rqg",
        duration: "11:50",
      },
    ],
    tasks: [
      {
        id: "d4-t1",
        title: "Customize theme fonts, colors, and logo",
      },
      {
        id: "d4-t2",
        title: "Add trust badges and announcement bar",
      },
      {
        id: "d4-t3",
        title: "Run Google PageSpeed Insights test",
      },
      {
        id: "d4-t4",
        title: "First Liquid touch: Locate product.liquid and read variables",
      },
    ],
    resources: [
      {
        id: "d4-r1",
        title: "Shopify Dev — Liquid Reference (Objects, Tags & Filters)",
        url: "https://shopify.dev/docs/api/liquid",
        type: "docs",
      },
      {
        id: "d4-r2",
        title: "Shopify Dev — Theme Architecture Overview",
        url: "https://shopify.dev/docs/storefronts/themes/architecture",
        type: "docs",
      },
      {
        id: "d4-r3",
        title: "Shopify Dev — Settings Schema Reference",
        url: "https://shopify.dev/docs/storefronts/themes/architecture/settings",
        type: "docs",
      },
      {
        id: "d4-r4",
        title: "Shopify Dev — Product Object in Liquid",
        url: "https://shopify.dev/docs/api/liquid/objects/product",
        type: "reference",
      },
      {
        id: "d4-r5",
        title: "Shopify Partners Blog — Mastering Liquid for Theme Development",
        url: "https://www.shopify.com/partners/blog/liquid",
        type: "blog",
      },
      {
        id: "d4-r6",
        title: "Google PageSpeed Insights — Test Your Store",
        url: "https://pagespeed.web.dev",
        type: "tool",
      },
    ],
  },
  {
    id: "day-5",
    moduleId: "week-1",
    title: "Day 5: Mobile UX & Optimization",
    description: "Ensure a smooth mobile experience and optimize assets.",
    order: 5,
    difficulty: "Beginner",
    videos: [
      {
        id: "d5-v1",
        title: "Responsive Design in Shopify",
        youtubeId: "P3I9SNvhRYk",
        duration: "12:40",
      },
      {
        id: "d5-v2",
        title: "Image Optimization Best Practices",
        youtubeId: "ViZIMBG2BAo",
        duration: "08:50",
      },
      {
        id: "d5-v3",
        title: "Speed Performance Audit",
        youtubeId: "lv1CFYklxqk",
        duration: "11:15",
      },
      {
        id: "d5-v4",
        title: "How I Made This Shopify Store Load Super Fast",
        youtubeId: "52MiD-EMU9E",
        duration: "13:00",
      },
      {
        id: "d5-v5",
        title: "Mobile-First Design Principles for eCommerce",
        youtubeId: "LeQ7r4CQVDE",
        duration: "10:30",
      },
      {
        id: "d5-v6",
        title: "How to Test Shopify Store on Mobile Devices",
        youtubeId: "oS_1q8IXDNE",
        duration: "07:20",
      },
      {
        id: "d5-v7",
        title: "Competitive Store Analysis — What to Look For",
        youtubeId: "FD3SACvBc38",
        duration: "14:15",
      },
      {
        id: "d5-v8",
        title:
          "Faster Loading & Better SEO — Shopify Image Optimization Deep Dive",
        youtubeId: "J3IrezcygIA",
        duration: "16:30",
      },
      {
        id: "d5-v9",
        title:
          "Shopify Speed Optimization — Fix Slow Loading, Improve SEO & Pass Core Web Vitals",
        youtubeId: "IPLPb1Bd_oE",
        duration: "21:40",
      },
    ],
    tasks: [
      {
        id: "d5-t1",
        title: "Fix mobile issues",
      },
      {
        id: "d5-t2",
        title: "Optimize images with TinyPNG",
      },
      {
        id: "d5-t3",
        title: "Test Klaviyo signup forms",
      },
      {
        id: "d5-t4",
        title: "Analyze competitive stores in your niche",
      },
    ],
    resources: [
      {
        id: "d5-r1",
        title:
          "Shopify Dev — Optimize Theme Images (image_url & image_tag filters)",
        url: "https://shopify.dev/docs/storefronts/themes/best-practices/images",
        type: "docs",
      },
      {
        id: "d5-r2",
        title: "Shopify Dev — Theme Performance Best Practices",
        url: "https://shopify.dev/docs/storefronts/themes/best-practices/performance",
        type: "docs",
      },
      {
        id: "d5-r3",
        title: "TinyPNG — Image Compression Tool",
        url: "https://tinypng.com",
        type: "tool",
      },
      {
        id: "d5-r4",
        title: "Google PageSpeed Insights — Run Your Store Audit",
        url: "https://pagespeed.web.dev",
        type: "tool",
      },
      {
        id: "d5-r5",
        title:
          "Smashing Magazine — Mobile-First Design Strategies for eCommerce",
        url: "https://www.smashingmagazine.com/2022/03/guide-mobile-ecommerce-ux/",
        type: "blog",
      },
      {
        id: "d5-r6",
        title: "Shopify Help — Optimizing Your Store for Performance",
        url: "https://help.shopify.com/en/manual/online-store/web-performance",
        type: "docs",
      },
    ],
  },
  {
    id: "day-6",
    moduleId: "week-1",
    title: "Day 6: [Assignment] Store Walkthrough",
    description:
      "Screen record a full store walkthrough and write your first case study.",
    order: 6,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d6-t1",
        title: "Screen record full store walkthrough (Loom/OBS)",
      },
      {
        id: "d6-t2",
        title: "Write first case study draft in Notion",
      },
      {
        id: "d6-t3",
        title: "Export 5-8 strong screenshots for portfolio",
      },
      {
        id: "d6-t4",
        title: "Reach out to 3 local businesses on LinkedIn",
      },
    ],
    resources: [
      {
        id: "d6-r1",
        title: "Loom — Free Screen Recorder for Walkthroughs",
        url: "https://www.loom.com",
        type: "tool",
      },
      {
        id: "d6-r2",
        title: "OBS Studio — Free Open Source Screen Recording",
        url: "https://obsproject.com",
        type: "tool",
      },
      {
        id: "d6-r3",
        title: "Shopify Partners Blog — How to Write a Great Case Study",
        url: "https://www.shopify.com/partners/blog/case-study",
        type: "blog",
      },
      {
        id: "d6-r4",
        title: "Notion — Free Workspace for Case Studies & Portfolio Tracking",
        url: "https://www.notion.so",
        type: "tool",
      },
      {
        id: "d6-r5",
        title: "Shopify Help — Understanding Your Store's Admin Overview",
        url: "https://help.shopify.com/en/manual/shopify-admin",
        type: "docs",
      },
      {
        id: "d6-r6",
        title: "Smashing Magazine — Writing Compelling Developer Case Studies",
        url: "https://www.smashingmagazine.com/2023/04/portfolio-case-studies-ux-designers/",
        type: "blog",
      },
    ],
  },
  {
    id: "day-7",
    moduleId: "week-1",
    title: "Day 7: [Assignment] Week 1 Review",
    description:
      "Review progress, engage with the community, and apply for your first micro-gigs.",
    order: 7,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d7-t1",
        title: "Analyze 3 competitor stores",
      },
      {
        id: "d7-t2",
        title: "Update portfolio page with Week 1 project",
      },
      {
        id: "d7-t3",
        title: "Post Week 1 progress on LinkedIn/X",
      },
      {
        id: "d7-t4",
        title: "Apply to 3-5 small Upwork/Fiverr gigs",
      },
    ],
    resources: [
      {
        id: "d7-r1",
        title:
          "Shopify Partners Blog — How to Find Your First Client as a Shopify Developer",
        url: "https://www.shopify.com/partners/blog/shopify-developer",
        type: "blog",
      },
      {
        id: "d7-r2",
        title: "Upwork — Shopify Developer Gigs Marketplace",
        url: "https://www.upwork.com/freelance-jobs/shopify/",
        type: "community",
      },
      {
        id: "d7-r3",
        title: "Shopify Community — Developers & Partners Forum",
        url: "https://community.shopify.com/c/shopify-apis-and-sdks/bd-p/shopify-apis-and-technology",
        type: "community",
      },
      {
        id: "d7-r4",
        title: "Shopify Help — Shopify Partner Revenue Share Program",
        url: "https://help.shopify.com/en/partners/getting-started/partner-revenue",
        type: "docs",
      },
      {
        id: "d7-r5",
        title: "Dev.to — Shopify Developers Tag (Weekly Articles & Tips)",
        url: "https://dev.to/t/shopify",
        type: "community",
      },
      {
        id: "d7-r6",
        title: "Smashing Magazine — Building a Freelance Developer Portfolio",
        url: "https://www.smashingmagazine.com/2022/05/developer-portfolio-case-studies/",
        type: "blog",
      },
    ],
  },

  // ============================================================
  // WEEK 2: THEME CUSTOMIZATION
  // ============================================================

  {
    id: "day-8",
    moduleId: "week-2",
    title: "Day 8: Dawn vs Horizon — Theme Architecture",
    description:
      "Understand the structural differences between Dawn and Horizon before customizing.",
    order: 1,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d8-v1",
        title: "Shopify Dawn Theme Customization 2024 — Full Tutorial",
        youtubeId: "wSiBxn7-sxE",
        duration: "18:00",
      },
      {
        id: "d8-v2",
        title:
          "The NEW Shopify Horizon Theme & AI Theme Blocks — Developer Analysis",
        youtubeId: "PBnQeTjOggM",
        duration: "14:30",
      },
      {
        id: "d8-v3",
        title: "Shopify Horizon Theme Tutorial 2025 — Step by Step",
        youtubeId: "E8oftst3e94",
        duration: "18:45",
      },
      {
        id: "d8-v4",
        title:
          "Understanding Shopify Theme File Structure, Custom Layouts & Intro to Liquid",
        youtubeId: "X_CjXF3Va1A",
        duration: "16:20",
      },
      {
        id: "d8-v5",
        title:
          "How to Use Shopify Horizon Theme Blocks to Build Custom Sections",
        youtubeId: "fzHtCIqS-VI",
        duration: "13:10",
      },
      {
        id: "d8-v6",
        title:
          "Shopify Dawn Theme Tutorial 2025 — Personalize Dawn Step by Step",
        youtubeId: "IlXGpMl0oyc",
        duration: "22:30",
      },
      {
        id: "d8-v7",
        title: "Shopify Horizon Theme Customization — Complete Guide",
        youtubeId: "2cuQsy414oM",
        duration: "19:50",
      },
    ],
    tasks: [
      {
        id: "d8-t1",
        title: "Duplicate Dawn theme and rename it clearly",
      },
      {
        id: "d8-t2",
        title: "Explore Horizon theme — compare block structure vs Dawn",
      },
      {
        id: "d8-t3",
        title: "Screenshot before state of every section before editing",
      },
      {
        id: "d8-t4",
        title: "Map theme folder structure in Notion",
      },
    ],
    resources: [
      {
        id: "d8-r1",
        title: "Shopify Dev — Theme Architecture Overview (Official Docs)",
        url: "https://shopify.dev/docs/storefronts/themes/architecture",
        type: "docs",
      },
      {
        id: "d8-r2",
        title: "Shopify Dev — Sections & Blocks Reference",
        url: "https://shopify.dev/docs/storefronts/themes/architecture/sections",
        type: "docs",
      },
      {
        id: "d8-r3",
        title: "Shopify Dev — Theme Blocks (Full Reference)",
        url: "https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks",
        type: "docs",
      },
      {
        id: "d8-r4",
        title: "Dawn — Official Shopify Reference Theme on GitHub",
        url: "https://github.com/Shopify/dawn",
        type: "github",
      },
      {
        id: "d8-r5",
        title: "Horizon — Official Shopify Theme on GitHub",
        url: "https://github.com/Shopify/horizon",
        type: "github",
      },
      {
        id: "d8-r6",
        title:
          "Shopify Partners Blog — Introducing Theme Blocks in Developer Preview",
        url: "https://www.shopify.com/partners/blog/themeblocks",
        type: "blog",
      },
    ],
  },
  {
    id: "day-9",
    moduleId: "week-2",
    title: "Day 9: Visual Identity Refinement",
    description: "Perfecting font pairings, button styles, and global spacing.",
    order: 2,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d9-v1",
        title: "Typography Rules for Web Design (15 Pro Tips)",
        youtubeId: "273iUvw2ljw",
        duration: "11:30",
      },
      {
        id: "d9-v2",
        title: "The Ultimate Guide to Typography for Beginners",
        youtubeId: "AXpxZMRM1EY",
        duration: "10:15",
      },
      {
        id: "d9-v3",
        title: "How to Add Custom Fonts to Shopify (2024)",
        youtubeId: "tmo9MSI28tw",
        duration: "08:00",
      },
      {
        id: "d9-v4",
        title: "Color Theory for Web Designers (8 Minutes)",
        youtubeId: "YiZeBtne1Ko",
        duration: "08:20",
      },
      {
        id: "d9-v5",
        title: "How to Choose the Best Color Scheme for Your Shopify Store",
        youtubeId: "n1Ox4qAnxr8",
        duration: "13:40",
      },
      {
        id: "d9-v6",
        title: "How to Pair Typefaces in Web Design Like a Pro",
        youtubeId: "W4Vt-Y78hg4",
        duration: "12:00",
      },
      {
        id: "d9-v7",
        title: "How to Customize Your Shopify Theme Without Code",
        youtubeId: "YTobKoB4438",
        duration: "10:45",
      },
    ],
    tasks: [
      {
        id: "d9-t1",
        title: "Update typography hierarchy",
      },
      {
        id: "d9-t2",
        title: "Update spacing + button styles for consistency",
      },
      {
        id: "d9-t3",
        title: "Add promotional banners and trust rows",
      },
    ],
    resources: [
      {
        id: "d9-r1",
        title: "Shopify Dev — Theme Settings Schema (fonts, colors, spacing)",
        url: "https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings",
        type: "docs",
      },
      {
        id: "d9-r2",
        title: "Shopify Dev — Font Object in Liquid",
        url: "https://shopify.dev/docs/api/liquid/objects/font",
        type: "docs",
      },
      {
        id: "d9-r3",
        title: "Google Fonts — Free Typeface Pairs for Web",
        url: "https://fonts.google.com",
        type: "tool",
      },
      {
        id: "d9-r4",
        title: "Coolors — Color Palette Generator",
        url: "https://coolors.co",
        type: "tool",
      },
      {
        id: "d9-r5",
        title:
          "Smashing Magazine — Better Typography on the Web: Typographic Scales",
        url: "https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/",
        type: "blog",
      },
      {
        id: "d9-r6",
        title:
          "Shopify Partners Blog — How to Create a Color Scheme for eCommerce",
        url: "https://www.shopify.com/partners/blog/color-scheme",
        type: "blog",
      },
    ],
  },
  {
    id: "day-10",
    moduleId: "week-2",
    title: "Day 10: Liquid Deep Dive (Objects & Filters)",
    description: "The foundation of Shopify backend logic.",
    order: 3,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d10-v1",
        title: "Shopify Liquid Objects, Filters & Variables — Full Course Ep.2",
        youtubeId: "nM4anis2odE",
        duration: "20:10",
      },
      {
        id: "d10-v2",
        title: "Shopify Theme Development — Liquid Full Tutorial",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "15:45",
      },
      {
        id: "d10-v3",
        title: "Shopify Liquid — New Array Filters Explained (2025)",
        youtubeId: "7MxeawRnHFY",
        duration: "10:00",
      },
      {
        id: "d10-v4",
        title:
          "Shopify Liquid in 2 Minutes — Objects, Tags & Filters (ShopifyDevs)",
        youtubeId: "lUdyX2gycZs",
        duration: "02:15",
      },
      {
        id: "d10-v5",
        title:
          "Tags, Objects and Filters — Shopify Liquid Tutorial for Beginners",
        youtubeId: "tOGzml44rqg",
        duration: "11:50",
      },
      {
        id: "d10-v6",
        title: "Shopify Liquid — Top Tips & Tricks for Theme Developers",
        youtubeId: "9UfGdd9blTE",
        duration: "09:30",
      },
      {
        id: "d10-v7",
        title:
          "Shopify Liquid Update — New Find, Find_Index, Has & Reject Filters",
        youtubeId: "ORlrp_1xvuY",
        duration: "11:50",
      },
    ],
    tasks: [
      {
        id: "d10-t1",
        title: "Practice product.price and image filters",
      },
      {
        id: "d10-t2",
        title: "Modify product cards in collection template",
      },
      {
        id: "d10-t3",
        title: "Download Liquid Cheat Sheet",
      },
    ],
    resources: [
      {
        id: "d10-r1",
        title: "Shopify Dev — Liquid Filters Reference (Complete List)",
        url: "https://shopify.dev/docs/api/liquid/filters",
        type: "docs",
      },
      {
        id: "d10-r2",
        title: "Shopify Dev — Liquid Objects Reference",
        url: "https://shopify.dev/docs/api/liquid/objects",
        type: "docs",
      },
      {
        id: "d10-r3",
        title: "Shopify Dev — Product Object Properties",
        url: "https://shopify.dev/docs/api/liquid/objects/product",
        type: "reference",
      },
      {
        id: "d10-r4",
        title: "Shopify Liquid Cheat Sheet — All Tags, Filters & Objects",
        url: "https://www.shopify.com/partners/shopify-cheat-sheet",
        type: "reference",
      },
      {
        id: "d10-r5",
        title: "Dev.to — Shopify Liquid Tips & Tricks for Theme Developers",
        url: "https://dev.to/t/shopify",
        type: "community",
      },
      {
        id: "d10-r6",
        title:
          "Shopify Dev — Liquid Basics (Operators, Truthy/Falsy, Whitespace)",
        url: "https://shopify.dev/docs/api/liquid/basics",
        type: "docs",
      },
    ],
  },
  {
    id: "day-11",
    moduleId: "week-2",
    title: "Day 11: Liquid Deep Dive (Loops & Conditionals)",
    description: "Master loops and conditional logic for dynamic storefronts.",
    order: 4,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d11-v1",
        title:
          "Shopify Liquid For Loop Tutorial (in 3 Minutes!) + forloop Object Explained",
        youtubeId: "wF6CpVcUfoM",
        duration: "03:00",
      },
      {
        id: "d11-v2",
        title:
          "Advanced Shopify Liquid For Loops — limit, offset, range, reversed Explained",
        youtubeId: "6eUFDtg_V9k",
        duration: "14:30",
      },
      {
        id: "d11-v3",
        title:
          "How to Use if Statements in Shopify Liquid — Conditional Logic Tutorial",
        youtubeId: "NR8y9t7KnM8",
        duration: "16:15",
      },
      {
        id: "d11-v4",
        title: "Shopify Liquid Conditionals — Liquid Full Course",
        youtubeId: "0aPIc4-8xXs",
        duration: "12:00",
      },
      {
        id: "d11-v5",
        title: "Learn Shopify Liquid For Loop and Conditional CSS",
        youtubeId: "cE80q0roQUI",
        duration: "15:00",
      },
      {
        id: "d11-v6",
        title:
          "Shopify Liquid For Loop Tricks — break, continue, cycle, else Explained",
        youtubeId: "drk8bYslXo0",
        duration: "12:40",
      },
      {
        id: "d11-v7",
        title: "Shopify Liquid Tutorial — Conditional Theme Settings",
        youtubeId: "MACgGUEOPSg",
        duration: "10:20",
      },
    ],
    tasks: [
      {
        id: "d11-t1",
        title: "Practice {% for %} loops in collection grids",
      },
      {
        id: "d11-t2",
        title: "Apply {% if %} conditionals for inventory status",
      },
      {
        id: "d11-t3",
        title: 'Add conditional "Sold Out" badges',
      },
    ],
    resources: [
      {
        id: "d11-r1",
        title: "Shopify Dev — Liquid Tags: for Loop",
        url: "https://shopify.dev/docs/api/liquid/tags/for",
        type: "docs",
      },
      {
        id: "d11-r2",
        title: "Shopify Dev — Liquid Tags: if / elsif / else",
        url: "https://shopify.dev/docs/api/liquid/tags/if",
        type: "docs",
      },
      {
        id: "d11-r3",
        title: "Shopify Dev — Liquid Basics: Control Flow",
        url: "https://shopify.dev/docs/api/liquid/basics",
        type: "docs",
      },
      {
        id: "d11-r4",
        title: "Shopify Dev — forloop Object Reference",
        url: "https://shopify.dev/docs/api/liquid/objects/forloop",
        type: "reference",
      },
      {
        id: "d11-r5",
        title: "Liquid Template Language — Control Flow (unless, case, when)",
        url: "https://shopify.github.io/liquid/tags/control-flow/",
        type: "reference",
      },
      {
        id: "d11-r6",
        title:
          "Shopify Community — Liquid Conditionals & Loop Tips (Forum Thread)",
        url: "https://community.shopify.com/c/shopify-apis-and-sdks/bd-p/shopify-apis-and-technology",
        type: "community",
      },
    ],
  },
  {
    id: "day-12",
    moduleId: "week-2",
    title: "Day 12: Sticky Add to Cart Logic",
    description: "Building performance-driven conversion features.",
    order: 5,
    difficulty: "Advanced",
    videos: [
      {
        id: "d12-v1",
        title: "Shopify AJAX Cart — Crash Course Tutorial",
        youtubeId: "pdQCyUWFIcY",
        duration: "22:15",
      },
      {
        id: "d12-v2",
        title: "Creating a Shopify AJAX Cart Drawer from Scratch",
        youtubeId: "gKXGjvl8Alc",
        duration: "18:40",
      },
      {
        id: "d12-v3",
        title: "How To Add Sticky Add To Cart — Without APP (Shopify 2024)",
        youtubeId: "xdKrGL9X2Zo",
        duration: "12:50",
      },
      {
        id: "d12-v4",
        title:
          "How to Add Sticky Add to Cart Button on Shopify Dawn Theme — Without App",
        youtubeId: "ATYy5Yg6TqM",
        duration: "11:00",
      },
      {
        id: "d12-v5",
        title:
          "Shopify Section Rendering API — Update Sections Without Page Reload",
        youtubeId: "s1khSuOyAUA",
        duration: "15:00",
      },
      {
        id: "d12-v6",
        title:
          "Shopify Section Rendering API — Update a Section Without Page Refresh",
        youtubeId: "LtogqzYUrPU",
        duration: "13:30",
      },
      {
        id: "d12-v7",
        title: "Shopify Ajax add to cart Tutorial — Theme Development",
        youtubeId: "VON2KS1b-ck",
        duration: "19:20",
      },
    ],
    tasks: [
      {
        id: "d12-t1",
        title: "Implement sticky add-to-cart bar",
      },
      {
        id: "d12-t2",
        title: "Connect bar to Shopify AJAX cart API",
      },
      {
        id: "d12-t3",
        title: "Test thoroughly on mobile devices",
      },
    ],
    resources: [
      {
        id: "d12-r1",
        title: "Shopify Dev — AJAX API Reference (Cart Endpoints)",
        url: "https://shopify.dev/docs/api/ajax/reference/cart",
        type: "docs",
      },
      {
        id: "d12-r2",
        title: "Shopify Dev — Section Rendering API",
        url: "https://shopify.dev/docs/api/section-rendering",
        type: "docs",
      },
      {
        id: "d12-r3",
        title: "Shopify Dev — Cart Object in Liquid",
        url: "https://shopify.dev/docs/api/liquid/objects/cart",
        type: "reference",
      },
      {
        id: "d12-r4",
        title:
          "Shopify Dev — Build Cart Interactions (add.js, change.js, update.js)",
        url: "https://shopify.dev/docs/storefronts/themes/build/cart",
        type: "docs",
      },
      {
        id: "d12-r5",
        title:
          "Shopify Partners Blog — How to Build an Interactive Cart with the AJAX API",
        url: "https://www.shopify.com/partners/blog/cart-drawer",
        type: "blog",
      },
      {
        id: "d12-r6",
        title: "Liquid Ajax Cart — Open Source JS Library for AJAX Carts",
        url: "https://liquid-ajax-cart.js.org",
        type: "github",
      },
    ],
  },
  {
    id: "day-13",
    moduleId: "week-2",
    title: "Day 13: [Assignment] Variant Swatches",
    description: "Build a custom variant swatch system using Liquid.",
    order: 6,
    difficulty: "Advanced",
    videos: [
      {
        id: "d13-v1",
        title: "Shopify Color Swatches — Set Up on Any Theme for FREE (2025)",
        youtubeId: "vk8KUZN0hrI",
        duration: "14:00",
      },
      {
        id: "d13-v2",
        title:
          "Shopify Development — Color Swatches to Product Page (Variant Switch Explained)",
        youtubeId: "JmyQNJTt4gQ",
        duration: "16:00",
      },
      {
        id: "d13-v3",
        title: "Shopify Liquid Tutorial — Product Recommendations Section",
        youtubeId: "Kw-FhRUoSLM",
        duration: "18:00",
      },
      {
        id: "d13-v4",
        title:
          "How to Add Shopify Color Swatches to Product & Collection Page — No App (Dawn)",
        youtubeId: "lPMK2S_vS1Y",
        duration: "15:30",
      },
      {
        id: "d13-v5",
        title:
          "How To Add Shopify Color Swatches on Product Page 2024 — For Beginners",
        youtubeId: "O8ATLVw4akg",
        duration: "11:40",
      },
      {
        id: "d13-v6",
        title: "Build a Product Modal Using the Shopify Section Rendering API",
        youtubeId: "cT7hF1Yf0wE",
        duration: "16:30",
      },
    ],
    tasks: [
      {
        id: "d13-t1",
        title: "Style variant selectors with custom CSS",
      },
      {
        id: "d13-t2",
        title: 'Add "You may also like" using Liquid recommendations',
      },
      {
        id: "d13-t3",
        title: "Improve product page trust icons",
      },
    ],
    resources: [
      {
        id: "d13-r1",
        title: "Shopify Dev — Variant Object in Liquid",
        url: "https://shopify.dev/docs/api/liquid/objects/variant",
        type: "docs",
      },
      {
        id: "d13-r2",
        title: "Shopify Dev — Product Recommendations (Liquid Object)",
        url: "https://shopify.dev/docs/api/liquid/objects/recommendations",
        type: "docs",
      },
      {
        id: "d13-r3",
        title: "Shopify Dev — Show Product Recommendations in a Theme",
        url: "https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations/show-product-recommendations",
        type: "docs",
      },
      {
        id: "d13-r4",
        title:
          "Shopify Partners Blog — How to Build a Related Products Section",
        url: "https://www.shopify.com/partners/blog/related-products",
        type: "blog",
      },
      {
        id: "d13-r5",
        title: "Shopify Dev — Product Recommendations AJAX API Reference",
        url: "https://shopify.dev/docs/api/ajax/reference/product-recommendations",
        type: "reference",
      },
      {
        id: "d13-r6",
        title: "Shopify Help — Set Up Product Variants",
        url: "https://help.shopify.com/en/manual/products/variants",
        type: "docs",
      },
    ],
  },
  {
    id: "day-14",
    moduleId: "week-2",
    title: "Day 14: [Assignment] Week 2 Review",
    description: "Write project case studies and engage with store owners.",
    order: 7,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d14-t1",
        title: "Write full case study for Project #2",
      },
      {
        id: "d14-t2",
        title: "Post build log on LinkedIn/X",
      },
      {
        id: "d14-t3",
        title: "Message 3-5 store owners with feedback",
      },
    ],
    resources: [
      {
        id: "d14-r1",
        title:
          "Shopify Partners Blog — How to Write a Shopify Developer Case Study",
        url: "https://www.shopify.com/partners/blog/case-study",
        type: "blog",
      },
      {
        id: "d14-r2",
        title: "Shopify Dev — Changelog (Stay Current with New Features)",
        url: "https://shopify.dev/changelog",
        type: "docs",
      },
      {
        id: "d14-r3",
        title: "Shopify Community — Liquid & Theme Developer Forum",
        url: "https://community.shopify.com/c/shopify-apis-and-sdks/bd-p/shopify-apis-and-technology",
        type: "community",
      },
      {
        id: "d14-r4",
        title: "Upwork — Shopify Developer Freelance Jobs",
        url: "https://www.upwork.com/freelance-jobs/shopify/",
        type: "community",
      },
      {
        id: "d14-r5",
        title:
          "Smashing Magazine — Writing a Strong Developer Portfolio Case Study",
        url: "https://www.smashingmagazine.com/2022/05/developer-portfolio-case-studies/",
        type: "blog",
      },
      {
        id: "d14-r6",
        title: "Dev.to — Shopify Tag (Weekly Developer Articles & Community)",
        url: "https://dev.to/t/shopify",
        type: "community",
      },
    ],
  },

  // ============================================================
  // WEEK 3: NO-CODE PROWESS
  // ============================================================
   {
      id: "day-15",
      moduleId: "week-3",
      title: "Day 15: Product Landing Page Strategy",
      description: "Research and plan high-converting product pages.",
      order: 1,
      difficulty: "Intermediate",
      videos: [
        {
          id: "d15-v1",
          title: "Shopify CRO: Beginner's Guide to Conversion Rate Optimization",
          youtubeId: "N9Jn4kiXpYw",
          duration: "15:10"
        },
        {
          id: "d15-v2",
          title: "How to Build Shopify Pages That Convert (2025)",
          youtubeId: "vWOZpJama8E",
          duration: "12:45"
        },
        {
          id: "d15-v3",
          title: "5 Strategies to Optimize Your Shopify Product Page for Max Conversions",
          youtubeId: "aYB1Uqs3n9E",
          duration: "10:30"
        },
        {
          id: "d15-v4",
          title: "How To Design High Converting Product Pages in 2025 (Shopify)",
          youtubeId: "mf20MLXB_dg",
          duration: "13:20"
        },
        {
          id: "d15-v5",
          title: "Before & After: Shopify Landing Page Using Figma + 3D",
          youtubeId: "Mqx8CdTxCRw",
          duration: "11:00"
        }
      ],
      tasks: [
        {
          id: "d15-t1",
          title: "Research 5 high-converting landing pages"
        },
        {
          id: "d15-t2",
          title: "Sketch layout in Canva or Figma"
        },
        {
          id: "d15-t3",
          title: "Read 1 short CRO article"
        }
      ],
      resources: [
        {
          id: "d15-r1",
          title: "Shopify Blog — Conversion Rate Optimization: Get Started",
          url: "https://www.shopify.com/blog/120261189-conversion-rate-optimization",
          type: "blog"
        },
        {
          id: "d15-r2",
          title: "Shopify Help — Understand Your Store's Analytics",
          url: "https://help.shopify.com/en/manual/reports-and-analytics",
          type: "docs"
        },
        {
          id: "d15-r3",
          title: "Shopify Academy — Conversion Rate Optimization Learning Path",
          url: "https://www.shopifyacademy.com/path/conversion-rate-optimization-with-shopify",
          type: "docs"
        },
        {
          id: "d15-r4",
          title: "Smashing Magazine — Designing High-Conversion Landing Pages",
          url: "https://www.smashingmagazine.com/2022/04/landing-page-design-conversion/",
          type: "blog"
        },
        {
          id: "d15-r5",
          title: "Figma — Free Wireframing Tool",
          url: "https://www.figma.com",
          type: "tool"
        },
        {
          id: "d15-r6",
          title: "Shopify Blog — CRO Statistics: 34 Vital Conversion Rate Stats",
          url: "https://www.shopify.com/blog/cro-statistics",
          type: "blog"
        }
      ]
    },
    {
      id: "day-16",
      moduleId: "week-3",
      title: "Day 16: PageFly Builder Deep Dive",
      description: "Building mobile-first layouts with PageFly.",
      order: 2,
      difficulty: "Intermediate",
      videos: [
        {
          id: "d16-v1",
          title: "How To Use PageFly On Shopify 2024 — PageFly Tutorial (Latest Version)",
          youtubeId: "Z1J6lqVlGt4",
          duration: "20:45"
        },
        {
          id: "d16-v2",
          title: "How to Create ONE PRODUCT Shopify Store With PageFly in 2024",
          youtubeId: "jXx1P1dwrgA",
          duration: "18:20"
        },
        {
          id: "d16-v3",
          title: "Shopify Landing Page Example Built by PageFly",
          youtubeId: "2xTzlNRwmfQ",
          duration: "14:15"
        },
        {
          id: "d16-v4",
          title: "How To Create Shopify Landing Page With PageFly (2024)",
          youtubeId: "aSG1R3gvmgw",
          duration: "12:00"
        },
        {
          id: "d16-v5",
          title: "How to use PageFly on Shopify — PageFly Tutorial 2024",
          youtubeId: "KaVZdosTEO8",
          duration: "10:30"
        },
        {
          id: "d16-v6",
          title: "How to create Shopify store banner section — PageFly Tutorial 2024",
          youtubeId: "LvCVWkhctDQ",
          duration: "08:15"
        }
      ],
      tasks: [
        {
          id: "d16-t1",
          title: "Build hero section with strong headline"
        },
        {
          id: "d16-t2",
          title: "Add trust bars and social proof signals"
        },
        {
          id: "d16-t3",
          title: "Test on mobile at every stage"
        }
      ],
      resources: [
        {
          id: "d16-r1",
          title: "PageFly — Official Shopify App Listing",
          url: "https://apps.shopify.com/pagefly",
          type: "docs"
        },
        {
          id: "d16-r2",
          title: "PageFly Help Center — How to Use Pages and Sections",
          url: "https://help.pagefly.io/pages-and-sections-creation/general/how-to-use-pagefly-pages-and-sections",
          type: "docs"
        },
        {
          id: "d16-r3",
          title: "Shopify Help — Online Store Pages Overview",
          url: "https://help.shopify.com/en/manual/online-store/pages",
          type: "docs"
        },
        {
          id: "d16-r4",
          title: "Shopify Blog — How to Create a Landing Page on Shopify",
          url: "https://www.shopify.com/blog/landing-page",
          type: "blog"
        },
        {
          id: "d16-r5",
          title: "Google PageSpeed Insights — Test Your Pages",
          url: "https://pagespeed.web.dev",
          type: "tool"
        },
        {
          id: "d16-r6",
          title: "Smashing Magazine — Mobile-First Design in Practice",
          url: "https://www.smashingmagazine.com/2022/03/guide-mobile-ecommerce-ux/",
          type: "blog"
        }
      ]
    },
    {
      id: "day-17",
      moduleId: "week-3",
      title: "Day 17: Trust & Social Proof Logic",
      description: "Integrating reviews and FAQ sections for conversions.",
      order: 3,
      difficulty: "Intermediate",
      videos: [
        {
          id: "d17-v1",
          title: "Judge.me Reviews Shopify Tutorial — How To Add Reviews on Shopify Store",
          youtubeId: "K3TUuSYpYOo",
          duration: "11:20"
        },
        {
          id: "d17-v2",
          title: "How To Use Judge.Me For Your Shopify Store — Full Guide 2024",
          youtubeId: "plkEMDHubsA",
          duration: "15:10"
        },
        {
          id: "d17-v3",
          title: "judge.me Reviews Shopify Tutorial — How to Use judge.me on Shopify (2024)",
          youtubeId: "EqSlozdAoQk",
          duration: "09:45"
        },
        {
          id: "d17-v4",
          title: "How to Customize Judge.Me Reviews For Shopify Store (2024)",
          youtubeId: "cvnKbOg_Vv0",
          duration: "12:30"
        },
        {
          id: "d17-v5",
          title: "Judge.Me Shopify Tutorial — How To Use Judge.Me On Shopify",
          youtubeId: "BTZG5b7HJ1k",
          duration: "08:50"
        }
      ],
      tasks: [
        {
          id: "d17-t1",
          title: "Add testimonial carousel with demo reviews"
        },
        {
          id: "d17-t2",
          title: "Build FAQ section with 3-5 questions"
        },
        {
          id: "d17-t3",
          title: "Apply custom CSS for smooth transitions"
        }
      ],
      resources: [
        {
          id: "d17-r1",
          title: "Judge.me — Official Shopify App Listing",
          url: "https://apps.shopify.com/judgeme",
          type: "docs"
        },
        {
          id: "d17-r2",
          title: "Shopify Help — Add Social Proof and Trust to Your Store",
          url: "https://help.shopify.com/en/manual/promoting-marketing/trust-and-security",
          type: "docs"
        },
        {
          id: "d17-r3",
          title: "Judge.me Blog — Tips for Shopify Social Proof 2024",
          url: "https://judge.me/blog/tips-for-shopify-social-proof-2024",
          type: "blog"
        },
        {
          id: "d17-r4",
          title: "Shopify Partners Blog — 6 Ways to Leverage Social Proof",
          url: "https://www.shopify.com/partners/blog/social-proof",
          type: "blog"
        },
        {
          id: "d17-r5",
          title: "Shopify Help — Adding an FAQ Page to Your Store",
          url: "https://help.shopify.com/en/manual/online-store/pages/faq-page",
          type: "docs"
        },
        {
          id: "d17-r6",
          title: "Shopify Community — Social Proof & Reviews Best Practices",
          url: "https://community.shopify.com/c/shopify-discussions/bd-p/general-discussion",
          type: "community"
        }
      ]
    },
    {
      id: "day-18",
      moduleId: "week-3",
      title: "Day 18: Collection Page UX (GemPages)",
      description: "Designing promo-led collection pages.",
      order: 4,
      difficulty: "Intermediate",
      videos: [
        {
          id: "d18-v1",
          title: "GemPages Shopify Tutorial 2024 — How to Use GemPages on Shopify",
          youtubeId: "0zLi-2hZcT0",
          duration: "15:40"
        },
        {
          id: "d18-v2",
          title: "How To Use GemPages For Shopify 2024 — GemPages Shopify Tutorial",
          youtubeId: "r4o267TFBsw",
          duration: "12:10"
        },
        {
          id: "d18-v3",
          title: "GemPages Shopify Landing Page Tutorial in 2024",
          youtubeId: "ehuc_kGRb1E",
          duration: "14:00"
        },
        {
          id: "d18-v4",
          title: "GemPages Product Page Customization Tutorial (Step-by-Step)",
          youtubeId: "Qq5NbLoeM4k",
          duration: "09:20"
        },
        {
          id: "d18-v5",
          title: "How to Create a Product Page — v6 Editor — GemPages Tutorial",
          youtubeId: "SM5K7ICvwsM",
          duration: "11:45"
        }
      ],
      tasks: [
        {
          id: "d18-t1",
          title: "Research filtering UX on competitor sites"
        },
        {
          id: "d18-t2",
          title: "Build GemPages collection grid"
        },
        {
          id: "d18-t3",
          title: "Add promotional categories and banners"
        }
      ],
      resources: [
        {
          id: "d18-r1",
          title: "GemPages — Official Shopify App Listing",
          url: "https://apps.shopify.com/gempages",
          type: "docs"
        },
        {
          id: "d18-r2",
          title: "Shopify Help — Customizing Collection Pages",
          url: "https://help.shopify.com/en/manual/online-store/themes/theme-structure/collection-pages",
          type: "docs"
        },
        {
          id: "d18-r3",
          title: "Shopify Dev — Collection Object in Liquid",
          url: "https://shopify.dev/docs/api/liquid/objects/collection",
          type: "reference"
        },
        {
          id: "d18-r4",
          title: "Shopify Blog — How to Design Collection Pages That Convert",
          url: "https://www.shopify.com/blog/ecommerce-site-design",
          type: "blog"
        },
        {
          id: "d18-r5",
          title: "Smashing Magazine — eCommerce UX: Collection & Category Pages",
          url: "https://www.smashingmagazine.com/2021/01/ecommerce-ux-category-pages/",
          type: "blog"
        },
        {
          id: "d18-r6",
          title: "Shopify Help — Add Filtering and Sorting to Collections",
          url: "https://help.shopify.com/en/manual/online-store/storefront-filters",
          type: "docs"
        }
      ]
    },
    {
      id: "day-19",
      moduleId: "week-3",
      title: "Day 19: Filter Systems & Promo Badges",
      description: "Advanced collection logic and visual badges.",
      order: 5,
      difficulty: "Intermediate",
      videos: [
        {
          id: "d19-v1",
          title: "How To Use Shopify Search And Discovery App",
          youtubeId: "9GPOMJcXkl4",
          duration: "14:20"
        },
        {
          id: "d19-v2",
          title: "How To Use New Shopify Search & Discovery App",
          youtubeId: "CKrhh2v-33Y",
          duration: "11:15"
        },
        {
          id: "d19-v3",
          title: "Filter by Category Meta Fields — Shopify Search & Discovery App — Winter Edition 25",
          youtubeId: "EDp3yVxZHFA",
          duration: "13:00"
        },
        {
          id: "d19-v4",
          title: "Klaviyo Shopify Integration Tutorial — Set Up in Minutes",
          youtubeId: "GrMPs5Oq_XI",
          duration: "09:50"
        },
        {
          id: "d19-v5",
          title: "How to Use Shopify Search and Discovery App (Enhanced Searches)",
          youtubeId: "PCLUML9GkEg",
          duration: "10:10"
        }
      ],
      tasks: [
        {
          id: "d19-t1",
          title: "Implement stars/rating badge system"
        },
        {
          id: "d19-t2",
          title: "Add newsletter signup blocks"
        },
        {
          id: "d19-t3",
          title: "Perform final mobile QA pass"
        }
      ],
      resources: [
        {
          id: "d19-r1",
          title: "Shopify Help — Shopify Search & Discovery App",
          url: "https://help.shopify.com/en/manual/online-store/search-and-discovery/app",
          type: "docs"
        },
        {
          id: "d19-r2",
          title: "Shopify Help — Set Up Storefront Filtering",
          url: "https://help.shopify.com/en/manual/online-store/storefront-filters",
          type: "docs"
        },
        {
          id: "d19-r3",
          title: "Klaviyo — Official Shopify Integration Guide",
          url: "https://help.klaviyo.com/hc/en-us/articles/115005255808",
          type: "docs"
        },
        {
          id: "d19-r4",
          title: "Shopify Dev — Product Badges & Metafields for Collection Pages",
          url: "https://shopify.dev/docs/storefronts/themes/product-merchandising/badges",
          type: "docs"
        },
        {
          id: "d19-r5",
          title: "Shopify Blog — How to Use Email Marketing to Boost Sales",
          url: "https://www.shopify.com/blog/email-marketing",
          type: "blog"
        },
        {
          id: "d19-r6",
          title: "Shopify Help — Add a Newsletter Signup to Your Store",
          url: "https://help.shopify.com/en/manual/promoting-marketing/create-marketing/newsletter-signup",
          type: "docs"
        }
      ]
    },
    {
      id: "day-20",
      moduleId: "week-3",
      title: "Day 20: [Assignment] Brand Storytelling Build",
      description: "Crafting the narrative that builds trust.",
      order: 6,
      difficulty: "Intermediate",
      videos: [],
      tasks: [
        {
          id: "d20-t1",
          title: "Research 5 strong About Us pages"
        },
        {
          id: "d20-t2",
          title: "Build brand origin section in PageFly"
        },
        {
          id: "d20-t3",
          title: "Add mission and values with icons"
        }
      ],
      resources: [
        {
          id: "d20-r1",
          title: "Shopify Blog — 16 Great About Us Page Examples That Drive Results",
          url: "https://www.shopify.com/blog/how-to-write-an-about-us-page",
          type: "blog"
        },
        {
          id: "d20-r2",
          title: "Shopify Blog — Storytelling in Branding: How to Craft a Story That Sells",
          url: "https://www.shopify.com/blog/brand-storytelling",
          type: "blog"
        },
        {
          id: "d20-r3",
          title: "Shopify Blog — How to Build a Brand Story for Your Retail Store",
          url: "https://www.shopify.com/retail/brand-story",
          type: "blog"
        },
        {
          id: "d20-r4",
          title: "PageFly — Official Shopify App (Build About Us Pages)",
          url: "https://apps.shopify.com/pagefly",
          type: "docs"
        },
        {
          id: "d20-r5",
          title: "Canva — Free Design Tool for Brand Assets & Icons",
          url: "https://www.canva.com",
          type: "tool"
        },
        {
          id: "d20-r6",
          title: "Noun Project — Free Icons for Mission & Values Sections",
          url: "https://thenounproject.com",
          type: "tool"
        }
      ]
    },
    {
      id: "day-21",
      moduleId: "week-3",
      title: "Day 21: [Assignment] Mid-Phase Audit",
      description: "Reviewing performance and SEO across all no-code pages.",
      order: 7,
      difficulty: "Intermediate",
      videos: [],
      tasks: [
        {
          id: "d21-t1",
          title: "Write mini case studies for Projects 3-5"
        },
        {
          id: "d21-t2",
          title: "Update portfolio with 3 new landing pages"
        },
        {
          id: "d21-t3",
          title: "Publish build threads on LinkedIn/X"
        }
      ],
      resources: [
        {
          id: "d21-r1",
          title: "Shopify Help — Web Performance Dashboard",
          url: "https://help.shopify.com/en/manual/online-store/web-performance",
          type: "docs"
        },
        {
          id: "d21-r2",
          title: "Shopify Help — SEO Best Practices for Your Store",
          url: "https://help.shopify.com/en/manual/promoting-marketing/seo",
          type: "docs"
        },
        {
          id: "d21-r3",
          title: "Google PageSpeed Insights — Audit Your Pages",
          url: "https://pagespeed.web.dev",
          type: "tool"
        },
        {
          id: "d21-r4",
          title: "Shopify Partners Blog — How to Write a Shopify Developer Case Study",
          url: "https://www.shopify.com/partners/blog/case-study",
          type: "blog"
        },
        {
          id: "d21-r5",
          title: "Loom — Free Screen Recorder for Portfolio Walkthroughs",
          url: "https://www.loom.com",
          type: "tool"
        },
        {
          id: "d21-r6",
          title: "Shopify Dev — Changelog (Stay Current with Platform Updates)",
          url: "https://shopify.dev/changelog",
          type: "docs"
        }
      ]
    },

  // ============================================================
  // WEEK 4: CAMPAIGN ENGINEERING
  // ============================================================
  {
      id: "day-22",
      moduleId: "week-4",
      title: "Day 22: Seasonal Campaign Strategies",
      description: "Black Friday and flash sale psychology.",
      order: 1,
      difficulty: "Intermediate",
      videos: [
        {
          id: "d22-v1",
          title: "$18,025 per Day on Shopify — Black Friday Strategy 2024",
          youtubeId: "mMHm9G47J6I",
          duration: "14:50"
        },
        {
          id: "d22-v2",
          title: "#1 Shopify Black Friday Strategy for More Sales",
          youtubeId: "T-rIuvSNNws",
          duration: "12:30"
        },
        {
          id: "d22-v3",
          title: "Shopify BFCM Strategy — Turn Black Friday Sales Into Long-Term Retention",
          youtubeId: "eqVOa4nstsM",
          duration: "15:00"
        },
        {
          id: "d22-v4",
          title: "How To Add A Shopify Countdown Timer Without Using Shopify Apps",
          youtubeId: "vq2KihH5VPs",
          duration: "11:30"
        },
        {
          id: "d22-v5",
          title: "The Truth About Shopify Countdown Timers (Real vs Fake)",
          youtubeId: "b_vyOfNIVN8",
          duration: "13:10"
        }
      ],
      tasks: [
        {
          id: "d22-t1",
          title: "Research 5 seasonal landing pages"
        },
        {
          id: "d22-t2",
          title: "Plan countdown and bundle sections"
        },
        {
          id: "d22-t3",
          title: "Sketch campaign layout"
        }
      ],
      resources: [
        {
          id: "d22-r1",
          title: "Shopify Blog — BFCM Campaigns: 13 Proven Strategies",
          url: "https://www.shopify.com/blog/bfcm-campaigns",
          type: "blog"
        },
        {
          id: "d22-r2",
          title: "Shopify Blog — Black Friday Checklist: 25 BFCM Prep Steps",
          url: "https://www.shopify.com/blog/bfcm-checklist",
          type: "blog"
        },
        {
          id: "d22-r3",
          title: "Shopify Help — Create Discount Codes for Sales Events",
          url: "https://help.shopify.com/en/manual/discounts",
          type: "docs"
        },
        {
          id: "d22-r4",
          title: "Shopify Help — Automatic Discounts for Flash Sales",
          url: "https://help.shopify.com/en/manual/discounts/automatic-discounts",
          type: "docs"
        },
        {
          id: "d22-r5",
          title: "PageFly Blog — Black Friday Landing Page Templates 2024",
          url: "https://pagefly.io/blogs/shopify/black-friday-landing-page",
          type: "blog"
        },
        {
          id: "d22-r6",
          title: "Shopify Blog — Black Friday Social Media Strategy",
          url: "https://www.shopify.com/blog/5-black-friday-cyber-monday-social-media-campaigns",
          type: "blog"
        }
      ]
    },
    {
      id: "day-23",
      moduleId: "week-4",
      title: "Day 23: Urgency & Scarcity Systems",
      description: "Building live countdown timers and stock level alerts.",
      order: 2,
      difficulty: "Advanced",
      videos: [
        {
          id: "d23-v1",
          title: "How to Add Shopify Countdown Timer Announcement Bar 2024 (Easy)",
          youtubeId: "JW65gUtO_dQ",
          duration: "10:15"
        },
        {
          id: "d23-v2",
          title: "How to Add Countdown Timer to Shopify Website (FREE)",
          youtubeId: "zv0oZ4POvzw",
          duration: "08:40"
        },
        {
          id: "d23-v3",
          title: "How to add Shopify Countdown Timer on Homepage 2025",
          youtubeId: "u11AKLgjshs",
          duration: "12:00"
        },
        {
          id: "d23-v4",
          title: "How To Setup Strikethrough Sale Price on Shopify",
          youtubeId: "1KglWblFh58",
          duration: "10:20"
        },
        {
          id: "d23-v5",
          title: "Shopify Core Web Vitals Score Too Low? Fix It in 5 Minutes",
          youtubeId: "l4Ep4ZvSVnk",
          duration: "09:45"
        }
      ],
      tasks: [
        {
          id: "d23-t1",
          title: "Build hero with countdown timer"
        },
        {
          id: "d23-t2",
          title: "Implement strikethrough pricing logic"
        },
        {
          id: "d23-t3",
          title: "Add sticky bottom bar with urgency copy"
        }
      ],
      resources: [
        {
          id: "d23-r1",
          title: "Shopify Help — Setting Sale Prices (Compare At Price)",
          url: "https://help.shopify.com/en/manual/products/details/product-pricing/sale-pricing",
          type: "docs"
        },
        {
          id: "d23-r2",
          title: "Shopify Dev — Liquid: product.compare_at_price Reference",
          url: "https://shopify.dev/docs/api/liquid/objects/product#product-compare_at_price",
          type: "reference"
        },
        {
          id: "d23-r3",
          title: "Shopify Help — Add a Countdown Timer Using Theme Editor",
          url: "https://help.shopify.com/en/manual/online-store/themes/theme-structure/countdown",
          type: "docs"
        },
        {
          id: "d23-r4",
          title: "Shopify App Store — Essential Countdown Timer Bar",
          url: "https://apps.shopify.com/essential-countdown-timer",
          type: "tool"
        },
        {
          id: "d23-r5",
          title: "Shopify Dev — inventory_quantity in Liquid",
          url: "https://shopify.dev/docs/api/liquid/objects/variant#variant-inventory_quantity",
          type: "reference"
        },
        {
          id: "d23-r6",
          title: "Shopify Blog — How to Create Urgency in Your Shopify Store",
          url: "https://www.shopify.com/blog/ecommerce-urgency",
          type: "blog"
        }
      ]
    },
    {
      id: "day-24",
      moduleId: "week-4",
      title: "Day 24: Page Performance & SEO Cleanup",
      description: "Final technical optimization for phase completion.",
      order: 3,
      difficulty: "Intermediate",
      videos: [
        {
          id: "d24-v1",
          title: "Shopify SEO Audit Guide — Complete Checklist Step by Step",
          youtubeId: "vSRdFpG-9Qk",
          duration: "18:50"
        },
        {
          id: "d24-v2",
          title: "Shopify SEO — Checklist + Best Google Optimization Tips (2025)",
          youtubeId: "dbSPTZ54zDQ",
          duration: "12:20"
        },
        {
          id: "d24-v3",
          title: "Watch Me Do A Shopify SEO Audit & Provide The Exact Strategy",
          youtubeId: "tsR-FkzSQl0",
          duration: "14:00"
        },
        {
          id: "d24-v4",
          title: "Steal My Shopify SEO Audit ($100k/mo Blueprint)",
          youtubeId: "D8CzAmb8x4Y",
          duration: "08:30"
        },
        {
          id: "d24-v5",
          title: "Mastering Shopify Core Web Vitals Optimization",
          youtubeId: "vJaFYj2CUx8",
          duration: "11:15"
        }
      ],
      tasks: [
        {
          id: "d24-t1",
          title: "Speed check all 6 portfolio projects"
        },
        {
          id: "d24-t2",
          title: "Verify SEO meta titles on all pages"
        },
        {
          id: "d24-t3",
          title: "Compress any heavy campaign images"
        }
      ],
      resources: [
        {
          id: "d24-r1",
          title: "Shopify Help — SEO Best Practices for Your Shopify Store",
          url: "https://help.shopify.com/en/manual/promoting-marketing/seo",
          type: "docs"
        },
        {
          id: "d24-r2",
          title: "Shopify Dev — Theme Performance Best Practices",
          url: "https://shopify.dev/docs/storefronts/themes/best-practices/performance",
          type: "docs"
        },
        {
          id: "d24-r3",
          title: "Google PageSpeed Insights — Audit Every Portfolio Page",
          url: "https://pagespeed.web.dev",
          type: "tool"
        },
        {
          id: "d24-r4",
          title: "TinyPNG — Compress Campaign Images",
          url: "https://tinypng.com",
          type: "tool"
        },
        {
          id: "d24-r5",
          title: "Shopify Help — Web Performance Dashboard",
          url: "https://help.shopify.com/en/manual/online-store/web-performance",
          type: "docs"
        },
        {
          id: "d24-r6",
          title: "Shopify Blog — How to Improve Your Shopify Store Speed",
          url: "https://www.shopify.com/blog/how-to-improve-shopify-store-speed",
          type: "blog"
        }
      ]
    },
    {
      id: "day-25",
      moduleId: "week-4",
      title: "Day 25: Marketing Your Skills",
      description: "LinkedIn and X strategies for Shopify developers.",
      order: 4,
      difficulty: "Intermediate",
      videos: [
        {
          id: "d25-v1",
          title: "Freelancing on LinkedIn — How to Get High Paying Clients",
          youtubeId: "Fuz58Vk5wZc",
          duration: "11:40"
        },
        {
          id: "d25-v2",
          title: "How to Find Clients on LinkedIn 2024 (without Sales Navigator)",
          youtubeId: "4Nqq23BGSn0",
          duration: "08:15"
        },
        {
          id: "d25-v3",
          title: "Building in Public — Leveraging Twitter for More Reach",
          youtubeId: "BGnsF_Zx1Zg",
          duration: "13:00"
        },
        {
          id: "d25-v4",
          title: "LinkedIn and Freelance Development in 2025",
          youtubeId: "qhvarhwGlYY",
          duration: "10:45"
        },
        {
          id: "d25-v5",
          title: "How to Create a Free Notion Portfolio Website for Freelancers",
          youtubeId: "Gh-SHpSL7_E",
          duration: "12:20"
        }
      ],
      tasks: [
        {
          id: "d25-t1",
          title: "Update LinkedIn headline for specialty"
        },
        {
          id: "d25-t2",
          title: "Add portfolio link to all profiles"
        },
        {
          id: "d25-t3",
          title: "Request skill endorsements"
        }
      ],
      resources: [
        {
          id: "d25-r1",
          title: "Shopify Partners Blog — How to Find Your First Shopify Client",
          url: "https://www.shopify.com/partners/blog/shopify-developer",
          type: "blog"
        },
        {
          id: "d25-r2",
          title: "LinkedIn — Optimize Your Developer Profile (Official Guide)",
          url: "https://www.linkedin.com/business/talent/blog/talent-acquisition/linkedin-profile-tips",
          type: "blog"
        },
        {
          id: "d25-r3",
          title: "Notion — Free Workspace for Portfolio & Case Study Docs",
          url: "https://www.notion.so",
          type: "tool"
        },
        {
          id: "d25-r4",
          title: "Shopify Partners Blog — Building a Freelance Shopify Business",
          url: "https://www.shopify.com/partners/blog/freelance-shopify",
          type: "blog"
        },
        {
          id: "d25-r5",
          title: "Smashing Magazine — Developer Portfolio Case Studies",
          url: "https://www.smashingmagazine.com/2022/05/developer-portfolio-case-studies/",
          type: "blog"
        },
        {
          id: "d25-r6",
          title: "Dev.to — Shopify Tag (Weekly Community Articles)",
          url: "https://dev.to/t/shopify",
          type: "community"
        }
      ]
    },
    {
      id: "day-26",
      moduleId: "week-4",
      title: "Day 26: Professional Gig Hunting",
      description: "Pitching to clients and setting up freelance channels.",
      order: 5,
      difficulty: "Intermediate",
      videos: [
        {
          id: "d26-v1",
          title: "Upwork Proposal Tutorial for Beginners — The Complete Cover Letter Guide",
          youtubeId: "dOVtO9JVLVY",
          duration: "14:20"
        },
        {
          id: "d26-v2",
          title: "How to Write Upwork Proposals That Win Jobs — Step-by-Step Guide",
          youtubeId: "2AzR_ORXQYg",
          duration: "10:50"
        },
        {
          id: "d26-v3",
          title: "Behind-The-Scenes REAL Upwork Proposals — What Clients Look For",
          youtubeId: "r6BJYtVBIhU",
          duration: "13:30"
        },
        {
          id: "d26-v4",
          title: "2025 Fiverr Gig Ranking — Shopify Gig Ranking Strategy",
          youtubeId: "96W2xk9dsvI",
          duration: "11:00"
        },
        {
          id: "d26-v5",
          title: "How to Get Freelance Clients from LinkedIn — Step by Step",
          youtubeId: "4TEdR9x-oT4",
          duration: "09:30"
        }
      ],
      tasks: [
        {
          id: "d26-t1",
          title: "Configure Upwork and Fiverr professional bios"
        },
        {
          id: "d26-t2",
          title: "Draft value-first outreach templates"
        },
        {
          id: "d26-t3",
          title: "Identify 5 target stores for outreach"
        }
      ],
      resources: [
        {
          id: "d26-r1",
          title: "Upwork — Shopify Developer Jobs Marketplace",
          url: "https://www.upwork.com/freelance-jobs/shopify/",
          type: "community"
        },
        {
          id: "d26-r2",
          title: "Fiverr — Shopify Gig Category",
          url: "https://www.fiverr.com/categories/programming-tech/shopify-development",
          type: "community"
        },
        {
          id: "d26-r3",
          title: "Shopify Partners Blog — How to Price Your Shopify Services",
          url: "https://www.shopify.com/partners/blog/pricing-shopify",
          type: "blog"
        },
        {
          id: "d26-r4",
          title: "Shopify Experts Marketplace — Join as a Shopify Expert",
          url: "https://www.shopify.com/partners/experts",
          type: "docs"
        },
        {
          id: "d26-r5",
          title: "Shopify Partners Blog — Writing a Winning Client Proposal",
          url: "https://www.shopify.com/partners/blog/client-proposal",
          type: "blog"
        },
        {
          id: "d26-r6",
          title: "Shopify Community — Partners & Developers Forum",
          url: "https://community.shopify.com/c/shopify-apis-and-sdks/bd-p/shopify-apis-and-technology",
          type: "community"
        }
      ]
    },
    {
      id: "day-27",
      moduleId: "week-4",
      title: "Day 27: [Assignment] Seasonal Campaign Build",
      description: "The final build of Phase 1.",
      order: 6,
      difficulty: "Advanced",
      videos: [],
      tasks: [
        {
          id: "d27-t1",
          title: "Complete GemPages seasonal page build"
        },
        {
          id: "d27-t2",
          title: "Add custom JS for timer logic"
        },
        {
          id: "d27-t3",
          title: "Prepare before/after assets"
        }
      ],
      resources: [
        {
          id: "d27-r1",
          title: "GemPages — Official Shopify App (Build Seasonal Pages)",
          url: "https://apps.shopify.com/gempages",
          type: "docs"
        },
        {
          id: "d27-r2",
          title: "Shopify Dev — JavaScript in Themes (assets/)",
          url: "https://shopify.dev/docs/storefronts/themes/architecture/assets",
          type: "docs"
        },
        {
          id: "d27-r3",
          title: "Shopify Blog — BFCM Checklist for Merchants",
          url: "https://www.shopify.com/blog/bfcm-checklist",
          type: "blog"
        },
        {
          id: "d27-r4",
          title: "GemPages Blog — Black Friday Marketing Ideas for Shopify",
          url: "https://gempages.net/blogs/shopify/black-friday-marketing-ideas",
          type: "blog"
        },
        {
          id: "d27-r5",
          title: "Loom — Record Before/After Walkthroughs",
          url: "https://www.loom.com",
          type: "tool"
        },
        {
          id: "d27-r6",
          title: "Shopify Help — Preview Themes Before Publishing",
          url: "https://help.shopify.com/en/manual/online-store/themes/managing-themes/previewing-themes",
          type: "docs"
        }
      ]
    },
    {
      id: "day-28",
      moduleId: "week-4",
      title: "Day 28: [Assignment] Portfolio Showcase",
      description: "Consolidating all projects into a professional showreel.",
      order: 7,
      difficulty: "Advanced",
      videos: [],
      tasks: [
        {
          id: "d28-t1",
          title: "Record a full Phase 1 review video"
        },
        {
          id: "d28-t2",
          title: "Draft Project #6 Case Study"
        },
        {
          id: "d28-t3",
          title: "Apply to first 5 high-value gigs"
        }
      ],
      resources: [
        {
          id: "d28-r1",
          title: "Loom — Free Screen Recorder for Showreel Videos",
          url: "https://www.loom.com",
          type: "tool"
        },
        {
          id: "d28-r2",
          title: "Shopify Partners Blog — How to Write a Great Case Study",
          url: "https://www.shopify.com/partners/blog/case-study",
          type: "blog"
        },
        {
          id: "d28-r3",
          title: "Notion — Portfolio & Case Study Workspace Template",
          url: "https://www.notion.so/templates/portfolio",
          type: "tool"
        },
        {
          id: "d28-r4",
          title: "Upwork — Shopify Developer Jobs Marketplace",
          url: "https://www.upwork.com/freelance-jobs/shopify/",
          type: "community"
        },
        {
          id: "d28-r5",
          title: "Smashing Magazine — Writing Compelling Developer Case Studies",
          url: "https://www.smashingmagazine.com/2023/04/portfolio-case-studies-ux-designers/",
          type: "blog"
        },
        {
          id: "d28-r6",
          title: "Shopify Experts — How to Get Listed as a Shopify Expert",
          url: "https://www.shopify.com/partners/experts",
          type: "docs"
        }
      ]
    },
    {
      id: "day-29",
      moduleId: "week-4",
      title: "Day 29: Maintenance & Documentation",
      description: "Reviewing the competitive log and final documentation.",
      order: 8,
      difficulty: "Intermediate",
      videos: [
        {
          id: "d29-v1",
          title: "How to Create a Freelance Portfolio Using Notion (+ Free Template)",
          youtubeId: "o2GvoLAwHMk",
          duration: "15:20"
        },
        {
          id: "d29-v2",
          title: "How to Create a Freelance Portfolio Using Notion — Free Template & Walkthrough",
          youtubeId: "m75O6oqXx70",
          duration: "12:00"
        },
        {
          id: "d29-v3",
          title: "Complete Shopify SEO Optimization Masterclass for Beginners 2024",
          youtubeId: "zy1Zy7ENq6w",
          duration: "10:30"
        },
        {
          id: "d29-v4",
          title: "Shopify SEO — Checklist You Can Revisit",
          youtubeId: "40iiUlN24hs",
          duration: "13:45"
        }
      ],
      tasks: [
        {
          id: "d29-t1",
          title: "Finalize competitive log (20+ stores)"
        },
        {
          id: "d29-t2",
          title: "Archive Day 1-29 logs in Notion"
        },
        {
          id: "d29-t3",
          title: "Engage with 10 industry posts"
        }
      ],
      resources: [
        {
          id: "d29-r1",
          title: "Notion — Free Workspace for Documentation & Client Logs",
          url: "https://www.notion.so",
          type: "tool"
        },
        {
          id: "d29-r2",
          title: "Shopify Partners Blog — How to Document Client Work Professionally",
          url: "https://www.shopify.com/partners/blog/client-documentation",
          type: "blog"
        },
        {
          id: "d29-r3",
          title: "Shopify Dev — Changelog (Track Platform Updates)",
          url: "https://shopify.dev/changelog",
          type: "docs"
        },
        {
          id: "d29-r4",
          title: "Shopify Help — Analytics & Store Reports",
          url: "https://help.shopify.com/en/manual/reports-and-analytics",
          type: "docs"
        },
        {
          id: "d29-r5",
          title: "Smashing Magazine — Developer Portfolio Case Studies That Win Work",
          url: "https://www.smashingmagazine.com/2022/05/developer-portfolio-case-studies/",
          type: "blog"
        },
        {
          id: "d29-r6",
          title: "Shopify Community — Developers & Partners Discussion Forum",
          url: "https://community.shopify.com/c/shopify-apis-and-sdks/bd-p/shopify-apis-and-technology",
          type: "community"
        }
      ]
    },
    {
      id: "day-30",
      moduleId: "week-4",
      title: "Day 30: PHASE 1 COMPLETED",
      description: "Final checklist and transition to Phase 2.",
      order: 9,
      difficulty: "Advanced",
      videos: [],
      tasks: [
        {
          id: "d30-t1",
          title: "Verify 6/6 Projects in Portfolio"
        },
        {
          id: "d30-t2",
          title: "Final Master Checklist Audit"
        },
        {
          id: "d30-t3",
          title: "Post \"Phase 1 Complete\" on LinkedIn/X"
        }
      ],
      resources: [
        {
          id: "d30-r1",
          title: "Shopify Dev — Developer Roadmap & Learning Path",
          url: "https://shopify.dev/docs/themes/getting-started",
          type: "docs"
        },
        {
          id: "d30-r2",
          title: "Shopify Partners Blog — Grow Your Shopify Business",
          url: "https://www.shopify.com/partners/blog",
          type: "blog"
        },
        {
          id: "d30-r3",
          title: "Shopify Experts — Apply to the Shopify Experts Marketplace",
          url: "https://www.shopify.com/partners/experts",
          type: "docs"
        },
        {
          id: "d30-r4",
          title: "Notion — Final Portfolio & Project Archive Template",
          url: "https://www.notion.so/templates/portfolio",
          type: "tool"
        },
        {
          id: "d30-r5",
          title: "Shopify Dev — Changelog (Stay Current for Phase 2)",
          url: "https://shopify.dev/changelog",
          type: "docs"
        },
        {
          id: "d30-r6",
          title: "Shopify Community — Share Your Phase 1 Work & Get Feedback",
          url: "https://community.shopify.com/c/shopify-discussions/bd-p/general-discussion",
          type: "community"
        }
      ]
    },
];
