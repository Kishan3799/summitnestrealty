"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Heart, Target, Star, ArrowRight, Phone } from "lucide-react";

const specialties = [
  { icon: Heart, title: "First-Time Buyers", desc: "Patient, educational guidance for your first home purchase." },
  { icon: Award, title: "Luxury Homes", desc: "Expert knowledge of Austin's most prestigious properties." },
  { icon: Target, title: "Investment Properties", desc: "Strategic advice to maximize your real estate ROI." },
  { icon: Award, title: "Relocation Support", desc: "Seamless transitions for families moving to Austin." },
];

const values = [
  { title: "Integrity", desc: "We operate with complete transparency and honesty." },
  { title: "Expertise", desc: "Deep local knowledge across all Austin neighborhoods." },
  { title: "Dedication", desc: "Your goals become our mission until the deal is done." },
  { title: "Results", desc: "Proven track record of delivering above-market outcomes." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
} as any;

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#050505" }} className="min-h-screen overflow-hidden">

      {/* Header */}
      <div className="pt-32 pb-20" style={{ background: "linear-gradient(135deg, #0B0B0B 0%, #15110F 55%, #2A1A12 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4" style={{ color: "#F5F1EA" }}>About SummitNest Realty</h1>
            <div className="gold-divider mb-6" />
            <p className="font-body text-xl max-w-2xl leading-relaxed" style={{ color: "rgba(182,173,162,0.75)" }}>
              Helping Austin families, buyers, and investors make confident real estate decisions since 2012.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0e0e0e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "#B8895E" }}>Who We Are</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "#F5F1EA" }}>More Than Just a Realty</h2>
              <div className="gold-divider mb-6" />
              <p className="font-body text-lg leading-relaxed mb-6" style={{ color: "rgba(182,173,162,0.75)" }}>
                SummitNest Realty was founded on a simple belief: every person deserves a real estate partner who truly understands their needs and works tirelessly to achieve them.
              </p>
              <p className="font-body leading-relaxed mb-8" style={{ color: "rgba(182,173,162,0.65)" }}>
                Our approach is straightforward — understand your goals, guide you clearly, and help you move forward with complete confidence. From first-time homebuyers to seasoned investors, we tailor our service to every client's unique situation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Local Market Expertise","Transparent Communication","Strong Negotiation","End-to-End Support"].map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#B8895E" }} />
                    <span className="font-body text-sm" style={{ color: "rgba(182,173,162,0.8)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative" style={{ border: "1px solid rgba(42,37,33,0.5)" }}>
                <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&auto=format&fit=crop&q=80" alt="SummitNest Realty Austin" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.5) 0%, transparent 60%)" }} />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl" style={{ backgroundColor: "#121212", border: "1px solid rgba(42,37,33,0.7)" }}>
                <p className="font-display text-3xl font-bold" style={{ color: "#D8B07A" }}>2012</p>
                <p className="font-body text-sm mt-1" style={{ color: "rgba(182,173,162,0.6)" }}>Founded in Austin</p>
              </div>
              <div className="absolute -top-4 -right-4 p-5 rounded-2xl shadow-xl" style={{ background: "linear-gradient(135deg,#B8895E,#D8B07A)" }}>
                <p className="font-display text-2xl font-bold" style={{ color: "#050505" }}>$85M+</p>
                <p className="font-body text-xs mt-1" style={{ color: "rgba(5,5,5,0.7)" }}>Properties Sold</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agent Profile */}
      <section className="py-20 lg:py-28" style={{ background: "linear-gradient(135deg,#0B0B0B 0%,#15110F 50%,#2A1A12 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>Your Realtor</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "#F5F1EA" }}>Meet Jessica Carter</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-md w-full">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative" style={{ border: "1px solid rgba(42,37,33,0.5)" }}>
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80" alt="Jessica Carter" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 60%)" }} />
              </div>
              <div className="absolute top-6 -right-4 rounded-2xl p-4" style={{ backgroundColor: "rgba(5,5,5,0.8)", backdropFilter: "blur(16px)", border: "1px solid rgba(184,137,94,0.25)" }}>
                <div className="flex gap-1 mb-1">{[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#B8895E" }} />)}</div>
                <p className="font-body text-sm font-semibold" style={{ color: "#F5F1EA" }}>4.9 Rating</p>
                <p className="font-body text-xs" style={{ color: "rgba(182,173,162,0.5)" }}>200+ Reviews</p>
              </div>
              <div className="absolute -bottom-4 left-6 right-6 rounded-2xl p-4 flex gap-6 justify-around" style={{ backgroundColor: "rgba(5,5,5,0.8)", backdropFilter: "blur(16px)", border: "1px solid rgba(184,137,94,0.2)" }}>
                <div className="text-center"><p className="font-display text-2xl font-bold" style={{ color: "#D8B07A" }}>12+</p><p className="font-body text-xs" style={{ color: "rgba(182,173,162,0.6)" }}>Years</p></div>
                <div className="w-px" style={{ backgroundColor: "rgba(42,37,33,0.8)" }} />
                <div className="text-center"><p className="font-display text-2xl font-bold" style={{ color: "#D8B07A" }}>350+</p><p className="font-body text-xs" style={{ color: "rgba(182,173,162,0.6)" }}>Homes Sold</p></div>
                <div className="w-px" style={{ backgroundColor: "rgba(42,37,33,0.8)" }} />
                <div className="text-center"><p className="font-display text-2xl font-bold" style={{ color: "#D8B07A" }}>$85M</p><p className="font-body text-xs" style={{ color: "rgba(182,173,162,0.6)" }}>In Sales</p></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h3 className="font-display text-3xl font-bold mb-1" style={{ color: "#F5F1EA" }}>Jessica Carter</h3>
              <p className="font-body font-medium text-lg mb-2" style={{ color: "#B8895E" }}>Lead Real Estate Agent</p>
              <div className="gold-divider mb-6" />
              <p className="font-body text-lg leading-relaxed mb-6" style={{ color: "rgba(182,173,162,0.75)" }}>
                Jessica Carter is one of Austin's most trusted real estate professionals, with a passion for helping clients navigate one of life's biggest decisions with confidence and clarity.
              </p>
              <p className="font-body leading-relaxed mb-8" style={{ color: "rgba(182,173,162,0.65)" }}>
                Her 12+ years of experience spans residential sales, high-end luxury homes, investment portfolios, and relocation services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specialties.map((spec, i) => (
                  <motion.div key={spec.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="flex items-start gap-3 p-4 rounded-xl transition-colors"
                    style={{ backgroundColor: "rgba(18,18,18,0.8)", border: "1px solid rgba(42,37,33,0.6)" }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(184,137,94,0.12)" }}>
                      <spec.icon className="w-5 h-5" style={{ color: "#B8895E" }} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm" style={{ color: "#F5F1EA" }}>{spec.title}</p>
                      <p className="font-body text-xs mt-0.5" style={{ color: "rgba(182,173,162,0.55)" }}>{spec.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold font-body transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(90deg,#5A4340,#B8895E)", color: "#F5F1EA" }}>
                  Work with Jessica <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+15125550189" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold font-body transition-all duration-300" style={{ border: "1px solid rgba(184,137,94,0.35)", color: "#D8B07A" }}>
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0e0e0e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>What We Stand For</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#F5F1EA" }}>Our Core Values</h2>
            <div className="gold-divider mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div key={val.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 card-glow"
                style={{ backgroundColor: "#121212", border: "1px solid rgba(42,37,33,0.6)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform" style={{ background: "linear-gradient(135deg,#B8895E,#D8B07A)" }}>
                  <span className="font-display text-2xl font-bold" style={{ color: "#050505" }}>{val.title[0]}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3" style={{ color: "#F5F1EA" }}>{val.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(182,173,162,0.65)" }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
