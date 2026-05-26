"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  location: string;
  delay?: number;
}

export default function TestimonialCard({ quote, location, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      <Quote size={32} className="mb-4 flex-shrink-0" style={{ color: "#2A6475", opacity: 0.4 }} />
      <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div
          className="w-1 h-8 rounded-full flex-shrink-0"
          style={{ backgroundColor: "#2A6475" }}
        />
        <div>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}
