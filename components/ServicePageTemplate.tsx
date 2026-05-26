import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { ReactNode } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  heroImage: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  steps: Step[];
  benefits: string[];
}

export default function ServicePageTemplate({
  heroImage,
  title,
  subtitle,
  description,
  icon,
  steps,
  benefits,
}: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <section
        className="relative h-[60vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(15,45,61,0.7) 0%, rgba(42,100,117,0.5) 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              {icon}
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(150,210,220,0.9)" }}>
              Our Services
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">{subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <AnimatedSection>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
              >
                About This Service
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                {description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
              >
                What You Can Expect
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#2A6475" }} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
              >
                Our Process
              </h3>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: "#2A6475" }}
                      >
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: "#0F2D3D" }}>
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <AnimatedSection direction="right">
                <div
                  className="rounded-2xl p-8 text-white"
                  style={{ background: "linear-gradient(135deg, #0F2D3D 0%, #2A6475 100%)" }}
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    Our team is ready to guide you through the process with expertise and
                    discretion. Let&apos;s discuss your aviation objectives.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white font-semibold text-sm mb-6 hover:bg-gray-100 transition-colors"
                    style={{ color: "#2A6475" }}
                  >
                    Contact Us Today <ArrowRight size={16} />
                  </Link>
                  <div className="space-y-3 pt-4 border-t border-white/20">
                    <a
                      href="tel:+12042965389"
                      className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <Phone size={16} /> +1 (204) 296-5389
                    </a>
                    <a
                      href="mailto:mike@jetzaviation.com"
                      className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <Mail size={16} /> mike@jetzaviation.com
                    </a>
                  </div>
                </div>

                <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">
                    Other Services
                  </h4>
                  <div className="space-y-2">
                    {[
                      { label: "Aircraft Brokerage", href: "/services/aircraft-brokerage" },
                      { label: "Acquisition & Strategy", href: "/services/aircraft-acquisition" },
                      { label: "Aircraft Valuation", href: "/services/aircraft-valuation" },
                      { label: "Aviation Consulting", href: "/services/aviation-consulting" },
                    ].map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-teal transition-colors group"
                      >
                        {s.label}
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#2A6475" }} />
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20" style={{ backgroundColor: "#F0F4F5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Start Your Aviation Journey
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Contact Jetz Aviation for a confidential consultation. We serve clients across
              North America and internationally.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "#2A6475" }}
            >
              Get In Touch <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
