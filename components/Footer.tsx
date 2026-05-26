import Link from "next/link";
import Logo from "./Logo";
import { LinkedinIcon, InstagramIcon, FacebookIcon, XIcon } from "./SocialIcons";

const navGroups = [
  {
    title: "About",
    links: [
      { label: "About Jetz Aviation", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Testimonials", href: "/about/testimonials" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Aircraft Brokerage", href: "/services/aircraft-brokerage" },
      { label: "Acquisition & Strategy", href: "/services/aircraft-acquisition" },
      { label: "Aircraft Valuation", href: "/services/aircraft-valuation" },
      { label: "Aviation Consulting", href: "/services/aviation-consulting" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Aircraft Comparison", href: "/resources/aircraft-comparison" },
      { label: "Market Insights", href: "/resources/market-insights" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2D3D" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Logo width={160} height={45} inverted={true} className="mb-4" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-6">
              Elevating aircraft acquisition and brokerage for high net worth individuals
              and corporations worldwide. Based in Winnipeg, MB.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon size={18} />
              </a>
            </div>
          </div>

          {/* Nav Groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div
          className="border-t py-6 mb-6 flex flex-wrap gap-6 text-sm text-gray-400"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <a href="tel:+12042965389" className="hover:text-white transition-colors">
            +1 (204) 296-5389
          </a>
          <a href="mailto:mike@jetzaviation.com" className="hover:text-white transition-colors">
            mike@jetzaviation.com
          </a>
          <span>Winnipeg, MB, Canada</span>
        </div>

        {/* Copyright */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p>© {new Date().getFullYear()} Jetz Aviation. All rights reserved.</p>
          <p>Aircraft Brokerage &amp; Acquisition Consultancy</p>
        </div>
      </div>
    </footer>
  );
}
