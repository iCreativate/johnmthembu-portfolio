import type { Metadata } from "next";
import { Syne, DM_Sans, Instrument_Serif } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CursorFollower } from "@/components/layout/CursorFollower";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johnmthembu.com"),
  title: "John Mthembu — Digital Designer & Creative Director",
  description:
    "Portfolio of John Mthembu — Digital Designer, Creative Director, Product Designer and Product Builder. Designing experiences, solving problems, and turning ideas into products.",
  keywords: [
    "John Mthembu",
    "Digital Designer",
    "Creative Director",
    "Product Designer",
    "UX/UI",
    "Portfolio",
    "South Africa",
  ],
  authors: [{ name: "John Mthembu" }],
  openGraph: {
    title: "John Mthembu — Digital Designer & Creative Director",
    description:
      "Designing experiences, solving problems, and turning ideas into products.",
    type: "website",
    locale: "en_ZA",
    siteName: "John Mthembu Portfolio",
    images: [
      {
        url: "/images/hero/collage-01.png",
        width: 1200,
        height: 630,
        alt: "John Mthembu — Digital Designer & Creative Director",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Mthembu — Digital Designer & Creative Director",
    description:
      "Designing experiences, solving problems, and turning ideas into products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="grain min-h-full flex flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollProgress />
        <CursorFollower />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
