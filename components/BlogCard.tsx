"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  delay?: number;
}

export default function BlogCard({ post, delay = 0 }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: "rgba(42, 100, 117, 0.08)", color: "#2A6475" }}
          >
            {post.category}
          </span>
        </div>
        <h3
          className="text-xl font-bold mb-3 line-clamp-2 leading-snug"
          style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
        >
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>
          <Link
            href={`/resources/market-insights/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
            style={{ color: "#2A6475" }}
          >
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
