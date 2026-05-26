import Link from "next/link";
import { Handshake, Search, BarChart3, Briefcase, ArrowRight } from "lucide-react";
import { getUnsplashImage } from "@/lib/unsplash";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    Icon: Handshake,
    title: "Aircraft Brokerage",
    description:
      "We represent buyers and sellers in the global business aviation market, bringing unmatched market access, negotiating expertise, and transactional skill to every engagement.",
    href: "/services/aircraft-brokerage",
  },
  {
    Icon: Search,
    title: "Aircraft Acquisition & Strategy",
    description:
      "End-to-end acquisition management — from mission analysis and aircraft search to pre-buy inspection oversight and closing coordination.",
    href: "/services/aircraft-acquisition",
  },
  {
    Icon: BarChart3,
    title: "Aircraft Valuation",
    description:
      "Independent, data-driven valuations for purchase, sale, insurance, estate planning, and financial reporting purposes.",
    href: "/services/aircraft-valuation",
  },
  {
    Icon: Briefcase,
    title: "Aviation Consulting",
    description:
      "Strategic advisory services covering ownership structures, fleet planning, operator selection, regulatory compliance, and all facets of business aviation management.",
    href: "/services/aviation-consulting",
  },
];

export default async function ServicesPage() {
  const heroImage = await getUnsplashImage("private jet");

  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      <HeroSection
        imageUrl={heroImage}
        headline="Our Services"
        subheadline="Comprehensive aviation expertise tailored to your unique objectives."
        overlay={0.55}
        height="h-[55vh]"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2A6475" }}
            >
              What We Offer
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Full-Spectrum Aviation Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you are buying, selling, or seeking strategic guidance, Jetz Aviation
              provides expert support across every phase of your aviation journey.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link href={service.href} className="group block">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
                    >
                      <service.Icon size={26} style={{ color: "#2A6475" }} />
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <span
                      className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all"
                      style={{ color: "#2A6475" }}
                    >
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0F2D3D 0%, #2A6475 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us for a no-obligation consultation. We will help you identify the right
              service for your specific aviation objectives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white font-semibold text-base hover:shadow-xl transition-all"
              style={{ color: "#2A6475" }}
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
