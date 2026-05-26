import Link from "next/link";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";

const values = [
  {
    icon: Target,
    title: "Mission-First Thinking",
    description:
      "Every engagement begins with a deep understanding of your aviation objectives. We don't recommend aircraft — we recommend the right aircraft for your specific mission requirements.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We operate with complete transparency at every stage. You will always know where a transaction stands, what the market is doing, and exactly how we are working on your behalf.",
  },
  {
    icon: Heart,
    title: "Client Commitment",
    description:
      "Our relationship does not end at closing. We remain available to clients long after a transaction is complete, providing ongoing guidance as their aviation needs evolve.",
  },
];

export default async function AboutPage() {
  const heroImage = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80";
  const missionImage = "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1600&q=80";

  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      {/* Hero */}
      <HeroSection
        imageUrl={heroImage}
        headline="About Jetz Aviation"
        subheadline="A boutique aviation consultancy built on expertise, integrity, and an unwavering commitment to client outcomes."
        overlay={0.55}
        height="h-[65vh]"
      />

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#2A6475" }}
              >
                Our Story
              </p>
            <h2
                className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
              >
                Built on a Passion for Aviation and a Standard of Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Jetz Aviation was founded with a singular purpose: to provide high net worth
                individuals and corporations with access to the same calibre of aircraft
                acquisition expertise that had previously been available only to the largest
                institutional buyers in the market.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Based in Winnipeg, Manitoba, we have built our reputation on quiet, effective
                representation and exceptional results. Our client roster spans corporate flight
                departments, family offices, and individual owners across North America and
                internationally.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In an industry where relationships and reputation are everything, Jetz Aviation
                has earned its place as a trusted advisor to those who understand that the right
                aircraft — acquired on the right terms — is a strategic asset, not just a
                convenience.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div
                className="h-80 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundImage: `url(${missionImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20" style={{ backgroundColor: "#F0F4F5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2A6475" }}
            >
              Our Mission
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              To Deliver Exceptional Outcomes, Every Time
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              &ldquo;We believe that every aircraft transaction — regardless of size — deserves
              the same level of expertise, diligence, and personal attention. Our mission is to
              deliver outcomes that exceed our clients&apos; expectations, on every engagement,
              without exception.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2A6475" }}
            >
              What Guides Us
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Our Core Values
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
                  >
                    <value.icon size={26} style={{ color: "#2A6475" }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Testimonials links */}
      <section className="py-16" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection direction="left">
              <Link
                href="/about/team"
                className="flex items-center justify-between p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                  >
                    Meet Our Team
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get to know the people behind Jetz Aviation.
                  </p>
                </div>
                <ArrowRight
                  size={22}
                  className="flex-shrink-0 group-hover:translate-x-1 transition-transform"
                  style={{ color: "#2A6475" }}
                />
              </Link>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <Link
                href="/about/testimonials"
                className="flex items-center justify-between p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                  >
                    Client Testimonials
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Read what our clients say about working with Jetz Aviation.
                  </p>
                </div>
                <ArrowRight
                  size={22}
                  className="flex-shrink-0 group-hover:translate-x-1 transition-transform"
                  style={{ color: "#2A6475" }}
                />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
