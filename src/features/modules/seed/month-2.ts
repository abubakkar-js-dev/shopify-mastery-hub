import { Lesson, Module } from "../../../types";

export const MONTH_2_MODULES: Module[] = [
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
];

export const MONTH_2_LESSONS: Lesson[] = [
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
];
