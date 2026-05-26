import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    quote:
      "Mike and the Jetz Aviation team made what could have been an overwhelming process remarkably straightforward. Their market knowledge and ability to identify the right aircraft at the right price saved us both time and money. I wouldn't hesitate to recommend them to anyone in the market for a business aircraft.",
    location: "Corporate Client, Calgary, AB",
  },
  {
    quote:
      "I had very specific requirements for transatlantic range and cabin configuration. Jetz didn't just find us an aircraft — they found us the right one, at the right price, with a clean maintenance history. Their expertise in the Gulfstream market is second to none.",
    location: "Private Client, Toronto, ON",
  },
  {
    quote:
      "We engaged Jetz Aviation to help us understand the pre-owned market before committing to a new aircraft order. Their valuation work and market analysis saved our company millions and helped us make a far more informed decision. Outstanding professionals.",
    location: "Corporate Flight Department, Vancouver, BC",
  },
  {
    quote:
      "What impressed me most was the discretion. From the very first conversation, Mike made it clear that our privacy was paramount. The entire transaction was handled with absolute professionalism and confidentiality.",
    location: "Private Client, Winnipeg, MB",
  },
  {
    quote:
      "The pre-buy inspection process they managed on our behalf was extraordinarily thorough. They uncovered several maintenance items the seller had not disclosed, and negotiated a significant price reduction as a result. Jetz Aviation paid for themselves many times over.",
    location: "Corporate Client, Edmonton, AB",
  },
  {
    quote:
      "As a first-time aircraft buyer, I was anxious about the process. The Jetz team was patient, educational, and always acted in my best interest. They guided me through every step with clarity and professionalism. I now have exactly the aircraft I needed.",
    location: "Private Client, Montreal, QC",
  },
];

export default async function TestimonialsPage() {
  const heroImage = "https://images.unsplash.com/photo-1474302771604-5c8b3d17b9c1?w=1600&q=80";

  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      <HeroSection
        imageUrl={heroImage}
        headline="Client Testimonials"
        subheadline="What our clients say about working with Jetz Aviation."
        overlay={0.55}
        height="h-[50vh]"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2A6475" }}
            >
              From Our Clients
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
            >
              Trusted by Discerning Clients Across Canada
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our reputation is built on results. Here is what clients say about their
              experience working with the Jetz Aviation team.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote}
                location={t.location}
                delay={(i % 3) * 0.1}
              />
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
              Experience the Jetz Aviation Difference
            </h2>
            <p className="text-gray-300 mb-8">
              Join our roster of satisfied clients and let us find your next aircraft.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white font-semibold text-base transition-all duration-200 hover:shadow-xl"
              style={{ color: "#2A6475" }}
            >
              Schedule a Consultation
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
