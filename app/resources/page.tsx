import Link from "next/link";
import { BarChart2, BookOpen, ArrowRight } from "lucide-react";
import { getUnsplashImage } from "@/lib/unsplash";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";

export default async function ResourcesPage() {
  const heroImage = await getUnsplashImage("corporate jet");

  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      <HeroSection
        imageUrl={heroImage}
        headline="Aviation Resources"
        subheadline="Tools and insights to inform your business aviation decisions."
        overlay={0.55}
        height="h-[50vh]"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2A6475" }}
            >
              Tools & Insights
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Resources for the Informed Buyer
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="left">
              <Link href="/resources/aircraft-comparison" className="group block">
                <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
                  >
                    <BarChart2 size={30} style={{ color: "#2A6475" }} />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                  >
                    Aircraft Comparison Tool
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Compare specifications, performance, and pricing for 12 leading
                    corporate aircraft side-by-side. An essential tool for informed
                    acquisition decisions.
                  </p>
                  <span
                    className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all"
                    style={{ color: "#2A6475" }}
                  >
                    Compare Aircraft <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Link href="/resources/market-insights" className="group block">
                <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
                  >
                    <BookOpen size={30} style={{ color: "#2A6475" }} />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                  >
                    Market Insights & News
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    In-depth articles on market trends, acquisition strategies, ownership
                    models, and the business aviation industry from the Jetz Aviation team.
                  </p>
                  <span
                    className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all"
                    style={{ color: "#2A6475" }}
                  >
                    Read Articles <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
