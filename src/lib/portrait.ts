/** Bump version when portrait file is replaced to bust browser cache */
export const PORTRAIT_VERSION = "11";

export const PORTRAIT_PATH = "/images/about/john-mthembu-retouched.png";

export function portraitSrc(): string {
  return `${PORTRAIT_PATH}?v=${PORTRAIT_VERSION}`;
}
