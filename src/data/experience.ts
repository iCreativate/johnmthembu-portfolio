import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    id: "exp-01",
    year: "2016",
    role: "CEO & Founder",
    company: "iCreativate",
    description:
      "Founded iCreativate as a technology and creative consultancy delivering AI software, cloud solutions, digital transformation, UX/UI, and full-stack products. Shipped PropReady, Timely Mate, Timely Invoices, Peboli, TFT Bible Class, Zianda Agri-Hub, SecureLink, and workshop booking platforms while leading architecture, AI initiatives, and multidisciplinary teams across banking, education, agriculture, and property.",
    selectedWork: ["PropReady", "Timely Mate", "Timely Invoices", "Peboli", "TFT Bible Class", "Zianda Agri-Hub"],
  },
  {
    id: "exp-02",
    year: "2020",
    endYear: "2021",
    role: "Creative Director & Digital Consultant",
    company: "Bokamoso 947 FM",
    description:
      "Grew social following from 2,000 to 49,000+ in six months — fully organic. Packaged non-traditional ad inventory across digital and on-air, and directed brand and campaign systems.",
    selectedWork: ["Social Growth", "Brand Systems", "Digital Inventory"],
  },
  {
    id: "exp-03",
    year: "2019",
    endYear: "2020",
    role: "Senior Freelance Digital Designer",
    company: "GTB / Wunderman Thompson",
    description:
      "Concepted and shipped multi-channel campaigns for blue-chip clients with designers, developers, and strategists — spanning digital, social, and brand systems at senior freelance level.",
    selectedWork: ["Multi-channel Campaigns", "Enterprise Brands", "Art Direction"],
  },
  {
    id: "exp-04",
    year: "2018",
    endYear: "2018",
    role: "Head of Digital Design",
    company: "Promise Agency",
    description:
      "Led the UX/UI and graphic design team — setting design strategy, mentoring talent, and locking visual consistency across touchpoints.",
    selectedWork: ["Design Leadership", "UX/UI Systems"],
  },
  {
    id: "exp-05",
    year: "2014",
    endYear: "2018",
    role: "Digital Graphic Designer",
    company: "Hellocomputer / FCB / 1886",
    description:
      "Designed UI, illustration, and campaign assets for Toyota, Lexus, Coca-Cola, and Cadbury — embedded with UX, development, and content teams.",
    selectedWork: ["Toyota", "Lexus", "Coca-Cola", "Cadbury"],
  },
];

export const careerJourney = [
  {
    stage: "Designer",
    description: "Visual craft, print, and production fundamentals",
    era: "craft" as const,
  },
  {
    stage: "Digital Designer",
    description: "UI, campaigns, and interactive media for enterprise brands",
    era: "craft" as const,
  },
  {
    stage: "Design Lead",
    description: "Leading teams and locking visual systems",
    era: "direction" as const,
  },
  {
    stage: "Creative Director",
    description: "Brand vision, campaigns, and multidisciplinary direction",
    era: "direction" as const,
  },
  {
    stage: "Founder",
    description: "Building iCreativate",
    era: "product" as const,
  },
  {
    stage: "Product Builder",
    description: "Shipping SaaS platforms across property, workforce, and safety",
    era: "product" as const,
  },
  {
    stage: "AI Developer",
    description: "Design + full-stack engineering + intelligent automation",
    era: "product" as const,
  },
];

export const careerEras = [
  {
    id: "craft" as const,
    label: "Craft",
    summary: "Hands-on making — visual systems, production, and interactive media.",
  },
  {
    id: "direction" as const,
    label: "Direction",
    summary: "Leading teams and locking brand vision across channels.",
  },
  {
    id: "product" as const,
    label: "Product",
    summary: "Founding, shipping SaaS, and building with AI.",
  },
];
