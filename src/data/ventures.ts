import type { Venture } from "@/types";

/** Bump to bust browser / Next image cache when assets are replaced */
export const VENTURE_IMAGE_VERSION = "16";

function img(path: string) {
  return `${path}?v=${VENTURE_IMAGE_VERSION}`;
}

export const ventures: Venture[] = [
  {
    id: "v-02",
    name: "iCreativate",
    tagline: "Design & technology studio",
    description:
      "Creative marketing and technology studio — product design, AI engineering, full-stack builds, and digital brand systems for SMEs and enterprises.",
    status: "active",
    image: img("/images/ventures/icreativate-v2.png"),
    tags: ["Studio", "Product", "AI"],
    link: "https://icreativate.co.za",
  },
  {
    id: "v-03",
    name: "Peboli",
    tagline: "Marketplace platform",
    description:
      "E-commerce marketplace for premium picks and splash deals — search-first discovery, shop-by-department, and seller tools.",
    status: "active",
    image: img("/images/ventures/peboli.png"),
    tags: ["E-commerce", "Marketplace", "Product"],
    link: "https://peboli.store",
  },
  {
    id: "v-04",
    name: "Propready",
    tagline: "Property readiness platform",
    description:
      "South Africa’s intelligent property platform — immersive learning, bond tools, AI guidance, and trusted professional matching.",
    status: "active",
    image: img("/images/ventures/propready-v2.png"),
    tags: ["SaaS", "PropTech", "AI"],
    link: "https://propready.live",
  },
  {
    id: "v-05",
    name: "Timely Mate",
    tagline: "Workforce productivity",
    description:
      "Enterprise workforce platform with facial recognition, QR attendance, GPS tracking, analytics, and team collaboration.",
    status: "active",
    image: img("/images/ventures/timely-mate-v2.png"),
    tags: ["Mobile", "SaaS", "Productivity"],
    link: "https://timelymate.app",
  },
  {
    id: "v-06",
    name: "Timely Invoices",
    tagline: "Invoice. Collect. Understand.",
    description:
      "Cloud invoicing for freelancers and SMEs — quotes, invoices, payments, statements, and cashflow reporting in one place.",
    status: "active",
    image: img("/images/ventures/timely-invoices.png"),
    tags: ["SaaS", "Finance"],
    link: "https://timelyinvoices.com",
  },
  {
    id: "v-11",
    name: "Propeling Media Group",
    tagline: "AV production & hire",
    description:
      "Sound, stage, lighting, LED, and streaming for conferences, awards, activations, and live events across Gauteng.",
    status: "active",
    image: img("/images/ventures/propeling-media-group.png"),
    tags: ["AV", "Production", "Events"],
    link: "https://propelingmediagroup.netlify.app/",
  },
  {
    id: "v-07",
    name: "SecureLink",
    tagline: "Community safety",
    description:
      "Community safety platform with emergency notifications, GPS tracking, incident reporting, community alerts, and secure communication.",
    status: "experimental",
    image: img("/images/ventures/securelink.png"),
    tags: ["Security", "Mobile", "Product"],
  },
  {
    id: "v-08",
    name: "Vealo / Blast",
    tagline: "Creative messaging experiment",
    description:
      "Experimental messaging and engagement product exploring fast creative distribution, campaign blasts, and lightweight audience tools.",
    status: "experimental",
    image: img("/images/ventures/vealo.png"),
    tags: ["Experimental", "Messaging"],
  },
  {
    id: "v-09",
    name: "Timely Events",
    tagline: "Event management",
    description:
      "Event operations platform for scheduling, guest flows, and on-the-day coordination — extending the Timely product family into live experiences.",
    status: "building",
    image: img("/images/ventures/timely-events.png"),
    tags: ["Events", "Product", "SaaS"],
  },
  {
    id: "v-10",
    name: "Website Builder",
    tagline: "Platform experiment",
    description:
      "Experimental website builder focused on fast brand launches — structured templates, modular sections, and design-system-aware publishing.",
    status: "experimental",
    image: img("/images/ventures/website-builder.png"),
    tags: ["Platform", "Web"],
  },
];
