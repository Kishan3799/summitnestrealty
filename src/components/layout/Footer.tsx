"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Residential Sales",
  "Luxury Homes",
  "Investment Properties",
  "First-Time Buyers",
  "Relocation Support",
  "Property Valuation",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#050505" }}>
      {/* CTA Band */}
      <div
        style={{
          background: "linear-gradient(90deg, #5A4340 0%, #B8895E 60%, #D8B07A 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-xl font-bold" style={{ color: "#050505" }}>
              Ready to find your dream home?
            </p>
            <p className="font-body text-sm mt-1" style={{ color: "rgba(5,5,5,0.7)" }}>
              Let SummitNest Realty guide you every step of the way.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-body transition-all duration-300 shrink-0 hover:scale-105"
            style={{
              backgroundColor: "#050505",
              color: "#D8B07A",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        style={{ borderBottom: "1px solid rgba(42, 37, 33, 0.5)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #B8895E 0%, #D8B07A 100%)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6"
                  stroke="#050505"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              <div>
                <span
                  className="font-display text-xl font-bold block"
                  style={{ color: "#F5F1EA" }}
                >
                  SummitNest
                </span>
                <span
                  className="text-xs tracking-[0.2em] uppercase font-medium font-body"
                  style={{ color: "#B8895E" }}
                >
                  Realty
                </span>
              </div>
            </Link>
            <p
              className="font-body text-sm leading-relaxed mb-6"
              style={{ color: "rgba(182, 173, 162, 0.65)" }}
            >
              Your trusted real estate partner in Austin, Texas. Helping buyers,
              sellers, and investors make confident decisions since 2012.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { href: "https://instagram.com/SummitNestRealty", label: "Instagram" },
                { href: "https://facebook.com/SummitNestRealty", label: "Facebook" },
                { href: "https://linkedin.com/company/summitnestrealty", label: "LinkedIn" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                  style={{
                    border: "1px solid rgba(42, 37, 33, 0.8)",
                    color: "rgba(182, 173, 162, 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#B8895E";
                    e.currentTarget.style.color = "#B8895E";
                    e.currentTarget.style.backgroundColor = "rgba(184, 137, 94, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(42, 37, 33, 0.8)";
                    e.currentTarget.style.color = "rgba(182, 173, 162, 0.5)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-display text-lg font-semibold mb-5 flex items-center gap-2"
              style={{ color: "#F5F1EA" }}
            >
              <span
                className="w-8 h-0.5 rounded"
                style={{ background: "linear-gradient(90deg, #B8895E, #D8B07A)" }}
              />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm transition-colors duration-200 flex items-center gap-2 group"
                    style={{ color: "rgba(182, 173, 162, 0.6)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#B8895E")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(182, 173, 162, 0.6)")
                    }
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-display text-lg font-semibold mb-5 flex items-center gap-2"
              style={{ color: "#F5F1EA" }}
            >
              <span
                className="w-8 h-0.5 rounded"
                style={{ background: "linear-gradient(90deg, #B8895E, #D8B07A)" }}
              />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span
                    className="font-body text-sm flex items-center gap-2"
                    style={{ color: "rgba(182, 173, 162, 0.6)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "#B8895E" }}
                    />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-display text-lg font-semibold mb-5 flex items-center gap-2"
              style={{ color: "#F5F1EA" }}
            >
              <span
                className="w-8 h-0.5 rounded"
                style={{ background: "linear-gradient(90deg, #B8895E, #D8B07A)" }}
              />
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=512+Riverstone+Blvd+Austin+Texas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 font-body text-sm transition-colors group"
                style={{ color: "rgba(182, 173, 162, 0.6)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#B8895E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(182, 173, 162, 0.6)")
                }
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                512 Riverstone Blvd,<br />Austin, Texas, USA
              </a>
              <a
                href="tel:+15125550189"
                className="flex items-center gap-3 font-body text-sm transition-colors"
                style={{ color: "rgba(182, 173, 162, 0.6)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#B8895E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(182, 173, 162, 0.6)")
                }
              >
                <Phone className="w-4 h-4 shrink-0" />
                +1 (512) 555-0189
              </a>
              <a
                href="mailto:hello@summitnestrealty.com"
                className="flex items-center gap-3 font-body text-sm transition-colors"
                style={{ color: "rgba(182, 173, 162, 0.6)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#B8895E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(182, 173, 162, 0.6)")
                }
              >
                <Mail className="w-4 h-4 shrink-0" />
                hello@summitnestrealty.com
              </a>
            </div>

            <div
              className="mt-6 p-4 rounded-xl"
              style={{
                backgroundColor: "rgba(18, 18, 18, 0.8)",
                border: "1px solid rgba(42, 37, 33, 0.6)",
              }}
            >
              <p
                className="font-body text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "#B8895E" }}
              >
                Office Hours
              </p>
              <p className="font-body text-sm" style={{ color: "rgba(182, 173, 162, 0.6)" }}>
                Mon–Fri: 9:00 AM – 6:00 PM
              </p>
              <p className="font-body text-sm" style={{ color: "rgba(182, 173, 162, 0.6)" }}>
                Saturday: 10:00 AM – 4:00 PM
              </p>
              <p className="font-body text-sm" style={{ color: "rgba(182, 173, 162, 0.6)" }}>
                Sunday: By Appointment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-sm" style={{ color: "rgba(182, 173, 162, 0.35)" }}>
          © {new Date().getFullYear()} SummitNest Realty. All rights reserved.
        </p>
        <p className="font-body text-sm" style={{ color: "rgba(182, 173, 162, 0.35)" }}>
          512 Riverstone Blvd, Austin, Texas, USA
        </p>
      </div>
    </footer>
  );
}
