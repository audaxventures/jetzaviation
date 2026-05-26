"use client";

import { useState } from "react";
import { aircraftList, Aircraft } from "@/lib/aircraft-data";
import { X, RotateCcw, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const specs: { key: keyof Aircraft; label: string; unit?: string; highlight?: boolean }[] = [
  { key: "category", label: "Category" },
  { key: "manufacturer", label: "Manufacturer" },
  { key: "range", label: "Range", unit: " nm", highlight: true },
  { key: "passengers", label: "Max Passengers", unit: " pax", highlight: true },
  { key: "cruiseSpeed", label: "Cruise Speed", unit: " ktas", highlight: true },
  { key: "cabinHeight", label: "Cabin Height", highlight: false },
  { key: "cabinWidth", label: "Cabin Width", highlight: false },
  { key: "baggage", label: "Baggage Volume", unit: " cu ft" },
  { key: "approxPrice", label: "Approx. New Price" },
];

interface SelectProps {
  slot: number;
  selected: Aircraft | null;
  onSelect: (slot: number, id: string) => void;
  usedIds: string[];
}

function AircraftSelect({ slot, selected, onSelect, usedIds }: SelectProps) {
  const [open, setOpen] = useState(false);
  const available = aircraftList.filter(
    (a) => !usedIds.includes(a.id) || a.id === selected?.id
  );

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 bg-white text-left transition-colors"
        style={{
          borderColor: selected ? "#2A6475" : "#e5e7eb",
          color: selected ? "#0F2D3D" : "#9ca3af",
        }}
      >
        <span className="text-sm font-medium truncate">
          {selected ? selected.name : `Select Aircraft ${slot}`}
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
          style={{ color: "#2A6475" }}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-30 max-h-72 overflow-y-auto">
          {available.map((aircraft) => (
            <button
              key={aircraft.id}
              onClick={() => {
                onSelect(slot, aircraft.id);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
              style={{
                color: aircraft.id === selected?.id ? "#2A6475" : "#374151",
                backgroundColor: aircraft.id === selected?.id ? "rgba(42,100,117,0.05)" : undefined,
              }}
            >
              <div className="font-medium">{aircraft.name}</div>
              <div className="text-xs text-gray-400">{aircraft.category}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function getBestValue(specKey: keyof Aircraft, selected: Aircraft[]): string | number | null {
  if (specKey === "range" || specKey === "passengers" || specKey === "cruiseSpeed" || specKey === "baggage") {
    const vals = selected.map((a) => Number(a[specKey]));
    return Math.max(...vals);
  }
  return null;
}

export default function AircraftComparisonTool() {
  const [slots, setSlots] = useState<(Aircraft | null)[]>([null, null, null]);

  const handleSelect = (slot: number, id: string) => {
    const aircraft = aircraftList.find((a) => a.id === id) ?? null;
    setSlots((prev) => {
      const next = [...prev];
      next[slot - 1] = aircraft;
      return next;
    });
  };

  const handleRemove = (slot: number) => {
    setSlots((prev) => {
      const next = [...prev];
      next[slot - 1] = null;
      return next;
    });
  };

  const handleReset = () => setSlots([null, null, null]);

  const selected = slots.filter(Boolean) as Aircraft[];
  const usedIds = selected.map((a) => a.id);
  const hasSelection = selected.length > 0;

  return (
    <div>
      {/* Selectors */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-lg" style={{ color: "#0F2D3D" }}>
            Select Aircraft to Compare
          </h2>
          {hasSelection && (
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#2A6475" }}
            >
              <RotateCcw size={14} /> Reset
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((slot) => (
            <div key={slot} className="relative">
              <AircraftSelect
                slot={slot}
                selected={slots[slot - 1]}
                onSelect={handleSelect}
                usedIds={usedIds}
              />
              {slots[slot - 1] && (
                <button
                  onClick={() => handleRemove(slot)}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-200 hover:bg-red-100 flex items-center justify-center transition-colors z-10"
                >
                  <X size={11} className="text-gray-600" />
                </button>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">Select up to 3 aircraft from the dropdown menus above.</p>
      </div>

      {/* Empty state */}
      {!hasSelection && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: "rgba(42, 100, 117, 0.08)" }}
          >
            <ChevronDown size={28} style={{ color: "#2A6475" }} />
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: "#0F2D3D" }}>
            No Aircraft Selected
          </h3>
          <p className="text-gray-500 text-sm">
            Use the selectors above to choose aircraft and begin comparing specifications.
          </p>
        </div>
      )}

      {/* Comparison Table */}
      {hasSelection && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr style={{ backgroundColor: "#2A6475" }}>
                  <th className="text-left px-6 py-4 text-white text-sm font-semibold w-40">
                    Specification
                  </th>
                  {slots.map((aircraft, i) => (
                    <th key={i} className="text-left px-6 py-4 text-white text-sm font-semibold">
                      {aircraft ? (
                        <div>
                          <div className="font-bold">{aircraft.name}</div>
                          <div className="text-xs font-normal opacity-80">{aircraft.category}</div>
                        </div>
                      ) : (
                        <span className="text-white/40 font-normal text-xs italic">—</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, rowIdx) => {
                  const bestValue = getBestValue(spec.key, selected);
                  return (
                    <tr
                      key={spec.key}
                      className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    >
                      <td
                        className="px-6 py-4 text-sm font-semibold"
                        style={{ color: "#0F2D3D" }}
                      >
                        {spec.label}
                      </td>
                      {slots.map((aircraft, i) => {
                        if (!aircraft) {
                          return (
                            <td key={i} className="px-6 py-4 text-sm text-gray-300 text-center">
                              —
                            </td>
                          );
                        }
                        const raw = aircraft[spec.key];
                        const val = raw !== undefined ? String(raw) : "—";
                        const numVal = Number(raw);
                        const isBest =
                          bestValue !== null && !isNaN(numVal) && numVal === bestValue && selected.length > 1;

                        return (
                          <td key={i} className="px-6 py-4 text-sm">
                            <span
                              className={`${isBest ? "font-bold" : "text-gray-700"}`}
                              style={isBest ? { color: "#2A6475" } : undefined}
                            >
                              {val}
                              {spec.unit && !isNaN(numVal) ? spec.unit : ""}
                            </span>
                            {isBest && (
                              <span
                                className="ml-2 text-xs px-1.5 py-0.5 rounded font-semibold"
                                style={{
                                  backgroundColor: "rgba(42, 100, 117, 0.1)",
                                  color: "#2A6475",
                                }}
                              >
                                Best
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CTA */}
      {hasSelection && (
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
          <h3
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
          >
            Ready to explore these aircraft further?
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Contact the Jetz Aviation team for current market pricing, availability, and expert
            guidance on which aircraft best fits your specific mission.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#2A6475" }}
          >
            Talk to an Advisor <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}
