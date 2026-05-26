import Link from "next/link";
import {
  Handshake,
  Search,
  BarChart3,
  Briefcase,
  ShieldCheck,
  Star,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";

const testimonials = [
  {
    quote:
      "Mike and the Jetz Aviation team made what could have been an overwhelming process remarkably straightforward. Their market knowledge and ability to identify the right aircraft at the right price saved us both time and money.",
    location: "Corporate Client, Calgary, AB",
  },
  {
    quote:
      "I had specific requirements for range and cabin configuration. Jetz didn't just find us an aircraft — they found us the right one. Their expertise in the Gulfstream market is second to none.",
    location: "Private Client, Toronto, ON",
  },
];

const services = [
  {
    icon: <Handshake size={26} style={{ color: "#2A6475" }} />,
    title: "Aircraft Brokerage",
    description:
      "We represent buyers and sellers in the global pre-owned market with discretion, market expertise, and a fiduciary commitment to your interests.",
    href: "/services/aircraft-brokerage",
  },
  {
    icon: <Search size={26} style={{ color: "#2A6475" }} />,
    title: "Aircraft Acquisition & Strategy",
    description:
      "From mission analysis to closing, we guide you through every step of the acquisition process — defining requirements, sourcing candidates, and negotiating terms.",
    href: "/services/aircraft-acquisition",
  },
  {
    icon: <BarChart3 size={26} style={{ color: "#2A6475" }} />,
    title: "Aircraft Valuation",
    description:
      "Comprehensive market valuations for purchase, sale, insurance, or financial planning purposes — backed by current market data and decades of experience.",
    href: "/services/aircraft-valuation",
  },
  {
    icon: <Briefcase size={26} style={{ color: "#2A6475" }} />,
    title: "Aviation Consulting",
    description:
      "Strategic advisory for ownership structure, fleet planning, operator selection, and all facets of business aviation management.",
    href: "/services/aviation-consulting",
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Complete Discretion",
    description:
      "Your privacy is paramount. We handle every transaction with the utmost confidentiality, from initial discussions through closing.",
  },
  {
    icon: Star,
    title: "Deep Market Expertise",
    description:
      "Decades of experience in business aviation and a global network of industry relationships give us unparalleled market insight.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Every client receives direct access to senior leadership. No handoffs, no junior staff — your advisor is engaged from start to finish.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We source and transact aircraft across North America, Europe, and internationally, ensuring access to the broadest universe of opportunities.",
  },
];

export default function HomePage() {
  const heroImage = "https://images.unsplash.com/photo-1474302771604-5c8b3d17b9c1?w=1600&q=80";
  const aboutImage = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80";

  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      <HeroSection
        imageUrl={heroImage}
        headline="Elevating Your Aircraft Acquisition Experience"
        subheadline="Jetz Aviation provides expert brokerage, acquisition strategy, and aviation consulting for discerning individuals and corporations seeking exceptional aircraft."
        ctaPrimary={{ label: "Explore Our Services", href: "/services/aircraft-brokerage" }}
        ctaSecondary={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div
                className="h-80 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl"
                style={{
                  backgroundImage: `url(${aboutImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#2A6475" }}
              >
                Who We Are
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
              >
                Your Trusted Partner in Business Aviation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Jetz Aviation is a boutique aircraft brokerage and acquisition consultancy
                headquartered in Winnipeg, Manitoba. We serve high net worth individuals,
                family offices, and corporations who demand uncompromising expertise and
                personalized service in their aviation transactions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you are acquiring your first business aircraft or adding to an
                established fleet, our team brings deep market knowledge, global industry
                relationships, and an unwavering commitment to your interests. We handle the
                complexity so you can focus on what matters most.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-200"
                style={{ color: "#2A6475" }}
              >
                Learn About Us <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2A6475" }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Comprehensive Aviation Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From identifying the ideal aircraft to closing the transaction and beyond,
              Jetz Aviation provides end-to-end support across every dimension of business aviation.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2A6475" }}
            >
              Our Difference
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Why Choose Jetz Aviation
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
                >
                  <item.icon size={28} style={{ color: "#2A6475" }} />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#F0F4F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2A6475" }}
            >
              Client Experiences
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              What Our Clients Say
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} quote={t.quote} location={t.location} delay={i * 0.15} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link
              href="/about/testimonials"
              className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-200"
              style={{ color: "#2A6475" }}
            >
              Read All Testimonials <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

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
              Ready to Find Your Next Aircraft?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Schedule a confidential consultation with the Jetz Aviation team today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              style={{ color: "#2A6475" }}
            >
              Contact Jetz Aviation <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
