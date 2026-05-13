"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Search, X } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import { properties } from "@/lib/data";

const areas = ["All Areas","South Austin","Central Austin","Westlake Hills","North Austin","Round Rock"];
const propertyTypes = ["All Types","house","condo","villa","duplex"];
const bedOptions = ["Any","2+","3+","4+","5+"];

export default function ListingsPage() {
  const [transactionType, setTransactionType] = useState<"all"|"buy"|"rent">("all");
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [beds, setBeds] = useState("Any");
  const [propType, setPropType] = useState("All Types");
  const [area, setArea] = useState("All Areas");
  const [showFilters, setShowFilters] = useState(true);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (transactionType !== "all" && p.type !== transactionType) return false;
      if (p.price > maxPrice) return false;
      if (propType !== "All Types" && p.propertyType !== propType) return false;
      if (area !== "All Areas" && p.area !== area) return false;
      if (beds !== "Any") {
        const minBeds = parseInt(beds);
        if (p.beds < minBeds) return false;
      }
      return true;
    });
  }, [transactionType, maxPrice, beds, propType, area]);

  const resetFilters = () => {
    setTransactionType("all");
    setMaxPrice(2000000);
    setBeds("Any");
    setPropType("All Types");
    setArea("All Areas");
  };

  const selectStyle = {
    backgroundColor: "rgba(18,18,18,0.9)",
    border: "1px solid rgba(42,37,33,0.7)",
    color: "#F5F1EA",
  };

  return (
    <div style={{ backgroundColor: "#050505" }} className="min-h-screen">
      {/* Page Header */}
      <div className="pt-32 pb-16" style={{ background: "linear-gradient(135deg,#0B0B0B 0%,#15110F 55%,#2A1A12 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>Explore Properties</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#F5F1EA" }}>Property Listings</h1>
            <p className="font-body text-lg max-w-xl" style={{ color: "rgba(182,173,162,0.7)" }}>
              Discover beautiful homes, condos, and investment properties across Austin, Texas.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter Panel */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl mb-10 overflow-hidden"
          style={{ backgroundColor: "#121212", border: "1px solid rgba(42,37,33,0.7)" }}>
          {/* Filter Header */}
          <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid rgba(42,37,33,0.5)" }}>
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5" style={{ color: "#B8895E" }} />
              <span className="font-display font-semibold" style={{ color: "#F5F1EA" }}>Filters</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-body font-medium" style={{ backgroundColor: "rgba(184,137,94,0.15)", color: "#D8B07A", border: "1px solid rgba(184,137,94,0.25)" }}>
                {filtered.length} Results
              </span>
            </div>
            <div className="flex gap-4">
              <button onClick={resetFilters} className="font-body text-sm flex items-center gap-1 transition-colors" style={{ color: "rgba(182,173,162,0.55)" }}>
                <X className="w-4 h-4" /> Reset
              </button>
              <button onClick={() => setShowFilters(!showFilters)} className="font-body text-sm font-semibold" style={{ color: "#B8895E" }}>
                {showFilters ? "Hide" : "Show"} Filters
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                  {/* Transaction Type */}
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>Transaction</label>
                    <div className="flex rounded-xl overflow-hidden" style={{ border: "1px solid rgba(42,37,33,0.7)" }}>
                      {(["all","buy","rent"] as const).map((t) => (
                        <button key={t} onClick={() => setTransactionType(t)}
                          className="flex-1 py-2.5 font-body text-sm font-semibold capitalize transition-all"
                          style={{
                            backgroundColor: transactionType === t ? "#B8895E" : "transparent",
                            color: transactionType === t ? "#050505" : "rgba(182,173,162,0.6)",
                          }}>
                          {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Max Price */}
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>
                      Max Price: ${(maxPrice/1000).toFixed(0)}K
                    </label>
                    <input type="range" min={200000} max={2000000} step={50000} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full cursor-pointer h-2 rounded-full" />
                    <div className="flex justify-between font-body text-xs mt-1" style={{ color: "rgba(182,173,162,0.4)" }}>
                      <span>$200K</span><span>$2M+</span>
                    </div>
                  </div>

                  {/* Beds */}
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>Bedrooms</label>
                    <select value={beds} onChange={(e) => setBeds(e.target.value)} className="w-full rounded-xl px-3 py-2.5 font-body text-sm" style={selectStyle}>
                      {bedOptions.map((o) => <option key={o} style={{ backgroundColor: "#121212" }}>{o}</option>)}
                    </select>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>Property Type</label>
                    <select value={propType} onChange={(e) => setPropType(e.target.value)} className="w-full rounded-xl px-3 py-2.5 font-body text-sm capitalize" style={selectStyle}>
                      {propertyTypes.map((t) => <option key={t} className="capitalize" style={{ backgroundColor: "#121212" }}>{t.charAt(0).toUpperCase()+t.slice(1)}</option>)}
                    </select>
                  </div>

                  {/* Area */}
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>Area</label>
                    <select value={area} onChange={(e) => setArea(e.target.value)} className="w-full rounded-xl px-3 py-2.5 font-body text-sm" style={selectStyle}>
                      {areas.map((a) => <option key={a} style={{ backgroundColor: "#121212" }}>{a}</option>)}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((property, i) => <PropertyCard key={property.id} property={property} index={i} />)}
            </motion.div>
          ) : (
            <motion.div key="empty" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "rgba(18,18,18,0.8)", border: "1px solid rgba(42,37,33,0.6)" }}>
                <Search className="w-8 h-8" style={{ color: "rgba(182,173,162,0.4)" }} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2" style={{ color: "#F5F1EA" }}>No Properties Found</h3>
              <p className="font-body mb-6" style={{ color: "rgba(182,173,162,0.6)" }}>Try adjusting your filters to find more properties.</p>
              <button onClick={resetFilters} className="px-8 py-3 rounded-full font-semibold font-body transition-all duration-300" style={{ background: "linear-gradient(90deg,#5A4340,#B8895E)", color: "#F5F1EA" }}>
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
