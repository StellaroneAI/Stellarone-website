import React, { useState, useEffect } from "react";
import {
  Menu, X, ArrowRight, ArrowUpRight, Stethoscope, Activity, Cpu,
  ShieldCheck, FileCheck2, BarChart3, MessageSquare, Mail, MapPin,
  Phone, CheckCircle2, Sparkles,
} from "lucide-react";

/* ---------------------------------------------------------
   StellarOne Health Technologies — corporate site
   Structural cues (hero / pillars / product spotlight / CTA)
   are inspired by a doctor-consultation template the client
   shared; all visuals, copy, and layout details are original
   and built around StellarOne's real products.
--------------------------------------------------------- */

const TOKENS = `
  :root {
    --ink: #0A1628;
    --ink-soft: #223852;
    --ink-hair: rgba(243,245,241,0.14);
    --paper: #F7F9FC;
    --paper-dim: #EEF2F8;
    --steel: #5A6C82;
    --teal: #1D8F87;
    --teal-deep: #146762;
    --amber: #C97F2E;
    --line: rgba(11, 35, 62, 0.12);
    --line-strong: rgba(11, 35, 62, 0.2);
  }
  .sh-root {
    font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
    color: var(--ink);
    background: var(--paper);
    min-height: 100vh;
    overflow-x: hidden;
    letter-spacing: 0;
  }
  .sh-root button,
  .sh-root input,
  .sh-root textarea { font: inherit; }
  .sh-root button { cursor: pointer; }
  .sh-nav-shell {
    box-shadow: 0 1px 0 rgba(16,27,45,0.05), 0 16px 36px -28px rgba(16,27,45,0.45);
  }
  .sh-nav-shell > div:first-child { min-height: 72px; }
  .sh-nav-brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
  }
  .sh-brand-name {
    display: inline-flex;
    align-items: baseline;
    gap: 0.35rem;
    white-space: nowrap;
  }
  .sh-brand-primary {
    font-weight: 700;
    background: linear-gradient(105deg, #0a1628 0%, #1d8f87 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .sh-brand-health {
    display: inline-block;
    padding: 0.3em 0.56em 0.24em;
    border: 1px solid rgba(31,138,130,0.35);
    border-radius: 999px;
    background: rgba(31,138,130,0.16);
    color: var(--teal-deep);
    font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
    font-size: 0.42em;
    font-weight: 700;
    letter-spacing: 0.12em;
    line-height: 1;
    text-transform: uppercase;
    vertical-align: middle;
  }
  .sh-nav-brand::before {
    content: "";
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 999px;
    background: radial-gradient(circle at 35% 35%, #3dd6cc 0%, var(--teal) 60%);
    box-shadow: 0 0 0 5px rgba(31,138,130,0.14);
  }
  .sh-hero-copy { max-width: 38rem; }
  .sh-hero-title,
  .sh-section-heading { text-wrap: balance; }
  .sh-section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.74rem;
    letter-spacing: 0.14em;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--steel);
  }
  .sh-card {
    border-radius: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .sh-card:hover {
    transform: translateY(-4px);
    border-color: rgba(31,138,130,0.34);
    box-shadow: 0 16px 32px -20px rgba(16,27,45,0.4);
  }
  .sh-stat { min-height: 5.5rem; }
  @media (max-width: 767px) {
    .sh-nav-shell > div:first-child { min-height: 64px; }
    .sh-hero-title { font-size: clamp(2.45rem, 12vw, 4rem); }
    .sh-stat { min-height: 0; }
  }
  .sh-serif { font-family: 'Newsreader', Georgia, serif; }
  .sh-nav-shell {
    background: rgba(247,249,252,0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  .sh-btn-primary {
    background: var(--ink);
    color: var(--paper);
    border-radius: 10px;
    transition: background 0.2s ease, transform 0.15s ease;
  }
  .sh-btn-primary:hover { background: var(--teal-deep); transform: translateY(-1px); }
  .sh-btn-on-dark {
    background: var(--teal);
    color: var(--ink);
    border-radius: 10px;
    transition: background 0.2s ease, transform 0.15s ease;
  }
  .sh-btn-on-dark:hover { background: #29a89f; transform: translateY(-1px); }
  .sh-btn-ghost {
    border: 1px solid var(--line);
    color: var(--ink);
    border-radius: 10px;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .sh-btn-ghost:hover { border-color: var(--ink); background: rgba(16,27,45,0.03); }
  .sh-btn-ghost-dark {
    border: 1px solid var(--ink-hair);
    color: var(--paper);
    border-radius: 10px;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .sh-btn-ghost-dark:hover { border-color: rgba(243,245,241,0.4); background: rgba(243,245,241,0.05); }
  .sh-nav-link { position: relative; color: var(--ink-soft); }
  .sh-nav-link.active { color: var(--ink); }
  .sh-nav-link.active::after {
    content: ""; position: absolute; left: 0; right: 0; bottom: -6px;
    height: 2px; background: var(--teal);
  }
  .sh-orbit-path {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: sh-draw 1.4s ease forwards;
  }
  .sh-orbit-node { opacity: 0; animation: sh-fade 0.6s ease forwards; }
  @keyframes sh-draw { to { stroke-dashoffset: 0; } }
  @keyframes sh-fade { to { opacity: 1; } }
  @media (prefers-reduced-motion: reduce) {
    .sh-orbit-path, .sh-orbit-node { animation: none; stroke-dashoffset: 0; opacity: 1; }
  }
  .sh-field {
    border: 1px solid var(--line);
    background: white;
    border-radius: 10px;
  }
  .sh-field:focus { outline: 2px solid var(--teal); outline-offset: 1px; }
  .sh-card {
    background: white;
    border: 1px solid var(--line);
    box-shadow: 0 1px 2px rgba(16,27,45,0.04), 0 12px 24px -18px rgba(16,27,45,0.25);
  }
  .sh-watermark { opacity: 0.06; pointer-events: none; }
  .sh-kpi {
    border: 1px solid rgba(169,192,216,0.34);
    border-radius: 12px;
    background: rgba(10,22,40,0.42);
  }
  .sh-trust-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }
  @media (min-width: 768px) {
    .sh-trust-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .sh-chip {
    border-radius: 999px;
    border: 1px solid var(--line);
    padding: 0.5rem 0.85rem;
    font-size: 0.76rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink-soft);
    background: white;
    text-align: center;
    font-weight: 600;
  }
`;

function FontImport() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,500&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
      ${TOKENS}
    `}</style>
  );
}

/* Fine dot-grid texture used behind dark sections for depth without gradients */
function DotGrid({ light = false }) {
  const dot = light ? "rgba(243,245,241,0.35)" : "rgba(16,27,45,0.18)";
  return (
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
      <defs>
        <pattern id="sh-dots" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill={dot} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sh-dots)" />
    </svg>
  );
}

const NAV_ITEMS = ["Home", "About", "Services", "Contact"];

function BrandMark({ className = "" }) {
  return (
    <span className={`sh-brand-name ${className}`.trim()}>
      <span className="sh-brand-primary">Stellarone</span> <span className="sh-brand-health">Health</span>
    </span>
  );
}

function Nav({ page, setPage, mobileOpen, setMobileOpen }) {
  return (
    <header className="sh-nav-shell sticky top-0 z-[1000]" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => setPage("Home")} className="sh-nav-brand sh-serif text-xl tracking-tight" style={{ color: "var(--ink)" }}>
          <BrandMark />
        </button>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`sh-nav-link pb-1 ${page === item ? "active" : ""}`}
            >
              {item}
            </button>
          ))}
          <button onClick={() => setPage("Contact")} className="sh-btn-primary text-sm px-4 py-2 flex items-center gap-1.5">
            Talk to us <ArrowRight size={14} />
          </button>
        </nav>
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ borderTop: "1px solid var(--line)" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => { setPage(item); setMobileOpen(false); }}
              className="text-left py-1 text-sm"
              style={{ color: page === item ? "var(--ink)" : "var(--ink-soft)" }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function OrbitGraphic() {
  const nodes = [
    { label: "Care", cx: 210, cy: 60, color: "var(--amber)", delay: "0.9s" },
    { label: "Operations", cx: 110, cy: 190, color: "#8FA3B0", delay: "1.1s" },
    { label: "Automation", cx: 310, cy: 190, color: "var(--teal)", delay: "1.3s" },
  ];
  return (
    <svg viewBox="0 0 420 260" className="w-full max-w-md mx-auto" role="img" aria-label="Diagram of care, operations, and automation converging">
      <line x1="210" y1="60" x2="210" y2="130" stroke="var(--ink-hair)" strokeWidth="1.5" className="sh-orbit-path" style={{ animationDelay: "0.2s" }} />
      <line x1="110" y1="190" x2="210" y2="130" stroke="var(--ink-hair)" strokeWidth="1.5" className="sh-orbit-path" style={{ animationDelay: "0.4s" }} />
      <line x1="310" y1="190" x2="210" y2="130" stroke="var(--ink-hair)" strokeWidth="1.5" className="sh-orbit-path" style={{ animationDelay: "0.6s" }} />
      <circle cx="210" cy="130" r="28" fill="var(--paper)" className="sh-orbit-node" style={{ animationDelay: "0.7s" }} />
      <text x="210" y="134" textAnchor="middle" fill="var(--ink)" fontSize="10" fontFamily="IBM Plex Sans" fontWeight="600" className="sh-orbit-node" style={{ animationDelay: "0.7s" }}>
        StellarOne
      </text>
      {nodes.map((n) => (
        <g key={n.label} className="sh-orbit-node" style={{ animationDelay: n.delay }}>
          <circle cx={n.cx} cy={n.cy} r="30" fill="#0E1826" stroke={n.color} strokeWidth="2" />
          <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill="var(--paper)" fontSize="11" fontFamily="IBM Plex Sans" fontWeight="500">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

const HOME_HIGHLIGHTS = [
  { label: "Patient Access", value: "Connected" },
  { label: "RCM Workflows", value: "Automated" },
  { label: "Care Delivery", value: "Multilingual" },
];

function Hero({ setPage }) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <DotGrid light />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="sh-hero-copy">
          <p className="text-sm mb-5 flex items-center gap-2" style={{ color: "#A9C0D8" }}>
            <Sparkles size={15} style={{ color: "var(--teal)" }} /> Healthcare technology &amp; services
          </p>
          <h1 className="sh-hero-title sh-serif text-4xl md:text-6xl leading-[1.08] mb-7 tracking-tight">
            Enterprise-grade AI infrastructure for healthcare organizations.
          </h1>
          <p className="text-base leading-relaxed mb-9 max-w-xl" style={{ color: "#C4D1DE" }}>
            StellarOne Health Technologies helps provider and revenue teams modernize patient access,
            coding, and care workflows with secure automation built for operational reliability.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setPage("Services")} className="sh-btn-on-dark px-5 py-3 text-sm flex items-center gap-2 font-medium">
              Explore what we build <ArrowRight size={15} />
            </button>
            <button onClick={() => setPage("About")} className="sh-btn-ghost-dark px-5 py-3 text-sm">
              Our story
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 text-center">
            {HOME_HIGHLIGHTS.map((kpi) => (
              <div key={kpi.label} className="sh-kpi px-3 py-3">
                <p className="text-xl sh-serif">{kpi.value}</p>
                <p className="text-[11px] uppercase tracking-[0.09em]" style={{ color: "#A9C0D8" }}>{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
        <OrbitGraphic />
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-y" style={{ borderColor: "var(--line)", background: "white" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-end md:justify-between mb-8">
          <div>
            <p className="sh-section-eyebrow mb-3">Enterprise readiness</p>
            <h2 className="sh-section-heading sh-serif text-3xl leading-tight max-w-2xl">Built for dependable operations and accountable AI adoption.</h2>
          </div>
          <div className="text-sm flex items-center gap-2 md:justify-end" style={{ color: "var(--ink-soft)" }}>
            <ShieldCheck size={17} style={{ color: "var(--teal)" }} />
            Supports compliance-focused healthcare workflows
          </div>
        </div>
        <div className="sh-trust-grid">
          {["Revenue Cycle Operations", "Patient Access Teams", "Clinical Support", "AI Governance"].map((item) => (
            <div key={item} className="sh-chip">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    title: "Patient Care",
    color: "var(--amber)",
    icon: Stethoscope,
    text: "Multilingual, AI-supported telehealth that helps people reach a doctor and understand their symptoms in their own language, wherever they are.",
  },
  {
    title: "Healthcare Operations",
    color: "var(--ink-soft)",
    icon: Activity,
    text: "Revenue cycle workflows — eligibility checks, medical coding, denial tracking — built to run with less manual effort and fewer errors.",
  },
  {
    title: "Intelligent Automation",
    color: "var(--teal)",
    icon: Cpu,
    text: "AI agents and models sit underneath both sides of the business, quietly doing the repetitive work so people can focus on judgment calls.",
  },
];

function PillarsSection() {
  return (
    <section className="relative border-t" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="sh-section-heading sh-serif text-3xl mb-12 max-w-lg">Three worlds, one connective layer</h2>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
          {PILLARS.map((p) => (
            <div key={p.title} className="relative">
              <div className="absolute -top-2 -left-2 sh-watermark" aria-hidden="true">
                <p.icon size={72} style={{ color: p.color }} />
              </div>
              <div style={{ borderLeft: `3px solid ${p.color}`, paddingLeft: "1.25rem" }} className="relative">
                <p.icon size={22} style={{ color: p.color }} className="mb-4" />
                <h3 className="text-lg font-medium mb-2.5 sh-serif">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--steel)" }}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection({ setPage }) {
  return (
    <section style={{ background: "var(--paper-dim)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="sh-section-eyebrow mb-4">Platform modules</p>
        <h2 className="sh-serif text-3xl mb-12">What we build</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="sh-card relative overflow-hidden h-full">
            <div style={{ height: "4px", background: "var(--teal)" }} />
            <div className="p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <BarChart3 size={20} style={{ color: "var(--teal)" }} />
                <h3 className="text-xl font-medium sh-serif">Stellar.AI</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--steel)" }}>
                An AI-powered revenue cycle management suite for US healthcare organizations —
                covering eligibility, coding, and performance visibility.
              </p>
              <ul className="space-y-2.5 text-sm mb-7">
                {[
                  "Eligibility & benefits verification",
                  "Medical coding agent for CPT / ICD-10",
                  "RCM KPI dashboards (denials, AR aging, payer mix)",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={15} style={{ color: "var(--teal)", marginTop: "2px", flexShrink: 0 }} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setPage("Services")} className="text-sm flex items-center gap-1 font-medium" style={{ color: "var(--teal-deep)" }}>
                See the full suite <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
          <div className="sh-card relative overflow-hidden h-full">
            <div style={{ height: "4px", background: "var(--amber)" }} />
            <div className="p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <MessageSquare size={20} style={{ color: "var(--amber)" }} />
                <h3 className="text-xl font-medium sh-serif">EasyMed</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--steel)" }}>
                A multilingual telehealth app pairing patients with doctors, with an AI symptom
                checker to help people describe what they're feeling.
              </p>
              <ul className="space-y-2.5 text-sm mb-7">
                {[
                  "AI symptom checker in English, Hindi, Tamil, Telugu",
                  "Direct patient–doctor query and chat",
                  "Available on web, iOS, and Android",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={15} style={{ color: "var(--amber)", marginTop: "2px", flexShrink: 0 }} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setPage("Services")} className="text-sm flex items-center gap-1 font-medium" style={{ color: "var(--ink)" }}>
                See the full suite <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ setPage }) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <DotGrid light />
      <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <h2 className="sh-serif text-3xl max-w-xl leading-tight">Ready to modernize care delivery and revenue workflows with enterprise-grade automation?</h2>
        <button onClick={() => setPage("Contact")} className="sh-btn-on-dark px-5 py-3 text-sm flex items-center gap-2 flex-shrink-0 font-medium">
          Get in touch <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", background: "var(--paper-dim)" }}>
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <p className="sh-serif text-xl mb-2">
            <BrandMark />
          </p>
          <p style={{ color: "var(--steel)" }}>Healthcare technology company serving provider organizations across the United States.</p>
        </div>
        <div>
          <p className="font-medium mb-3" style={{ color: "var(--ink)" }}>Site</p>
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button key={item} onClick={() => setPage(item)} className="text-left" style={{ color: "var(--ink-soft)" }}>{item}</button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-medium mb-3" style={{ color: "var(--ink)" }}>Products</p>
          <div className="flex flex-col gap-2" style={{ color: "var(--ink-soft)" }}>
            <span>Stellar.AI</span>
            <span>EasyMed</span>
          </div>
        </div>
        <div>
          <p className="font-medium mb-3" style={{ color: "var(--ink)" }}>Contact</p>
          <div className="flex flex-col gap-2" style={{ color: "var(--ink-soft)" }}>
            <a href="mailto:hello@stellaronehealth.com" className="hover:underline underline-offset-2">hello@stellaronehealth.com</a>
            <a href="tel:+919180328119" className="hover:underline underline-offset-2">+91 91803 28119</a>
            <span>India</span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-8 text-xs" style={{ color: "var(--steel)", borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
        © {new Date().getFullYear()} StellarOne Health Technologies Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      <TrustSection />
      <PillarsSection />
      <ProductsSection setPage={setPage} />
      <CTASection setPage={setPage} />
    </>
  );
}

function AboutPage() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-14">
        <h1 className="sh-serif text-4xl md:text-5xl mb-6 max-w-2xl leading-tight">
          Built at the intersection of care and code.
        </h1>
        <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--ink-soft)" }}>
          StellarOne Health Technologies started with a simple observation: the systems that treat
          patients and the systems that run healthcare businesses rarely talk to each other well.
          We build the layer in between — AI that quietly supports both the clinical and operational
          sides of healthcare.
        </p>
      </div>

      <div className="border-y" style={{ borderColor: "var(--line)", background: "var(--paper-dim)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="sh-serif italic text-2xl md:text-3xl leading-snug" style={{ color: "var(--ink)" }}>
            "We're not choosing between patient care and operational efficiency — we're building the
            connective layer that makes both work better, together."
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-4 gap-8 mb-20 text-sm">
          {[
            { label: "Headquarters", value: "India" },
            { label: "Primary market", value: "United States" },
            { label: "Product lines", value: "Stellar.AI & EasyMed" },
            { label: "Focus", value: "Healthcare AI & RCM" },
          ].map((f) => (
            <div key={f.label} className="sh-stat" style={{ borderTop: "2px solid var(--ink)", paddingTop: "0.75rem" }}>
              <p style={{ color: "var(--steel)" }} className="mb-1">{f.label}</p>
              <p className="font-medium sh-serif text-base">{f.value}</p>
            </div>
          ))}
        </div>

        <h2 className="sh-serif text-2xl mb-10">What guides the work</h2>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
          {PILLARS.map((p) => (
            <div key={p.title} style={{ borderLeft: `3px solid ${p.color}`, paddingLeft: "1.25rem" }}>
              <h3 className="text-base font-medium mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--steel)" }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const SERVICES = [
  {
    title: "Eligibility & Benefits Verification",
    icon: ShieldCheck,
    color: "var(--teal)",
    text: "Automated checks against payer eligibility and benefits data, so front-office staff spend less time on hold with insurers.",
  },
  {
    title: "Medical Coding Agent",
    icon: FileCheck2,
    color: "var(--ink-soft)",
    text: "An AI agent that assists with CPT / ICD-10 coding, informed by NCCI modifier logic, to support coding accuracy and consistency.",
  },
  {
    title: "RCM KPI Dashboards",
    icon: BarChart3,
    color: "var(--amber)",
    text: "Live dashboards covering denials, AR aging, and payer mix, giving RCM teams the same visibility a Power BI report would, tailored to their data.",
  },
  {
    title: "EasyMed Telehealth",
    icon: MessageSquare,
    color: "var(--teal)",
    text: "A multilingual telehealth app with an AI symptom checker and patient–doctor chat, available on web and native mobile.",
  },
];

function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="sh-serif text-4xl md:text-5xl mb-4 max-w-2xl leading-tight">Services & products</h1>
      <p className="text-base leading-relaxed max-w-2xl mb-16" style={{ color: "var(--ink-soft)" }}>
        Two product lines, one underlying approach: use AI to remove friction, not to replace judgment.
      </p>
      <div className="grid md:grid-cols-2 gap-x-14 gap-y-14 mb-20">
        {SERVICES.map((s) => (
          <div key={s.title} className="flex gap-4">
            <s.icon size={22} style={{ color: s.color, flexShrink: 0, marginTop: "2px" }} />
            <div>
              <h3 className="text-base font-medium mb-2 sh-serif text-lg">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--steel)" }}>{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-10" style={{ borderTop: "1px solid var(--line)" }}>
        <p className="text-xs mb-4 tracking-wide" style={{ color: "var(--steel)" }}>Built on</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ color: "var(--ink-soft)" }}>
          {["React", "FastAPI", "LangChain", "ChromaDB", "Node / Express", "Vercel"].map((t, i, arr) => (
            <span key={t} className="flex items-center gap-8">
              {t}{i < arr.length - 1 && <span style={{ color: "var(--line)" }}>/</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14">
      <div>
        <h1 className="sh-serif text-4xl md:text-5xl mb-6 leading-tight">Let's talk.</h1>
        <p className="text-base leading-relaxed mb-8 max-w-sm" style={{ color: "var(--ink-soft)" }}>
          Whether you're evaluating Stellar.AI, EasyMed, or an implementation partnership, our team can help scope next steps.
        </p>
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <Mail size={16} style={{ color: "var(--teal)" }} />
            <a href="mailto:hello@stellaronehealth.com" className="underline-offset-2 hover:underline">hello@stellaronehealth.com</a>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} style={{ color: "var(--teal)" }} />
            <a href="tel:+919180328119" className="underline-offset-2 hover:underline">+91 91803 28119</a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} style={{ color: "var(--teal)" }} />
            <span>India · Serving healthcare organizations across the United States</span>
          </div>
        </div>
      </div>

      <div>
        {sent ? (
          <div className="sh-card p-8">
            <CheckCircle2 size={22} style={{ color: "var(--teal)" }} className="mb-3" />
            <p className="font-medium mb-1">Message received.</p>
            <p className="text-sm" style={{ color: "var(--steel)" }}>
              This is a front-end preview, so nothing was actually sent — but this is what the confirmation state looks like.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs block mb-1" style={{ color: "var(--steel)" }}>Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="sh-field w-full px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-xs block mb-1" style={{ color: "var(--steel)" }}>Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="sh-field w-full px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-xs block mb-1" style={{ color: "var(--steel)" }}>Company</label>
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="sh-field w-full px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-xs block mb-1" style={{ color: "var(--steel)" }}>Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="sh-field w-full px-3 py-2 text-sm"
              />
            </div>
            <button type="submit" className="sh-btn-primary px-5 py-3 text-sm flex items-center gap-2">
              Send message <ArrowRight size={15} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function StellarOneSite() {
  const [page, setPage] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { window.scrollTo?.(0, 0); }, [page]);

  return (
    <div className="sh-root min-h-screen">
      <FontImport />
      <Nav page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {page === "Home" && <HomePage setPage={setPage} />}
      {page === "About" && <AboutPage />}
      {page === "Services" && <ServicesPage />}
      {page === "Contact" && <ContactPage />}
      <Footer setPage={setPage} />
    </div>
  );
}
