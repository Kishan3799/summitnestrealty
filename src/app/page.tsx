"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Search, MapPin, Star, ArrowRight, CheckCircle2,
  TrendingUp, Shield, Users, Home, Handshake, ChevronDown,
} from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import StatCounter from "@/components/ui/StatCounter";
import SplinePlaceholder from "@/components/ui/SplinePlaceholder";
import { properties } from "@/lib/data";

const whyChooseUs = [
  { icon: MapPin, title: "Local Market Expertise", desc: "12+ years of deep Austin market knowledge across all neighborhoods." },
  { icon: TrendingUp, title: "Fast Property Response", desc: "We respond to every inquiry within 2 hours — no waiting around." },
  { icon: Users, title: "Buyer & Seller Support", desc: "Full-service guidance for both buying and selling at every step." },
  { icon: Home, title: "Luxury & Family Specialists", desc: "Expert in luxury estates, family homes, and investment properties." },
  { icon: Handshake, title: "Strong Negotiation Strategy", desc: "We consistently secure the best price for our clients." },
  { icon: Shield, title: "Transparent Service", desc: "Honest, clear communication with no hidden fees or surprises." },
];

const stats = [
  { value: 350, suffix: "+", label: "Homes Sold" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 85, prefix: "$", suffix: "M+", label: "Property Value Sold" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
} as any;

export default function HomePage() {
  const [searchType, setSearchType] = useState("All");
  const [searchBeds, setSearchBeds] = useState("Any");

  const featuredProperties = properties.slice(0, 3);

  return (
    <div style={{ backgroundColor: "#050505" }} className="overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center" style={{ background: "linear-gradient(135deg, #0B0B0B 0%, #15110F 55%, #2A1A12 100%)" }}>
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #B8895E 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D8B07A 0%, transparent 70%)", filter: "blur(40px)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 mb-6">
                <span className="w-10 h-0.5" style={{ background: "linear-gradient(90deg, #B8895E, #D8B07A)" }} />
                <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: "#B8895E" }}>Austin, Texas</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6" style={{ color: "#F5F1EA" }}>
                Your Trusted<br />
                Partner in{" "}
                <span className="text-gradient-gold">Buying</span><br />
                &amp; Selling Homes
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl" style={{ color: "rgba(182, 173, 162, 0.85)" }}>
                Find beautiful homes, smart investments, and local market expertise with a realtor who puts your goals first.
              </motion.p>

              {/* Stars */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-center gap-3 mb-10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#B8895E" }} />)}
                </div>
                <span className="font-body text-sm font-medium" style={{ color: "rgba(182, 173, 162, 0.7)" }}>4.9 Rating · 200+ Reviews</span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/listings" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold font-body text-base transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(90deg, #5A4340 0%, #B8895E 100%)", color: "#F5F1EA", boxShadow: "0 8px 30px rgba(184,137,94,0.35)" }}>
                  View Listings <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold font-body text-base transition-all duration-300" style={{ border: "1px solid rgba(184,137,94,0.35)", color: "#D8B07A", backgroundColor: "rgba(184,137,94,0.06)" }}>
                  Book Consultation
                </Link>
              </motion.div>

              {/* Search Bar */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }} className="rounded-2xl p-5" style={{ backgroundColor: "rgba(18,18,18,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(42,37,33,0.7)" }}>
                <p className="font-body text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "rgba(182,173,162,0.5)" }}>Find Your Property</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider block mb-1.5" style={{ color: "rgba(182,173,162,0.5)" }}>Type</label>
                    <div className="relative">
                      <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="w-full appearance-none rounded-xl px-3 py-2.5 text-sm font-body font-medium cursor-pointer pr-8" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(42,37,33,0.8)", color: "#F5F1EA" }}>
                        {["All","Buy","Rent"].map(o => <option key={o} value={o} style={{ backgroundColor: "#121212" }}>{o}</option>)}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "rgba(182,173,162,0.5)" }} />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider block mb-1.5" style={{ color: "rgba(182,173,162,0.5)" }}>Beds</label>
                    <div className="relative">
                      <select value={searchBeds} onChange={(e) => setSearchBeds(e.target.value)} className="w-full appearance-none rounded-xl px-3 py-2.5 text-sm font-body font-medium cursor-pointer pr-8" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(42,37,33,0.8)", color: "#F5F1EA" }}>
                        {["Any","1+","2+","3+","4+","5+"].map(o => <option key={o} value={o} style={{ backgroundColor: "#121212" }}>{o}</option>)}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "rgba(182,173,162,0.5)" }} />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider block mb-1.5" style={{ color: "rgba(182,173,162,0.5)" }}>Area</label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-xl px-3 py-2.5 text-sm font-body font-medium cursor-pointer pr-8" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(42,37,33,0.8)", color: "#F5F1EA" }}>
                        {["Any","South","Central","Westlake","North"].map(o => <option key={o} style={{ backgroundColor: "#121212" }}>{o}</option>)}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "rgba(182,173,162,0.5)" }} />
                    </div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <Link href="/listings" className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold font-body text-sm transition-all duration-300" style={{ background: "linear-gradient(90deg, #5A4340 0%, #B8895E 100%)", color: "#F5F1EA" }}>
                      <Search className="w-4 h-4" /> Search
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right — Spline 3D Placeholder */}
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="relative hidden lg:block">
              <SplinePlaceholder className="min-h-[540px]" />

              {/* Floating property card */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 rounded-2xl p-5 w-60" style={{ backgroundColor: "rgba(18,18,18,0.9)", backdropFilter: "blur(16px)", border: "1px solid rgba(184,137,94,0.25)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full font-body" style={{ background: "linear-gradient(90deg,#5A4340,#B8895E)", color: "#F5F1EA" }}>Just Listed</span>
                </div>
                <p className="font-display font-bold" style={{ color: "#F5F1EA" }}>Luxury Villa</p>
                <p className="font-display text-xl font-bold" style={{ color: "#D8B07A" }}>$1,180,000</p>
                <p className="font-body text-xs mt-1" style={{ color: "rgba(182,173,162,0.6)" }}>5 Bed · Pool · Westlake Hills</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-xs uppercase tracking-widest" style={{ color: "rgba(182,173,162,0.4)" }}>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-5 h-8 rounded-full flex justify-center pt-1.5" style={{ border: "1px solid rgba(184,137,94,0.3)" }}>
            <div className="w-1 h-2 rounded-full" style={{ backgroundColor: "#B8895E" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0e0e0e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>Why SummitNest</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#F5F1EA" }}>Why Choose Us</h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(182,173,162,0.7)" }}>
              We combine local expertise with personalized service to deliver outstanding results for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 card-glow cursor-default"
                style={{ backgroundColor: "#121212", border: "1px solid rgba(42,37,33,0.6)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300" style={{ backgroundColor: "rgba(184,137,94,0.1)", border: "1px solid rgba(184,137,94,0.2)" }}>
                  <item.icon className="w-6 h-6" style={{ color: "#B8895E" }} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2" style={{ color: "#F5F1EA" }}>{item.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(182,173,162,0.65)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#050505" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>Properties</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-3" style={{ color: "#F5F1EA" }}>Featured Listings</h2>
              <div className="gold-divider" />
            </div>
            <Link href="/listings" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold font-body text-sm transition-all duration-300 shrink-0" style={{ border: "1px solid rgba(184,137,94,0.35)", color: "#D8B07A" }}>
              View All Properties <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0B0B0B 0%, #15110F 50%, #2A1A12 100%)", borderTop: "1px solid rgba(42,37,33,0.5)", borderBottom: "1px solid rgba(42,37,33,0.5)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>Our Track Record</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "#F5F1EA" }}>Numbers That Speak</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl transition-colors" style={{ border: "1px solid rgba(42,37,33,0.5)" }}>
                <StatCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENT TEASER ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0e0e0e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0" style={{ border: "1px solid rgba(42,37,33,0.5)" }}>
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80" alt="Jessica Carter" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 60%)" }} />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 flex items-center gap-4" style={{ backgroundColor: "rgba(5,5,5,0.75)", backdropFilter: "blur(12px)", border: "1px solid rgba(184,137,94,0.2)" }}>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold" style={{ color: "#D8B07A" }}>12+</p>
                    <p className="font-body text-xs" style={{ color: "rgba(182,173,162,0.7)" }}>Years Exp.</p>
                  </div>
                  <div className="w-px h-10" style={{ backgroundColor: "rgba(42,37,33,0.8)" }} />
                  <div className="text-center">
                    <div className="flex gap-0.5 mb-0.5">{[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 fill-current" style={{ color: "#B8895E" }} />)}</div>
                    <p className="font-body text-xs" style={{ color: "rgba(182,173,162,0.7)" }}>4.9 Rating</p>
                  </div>
                  <div className="w-px h-10" style={{ backgroundColor: "rgba(42,37,33,0.8)" }} />
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold" style={{ color: "#D8B07A" }}>350+</p>
                    <p className="font-body text-xs" style={{ color: "rgba(182,173,162,0.7)" }}>Homes Sold</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full" style={{ background: "radial-gradient(circle, rgba(184,137,94,0.15) 0%, transparent 70%)", filter: "blur(20px)" }} />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "#B8895E" }}>Meet Your Agent</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#F5F1EA" }}>Jessica Carter</h2>
              <p className="font-body font-medium mb-2" style={{ color: "#B8895E" }}>Lead Real Estate Agent</p>
              <div className="gold-divider mb-6" />
              <p className="font-body text-lg leading-relaxed mb-6" style={{ color: "rgba(182,173,162,0.75)" }}>
                With over 12 years of experience in residential sales, luxury homes, and investment properties, Jessica has helped hundreds of families find their perfect home in Austin.
              </p>
              <p className="font-body leading-relaxed mb-8" style={{ color: "rgba(182,173,162,0.65)" }}>
                Our approach is simple: understand your goals, guide you clearly, and help you move forward with confidence.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["First-time buyers","Luxury homes","Investment properties","Relocation support"].map((spec) => (
                  <div key={spec} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#B8895E" }} />
                    <span className="font-body text-sm" style={{ color: "rgba(182,173,162,0.8)" }}>{spec}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold font-body transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(90deg,#5A4340,#B8895E)", color: "#F5F1EA", boxShadow: "0 6px 24px rgba(184,137,94,0.25)" }}>
                Learn More About Jessica <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&auto=format&fit=crop&q=80" alt="Luxury home" fill className="object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(5,5,5,0.82)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(90,67,64,0.4) 0%, transparent 60%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "#B8895E" }}>Ready to Move?</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "#F5F1EA" }}>
              Ready to Make{" "}<span className="text-gradient-gold">Your Next Move?</span>
            </h2>
            <p className="font-body text-xl mb-10 max-w-2xl mx-auto" style={{ color: "rgba(182,173,162,0.75)" }}>
              Whether you are buying, selling, or investing, SummitNest Realty is here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold font-body text-base transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(90deg,#5A4340,#B8895E)", color: "#F5F1EA", boxShadow: "0 8px 30px rgba(184,137,94,0.35)" }}>
                Get Started Today <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/listings" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold font-body text-base transition-all duration-300" style={{ border: "1px solid rgba(184,137,94,0.35)", color: "#D8B07A" }}>
                Browse Listings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
