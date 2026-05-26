import Image from "next/image";
import { Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import { LinkedinIcon } from "@/components/SocialIcons";

const team = [
  {
    name: "Mike Zaporzan",
    title: "President",
    bio: "Mike Zaporzan founded Jetz Aviation with a vision to bring institutional-grade aircraft acquisition expertise to individual and corporate clients across Canada and internationally. With an extensive background in business aviation transactions, market analysis, and client advisory, Mike has guided clients through the full spectrum of aircraft acquisitions — from light jets to ultra-long-range cabin aircraft.\n\nMike is known for his straight-forward approach, deep market relationships, and ability to navigate complex transactions efficiently. He takes personal responsibility for every client engagement, ensuring that each acquisition reflects the client's specific mission requirements, financial objectives, and operational preferences.\n\nA licensed pilot and passionate aviation enthusiast, Mike brings firsthand appreciation for what makes an aircraft the right fit — technically, operationally, and experientially.",
    avatar: "https://i.pravatar.cc/300?img=11",
    email: "mike@jetzaviation.com",
    linkedin: "https://linkedin.com",
  },
];

export default async function TeamPage() {
  const heroImage = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80";

  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      <HeroSection
        imageUrl={heroImage}
        headline="Our Team"
        subheadline="Experienced aviation professionals dedicated to your success."
        overlay={0.55}
        height="h-[50vh]"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2A6475" }}
            >
              The People Behind Jetz
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Leadership
            </h2>
          </AnimatedSection>

          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.15}>
              <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Avatar */}
                  <div className="relative h-80 md:h-auto">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  {/* Bio */}
                  <div className="md:col-span-2 p-8 lg:p-12">
                    <h3
                      className="text-2xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-base font-semibold mb-6"
                      style={{ color: "#2A6475" }}
                    >
                      {member.title}
                    </p>
                    <div className="space-y-4">
                      {member.bio.split("\n\n").map((para, j) => (
                        <p key={j} className="text-gray-600 leading-relaxed text-sm">
                          {para}
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: "#2A6475" }}
                      >
                        <Mail size={16} /> {member.email}
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: "#2A6475" }}
                      >
                        <LinkedinIcon size={16} /> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Culture section */}
      <section className="py-20" style={{ backgroundColor: "#F0F4F5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Small Team. Outsized Results.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Jetz Aviation is deliberately boutique. We believe that the best client
              outcomes come from senior-level engagement throughout every transaction —
              not from large teams where your file is handed off to junior staff. When you
              work with Jetz, you work directly with leadership, from the first conversation
              to the final closing document.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
