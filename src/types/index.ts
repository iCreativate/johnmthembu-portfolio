export type ProjectCategory =
  | "digital"
  | "ux-ui"
  | "product"
  | "web"
  | "mobile"
  | "branding"
  | "advertising"
  | "motion"
  | "experimental";

export type ProjectLayout =
  | "editorial"
  | "full-width"
  | "two-column"
  | "vertical"
  | "image-heavy"
  | "typography"
  | "video";

export interface CaseStudySection {
  id: string;
  title: string;
  content: string;
  images?: string[];
  placeholder?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory[];
  year: string;
  client: string;
  role: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  tags: string[];
  featured: boolean;
  layout: ProjectLayout;
  caseStudy: CaseStudySection[];
  /** When true, client association is confirmed in project data */
  confirmedClient?: boolean;
  /** Live website / product URL */
  link?: string;
}

export interface ExperienceEntry {
  id: string;
  year: string;
  endYear?: string;
  role: string;
  company: string;
  description: string;
  selectedWork: string[];
}

export interface Venture {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "active" | "building" | "experimental";
  image: string;
  tags: string[];
  link?: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  number: string;
}

export interface ClientBrand {
  id: string;
  name: string;
  /** Only show as direct client when confirmed */
  confirmed: boolean;
}

export const PROJECT_CATEGORIES: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "digital", label: "Digital" },
  { id: "ux-ui", label: "UX/UI" },
  { id: "product", label: "Product" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "branding", label: "Branding" },
  { id: "advertising", label: "Advertising" },
  { id: "motion", label: "Motion" },
  { id: "experimental", label: "Experimental" },
];
