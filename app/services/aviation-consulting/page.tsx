import { Briefcase } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default async function AviationConsultingPage() {
  const heroImage = "/images/jet-cockpit.jpg";

  return (
    <ServicePageTemplate
      heroImage={heroImage}
      title="Aviation Consulting"
      subtitle="Strategic advisory for every dimension of business aviation ownership and management."
      icon={<Briefcase size={28} className="text-white" />}
      description={`Business aviation is an extraordinarily complex landscape — one where the decisions you make around ownership structure, operational management, crew arrangements, and regulatory compliance can have profound financial and operational consequences.

Jetz Aviation's consulting practice provides strategic advisory services to corporations, family offices, and high net worth individuals navigating the full spectrum of business aviation management challenges. Our experience spans ownership structure optimization, fleet planning, operator selection, aircraft management company evaluation, and regulatory compliance guidance.

Whether you are entering business aviation for the first time and need to understand your options, or you are an established operator seeking to optimize an existing arrangement, we bring the expertise and objectivity to help you make informed decisions. We have no financial relationship with any management company, operator, or OEM, ensuring that our advice is always aligned with your interests — not with referral fees or commission income.

Our consulting engagements are structured to deliver actionable recommendations with clear financial and operational rationale, enabling you to make confident decisions backed by rigorous analysis.`}
      benefits={[
        "Ownership structure analysis (direct, LLC, Part 91, Part 135)",
        "Fleet planning and aircraft type selection",
        "Aircraft management company evaluation and selection",
        "Charter certificate and operator assessment",
        "Crew recruitment and compensation guidance",
        "Hangar and base location analysis",
        "Operating cost modeling and benchmarking",
        "Independent, conflict-free advisory",
      ]}
      steps={[
        {
          number: "01",
          title: "Situation Assessment",
          description:
            "We conduct a thorough review of your current aviation arrangements or planned structure, identifying the key issues, opportunities, and decisions that need to be addressed.",
        },
        {
          number: "02",
          title: "Options Analysis",
          description:
            "We develop and analyze the relevant options for your specific situation, modeling the financial, operational, and risk implications of each alternative.",
        },
        {
          number: "03",
          title: "Recommendations & Strategy",
          description:
            "We present clear, prioritized recommendations with supporting rationale, enabling you to make well-informed decisions with confidence.",
        },
        {
          number: "04",
          title: "Implementation Support",
          description:
            "We remain available to support implementation — whether that means helping select vendors, reviewing contracts, or advising on ongoing management decisions.",
        },
      ]}
    />
  );
}
