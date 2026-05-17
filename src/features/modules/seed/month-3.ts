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
      {
        id: "d61-v6",
        title: "Shopify Store Audit | Cypress Cove — Real-Time Updates",
        youtubeId: "JAoZw-Lgvfg",
        duration: "18:45",
      },
      {
        id: "d61-v7",
        title: "How to Audit Your Shopify Store — Why It Matters",
        youtubeId: "tHIy-20gifo",
        duration: "14:20",
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
    resources: [
      {
        id: "d61-r1",
        title: "Shopify App Store — Official Developer Documentation",
        url: "https://shopify.dev/docs/apps/store",
        type: "docs",
      },
      {
        id: "d61-r2",
        title: "Shopify Theme Store — Finding & Evaluating Premium Themes",
        url: "https://help.shopify.com/en/manual/online-store/themes/finding-and-choosing-a-theme",
        type: "docs",
      },
      {
        id: "d61-r3",
        title: "Dawn Theme — Official Shopify Reference Theme on GitHub",
        url: "https://github.com/Shopify/dawn",
        type: "github",
      },
      {
        id: "d61-r4",
        title: "How to Conduct a Shopify Store Audit — Smashing Magazine",
        url: "https://www.smashingmagazine.com/2022/01/ecommerce-ux-audit/",
        type: "blog",
      },
      {
        id: "d61-r5",
        title: "Shopify Changelog — Latest Platform Updates",
        url: "https://shopify.dev/changelog",
        type: "docs",
      },
      {
        id: "d61-r6",
        title: "Shopify Community — App vs Custom Development Discussions",
        url: "https://community.shopify.com/c/shopify-design/bd-p/shopify-design",
        type: "community",
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
      {
        id: "d62-v7",
        title:
          "Shopify Metaobjects Tutorial — What They Are & Ways to Use Them",
        youtubeId: "umPT10iToKU",
        duration: "16:10",
      },
      {
        id: "d62-v8",
        title: "How to Use Metaobjects in Shopify (Full Tutorial with Liquid)",
        youtubeId: "h5yFlEVTwZ4",
        duration: "22:00",
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
    resources: [
      {
        id: "d62-r1",
        title: "Shopify Metaobjects — Official Developer Docs",
        url: "https://shopify.dev/docs/apps/build/custom-data/metaobjects",
        type: "docs",
      },
      {
        id: "d62-r2",
        title: "Liquid Metaobject Object Reference",
        url: "https://shopify.dev/docs/api/liquid/objects/metaobject",
        type: "docs",
      },
      {
        id: "d62-r3",
        title: "Shopify Help Center — Metaobjects Overview",
        url: "https://help.shopify.com/en/manual/custom-data/metaobjects",
        type: "docs",
      },
      {
        id: "d62-r4",
        title: "How to Work with Metafields When Building Shopify Themes",
        url: "https://www.shopify.com/partners/blog/metafields",
        type: "blog",
      },
      {
        id: "d62-r5",
        title: "Dawn Theme — Metaobject Section Examples on GitHub",
        url: "https://github.com/Shopify/dawn/search?q=metaobject",
        type: "github",
      },
      {
        id: "d62-r6",
        title: "Shopify Dev — Dynamic Sources & Section Schema Settings",
        url: "https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings",
        type: "docs",
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
      {
        id: "d63-v7",
        title: "Shopify Metaobjects Tutorial (2025) — Advanced Dynamic Content",
        youtubeId: "n5ThjKeKnSE",
        duration: "18:30",
      },
      {
        id: "d63-v8",
        title: "Creating and Using Shopify Metaobjects — Full Shopify Tutorial",
        youtubeId: "HVMVvidjml4",
        duration: "20:15",
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
    resources: [
      {
        id: "d63-r1",
        title: "Liquid Metafield Object — Full Reference",
        url: "https://shopify.dev/docs/api/liquid/objects/metafield",
        type: "docs",
      },
      {
        id: "d63-r2",
        title: "Shopify Help Center — Adding Metafields to Products",
        url: "https://help.shopify.com/en/manual/custom-data/metafields",
        type: "docs",
      },
      {
        id: "d63-r3",
        title: "Shopify Liquid Code Examples — Product Metafields",
        url: "https://shopify.github.io/liquid-code-examples/example/product-metafields/",
        type: "reference",
      },
      {
        id: "d63-r4",
        title:
          "How to Build a Customizable Related Products Section — Shopify Partners Blog",
        url: "https://www.shopify.com/partners/blog/related-products",
        type: "blog",
      },
      {
        id: "d63-r5",
        title:
          "Ways to Use Shopify Metafields on Product Pages (With Liquid Code)",
        url: "https://www.taskhusky.com/blogs/ecommerce-insights/ways-to-use-shopify-metafields-on-product-pages-with-liquid-code",
        type: "blog",
      },
      {
        id: "d63-r6",
        title:
          "Using Metafields in Custom Liquid Blocks in Shopify 2.0 — Ed Codes",
        url: "https://ed.codes/blog/using-metafields-in-custom-liquid-blocks-in-shopify-2-0",
        type: "blog",
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
      {
        id: "d64-v7",
        title:
          "Shopify Theme Development — Metaobjects Tutorial (Line Properties Context)",
        youtubeId: "Rp4kVN0XivQ",
        duration: "19:00",
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
    resources: [
      {
        id: "d64-r1",
        title: "Shopify Dev — Line Item Properties (Cart Object Reference)",
        url: "https://shopify.dev/docs/api/liquid/objects/line_item#line_item-properties",
        type: "docs",
      },
      {
        id: "d64-r2",
        title:
          "Shopify UI Elements Generator — Line Item Property Builder Tool",
        url: "https://ui-elements-generator.myshopify.com/pages/line-item-property",
        type: "tool",
      },
      {
        id: "d64-r3",
        title:
          "Adding Line Item Properties for Personalization — GitHub Gist (Carson Bain)",
        url: "https://gist.github.com/CarsonBain/8f206795a23514916405353c0c30e3fb",
        type: "github",
      },
      {
        id: "d64-r4",
        title:
          "Adding Properties to Line Items in Shopify — Rob Johnson Dev Blog",
        url: "https://www.robkjohnson.com/posts/shopify-line-item-properties-implementation/",
        type: "blog",
      },
      {
        id: "d64-r5",
        title: "Mastering Shopify Line Item Properties — HulkApps Guide",
        url: "https://www.hulkapps.com/blogs/shopify-hub/mastering-shopify-how-to-add-line-item-properties-to-elevate-your-stores-shopping-experience",
        type: "blog",
      },
      {
        id: "d64-r6",
        title: "Shopify Cart API — AJAX Requests Reference",
        url: "https://shopify.dev/docs/api/ajax/reference/cart",
        type: "docs",
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
      {
        id: "d65-v7",
        title:
          "How to Use Metaobjects on Shopify — Complementary Products Context",
        youtubeId: "jmOnR5t9Q3M",
        duration: "14:50",
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
    resources: [
      {
        id: "d65-r1",
        title: "Shopify Dev — Show Complementary Products on Product Pages",
        url: "https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations/complementary-products",
        type: "docs",
      },
      {
        id: "d65-r2",
        title:
          "Shopify Help Center — Customize Product Recommendations with Search & Discovery",
        url: "https://help.shopify.com/en/manual/online-store/search-and-discovery/product-recommendations",
        type: "docs",
      },
      {
        id: "d65-r3",
        title: "Shopify Product Recommendations — Liquid Object Reference",
        url: "https://shopify.dev/docs/api/liquid/objects/recommendations",
        type: "docs",
      },
      {
        id: "d65-r4",
        title:
          "How to Build a Customizable Related Products Section — Shopify Partners Blog",
        url: "https://www.shopify.com/partners/blog/related-products",
        type: "blog",
      },
      {
        id: "d65-r5",
        title: "Sticky Add to Cart Tutorial — The Prompted (Free Code)",
        url: "https://theprompted.co/blogs/tutorials/sticky-add-to-cart-free-tutorial",
        type: "blog",
      },
      {
        id: "d65-r6",
        title: "Shopify Cart AJAX API — Adding Items & Updating Cart",
        url: "https://shopify.dev/docs/api/ajax/reference/cart",
        type: "docs",
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
    resources: [
      {
        id: "d66-r1",
        title: "Judge.me Developer Docs — Theme Integration Guide",
        url: "https://judge.me/developer",
        type: "docs",
      },
      {
        id: "d66-r2",
        title: "Shopify Help Center — Adding Product Reviews to Your Store",
        url: "https://help.shopify.com/en/manual/products/product-reviews",
        type: "docs",
      },
      {
        id: "d66-r3",
        title: "Judge.me Reviews Shopify Tutorial 2024 — YouTube",
        url: "https://www.youtube.com/watch?v=EqSlozdAoQk",
        type: "blog",
      },
      {
        id: "d66-r4",
        title: "How to Customize Judge.me Reviews for Shopify (2024) — YouTube",
        url: "https://www.youtube.com/watch?v=cvnKbOg_Vv0",
        type: "blog",
      },
      {
        id: "d66-r5",
        title:
          "CRO Trust Signals — Conversion Rate Optimization for Shopify — Shopify Blog",
        url: "https://www.shopify.com/blog/conversion-rate-optimization",
        type: "blog",
      },
      {
        id: "d66-r6",
        title: "Loox Photo Reviews — App Documentation & Setup",
        url: "https://help.loox.io/",
        type: "docs",
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
    resources: [
      {
        id: "d67-r1",
        title: "Shopify Dev — Online Store 2.0 Theme Architecture Overview",
        url: "https://shopify.dev/docs/storefronts/themes/architecture",
        type: "docs",
      },
      {
        id: "d67-r2",
        title: "Shopify Partner Academy — Theme Development Certification",
        url: "https://www.shopify.com/partners/blog/shopify-partner-academy",
        type: "docs",
      },
      {
        id: "d67-r3",
        title: "Dawn Theme — Full Source Code Reference",
        url: "https://github.com/Shopify/dawn",
        type: "github",
      },
      {
        id: "d67-r4",
        title: "Shopify Conversion Rate Optimization — Official Blog Guide",
        url: "https://www.shopify.com/blog/conversion-rate-optimization",
        type: "blog",
      },
      {
        id: "d67-r5",
        title: "eCommerce CRO Checklist — Smashing Magazine",
        url: "https://www.smashingmagazine.com/2022/01/ecommerce-ux-audit/",
        type: "blog",
      },
      {
        id: "d67-r6",
        title: "Shopify Experts Marketplace — Finding Freelance Gigs",
        url: "https://www.shopify.com/experts",
        type: "tool",
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
      {
        id: "d68-v7",
        title: "Shopify Flow Tutorial 2024 — Comprehensive Automation Guide",
        youtubeId: "S4pzRVXODWg",
        duration: "18:30",
      },
      {
        id: "d68-v8",
        title:
          "How to Set Up Shopify Flow for Automation — Step-by-Step No Code Tutorial",
        youtubeId: "DAoxfhgaFOU",
        duration: "14:55",
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
    resources: [
      {
        id: "d68-r1",
        title: "Shopify Flow — Official Developer Documentation",
        url: "https://shopify.dev/docs/apps/flow",
        type: "docs",
      },
      {
        id: "d68-r2",
        title: "Shopify Help Center — Getting Started with Shopify Flow",
        url: "https://help.shopify.com/en/manual/shopify-flow",
        type: "docs",
      },
      {
        id: "d68-r3",
        title: "Shopify Flow Templates — Pre-Built Workflow Library",
        url: "https://apps.shopify.com/flow",
        type: "docs",
      },
      {
        id: "d68-r4",
        title: "Shopify Flow — GitHub Action Examples & Custom Triggers",
        url: "https://github.com/Shopify/shopify-flow-examples",
        type: "github",
      },
      {
        id: "d68-r5",
        title: "How to Automate Your Shopify Store with Flow — Shopify Blog",
        url: "https://www.shopify.com/blog/shopify-flow",
        type: "blog",
      },
      {
        id: "d68-r6",
        title: "Shopify Community — Flow Automation Tips & Use Cases",
        url: "https://community.shopify.com/c/shopify-flow/bd-p/flow",
        type: "community",
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
      {
        id: "d69-v7",
        title:
          "How to Create a High Converting Abandoned Cart & Checkout Flow — Shopify + Klaviyo 2024",
        youtubeId: "XaOi3Iv3dEQ",
        duration: "22:10",
      },
      {
        id: "d69-v8",
        title:
          "Klaviyo — How to Create a High Converting Welcome Series Flow 2024",
        youtubeId: "wpEau7lMqMk",
        duration: "18:45",
      },
      {
        id: "d69-v9",
        title:
          "Klaviyo — How to Create a High Converting Post-Purchase Flow 2024",
        youtubeId: "mvIsJAchOKU",
        duration: "16:30",
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
    resources: [
      {
        id: "d69-r1",
        title: "Klaviyo — Shopify Integration Official Documentation",
        url: "https://help.klaviyo.com/hc/en-us/articles/115005085572",
        type: "docs",
      },
      {
        id: "d69-r2",
        title: "Klaviyo — Abandoned Cart Flow Setup Guide",
        url: "https://help.klaviyo.com/hc/en-us/articles/115002779451",
        type: "docs",
      },
      {
        id: "d69-r3",
        title: "Klaviyo — Welcome Series Flow Best Practices",
        url: "https://help.klaviyo.com/hc/en-us/articles/115002779831",
        type: "docs",
      },
      {
        id: "d69-r4",
        title: "Shopify Help Center — Email Marketing with Klaviyo",
        url: "https://help.shopify.com/en/manual/promoting-marketing/email-marketing",
        type: "docs",
      },
      {
        id: "d69-r5",
        title: "The Ultimate Guide to Klaviyo Flows — Shopify Blog",
        url: "https://www.shopify.com/blog/klaviyo-shopify",
        type: "blog",
      },
      {
        id: "d69-r6",
        title: "Klaviyo Academy — Free Email Marketing Courses",
        url: "https://academy.klaviyo.com/",
        type: "tool",
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
      {
        id: "d70-v7",
        title: "How to Build an AI Shopify Chatbot (2024) — Tidio Full Setup",
        youtubeId: "U04xQ0g7nq4",
        duration: "16:20",
      },
      {
        id: "d70-v8",
        title: "How to Use Shopify Magic AI to Build Your Store Fast",
        youtubeId: "QDkFEoDtNJg",
        duration: "14:55",
      },
      {
        id: "d70-v9",
        title:
          "Shopify Magic — How to Use AI to Generate Product Descriptions (2024)",
        youtubeId: "4OhkJkfKdyQ",
        duration: "11:30",
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
    resources: [
      {
        id: "d70-r1",
        title: "Shopify Inbox — Official Help Center Docs",
        url: "https://help.shopify.com/en/manual/inbox",
        type: "docs",
      },
      {
        id: "d70-r2",
        title: "Shopify Magic — AI Features Overview (Developer Docs)",
        url: "https://shopify.dev/docs/apps/build/shopify-magic",
        type: "docs",
      },
      {
        id: "d70-r3",
        title: "Shopify Magic — Official Feature Page",
        url: "https://www.shopify.com/magic",
        type: "docs",
      },
      {
        id: "d70-r4",
        title: "How Shopify Is Using AI to Power Commerce — Shopify Blog",
        url: "https://www.shopify.com/blog/shopify-ai",
        type: "blog",
      },
      {
        id: "d70-r5",
        title: "Tidio — Shopify Chatbot Integration Docs",
        url: "https://help.tidio.com/hc/en-us/articles/5568649003420-Shopify-Integration",
        type: "docs",
      },
      {
        id: "d70-r6",
        title:
          "AI for eCommerce — How to Use ChatGPT for Shopify Content — Dev.to",
        url: "https://dev.to/shopify/using-ai-to-scale-shopify-store-content-operations",
        type: "blog",
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
      {
        id: "d71-v7",
        title:
          "Full Guide: Shopify Search & Discovery App (2025) — Filters, Search, Recommendations & Upsells",
        youtubeId: "TjzV7Ll-Uy0",
        duration: "24:15",
      },
      {
        id: "d71-v8",
        title: "How to Use Shopify Search & Discovery App — Mastering Shopify",
        youtubeId: "rBlA9dGIQdU",
        duration: "17:40",
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
    resources: [
      {
        id: "d71-r1",
        title: "Shopify Search & Discovery App — Official Docs",
        url: "https://help.shopify.com/en/manual/online-store/search-and-discovery",
        type: "docs",
      },
      {
        id: "d71-r2",
        title: "Shopify Dev — Predictive Search API Reference",
        url: "https://shopify.dev/docs/api/ajax/reference/predictive-search",
        type: "docs",
      },
      {
        id: "d71-r3",
        title: "Shopify Dev — Collection Filtering & Storefront Filters",
        url: "https://shopify.dev/docs/storefronts/themes/navigation-search/filtering/storefront-filtering",
        type: "docs",
      },
      {
        id: "d71-r4",
        title: "Shopify Dev — Search & Discovery Merchandising Rules",
        url: "https://help.shopify.com/en/manual/online-store/search-and-discovery/search",
        type: "docs",
      },
      {
        id: "d71-r5",
        title: "How to Improve Shopify Search UX — Smashing Magazine",
        url: "https://www.smashingmagazine.com/2020/06/ecommerce-search-ux-design-best-practices/",
        type: "blog",
      },
      {
        id: "d71-r6",
        title: "Shopify Liquid — Paginate & Filter Tags Reference",
        url: "https://shopify.dev/docs/api/liquid/tags/paginate",
        type: "reference",
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
      {
        id: "d72-v7",
        title:
          "Recharge Subscriptions Shopify App Tutorial for Beginners (2025)",
        youtubeId: "eiYG6yYuQhE",
        duration: "19:45",
      },
      {
        id: "d72-v8",
        title:
          "Seal Subscriptions Shopify App Tutorial (2025) — Create a Subscription Website",
        youtubeId: "eITCXuOgjAA",
        duration: "22:10",
      },
      {
        id: "d72-v9",
        title: "How to Set Up Pre Orders on Shopify — Full Tutorial 2023",
        youtubeId: "LxW6zbuh16E",
        duration: "14:20",
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
    resources: [
      {
        id: "d72-r1",
        title: "Shopify Dev — Selling Plans API (Subscriptions)",
        url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan",
        type: "docs",
      },
      {
        id: "d72-r2",
        title:
          "Shopify Help Center — Managing Inventory & Out-of-Stock Products",
        url: "https://help.shopify.com/en/manual/products/inventory",
        type: "docs",
      },
      {
        id: "d72-r3",
        title: "Recharge Payments — Developer Documentation",
        url: "https://developer.rechargepayments.com/",
        type: "docs",
      },
      {
        id: "d72-r4",
        title: "Seal Subscriptions — App Documentation",
        url: "https://seal-subscriptions.com/documentation",
        type: "docs",
      },
      {
        id: "d72-r5",
        title: "How to Grow Subscription Revenue on Shopify — Shopify Blog",
        url: "https://www.shopify.com/blog/subscription-business",
        type: "blog",
      },
      {
        id: "d72-r6",
        title: "Back-in-Stock & Pre-Order Best Practices — Shopify Community",
        url: "https://community.shopify.com/c/shopify-design/back-in-stock-notifications/td-p/575706",
        type: "community",
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
    resources: [
      {
        id: "d73-r1",
        title: "Shopify Dev — Theme QA Checklist & Testing Guide",
        url: "https://shopify.dev/docs/storefronts/themes/best-practices",
        type: "docs",
      },
      {
        id: "d73-r2",
        title: "Shopify Theme Inspector — Performance Profiling Tool",
        url: "https://shopify.dev/docs/storefronts/themes/tools/theme-inspector",
        type: "tool",
      },
      {
        id: "d73-r3",
        title: "Dawn Theme on GitHub — Reference for QA Comparison",
        url: "https://github.com/Shopify/dawn",
        type: "github",
      },
      {
        id: "d73-r4",
        title:
          "How to Write a Shopify Case Study That Wins Clients — Shopify Partners Blog",
        url: "https://www.shopify.com/partners/blog/case-study",
        type: "blog",
      },
      {
        id: "d73-r5",
        title: "Loom — Free Screen Recording for Project Walkthroughs",
        url: "https://www.loom.com/",
        type: "tool",
      },
      {
        id: "d73-r6",
        title: "Google PageSpeed Insights — Store Performance Testing",
        url: "https://pagespeed.web.dev/",
        type: "tool",
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
    resources: [
      {
        id: "d74-r1",
        title: "Shopify Partner Dashboard — Finding Freelance Projects",
        url: "https://partners.shopify.com/",
        type: "tool",
      },
      {
        id: "d74-r2",
        title: "Shopify Dev — Full Platform Documentation Index",
        url: "https://shopify.dev/docs",
        type: "docs",
      },
      {
        id: "d74-r3",
        title: "Upwork — Shopify Automation & Klaviyo Job Listings",
        url: "https://www.upwork.com/freelance-jobs/shopify/",
        type: "tool",
      },
      {
        id: "d74-r4",
        title: "Klaviyo Partner Program — Certification & Agency Benefits",
        url: "https://www.klaviyo.com/partners",
        type: "docs",
      },
      {
        id: "d74-r5",
        title:
          "How to Analyze Competitor Shopify Stores for Research — Shopify Blog",
        url: "https://www.shopify.com/blog/competitive-analysis",
        type: "blog",
      },
      {
        id: "d74-r6",
        title:
          "Built With Shopify — Discover Premium Stores Using Specific Tech Stacks",
        url: "https://builtwith.com/cms/shopify",
        type: "tool",
      },
    ],
  },
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
      {
        id: "d75-v6",
        title:
          "Swym Wishlist Plus — Full Feature Walkthrough & Setup Guide for Shopify",
        youtubeId: "Ip0AVseV9HY",
        duration: "18:45",
      },
      {
        id: "d75-v7",
        title:
          "Classic or New? Shopify Customer Accounts — Pros, Cons & Best Practices",
        youtubeId: "vQu-LXXW9TQ",
        duration: "14:20",
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
    resources: [
      {
        id: "d75-r1",
        title: "Shopify Dev — New Customer Accounts Overview",
        url: "https://shopify.dev/docs/storefronts/themes/customer-accounts",
        type: "docs",
      },
      {
        id: "d75-r2",
        title: "Shopify Help Center — Customer Accounts Classic vs New",
        url: "https://help.shopify.com/en/manual/customers/customer-accounts",
        type: "docs",
      },
      {
        id: "d75-r3",
        title: "Swym Wishlist Plus — Developer API Documentation",
        url: "https://developers.swym.it/reference/api-reference",
        type: "docs",
      },
      {
        id: "d75-r4",
        title: "Dawn Theme on GitHub — Recently Viewed Products Implementation",
        url: "https://github.com/Shopify/dawn/search?q=recently-viewed",
        type: "github",
      },
      {
        id: "d75-r5",
        title: "How to Add a Wishlist to Your Shopify Store — Shopify Blog",
        url: "https://www.shopify.com/blog/wishlist",
        type: "blog",
      },
      {
        id: "d75-r6",
        title: "Shopify AJAX Cart API — Fetch & localStorage Patterns",
        url: "https://shopify.dev/docs/api/ajax/reference/cart",
        type: "docs",
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
      {
        id: "d76-v6",
        title:
          "How to Setup Smile.io — A Customer Loyalty Program on Shopify (2024)",
        youtubeId: "bC_8m82jUFo",
        duration: "17:30",
      },
      {
        id: "d76-v7",
        title:
          "How to Integrate Smile.io Loyalty Rewards on Your Shopify Store",
        youtubeId: "k1t-UqsCrdk",
        duration: "14:55",
      },
      {
        id: "d76-v8",
        title: "Getting Started with Smile.io — App Demo & Feature Overview",
        youtubeId: "7MeH9YYPuFY",
        duration: "12:10",
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
    resources: [
      {
        id: "d76-r1",
        title: "Smile.io — Developer & Theme Integration Documentation",
        url: "https://smile.io/developer",
        type: "docs",
      },
      {
        id: "d76-r2",
        title: "LoyaltyLion — Shopify Integration Guide",
        url: "https://loyaltylion.com/integrations/shopify",
        type: "docs",
      },
      {
        id: "d76-r3",
        title: "Shopify Help Center — Customer Loyalty Programs",
        url: "https://help.shopify.com/en/manual/promoting-marketing/customer-loyalty",
        type: "docs",
      },
      {
        id: "d76-r4",
        title: "Automate Loyalty Actions — Shopify Flow + Smile.io Integration",
        url: "https://www.youtube.com/watch?v=-cKXw0qONJY",
        type: "blog",
      },
      {
        id: "d76-r5",
        title: "How Loyalty Programs Drive Repeat Purchases — Shopify Blog",
        url: "https://www.shopify.com/blog/loyalty-programs",
        type: "blog",
      },
      {
        id: "d76-r6",
        title: "Shopify Community — Loyalty Widget Placement Best Practices",
        url: "https://community.shopify.com/c/shopify-design/loyalty-rewards-program/td-p/416829",
        type: "community",
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
      {
        id: "d77-v7",
        title:
          "How to Add Subscribe and Save Options to Shopify (2024 Tutorial)",
        youtubeId: "XdewI7bi560",
        duration: "16:40",
      },
      {
        id: "d77-v8",
        title: "Shopify Customer Account Extensibility — Developer Preview",
        youtubeId: "ai5sV3uDBow",
        duration: "19:15",
      },
      {
        id: "d77-v9",
        title: "How to Add Shopify Subscription App to Your Store (2024)",
        youtubeId: "eg7SlDHFxmw",
        duration: "13:50",
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
    resources: [
      {
        id: "d77-r1",
        title: "Shopify Dev — Customer Account UI Extensions",
        url: "https://shopify.dev/docs/api/customer-account-ui-extensions",
        type: "docs",
      },
      {
        id: "d77-r2",
        title: "Shopify Dev — Selling Plans (Subscribe & Save) API",
        url: "https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans",
        type: "docs",
      },
      {
        id: "d77-r3",
        title: "Shopify Help Center — Setting Up Customer Accounts",
        url: "https://help.shopify.com/en/manual/customers/customer-accounts",
        type: "docs",
      },
      {
        id: "d77-r4",
        title: "Dawn Theme on GitHub — Customer Account Templates",
        url: "https://github.com/Shopify/dawn/tree/main/templates/customers",
        type: "github",
      },
      {
        id: "d77-r5",
        title:
          "How to Increase Customer Retention with Account Features — Shopify Blog",
        url: "https://www.shopify.com/blog/customer-retention",
        type: "blog",
      },
      {
        id: "d77-r6",
        title: "Shopify Liquid — Customer Object Full Reference",
        url: "https://shopify.dev/docs/api/liquid/objects/customer",
        type: "reference",
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
      {
        id: "d78-v7",
        title:
          "How to Display Shopify Estimated Delivery Date on Product Page (2024)",
        youtubeId: "enmYjb-g7A4",
        duration: "12:40",
      },
      {
        id: "d78-v8",
        title:
          "How to Display Estimated Delivery Date on Shopify (2023) — Simple Tutorial",
        youtubeId: "AkNwC7iWJYc",
        duration: "10:15",
      },
      {
        id: "d78-v9",
        title:
          "How to Display Estimated Delivery Date on Shopify Product Page — Full Guide",
        youtubeId: "P5_RmWS5aUI",
        duration: "11:30",
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
    resources: [
      {
        id: "d78-r1",
        title: "Shopify Dev — Shipping & Delivery Settings API",
        url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile",
        type: "docs",
      },
      {
        id: "d78-r2",
        title: "Shopify Help Center — Setting Up Shipping & Local Delivery",
        url: "https://help.shopify.com/en/manual/shipping",
        type: "docs",
      },
      {
        id: "d78-r3",
        title: "Shopify Dev — Carrier-Calculated Shipping Overview",
        url: "https://shopify.dev/docs/apps/build/purchase-options/shipping",
        type: "docs",
      },
      {
        id: "d78-r4",
        title:
          "Estimated Delivery Date on Product Pages — Coding Tutorial (Code Pen Resource)",
        url: "https://codepen.io/GlobalKST/pen/oNXOXyP",
        type: "tool",
      },
      {
        id: "d78-r5",
        title: "How Delivery Transparency Increases Conversions — Shopify Blog",
        url: "https://www.shopify.com/blog/shipping-policy",
        type: "blog",
      },
      {
        id: "d78-r6",
        title:
          "Shopify Community — Delivery Date & Shipping Estimator Discussions",
        url: "https://community.shopify.com/c/shopify-design/estimated-delivery-date/td-p/841774",
        type: "community",
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
      {
        id: "d79-v7",
        title:
          "Shopify Multi-Currency Checkout — How to Offer Multiple Currencies (Coding with Jan)",
        youtubeId: "uiBLBX9HTRA",
        duration: "16:20",
      },
      {
        id: "d79-v8",
        title:
          "Shopify Localization — Different Content for Markets & Countries Using Liquid",
        youtubeId: "g-tiMjB6HB4",
        duration: "14:50",
      },
      {
        id: "d79-v9",
        title: "Setting Up Shopify Markets to Sell Internationally",
        youtubeId: "jPQSg5lTR0g",
        duration: "13:35",
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
    resources: [
      {
        id: "d79-r1",
        title: "Shopify Dev — Markets API & International Commerce",
        url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/Market",
        type: "docs",
      },
      {
        id: "d79-r2",
        title: "Shopify Help Center — Shopify Markets Setup Guide",
        url: "https://help.shopify.com/en/manual/markets",
        type: "docs",
      },
      {
        id: "d79-r3",
        title: "Shopify Dev — Localization Object in Liquid",
        url: "https://shopify.dev/docs/api/liquid/objects/localization",
        type: "docs",
      },
      {
        id: "d79-r4",
        title: "Shopify Dev — B2B & Wholesale Commerce Overview",
        url: "https://shopify.dev/docs/apps/build/b2b",
        type: "docs",
      },
      {
        id: "d79-r5",
        title:
          "How to Sell Internationally with Shopify Markets — Shopify Blog",
        url: "https://www.shopify.com/blog/shopify-markets",
        type: "blog",
      },
      {
        id: "d79-r6",
        title: "Shopify Translate & Adapt App — Official Docs",
        url: "https://help.shopify.com/en/manual/markets/languages/translate-and-adapt-app",
        type: "docs",
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
    resources: [
      {
        id: "d80-r1",
        title: "Shopify Dev — Theme Inspector for Chrome (Liquid Profiling)",
        url: "https://shopify.dev/docs/storefronts/themes/tools/theme-inspector",
        type: "tool",
      },
      {
        id: "d80-r2",
        title: "Shopify Dev — Theme Best Practices & Performance Guide",
        url: "https://shopify.dev/docs/storefronts/themes/best-practices/performance",
        type: "docs",
      },
      {
        id: "d80-r3",
        title: "Shopify Dev — App Embed Blocks (Preventing Conflicts)",
        url: "https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks",
        type: "docs",
      },
      {
        id: "d80-r4",
        title: "Google PageSpeed Insights — Shopify Store Testing Tool",
        url: "https://pagespeed.web.dev/",
        type: "tool",
      },
      {
        id: "d80-r5",
        title: "Web Vitals CLS Debugging Guide — web.dev",
        url: "https://web.dev/cls/",
        type: "blog",
      },
      {
        id: "d80-r6",
        title: "Shopify Community — App Conflict Troubleshooting Threads",
        url: "https://community.shopify.com/c/shopify-design/app-conflicts/td-p/484993",
        type: "community",
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
    resources: [
      {
        id: "d81-r1",
        title: "Shopify Dev — Full Theme Architecture Reference",
        url: "https://shopify.dev/docs/storefronts/themes/architecture",
        type: "docs",
      },
      {
        id: "d81-r2",
        title: "Shopify Partner Dashboard — Find Freelance Projects",
        url: "https://partners.shopify.com/",
        type: "tool",
      },
      {
        id: "d81-r3",
        title: "Dawn Theme on GitHub — Premium Feature Reference",
        url: "https://github.com/Shopify/dawn",
        type: "github",
      },
      {
        id: "d81-r4",
        title: "How to Analyze Shopify Stores for UX Research — Shopify Blog",
        url: "https://www.shopify.com/blog/ecommerce-ux",
        type: "blog",
      },
      {
        id: "d81-r5",
        title: "Built With Shopify — Identify Apps & Tech Stack of Live Stores",
        url: "https://builtwith.com/cms/shopify",
        type: "tool",
      },
      {
        id: "d81-r6",
        title: "Upwork — Loyalty, Subscription & Shopify Integration Gigs",
        url: "https://www.upwork.com/freelance-jobs/shopify/",
        type: "tool",
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
      {
        id: "d82-v7",
        title: "Shopify Tutorial — Web Pixels Custom Pixel Implementation",
        youtubeId: "bP5V0qCdtUM",
        duration: "18:00",
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
    resources: [
      {
        id: "d82-r1",
        title: "Shopify GA4 Setup — Official Integration Guide",
        url: "https://help.shopify.com/en/manual/reports-and-analytics/google-analytics/google-analytics-setup",
        type: "docs",
      },
      {
        id: "d82-r2",
        title: "Shopify Web Pixels API Reference",
        url: "https://shopify.dev/docs/api/web-pixels-api",
        type: "docs",
      },
      {
        id: "d82-r3",
        title: "Shopify Customer Events API Documentation",
        url: "https://shopify.dev/docs/api/customer-events",
        type: "docs",
      },
      {
        id: "d82-r4",
        title: "GA4 Ecommerce Events Measurement Guide — Google Developers",
        url: "https://developers.google.com/analytics/devguides/collection/ga4/ecommerce",
        type: "reference",
      },
      {
        id: "d82-r5",
        title: "Meta Pixel for Developers — Official Documentation",
        url: "https://developers.facebook.com/docs/meta-pixel",
        type: "reference",
      },
      {
        id: "d82-r6",
        title: "How to Set Up GA4 on Shopify Without an App — dev.to",
        url: "https://dev.to/analyzify/how-to-setup-google-analytics-4-on-shopify-without-an-app-1e3n",
        type: "blog",
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
      {
        id: "d83-v7",
        title: "Steal My Shopify SEO Audit — $100k/mo Blueprint",
        youtubeId: "D8CzAmb8x4Y",
        duration: "22:00",
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
    resources: [
      {
        id: "d83-r1",
        title: "Shopify Themes SEO Best Practices",
        url: "https://shopify.dev/docs/themes/best-practices/seo",
        type: "docs",
      },
      {
        id: "d83-r2",
        title: "Shopify Help Center — SEO Guide",
        url: "https://help.shopify.com/en/manual/promoting-marketing/seo",
        type: "docs",
      },
      {
        id: "d83-r3",
        title: "Google Rich Results Test Tool",
        url: "https://search.google.com/test/rich-results",
        type: "tool",
      },
      {
        id: "d83-r4",
        title: "Product Structured Data — Google Search Central",
        url: "https://developers.google.com/search/docs/appearance/structured-data/product",
        type: "reference",
      },
      {
        id: "d83-r5",
        title: "Ecommerce Schema Markup Explained — Shopify Blog",
        url: "https://www.shopify.com/blog/ecommerce-schema",
        type: "blog",
      },
      {
        id: "d83-r6",
        title: "Schema Markup Validator — schema.org",
        url: "https://validator.schema.org/",
        type: "tool",
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
      {
        id: "d84-v7",
        title:
          "Shopify Speed Optimization — Fix Slow Loading & Pass Core Web Vitals",
        youtubeId: "IPLPb1Bd_oE",
        duration: "26:00",
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
    resources: [
      {
        id: "d84-r1",
        title: "Shopify Theme Performance Best Practices",
        url: "https://shopify.dev/docs/themes/best-practices/performance",
        type: "docs",
      },
      {
        id: "d84-r2",
        title: "Shopify Theme Accessibility Best Practices",
        url: "https://shopify.dev/docs/themes/best-practices/accessibility",
        type: "docs",
      },
      {
        id: "d84-r3",
        title: "Google PageSpeed Insights Tool",
        url: "https://pagespeed.web.dev/",
        type: "tool",
      },
      {
        id: "d84-r4",
        title: "Core Web Vitals Overview — web.dev",
        url: "https://web.dev/vitals/",
        type: "reference",
      },
      {
        id: "d84-r5",
        title: "WCAG 2.1 Quick Reference — W3C",
        url: "https://www.w3.org/WAI/WCAG21/quickref/",
        type: "reference",
      },
      {
        id: "d84-r6",
        title: "TinyPNG — Compress Images for Web",
        url: "https://tinypng.com/",
        type: "tool",
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
      {
        id: "d85-v6",
        title: "How To Use GitHub With Shopify — Beginner to Advanced",
        youtubeId: "QGglcSK9PfY",
        duration: "20:00",
      },
      {
        id: "d85-v7",
        title: "How to Upgrade Your Shopify Theme with GitHub Integration",
        youtubeId: "aAM_kltisLU",
        duration: "16:00",
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
    resources: [
      {
        id: "d85-r1",
        title: "Shopify GitHub Integration Documentation",
        url: "https://shopify.dev/docs/themes/tools/github",
        type: "docs",
      },
      {
        id: "d85-r2",
        title: "Shopify CLI Theme Commands Reference",
        url: "https://shopify.dev/docs/themes/tools/cli/theme-commands",
        type: "docs",
      },
      {
        id: "d85-r3",
        title: "Dawn Theme — Official Shopify GitHub Repository",
        url: "https://github.com/Shopify/dawn",
        type: "github",
      },
      {
        id: "d85-r4",
        title: "Shopify Theme Architecture Reference",
        url: "https://shopify.dev/docs/themes/architecture",
        type: "docs",
      },
      {
        id: "d85-r5",
        title: "Gitflow Workflow — Branching Strategy Guide (Atlassian)",
        url: "https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow",
        type: "blog",
      },
      {
        id: "d85-r6",
        title: "Shopify Developer Changelog",
        url: "https://shopify.dev/changelog",
        type: "docs",
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
      {
        id: "d86-v6",
        title:
          "How to Become a Shopify Freelance Developer in 2024 — Step-by-Step",
        youtubeId: "bJG3dIIKBiM",
        duration: "22:00",
      },
      {
        id: "d86-v7",
        title:
          "How I Earn Over $100,000/Year as a Shopify Developer Freelancer",
        youtubeId: "wQTKdsR1HUc",
        duration: "18:00",
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
    resources: [
      {
        id: "d86-r1",
        title: "Shopify Metafields & Metaobjects — Developer Docs",
        url: "https://shopify.dev/docs/apps/build/metafields",
        type: "docs",
      },
      {
        id: "d86-r2",
        title: "Shopify Metafields — Help Center Guide",
        url: "https://help.shopify.com/en/manual/metafields",
        type: "docs",
      },
      {
        id: "d86-r3",
        title: "Shopify Partner Program Overview",
        url: "https://www.shopify.com/partners",
        type: "reference",
      },
      {
        id: "d86-r4",
        title: "Loom — Screen Recorder for Client Walkthroughs",
        url: "https://www.loom.com/",
        type: "tool",
      },
      {
        id: "d86-r5",
        title: "Shopify Partner Blog — Business & Client Management",
        url: "https://www.shopify.com/partners/blog",
        type: "blog",
      },
      {
        id: "d86-r6",
        title: "Upwork — Shopify Developer Marketplace",
        url: "https://www.upwork.com/hire/shopify-developers/",
        type: "community",
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
    resources: [
      {
        id: "d87-r1",
        title: "Shopify Theme Store Requirements & Review Criteria",
        url: "https://shopify.dev/docs/themes/store/requirements",
        type: "docs",
      },
      {
        id: "d87-r2",
        title: "WAVE Web Accessibility Evaluation Tool",
        url: "https://wave.webaim.org/",
        type: "tool",
      },
      {
        id: "d87-r3",
        title: "Behance — Creative Portfolio Platform",
        url: "https://www.behance.net/",
        type: "reference",
      },
      {
        id: "d87-r4",
        title:
          "How to Write a Case Study for Your Portfolio — Smashing Magazine",
        url: "https://www.smashingmagazine.com/2015/02/how-to-write-a-case-study/",
        type: "blog",
      },
      {
        id: "d87-r5",
        title: "Shopify Partner Academy — Certification Courses",
        url: "https://www.shopify.com/partners/academy",
        type: "reference",
      },
      {
        id: "d87-r6",
        title: "BuiltWith — Discover Shopify-Powered Stores",
        url: "https://builtwith.com/",
        type: "tool",
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
    resources: [
      {
        id: "d88-r1",
        title: "Shopify Analytics & Reports — Help Center Overview",
        url: "https://help.shopify.com/en/manual/reports-and-analytics",
        type: "docs",
      },
      {
        id: "d88-r2",
        title: "Shopify Plus — Customer Success Stories",
        url: "https://www.shopify.com/plus/customers",
        type: "reference",
      },
      {
        id: "d88-r3",
        title: "Customer Retention Strategies — Shopify Blog",
        url: "https://www.shopify.com/blog/customer-retention",
        type: "blog",
      },
      {
        id: "d88-r4",
        title: "Best Shopify Stores for Design & Analytics Inspiration",
        url: "https://www.shopify.com/blog/best-shopify-stores",
        type: "blog",
      },
      {
        id: "d88-r5",
        title: "Shopify Tag on dev.to — Developer Articles & Case Studies",
        url: "https://dev.to/t/shopify",
        type: "community",
      },
      {
        id: "d88-r6",
        title: "r/shopify — Shopify Developer Community on Reddit",
        url: "https://www.reddit.com/r/shopify/",
        type: "community",
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
      {
        id: "d89-v5",
        title: "How to Start Freelancing as a Beginner Shopify Developer",
        youtubeId: "29WA73Ilq4g",
        duration: "15:00",
      },
      {
        id: "d89-v6",
        title: "Best Freelancing Platforms for Shopify Developers in 2026",
        youtubeId: "OTGTv1Go2eM",
        duration: "12:00",
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
    resources: [
      {
        id: "d89-r1",
        title: "Shopify Theme Development — Full Documentation",
        url: "https://shopify.dev/docs/themes",
        type: "docs",
      },
      {
        id: "d89-r2",
        title: "Shopify CLI — Developer Tool Reference",
        url: "https://shopify.dev/docs/themes/tools/cli",
        type: "docs",
      },
      {
        id: "d89-r3",
        title: "Toggl Track — Time Tracking for Developer Sprints",
        url: "https://toggl.com/",
        type: "tool",
      },
      {
        id: "d89-r4",
        title: "Notion — SOPs, Sprint Tracking & Client Docs",
        url: "https://www.notion.so/",
        type: "tool",
      },
      {
        id: "d89-r5",
        title: "Getting Started with Project Scoping — Smashing Magazine",
        url: "https://www.smashingmagazine.com/2012/07/getting-started-with-project-scoping/",
        type: "blog",
      },
      {
        id: "d89-r6",
        title: "Shopify Community — Design & Developer Forum",
        url: "https://community.shopify.com/c/shopify-design/bd-p/shopify-design",
        type: "community",
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
      {
        id: "d90-v6",
        title:
          "Creating a Luxury E-Commerce Store: Shopify Hydrogen + Remix + TypeScript",
        youtubeId: "lNPZrGomQ7I",
        duration: "45:00",
      },
      {
        id: "d90-v7",
        title:
          "How to Build Custom Shopify Functions — Discounts, Delivery & Cart Validation",
        youtubeId: "8NF1DQ8KBxY",
        duration: "35:00",
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
    resources: [
      {
        id: "d90-r1",
        title: "Shopify Hydrogen — Official Documentation",
        url: "https://shopify.dev/docs/storefronts/headless/hydrogen",
        type: "docs",
      },
      {
        id: "d90-r2",
        title: "Shopify Functions API Reference",
        url: "https://shopify.dev/docs/api/functions",
        type: "docs",
      },
      {
        id: "d90-r3",
        title: "Shopify Hydrogen — Official GitHub Repository",
        url: "https://github.com/Shopify/hydrogen",
        type: "github",
      },
      {
        id: "d90-r4",
        title: "Shopify Developer Blog — Updates & Deep Dives",
        url: "https://shopify.dev/blog",
        type: "blog",
      },
      {
        id: "d90-r5",
        title: "Shopify Plus — Platform Overview & Enterprise Features",
        url: "https://help.shopify.com/en/manual/intro-to-shopify/shopify-plus",
        type: "docs",
      },
      {
        id: "d90-r6",
        title: "Headless Commerce with Shopify — Developer Overview",
        url: "https://shopify.dev/docs/storefronts/headless",
        type: "docs",
      },
    ],
  },
];
