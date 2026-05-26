import { BarChart3 } from "lucide-react";
import { getUnsplashImage } from "@/lib/unsplash";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default async function AircraftValuationPage() {
  const heroImage = await getUnsplashImage("jet apron");

  return (
    <ServicePageTemplate
      heroImage={heroImage}
      title="Aircraft Valuation"
      subtitle="Independent, data-driven valuations for every stage of the aircraft lifecycle."
      icon={<BarChart3 size={28} className="text-white" />}
      description={`Whether you are buying, selling, refinancing, insuring, or planning your estate, an accurate aircraft valuation is an essential foundation for sound decision-making. Yet aircraft valuations that merely reference published price guides — without accounting for the individual aircraft's maintenance status, equipment, damage history, and current market dynamics — can differ dramatically from actual transactional value.

Jetz Aviation provides comprehensive aircraft valuations that reflect the true market reality for your specific aircraft. Our valuations go beyond reference guide pricing to incorporate current market comparable analysis, maintenance status assessment, equipment and modification review, and the nuanced supply-demand dynamics of the relevant market segment.

Our valuation reports are appropriate for use in purchase and sale negotiations, insurance placement, estate planning, divorce proceedings, business partnership transactions, and lender collateral assessments. Each report is prepared with the rigor and documentation necessary to withstand scrutiny in any professional or legal context.`}
      benefits={[
        "Current market comparable analysis",
        "Maintenance status and cost assessment",
        "Equipment and avionics evaluation",
        "Damage history review and impact assessment",
        "Detailed written valuation report",
        "Appropriate for insurance, legal, and financial use",
        "Independent — no conflict of interest",
        "Available for all business jet and turboprop types",
      ]}
      steps={[
        {
          number: "01",
          title: "Aircraft Information Gathering",
          description:
            "We collect and review all relevant aircraft information — including logbooks, maintenance records, equipment lists, and any damage or repair history.",
        },
        {
          number: "02",
          title: "Market Research & Comparables",
          description:
            "We analyze current market conditions for the aircraft type, including active listings, recent transactions, and supply-demand dynamics that affect pricing.",
        },
        {
          number: "03",
          title: "Condition & Status Adjustment",
          description:
            "We apply adjustments for the aircraft's specific maintenance status, equipment configuration, cosmetic condition, and any anomalies that affect value relative to market averages.",
        },
        {
          number: "04",
          title: "Valuation Report Delivery",
          description:
            "We deliver a comprehensive written valuation report with supporting documentation suitable for any professional or legal application.",
        },
      ]}
    />
  );
}
