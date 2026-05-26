"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  imageUrl: string;
  headline: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  overlay?: number;
  height?: string;
  centered?: boolean;
}

export default function HeroSection({
  imageUrl,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  overlay = 0.5,
  height = "h-[90vh]",
  centered = false,
}: HeroSectionProps) {
  return (
    <section className={`relative ${height} flex items-center overflow-hidden`}>
      <Image
        src={imageUrl}
        alt={headline}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, rgba(15, 45, 61, ${overlay + 0.1}) 0%, rgba(42, 100, 117, ${overlay - 0.1}) 100%)`,
        }}
      />
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${
          centered ? "text-center" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`max-w-3xl ${centered ? "mx-auto" : ""}`}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-widest text-teal-200 mb-4"
            style={{ color: "rgba(150, 210, 220, 0.9)" }}
          >
            Jetz Aviation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
            style={{ color: "rgba(229, 231, 235, 0.9)" }}
          >
            {subheadline}
          </motion.p>
          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className={`flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}
            >
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="inline-flex items-center px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: "#2A6475" }}
                >
                  {ctaPrimary.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-white text-white font-semibold text-sm transition-all duration-200 hover:bg-white hover:text-navy"
                  style={{ "--hover-color": "#0F2D3D" } as React.CSSProperties}
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-white/30 animate-pulse" />
      </motion.div>
    </section>
  );
}
