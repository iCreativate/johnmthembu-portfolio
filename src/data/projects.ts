import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    slug: "icreativate-platform",
    title: "iCreativate",
    category: ["branding", "web", "digital"],
    year: "2024",
    client: "iCreativate",
    role: "Creative Director & Lead Designer",
    description:
      "Brand identity and digital platform for iCreativate — a design and technology studio spanning product design, AI engineering, full-stack builds, and digital brand systems.",
    thumbnail: "/images/projects/icreativate-platform/thumbnail.png?v=16",
    heroImage: "/images/projects/icreativate-platform/hero.png?v=16",
    gallery: [
      "/images/projects/icreativate-platform/gallery-01.png?v=16",
      "/images/projects/icreativate-platform/gallery-02.png?v=16",
      "/images/projects/icreativate-platform/gallery-03.png?v=16",
    ],
    tags: ["Brand Identity", "Web Design", "Creative Direction"],
    featured: true,
    layout: "editorial",
    confirmedClient: true,
    link: "https://icreativate.co.za",
    caseStudy: [
      {
        id: "intro",
        title: "Project Introduction",
        content:
          "iCreativate needed a digital presence that reflected the calibre of a design and technology studio — not a template portfolio, but a considered brand experience that could hold product design, AI engineering, and creative marketing under one voice.",
      },
      {
        id: "client",
        title: "Client / Company",
        content: "iCreativate — creative marketing and technology studio at icreativate.co.za.",
      },
      { id: "year", title: "Year", content: "2024" },
      {
        id: "role",
        title: "Role",
        content: "Creative Director, Lead Designer, Brand Strategist",
      },
      {
        id: "challenge",
        title: "Challenge",
        content:
          "Balance creative expression with clarity. The platform had to showcase work across disciplines — branding, digital campaigns, product interfaces, and AI-powered builds — while maintaining a singular, premium voice that felt intentional rather than assembled.",
      },
      {
        id: "thinking",
        title: "Thinking / Strategy",
        content:
          "Position iCreativate as a design and technology studio with editorial discipline. Audience: brand leads, SMEs, and founders scanning for craft and technical delivery. Strategy: bold hierarchy, clear service pathways, and a site that converts enquiry while still feeling crafted.",
      },
      {
        id: "process",
        title: "Process",
        content:
          "Discovery mapped services, portfolio, and pricing. Moodboards locked the visual language. Wireframes defined a content-rich IA. Design iterations refined spacing, type scale, and section templates before build and launch across web and social assets.",
      },
      {
        id: "ux",
        title: "UX / Wireframes",
        content:
          "Information architecture for a studio platform — homepage narrative, about, services, portfolio, pricing, and contact with clear paths from overview to enquiry.",
        images: ["/images/projects/icreativate-platform/gallery-01.png?v=16"],
      },
      {
        id: "visual",
        title: "Visual Design",
        content:
          "Dark, high-contrast studio aesthetic with blue accent energy, numbered navigation, and image-forward compositions that scale from site to social and decks.",
        images: ["/images/projects/icreativate-platform/gallery-02.png?v=16"],
      },
      {
        id: "final",
        title: "Final Experience",
        content:
          "A live studio site at icreativate.co.za — brand, services, portfolio, and contact in one cohesive system.",
        images: ["/images/projects/icreativate-platform/hero.png?v=16"],
      },
      {
        id: "screens",
        title: "Screens / Mockups",
        content:
          "Homepage, about, services, and portfolio pages captured from the live iCreativate platform.",
        images: ["/images/projects/icreativate-platform/gallery-03.png?v=16"],
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "Delivered a launch-ready brand and digital platform that presents iCreativate as a premium design and technology studio — clearer positioning, reusable templates, and a system ready for ongoing portfolio publishing.",
      },
    ],
  },
  {
    id: "02",
    slug: "propready-platform",
    title: "Propready",
    category: ["product", "ux-ui", "web"],
    year: "2024",
    client: "Propready",
    role: "Product Designer & Co-builder",
    description:
      "South Africa’s intelligent property platform — immersive buyer education, bond calculators, AI guidance, and trusted professional matching for people learning to buy, sell, and invest.",
    thumbnail: "/images/projects/propready-platform/thumbnail.png?v=15",
    heroImage: "/images/projects/propready-platform/hero.png?v=15",
    gallery: [
      "/images/projects/propready-platform/gallery-01.png?v=15",
      "/images/projects/propready-platform/gallery-02.png?v=15",
      "/images/projects/propready-platform/gallery-03.png?v=15",
    ],
    tags: ["Product Design", "UX/UI", "SaaS"],
    featured: true,
    layout: "two-column",
    confirmedClient: true,
    link: "https://propready.live",
    caseStudy: [
      {
        id: "intro",
        title: "Project Introduction",
        content:
          "PropReady exists because buying property in South Africa is complex — bonds, FLISP, conveyancing, and confidence gaps. The product combines immersive learning, smart calculators, and verified professionals so buyers and sellers can learn, decide, and own with clarity.",
      },
      {
        id: "client",
        title: "Client / Company",
        content: "PropReady (propready.live) — entrepreneurial PropTech venture founded and built through iCreativate.",
      },
      { id: "year", title: "Year", content: "2024" },
      {
        id: "role",
        title: "Role",
        content: "Product Designer, UX Lead, Full-Stack Co-builder, Interface Systems",
      },
      {
        id: "challenge",
        title: "Challenge",
        content:
          "Property journeys involve buyers, sellers, agents, conveyancers, and lenders — each with different mental models. The challenge was translating that operational complexity into an intuitive product: education that feels immersive, tools that feel trustworthy, and professional matching that doesn’t overwhelm first-time buyers.",
      },
      {
        id: "thinking",
        title: "Thinking / Strategy",
        content:
          "Lead with confidence, not jargon. Journey mapping split audiences into buyers, sellers, and investors, then sequenced learning hubs (Affordability Lab, Bond Basics, and more) ahead of transactional tools. Visual strategy: dark charcoal + red brand system for authority, glass UI cards for data clarity, and free guest access to reduce friction into the Learning Center.",
      },
      {
        id: "process",
        title: "Process",
        content:
          "Research interviews and journey mapping informed IA. Prototypes validated learning modules and calculator flows. Design system and React/Next.js build shipped iteratively — landing, Learning Center, bond tools, seller pathways, and AI assistant surfaces — with continuous refinement based on real usage.",
      },
      {
        id: "ux",
        title: "UX / Wireframes",
        content:
          "Dashboard architecture, learning hub navigation, onboarding for guest and registered users, and task-based flows for calculators, quizzes, and professional discovery.",
        images: ["/images/projects/propready-platform/gallery-01.png?v=15"],
      },
      {
        id: "visual",
        title: "Visual Design",
        content:
          "Clean, trustworthy interface language with purposeful data visualization — buying power metrics, confidence scores, market pulse charts, and immersive module cards with clear start-learning CTAs.",
        images: ["/images/projects/propready-platform/gallery-02.png?v=15"],
      },
      {
        id: "final",
        title: "Final Experience",
        content:
          "A live PropTech platform at propready.live — education, tools, insights, and professionals in one place, free for buyers and sellers.",
        images: ["/images/projects/propready-platform/hero.png?v=15"],
      },
      {
        id: "screens",
        title: "Screens / Mockups",
        content:
          "Homepage hero with glass UI metrics, Learning Center buyer hubs, sellers pathway, quiz entry, and get-started flows across responsive breakpoints.",
        images: ["/images/projects/propready-platform/gallery-03.png?v=15"],
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "Shipped a production PropTech platform covering learning, calculators, and professional matching. Established a scalable design system for rapid iteration across buyer, seller, and investor experiences.",
      },
    ],
  },
  {
    id: "03",
    slug: "timely-mate-app",
    title: "Timely Mate",
    category: ["mobile", "product", "ux-ui"],
    year: "2023",
    client: "Timely Mate",
    role: "Product Designer & Builder",
    description:
      "Enterprise workforce platform with facial recognition, QR attendance, GPS tracking, and analytics — built for teams that need clarity under pressure.",
    thumbnail: "/images/projects/timely-mate-app/thumbnail.png?v=15",
    heroImage: "/images/projects/timely-mate-app/hero.png?v=15",
    gallery: [
      "/images/projects/timely-mate-app/gallery-01.png?v=15",
      "/images/projects/timely-mate-app/gallery-02.png?v=15",
      "/images/projects/timely-mate-app/gallery-03.png?v=15",
    ],
    tags: ["Mobile", "iOS", "Android", "Product"],
    featured: true,
    layout: "vertical",
    confirmedClient: true,
    link: "https://timelymate.app",
    caseStudy: [
      {
        id: "intro",
        title: "Project Introduction",
        content:
          "Timely Mate is a workforce management solution designed around how teams actually clock time and collaborate — facial recognition, QR attendance, GPS tracking, reporting dashboards, and employee management in one product.",
      },
      {
        id: "client",
        title: "Client / Company",
        content: "Timely Mate — own venture (timelymate.app), built as a React Native / Expo mobile and cloud platform.",
      },
      { id: "year", title: "Year", content: "2023" },
      { id: "role", title: "Role", content: "Product Designer, UX/UI, Full-Stack Co-builder" },
      {
        id: "challenge",
        title: "Challenge",
        content:
          "Workforce tools often feel either too basic or too enterprise-heavy. Field and office teams needed reliable attendance capture, location context, and analytics — without burying managers in complexity or slowing employees at clock-in.",
      },
      {
        id: "thinking",
        title: "Thinking / Strategy",
        content:
          "Design for speed at the edge (scan, face, GPS) and clarity at the centre (dashboards, reports). Product narrative: transform team productivity with AI-driven time tracking and intelligent collaboration. Visual system: blue-to-cyan gradient energy for marketing, calm dark/light UI for operational screens.",
      },
      {
        id: "process",
        title: "Process",
        content:
          "Mapped attendance and manager workflows, prototyped clock-in and reporting flows, then built mobile clients with Expo and cloud functions for sync. Marketing site and product UI iterated together so positioning matched the shipped experience.",
      },
      {
        id: "ux",
        title: "UX / Wireframes",
        content:
          "Employee clock-in journeys, manager dashboards, attendance history, and analytics views — prioritising fewer taps for daily actions and clearer hierarchy for weekly reporting.",
        images: ["/images/projects/timely-mate-app/gallery-01.png?v=15"],
      },
      {
        id: "visual",
        title: "Visual Design",
        content:
          "Minimal mobile interface focused on task completion. Marketing surfaces use bold blue/cyan gradients; product UI emphasises readable metrics, soft cards, and clear primary actions.",
        images: ["/images/projects/timely-mate-app/gallery-02.png?v=15"],
      },
      {
        id: "final",
        title: "Final Experience",
        content:
          "A live workforce productivity platform at timelymate.app — mobile-first attendance and collaboration with cloud-backed reporting.",
        images: ["/images/projects/timely-mate-app/hero.png?v=15"],
      },
      {
        id: "screens",
        title: "Screens / Mockups",
        content:
          "Marketing homepage and features pages, plus phone mockups of the Timely Mate experience for portfolio presentation.",
        images: ["/images/projects/timely-mate-app/gallery-03.png?v=15"],
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "Shipped a production workforce product spanning attendance capture, tracking, and analytics — with a clear brand presence and a design system ready for continued feature growth.",
      },
    ],
  },
  {
    id: "04",
    slug: "tft-bible-class",
    title: "TFT Bible Class",
    category: ["product", "ux-ui", "web"],
    year: "2024",
    client: "TFT Bible Class",
    role: "Product Designer & Builder",
    description:
      "A calm, focused home for Bible study online — guided courses, reflective sessions, progress tracking, and certificates in a clear modern interface.",
    thumbnail: "/images/projects/tft-bible-class/thumbnail.png?v=16",
    heroImage: "/images/projects/tft-bible-class/hero.png?v=16",
    gallery: [
      "/images/projects/tft-bible-class/gallery-01.png?v=16",
      "/images/projects/tft-bible-class/gallery-02.png?v=16",
      "/images/projects/tft-bible-class/gallery-03.png?v=16",
    ],
    tags: ["EdTech", "Web", "Product"],
    featured: false,
    layout: "full-width",
    confirmedClient: true,
    link: "https://tftbibleclass.org/",
    caseStudy: [
      {
        id: "intro",
        title: "Project Introduction",
        content:
          "TFT Bible Class needed a digital home for guided Bible study — a place where learners could move through modules, reflect on Scripture, and track progress without the noise of a generic LMS.",
      },
      {
        id: "client",
        title: "Client / Company",
        content: "TFT Bible Class — online Bible study platform at tftbibleclass.org.",
      },
      { id: "year", title: "Year", content: "2024" },
      {
        id: "role",
        title: "Role",
        content: "Product Designer & Builder",
      },
      {
        id: "challenge",
        title: "Challenge",
        content:
          "Design a calm, trustworthy learning experience for faith study: clear course discovery, self-paced lessons, reflective sessions, and certificates — while keeping registration and progress simple across devices.",
      },
      {
        id: "thinking",
        title: "Thinking / Strategy",
        content:
          "Lead with warmth and clarity. Position the product as a gentle rhythm for deep study — choose a course, watch and reflect, capture notes, grow at a sustainable pace — rather than a dense academic portal.",
      },
      {
        id: "process",
        title: "Process",
        content:
          "Mapped learner journeys from guest browse to enroll, login, and lesson completion. Designed marketing pages, course catalogue, and auth flows, then iterated against real module content and certificate goals.",
      },
      {
        id: "ux",
        title: "UX / Wireframes",
        content:
          "Information architecture for homepage narrative, course discovery, guided modules, and account access — with clear CTAs for login, register, and explore courses.",
        images: ["/images/projects/tft-bible-class/gallery-01.png?v=16"],
      },
      {
        id: "visual",
        title: "Visual Design",
        content:
          "Soft, focused interface with scripture-led storytelling, course cards, and a modern learning UI that feels calm rather than institutional.",
        images: ["/images/projects/tft-bible-class/gallery-02.png?v=16"],
      },
      {
        id: "final",
        title: "Final Experience",
        content:
          "A live platform at tftbibleclass.org blending guided teaching, reflective sessions, and certificates in one clear product experience.",
        images: ["/images/projects/tft-bible-class/hero.png?v=16"],
      },
      {
        id: "screens",
        title: "Screens / Mockups",
        content:
          "Homepage, course catalogue, and account flows captured from the live TFT Bible Class platform.",
        images: ["/images/projects/tft-bible-class/gallery-03.png?v=16"],
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "Shipped an online Bible class product where learners can enroll, progress through modules, and study at their own pace — with a brand presence suited to faith communities and church teams.",
      },
    ],
  },
  {
    id: "05",
    slug: "timely-invoices",
    title: "Timely Invoices",
    category: ["product", "ux-ui", "web"],
    year: "2024",
    client: "Timely Invoices",
    role: "Product Designer & Builder",
    description:
      "Cloud financial platform for small businesses — quotes, invoices, statements, payments, and cashflow reporting designed for clarity over complexity.",
    thumbnail: "/images/projects/timely-invoices/thumbnail.png?v=15",
    heroImage: "/images/projects/timely-invoices/hero.png?v=15",
    gallery: [
      "/images/projects/timely-invoices/gallery-01.png?v=15",
      "/images/projects/timely-invoices/gallery-02.png?v=15",
      "/images/projects/timely-invoices/gallery-03.png?v=15",
    ],
    tags: ["SaaS", "Fintech", "Product"],
    featured: true,
    layout: "image-heavy",
    confirmedClient: true,
    link: "https://timelyinvoices.com",
    caseStudy: [
      {
        id: "intro",
        title: "Project Introduction",
        content:
          "TimelyInvoices gives small businesses one clear place to send invoices, collect payments, and understand cashflow — because sending an invoice isn’t the same as getting paid.",
      },
      {
        id: "client",
        title: "Client / Company",
        content: "Timely Invoices — own venture at timelyinvoices.com.",
      },
      { id: "year", title: "Year", content: "2024" },
      { id: "role", title: "Role", content: "Product Designer & Builder" },
      {
        id: "challenge",
        title: "Challenge",
        content:
          "Freelancers and SMEs need finance tools that feel simple on busy days without hiding the numbers that matter. The product had to make collections, overdue items, and expected cash obvious — while supporting quotes, invoices, statements, and customer records.",
      },
      {
        id: "thinking",
        title: "Thinking / Strategy",
        content:
          "Lead with cashflow clarity: collected this month, outstanding, overdue, expected. Positioning line — Invoice. Collect. Understand. — shaped both marketing and dashboard hierarchy so action is always one step away from insight.",
      },
      {
        id: "process",
        title: "Process",
        content:
          "Mapped SME invoicing workflows, designed dashboard and document flows, then shipped a full-stack cloud platform covering quotes, invoices, payments, customer management, and reporting — iterating marketing and product UI in parallel.",
      },
      {
        id: "ux",
        title: "UX / Wireframes",
        content:
          "Dashboard architecture for collections health, reminder queues, document creation, and customer management — prioritising scanability and next actions.",
        images: ["/images/projects/timely-invoices/gallery-01.png?v=15"],
      },
      {
        id: "visual",
        title: "Visual Design",
        content:
          "Clean, trustworthy finance UI with clear hierarchy and South African Rand-first metrics. Soft off-white surfaces, navy actions, and charting that makes cash movement readable at a glance.",
        images: ["/images/projects/timely-invoices/gallery-02.png?v=15"],
      },
      {
        id: "final",
        title: "Final Experience",
        content:
          "Live product at timelyinvoices.com — from free-start onboarding through overview, pricing, and day-to-day invoicing.",
        images: ["/images/projects/timely-invoices/hero.png?v=15"],
      },
      {
        id: "screens",
        title: "Screens / Mockups",
        content:
          "Marketing homepage, product overview, pricing, and FAQ — documenting the full narrative from value proposition to conversion.",
        images: ["/images/projects/timely-invoices/gallery-03.png?v=15"],
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "Shipped a production SaaS invoicing platform for freelancers and small businesses, with a coherent brand and product system ready for continued feature expansion.",
      },
    ],
  },
  {
    id: "06",
    slug: "peboli-store",
    title: "Peboli",
    category: ["product", "web", "digital"],
    year: "2024",
    client: "Peboli",
    role: "Product Designer & Builder",
    description:
      "Marketplace platform for premium picks and splash deals — search-first discovery, shop-by-department navigation, and seller tools built for everyday commerce.",
    thumbnail: "/images/projects/peboli-store/thumbnail.png?v=15",
    heroImage: "/images/projects/peboli-store/hero.png?v=15",
    gallery: [
      "/images/projects/peboli-store/gallery-01.png?v=15",
      "/images/projects/peboli-store/gallery-02.png?v=15",
      "/images/projects/peboli-store/gallery-03.png?v=15",
    ],
    tags: ["E-commerce", "Marketplace", "Product"],
    featured: true,
    layout: "typography",
    confirmedClient: true,
    link: "https://peboli.store",
    caseStudy: [
      {
        id: "intro",
        title: "Project Introduction",
        content:
          "Peboli is a marketplace built around clear discovery — departments, deals, and zero-hassle shopping. The promise: best deals, zero hassle — premium picks and splash sales across top categories.",
      },
      {
        id: "client",
        title: "Client / Company",
        content: "Peboli — own venture at peboli.store.",
      },
      { id: "year", title: "Year", content: "2024" },
      { id: "role", title: "Role", content: "Product Designer & Builder" },
      {
        id: "challenge",
        title: "Challenge",
        content:
          "Marketplaces fail when search, categories, and promotions compete for attention. Peboli needed a homepage and browsing model that lets shoppers jump into departments or deals instantly — while giving vendors a path to sell.",
      },
      {
        id: "thinking",
        title: "Thinking / Strategy",
        content:
          "Lead with search and shop-by-department, then surface Splash Deals as a high-intent path. Keep account, cart, and wishlist always available. Seller entry (Sell on Peboli) sits in primary navigation so supply growth is part of the product story.",
      },
      {
        id: "process",
        title: "Process",
        content:
          "Defined IA for shoppers and vendors, designed homepage and category templates, built the live storefront, and iterated deals, new arrivals, and electronics category experiences against real browsing behaviour.",
      },
      {
        id: "ux",
        title: "UX / Wireframes",
        content:
          "Homepage IA, department navigation, deal discovery, cart/wishlist entry points, and seller onboarding pathways.",
        images: ["/images/projects/peboli-store/gallery-01.png?v=15"],
      },
      {
        id: "visual",
        title: "Visual Design",
        content:
          "Bold marketplace UI with clear search, coral/orange actions, and department hierarchy — dark hero for campaign energy, white content for browsing clarity.",
        images: ["/images/projects/peboli-store/gallery-02.png?v=15"],
      },
      {
        id: "final",
        title: "Final Experience",
        content:
          "Live storefront at peboli.store — browse, search, deals, and sell flows in production.",
        images: ["/images/projects/peboli-store/hero.png?v=15"],
      },
      {
        id: "screens",
        title: "Screens / Mockups",
        content:
          "Homepage, deals, new arrivals, electronics category, and sell pages captured from the live marketplace.",
        images: ["/images/projects/peboli-store/gallery-03.png?v=15"],
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "Shipped a working marketplace storefront with coherent discovery patterns and a foundation for category and vendor growth.",
      },
    ],
  },
  {
    id: "09",
    slug: "propeling-media-group",
    title: "Propeling Media Group",
    category: ["branding", "web", "digital"],
    year: "2025",
    client: "Propeling Media Group",
    role: "Creative Director & Designer",
    description:
      "AV production and equipment hire brand site for Gauteng — sound, stage, lighting, LED, and streaming sold with touring discipline and transparent packages.",
    thumbnail: "/images/projects/propeling-media-group/thumbnail.png?v=15",
    heroImage: "/images/projects/propeling-media-group/hero.png?v=15",
    gallery: [
      "/images/projects/propeling-media-group/gallery-01.png?v=15",
      "/images/projects/propeling-media-group/gallery-02.png?v=15",
      "/images/projects/propeling-media-group/gallery-03.png?v=15",
    ],
    tags: ["Brand", "Web", "AV Production"],
    featured: true,
    layout: "editorial",
    confirmedClient: true,
    link: "https://propelingmediagroup.netlify.app/",
    caseStudy: [
      {
        id: "intro",
        title: "Project Introduction",
        content:
          "Propeling Media Group needed a digital presence that sells touring-standard AV hire with clarity — capabilities, packages, process, and proof of production for conferences, awards, activations, and live events across Gauteng.",
      },
      {
        id: "client",
        title: "Client / Company",
        content: "Propeling Media Group — Alberton, Gauteng. Live at propelingmediagroup.netlify.app.",
      },
      { id: "year", title: "Year", content: "2025" },
      { id: "role", title: "Role", content: "Creative Director & Designer" },
      {
        id: "challenge",
        title: "Challenge",
        content:
          "AV production is technical and quote-heavy. The site had to translate kit lists and crew capability into a confident brand experience — without drowning planners in jargon — and make requesting an estimate the obvious next step.",
      },
      {
        id: "thinking",
        title: "Thinking / Strategy",
        content:
          "Lead with the room: “We propel the room.” Hero energy, clear capability pillars (sound, stage, lighting, LED), transparent packages, and a four-step process from brief to showtime. Gold accents on dark cinematic photography signal premium touring standard.",
      },
      {
        id: "process",
        title: "Process",
        content:
          "Brand messaging workshop, site IA for hire/packages/work/about/contact, visual system for dark production aesthetic, then build and launch with quote and WhatsApp conversion paths.",
      },
      {
        id: "ux",
        title: "UX / Wireframes",
        content:
          "Service IA, package discovery, selected work proof, process narrative, and quote conversion flow across Gauteng service areas.",
        images: ["/images/projects/propeling-media-group/gallery-01.png?v=15"],
      },
      {
        id: "visual",
        title: "Visual Design",
        content:
          "Dark cinematic production aesthetic with gold accents, stage photography, and confident serif/sans pairings that feel live-event ready.",
        images: ["/images/projects/propeling-media-group/gallery-02.png?v=15"],
      },
      {
        id: "final",
        title: "Final Experience",
        content:
          "Live marketing site covering hire catalogue, packages, work, about, and contact — ready for quote requests.",
        images: ["/images/projects/propeling-media-group/hero.png?v=15"],
      },
      {
        id: "screens",
        title: "Screens / Mockups",
        content:
          "Homepage, hire, packages, work, and about pages from the production-led brand site.",
        images: ["/images/projects/propeling-media-group/gallery-03.png?v=15"],
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "Shipped a quote-ready brand site that presents PMG as touring-standard AV hire for Gauteng events — clearer packaging, stronger proof, and direct conversion paths.",
      },
    ],
  },
  {
    id: "07",
    slug: "zianda-agri-hub",
    title: "Zianda Agri-Hub",
    category: ["product", "ux-ui", "web", "mobile"],
    year: "2025",
    client: "Zianda Agri-Hub",
    role: "Product Designer & Builder",
    description:
      "Mobile-first farm management for African farmers — livestock, crops, health schedules, costs, and QR field records in one offline-friendly hub.",
    thumbnail: "/images/projects/zianda-agri-hub/thumbnail.png?v=16",
    heroImage: "/images/projects/zianda-agri-hub/hero.png?v=16",
    gallery: [
      "/images/projects/zianda-agri-hub/gallery-01.png?v=16",
      "/images/projects/zianda-agri-hub/gallery-02.png?v=16",
      "/images/projects/zianda-agri-hub/gallery-03.png?v=16",
    ],
    tags: ["AgriTech", "SaaS", "Mobile"],
    featured: false,
    layout: "image-heavy",
    confirmedClient: true,
    link: "https://zianda-agrihub.netlify.app/",
    caseStudy: [
      {
        id: "intro",
        title: "Project Introduction",
        content:
          "Zianda Agri-Hub needed a simple digital home for farm operations — livestock, crops, and finances in one place farmers can use in the kraal or the field, including offline.",
      },
      {
        id: "client",
        title: "Client / Company",
        content: "Zianda Agri-Hub — farm management platform at zianda-agrihub.netlify.app.",
      },
      { id: "year", title: "Year", content: "2025" },
      {
        id: "role",
        title: "Role",
        content: "Product Designer & Builder",
      },
      {
        id: "challenge",
        title: "Challenge",
        content:
          "Replace scattered notebooks and spreadsheets with a clear hub for herd health, planting, costs, and QR scanning — without the complexity of enterprise farm software.",
      },
      {
        id: "thinking",
        title: "Thinking / Strategy",
        content:
          "Lead with mobile-first, offline-friendly workflows. Prioritise live farm overview, vaccine schedules, cost tracking, and QR jumps to the right animal or field record.",
      },
      {
        id: "process",
        title: "Process",
        content:
          "Mapped farmer journeys from register and login through dashboard, livestock, crops, and QR scan. Designed marketing and product surfaces for smallholder, commercial, and advisor audiences.",
      },
      {
        id: "ux",
        title: "UX / Wireframes",
        content:
          "Information architecture for homepage, auth, farm dashboard, livestock/crops modules, and scan flows — with clear paths from marketing CTA to day-to-day farm records.",
        images: ["/images/projects/zianda-agri-hub/gallery-01.png?v=16"],
      },
      {
        id: "visual",
        title: "Visual Design",
        content:
          "Practical agri-tech UI: clear hierarchy, mobile-ready layouts, and product language built for farmers, commercial operations, and visiting advisors.",
        images: ["/images/projects/zianda-agri-hub/gallery-02.png?v=16"],
      },
      {
        id: "final",
        title: "Final Experience",
        content:
          "A live hub at zianda-agrihub.netlify.app for livestock, crops, equipment, and finances — including QR health cards and offline-friendly capture.",
        images: ["/images/projects/zianda-agri-hub/hero.png?v=16"],
      },
      {
        id: "screens",
        title: "Screens / Mockups",
        content:
          "Homepage, feature sections, auth, and farm dashboard captured from the live Zianda Agri-Hub product.",
        images: ["/images/projects/zianda-agri-hub/gallery-03.png?v=16"],
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "Shipped a farm management product farmers can use on phone, tablet, or computer — clearer records, vaccine schedules, cost visibility, and QR-ready field workflows.",
      },
    ],
  },
  {
    id: "08",
    slug: "ai-experimentation-lab",
    title: "AI Experimentation Lab",
    category: ["experimental", "product", "digital"],
    year: "2025",
    client: "Personal / iCreativate",
    role: "Product Builder & Designer",
    description:
      "Ongoing lab for AI-assisted design, prototyping, and product workflows — turning intelligent automation into practical tools for creative and business teams.",
    thumbnail: "/images/projects/ai-experimentation-lab/thumbnail.png",
    heroImage: "/images/projects/ai-experimentation-lab/hero.png",
    gallery: [
      "/images/projects/ai-experimentation-lab/gallery-01.png",
      "/images/projects/ai-experimentation-lab/gallery-02.png",
      "/images/projects/ai-experimentation-lab/gallery-03.png",
    ],
    tags: ["AI", "Experimental", "Product"],
    featured: false,
    layout: "editorial",
    confirmedClient: true,
    link: "https://icreativate.co.za",
    caseStudy: [
      {
        id: "intro",
        title: "Project Introduction",
        content:
          "An ongoing exploration of AI-assisted design, prototyping, and product development — testing how intelligent automation can improve creative workflows, business operations, and shipped product features across iCreativate ventures.",
      },
      {
        id: "client",
        title: "Client / Company",
        content: "iCreativate — personal studio and consultancy lab.",
      },
      { id: "year", title: "Year", content: "2025" },
      { id: "role", title: "Role", content: "Product Builder, Designer, AI Developer" },
      {
        id: "challenge",
        title: "Challenge",
        content:
          "AI tools move quickly and often feel detached from real production pipelines. The lab’s challenge is to prototype features that are useful — prompt systems, assistants, automation, and UX patterns — then fold the winners into live products like PropReady and Timely platforms.",
      },
      {
        id: "thinking",
        title: "Thinking / Strategy",
        content:
          "Treat AI as a product capability, not a demo. Experiment in short cycles: define a workflow pain, prototype an assistant or automation, evaluate trust and clarity in the UI, then promote successful patterns into production design systems.",
      },
      {
        id: "process",
        title: "Process",
        content:
          "Spike prototypes, design UI for AI outputs (loading, uncertainty, editability), integrate APIs and prompt engineering, then document reusable patterns for client and venture work.",
      },
      {
        id: "ux",
        title: "UX / Wireframes",
        content:
          "Assistant rails, result cards, editing affordances, and escalation paths when AI suggestions need human confirmation.",
        images: ["/images/projects/ai-experimentation-lab/gallery-01.png"],
      },
      {
        id: "visual",
        title: "Visual Design",
        content:
          "Experimental visual language that still respects portfolio craft — dark, focused canvases for tooling, clear typography for machine output, and accent cues for AI actions.",
        images: ["/images/projects/ai-experimentation-lab/gallery-02.png"],
      },
      {
        id: "final",
        title: "Final Experience",
        content:
          "A living lab feeding production products — assistants, automation ideas, and interaction patterns validated before wider release.",
        images: ["/images/projects/ai-experimentation-lab/hero.png"],
      },
      {
        id: "screens",
        title: "Screens / Mockups",
        content:
          "Concept and prototype surfaces documenting AI-assisted workflows and experimental product UI.",
        images: ["/images/projects/ai-experimentation-lab/gallery-03.png"],
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "Established a repeatable experimentation loop that informs AI features across ventures — improving how assistants, automation, and intelligent UX ship in live products.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category.includes(category as Project["category"][number]));
}
