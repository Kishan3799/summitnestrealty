"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Users,
  Home,
  Award,
  Handshake,
  ChevronDown,
} from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import StatCounter from "@/components/ui/StatCounter";
import { properties } from "@/lib/data";

const whyChooseUs = [
  {
    icon: MapPin,
    title: "Local Market Expertise",
    desc: "12+ years of deep Austin market knowledge across all neighborhoods.",
  },
  {
    icon: TrendingUp,
    title: "Fast Property Response",
    desc: "We respond to every inquiry within 2 hours — no waiting around.",
  },
  {
    icon: Users,
    title: "Buyer & Seller Support",
    desc: "Full-service guidance for both buying and selling at every step.",
  },
  {
    icon: Home,
    title: "Luxury & Family Specialists",
    desc: "Expert in luxury estates, family homes, and investment properties.",
  },
  {
    icon: Handshake,
    title: "Strong Negotiation Strategy",
    desc: "We consistently secure the best price for our clients.",
  },
  {
    icon: Shield,
    title: "Transparent Service",
    desc: "Honest, clear communication with no hidden fees or surprises.",
  },
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
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
} as any;

export default function HomePage() {
  const [searchType, setSearchType] = useState("All");
  const [searchBeds, setSearchBeds] = useState("Any");
  const [searchBaths, setSearchBaths] = useState("Any");

  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=90"
            alt="Luxury Austin home hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-transparent to-navy-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="max-w-3xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-10 h-0.5 bg-gold-400"></span>
              <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">
                Austin, Texas
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Your Trusted
              <br />
              Partner in{" "}
              <span className="text-gradient-gold">Buying</span>
              <br />
              & Selling Homes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Find beautiful homes, smart investments, and local market
              expertise with a realtor who puts your goals first.
            </motion.p>

            {/* Star Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold-400 fill-gold-400"
                  />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">
                4.9 Rating · 200+ Reviews
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/listings"
                className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-navy-900 px-8 py-4 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-gold-400/40 hover:scale-105 transition-all duration-300"
              >
                View Listings <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 glass text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-base hover:bg-white/20 hover:border-gold-400/50 transition-all duration-300"
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>

          {/* ---- Search Bar ---- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="glass-dark rounded-2xl p-4 md:p-6 max-w-3xl"
          >
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-4">
              Find Your Property
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Type */}
              <div className="relative">
                <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">
                  Type
                </label>
                <div className="relative">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-full appearance-none bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm font-medium focus:border-gold-400 transition-colors cursor-pointer pr-8"
                  >
                    <option value="All" className="bg-navy-900">All</option>
                    <option value="Buy" className="bg-navy-900">Buy</option>
                    <option value="Rent" className="bg-navy-900">Rent</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                </div>
              </div>

              {/* Beds */}
              <div className="relative">
                <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">
                  Beds
                </label>
                <div className="relative">
                  <select
                    value={searchBeds}
                    onChange={(e) => setSearchBeds(e.target.value)}
                    className="w-full appearance-none bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm font-medium focus:border-gold-400 transition-colors cursor-pointer pr-8"
                  >
                    {["Any", "1+", "2+", "3+", "4+", "5+"].map((o) => (
                      <option key={o} value={o} className="bg-navy-900">{o}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                </div>
              </div>

              {/* Baths */}
              <div className="relative">
                <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">
                  Baths
                </label>
                <div className="relative">
                  <select
                    value={searchBaths}
                    onChange={(e) => setSearchBaths(e.target.value)}
                    className="w-full appearance-none bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm font-medium focus:border-gold-400 transition-colors cursor-pointer pr-8"
                  >
                    {["Any", "1+", "2+", "3+", "4+"].map((o) => (
                      <option key={o} value={o} className="bg-navy-900">{o}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex flex-col justify-end">
                <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5 opacity-0">
                  Search
                </label>
                <Link
                  href="/listings"
                  className="flex items-center justify-center gap-2 bg-gold-gradient text-navy-900 px-4 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-gold-400/30 transition-all duration-300"
                >
                  <Search className="w-4 h-4" />
                  Search
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Featured property floating card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 glass-dark rounded-2xl p-5 w-72 animate-float"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gold-400 text-navy-900 text-xs font-bold px-2.5 py-1 rounded-full">
                Just Listed
              </span>
              <span className="text-white/50 text-xs uppercase tracking-wider">
                Featured
              </span>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&auto=format&fit=crop&q=80"
              alt="Featured luxury villa"
              width={280}
              height={160}
              className="w-full h-36 object-cover rounded-xl mb-3"
            />
            <p className="text-white font-serif font-bold text-lg">
              Luxury Villa
            </p>
            <p className="text-gold-400 text-2xl font-bold font-serif">
              $1,180,000
            </p>
            <p className="text-white/60 text-xs mt-1">
              5 Bed · Pool · Smart Home · Westlake Hills
            </p>
            <Link
              href="/listings"
              className="mt-3 flex items-center gap-1 text-gold-400 text-sm font-semibold hover:gap-2 transition-all"
            >
              View Details <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-gold-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              Why SummitNest
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Why Choose Us
            </h2>
            <div className="gold-divider mx-auto mb-5"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We combine local expertise with personalized service to deliver
              outstanding results for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-7 rounded-2xl border border-gray-100 hover:border-gold-400/30 bg-white hover:bg-cream-50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/10 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-gold-gradient transition-all duration-300">
                  <item.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PROPERTIES ==================== */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
                Properties
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-3">
                Featured Listings
              </h2>
              <div className="gold-divider"></div>
            </div>
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 text-navy-900 border border-navy-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-navy-900 hover:text-white transition-all duration-300 shrink-0"
            >
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

      {/* ==================== STATS ==================== */}
      <section className="py-20 bg-navy-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              Our Track Record
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
              Numbers That Speak
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-white/10 hover:border-gold-400/30 transition-colors"
              >
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AGENT TEASER ==================== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Agent Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
                  alt="Jessica Carter - Lead Real Estate Agent"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                {/* Stats badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4 flex items-center gap-4">
                    <div className="text-center">
                      <p className="font-serif text-2xl font-bold text-gold-400">12+</p>
                      <p className="text-white/80 text-xs">Years Exp.</p>
                    </div>
                    <div className="w-px h-10 bg-white/20"></div>
                    <div className="text-center">
                      <div className="flex gap-0.5 mb-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-gold-400 fill-gold-400" />
                        ))}
                      </div>
                      <p className="text-white/80 text-xs">4.9 Rating</p>
                    </div>
                    <div className="w-px h-10 bg-white/20"></div>
                    <div className="text-center">
                      <p className="font-serif text-2xl font-bold text-gold-400">350+</p>
                      <p className="text-white/80 text-xs">Homes Sold</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-navy-900/10 rounded-full blur-2xl"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                Meet Your Agent
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                Jessica Carter
              </h2>
              <p className="text-gold-400 font-medium mb-2">
                Lead Real Estate Agent
              </p>
              <div className="gold-divider mb-6"></div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over 12 years of experience in residential sales, luxury
                homes, and investment properties, Jessica has helped hundreds of
                families find their perfect home in Austin.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our approach is simple: understand your goals, guide you clearly,
                and help you move forward with confidence.
              </p>

              {/* Specialties */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "First-time buyers",
                  "Luxury homes",
                  "Investment properties",
                  "Relocation support",
                ].map((spec) => (
                  <div key={spec} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                    <span className="text-gray-700 text-sm">{spec}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-gradient hover:text-navy-900 transition-all duration-300"
              >
                Learn More About Jessica <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&auto=format&fit=crop&q=80"
            alt="Luxury home CTA"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Ready to Move?
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Make{" "}
              <span className="text-gradient-gold">Your Next Move?</span>
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
              Whether you are buying, selling, or investing, SummitNest Realty
              is here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-navy-900 px-10 py-4 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-gold-400/40 hover:scale-105 transition-all duration-300"
              >
                Get Started Today <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/listings"
                className="inline-flex items-center justify-center gap-2 glass text-white border border-white/30 px-10 py-4 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-300"
              >
                Browse Listings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
