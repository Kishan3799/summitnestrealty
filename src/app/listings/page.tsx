"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Search, X } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import { properties } from "@/lib/data";

const areas = ["All Areas", "South Austin", "Central Austin", "Westlake Hills", "North Austin", "Round Rock"];
const propertyTypes = ["All Types", "house", "condo", "villa", "duplex"];
const bedOptions = ["Any", "2+", "3+", "4+", "5+"];

export default function ListingsPage() {
  const [transactionType, setTransactionType] = useState<"all" | "buy" | "rent">("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [beds, setBeds] = useState("Any");
  const [propType, setPropType] = useState("All Types");
  const [area, setArea] = useState("All Areas");
  const [showFilters, setShowFilters] = useState(true);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (transactionType !== "all" && p.type !== transactionType) return false;
      if (p.price < minPrice || p.price > maxPrice) return false;
      if (propType !== "All Types" && p.propertyType !== propType) return false;
      if (area !== "All Areas" && p.area !== area) return false;
      if (beds !== "Any") {
        const minBeds = parseInt(beds);
        if (p.beds < minBeds) return false;
      }
      return true;
    });
  }, [transactionType, minPrice, maxPrice, beds, propType, area]);

  const resetFilters = () => {
    setTransactionType("all");
    setMinPrice(0);
    setMaxPrice(2000000);
    setBeds("Any");
    setPropType("All Types");
    setArea("All Areas");
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Page Header */}
      <div className="bg-navy-gradient pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              Explore Properties
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Property Listings
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Discover beautiful homes, condos, and investment properties across
              Austin, Texas.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-10 overflow-hidden"
        >
          {/* Filter Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-gold-400" />
              <span className="font-semibold text-navy-900">Filters</span>
              <span className="bg-navy-900 text-white text-xs px-2.5 py-0.5 rounded-full font-medium">
                {filtered.length} Results
              </span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={resetFilters}
                className="text-sm text-gray-500 hover:text-navy-900 flex items-center gap-1 transition-colors"
              >
                <X className="w-4 h-4" /> Reset
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="text-sm text-gold-400 font-semibold"
              >
                {showFilters ? "Hide" : "Show"} Filters
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                  {/* Buy / Rent Toggle */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                      Transaction
                    </label>
                    <div className="flex rounded-xl overflow-hidden border border-gray-200">
                      {(["all", "buy", "rent"] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setTransactionType(t)}
                          className={`flex-1 py-2.5 text-sm font-semibold capitalize transition-all ${
                            transactionType === t
                              ? "bg-navy-900 text-white"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                      Max Price: ${(maxPrice / 1000).toFixed(0)}K
                    </label>
                    <input
                      type="range"
                      min={200000}
                      max={2000000}
                      step={50000}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full accent-gold-400 cursor-pointer h-2 rounded-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>$200K</span>
                      <span>$2M+</span>
                    </div>
                  </div>

                  {/* Beds */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                      Bedrooms
                    </label>
                    <select
                      value={beds}
                      onChange={(e) => setBeds(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-navy-900 focus:border-gold-400 transition-colors"
                    >
                      {bedOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                      Property Type
                    </label>
                    <select
                      value={propType}
                      onChange={(e) => setPropType(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-navy-900 focus:border-gold-400 transition-colors capitalize"
                    >
                      {propertyTypes.map((t) => (
                        <option key={t} className="capitalize">
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Area */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                      Area
                    </label>
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-navy-900 focus:border-gold-400 transition-colors"
                    >
                      {areas.map((a) => (
                        <option key={a}>{a}</option>
                      ))}
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
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
                No Properties Found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters to find more properties.
              </p>
              <button
                onClick={resetFilters}
                className="bg-gold-gradient text-navy-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
