/** Live product / brand URLs for hotlinks across the portfolio */
export const PRODUCT_LINKS: { label: string; href: string; aliases?: string[] }[] = [
  {
    label: "PropReady",
    href: "https://propready.live",
    aliases: ["Propready", "propready.live", "PropReady.live"],
  },
  {
    label: "Timely Mate",
    href: "https://timelymate.app",
    aliases: ["TimelyMate", "timelymate.app"],
  },
  {
    label: "Timely Invoices",
    href: "https://timelyinvoices.com",
    aliases: ["TimelyInvoices", "timelyinvoices.com"],
  },
  {
    label: "Peboli",
    href: "https://peboli.store",
    aliases: ["peboli.store"],
  },
  {
    label: "Propeling Media Group",
    href: "https://propelingmediagroup.netlify.app/",
    aliases: ["Propeling", "propelingmediagroup.netlify.app"],
  },
  {
    label: "iCreativate",
    href: "https://icreativate.co.za",
    aliases: ["icreativate.co.za"],
  },
  {
    label: "TFT Bible Class",
    href: "https://tftbibleclass.org/",
    aliases: ["tftbibleclass.org"],
  },
  {
    label: "Zianda Agri-Hub",
    href: "https://zianda-agrihub.netlify.app/",
    aliases: ["Zianda Agrihub", "zianda-agrihub.netlify.app"],
  },
];

export function getProductHref(name: string): string | undefined {
  const normalized = name.trim().toLowerCase();
  for (const product of PRODUCT_LINKS) {
    if (product.label.toLowerCase() === normalized) return product.href;
    if (product.aliases?.some((a) => a.toLowerCase() === normalized)) return product.href;
  }
  return undefined;
}

/** Build regex terms longest-first so domains match before brand names */
export function getProductLinkPatterns(): { pattern: RegExp; href: string }[] {
  const terms: { term: string; href: string }[] = [];
  for (const product of PRODUCT_LINKS) {
    terms.push({ term: product.label, href: product.href });
    for (const alias of product.aliases ?? []) {
      terms.push({ term: alias, href: product.href });
    }
  }
  terms.sort((a, b) => b.term.length - a.term.length);
  return terms.map(({ term, href }) => ({
    pattern: new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
    href,
  }));
}
