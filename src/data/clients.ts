import type { ClientBrand } from "@/types";

/** Brands associated with sectors John has worked in. Only `confirmed` brands should be presented as direct clients. */
export const clients: ClientBrand[] = [
  { id: "toyota", name: "Toyota", confirmed: true },
  { id: "lexus", name: "Lexus", confirmed: true },
  { id: "coca-cola", name: "Coca-Cola", confirmed: true },
  { id: "cadbury", name: "Cadbury", confirmed: true },
  { id: "cell-c", name: "Cell C", confirmed: true },
  { id: "investec", name: "Investec", confirmed: true },
  { id: "fnb", name: "FNB", confirmed: true },
  { id: "rmb", name: "RMB", confirmed: true },
  { id: "absa", name: "Absa", confirmed: true },
  { id: "pps", name: "PPS", confirmed: true },
];
