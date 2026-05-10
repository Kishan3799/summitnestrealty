"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, MapPin, Tag } from "lucide-react";
import type { Property } from "@/lib/data";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const tagColors: Record<string, string> = {
  Featured: "bg-gold-400 text-navy-900",
  Luxury: "bg-navy-900 text-gold-400 border border-gold-400/50",
  "City View": "bg-navy-700 text-white",
  Investment: "bg-emerald-600 text-white",
  "First-Time Buyer": "bg-blue-600 text-white",
};

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 property-card border border-gray-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 md:h-64">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />

        {/* Tag */}
        {property.tag && (
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full ${
                tagColors[property.tag] || "bg-gold-400 text-navy-900"
              }`}
            >
              <Tag className="w-3 h-3" />
              {property.tag}
            </span>
          </div>
        )}

        {/* Price badge */}
        <div className="absolute bottom-4 right-4">
          <div className="glass px-4 py-2 rounded-xl">
            <p className="text-white font-serif font-bold text-lg">
              {property.priceLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif text-xl font-bold text-navy-900 group-hover:text-gold-500 transition-colors duration-300">
              {property.title}
            </h3>
            <div className="flex items-center gap-1.5 mt-1.5 text-gray-500">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-sm">{property.area}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-600">
            <Bed className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Bath className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium">{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Square className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium">
              {property.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mt-4">
          {property.features.map((feature) => (
            <span
              key={feature}
              className="text-xs bg-cream-100 text-navy-700 px-2.5 py-1 rounded-full font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="mt-5 w-full flex items-center justify-center gap-2 bg-navy-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 group/btn"
        >
          View Details
          <svg
            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
