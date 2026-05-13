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

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-3xl overflow-hidden property-card card-glow"
      style={{
        backgroundColor: "#121212",
        border: "1px solid rgba(42, 37, 33, 0.6)",
      }}
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
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 60%)",
          }}
        />

        {/* Tag */}
        {property.tag && (
          <div className="absolute top-4 left-4">
            <span
              className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full font-body"
              style={{
                background: "linear-gradient(90deg, #5A4340 0%, #B8895E 100%)",
                color: "#F5F1EA",
              }}
            >
              <Tag className="w-3 h-3" />
              {property.tag}
            </span>
          </div>
        )}

        {/* Price badge */}
        <div className="absolute bottom-4 right-4">
          <div
            className="px-4 py-2 rounded-xl"
            style={{
              backgroundColor: "rgba(5, 5, 5, 0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(184, 137, 94, 0.3)",
            }}
          >
            <p
              className="font-display font-bold text-lg"
              style={{ color: "#D8B07A" }}
            >
              {property.priceLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3
              className="font-display text-xl font-bold transition-colors duration-300 group-hover:text-accent"
              style={{ color: "#F5F1EA" }}
            >
              {property.title}
            </h3>
            <div className="flex items-center gap-1.5 mt-1.5">
              <MapPin className="w-3.5 h-3.5" style={{ color: "#B8895E" }} />
              <span className="font-body text-sm" style={{ color: "#B6ADA2" }}>
                {property.area}
              </span>
            </div>
          </div>
        </div>

        <p
          className="font-body text-sm mb-4 line-clamp-2"
          style={{ color: "rgba(182, 173, 162, 0.65)" }}
        >
          {property.description}
        </p>

        {/* Stats */}
        <div
          className="flex items-center gap-4 pb-4 border-b"
          style={{ borderColor: "rgba(42, 37, 33, 0.6)" }}
        >
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" style={{ color: "#B8895E" }} />
            <span className="font-body text-sm font-medium" style={{ color: "#B6ADA2" }}>
              {property.beds} Beds
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" style={{ color: "#B8895E" }} />
            <span className="font-body text-sm font-medium" style={{ color: "#B6ADA2" }}>
              {property.baths} Baths
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4" style={{ color: "#B8895E" }} />
            <span className="font-body text-sm font-medium" style={{ color: "#B6ADA2" }}>
              {property.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {property.features.map((feature) => (
            <span
              key={feature}
              className="text-xs px-2.5 py-1 rounded-full font-body font-medium"
              style={{
                backgroundColor: "rgba(184, 137, 94, 0.1)",
                color: "#D8B07A",
                border: "1px solid rgba(184, 137, 94, 0.2)",
              }}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold font-body text-sm transition-all duration-300 group/btn"
          style={{
            background: "linear-gradient(90deg, #5A4340 0%, #B8895E 100%)",
            color: "#F5F1EA",
          }}
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
