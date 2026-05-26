import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Jetz Aviation`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      {/* Header */}
      <div
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0F2D3D 0%, #2A6475 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/resources/market-insights"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Market Insights
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(200,230,235,0.9)" }}
              >
                <Tag size={11} className="inline mr-1" />
                {post.category}
              </span>
              <span className="text-sm text-gray-300 flex items-center gap-1.5">
                <Calendar size={14} /> {formattedDate}
              </span>
              <span className="text-sm text-gray-300 flex items-center gap-1.5">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {post.title}
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12">
            <p className="text-lg text-gray-500 italic mb-8 pb-8 border-b border-gray-100">
              {post.excerpt}
            </p>
            <div className="prose prose-lg max-w-none">
              {post.content.trim().split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold mt-10 mb-4"
                      style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                    >
                      {line.replace("## ", "")}
                    </h2>
                  );
                }
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <p key={i} className="font-bold text-gray-800 mt-4 mb-2">
                      {line.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (line.trim() === "") {
                  return <div key={i} className="h-3" />;
                }
                return (
                  <p key={i} className="text-gray-700 leading-relaxed">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Author / CTA */}
        <AnimatedSection delay={0.15} className="mt-8">
          <div
            className="rounded-2xl p-8 text-white"
            style={{ background: "linear-gradient(135deg, #0F2D3D 0%, #2A6475 100%)" }}
          >
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Have Questions About This Topic?
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Contact the Jetz Aviation team for personalized guidance on any aspect of
              business aircraft acquisition, valuation, or ownership.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white font-semibold text-sm hover:shadow-lg transition-all"
              style={{ color: "#2A6475" }}
            >
              Speak with an Advisor
            </Link>
          </div>
        </AnimatedSection>

        {/* Related Posts */}
        <AnimatedSection delay={0.2} className="mt-12">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
          >
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/resources/market-insights/${related.slug}`}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 block"
              >
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(42,100,117,0.08)", color: "#2A6475" }}
                >
                  {related.category}
                </span>
                <h4
                  className="text-sm font-bold mt-3 mb-2 leading-snug line-clamp-2"
                  style={{ color: "#0F2D3D" }}
                >
                  {related.title}
                </h4>
                <p className="text-xs text-gray-400">{related.readTime}</p>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
