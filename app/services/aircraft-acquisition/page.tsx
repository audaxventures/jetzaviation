import { Search } from "lucide-react";
import { getUnsplashImage } from "@/lib/unsplash";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default async function AircraftAcquisitionPage() {
  const heroImage = await getUnsplashImage("corporate aviation");

  return (
    <ServicePageTemplate
      heroImage={heroImage}
      title="Aircraft Acquisition & Strategy"
      subtitle="End-to-end acquisition management for discerning buyers seeking the right aircraft."
      icon={<Search size={28} className="text-white" />}
      description={`Acquiring a business aircraft is one of the most complex and consequential capital decisions a corporation or individual can make. The stakes — financial, operational, and reputational — demand a level of expertise and diligence that most buyers cannot develop through a one-time transaction.

Jetz Aviation's aircraft acquisition service provides comprehensive, end-to-end management of the entire purchase process. We begin by developing a detailed understanding of your aviation mission — the routes you fly, the passengers you carry, the airports you use — and use that analysis to define objective selection criteria that go far beyond cabin size and price.

Armed with a clear acquisition brief, we search the global market systematically, evaluating both publicly listed aircraft and off-market opportunities sourced through our extensive industry network. We present only those candidates that genuinely meet your criteria, with detailed comparative analysis that makes the selection decision clear and confident.

Throughout negotiation, pre-buy inspection, and closing, we act as your dedicated advocate — ensuring that your interests are protected at every stage and that you acquire the right aircraft at the right price.`}
      benefits={[
        "Structured mission analysis and requirements definition",
        "Global market search including off-market opportunities",
        "Detailed candidate evaluation and comparison",
        "Independent pre-buy inspection management",
        "Price and terms negotiation",
        "Closing coordination and documentation",
        "Post-acquisition transition support",
        "Crew and operator sourcing guidance",
      ]}
      steps={[
        {
          number: "01",
          title: "Mission Analysis",
          description:
            "We conduct a structured analysis of your aviation requirements — routes, passenger counts, operational bases, runway limitations, and range needs — to define objective selection criteria.",
        },
        {
          number: "02",
          title: "Market Search & Candidate Identification",
          description:
            "We search the full global market, identifying all aircraft that meet your criteria. Our off-market network often surfaces superior candidates not available through public channels.",
        },
        {
          number: "03",
          title: "Evaluation & Selection",
          description:
            "We conduct detailed evaluation of shortlisted candidates — reviewing maintenance records, damage history, equipment status, and current market value — and present a clear recommendation.",
        },
        {
          number: "04",
          title: "Acquisition & Closing",
          description:
            "We manage negotiations, oversee the pre-buy inspection, coordinate closing logistics, and ensure a smooth transfer of title and registration.",
        },
      ]}
    />
  );
}
