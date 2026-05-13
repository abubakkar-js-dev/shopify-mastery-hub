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
        title: "Analyze trust placements in 3 premium stores",
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
        id: "day-85-t1",
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
