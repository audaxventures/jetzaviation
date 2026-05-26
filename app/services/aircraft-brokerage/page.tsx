import { Handshake } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default async function AircraftBrokeragePage() {
  const heroImage = "https://images.unsplash.com/photo-1474302771604-5c8b3d17b9c1?w=1600&q=80";

  return (
    <ServicePageTemplate
      heroImage={heroImage}
      title="Aircraft Brokerage"
      subtitle="Expert representation for buyers and sellers in the global business aviation market."
      icon={<Handshake size={28} className="text-white" />}
      description={`Jetz Aviation provides full-service aircraft brokerage for both buyers and sellers of pre-owned business jets, turboprops, and helicopters. Whether you are looking to acquire or divest, our team brings unmatched market expertise, transactional skill, and a global network of qualified counterparties to every engagement.

For sellers, we develop comprehensive marketing strategies tailored to your aircraft's unique profile — positioning it accurately in the market, identifying qualified buyers efficiently, and negotiating terms that maximize your proceeds. We handle all aspects of the transaction from listing through closing, including escrow coordination, title insurance, and documentation.

For buyers, we act as your dedicated advocate — searching the entire global market, not just publicly listed aircraft. Our relationships with dealers, flight departments, and individual owners give us access to off-market opportunities that never appear on public listing platforms. We evaluate each candidate critically and present only those that genuinely meet your requirements.`}
      benefits={[
        "Access to on-market and off-market aircraft globally",
        "Expert price negotiation and market positioning",
        "Full transaction management from letter of intent to closing",
        "Pre-buy inspection oversight and coordination",
        "Title search and escrow management",
        "Import/export and registration guidance",
        "Confidential handling of all client information",
        "Post-closing support and transition assistance",
      ]}
      steps={[
        {
          number: "01",
          title: "Discovery & Brief",
          description:
            "We begin with a thorough understanding of your objectives — whether buying or selling — including aircraft specifications, timeline, budget, and any specific requirements or constraints.",
        },
        {
          number: "02",
          title: "Market Analysis & Search",
          description:
            "For buyers, we conduct a comprehensive market search covering public listings and our proprietary network of off-market opportunities. For sellers, we develop a pricing strategy grounded in current market data.",
        },
        {
          number: "03",
          title: "Negotiation & Due Diligence",
          description:
            "We negotiate terms on your behalf and manage the pre-buy inspection process, ensuring any discrepancies are identified and addressed before closing.",
        },
        {
          number: "04",
          title: "Closing & Transition",
          description:
            "We coordinate all closing activities — escrow, title transfer, registration, and documentation — and remain available throughout the post-closing transition period.",
        },
      ]}
    />
  );
}
