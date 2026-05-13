"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "backdrop-blur-xl border-b"
            : "bg-transparent"
        }`}
        style={
          scrolled || !isHome
            ? {
                backgroundColor: "rgba(5, 5, 5, 0.92)",
                borderColor: "rgba(42, 37, 33, 0.8)",
              }
            : {}
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
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
                  className="font-display text-xl font-bold leading-tight block"
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

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-medium font-body transition-colors duration-200 ${
                    pathname === link.href ? "active" : ""
                  }`}
                  style={{
                    color:
                      pathname === link.href
                        ? "#B8895E"
                        : "rgba(245, 241, 234, 0.8)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+15125550189"
                className="hidden md:flex items-center gap-2 text-sm font-body transition-colors duration-200"
                style={{ color: "rgba(245, 241, 234, 0.6)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#B8895E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245, 241, 234, 0.6)")
                }
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+1 (512) 555-0189</span>
              </a>

              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm font-body transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #5A4340 0%, #B8895E 100%)",
                  color: "#F5F1EA",
                  boxShadow: "0 4px 20px rgba(184, 137, 94, 0.25)",
                }}
              >
                Book Consultation
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{ color: "#F5F1EA" }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden backdrop-blur-xl border-t overflow-hidden"
              style={{
                backgroundColor: "rgba(5, 5, 5, 0.97)",
                borderColor: "rgba(42, 37, 33, 0.8)",
              }}
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 rounded-xl text-base font-medium font-body transition-all duration-200"
                      style={{
                        color:
                          pathname === link.href
                            ? "#B8895E"
                            : "rgba(245, 241, 234, 0.85)",
                        backgroundColor:
                          pathname === link.href
                            ? "rgba(184, 137, 94, 0.1)"
                            : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div
                  className="pt-4 border-t mt-4"
                  style={{ borderColor: "rgba(42, 37, 33, 0.6)" }}
                >
                  <Link
                    href="/contact"
                    className="block text-center px-6 py-3 rounded-full font-semibold font-body transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, #5A4340 0%, #B8895E 100%)",
                      color: "#F5F1EA",
                    }}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
