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
  "Jetz Aviation provides expert aircraft brokerage, acquisition strategy, valuation, and aviation consulting services for high net worth individuals and corporations across Canada and the United States.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jetzaviation.com"),
  title: siteTitle,
  description: siteDescription,
  keywords: "aircraft brokerage, aircraft acquisition, private jet, business aviation, aircraft valuation, aviation consulting",
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
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
