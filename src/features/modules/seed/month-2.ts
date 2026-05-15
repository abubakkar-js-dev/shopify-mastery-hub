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
  // ============================================================
  // WEEK 5: THEME ARCHITECTURE DEEP DIVE
  // ============================================================
  {
    id: "day-31",
    moduleId: "week-5",
    title: "Day 31: CLI & Architecture Setup",
    description:
      "Connect Shopify CLI and map the full Dawn theme directory structure.",
    order: 1,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d31-v1",
        title: "Shopify CLI 3.x — Full Installation & Setup Guide",
        youtubeId: "fX7WpAAb5S8",
        duration: "15:20",
      },
      {
        id: "d31-v2",
        title: "Shopify Theme Folder Structure — Every File Explained",
        youtubeId: "kSUpDkS63tM",
        duration: "12:45",
      },
      {
        id: "d31-v3",
        title: "Shopify CLI Hot Reload — Local Dev Store Setup",
        youtubeId: "zLpOfMha7Kk",
        duration: "10:15",
      },
      {
        id: "d31-v4",
        title: "Cloning Dawn Theme from GitHub — Step by Step",
        youtubeId: "v8wR6w77464",
        duration: "08:30",
      },
      {
        id: "d31-v5",
        title: "Shopify Theme Development Environment — VS Code Setup",
        youtubeId: "bhAMaeePmsQ",
        duration: "11:00",
      },
      {
        id: "d31-v6",
        title: "Understanding Shopify Theme Architecture — Layout to Snippets",
        youtubeId: "P79K7mDPu_0",
        duration: "14:20",
      },
      {
        id: "d31-v7",
        title: "Shopify CLI — theme dev, push, pull Commands Explained",
        youtubeId: "fX7WpAAb5S8",
        duration: "09:45",
      },
    ],
    tasks: [
      {
        id: "d31-t1",
        title: "Clone Dawn theme locally via GitHub",
      },
      {
        id: "d31-t2",
        title: "Install Shopify CLI 3.x",
      },
      {
        id: "d31-t3",
        title: "Connect CLI to dev store and run hot reload",
      },
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
    description:
      "Understand how JSON templates render content_for_layout and section settings.",
    order: 2,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d32-v1",
        title: "Shopify JSON Templates — Complete Guide (2.0 Architecture)",
        youtubeId: "zLpOfMha7Kk",
        duration: "14:30",
      },
      {
        id: "d32-v2",
        title: "Understanding theme.liquid — content_for_header & layout",
        youtubeId: "P79K7mDPu_0",
        duration: "15:10",
      },
      {
        id: "d32-v3",
        title: "Shopify Sections vs Templates — What is the Difference?",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "12:00",
      },
      {
        id: "d32-v4",
        title: "How a Shopify Product Page Renders — URL to HTML",
        youtubeId: "nM4anis2odE",
        duration: "13:40",
      },
      {
        id: "d32-v5",
        title: "Shopify Theme Editor — Connecting Code to UI Controls",
        youtubeId: "kSUpDkS63tM",
        duration: "10:50",
      },
      {
        id: "d32-v6",
        title: "Dawn Theme — main-product.liquid Deep Dive",
        youtubeId: "v8wR6w77464",
        duration: "16:00",
      },
    ],
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
    description: "Master render vs include, paginate, and custom form tags.",
    order: 3,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d33-v1",
        title: "Shopify Liquid — render vs include (Scoped vs Global)",
        youtubeId: "P79K7mDPu_0",
        duration: "12:50",
      },
      {
        id: "d33-v2",
        title: "Shopify Liquid Pagination — paginate Tag Full Guide",
        youtubeId: "fX7WpAAb5S8",
        duration: "18:15",
      },
      {
        id: "d33-v3",
        title: "Shopify Liquid — {% form %} Tag for Product & Contact Forms",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "11:30",
      },
      {
        id: "d33-v4",
        title: "Shopify Liquid — {% liquid %} Multi-line Logic Tag",
        youtubeId: "9UfGdd9blTE",
        duration: "09:20",
      },
      {
        id: "d33-v5",
        title: "forloop Object — index, first, last Properties",
        youtubeId: "wF6CpVcUfoM",
        duration: "07:45",
      },
      {
        id: "d33-v6",
        title: "asset_url Filter — Linking CSS and JS in Shopify Themes",
        youtubeId: "kSUpDkS63tM",
        duration: "08:10",
      },
      {
        id: "d33-v7",
        title: "section.id — Dynamic CSS Scoping Per Section in Shopify",
        youtubeId: "zLpOfMha7Kk",
        duration: "10:00",
      },
    ],
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
    description:
      "Build a fully customizable Testimonials Slider with complex schema settings.",
    order: 4,
    difficulty: "Advanced",
    videos: [
      {
        id: "d34-v1",
        title: "Shopify Section Schema — All Setting Types Explained",
        youtubeId: "kSUpDkS63tM",
        duration: "22:40",
      },
      {
        id: "d34-v2",
        title: "Shopify Schema Blocks — Repeatable Dynamic Content",
        youtubeId: "zLpOfMha7Kk",
        duration: "18:10",
      },
      {
        id: "d34-v3",
        title: "Build a Custom Shopify Section from Scratch — Full Tutorial",
        youtubeId: "P79K7mDPu_0",
        duration: "20:00",
      },
      {
        id: "d34-v4",
        title: "Shopify Schema Presets — Default Section Configuration",
        youtubeId: "v8wR6w77464",
        duration: "09:30",
      },
      {
        id: "d34-v5",
        title: "image_picker, color, range, select — Schema Settings in Action",
        youtubeId: "fX7WpAAb5S8",
        duration: "14:00",
      },
      {
        id: "d34-v6",
        title: "Testimonials Section Build — Schema + Liquid Loop",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "16:30",
      },
    ],
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
    description: "Leverage settings_schema.json for global theme variables.",
    order: 5,
    difficulty: "Advanced",
    videos: [
      {
        id: "d35-v1",
        title: "settings_schema.json — Global Theme Settings Complete Guide",
        youtubeId: "v8wR6w77464",
        duration: "15:20",
      },
      {
        id: "d35-v2",
        title: "Global Color & Typography Settings in Shopify Themes",
        youtubeId: "P79K7mDPu_0",
        duration: "12:15",
      },
      {
        id: "d35-v3",
        title: "Referencing settings.variable in CSS — Theme Settings to Code",
        youtubeId: "kSUpDkS63tM",
        duration: "10:40",
      },
      {
        id: "d35-v4",
        title: "Building Image + Text Feature Section with Layout Toggle",
        youtubeId: "zLpOfMha7Kk",
        duration: "14:00",
      },
      {
        id: "d35-v5",
        title: "Shopify Premium Theme Analysis — Prestige & Symmetry",
        youtubeId: "fX7WpAAb5S8",
        duration: "13:30",
      },
      {
        id: "d35-v6",
        title: "settings_data.json — How Saved Theme Settings Are Stored",
        youtubeId: "v8wR6w77464",
        duration: "08:20",
      },
    ],
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
    description:
      "Build an interactive FAQ system using schema blocks and vanilla JS.",
    order: 6,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d36-v1",
        title: "Build a Shopify FAQ Accordion Section — Schema + Liquid + JS",
        youtubeId: "kSUpDkS63tM",
        duration: "18:00",
      },
      {
        id: "d36-v2",
        title: "CSS Accordion Transitions — Smooth Expand Collapse Animation",
        youtubeId: "P79K7mDPu_0",
        duration: "10:30",
      },
      {
        id: "d36-v3",
        title: "Pushing Shopify Theme to GitHub — Full Git Workflow",
        youtubeId: "v8wR6w77464",
        duration: "12:00",
      },
      {
        id: "d36-v4",
        title: "Writing a Shopify Developer Dev Log in Notion",
        youtubeId: "fX7WpAAb5S8",
        duration: "09:15",
      },
    ],
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
    description: "Audit premium themes and refactor your custom sections.",
    order: 7,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d37-t1",
        title: "QA all 3 custom sections and refactor Liquid code",
      },
      {
        id: "d37-t2",
        title: "Analyze code patterns in trial premium themes",
      },
      {
        id: "d37-t3",
        title: "Update portfolio and LinkedIn headline with developer skills",
      },
      {
        id: "d37-t4",
        title: "Apply to theme customization gigs on Upwork",
      },
    ],
  },

  // ============================================================
  // WEEK 6: CUSTOM THEME (SETUP & CORE)
  // ============================================================
  {
    id: "day-38",
    moduleId: "week-6",
    title: "Day 38: Theme Scaffold & Global Shell",
    description:
      "Initialize a clean slate theme and build the core theme.liquid skeleton.",
    order: 1,
    difficulty: "Advanced",
    videos: [
      {
        id: "d38-v1",
        title: "Shopify Theme Init — Creating a Blank Theme from CLI",
        youtubeId: "fX7WpAAb5S8",
        duration: "18:50",
      },
      {
        id: "d38-v2",
        title: "Building theme.liquid from Scratch — Head, Body, Layout",
        youtubeId: "zLpOfMha7Kk",
        duration: "14:20",
      },
      {
        id: "d38-v3",
        title: "settings_schema.json — Color, Typography & Layout Groups",
        youtubeId: "kSUpDkS63tM",
        duration: "12:00",
      },
      {
        id: "d38-v4",
        title: "Shopify Theme from Scratch — Full Project Architecture",
        youtubeId: "P79K7mDPu_0",
        duration: "16:30",
      },
      {
        id: "d38-v5",
        title: "GitHub Commit Workflow for Shopify Theme Developers",
        youtubeId: "v8wR6w77464",
        duration: "10:00",
      },
    ],
    tasks: [
      {
        id: "d38-t1",
        title: "Initialize blank theme via shopify theme init",
      },
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
    description:
      "Build a dynamic header with mega-menu support and sticky logic.",
    order: 2,
    difficulty: "Advanced",
    videos: [
      {
        id: "d39-v1",
        title: "Build a Shopify Header Section from Scratch — Schema + Liquid",
        youtubeId: "kSUpDkS63tM",
        duration: "22:00",
      },
      {
        id: "d39-v2",
        title: "Sticky Header in Shopify — CSS + JavaScript Implementation",
        youtubeId: "zLpOfMha7Kk",
        duration: "12:30",
      },
      {
        id: "d39-v3",
        title: "Cart Icon with Item Count Badge — Liquid + AJAX",
        youtubeId: "P79K7mDPu_0",
        duration: "10:15",
      },
      {
        id: "d39-v4",
        title: "Shopify Mobile Hamburger Menu — Slide-Out Drawer Build",
        youtubeId: "fX7WpAAb5S8",
        duration: "15:00",
      },
      {
        id: "d39-v5",
        title: "Footer Section with Dynamic Column Blocks — Full Build",
        youtubeId: "v8wR6w77464",
        duration: "13:20",
      },
      {
        id: "d39-v6",
        title: "Shopify Navigation — link_list Object & Menu Loop",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "09:40",
      },
    ],
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
    description:
      "Build Hero Banners and Value Proposition bars with overlay logic.",
    order: 3,
    difficulty: "Advanced",
    videos: [
      {
        id: "d40-v1",
        title: "Shopify Hero Banner Section — Background Image + Overlay",
        youtubeId: "kSUpDkS63tM",
        duration: "16:00",
      },
      {
        id: "d40-v2",
        title: "Featured Collections Section — Schema + Liquid Grid",
        youtubeId: "P79K7mDPu_0",
        duration: "14:30",
      },
      {
        id: "d40-v3",
        title: "Value Proposition Icon Strip — Horizontal Section Build",
        youtubeId: "zLpOfMha7Kk",
        duration: "11:00",
      },
      {
        id: "d40-v4",
        title: "Shopify index.json — Adding Sections in Correct Order",
        youtubeId: "fX7WpAAb5S8",
        duration: "09:20",
      },
      {
        id: "d40-v5",
        title: "Testing Shopify Theme Editor — Confirming All Settings Work",
        youtubeId: "v8wR6w77464",
        duration: "08:45",
      },
    ],
    tasks: [
      {
        id: "d40-t1",
        title: "Build Hero Banner with background video/image schema",
      },
      {
        id: "d40-t2",
        title: "Create horizontal Value Prop icon strip section",
      },
      {
        id: "d40-t3",
        title: "Implement Featured Collections grid section",
      },
    ],
  },

  {
    id: "day-41",
    moduleId: "week-6",
    title: "Day 41: Advanced Product Templating",
    description:
      "Handle complex variant states, price logic, and breadcrumb trails.",
    order: 4,
    difficulty: "Advanced",
    videos: [
      {
        id: "d41-v1",
        title: "Shopify Product Page from Scratch — Liquid + Schema Build",
        youtubeId: "nM4anis2odE",
        duration: "24:00",
      },
      {
        id: "d41-v2",
        title: "Shopify Product Object — All Properties & Liquid Access",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "14:00",
      },
      {
        id: "d41-v3",
        title: "Handling Sold Out & Single Variant Products in Liquid",
        youtubeId: "Af8F29zSAn8",
        duration: "10:30",
      },
      {
        id: "d41-v4",
        title: "Shopify Product Image Gallery — Main Image + Thumbnail Strip",
        youtubeId: "kSUpDkS63tM",
        duration: "13:00",
      },
      {
        id: "d41-v5",
        title: "Breadcrumb Trail in Shopify — Collection to Product",
        youtubeId: "P79K7mDPu_0",
        duration: "08:20",
      },
      {
        id: "d41-v6",
        title: "Sale Price Logic in Liquid — compare_at_price vs price",
        youtubeId: "zLpOfMha7Kk",
        duration: "07:50",
      },
    ],
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
    description:
      "Create reusable product card snippets with hover states and badges.",
    order: 5,
    difficulty: "Advanced",
    videos: [
      {
        id: "d42-v1",
        title: "Shopify Collection Page — Schema, Pagination & Sorting",
        youtubeId: "6eUFDtg_V9k",
        duration: "20:00",
      },
      {
        id: "d42-v2",
        title: "Building a Reusable Product Card Snippet in Liquid",
        youtubeId: "Kw-FhRUoSLM",
        duration: "15:00",
      },
      {
        id: "d42-v3",
        title: "Shopify Pagination — default_pagination & Custom Links",
        youtubeId: "fX7WpAAb5S8",
        duration: "11:00",
      },
      {
        id: "d42-v4",
        title: "Sale Badge Logic — compare_at_price Liquid Conditional",
        youtubeId: "QkE1JklzMjw",
        duration: "08:30",
      },
      {
        id: "d42-v5",
        title: "Collection Sort Options — sort_options Loop in Liquid",
        youtubeId: "kSUpDkS63tM",
        duration: "09:15",
      },
      {
        id: "d42-v6",
        title: "GitHub — Committing Core Templates with Proper Messages",
        youtubeId: "v8wR6w77464",
        duration: "07:00",
      },
    ],
    tasks: [
      {
        id: "d42-t1",
        title: "Build main-collection.liquid with per-row settings",
      },
      {
        id: "d42-t2",
        title: "Create snippets/product-card.liquid",
      },
      {
        id: "d42-t3",
        title: "Implement pagination.liquid reusable component",
      },
    ],
  },

  {
    id: "day-43",
    moduleId: "week-6",
    title: "Day 43: [Assignment] Logic Audit",
    description:
      "Stress test your custom templates and compare architecture with Dawn.",
    order: 6,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d43-t1",
        title: "Fix edge cases (no image, long titles, empty collections)",
      },
      {
        id: "d43-t2",
        title: "Refactor reusable snippets to reduce code repetition",
      },
      {
        id: "d43-t3",
        title: "Apply for custom Shopify theme build contracts",
      },
    ],
  },

  // ============================================================
  // WEEK 7: CUSTOM THEME (AJAX & ADVANCED)
  // ============================================================
  {
    id: "day-44",
    moduleId: "week-7",
    title: "Day 44: AJAX Cart Drawer",
    description:
      "Integrate Shopify AJAX API to update quantities without page reloads.",
    order: 1,
    difficulty: "Advanced",
    videos: [
      {
        id: "d44-v1",
        title: "Shopify AJAX Cart API — add.js, change.js, update.js",
        youtubeId: "pdQCyUWFIcY",
        duration: "22:15",
      },
      {
        id: "d44-v2",
        title: "Building a Cart Drawer from Scratch — Liquid + JS",
        youtubeId: "pde0Lzf0A_w",
        duration: "20:00",
      },
      {
        id: "d44-v3",
        title: "Cart Line Items Loop — Render Items with Liquid",
        youtubeId: "kSUpDkS63tM",
        duration: "12:00",
      },
      {
        id: "d44-v4",
        title: "Cart Item Count Badge — Real-Time Update Without Reload",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:30",
      },
      {
        id: "d44-v5",
        title: "Empty Cart State & CTA — UX Best Practices",
        youtubeId: "P79K7mDPu_0",
        duration: "07:45",
      },
      {
        id: "d44-v6",
        title: "Shopify Cart Drawer Open/Close Logic — JavaScript Events",
        youtubeId: "3WuI5_T3S-A",
        duration: "11:00",
      },
    ],
    tasks: [
      {
        id: "d44-t1",
        title: "Render cart items loop and subtotal logic",
      },
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
    description:
      "Build a real-time search dropdown using the /search/suggest.json API.",
    order: 2,
    difficulty: "Advanced",
    videos: [
      {
        id: "d45-v1",
        title: "Shopify Predictive Search API — /search/suggest.json",
        youtubeId: "fX7WpAAb5S8",
        duration: "18:00",
      },
      {
        id: "d45-v2",
        title: "Building Search Dropdown with Debounce — Vanilla JS",
        youtubeId: "kSUpDkS63tM",
        duration: "14:30",
      },
      {
        id: "d45-v3",
        title: "Rendering Product Images in Search Results Dropdown",
        youtubeId: "P79K7mDPu_0",
        duration: "10:20",
      },
      {
        id: "d45-v4",
        title: "Keyboard Navigation for Search — up/down/enter Events",
        youtubeId: "zLpOfMha7Kk",
        duration: "09:00",
      },
      {
        id: "d45-v5",
        title: "Shopify Search Template — main-search.liquid Build",
        youtubeId: "v8wR6w77464",
        duration: "13:00",
      },
      {
        id: "d45-v6",
        title: "Search & Discovery App — Integration with Custom Themes",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "11:40",
      },
    ],
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
    description:
      "Build robust blog and article templates for DTC content strategy.",
    order: 3,
    difficulty: "Intermediate",
    videos: [
      {
        id: "d46-v1",
        title: "Shopify Blog Template — Article Grid with Pagination",
        youtubeId: "kSUpDkS63tM",
        duration: "15:00",
      },
      {
        id: "d46-v2",
        title: "Shopify Article Template — Full Content Page Build",
        youtubeId: "P79K7mDPu_0",
        duration: "13:30",
      },
      {
        id: "d46-v3",
        title: "Related Articles Logic — Matching by Tag in Liquid",
        youtubeId: "fX7WpAAb5S8",
        duration: "10:00",
      },
      {
        id: "d46-v4",
        title: "Shopify Comments Form — new_comment Form Tag",
        youtubeId: "zLpOfMha7Kk",
        duration: "08:20",
      },
      {
        id: "d46-v5",
        title: "Shopify Page Template — metafield-Enhanced Content Pages",
        youtubeId: "v8wR6w77464",
        duration: "11:00",
      },
      {
        id: "d46-v6",
        title: "DTC Content Strategy — Blog as a Growth Channel",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "09:45",
      },
    ],
    tasks: [
      {
        id: "d46-t1",
        title: "Build Blog grid template with pagination",
      },
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
    description:
      "Connect metafields to theme editor schema for dynamic sources.",
    order: 4,
    difficulty: "Advanced",
    videos: [
      {
        id: "d47-v1",
        title: "Shopify Metafields — Namespaces, Keys & Types Explained",
        youtubeId: "MEY5xhVk0Nk",
        duration: "14:00",
      },
      {
        id: "d47-v2",
        title: "Accessing Metafields in Liquid — Complete Reference",
        youtubeId: "hQogJH346VI",
        duration: "12:30",
      },
      {
        id: "d47-v3",
        title: "Size Guide Modal — metafield Image Trigger in Shopify",
        youtubeId: "kSUpDkS63tM",
        duration: "13:00",
      },
      {
        id: "d47-v4",
        title: "Product Highlight Bullets from Metafields — Liquid Guard",
        youtubeId: "P79K7mDPu_0",
        duration: "09:20",
      },
      {
        id: "d47-v5",
        title: "Connecting Metafields to Theme Editor — metafield Setting Type",
        youtubeId: "zLpOfMha7Kk",
        duration: "11:15",
      },
      {
        id: "d47-v6",
        title: "Collection Metafields — Banner Subtitle Dynamic Source",
        youtubeId: "fX7WpAAb5S8",
        duration: "08:50",
      },
    ],
    tasks: [
      {
        id: "d47-t1",
        title: "Define and access product metafields in Liquid",
      },
      {
        id: "d47-t2",
        title: "Implement highlight bullets and size guide modal",
      },
      {
        id: "d47-t3",
        title: "Connect metafields to Theme Editor via schema",
      },
    ],
  },

  {
    id: "day-48",
    moduleId: "week-7",
    title: "Day 48: Performance & Theme Check",
    description:
      "Audit for accessibility and performance. Run automated Theme Check.",
    order: 5,
    difficulty: "Advanced",
    videos: [
      {
        id: "d48-v1",
        title: "Shopify Theme Check — Running Automated Audits via CLI",
        youtubeId: "fX7WpAAb5S8",
        duration: "12:00",
      },
      {
        id: "d48-v2",
        title: "Lazy Loading Images in Shopify — image_url + loading=lazy",
        youtubeId: "ViZIMBG2BAo",
        duration: "10:30",
      },
      {
        id: "d48-v3",
        title: "Responsive Images in Shopify — widths, sizes & image_tag",
        youtubeId: "lv1CFYklxqk",
        duration: "13:00",
      },
      {
        id: "d48-v4",
        title: "Deferring JavaScript in Shopify Themes — Performance Wins",
        youtubeId: "52MiD-EMU9E",
        duration: "09:45",
      },
      {
        id: "d48-v5",
        title: "Accessibility in Shopify — alt, aria-label, Focus States",
        youtubeId: "kSUpDkS63tM",
        duration: "11:30",
      },
      {
        id: "d48-v6",
        title: "Google PageSpeed — Hitting 80+ Mobile on Shopify Themes",
        youtubeId: "MBFmHMRnJxg",
        duration: "14:00",
      },
    ],
    tasks: [
      {
        id: "d48-t1",
        title: 'Optimize images via image_url and loading="lazy"',
      },
      {
        id: "d48-t2",
        title: "Run shopify theme check and resolve all errors",
      },
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
    description:
      "Screen record your final theme and prepare client-facing documentation.",
    order: 6,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d49-t1",
        title: "Record a Loom walk-through of the custom theme",
      },
      {
        id: "d49-t2",
        title: "Write dev README and client-facing setup guide",
      },
      {
        id: "d49-t3",
        title: "Tag release v1.0.0 in GitHub repo",
      },
    ],
  },

  {
    id: "day-50",
    moduleId: "week-7",
    title: "Day 50: [Assignment] Week 7 Review",
    description:
      "Finalize the project case study and update your freelancer profiles.",
    order: 7,
    difficulty: "Intermediate",
    videos: [],
    tasks: [
      {
        id: "d50-t1",
        title: "Publish Project #7 case study to portfolio",
      },
      {
        id: "d50-t2",
        title: 'Update Upwork/Fiverr with "Custom Theme" specialty',
      },
      {
        id: "d50-t3",
        title: "Post build thread on LinkedIn/X",
      },
    ],
  },

  // ============================================================
  // WEEK 8: ADVANCED THEME & POSITIONING
  // ============================================================
  {
    id: "day-51",
    moduleId: "week-8",
    title: "Day 51: Section Groups & Overlays",
    description:
      "Implement modern Shopify section groups for header/footer and overlays.",
    order: 1,
    difficulty: "Advanced",
    videos: [
      {
        id: "d51-v1",
        title: "Shopify Section Groups — header, footer, overlay Groups",
        youtubeId: "kSUpDkS63tM",
        duration: "16:00",
      },
      {
        id: "d51-v2",
        title: "Moving Header & Footer Into Section Groups — Full Guide",
        youtubeId: "P79K7mDPu_0",
        duration: "13:30",
      },
      {
        id: "d51-v3",
        title: "Dynamic Sources in Shopify Theme Editor — Complete Overview",
        youtubeId: "zLpOfMha7Kk",
        duration: "12:00",
      },
      {
        id: "d51-v4",
        title: "Initializing Project #8 — High-End DTC Editorial Theme",
        youtubeId: "fX7WpAAb5S8",
        duration: "10:20",
      },
      {
        id: "d51-v5",
        title: "Shopify 2.0 Advanced Architecture — Section Groups Deep Dive",
        youtubeId: "v8wR6w77464",
        duration: "14:45",
      },
    ],
    tasks: [
      {
        id: "d51-t1",
        title: "Implement header and footer section groups",
      },
      {
        id: "d51-t2",
        title: "Connect dynamic sources to theme settings",
      },
      {
        id: "d51-t3",
        title: "Move header/footer into groups in theme.liquid",
      },
    ],
  },

  {
    id: "day-52",
    moduleId: "week-8",
    title: "Day 52: Advanced Editorial Sections",
    description:
      "Build Video Heroes and Lookbook Hotspots with absolute positioning.",
    order: 2,
    difficulty: "Advanced",
    videos: [
      {
        id: "d52-v1",
        title: "Full-Screen Video Hero — YouTube/Vimeo + Fallback Image",
        youtubeId: "kSUpDkS63tM",
        duration: "18:00",
      },
      {
        id: "d52-v2",
        title: "Editorial Lookbook with Product Hotspots — CSS Absolute Pins",
        youtubeId: "P79K7mDPu_0",
        duration: "16:30",
      },
      {
        id: "d52-v3",
        title: "CSS Marquee / Ticker Animation — Infinite Scroll Strip",
        youtubeId: "zLpOfMha7Kk",
        duration: "10:00",
      },
      {
        id: "d52-v4",
        title: "Schema blocks for Lookbook Hotspot — X/Y Position Settings",
        youtubeId: "fX7WpAAb5S8",
        duration: "12:15",
      },
      {
        id: "d52-v5",
        title: "Video Tag vs Iframe — Hosted vs YouTube in Shopify",
        youtubeId: "v8wR6w77464",
        duration: "09:30",
      },
    ],
    tasks: [
      {
        id: "d52-t1",
        title: "Build Full-screen Video Hero schema and Liquid",
      },
      {
        id: "d52-t2",
        title: "Implement Editorial Lookbook with hotspot pins",
      },
      {
        id: "d52-t3",
        title: "Create CSS-animated marquee/ticker section",
      },
    ],
  },

  {
    id: "day-53",
    moduleId: "week-8",
    title: "Day 53: Recommendation & Viewed APIs",
    description:
      'Implement "Recently Viewed" and "Complementary Products" via AJAX.',
    order: 3,
    difficulty: "Advanced",
    videos: [
      {
        id: "d53-v1",
        title:
          "Shopify Product Recommendations API — /recommendations/products",
        youtubeId: "Kw-FhRUoSLM",
        duration: "16:00",
      },
      {
        id: "d53-v2",
        title: "Recently Viewed Products — localStorage + Fetch Approach",
        youtubeId: "q1bJikwMQoA",
        duration: "14:00",
      },
      {
        id: "d53-v3",
        title: "Sticky Product Info Column — CSS position sticky",
        youtubeId: "kSUpDkS63tM",
        duration: "10:30",
      },
      {
        id: "d53-v4",
        title: "Schema-Driven Product Tabs — Description, Shipping, Reviews",
        youtubeId: "P79K7mDPu_0",
        duration: "12:00",
      },
      {
        id: "d53-v5",
        title: "Rich Media Gallery — image + video Mixed with product.media",
        youtubeId: "zLpOfMha7Kk",
        duration: "13:30",
      },
      {
        id: "d53-v6",
        title: "Color Swatch Variant Selector — Custom Build in Liquid",
        youtubeId: "vk8KUZN0hrI",
        duration: "14:00",
      },
    ],
    tasks: [
      {
        id: "d53-t1",
        title: "Build Complementary Products using Discovery API",
      },
      {
        id: "d53-t2",
        title: "Implement Recently Viewed logic via localStorage",
      },
      {
        id: "d53-t3",
        title: "Add schema-driven Product Tabs component",
      },
    ],
  },

  {
    id: "day-54",
    moduleId: "week-8",
    title: "Day 54: Markets & Localization Switchers",
    description:
      "Build cross-border currency and language switchers for global stores.",
    order: 4,
    difficulty: "Advanced",
    videos: [
      {
        id: "d54-v1",
        title: "Shopify Markets — Multi-Currency & Multi-Language Setup",
        youtubeId: "kSUpDkS63tM",
        duration: "15:00",
      },
      {
        id: "d54-v2",
        title: "localization Object — available_countries & languages",
        youtubeId: "P79K7mDPu_0",
        duration: "11:30",
      },
      {
        id: "d54-v3",
        title: 'Currency Switcher via {% form "localization" %} — Full Build',
        youtubeId: "zLpOfMha7Kk",
        duration: "13:00",
      },
      {
        id: "d54-v4",
        title: "Custom Template Variants — product.landing, page.faq",
        youtubeId: "fX7WpAAb5S8",
        duration: "12:20",
      },
      {
        id: "d54-v5",
        title: "Shopify Template Selector — Switching in Admin",
        youtubeId: "v8wR6w77464",
        duration: "08:45",
      },
      {
        id: "d54-v6",
        title: "Featured Collection Template — Editorial Layout Variant",
        youtubeId: "Oc9zCbsN5Q4",
        duration: "10:10",
      },
    ],
    tasks: [
      {
        id: "d54-t1",
        title: "Build Custom Template Variants (Landing, FAQ)",
      },
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
    description: "Optimize high-end theme for PageSpeed and Accessibility.",
    order: 5,
    difficulty: "Advanced",
    videos: [
      {
        id: "d55-v1",
        title: "Shopify Theme Performance — Lazy Load, Defer JS, Critical CSS",
        youtubeId: "52MiD-EMU9E",
        duration: "16:00",
      },
      {
        id: "d55-v2",
        title: "Writing a Shopify Theme README — Developer Documentation",
        youtubeId: "fX7WpAAb5S8",
        duration: "11:00",
      },
      {
        id: "d55-v3",
        title: "Client-Facing Theme Guide — Section by Section Walkthrough",
        youtubeId: "kSUpDkS63tM",
        duration: "13:30",
      },
      {
        id: "d55-v4",
        title: "Font Loading Optimization in Shopify Themes",
        youtubeId: "lv1CFYklxqk",
        duration: "09:20",
      },
      {
        id: "d55-v5",
        title: "Shopify Theme Check — Zero Errors Standard",
        youtubeId: "P79K7mDPu_0",
        duration: "10:00",
      },
    ],
    tasks: [
      {
        id: "d55-t1",
        title: "Optimize for PageSpeed (lazy load, defer JS)",
      },
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
    description:
      "Update your portfolio to target high-value clients and Plus merchants.",
    order: 6,
    difficulty: "Advanced",
    videos: [],
    tasks: [
      {
        id: "d56-t1",
        title: "Record a Loom walkthrough of Project #8 features",
      },
      {
        id: "d56-t2",
        title: "Publish advanced DTC theme case study",
      },
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
    description:
      "Finalize Project #8 and review your progress with advanced patterns.",
    order: 7,
    difficulty: "Advanced",
    videos: [],
    tasks: [
      {
        id: "d57-t1",
        title: "Analyze 3 stores with advanced theme features",
      },
      {
        id: "d57-t2",
        title: "Update gig descriptions and Upwork profile",
      },
      {
        id: "d57-t3",
        title: "Apply for 10 premium tier development gigs",
      },
    ],
  },

  {
    id: "day-58",
    moduleId: "week-8",
    title: "Day 58: Theme Performance Polishing",
    description:
      "Deep dive into optimizing Liquid loops and reducing script weight.",
    order: 8,
    difficulty: "Advanced",
    videos: [
      {
        id: "d58-v1",
        title: "Refactoring Non-Performant Liquid — Loop & Logic Optimization",
        youtubeId: "kSUpDkS63tM",
        duration: "14:00",
      },
      {
        id: "d58-v2",
        title: "Critical CSS — Inlining Above-the-Fold Styles in Shopify",
        youtubeId: "P79K7mDPu_0",
        duration: "11:30",
      },
      {
        id: "d58-v3",
        title: "Font Swap & Preload — Eliminating Font Flash in Shopify",
        youtubeId: "lv1CFYklxqk",
        duration: "09:00",
      },
      {
        id: "d58-v4",
        title: "Removing Unused App Scripts — Shopify Performance Audit",
        youtubeId: "52MiD-EMU9E",
        duration: "10:45",
      },
    ],
    tasks: [
      {
        id: "d58-t1",
        title: "Refactor any non-performant Liquid snippets",
      },
      {
        id: "d58-t2",
        title: "Optimize font loading and critical CSS paths",
      },
    ],
  },

  {
    id: "day-59",
    moduleId: "week-8",
    title: "Day 59: Final Theme QA",
    description:
      "Cross-browser and cross-device testing to ensure perfect rendering.",
    order: 9,
    difficulty: "Advanced",
    videos: [
      {
        id: "d59-v1",
        title: "Cross-Browser Testing for Shopify Themes — Full Checklist",
        youtubeId: "fX7WpAAb5S8",
        duration: "12:00",
      },
      {
        id: "d59-v2",
        title: "Cart & Checkout Flow QA — Mobile + Desktop Testing",
        youtubeId: "WofBv_4tmdg",
        duration: "10:30",
      },
      {
        id: "d59-v3",
        title: "Visual Regression Testing in Shopify — Browser DevTools",
        youtubeId: "kSUpDkS63tM",
        duration: "09:15",
      },
    ],
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
    description:
      "Final theme audit and preparation for Phase 3: Advanced Shopify Systems.",
    order: 10,
    difficulty: "Advanced",
    videos: [],
    tasks: [
      {
        id: "d60-t1",
        title: "Verify both custom themes on GitHub",
      },
      {
        id: "d60-t2",
        title: "Finalize Case Studies for all Phase 2 projects",
      },
      {
        id: "d60-t3",
        title: "Post Phase 2 Journey progress on LinkedIn/X",
      },
    ],
  },
];
