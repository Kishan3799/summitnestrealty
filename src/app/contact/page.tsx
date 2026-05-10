"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const budgetOptions = ["Under $300,000", "$300,000 – $500,000", "$500,000 – $800,000", "$800,000 – $1.2M", "$1.2M+", "Open to Discuss"];
const areaOptions = ["South Austin", "Central Austin", "Westlake Hills", "North Austin", "Round Rock", "Other / Not Sure"];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", intent: "buy", budget: "", area: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate async submission (no backend yet)
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
  } as any;

  return (
    <div className="min-h-screen bg-cream-50 overflow-hidden">
      {/* Header */}
      <div className="bg-navy-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">Get In Touch</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
              Let&apos;s Talk About Your Next Move
            </h1>
            <div className="w-16 h-0.5 bg-gold-400 mb-6"></div>
            <p className="text-white/70 text-xl max-w-xl">
              Whether you are buying, selling, or investing, we are here to help every step of the way.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-1 space-y-6"
            >
              <div>
                <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">Contact Info</p>
                <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">Reach Out Anytime</h2>
                <div className="gold-divider mb-6"></div>
              </div>

              {/* Info Cards */}
              {[
                {
                  icon: MapPin,
                  title: "Office Address",
                  content: "512 Riverstone Blvd\nAustin, Texas, USA",
                  link: "https://maps.google.com/?q=Austin+Texas",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+1 (512) 555-0189",
                  link: "tel:+15125550189",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "hello@summitnestrealty.com",
                  link: "mailto:hello@summitnestrealty.com",
                },
                {
                  icon: Clock,
                  title: "Office Hours",
                  content: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM\nSun: By Appointment",
                  link: null,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex gap-4 p-5 rounded-2xl bg-cream-50 border border-gray-100 hover:border-gold-400/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold-gradient transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gold-400 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{item.title}</p>
                    {item.link ? (
                      <a href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                        className="text-navy-900 font-medium text-sm leading-relaxed hover:text-gold-400 transition-colors whitespace-pre-line">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-navy-900 font-medium text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { href: "https://instagram.com/SummitNestRealty", label: "Instagram" },
                    { href: "https://facebook.com/SummitNestRealty", label: "Facebook" },
                    { href: "https://linkedin.com/company/summitnestrealty", label: "LinkedIn" },
                  ].map(({ href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-11 h-11 rounded-full bg-cream-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gold-400 hover:text-gold-400 hover:bg-gold-400/10 transition-all duration-300">
                      <span className="text-xs font-bold">{label[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 bg-cream-50 rounded-3xl border border-gray-100"
                >
                  <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mb-6 animate-float">
                    <CheckCircle2 className="w-10 h-10 text-navy-900" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-navy-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-500 text-lg max-w-md mb-8">
                    Thank you for reaching out. Jessica will contact you within 2 hours during business hours.
                  </p>
                  <button onClick={() => { setFormState("idle"); setForm({ name: "", phone: "", email: "", intent: "buy", budget: "", area: "", message: "" }); }}
                    className="bg-navy-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-gradient hover:text-navy-900 transition-all duration-300">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-cream-50 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                  <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm mb-8">Fill in the details below and we will get back to you promptly.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Full Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange} type="text" placeholder="John Smith"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-navy-900 text-sm bg-white focus:border-gold-400 transition-colors placeholder:text-gray-300" />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Phone Number *</label>
                      <input required name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+1 (512) 000-0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-navy-900 text-sm bg-white focus:border-gold-400 transition-colors placeholder:text-gray-300" />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Email Address *</label>
                      <input required name="email" value={form.email} onChange={handleChange} type="email" placeholder="john@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-navy-900 text-sm bg-white focus:border-gold-400 transition-colors placeholder:text-gray-300" />
                    </div>

                    {/* Intent */}
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">I Am Looking To</label>
                      <div className="flex rounded-xl overflow-hidden border border-gray-200 bg-white">
                        {[["buy", "Buy"], ["sell", "Sell"], ["invest", "Invest"]].map(([val, label]) => (
                          <button key={val} type="button" onClick={() => setForm((p) => ({ ...p, intent: val }))}
                            className={`flex-1 py-3.5 text-sm font-semibold transition-all ${form.intent === val ? "bg-navy-900 text-white" : "text-gray-600 hover:bg-gray-50"}`}>
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Budget Range</label>
                      <select name="budget" value={form.budget} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-navy-900 text-sm bg-white focus:border-gold-400 transition-colors">
                        <option value="">Select your budget</option>
                        {budgetOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>

                    {/* Area */}
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Preferred Area</label>
                      <select name="area" value={form.area} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-navy-900 text-sm bg-white focus:border-gold-400 transition-colors">
                        <option value="">Select preferred area</option>
                        {areaOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                        placeholder="Tell us about what you are looking for..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-navy-900 text-sm bg-white focus:border-gold-400 transition-colors resize-none placeholder:text-gray-300" />
                    </div>
                  </div>

                  <button type="submit" disabled={formState === "submitting"}
                    className={`mt-6 w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                      formState === "submitting"
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gold-gradient text-navy-900 hover:shadow-xl hover:shadow-gold-400/30 hover:scale-[1.02]"
                    }`}>
                    {formState === "submitting" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Get Started
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy-900">Visit Our Office</h2>
            <p className="text-gray-500 mt-2">512 Riverstone Blvd, Austin, Texas, USA</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-96"
          >
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
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
