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
    <div className="min-h-screen bg-cream-50 overflow-hidden">
      {/* Header */}
      <div className="bg-navy-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">Our Story</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">About SummitNest Realty</h1>
            <div className="w-16 h-0.5 bg-gold-400 mb-6"></div>
            <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
              Helping Austin families, buyers, and investors make confident real estate decisions since 2012.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-4">Who We Are</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">More Than Just a Realty</h2>
              <div className="gold-divider mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                SummitNest Realty was founded on a simple belief: every person deserves a real estate partner who truly understands their needs and works tirelessly to achieve them.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our approach is straightforward — understand your goals, guide you clearly, and help you move forward with complete confidence. From first-time homebuyers to seasoned investors, we tailor our service to every client's unique situation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Local Market Expertise", "Transparent Communication", "Strong Negotiation", "End-to-End Support"].map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                    <span className="text-gray-700 text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&auto=format&fit=crop&q=80" alt="SummitNest Realty Austin" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-6 rounded-2xl shadow-xl">
                <p className="font-serif text-3xl font-bold text-gold-400">2012</p>
                <p className="text-white/70 text-sm mt-1">Founded in Austin</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-gold-gradient p-5 rounded-2xl shadow-xl">
                <p className="font-serif text-2xl font-bold text-navy-900">$85M+</p>
                <p className="text-navy-800 text-xs mt-1">Properties Sold</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agent Profile */}
      <section className="section-padding bg-navy-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">Your Realtor</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Meet Jessica Carter</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-md w-full">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80" alt="Jessica Carter - Lead Real Estate Agent" fill className="object-cover" />
              </div>
              <div className="absolute top-6 -right-4 glass-dark rounded-2xl p-4">
                <div className="flex gap-1 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />)}</div>
                <p className="text-white text-sm font-semibold">4.9 Rating</p>
                <p className="text-white/50 text-xs">200+ Reviews</p>
              </div>
              <div className="absolute -bottom-4 left-6 right-6 glass-dark rounded-2xl p-4 flex gap-6 justify-around">
                <div className="text-center"><p className="font-serif text-2xl font-bold text-gold-400">12+</p><p className="text-white/60 text-xs">Years</p></div>
                <div className="w-px bg-white/20"></div>
                <div className="text-center"><p className="font-serif text-2xl font-bold text-gold-400">350+</p><p className="text-white/60 text-xs">Homes Sold</p></div>
                <div className="w-px bg-white/20"></div>
                <div className="text-center"><p className="font-serif text-2xl font-bold text-gold-400">$85M</p><p className="text-white/60 text-xs">In Sales</p></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-white">
              <h3 className="font-serif text-3xl font-bold text-white mb-1">Jessica Carter</h3>
              <p className="text-gold-400 font-medium text-lg mb-2">Lead Real Estate Agent</p>
              <div className="w-12 h-0.5 bg-gold-400 mb-6"></div>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Jessica Carter is one of Austin's most trusted real estate professionals, with a passion for helping clients navigate one of life's biggest decisions with confidence and clarity.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Her 12+ years of experience spans residential sales, high-end luxury homes, investment portfolios, and relocation services. She is known for her tenacious negotiation skills and ability to make the complex feel simple.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specialties.map((spec, i) => (
                  <motion.div key={spec.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold-400/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gold-400/20 flex items-center justify-center shrink-0">
                      <spec.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{spec.title}</p>
                      <p className="text-white/50 text-xs mt-0.5">{spec.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-navy-900 px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300">
                  Work with Jessica <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+15125550189" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">What We Stand For</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Core Values</h2>
            <div className="gold-divider mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div key={val.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-gold-400/30 hover:shadow-xl hover:shadow-gold-400/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <span className="font-serif text-navy-900 text-2xl font-bold">{val.title[0]}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
