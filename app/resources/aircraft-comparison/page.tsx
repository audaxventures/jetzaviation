import AircraftComparisonTool from "./AircraftComparisonTool";
import AnimatedSection from "@/components/AnimatedSection";

export default function AircraftComparisonPage() {
  return (
    <div style={{ backgroundColor: "#F9FAFB" }}>
      {/* Page Header */}
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
              Resources
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Aircraft Comparison Tool
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Select up to 3 aircraft to compare specifications side-by-side. Use this tool
              to inform your acquisition decision or shortlist exploration.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Tool */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AircraftComparisonTool />
      </div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          Specifications are approximate and based on manufacturer published data. Actual performance may vary.
          Pricing reflects approximate new list prices and does not represent current market value for pre-owned aircraft.
          Contact Jetz Aviation for current market pricing and availability.
        </p>
      </div>
    </div>
  );
}
