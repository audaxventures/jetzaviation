"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const aboutLinks = [
  { label: "About Jetz Aviation", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Testimonials", href: "/about/testimonials" },
];

const servicesLinks = [
  { label: "Aircraft Brokerage", href: "/services/aircraft-brokerage" },
  { label: "Aircraft Acquisition & Strategy", href: "/services/aircraft-acquisition" },
  { label: "Aircraft Valuation", href: "/services/aircraft-valuation" },
  { label: "Aviation Consulting", href: "/services/aviation-consulting" },
];

const resourcesLinks = [
  { label: "Aircraft Comparison Tool", href: "/resources/aircraft-comparison" },
  { label: "Market Insights & News", href: "/resources/market-insights" },
];

interface DropdownProps {
  label: string;
  links: { label: string; href: string }[];
}

function Dropdown({ label, links }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-navy font-medium hover:text-teal transition-colors duration-200 py-2"
        style={{ color: "#0F2D3D" }}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-teal/5 hover:text-teal transition-colors duration-150"
              style={{ "--tw-text-opacity": 1 } as React.CSSProperties}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileResources, setMobileResources] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo width={180} height={50} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Dropdown label="About" links={aboutLinks} />
          <Dropdown label="Services" links={servicesLinks} />
          <Dropdown label="Resources" links={resourcesLinks} />
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "#2A6475" }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          style={{ color: "#0F2D3D" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <div className="px-6 py-8 space-y-2">
            {/* About */}
            <div>
              <button
                onClick={() => setMobileAbout(!mobileAbout)}
                className="w-full flex items-center justify-between py-3 text-lg font-semibold border-b border-gray-100"
                style={{ color: "#0F2D3D" }}
              >
                About
                <ChevronDown
                  size={20}
                  className={`transition-transform ${mobileAbout ? "rotate-180" : ""}`}
                />
              </button>
              {mobileAbout && (
                <div className="mt-2 pl-4 space-y-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-gray-600 hover:text-teal"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services */}
            <div>
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="w-full flex items-center justify-between py-3 text-lg font-semibold border-b border-gray-100"
                style={{ color: "#0F2D3D" }}
              >
                Services
                <ChevronDown
                  size={20}
                  className={`transition-transform ${mobileServices ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServices && (
                <div className="mt-2 pl-4 space-y-2">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-gray-600 hover:text-teal"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources */}
            <div>
              <button
                onClick={() => setMobileResources(!mobileResources)}
                className="w-full flex items-center justify-between py-3 text-lg font-semibold border-b border-gray-100"
                style={{ color: "#0F2D3D" }}
              >
                Resources
                <ChevronDown
                  size={20}
                  className={`transition-transform ${mobileResources ? "rotate-180" : ""}`}
                />
              </button>
              {mobileResources && (
                <div className="mt-2 pl-4 space-y-2">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-gray-600 hover:text-teal"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-3 rounded-full text-white font-semibold"
                style={{ backgroundColor: "#2A6475" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
