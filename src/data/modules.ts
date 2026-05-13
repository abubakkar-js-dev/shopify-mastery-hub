import { Lesson, Module } from "../types";

export const INITIAL_MODULES: Module[] = [
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
  {
    id: "week-5",
    title: "Week 5: Theme Architecture Deep Dive",
    description:
      "Understand Dawn internals, JSON templates, and Section schema. Think like a theme developer.",
    order: 5,
    month: 2,
  },
  {
    id: "week-6",
    title: "Week 6: Custom Theme (Setup & Core)",
    description:
      "Build your first custom Shopify theme from scratch. Architecture setup and core templates.",
    order: 6,
    month: 2,
  },
  {
    id: "week-7",
    title: "Week 7: Custom Theme (AJAX & Advanced)",
    description:
      "Complete the theme with AJAX carts, predictive search, and performance optimization.",
    order: 7,
    month: 2,
  },
  {
    id: "week-8",
    title: "Week 8: Advanced Theme & Positioning",
    description:
      "Build editorial DTC themes with Section Groups and Dynamic Sources. Premium client positioning.",
    order: 8,
    month: 2,
  },
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

export const INITIAL_LESSONS: Lesson[] = [
  // --- WEEK 1: FULL STORE SETUP ---
  {
    id: "day-1",
    moduleId: "week-1",
    title: "Day 1: Setup & Admin Tour",
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
    ],
    description:
      "Establish your developer workspace and explore the Shopify ecosystem internals.",
    order: 1,
    difficulty: "Beginner",
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
      { id: "d1-t4", title: "Optimize LinkedIn profile headline & banner" },
      { id: "d1-t5", title: "Post intro on LinkedIn/X" },
    ],
  },
  {
    id: "day-2",
    moduleId: "week-1",
    title: "Day 2: Catalog & Shipping Architecture",
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
    ],
    description:
      "Master product data, collection logic, and backend logistics like shipping.",
    order: 2,
    difficulty: "Beginner",
    tasks: [
      { id: "d2-t1", title: "Add 12+ demo products" },
      { id: "d2-t2", title: "Create manual and automated collections" },
      { id: "d2-t3", title: "Build main and footer navigation" },
      { id: "d2-t4", title: "Set up shipping profiles" },
      { id: "d2-t5", title: "Install Judge.me, Klaviyo, and an upsell app" },
    ],
  },
  {
    id: "day-3",
    moduleId: "week-1",
    title: "Day 3: Deep Dive & Checkout",
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
    ],
    description: "Master metafields and test the full checkout flow.",
    order: 3,
    difficulty: "Beginner",
    tasks: [
      {
        id: "d3-t1",
        title: "Deep dive into Metafields (add custom metafield)",
      },
      { id: "d3-t2", title: "Test full checkout flow in test mode" },
      { id: "d3-t3", title: "Add basic SEO titles + meta descriptions" },
      { id: "d3-t4", title: "Document architecture decisions in Notion" },
    ],
  },
  {
    id: "day-4",
    moduleId: "week-1",
    title: "Day 4: Theme Polish & First Liquid",
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
    ],
    description:
      "Start customizing the visual identity and touch Liquid code for the first time.",
    order: 4,
    difficulty: "Beginner",
    tasks: [
      { id: "d4-t1", title: "Customize theme fonts, colors, and logo" },
      { id: "d4-t2", title: "Add trust badges and announcement bar" },
      { id: "d4-t3", title: "Run Google PageSpeed Insights test" },
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
    ],
    description: "Ensure a smooth mobile experience and optimize assets.",
    order: 5,
    difficulty: "Beginner",
    tasks: [
      { id: "d5-t1", title: "Fix mobile issues" },
      { id: "d5-t2", title: "Optimize images with TinyPNG" },
      { id: "d5-t3", title: "Test Klaviyo signup forms" },
      { id: "d5-t4", title: "Analyze competitive stores in your niche" },
    ],
  },
  {
    id: "day-6",
    moduleId: "week-1",
    title: "Day 6: [Assignment] Store Walkthrough",
    videos: [],
    description:
      "Screen record a full store walkthrough and write your first case study.",
    order: 6,
    difficulty: "Intermediate",
    tasks: [
      { id: "d6-t1", title: "Screen record full store walkthrough (Loom/OBS)" },
      { id: "d6-t2", title: "Write first case study draft in Notion" },
      { id: "d6-t3", title: "Export 5-8 strong screenshots for portfolio" },
      { id: "d6-t4", title: "Reach out to 3 local businesses on LinkedIn" },
    ],
  },
  {
    id: "day-7",
    moduleId: "week-1",
    title: "Day 7: [Assignment] Week 1 Review",
    videos: [],
    description:
      "Review progress, engage with the community, and apply for your first micro-gigs.",
    order: 7,
    difficulty: "Intermediate",
    tasks: [
      { id: "d7-t1", title: "Analyze 3 competitor stores" },
      { id: "d7-t2", title: "Update portfolio page with Week 1 project" },
      { id: "d7-t3", title: "Post Week 1 progress on LinkedIn/X" },
      { id: "d7-t4", title: "Apply to 3-5 small Upwork/Fiverr gigs" },
    ],
  },
  {
    id: "day-9",
    moduleId: "week-2",
    title: "Day 9: Visual Identity Refinement",
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
    ],
    description: "Perfecting font pairings, button styles, and global spacing.",
    order: 2,
    difficulty: "Intermediate",
    tasks: [
      { id: "d9-t1", title: "Update typography hierarchy" },
      { id: "d9-t2", title: "Update spacing + button styles for consistency" },
      { id: "d9-t3", title: "Add promotional banners and trust rows" },
    ],
  },
  {
    id: "day-10",
    moduleId: "week-2",
    title: "Day 10: Liquid Deep Dive (Objects & Filters)",
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
    ],
    description: "The foundation of Shopify backend logic.",
    order: 3,
    difficulty: "Intermediate",
    tasks: [
      { id: "d10-t1", title: "Practice product.price and image filters" },
      { id: "d10-t2", title: "Modify product cards in collection template" },
      { id: "d10-t3", title: "Download Liquid Cheat Sheet" },
    ],
  },
  {
    id: "day-11",
    moduleId: "week-2",
    title: "Day 11: Liquid Deep Dive (Loops & Conditionals)",
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
    ],
    description: "Master loops and conditional logic for dynamic storefronts.",
    order: 4,
    difficulty: "Intermediate",
    tasks: [
      { id: "d11-t1", title: "Practice {% for %} loops in collection grids" },
      {
        id: "d11-t2",
        title: "Apply {% if %} conditionals for inventory status",
      },
      { id: "d11-t3", title: 'Add conditional "Sold Out" badges' },
    ],
  },
  {
    id: "day-12",
    moduleId: "week-2",
    title: "Day 12: Sticky Add to Cart Logic",
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
    ],
    description: "Building performance-driven conversion features.",
    order: 5,
    difficulty: "Advanced",
    tasks: [
      { id: "d12-t1", title: "Implement sticky add-to-cart bar" },
      { id: "d12-t2", title: "Connect bar to Shopify AJAX cart API" },
      { id: "d12-t3", title: "Test thoroughly on mobile devices" },
    ],
  },
  {
    id: "day-13",
    moduleId: "week-2",
    title: "Day 13: [Assignment] Variant Swatches",
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
    ],
    description: "Build a custom variant swatch system using Liquid.",
    order: 6,
    difficulty: "Advanced",
    tasks: [
      { id: "d13-t1", title: "Style variant selectors with custom CSS" },
      {
        id: "d13-t2",
        title: 'Add "You may also like" using Liquid recommendations',
      },
      { id: "d13-t3", title: "Improve product page trust icons" },
    ],
  },
  {
    id: "day-14",
    moduleId: "week-2",
    title: "Day 14: [Assignment] Week 2 Review",
    videos: [],
    description: "Write project case studies and engage with store owners.",
    order: 7,
    difficulty: "Intermediate",
    tasks: [
      { id: "d14-t1", title: "Write full case study for Project #2" },
      { id: "d14-t2", title: "Post build log on LinkedIn/X" },
      { id: "d14-t3", title: "Message 3-5 store owners with feedback" },
    ],
  },

  // --- WEEK 3: NO-CODE PROWESS ---
  {
    id: "day-15",
    moduleId: "week-3",
    title: "Day 15: Product Landing Page Strategy",
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
    ],
    description: "Research and plan high-converting product pages.",
    order: 1,
    difficulty: "Intermediate",
    tasks: [
      { id: "d15-t1", title: "Research 5 high-converting landing pages" },
      { id: "d15-t2", title: "Sketch layout in Canva or Figma" },
      { id: "d15-t3", title: "Read 1 short CRO article" },
    ],
  },
  {
    id: "day-16",
    moduleId: "week-3",
    title: "Day 16: PageFly Builder Deep Dive",
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
    ],
    description: "Building mobile-first layouts with PageFly.",
    order: 2,
    difficulty: "Intermediate",
    tasks: [
      { id: "d16-t1", title: "Build hero section with strong headline" },
      { id: "d16-t2", title: "Add trust bars and social proof signals" },
      { id: "d16-t3", title: "Test on mobile at every stage" },
    ],
  },
  {
    id: "day-17",
    moduleId: "week-3",
    title: "Day 17: Trust & Social Proof Logic",
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
    ],
    description: "Integrating reviews and FAQ sections for conversions.",
    order: 3,
    difficulty: "Intermediate",
    tasks: [
      { id: "d17-t1", title: "Add testimonial carousel with demo reviews" },
      { id: "d17-t2", title: "Build FAQ section with 3-5 questions" },
      { id: "d17-t3", title: "Apply custom CSS for smooth transitions" },
    ],
  },
  {
    id: "day-18",
    moduleId: "week-3",
    title: "Day 18: Collection Page UX (GemPages)",
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
    ],
    description: "Designing promo-led collection pages.",
    order: 4,
    difficulty: "Intermediate",
    tasks: [
      { id: "d18-t1", title: "Research filtering UX on competitor sites" },
      { id: "d18-t2", title: "Build GemPages collection grid" },
      { id: "d18-t3", title: "Add promotional categories and banners" },
    ],
  },
  {
    id: "day-19",
    moduleId: "week-3",
    title: "Day 19: Filter Systems & Promo Badges",
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
    ],
    description: "Advanced collection logic and visual badges.",
    order: 5,
    difficulty: "Intermediate",
    tasks: [
      { id: "d19-t1", title: "Implement stars/rating badge system" },
      { id: "d19-t2", title: "Add newsletter signup blocks" },
      { id: "d19-t3", title: "Perform final mobile QA pass" },
    ],
  },
  {
    id: "day-20",
    moduleId: "week-3",
    title: "Day 20: [Assignment] Brand Storytelling Build",
    videos: [],
    description: "Crafting the narrative that builds trust.",
    order: 6,
    difficulty: "Intermediate",
    tasks: [
      { id: "d20-t1", title: "Research 5 strong About Us pages" },
      { id: "d20-t2", title: "Build brand origin section in PageFly" },
      { id: "d20-t3", title: "Add mission and values with icons" },
    ],
  },
  {
    id: "day-21",
    moduleId: "week-3",
    title: "Day 21: [Assignment] Mid-Phase Audit",
    videos: [],
    description: "Reviewing performance and SEO across all no-code pages.",
    order: 7,
    difficulty: "Intermediate",
    tasks: [
      { id: "d21-t1", title: "Write mini case studies for Projects 3-5" },
      { id: "d21-t2", title: "Update portfolio with 3 new landing pages" },
      { id: "d21-t3", title: "Publish build threads on LinkedIn/X" },
    ],
  },

  // --- WEEK 4: CAMPAIGN ENGINEERING ---
  {
    id: "day-22",
    moduleId: "week-4",
    title: "Day 22: Seasonal Campaign Strategies",
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
    ],
    description: "Black Friday and flash sale psychology.",
    order: 1,
    difficulty: "Intermediate",
    tasks: [
      { id: "d22-t1", title: "Research 5 seasonal landing pages" },
      { id: "d22-t2", title: "Plan countdown and bundle sections" },
      { id: "d22-t3", title: "Sketch campaign layout" },
    ],
  },
  {
    id: "day-23",
    moduleId: "week-4",
    title: "Day 23: Urgency & Scarcity Systems",
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
    ],
    description: "Building live countdown timers and stock level alerts.",
    order: 2,
    difficulty: "Advanced",
    tasks: [
      { id: "d23-t1", title: "Build hero with countdown timer" },
      { id: "d23-t2", title: "Implement strikethrough pricing logic" },
      { id: "d23-t3", title: "Add sticky bottom bar with urgency copy" },
    ],
  },
  {
    id: "day-24",
    moduleId: "week-4",
    title: "Day 24: Page Performance & SEO Cleanup",
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
    ],
    description: "Final technical optimization for phase completion.",
    order: 3,
    difficulty: "Intermediate",
    tasks: [
      { id: "d24-t1", title: "Speed check all 6 portfolio projects" },
      { id: "d24-t2", title: "Verify SEO meta titles on all pages" },
      { id: "d24-t3", title: "Compress any heavy campaign images" },
    ],
  },
  {
    id: "day-25",
    moduleId: "week-4",
    title: "Day 25: Marketing Your Skills",
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
    ],
    description: "LinkedIn and X strategies for Shopify developers.",
    order: 4,
    difficulty: "Intermediate",
    tasks: [
      { id: "d25-t1", title: "Update LinkedIn headline for specialty" },
      { id: "d25-t2", title: "Add portfolio link to all profiles" },
      { id: "d25-t3", title: "Request skill endorsements" },
    ],
  },
  {
    id: "day-26",
    moduleId: "week-4",
    title: "Day 26: Professional Gig Hunting",
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
    ],
    description: "Pitching to clients and setting up freelance channels.",
    order: 5,
    difficulty: "Intermediate",
    tasks: [
      { id: "d26-t1", title: "Configure Upwork and Fiverr professional bios" },
      { id: "d26-t2", title: "Draft value-first outreach templates" },
      { id: "d26-t3", title: "Identify 5 target stores for outreach" },
    ],
  },
  {
    id: "day-27",
    moduleId: "week-4",
    title: "Day 27: [Assignment] Seasonal Campaign Build",
    videos: [],
    description: "The final build of Phase 1.",
    order: 6,
    difficulty: "Advanced",
    tasks: [
      { id: "d27-t1", title: "Complete GemPages seasonal page build" },
      { id: "d27-t2", title: "Add custom JS for timer logic" },
      { id: "d27-t3", title: "Prepare before/after assets" },
    ],
  },
  {
    id: "day-28",
    moduleId: "week-4",
    title: "Day 28: [Assignment] Portfolio Showcase",
    videos: [],
    description: "Consolidating all projects into a professional showreel.",
    order: 7,
    difficulty: "Advanced",
    tasks: [
      { id: "d28-t1", title: "Record a full Phase 1 review video" },
      { id: "d28-t2", title: "Draft Project #6 Case Study" },
      { id: "d28-t3", title: "Apply to first 5 high-value gigs" },
    ],
  },
  {
    id: "day-29",
    moduleId: "week-4",
    title: "Day 29: Maintenance & Documentation",
    videos: [
      {
        id: "d29-v1",
        title: "Documentation for Clients",
        youtubeId: "fX7WpAAb5S8",
        duration: "15:20",
      },
    ],
    description: "Reviewing the competitive log and final documentation.",
    order: 8,
    difficulty: "Intermediate",
    tasks: [
      { id: "d29-t1", title: "Finalize competitive log (20+ stores)" },
      { id: "d29-t2", title: "Archive Day 1-29 logs in Notion" },
      { id: "d29-t3", title: "Engage with 10 industry posts" },
    ],
  },
  {
    id: "day-30",
    moduleId: "week-4",
    title: "Day 30: PHASE 1 COMPLETED",
    videos: [],
    description: "Final checklist and transition to Phase 2.",
    order: 9,
    difficulty: "Advanced",
    tasks: [
      { id: "d30-t1", title: "Verify 6/6 Projects in Portfolio" },
      { id: "d30-t2", title: "Final Master Checklist Audit" },
      { id: "d30-t3", title: 'Post "Phase 1 Complete" on LinkedIn/X' },
    ],
  },

  // --- WEEK 5: THEME ARCHITECTURE ---
  {
    id: "day-31",
    moduleId: "week-5",
    title: "Day 31: CLI & Architecture Setup",
    videos: [
      {
        id: "d31-v1",
        title: "Installing Shopify CLI",
        youtubeId: "fX7WpAAb5S8",
        duration: "15:20",
      },
      {
        id: "d31-v2",
        title: "Theme Folder Structure",
        youtubeId: "kSUpDkS63tM",
        duration: "12:45",
      },
      {
        id: "d31-v3",
        title: "CLI hot reload setup",
        youtubeId: "zLpOfMha7Kk",
        duration: "10:15",
      },
    ],
    description:
      "Connect Shopify CLI and map the full Dawn theme directory structure.",
    order: 1,
    difficulty: "Intermediate",
    tasks: [
      { id: "d31-t1", title: "Clone Dawn theme locally via GitHub" },
      { id: "d31-t2", title: "Install Shopify CLI 3.x" },
      { id: "d31-t3", title: "Connect CLI to dev store and run hot reload" },
      {
        id: "d31-t4",
        title:
          "Map full file/folder structure (layout, templates, sections, snippets, assets, config, locales)",
      },
      {
        id: "d31-t5",
        title:
          "Trace full render flow in theme.liquid (head, header, layout, footer)",
      },
    ],
  },
  {
    id: "day-32",
    moduleId: "week-5",
    title: "Day 32: JSON Templates & Layout Flow",
    videos: [
      {
        id: "d32-v1",
        title: "Dawn JSON Templates",
        youtubeId: "zLpOfMha7Kk",
        duration: "14:30",
      },
      {
        id: "d32-v2",
        title: "Understanding theme.liquid",
        youtubeId: "P79K7mDPu_0",
        duration: "15:10",
      },
    ],
    description:
      "Understand how JSON templates render content_for_layout and section settings.",
    order: 2,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d32-t1",
        title:
          "Deep dive into {{ content_for_header }} and {{ content_for_layout }}",
      },
      {
        id: "d32-t2",
        title:
          "Study JSON templates (product.json, index.json) sections/order array",
      },
      {
        id: "d32-t3",
        title: "Map main-product.liquid schema to theme editor UI controls",
      },
      {
        id: "d32-t4",
        title: "Document product rendering flow from URL to HTML",
      },
    ],
  },
  {
    id: "day-33",
    moduleId: "week-5",
    title: "Day 33: Advanced Liquid Tags",
    videos: [
      {
        id: "d33-v1",
        title: "Render vs Include",
        youtubeId: "P79K7mDPu_0",
        duration: "12:50",
      },
      {
        id: "d33-v2",
        title: "Shopify Pagination API",
        youtubeId: "fX7WpAAb5S8",
        duration: "18:15",
      },
    ],
    description: "Master render vs include, paginate, and custom form tags.",
    order: 3,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d33-t1",
        title: "Practice scoped {% render %} vs legacy {% include %}",
      },
      {
        id: "d33-t2",
        title: "Master {% paginate %}, {% form %}, and {% liquid %} tags",
      },
      {
        id: "d33-t3",
        title: "Study forloop object (index, first, last) and tablerow tag",
      },
      {
        id: "d33-t4",
        title: "Write a snippet that loops products and outputs data",
      },
    ],
  },
  {
    id: "day-34",
    moduleId: "week-5",
    title: "Day 34: Section Schema Mastery",
    videos: [
      {
        id: "d34-v1",
        title: "Schema Settings Deep Dive",
        youtubeId: "kSUpDkS63tM",
        duration: "22:40",
      },
      {
        id: "d34-v2",
        title: "Building Dynamic Blocks",
        youtubeId: "zLpOfMha7Kk",
        duration: "18:10",
      },
    ],
    description:
      "Build a fully customizable Testimonials Slider with complex schema settings.",
    order: 4,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d34-t1",
        title: "Build Testimonials Slider Section with block schema",
      },
      {
        id: "d34-t2",
        title: "Configure text, image_picker, select, and range settings",
      },
      {
        id: "d34-t3",
        title: "Implement dynamic blocks for reviewer cards with presets",
      },
    ],
  },
  {
    id: "day-35",
    moduleId: "week-5",
    title: "Day 35: Global Settings & Conditional Layouts",
    videos: [
      {
        id: "d35-v1",
        title: "settings_schema.json logic",
        youtubeId: "v8wR6w77464",
        duration: "15:20",
      },
      {
        id: "d35-v2",
        title: "Global Color & Font Settings",
        youtubeId: "P79K7mDPu_0",
        duration: "12:15",
      },
    ],
    description: "Leverage settings_schema.json for global theme variables.",
    order: 5,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d35-t1",
        title: "Modify settings_schema.json to add custom brand accent",
      },
      {
        id: "d35-t2",
        title: 'Build "Image + Text Feature" section with layout toggle select',
      },
      {
        id: "d35-t3",
        title: "Reference global settings in CSS via {{ settings.variable }}",
      },
      {
        id: "d35-t4",
        title: "Review section count in premium themes (Prestige/Symmetry)",
      },
    ],
  },
  {
    id: "day-36",
    moduleId: "week-5",
    title: "Day 36: FAQ Accordion Section",
    videos: [],
    description:
      "Build an interactive FAQ system using schema blocks and vanilla JS.",
    order: 6,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d36-t1",
        title: "Build FAQ section with question/answer block schema",
      },
      {
        id: "d36-t2",
        title: "Implement expand/collapse logic via vanilla JavaScript",
      },
      {
        id: "d36-t3",
        title: "Push build to GitHub theme repo and post LinkedIn thread",
      },
      {
        id: "d36-t4",
        title: 'Reach out to 5 businesses with "Theme Developer" messaging',
      },
    ],
  },
  {
    id: "day-37",
    moduleId: "week-5",
    title: "Day 37: [Assignment] Theme Review",
    videos: [],
    description: "Audit premium themes and refactor your custom sections.",
    order: 7,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d37-t1",
        title: "QA all 3 custom sections and refactor Liquid code",
      },
      { id: "d37-t2", title: "Analyze code patterns in trial premium themes" },
      {
        id: "d37-t3",
        title: "Update portfolio and LinkedIn headline with developer skills",
      },
      { id: "d37-t4", title: "Apply to theme customization gigs on Upwork" },
    ],
  },

  // --- WEEK 6: CUSTOM THEME (PT 1) ---
  {
    id: "day-38",
    moduleId: "week-6",
    title: "Day 38: Theme Scaffold & Global Shell",
    videos: [
      {
        id: "d38-v1",
        title: "Theme Skeleton Setup",
        youtubeId: "fX7WpAAb5S8",
        duration: "18:50",
      },
      {
        id: "d38-v2",
        title: "Layout Logic explained",
        youtubeId: "zLpOfMha7Kk",
        duration: "14:20",
      },
    ],
    description:
      "Initialize a clean slate theme and build the core theme.liquid skeleton.",
    order: 1,
    difficulty: "Advanced",
    tasks: [
      { id: "d38-t1", title: "Initialize blank theme via shopify theme init" },
      {
        id: "d38-t2",
        title: "Build <html> shell and content_for_header/layout flow",
      },
      {
        id: "d38-t3",
        title: "Add base color/typography settings_schema.json groups",
      },
    ],
  },
  {
    id: "day-39",
    moduleId: "week-6",
    title: "Day 39: Header & Footer Engineering",
    videos: [],
    description:
      "Build a dynamic header with mega-menu support and sticky logic.",
    order: 2,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d39-t1",
        title: "Build Header section with logo/menu/search schema",
      },
      {
        id: "d39-t2",
        title: "Implement sticky header JS and cart count badge",
      },
      {
        id: "d39-t3",
        title: "Create Footer section with dynamic column blocks",
      },
    ],
  },
  {
    id: "day-40",
    moduleId: "week-6",
    title: "Day 40: Editorial Homepage Sections",
    videos: [],
    description:
      "Build Hero Banners and Value Proposition bars with overlay logic.",
    order: 3,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d40-t1",
        title: "Build Hero Banner with background video/image schema",
      },
      {
        id: "d40-t2",
        title: "Create horizontal Value Prop icon strip section",
      },
      { id: "d40-t3", title: "Implement Featured Collections grid section" },
    ],
  },
  {
    id: "day-41",
    moduleId: "week-6",
    title: "Day 41: Advanced Product Templating",
    videos: [],
    description:
      "Handle complex variant states, price logic, and breadcrumb trails.",
    order: 4,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d41-t1",
        title: "Build main-product.liquid with media gallery and ATC form",
      },
      {
        id: "d41-t2",
        title: "Handle multi-variant selection and sold-out states",
      },
      {
        id: "d41-t3",
        title: "Add breadcrumb trail and trust badge components",
      },
    ],
  },
  {
    id: "day-42",
    moduleId: "week-6",
    title: "Day 42: Collection Grid & Product Cards",
    videos: [],
    description:
      "Create reusable product card snippets with hover states and badges.",
    order: 5,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d42-t1",
        title: "Build main-collection.liquid with per-row settings",
      },
      { id: "d42-t2", title: "Create snippets/product-card.liquid" },
      { id: "d42-t3", title: "Implement pagination.liquid reusable component" },
    ],
  },
  {
    id: "day-43",
    moduleId: "week-6",
    title: "Day 43: [Assignment] Logic Audit",
    videos: [],
    description:
      "Stress test your custom templates and compare architecture with Dawn.",
    order: 6,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d43-t1",
        title: "Fix edge cases (no image, long titles, empty collections)",
      },
      {
        id: "d43-t2",
        title: "Refactor reusable snippets to reduce code repetition",
      },
      { id: "d43-t3", title: "Apply for custom Shopify theme build contracts" },
    ],
  },

  // --- WEEK 7: CUSTOM THEME (PT 2) ---
  {
    id: "day-44",
    moduleId: "week-7",
    title: "Day 44: AJAX Cart Drawer",
    videos: [],
    description:
      "Integrate Shopify AJAX API to update quantities without page reloads.",
    order: 1,
    difficulty: "Advanced",
    tasks: [
      { id: "d44-t1", title: "Render cart items loop and subtotal logic" },
      {
        id: "d44-t2",
        title: "Implement AJAX /cart/add.js and quantity update handlers",
      },
      {
        id: "d44-t3",
        title: "Test card count badge and empty state messaging",
      },
    ],
  },
  {
    id: "day-45",
    moduleId: "week-7",
    title: "Day 45: Predictive Search Integration",
    videos: [],
    description:
      "Build a real-time search dropdown using the /search/suggest.json API.",
    order: 2,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d45-t1",
        title: "Build AJAX fetch for /search/suggest.json with pooling",
      },
      {
        id: "d45-t2",
        title: "Render search results dropdown with product images",
      },
      {
        id: "d45-t3",
        title: "Implement keyboard navigation (up/down/enter) for search",
      },
    ],
  },
  {
    id: "day-46",
    moduleId: "week-7",
    title: "Day 46: Blog & Content Architecture",
    videos: [],
    description:
      "Build robust blog and article templates for DTC content strategy.",
    order: 3,
    difficulty: "Intermediate",
    tasks: [
      { id: "d46-t1", title: "Build Blog grid template with pagination" },
      {
        id: "d46-t2",
        title: "Create Article page with featured image and tags",
      },
      {
        id: "d46-t3",
        title: "Implement Author bio and related articles logic",
      },
    ],
  },
  {
    id: "day-47",
    moduleId: "week-7",
    title: "Day 47: Metafield Enhanced UX",
    videos: [],
    description:
      "Connect metafields to theme editor schema for dynamic sources.",
    order: 4,
    difficulty: "Advanced",
    tasks: [
      { id: "d47-t1", title: "Define and access product metafields in Liquid" },
      {
        id: "d47-t2",
        title: "Implement highlight bullets and size guide modal",
      },
      { id: "d47-t3", title: "Connect metafields to Theme Editor via schema" },
    ],
  },
  {
    id: "day-48",
    moduleId: "week-7",
    title: "Day 48: Performance & Theme Check",
    videos: [],
    description:
      "Audit for accessibility and performance. Run automated Theme Check.",
    order: 5,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d48-t1",
        title: 'Optimize images via image_url and loading="lazy"',
      },
      { id: "d48-t2", title: "Run shopify theme check and resolve all errors" },
      {
        id: "d48-t3",
        title: "Audit accessibility (alt text, aria labels, contrast)",
      },
    ],
  },
  {
    id: "day-49",
    moduleId: "week-7",
    title: "Day 49: [Assignment] Demo Reel",
    videos: [],
    description:
      "Screen record your final theme and prepare client-facing documentation.",
    order: 6,
    difficulty: "Intermediate",
    tasks: [
      { id: "d49-t1", title: "Record a Loom walk-through of the custom theme" },
      { id: "d49-t2", title: "Write dev README and client-facing setup guide" },
      { id: "d49-t3", title: "Tag release v1.0.0 in GitHub repo" },
    ],
  },
  {
    id: "day-50",
    moduleId: "week-7",
    title: "Day 50: [Assignment] Week 7 Review",
    videos: [],
    description:
      "Finalize the project case study and update your freelancer profiles.",
    order: 7,
    difficulty: "Intermediate",
    tasks: [
      { id: "d50-t1", title: "Publish Project #7 case study to portfolio" },
      {
        id: "d50-t2",
        title: 'Update Upwork/Fiverr with "Custom Theme" specialty',
      },
      { id: "d50-t3", title: "Post build thread on LinkedIn/X" },
    ],
  },

  // --- WEEK 8: ADVANCED THEME ---
  {
    id: "day-51",
    moduleId: "week-8",
    title: "Day 51: Section Groups & Overlays",
    videos: [],
    description:
      "Implement modern Shopify section groups for header/footer and overlays.",
    order: 1,
    difficulty: "Advanced",
    tasks: [
      { id: "d51-t1", title: "Implement header and footer section groups" },
      { id: "d51-t2", title: "Connect dynamic sources to theme settings" },
      { id: "d51-t3", title: "Move header/footer into groups in theme.liquid" },
    ],
  },
  {
    id: "day-52",
    moduleId: "week-8",
    title: "Day 52: Advanced Editorial Sections",
    videos: [],
    description:
      "Build Video Heroes and Lookbook Hotspots with absolute positioning.",
    order: 2,
    difficulty: "Advanced",
    tasks: [
      { id: "d52-t1", title: "Build Full-screen Video Hero schema and Liquid" },
      { id: "d52-t2", title: "Implement Editorial Lookbook with hotspot pins" },
      { id: "d52-t3", title: "Create CSS-animated marquee/ticker section" },
    ],
  },
  {
    id: "day-53",
    moduleId: "week-8",
    title: "Day 53: Recommendation & Viewed APIs",
    videos: [],
    description:
      'Implement "Recently Viewed" and "Complementary Products" via AJAX.',
    order: 3,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d53-t1",
        title: "Build Complementary Products using Discovery API",
      },
      {
        id: "d53-t2",
        title: "Implement Recently Viewed logic via localStorage",
      },
      { id: "d53-t3", title: "Add schema-driven Product Tabs component" },
    ],
  },
  {
    id: "day-54",
    moduleId: "week-8",
    title: "Day 54: Markets & Localization Switchers",
    videos: [],
    description:
      "Build cross-border currency and language switchers for global stores.",
    order: 4,
    difficulty: "Advanced",
    tasks: [
      { id: "d54-t1", title: "Build Custom Template Variants (Landing, FAQ)" },
      {
        id: "d54-t2",
        title:
          'Implement currency/language switcher via {% form "localization" %}',
      },
      {
        id: "d54-t3",
        title: "Style internationalization bars for header/footer",
      },
    ],
  },
  {
    id: "day-55",
    moduleId: "week-8",
    title: "Day 55: Performance Optimization",
    videos: [],
    description: "Optimize high-end theme for PageSpeed and Accessibility.",
    order: 5,
    difficulty: "Advanced",
    tasks: [
      { id: "d55-t1", title: "Optimize for PageSpeed (lazy load, defer JS)" },
      {
        id: "d55-t2",
        title: "Write README and client-facing theme usage guide",
      },
      {
        id: "d55-t3",
        title: "Post on LinkedIn/X about editorial DTC theme build",
      },
    ],
  },
  {
    id: "day-56",
    moduleId: "week-8",
    title: "Day 56: [Assignment] Premium Showreel",
    videos: [],
    description:
      "Update your portfolio to target high-value clients and Plus merchants.",
    order: 6,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d56-t1",
        title: "Record a Loom walkthrough of Project #8 features",
      },
      { id: "d56-t2", title: "Publish advanced DTC theme case study" },
      {
        id: "d56-t3",
        title: "Upgrade service pricing to $2,500 - $8,000 range",
      },
    ],
  },
  {
    id: "day-57",
    moduleId: "week-8",
    title: "Day 57: [Assignment] Week 8 Review",
    videos: [],
    description:
      "Finalize Project #8 and review your progress with advanced patterns.",
    order: 7,
    difficulty: "Advanced",
    tasks: [
      { id: "d57-t1", title: "Analyze 3 stores with advanced theme features" },
      { id: "d57-t2", title: "Update gig descriptions and Upwork profile" },
      { id: "d57-t3", title: "Apply for 10 premium tier development gigs" },
    ],
  },
  {
    id: "day-58",
    moduleId: "week-8",
    title: "Day 58: Theme Performance Polishing",
    videos: [],
    description:
      "Deep dive into optimizing Liquid loops and reducing script weight.",
    order: 8,
    difficulty: "Advanced",
    tasks: [
      { id: "d58-t1", title: "Refactor any non-performant Liquid snippets" },
      { id: "d58-t2", title: "Optimize font loading and critical CSS paths" },
    ],
  },
  {
    id: "day-59",
    moduleId: "week-8",
    title: "Day 59: Final Theme QA",
    videos: [],
    description:
      "Cross-browser and cross-device testing to ensure perfect rendering.",
    order: 9,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d59-t1",
        title: "Test checkout and cart flows on multiple devices",
      },
      {
        id: "d59-t2",
        title: "Correct any visual inconsistencies across browsers",
      },
    ],
  },
  {
    id: "day-60",
    moduleId: "week-8",
    title: "Day 60: PHASE 2 COMPLETED",
    videos: [],
    description:
      "Final theme audit and preparation for Phase 3: Shopify App Development.",
    order: 10,
    difficulty: "Advanced",
    tasks: [
      { id: "d60-t1", title: "Verify both custom themes on GitHub" },
      { id: "d60-t2", title: "Finalize Case Studies for all Phase 2 projects" },
      { id: "d60-t3", title: "Post Phase 2 Journey progress" },
    ],
  },

  // --- WEEK 9: ADVANCED PRODUCT SYSTEMS ---
  {
    id: "day-61",
    moduleId: "week-9",
    title: "Day 61: High-Value Store Features",
    videos: [],
    description:
      "Audit your store like a professional consultant and define a feature-rich roadmap.",
    order: 1,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d61-t1",
        title: "Create a High-Value Store Feature Backlog in Notion",
      },
      {
        id: "d61-t2",
        title: "Pick a high-ticket niche (Apparel, Supplements, Home)",
      },
      { id: "d61-t3", title: "Define app-based vs custom feature priorities" },
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
    videos: [],
    description:
      "Unlock structured data with Metaobjects for FAQs, Trust Badges, and Specs.",
    order: 2,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d62-t1",
        title: "Create metaobjects for FAQs, Trust Badges, and Specs",
      },
      {
        id: "d62-t2",
        title: "Build sections pulling from metaobject dynamic sources",
      },
      { id: "d62-t3", title: "Connect metaobject entries to Theme Editor" },
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
    videos: [],
    description:
      "Build reusable content systems using Metaobjects for stores and collections.",
    order: 3,
    difficulty: "Advanced",
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
      { id: "d63-t3", title: "Create Press/Logo grids with metaobjects" },
      { id: "d63-t4", title: "Document client-friendly editor instructions" },
    ],
  },
  {
    id: "day-64",
    moduleId: "week-9",
    title: "Day 64: Product Personalization API",
    videos: [],
    description:
      "Master Line Item Properties for engravings, gift notes, and file uploads.",
    order: 4,
    difficulty: "Advanced",
    tasks: [
      { id: "d64-t1", title: "Add engraving/gift note inputs to product form" },
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
    videos: [],
    description:
      "Implement sticky ATC, discount logic, and complementary product recommendations.",
    order: 5,
    difficulty: "Advanced",
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
    videos: [],
    description:
      "Integrate advanced review status and comparison charts to maximize trust.",
    order: 6,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d66-t1",
        title: "Integrate Judge.me/Loox review widgets professionally",
      },
      {
        id: "d66-t2",
        title: 'Build "Our Brand vs Competitors" comparison table',
      },
      { id: "d66-t3", title: "Implement Guarantee/Trust reassurance sections" },
    ],
  },
  {
    id: "day-67",
    moduleId: "week-9",
    title: "Day 67: [Assignment] Week 9 Review",
    videos: [],
    description:
      "Review product systems and analyze premium store trust placements.",
    order: 7,
    difficulty: "Intermediate",
    tasks: [
      { id: "d67-t1", title: "Audit Project #9 feature stack and templates" },
      {
        id: "d67-t2",
        title: "Analyze trust placements in 3 premium DTC stores",
      },
      {
        id: "d67-t3",
        title: "Apply to CRO improvement and personalization gigs",
      },
    ],
  },

  // --- WEEK 10: AUTOMATION & AI ---
  {
    id: "day-68",
    moduleId: "week-10",
    title: "Day 68: Shopify Flow Automations",
    videos: [],
    description:
      "Automate high-value tasks like VIP tagging, fraud review, and stock alerts.",
    order: 1,
    difficulty: "Intermediate",
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
    videos: [],
    description:
      "Design abandoned cart and post-purchase follow-up flows for retention.",
    order: 2,
    difficulty: "Intermediate",
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
    videos: [],
    description:
      "Set up Shopify Inbox AI and use modern AI workflows for content operation.",
    order: 3,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d70-t1",
        title: "Implement Shopify Inbox AI or support chat tools",
      },
      { id: "d70-t2", title: "Create an AI Content Workflow SOP for themes" },
      { id: "d70-t3", title: "Generate AI-assisted FAQ and product content" },
    ],
  },
  {
    id: "day-71",
    moduleId: "week-10",
    title: "Day 71: Merchandising & Discovery",
    videos: [],
    description:
      "Master Search synonym logic and Boost/Bury merchandising rules.",
    order: 4,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d71-t1",
        title: "Configure Search & Discovery filter and synonym rules",
      },
      {
        id: "d71-t2",
        title: "Improve collection page filter UX and active chips",
      },
      { id: "d71-t3", title: "Implement search boost/bury logic and synonyms" },
    ],
  },
  {
    id: "day-72",
    moduleId: "week-10",
    title: "Day 72: Retention & Flex-Purchase",
    videos: [],
    description:
      "Integrate back-in-stock and subscription apps for flexible purchases.",
    order: 5,
    difficulty: "Advanced",
    tasks: [
      { id: "d72-t1", title: "Integrate back-in-stock / pre-order systems" },
      {
        id: "d72-t2",
        title: "Configure subscription subscribe-and-save blocks",
      },
      { id: "d72-t3", title: "Compare app stacks: Recharge vs Skio vs Seal" },
    ],
  },
  {
    id: "day-73",
    moduleId: "week-10",
    title: "Day 73: [Assignment] Project #9 Final QA",
    videos: [],
    description:
      "Finalize Project #9 and prepare your high-value upgrade case study.",
    order: 6,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d73-t1",
        title: "Record Loom walkthrough of all Project #9 systems",
      },
      {
        id: "d73-t2",
        title: "Write Project #9 Case Study: High-Value Store Systems",
      },
      { id: "d73-t3", title: "Push final Project #9 source to GitHub" },
    ],
  },
  {
    id: "day-74",
    moduleId: "week-10",
    title: "Day 74: [Assignment] Week 10 Review",
    videos: [],
    description:
      "Analyze subscription and AI support systems in 3 premium stores.",
    order: 7,
    difficulty: "Intermediate",
    tasks: [
      { id: "d74-t1", title: "Publish Project #9 Case Study to portfolio" },
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

  // --- WEEK 11: PREMIUM STORE STACK ---
  {
    id: "day-75",
    moduleId: "week-11",
    title: "Day 75: Project #10 & Wishlist",
    videos: [],
    description:
      "Setup Project #10 and integrate wishlist features into the premium stack.",
    order: 1,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d75-t1",
        title: "Create Project #10 dev store and feature stack branch",
      },
      { id: "d75-t2", title: "Integrate Wishlist Plus / Swym wishlist icons" },
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
    videos: [],
    description:
      "Set up rewards systems (Smile/LoyaltyLion) to drive lifetime value.",
    order: 2,
    difficulty: "Intermediate",
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
    videos: [],
    description:
      "Design custom account dashboards and reorder CTA functionality.",
    order: 3,
    difficulty: "Advanced",
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
    videos: [],
    description:
      "Improve purchase confidence with dynamic delivery dates and estimators.",
    order: 4,
    difficulty: "Advanced",
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
    videos: [],
    description:
      "Implement cross-border currency/language switchers and region trust bars.",
    order: 5,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d79-t1",
        title: "Build region-specific announcement bars and trust icons",
      },
      {
        id: "d79-t2",
        title: "Implement currency/language switchers via Shopify Markets",
      },
      { id: "d79-t3", title: "Add Wholesale/B2B inquiry form and info blocks" },
    ],
  },
  {
    id: "day-80",
    moduleId: "week-11",
    title: "Day 80: [Assignment] Debugging Workshop",
    videos: [],
    description:
      "Isolate app conflicts and track down Liquid/JS errors in a complex store.",
    order: 6,
    difficulty: "Advanced",
    tasks: [
      { id: "d80-t1", title: "Create a Shopify Debugging Checklist in Notion" },
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
    videos: [],
    description: "Analyze loyalty and delivery UX in 3 premium stores.",
    order: 7,
    difficulty: "Intermediate",
    tasks: [
      { id: "d81-t1", title: "Review Project #10 premium features stack" },
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

  // --- WEEK 12: ANALYTICS & HANDOFF ---
  {
    id: "day-82",
    moduleId: "week-12",
    title: "Day 82: Analytics & Pixel Mastery",
    videos: [],
    description:
      "Configure GA4, Meta Pixels, and Shopify Web Pixels for accurate tracking.",
    order: 1,
    difficulty: "Intermediate",
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
    videos: [],
    description:
      "Audit JSON-LD schemas and improve internal link architecture for SEO.",
    order: 2,
    difficulty: "Intermediate",
    tasks: [
      {
        id: "d83-t1",
        title: "Audit product and article JSON-LD structured data",
      },
      {
        id: "d83-t2",
        title: "Optimize meta titles and internal link descriptions",
      },
      { id: "d83-t3", title: "Build SEO-friendly FAQ / Help Center page" },
    ],
  },
  {
    id: "day-84",
    moduleId: "week-12",
    title: "Day 84: Performance & Accessibility",
    videos: [],
    description:
      "Run final PageSpeed/Lighthouse tests and fix aria-label/keyboard issues.",
    order: 3,
    difficulty: "Advanced",
    tasks: [
      { id: "d84-t1", title: "Run final PageSpeed Insights / Lighthouse pass" },
      {
        id: "d84-t2",
        title: "Fix aria-labels, focus states, and keyboard navigation",
      },
      { id: "d84-t3", title: "Compress assets and remove unused app scripts" },
    ],
  },
  {
    id: "day-85",
    moduleId: "week-12",
    title: "Day 85: Maintenance & Deployment",
    videos: [],
    description:
      "Establish professional staging checklists and theme rollback processes.",
    order: 4,
    difficulty: "Intermediate",
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
    videos: [],
    description:
      "Compile guides and retainer menus for high-value client delivery.",
    order: 5,
    difficulty: "Intermediate",
    tasks: [
      { id: "d86-t1", title: "Compile Metafield guides and Loom walkthroughs" },
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
    videos: [],
    description:
      "Finalize your premium store stack and prepare the comprehensive case study.",
    order: 6,
    difficulty: "Advanced",
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
    videos: [],
    description:
      "Analyze retention and tracking sophistication in 3 high-value stores.",
    order: 7,
    difficulty: "Advanced",
    tasks: [
      {
        id: "d88-t1",
        title: "Analyze analytics/retention loops in 3 premium stores",
      },
      {
        id: "d88-t2",
        title: "Consolidate 10 projects for high-value showreel",
      },
      { id: "d88-t3", title: "Apply to 10 premium tier development gigs" },
    ],
  },
  {
    id: "day-89",
    moduleId: "week-12",
    title: "Day 89: Simulated Client Sprint",
    videos: [],
    description:
      "Timebox realistic client requests to test your development speed and quality.",
    order: 8,
    difficulty: "Advanced",
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
    videos: [],
    description:
      "Final positioning audit and launch into advanced career paths.",
    order: 9,
    difficulty: "Advanced",
    tasks: [
      { id: "d90-t1", title: "Post Day 90 summary and portfolio showcase" },
      {
        id: "d90-t2",
        title: "Finalize profile for Advanced Shopify Dev positioning",
      },
      { id: "d90-t3", title: "Define Phase 4 Roadmap: Hydrogen & Remix" },
    ],
  },
];
