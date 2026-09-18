import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = "Jetz Aviation | Aircraft Brokerage & Acquisition Consultancy";
const siteDescription =
  "Jetz Aviation provides independent aircraft acquisition, sales, management and cross-border advisory services for business aircraft owners throughout Canada and the United States.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jetzaviation.com"),
  title: siteTitle,
  description: siteDescription,
  keywords: "aircraft brokerage, aircraft acquisition, private jet, business aviation, aircraft valuation, aviation consulting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Jetz Aviation",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jetz Aviation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/og-image.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jetz Aviation",
  description: siteDescription,
  url: "https://jetzaviation.com",
  logo: "https://jetzaviation.com/icon.png",
  image: "https://jetzaviation.com/images/og-image.jpg",
  telephone: "+1-204-296-5389",
  email: "mike@jetzaviation.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Winnipeg",
    addressRegion: "MB",
    addressCountry: "CA",
  },
  areaServed: ["CA", "US"],
  priceRange: "$$$$",
  sameAs: ["https://www.linkedin.com/in/michaelzaporzan/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-inter), sans-serif", backgroundColor: "#F9FAFB" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
