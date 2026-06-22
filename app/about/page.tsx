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
  const heroImage = "/images/jet-exterior.jpg";
  const missionImage = "/images/jet-interior.jpg";

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
                Built on Expertise. Driven by Results.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Jetz Aviation was founded with a singular purpose: to provide individuals and
                corporations with the level of aircraft acquisition expertise previously
                available only to the largest institutional buyers. Our team brings decades
                of experience in business aviation transactions, market analysis, and client
                advisory — all focused on delivering the best possible outcome for you.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We operate as a truly independent advisery, with no financial relationships
                with dealers, manufacturers, or management companies. Our only obligation is
                to you — which means our advice is always aligned with your interests, not
                with referral fees or commission arrangements.
              </p>
              <Link
                href="/about/team"
                className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-200"
                style={{ color: "#2A6475" }}
              >
                Meet Our Team <ArrowRight size={18} />
              </Link>
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

      {/* Values */}
      <section className="py-24" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2A6475" }}
            >
              What We Stand For
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
              Ready to Work Together?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us for a confidential consultation and learn how Jetz Aviation can
              support your aviation objectives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white font-semibold text-base transition-all duration-200 hover:shadow-xl"
              style={{ color: "#2A6475" }}
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
