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
    <div className="min-h-screen bg-cream-50 overflow-hidden">
      {/* Header */}
      <div className="bg-navy-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">Client Stories</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">What Our Clients Say</h1>
            <div className="w-16 h-0.5 bg-gold-400 mb-6"></div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />)}</div>
              <p className="text-white/70 text-lg">4.9 average rating · 200+ happy clients</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">Featured Review</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">Client Spotlight</h2>
          </motion.div>

          {/* Carousel */}
          <div className="relative bg-cream-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-gold-400/20">
              <Quote className="w-24 h-24" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold-400 shrink-0">
                    <Image src={current.image} alt={current.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-navy-900">{current.name}</h3>
                    <p className="text-gold-400 text-sm font-medium">{current.role} · {current.location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(current.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />)}
                    </div>
                  </div>
                </div>

                <blockquote className="font-serif text-2xl md:text-3xl text-navy-900 leading-relaxed mb-6 italic">
                  &ldquo;{current.text}&rdquo;
                </blockquote>

                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-6 h-px bg-gold-400 rounded"></span>
                  {current.property}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Nav Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-gold-400 hover:bg-gold-400/10 transition-all">
                <ChevronLeft className="w-5 h-5 text-navy-900" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${i === active ? "w-8 h-3 bg-gold-400" : "w-3 h-3 bg-gray-200 hover:bg-gray-300"}`} />
                ))}
              </div>
              <button onClick={next} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-gold-400 hover:bg-gold-400/10 transition-all">
                <ChevronRight className="w-5 h-5 text-navy-900" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">All Reviews</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Every Story Matters</h2>
            <div className="gold-divider mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold-400/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />)}
                </div>
                <blockquote className="text-gray-700 text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400/30 group-hover:border-gold-400 transition-colors shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-navy-900">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role} · {t.location}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-gray-300 italic">{t.property}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write <span className="text-gradient-gold">Your Story?</span>
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trusted SummitNest Realty with their most important move.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold-gradient text-navy-900 px-10 py-4 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-gold-400/40 hover:scale-105 transition-all duration-300">
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
