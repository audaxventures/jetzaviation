import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      {/* Header */}
      <div
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0F2D3D 0%, #2A6475 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "rgba(150, 210, 220, 0.9)" }}
            >
              Get in Touch
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contact Jetz Aviation
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              We welcome inquiries from buyers, sellers, and anyone exploring their business
              aviation options. All conversations are held in strict confidence.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                >
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  We typically respond within one business day.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="right">
              <div className="space-y-6">
                {/* Contact info */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <h3
                    className="text-xl font-bold mb-6"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                  >
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
                      >
                        <Phone size={18} style={{ color: "#2A6475" }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                          Phone
                        </p>
                        <a
                          href="tel:+12042965389"
                          className="text-gray-800 font-medium hover:opacity-80 transition-opacity"
                        >
                          +1 (204) 296-5389
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
                      >
                        <Mail size={18} style={{ color: "#2A6475" }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:mike@jetzaviation.com"
                          className="text-gray-800 font-medium hover:opacity-80 transition-opacity"
                        >
                          mike@jetzaviation.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
                      >
                        <MapPin size={18} style={{ color: "#2A6475" }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                          Location
                        </p>
                        <p className="text-gray-800 font-medium">Winnipeg, MB, Canada</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
                      >
                        <Clock size={18} style={{ color: "#2A6475" }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                          Response Time
                        </p>
                        <p className="text-gray-800 font-medium">Within 1 business day</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                  style={{ height: "200px" }}
                >
                  <div
                    className="w-full h-full flex flex-col items-center justify-center"
                    style={{ backgroundColor: "rgba(42, 100, 117, 0.05)" }}
                  >
                    <MapPin size={32} style={{ color: "#2A6475", opacity: 0.4 }} className="mb-2" />
                    <p className="text-sm text-gray-400">Winnipeg, MB, Canada</p>
                    <p className="text-xs text-gray-300 mt-1">Serving clients nationwide</p>
                  </div>
                </div>

                {/* Confidentiality note */}
                <div
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "rgba(42, 100, 117, 0.06)" }}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold" style={{ color: "#2A6475" }}>
                      Your privacy matters.
                    </span>{" "}
                    All inquiries and conversations with Jetz Aviation are held in strict
                    confidence. We never share client information with third parties.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
