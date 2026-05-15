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
        title: "Shopify Dawn Theme — Complete Overview 2024",
        youtubeId: "yelJTyI-5gU",
        duration: "18:00",
      },
      {
        id: "d8-v2",
        title: "Shopify Horizon Theme — New Block-Based Architecture",
        youtubeId: "5hAi2yTjxjk",
        duration: "14:30",
      },
      {
        id: "d8-v3",
        title: "How to Duplicate and Rename a Shopify Theme",
        youtubeId: "x7WXg6DKUHU",
        duration: "05:50",
      },
      {
        id: "d8-v4",
        title: "Shopify Theme File Structure Explained",
        youtubeId: "3WuI5_T3S-A",
        duration: "16:20",
      },
      {
        id: "d8-v5",
        title: "Shopify Sections & Blocks — How They Work",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "13:10",
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
        title: "Shopify Theme Editor — Spacing & Layout Controls",
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
        title: "Shopify Liquid Objects, Filters & Variables (Full Course Ep.2)",
        youtubeId: "nM4anis2odE",
        duration: "20:10",
      },
      {
        id: "d10-v2",
        title: "Shopify Theme Development – Liquid Full Tutorial",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "15:45",
      },
      {
        id: "d10-v3",
        title: "Shopify Liquid – Top Tips & Tricks (2024)",
        youtubeId: "9UfGdd9blTE",
        duration: "12:20",
      },
      {
        id: "d10-v4",
        title: "Shopify Liquid – New Array Filters Explained (2025)",
        youtubeId: "7MxeawRnHFY",
        duration: "10:00",
      },
      {
        id: "d10-v5",
        title: "Getting Started with Shopify Liquid",
        youtubeId: "QTtXmARDG-Y",
        duration: "14:00",
      },
      {
        id: "d10-v6",
        title: "Liquid Filters — money, upcase, img_url & more",
        youtubeId: "RzWzM9LuQHE",
        duration: "09:30",
      },
      {
        id: "d10-v7",
        title: "Shopify Product Object — All Properties Explained",
        youtubeId: "bhAMaeePmsQ",
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
        title: "Shopify Liquid For Loop Tutorial (in 3 Minutes!)",
        youtubeId: "wF6CpVcUfoM",
        duration: "03:00",
      },
      {
        id: "d11-v2",
        title: "Advanced Shopify Liquid For Loops – limit, offset, range",
        youtubeId: "6eUFDtg_V9k",
        duration: "14:30",
      },
      {
        id: "d11-v3",
        title: "How to Use If Statements in Shopify Liquid (Conditional Logic)",
        youtubeId: "NR8y9t7KnM8",
        duration: "16:15",
      },
      {
        id: "d11-v4",
        title: "Shopify Liquid Conditionals – Full Course",
        youtubeId: "0aPIc4-8xXs",
        duration: "12:00",
      },
      {
        id: "d11-v5",
        title: "Learn Shopify Liquid For Loop and Conditional CSS",
        youtubeId: "QkE1JklzMjw",
        duration: "15:00",
      },
      {
        id: "d11-v6",
        title: "Shopify Liquid — unless, case, when Tags Explained",
        youtubeId: "6eUFDtg_V9k",
        duration: "08:40",
      },
      {
        id: "d11-v7",
        title: "Building Dynamic Sold Out Badges with Liquid",
        youtubeId: "Af8F29zSAn8",
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
        title: "Shopify AJAX Cart API – Crash Course Tutorial",
        youtubeId: "pdQCyUWFIcY",
        duration: "22:15",
      },
      {
        id: "d12-v2",
        title: "Shopify Liquid – Ajax API Deep Dive (2025)",
        youtubeId: "pde0Lzf0A_w",
        duration: "18:40",
      },
      {
        id: "d12-v3",
        title: "How To Add Sticky Add To Cart (Without App) – 2024",
        youtubeId: "xdKrGL9X2Zo",
        duration: "12:50",
      },
      {
        id: "d12-v4",
        title: "How to Add a Sticky Add to Cart in Shopify (2025)",
        youtubeId: "qJP0EExF1a0",
        duration: "11:00",
      },
      {
        id: "d12-v5",
        title: "Shopify Liquid – Using JavaScript & the Section Rendering API",
        youtubeId: "3WuI5_T3S-A",
        duration: "15:00",
      },
      {
        id: "d12-v6",
        title: "Shopify Cart API — add.js, change.js, update.js Explained",
        youtubeId: "pdQCyUWFIcY",
        duration: "13:30",
      },
      {
        id: "d12-v7",
        title: "Building a Cart Drawer from Scratch in Shopify",
        youtubeId: "pde0Lzf0A_w",
        duration: "20:00",
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
        title: "Shopify Color Swatches – Set Up on Any Theme for FREE (2025)",
        youtubeId: "vk8KUZN0hrI",
        duration: "14:00",
      },
      {
        id: "d13-v2",
        title:
          "Shopify Liquid Variants Loop – Display Unique Data & Create Swatches",
        youtubeId: "Af8F29zSAn8",
        duration: "16:00",
      },
      {
        id: "d13-v3",
        title: "Shopify Liquid – Product Recommendations Section",
        youtubeId: "Kw-FhRUoSLM",
        duration: "18:00",
      },
      {
        id: "d13-v4",
        title: "How To Create Product Recommendations Block – Dawn Theme 2024",
        youtubeId: "q1bJikwMQoA",
        duration: "12:00",
      },
      {
        id: "d13-v5",
        title: "Shopify Variant Selector — Custom Radio Buttons with CSS",
        youtubeId: "vk8KUZN0hrI",
        duration: "11:40",
      },
      {
        id: "d13-v6",
        title: "Adding Quick View Modal to Shopify Without App",
        youtubeId: "Kw-FhRUoSLM",
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
        title: "Conversion Rate Optimization Intro",
        youtubeId: "kSUpDkS63tM",
        duration: "15:10",
      },
      {
        id: "d15-v2",
        title: "Lander Architecture & Flow",
        youtubeId: "v8wR6w77464",
        duration: "12:45",
      },
      {
        id: "d15-v3",
        title: "Competitive Research Framework",
        youtubeId: "P79K7mDPu_0",
        duration: "10:30",
      },
      {
        id: "d15-v4",
        title: "Above the Fold Design — What Really Converts",
        youtubeId: "fX7WpAAb5S8",
        duration: "13:20",
      },
      {
        id: "d15-v5",
        title: "Psychology of High-Converting Landing Pages",
        youtubeId: "zLpOfMha7Kk",
        duration: "11:00",
      },
      {
        id: "d15-v6",
        title: "How to Wireframe a Shopify Landing Page in Figma",
        youtubeId: "v8wR6w77464",
        duration: "09:40",
      },
    ],
    tasks: [
      {
        id: "d15-t1",
        title: "Research 5 high-converting landing pages",
      },
      {
        id: "d15-t2",
        title: "Sketch layout in Canva or Figma",
      },
      {
        id: "d15-t3",
        title: "Read 1 short CRO article",
      },
    ],
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
        title: "PageFly Editor Essentials",
        youtubeId: "kSUpDkS63tM",
        duration: "20:45",
      },
      {
        id: "d16-v2",
        title: "Building Mobile-First Hero Sections",
        youtubeId: "fX7WpAAb5S8",
        duration: "18:20",
      },
      {
        id: "d16-v3",
        title: "Dynamic Product Links in PageFly",
        youtubeId: "zLpOfMha7Kk",
        duration: "14:15",
      },
      {
        id: "d16-v4",
        title: "PageFly vs GemPages — Which Builder is Best in 2025?",
        youtubeId: "v8wR6w77464",
        duration: "12:00",
      },
      {
        id: "d16-v5",
        title: "Adding Custom CSS in PageFly for Advanced Styling",
        youtubeId: "P79K7mDPu_0",
        duration: "10:30",
      },
      {
        id: "d16-v6",
        title: "PageFly SEO Settings — Title, Meta & Alt Tags",
        youtubeId: "kSUpDkS63tM",
        duration: "08:15",
      },
    ],
    tasks: [
      {
        id: "d16-t1",
        title: "Build hero section with strong headline",
      },
      {
        id: "d16-t2",
        title: "Add trust bars and social proof signals",
      },
      {
        id: "d16-t3",
        title: "Test on mobile at every stage",
      },
    ],
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
        title: "Social Proof Psychology",
        youtubeId: "v8wR6w77464",
        duration: "11:20",
      },
      {
        id: "d17-v2",
        title: "Integrating UGC Widgets",
        youtubeId: "P79K7mDPu_0",
        duration: "15:10",
      },
      {
        id: "d17-v3",
        title: "Designing High-Conversion FAQs",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:45",
      },
      {
        id: "d17-v4",
        title: "How to Add Judge.me Reviews to PageFly Pages",
        youtubeId: "fX7WpAAb5S8",
        duration: "12:30",
      },
      {
        id: "d17-v5",
        title: "Trust Badge Placement Strategy for eCommerce",
        youtubeId: "kSUpDkS63tM",
        duration: "08:50",
      },
      {
        id: "d17-v6",
        title: "Building Testimonial Carousels Without Code",
        youtubeId: "v8wR6w77464",
        duration: "11:00",
      },
    ],
    tasks: [
      {
        id: "d17-t1",
        title: "Add testimonial carousel with demo reviews",
      },
      {
        id: "d17-t2",
        title: "Build FAQ section with 3-5 questions",
      },
      {
        id: "d17-t3",
        title: "Apply custom CSS for smooth transitions",
      },
    ],
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
        title: "GemPages Editor Fundamentals",
        youtubeId: "v8wR6w77464",
        duration: "15:40",
      },
      {
        id: "d18-v2",
        title: "Building Collection Grids",
        youtubeId: "P79K7mDPu_0",
        duration: "12:10",
      },
      {
        id: "d18-v3",
        title: "GemPages — Advanced Layout Controls & Responsiveness",
        youtubeId: "fX7WpAAb5S8",
        duration: "14:00",
      },
      {
        id: "d18-v4",
        title: "How to Add Promotional Banners in GemPages",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:20",
      },
      {
        id: "d18-v5",
        title: "Collection Page UX Best Practices for eCommerce",
        youtubeId: "kSUpDkS63tM",
        duration: "11:45",
      },
    ],
    tasks: [
      {
        id: "d18-t1",
        title: "Research filtering UX on competitor sites",
      },
      {
        id: "d18-t2",
        title: "Build GemPages collection grid",
      },
      {
        id: "d18-t3",
        title: "Add promotional categories and banners",
      },
    ],
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
        title: "Advanced Filtering in Shopify",
        youtubeId: "kSUpDkS63tM",
        duration: "14:20",
      },
      {
        id: "d19-v2",
        title: "Custom Promo Badge Logic",
        youtubeId: "zLpOfMha7Kk",
        duration: "11:15",
      },
      {
        id: "d19-v3",
        title: "Shopify Search & Discovery — Filter Setup Guide",
        youtubeId: "v8wR6w77464",
        duration: "13:00",
      },
      {
        id: "d19-v4",
        title: "Bestseller, New, Sale Badge System in GemPages",
        youtubeId: "P79K7mDPu_0",
        duration: "09:50",
      },
      {
        id: "d19-v5",
        title: "Newsletter Signup Blocks — Klaviyo + GemPages Integration",
        youtubeId: "fX7WpAAb5S8",
        duration: "10:10",
      },
    ],
    tasks: [
      {
        id: "d19-t1",
        title: "Implement stars/rating badge system",
      },
      {
        id: "d19-t2",
        title: "Add newsletter signup blocks",
      },
      {
        id: "d19-t3",
        title: "Perform final mobile QA pass",
      },
    ],
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
        title: "Research 5 strong About Us pages",
      },
      {
        id: "d20-t2",
        title: "Build brand origin section in PageFly",
      },
      {
        id: "d20-t3",
        title: "Add mission and values with icons",
      },
    ],
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
        title: "Write mini case studies for Projects 3-5",
      },
      {
        id: "d21-t2",
        title: "Update portfolio with 3 new landing pages",
      },
      {
        id: "d21-t3",
        title: "Publish build threads on LinkedIn/X",
      },
    ],
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
        title: "Psychology of Flash Sales",
        youtubeId: "v8wR6w77464",
        duration: "14:50",
      },
      {
        id: "d22-v2",
        title: "BFCM Strategy Overview",
        youtubeId: "P79K7mDPu_0",
        duration: "12:30",
      },
      {
        id: "d22-v3",
        title: "How Top Shopify Stores Build Seasonal Campaigns",
        youtubeId: "fX7WpAAb5S8",
        duration: "15:00",
      },
      {
        id: "d22-v4",
        title: "Urgency & Scarcity — Ethical eCommerce Tactics",
        youtubeId: "kSUpDkS63tM",
        duration: "11:30",
      },
      {
        id: "d22-v5",
        title: "Planning a Black Friday Shopify Store Campaign",
        youtubeId: "zLpOfMha7Kk",
        duration: "13:10",
      },
    ],
    tasks: [
      {
        id: "d22-t1",
        title: "Research 5 seasonal landing pages",
      },
      {
        id: "d22-t2",
        title: "Plan countdown and bundle sections",
      },
      {
        id: "d22-t3",
        title: "Sketch campaign layout",
      },
    ],
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
        title: "Building Scarcity Widgets",
        youtubeId: "F2T-nC27r_E",
        duration: "20:15",
      },
      {
        id: "d23-v2",
        title: "Live Inventory Level logic",
        youtubeId: "kSUpDkS63tM",
        duration: "15:40",
      },
      {
        id: "d23-v3",
        title: "How to Build a Countdown Timer in GemPages",
        youtubeId: "v8wR6w77464",
        duration: "12:00",
      },
      {
        id: "d23-v4",
        title: "Strikethrough Pricing & Sale Logic in Shopify",
        youtubeId: "P79K7mDPu_0",
        duration: "10:20",
      },
      {
        id: "d23-v5",
        title: "Sticky Bar with Urgency Copy — GemPages Build",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:45",
      },
    ],
    tasks: [
      {
        id: "d23-t1",
        title: "Build hero with countdown timer",
      },
      {
        id: "d23-t2",
        title: "Implement strikethrough pricing logic",
      },
      {
        id: "d23-t3",
        title: "Add sticky bottom bar with urgency copy",
      },
    ],
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
        title: "Shopify SEO Audit Checklist",
        youtubeId: "zLpOfMha7Kk",
        duration: "18:50",
      },
      {
        id: "d24-v2",
        title: "Lighthouse Performance Fixing",
        youtubeId: "P79K7mDPu_0",
        duration: "12:20",
      },
      {
        id: "d24-v3",
        title: "How to Fix Core Web Vitals on Shopify",
        youtubeId: "fX7WpAAb5S8",
        duration: "14:00",
      },
      {
        id: "d24-v4",
        title: "Image Compression Workflow for Shopify Stores",
        youtubeId: "kSUpDkS63tM",
        duration: "08:30",
      },
      {
        id: "d24-v5",
        title: "Shopify App Performance Impact — How to Audit",
        youtubeId: "v8wR6w77464",
        duration: "11:15",
      },
    ],
    tasks: [
      {
        id: "d24-t1",
        title: "Speed check all 6 portfolio projects",
      },
      {
        id: "d24-t2",
        title: "Verify SEO meta titles on all pages",
      },
      {
        id: "d24-t3",
        title: "Compress any heavy campaign images",
      },
    ],
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
        title: "LinkedIn for Developers",
        youtubeId: "fX7WpAAb5S8",
        duration: "11:40",
      },
      {
        id: "d25-v2",
        title: "X/Twitter Growth Strategy",
        youtubeId: "kSUpDkS63tM",
        duration: "08:15",
      },
      {
        id: "d25-v3",
        title: "Building in Public — How to Document Your Journey",
        youtubeId: "v8wR6w77464",
        duration: "13:00",
      },
      {
        id: "d25-v4",
        title: "How to Write LinkedIn Posts That Get Developer Clients",
        youtubeId: "P79K7mDPu_0",
        duration: "10:45",
      },
      {
        id: "d25-v5",
        title: "Portfolio Strategy for Shopify Freelancers",
        youtubeId: "zLpOfMha7Kk",
        duration: "12:20",
      },
    ],
    tasks: [
      {
        id: "d25-t1",
        title: "Update LinkedIn headline for specialty",
      },
      {
        id: "d25-t2",
        title: "Add portfolio link to all profiles",
      },
      {
        id: "d25-t3",
        title: "Request skill endorsements",
      },
    ],
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
        title: "Upwork Case Studies & Bios",
        youtubeId: "v8wR6w77464",
        duration: "14:20",
      },
      {
        id: "d26-v2",
        title: "Client Pitching Masterclass",
        youtubeId: "zLpOfMha7Kk",
        duration: "10:50",
      },
      {
        id: "d26-v3",
        title: "How to Write a Winning Upwork Proposal for Shopify Jobs",
        youtubeId: "fX7WpAAb5S8",
        duration: "13:30",
      },
      {
        id: "d26-v4",
        title: "Fiverr Gig Setup for Shopify Developers — Full Guide",
        youtubeId: "kSUpDkS63tM",
        duration: "11:00",
      },
      {
        id: "d26-v5",
        title: "Value-First Outreach — Templates That Actually Work",
        youtubeId: "P79K7mDPu_0",
        duration: "09:30",
      },
    ],
    tasks: [
      {
        id: "d26-t1",
        title: "Configure Upwork and Fiverr professional bios",
      },
      {
        id: "d26-t2",
        title: "Draft value-first outreach templates",
      },
      {
        id: "d26-t3",
        title: "Identify 5 target stores for outreach",
      },
    ],
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
        title: "Complete GemPages seasonal page build",
      },
      {
        id: "d27-t2",
        title: "Add custom JS for timer logic",
      },
      {
        id: "d27-t3",
        title: "Prepare before/after assets",
      },
    ],
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
        title: "Record a full Phase 1 review video",
      },
      {
        id: "d28-t2",
        title: "Draft Project #6 Case Study",
      },
      {
        id: "d28-t3",
        title: "Apply to first 5 high-value gigs",
      },
    ],
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
        title: "Documentation for Clients",
        youtubeId: "fX7WpAAb5S8",
        duration: "15:20",
      },
      {
        id: "d29-v2",
        title: "How to Write Shopify Project Case Studies That Win Clients",
        youtubeId: "kSUpDkS63tM",
        duration: "12:00",
      },
      {
        id: "d29-v3",
        title: "Creating a Notion Portfolio as a Developer",
        youtubeId: "v8wR6w77464",
        duration: "10:30",
      },
      {
        id: "d29-v4",
        title: "Competitive Store Audit — Full Walkthrough Framework",
        youtubeId: "P79K7mDPu_0",
        duration: "13:45",
      },
    ],
    tasks: [
      {
        id: "d29-t1",
        title: "Finalize competitive log (20+ stores)",
      },
      {
        id: "d29-t2",
        title: "Archive Day 1-29 logs in Notion",
      },
      {
        id: "d29-t3",
        title: "Engage with 10 industry posts",
      },
    ],
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
        title: "Verify 6/6 Projects in Portfolio",
      },
      {
        id: "d30-t2",
        title: "Final Master Checklist Audit",
      },
      {
        id: "d30-t3",
        title: 'Post "Phase 1 Complete" on LinkedIn/X',
      },
    ],
  },
];
