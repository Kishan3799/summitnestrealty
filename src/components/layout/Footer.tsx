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
    <footer className="bg-navy-900 text-white">
      {/* Top CTA Band */}
      <div className="bg-gradient-to-r from-gold-400 to-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-navy-900 text-xl font-bold">
              Ready to find your dream home?
            </p>
            <p className="text-navy-800 text-sm mt-1">
              Let SummitNest Realty guide you every step of the way.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-navy-800 transition-all duration-300 hover:shadow-xl shrink-0"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6"
                  stroke="#0B1F3A"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  SummitNest
                </span>
                <span className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium">
                  Realty
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
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
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-400 hover:text-gold-400 hover:bg-gold-400/10 transition-all duration-300 text-xs"
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-400 rounded"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
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
            <h3 className="font-serif text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-400 rounded"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-400 rounded"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=512+Riverstone+Blvd+Austin+Texas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-gold-400 text-sm transition-colors group"
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 group-hover:text-gold-400" />
                512 Riverstone Blvd,<br />Austin, Texas, USA
              </a>
              <a
                href="tel:+15125550189"
                className="flex items-center gap-3 text-white/60 hover:text-gold-400 text-sm transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +1 (512) 555-0189
              </a>
              <a
                href="mailto:hello@summitnestrealty.com"
                className="flex items-center gap-3 text-white/60 hover:text-gold-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                hello@summitnestrealty.com
              </a>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Office Hours
              </p>
              <p className="text-white/60 text-sm">Mon–Fri: 9:00 AM – 6:00 PM</p>
              <p className="text-white/60 text-sm">Saturday: 10:00 AM – 4:00 PM</p>
              <p className="text-white/60 text-sm">Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} SummitNest Realty. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            512 Riverstone Blvd, Austin, Texas, USA
          </p>
        </div>
      </div>
    </footer>
  );
}
