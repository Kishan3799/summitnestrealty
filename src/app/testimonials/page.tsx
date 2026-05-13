"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Brown",
    role: "Home Buyer",
    location: "South Austin",
    rating: 5,
    text: "Jessica helped us find the perfect home in less than three weeks. Professional and responsive every step of the way. We could not have asked for a better experience!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    property: "Modern Family Home — $685,000",
  },
  {
    id: 2,
    name: "Amanda Lewis",
    role: "Home Seller",
    location: "Central Austin",
    rating: 5,
    text: "Excellent communication and strong negotiation skills. Jessica sold our downtown condo above asking price in just 10 days. Highly recommended to anyone looking to sell!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    property: "Downtown Condo — $425,000",
  },
  {
    id: 3,
    name: "Daniel Scott",
    role: "Property Investor",
    location: "North Austin",
    rating: 5,
    text: "Sold our house quickly and above expected value. The process was incredibly smooth from start to finish. Jessica's market knowledge is second to none.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
    property: "Investment Duplex — $735,000",
  },
  {
    id: 4,
    name: "Priya Shah",
    role: "First-Time Buyer",
    location: "Round Rock",
    rating: 5,
    text: "Very trustworthy and knowledgeable about the Austin market. As a first-time buyer I was nervous, but Jessica made the whole process feel effortless and exciting.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
    property: "Cozy Starter Home — $349,000",
  },
];

export default function TestimonialsPage() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  const current = testimonials[active];

  return (
    <div style={{ backgroundColor: "#050505" }} className="min-h-screen overflow-hidden">
      {/* Header */}
      <div className="pt-32 pb-20" style={{ background: "linear-gradient(135deg,#0B0B0B 0%,#15110F 55%,#2A1A12 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>Client Stories</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4" style={{ color: "#F5F1EA" }}>What Our Clients Say</h1>
            <div className="gold-divider mb-6" />
            <div className="flex items-center gap-4">
              <div className="flex gap-1">{[...Array(5)].map((_,i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#B8895E" }} />)}</div>
              <p className="font-body text-lg" style={{ color: "rgba(182,173,162,0.7)" }}>4.9 average rating · 200+ happy clients</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0e0e0e" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>Featured Review</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "#F5F1EA" }}>Client Spotlight</h2>
          </motion.div>

          <div className="relative rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#121212", border: "1px solid rgba(42,37,33,0.7)" }}>
            {/* Quote decoration */}
            <div className="absolute top-6 right-8" style={{ color: "rgba(184,137,94,0.12)" }}>
              <Quote className="w-24 h-24" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }} className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0" style={{ border: "2px solid #B8895E" }}>
                    <Image src={current.image} alt={current.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold" style={{ color: "#F5F1EA" }}>{current.name}</h3>
                    <p className="font-body text-sm font-medium" style={{ color: "#B8895E" }}>{current.role} · {current.location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(current.rating)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#B8895E" }} />)}
                    </div>
                  </div>
                </div>
                <blockquote className="font-editorial text-2xl md:text-3xl leading-relaxed mb-6 italic" style={{ color: "#F5F1EA" }}>
                  &ldquo;{current.text}&rdquo;
                </blockquote>
                <p className="font-body text-sm flex items-center gap-2" style={{ color: "rgba(182,173,162,0.5)" }}>
                  <span className="w-6 h-px rounded" style={{ backgroundColor: "#B8895E" }} />
                  {current.property}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Nav Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={prev} className="w-12 h-12 rounded-full flex items-center justify-center transition-all" style={{ border: "1px solid rgba(42,37,33,0.7)", color: "#F5F1EA" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#B8895E"; e.currentTarget.style.backgroundColor = "rgba(184,137,94,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42,37,33,0.7)"; e.currentTarget.style.backgroundColor = "transparent"; }}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_,i) => (
                  <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all duration-300"
                    style={{ width: i===active ? "2rem" : "0.75rem", height: "0.75rem", backgroundColor: i===active ? "#B8895E" : "rgba(42,37,33,0.8)" }} />
                ))}
              </div>
              <button onClick={next} className="w-12 h-12 rounded-full flex items-center justify-center transition-all" style={{ border: "1px solid rgba(42,37,33,0.7)", color: "#F5F1EA" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#B8895E"; e.currentTarget.style.backgroundColor = "rgba(184,137,94,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42,37,33,0.7)"; e.currentTarget.style.backgroundColor = "transparent"; }}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#050505" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>All Reviews</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#F5F1EA" }}>Every Story Matters</h2>
            <div className="gold-divider mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 card-glow"
                style={{ backgroundColor: "#121212", border: "1px solid rgba(42,37,33,0.6)" }}>
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_,i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#B8895E" }} />)}
                </div>
                <blockquote className="font-editorial text-base leading-relaxed mb-6 italic" style={{ color: "rgba(245,241,234,0.85)" }}>
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-5" style={{ borderTop: "1px solid rgba(42,37,33,0.5)" }}>
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0" style={{ border: "2px solid rgba(184,137,94,0.4)" }}>
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold" style={{ color: "#F5F1EA" }}>{t.name}</p>
                    <p className="font-body text-sm" style={{ color: "rgba(182,173,162,0.55)" }}>{t.role} · {t.location}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-body text-xs italic" style={{ color: "rgba(182,173,162,0.35)" }}>{t.property}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg,#0B0B0B 0%,#15110F 50%,#2A1A12 100%)", borderTop: "1px solid rgba(42,37,33,0.4)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "#F5F1EA" }}>
              Ready to Write <span className="text-gradient-gold">Your Story?</span>
            </h2>
            <p className="font-body text-xl mb-10 max-w-2xl mx-auto" style={{ color: "rgba(182,173,162,0.7)" }}>
              Join hundreds of satisfied clients who trusted SummitNest Realty with their most important move.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold font-body text-base transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(90deg,#5A4340,#B8895E)", color: "#F5F1EA", boxShadow: "0 8px 30px rgba(184,137,94,0.3)" }}>
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
