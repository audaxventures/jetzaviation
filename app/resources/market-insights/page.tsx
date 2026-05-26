import { blogPosts } from "@/lib/blog-data";
import { getUnsplashImage } from "@/lib/unsplash";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import AnimatedSection from "@/components/AnimatedSection";

export default async function MarketInsightsPage() {
  const heroImage = await getUnsplashImage("business aviation");

  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      <HeroSection
        imageUrl={heroImage}
        headline="Market Insights & News"
        subheadline="Expert perspectives on business aviation markets, acquisition strategy, and industry trends from the Jetz Aviation team."
        overlay={0.55}
        height="h-[55vh]"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-3">
              <span
                className="text-sm font-semibold px-4 py-2 rounded-full text-white"
                style={{ backgroundColor: "#2A6475" }}
              >
                All
              </span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="text-sm font-medium px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-teal-400 transition-colors cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={(i % 3) * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe strip */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0F2D3D 0%, #2A6475 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Stay Informed
            </h2>
            <p className="text-gray-300 mb-6">
              Follow Jetz Aviation on LinkedIn and social media for the latest market insights
              and aviation news.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white font-semibold text-sm hover:shadow-xl transition-all"
              style={{ color: "#2A6475" }}
            >
              Connect With Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
