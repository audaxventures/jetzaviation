"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export default function ServiceCard({ icon, title, description, href, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(42, 100, 117, 0.12)" }}
      className="bg-white rounded-2xl p-8 border border-gray-100 cursor-pointer group"
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
      >
        {icon}
      </div>
      <h3
        className="text-xl font-bold mb-3"
        style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
      >
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6 text-sm">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
        style={{ color: "#2A6475" }}
      >
        Learn More <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
