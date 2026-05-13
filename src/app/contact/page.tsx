"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const budgetOptions = ["Under $300,000","$300,000 – $500,000","$500,000 – $800,000","$800,000 – $1.2M","$1.2M+","Open to Discuss"];
const areaOptions = ["South Austin","Central Austin","Westlake Hills","North Austin","Round Rock","Other / Not Sure"];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name:"", phone:"", email:"", intent:"buy", budget:"", area:"", message:"" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
  } as any;

  const inputStyle = {
    backgroundColor: "rgba(18,18,18,0.9)",
    border: "1px solid rgba(42,37,33,0.7)",
    color: "#F5F1EA",
    borderRadius: "0.75rem",
    padding: "0.875rem 1rem",
    fontSize: "0.875rem",
    fontFamily: "inherit",
    width: "100%",
  };

  const contactItems = [
    { icon: MapPin, title: "Office Address", content: "512 Riverstone Blvd\nAustin, Texas, USA", link: "https://maps.google.com/?q=Austin+Texas" },
    { icon: Phone, title: "Phone", content: "+1 (512) 555-0189", link: "tel:+15125550189" },
    { icon: Mail, title: "Email", content: "hello@summitnestrealty.com", link: "mailto:hello@summitnestrealty.com" },
    { icon: Clock, title: "Office Hours", content: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM\nSun: By Appointment", link: null },
  ];

  return (
    <div style={{ backgroundColor: "#050505" }} className="min-h-screen overflow-hidden">
      {/* Header */}
      <div className="pt-32 pb-20" style={{ background: "linear-gradient(135deg,#0B0B0B 0%,#15110F 55%,#2A1A12 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>Get In Touch</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4" style={{ color: "#F5F1EA" }}>
              Let&apos;s Talk About Your Next Move
            </h1>
            <div className="gold-divider mb-6" />
            <p className="font-body text-xl max-w-xl" style={{ color: "rgba(182,173,162,0.75)" }}>
              Whether you are buying, selling, or investing, we are here to help every step of the way.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0e0e0e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-1 space-y-5">
              <div>
                <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#B8895E" }}>Contact Info</p>
                <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "#F5F1EA" }}>Reach Out Anytime</h2>
                <div className="gold-divider mb-6" />
              </div>

              {contactItems.map((item, i) => (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex gap-4 p-5 rounded-2xl transition-all duration-300 group"
                  style={{ backgroundColor: "#121212", border: "1px solid rgba(42,37,33,0.6)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300" style={{ backgroundColor: "rgba(184,137,94,0.1)", border: "1px solid rgba(184,137,94,0.2)" }}>
                    <item.icon className="w-5 h-5" style={{ color: "#B8895E" }} />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(182,173,162,0.45)" }}>{item.title}</p>
                    {item.link ? (
                      <a href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                        className="font-body font-medium text-sm leading-relaxed whitespace-pre-line transition-colors" style={{ color: "#F5F1EA" }}>
                        {item.content}
                      </a>
                    ) : (
                      <p className="font-body font-medium text-sm leading-relaxed whitespace-pre-line" style={{ color: "#F5F1EA" }}>{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <div className="pt-2">
                <p className="font-body text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(182,173,162,0.4)" }}>Follow Us</p>
                <div className="flex gap-3">
                  {[{ href:"https://instagram.com/SummitNestRealty", label:"Instagram" },{ href:"https://facebook.com/SummitNestRealty", label:"Facebook" },{ href:"https://linkedin.com/company/summitnestrealty", label:"LinkedIn" }].map(({ href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-11 h-11 rounded-full flex items-center justify-center font-body text-xs font-bold transition-all duration-300"
                      style={{ backgroundColor: "#121212", border: "1px solid rgba(42,37,33,0.7)", color: "rgba(182,173,162,0.5)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#B8895E"; e.currentTarget.style.color = "#B8895E"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42,37,33,0.7)"; e.currentTarget.style.color = "rgba(182,173,162,0.5)"; }}>
                      {label[0]}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2">
              {formState === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 rounded-3xl"
                  style={{ backgroundColor: "#121212", border: "1px solid rgba(42,37,33,0.6)" }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 animate-float" style={{ background: "linear-gradient(135deg,#B8895E,#D8B07A)" }}>
                    <CheckCircle2 className="w-10 h-10" style={{ color: "#050505" }} />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-3" style={{ color: "#F5F1EA" }}>Message Sent!</h3>
                  <p className="font-body text-lg max-w-md mb-8" style={{ color: "rgba(182,173,162,0.7)" }}>
                    Thank you for reaching out. Jessica will contact you within 2 hours during business hours.
                  </p>
                  <button onClick={() => { setFormState("idle"); setForm({ name:"", phone:"", email:"", intent:"buy", budget:"", area:"", message:"" }); }}
                    className="px-8 py-3 rounded-full font-semibold font-body transition-all duration-300"
                    style={{ background: "linear-gradient(90deg,#5A4340,#B8895E)", color: "#F5F1EA" }}>
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-3xl p-8 md:p-10" style={{ backgroundColor: "#121212", border: "1px solid rgba(42,37,33,0.6)" }}>
                  <h2 className="font-display text-2xl font-bold mb-2" style={{ color: "#F5F1EA" }}>Send Us a Message</h2>
                  <p className="font-body text-sm mb-8" style={{ color: "rgba(182,173,162,0.55)" }}>Fill in the details below and we will get back to you promptly.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="md:col-span-2">
                      <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>Full Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange} type="text" placeholder="John Smith" style={inputStyle} />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>Phone Number *</label>
                      <input required name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+1 (512) 000-0000" style={inputStyle} />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>Email Address *</label>
                      <input required name="email" value={form.email} onChange={handleChange} type="email" placeholder="john@email.com" style={inputStyle} />
                    </div>

                    {/* Intent */}
                    <div>
                      <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>I Am Looking To</label>
                      <div className="flex rounded-xl overflow-hidden" style={{ border: "1px solid rgba(42,37,33,0.7)" }}>
                        {[["buy","Buy"],["sell","Sell"],["invest","Invest"]].map(([val, label]) => (
                          <button key={val} type="button" onClick={() => setForm((p) => ({ ...p, intent: val }))}
                            className="flex-1 py-3 font-body text-sm font-semibold transition-all"
                            style={{
                              backgroundColor: form.intent === val ? "#B8895E" : "rgba(18,18,18,0.9)",
                              color: form.intent === val ? "#050505" : "rgba(182,173,162,0.6)",
                            }}>
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>Budget Range</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className="w-full rounded-xl px-4 py-3.5 font-body text-sm" style={{ backgroundColor: "rgba(18,18,18,0.9)", border: "1px solid rgba(42,37,33,0.7)", color: "#F5F1EA" }}>
                        <option value="" style={{ backgroundColor: "#121212" }}>Select your budget</option>
                        {budgetOptions.map((o) => <option key={o} style={{ backgroundColor: "#121212" }}>{o}</option>)}
                      </select>
                    </div>

                    {/* Area */}
                    <div className="md:col-span-2">
                      <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>Preferred Area</label>
                      <select name="area" value={form.area} onChange={handleChange} className="w-full rounded-xl px-4 py-3.5 font-body text-sm" style={{ backgroundColor: "rgba(18,18,18,0.9)", border: "1px solid rgba(42,37,33,0.7)", color: "#F5F1EA" }}>
                        <option value="" style={{ backgroundColor: "#121212" }}>Select preferred area</option>
                        {areaOptions.map((o) => <option key={o} style={{ backgroundColor: "#121212" }}>{o}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "rgba(182,173,162,0.5)" }}>Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about what you are looking for..."
                        className="resize-none" style={{ ...inputStyle, resize: "none" }} />
                    </div>
                  </div>

                  <button type="submit" disabled={formState === "submitting"}
                    className="mt-6 w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold font-body text-base transition-all duration-300"
                    style={formState === "submitting"
                      ? { backgroundColor: "rgba(42,37,33,0.5)", color: "rgba(182,173,162,0.4)", cursor: "not-allowed" }
                      : { background: "linear-gradient(90deg,#5A4340,#B8895E)", color: "#F5F1EA", boxShadow: "0 6px 24px rgba(184,137,94,0.25)" }}>
                    {formState === "submitting" ? (
                      <><div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: "rgba(182,173,162,0.4)", borderTopColor: "transparent" }} /> Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" /> Get Started</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="pb-20" style={{ backgroundColor: "#0e0e0e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold" style={{ color: "#F5F1EA" }}>Visit Our Office</h2>
            <p className="font-body mt-2" style={{ color: "rgba(182,173,162,0.55)" }}>512 Riverstone Blvd, Austin, Texas, USA</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden h-96" style={{ border: "1px solid rgba(42,37,33,0.6)", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
            <iframe
              title="SummitNest Realty Austin Texas Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?q=Austin+Texas+Real+Estate&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              style={{ filter: "invert(90%) hue-rotate(180deg) brightness(0.85)" }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
