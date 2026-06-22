import Link from "next/link";
import { Handshake, Search, BarChart3, Briefcase, ArrowRight } from "lucide-react";
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
  const heroImage = "/images/jet-runway.jpg";

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
              Comprehensive Aviation Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each service is delivered with the same commitment to expertise, discretion,
              and client outcomes that defines the Jetz Aviation standard.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="flex items-center justify-between p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
                    >
                      <service.Icon size={26} style={{ color: "#2A6475" }} />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={22}
                    className="flex-shrink-0 ml-6 group-hover:translate-x-1 transition-transform"
                    style={{ color: "#2A6475" }}
                  />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
