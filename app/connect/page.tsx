import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { LinkedinIcon, InstagramIcon, FacebookIcon, XIcon } from "@/components/SocialIcons";
import type { ComponentType } from "react";

interface SocialLink {
  platform: string;
  handle: string;
  description: string;
  href: string;
  icon: ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  bg: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    handle: "@JetzAviation",
    description:
      "Follow us on LinkedIn for industry insights, market updates, aircraft listings, and aviation news curated by the Jetz Aviation team.",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
    color: "#0A66C2",
    bg: "rgba(10, 102, 194, 0.08)",
  },
  {
    platform: "Instagram",
    handle: "@jetzaviation",
    description:
      "Get an inside look at exceptional aircraft, destination airports, and the world of business aviation through our Instagram feed.",
    href: "https://instagram.com",
    icon: InstagramIcon,
    color: "#E1306C",
    bg: "rgba(225, 48, 108, 0.08)",
  },
  {
    platform: "Facebook",
    handle: "Jetz Aviation",
    description:
      "Connect with the Jetz Aviation community on Facebook for news, events, and the latest developments in the business aviation market.",
    href: "https://facebook.com",
    icon: FacebookIcon,
    color: "#1877F2",
    bg: "rgba(24, 119, 242, 0.08)",
  },
  {
    platform: "X (Twitter)",
    handle: "@JetzAviation",
    description:
      "Follow us on X for real-time market commentary, industry news, and concise perspectives on the business aviation world.",
    href: "https://x.com",
    icon: XIcon,
    color: "#000000",
    bg: "rgba(0, 0, 0, 0.06)",
  },
];

export default function ConnectPage() {
  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      {/* Header */}
      <div
        className="py-24"
        style={{ background: "linear-gradient(135deg, #0F2D3D 0%, #2A6475 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "rgba(150, 210, 220, 0.9)" }}
            >
              Social Media
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Connect With Us
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Stay connected with Jetz Aviation across our social media channels for the
              latest market insights, aircraft news, and perspectives from our team.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Social Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Find Us On Social Media
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Follow Jetz Aviation on your preferred platform to receive timely market
              insights, aviation news, and updates from our team.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <AnimatedSection key={social.platform} delay={i * 0.1}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-8 h-full group"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: social.bg }}
                    >
                      <Icon size={26} style={{ color: social.color }} />
                    </div>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: "#0F2D3D" }}
                    >
                      {social.platform}
                    </h3>
                    <p
                      className="text-sm font-medium mb-4"
                      style={{ color: "#2A6475" }}
                    >
                      {social.handle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {social.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                      style={{ color: social.color }}
                    >
                      Follow Us <ExternalLink size={13} />
                    </span>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Follow section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Stay Informed in a Dynamic Market
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Business aviation markets move quickly. Supply constraints, macroeconomic shifts,
              and regulatory changes can significantly impact aircraft values and availability
              on short notice. Following Jetz Aviation on social media is one of the best ways
              to stay ahead of developments that affect your aviation investments and decisions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team regularly shares market commentary, transaction insights, and curated
              industry news designed to keep our community of aircraft owners, buyers, and
              aviation enthusiasts well-informed and well-positioned.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0F2D3D 0%, #2A6475 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Prefer to Talk Directly?
            </h2>
            <p className="text-gray-300 mb-6">
              Social media is great — but nothing replaces a direct conversation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white font-semibold text-sm hover:shadow-xl transition-all"
              style={{ color: "#2A6475" }}
            >
              Contact Us Directly
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
