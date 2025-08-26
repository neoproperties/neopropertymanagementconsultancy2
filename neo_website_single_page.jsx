import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Wrench,
  Camera,
  ShieldCheck,
  FileText,
  SunMedium,
  Video,
  LineChart,
  Handshake,
  Home,
  Landmark,
  ClipboardCheck,
  PiggyBank,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// Single-file, production-ready landing page for
// NEO Property Management Consultancy & Services
// TailwindCSS required (auto-included in Canvas). No backend needed.

const services = [
  { icon: Building2, title: "Property Management", desc: "Residential, commercial & resort management, tenant care, collections." },
  { icon: LineChart, title: "Marketing & Leasing", desc: "Professional marketing, listings, viewings, tenant screening & contracts." },
  { icon: Camera, title: "Professional Photography", desc: "Magazine-grade shoots to boost listing appeal and occupancy." },
  { icon: Wrench, title: "Inspections, Repair & Maintenance", desc: "Preventive checkups, reliable contractors, transparent reporting." },
  { icon: FileText, title: "Real Estate Consultancy & Sales", desc: "Acquisition advice, buying/selling support, portfolio strategy." },
  { icon: ClipboardCheck, title: "Due Diligence", desc: "Title verification, property history, liens & compliance checks." },
  { icon: Landmark, title: "Legal & Compliance", desc: "Tax assistance, association dues, documentation & title transfer." },
  { icon: ShieldCheck, title: "Property Recovery & Assistance", desc: "Vacancy mitigation, disposals, arrears recovery & turnover." },
  { icon: Video, title: "CCTV Installation", desc: "End-to-end security camera design, install & monitoring setup." },
  { icon: SunMedium, title: "Solar Installation", desc: "Rooftop solar audits, design-build, utility savings optimization." },
  { icon: PiggyBank, title: "Valuation & Advisory", desc: "Formal real estate valuation, disposal strategy, investment guidance." },
];

const packages = [
  {
    name: "Basic Care",
    price: "₱ — custom",
    features: [
      "Rent collection & statements",
      "Monthly inspections",
      "Repairs coordination",
      "Association & utility payments",
    ],
  },
  {
    name: "Growth",
    featured: true,
    price: "₱ — custom",
    features: [
      "Everything in Basic",
      "Marketing & leasing",
      "Professional photography",
      "Tenant screening & contracts",
      "Tax & compliance assistance",
    ],
  },
  {
    name: "Investor+",
    price: "₱ — custom",
    features: [
      "Acquisition & disposal advisory",
      "Valuation & due diligence",
      "Title transfer & legal coordination",
      "Renovation planning & oversight",
      "Optional CCTV & Solar add‑ons",
    ],
  },
];

const faqs = [
  {
    q: "Do you work with both residential and commercial properties?",
    a: "Yes. We manage condos, houses, subdivisions/HOAs, offices, retail and even resort assets.",
  },
  {
    q: "How do you charge for management?",
    a: "We tailor fees based on property type, scope, and volume. Request a quote for a transparent breakdown.",
  },
  {
    q: "Can you help overseas owners?",
    a: "Absolutely—end‑to‑end remote management with digital reporting and e‑payments.",
  },
  {
    q: "Is solar really worth it?",
    a: "Most rooftops see 20–40% utility savings depending on usage and site conditions.",
  },
];

export default function NEO() {
  const scrollTo = (id) => () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Home className="w-6 h-6" />
            <span>NEO Property Management</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={scrollTo("services")} className="hover:text-slate-950">Services</button>
            <button onClick={scrollTo("packages")} className="hover:text-slate-950">Packages</button>
            <button onClick={scrollTo("about")} className="hover:text-slate-950">About</button>
            <button onClick={scrollTo("contact")} className="hover:text-slate-950">Contact</button>
          </div>
          <button onClick={scrollTo("contact")} className="rounded-2xl px-4 py-2 bg-slate-900 text-white shadow hover:shadow-lg transition">Get a Quote</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />
        <div className="relative container mx-auto px-4 py-24 md:py-32 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Your One‑Stop Property Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-slate-200"
          >
            End‑to‑end property management, leasing, compliance, security and energy solutions—tailored for owners and investors.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={scrollTo("services")} className="rounded-2xl px-5 py-3 bg-white text-slate-900 font-semibold shadow hover:shadow-lg">Explore Services</button>
            <button onClick={scrollTo("contact")} className="rounded-2xl px-5 py-3 border border-white/30 hover:bg-white/10">Book a Consultation</button>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-24 right-0 -mr-24 aspect-square w-[36rem] rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* TRUST BAR */}
      <section className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {["Transparent", "Reliable", "Investor‑Ready", "Tech‑Enabled"].map((t) => (
          <div key={t} className="rounded-2xl bg-white shadow-sm p-4 text-slate-700 border border-slate-200">{t}</div>
        ))}
      </section>

      {/* SERVICES */}
      <section id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">From acquisition to turnover and upgrades—we manage, protect, and maximize your asset.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex p-3 rounded-xl bg-slate-100"><Icon className="w-5 h-5" /></span>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-slate-100/70">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Packages</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Clear bundles you can customize by property type and volume.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className={`rounded-2xl border ${p.featured ? "border-slate-900 bg-white shadow-lg" : "border-slate-200 bg-white shadow-sm"} p-6 flex flex-col`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  {p.featured && (
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-900 text-white">Most Popular</span>
                  )}
                </div>
                <div className="mt-4 text-2xl font-bold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <svg className="w-5 h-5 mt-0.5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={scrollTo("contact")} className={`mt-6 rounded-2xl px-4 py-3 font-semibold transition ${p.featured ? "bg-slate-900 text-white hover:shadow-lg" : "bg-slate-800 text-white hover:shadow"}`}>Request Quote</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About NEO</h2>
            <p className="mt-3 text-slate-700">NEO Property Management Consultancy & Services is a full‑service firm delivering management, leasing, compliance and value‑add solutions. We combine rigorous processes with technology for transparent reporting and investor‑grade execution.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                { icon: ShieldCheck, label: "Transparent" },
                { icon: Handshake, label: "Client‑First" },
                { icon: Building2, label: "Full‑Cycle" },
                { icon: SunMedium, label: "Future‑Ready" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl bg-slate-100 p-3">
                  <Icon className="w-4 h-4" /> <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-slate-200 to-white p-1">
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
              <div className="aspect-[16/10] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <p className="mt-3 text-sm text-slate-600">We manage condos, homes, offices, retail—and even resort assets across the region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-medium list-none flex items-center justify-between">
                  {q}
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-3 text-slate-600 text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s talk about your property</h2>
              <p className="mt-3 text-slate-300">Tell us about your goals—leasing, management, upgrades or disposal—and we’ll tailor a plan.</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> <span>+63 9XX XXX XXXX</span></div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> <span>hello@neopmcs.com</span></div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> <span>Your City, Philippines</span></div>
              </div>
            </div>
            <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We’ll be in touch shortly.");}} className="rounded-2xl bg-white text-slate-800 p-6 shadow-xl border border-slate-200">
              <div className="grid gap-4">
                <input required placeholder="Full Name" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                <input required type="email" placeholder="Email" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                <input placeholder="Phone" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                <select className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400">
                  <option>Service Interest</option>
                  {services.map(s=> <option key={s.title}>{s.title}</option>)}
                </select>
                <textarea rows={4} placeholder="Tell us about your property…" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                <button className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold hover:shadow-lg">Send Inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} NEO Property Management Consultancy & Services</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-900" href="#">Facebook</a>
            <a className="hover:text-slate-900" href="#">Instagram</a>
            <a className="hover:text-slate-900" href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
