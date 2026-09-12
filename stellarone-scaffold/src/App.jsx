import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cpu,
  FileCheck2,
  Globe2,
  HeartPulse,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";

const TOKENS = `
  :root {
    --bg: #f4f7fb;
    --surface: rgba(255, 255, 255, 0.82);
    --surface-strong: #ffffff;
    --panel: #eaf0f8;
    --ink: #0f172a;
    --ink-soft: #475569;
    --ink-muted: #64748b;
    --line: rgba(148, 163, 184, 0.24);
    --line-strong: rgba(148, 163, 184, 0.4);
    --brand: #1d4ed8;
    --brand-deep: #0f3aa9;
    --accent: #0f766e;
    --accent-soft: #dff7f1;
    --gold: #c7922d;
    --navy: #091221;
    --navy-soft: #0d1b33;
    --shadow: 0 30px 70px -45px rgba(15, 23, 42, 0.45);
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    background:
      radial-gradient(circle at top left, rgba(29, 78, 216, 0.08), transparent 28%),
      radial-gradient(circle at top right, rgba(15, 118, 110, 0.08), transparent 22%),
      var(--bg);
    color: var(--ink);
  }
  .sh-root {
    min-height: 100vh;
    color: var(--ink);
    overflow-x: hidden;
  }
  .sh-serif {
    font-family: 'Plus Jakarta Sans', 'Inter', ui-sans-serif, system-ui, sans-serif;
  }
  .sh-shell {
    width: min(1160px, calc(100vw - 32px));
    margin: 0 auto;
  }
  .sh-nav-shell {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    background: rgba(244, 247, 251, 0.84);
    border-bottom: 1px solid var(--line);
  }
  .sh-brand {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--ink);
  }
  .sh-brand-mark {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 18px;
    display: grid;
    place-items: center;
    color: white;
    background: linear-gradient(135deg, var(--brand) 0%, #4f46e5 48%, var(--accent) 100%);
    box-shadow: 0 18px 32px -22px rgba(29, 78, 216, 0.9);
  }
  .sh-brand-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.05;
  }
  .sh-brand-name strong {
    font-size: 0.98rem;
    letter-spacing: -0.03em;
  }
  .sh-brand-name span {
    font-size: 0.72rem;
    color: var(--ink-muted);
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .sh-nav-link {
    position: relative;
    color: var(--ink-soft);
    transition: color 0.18s ease;
  }
  .sh-nav-link:hover,
  .sh-nav-link.active {
    color: var(--ink);
  }
  .sh-nav-link.active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.55rem;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--brand), var(--accent));
  }
  .sh-btn-primary,
  .sh-btn-secondary,
  .sh-btn-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    border-radius: 999px;
    font-weight: 600;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease;
  }
  .sh-btn-primary {
    background: linear-gradient(135deg, var(--brand) 0%, #4338ca 100%);
    color: white;
    box-shadow: 0 24px 35px -24px rgba(29, 78, 216, 0.9);
  }
  .sh-btn-primary:hover,
  .sh-btn-secondary:hover,
  .sh-btn-ghost:hover {
    transform: translateY(-1px);
  }
  .sh-btn-secondary {
    background: var(--navy);
    color: white;
    box-shadow: 0 24px 35px -24px rgba(9, 18, 33, 0.9);
  }
  .sh-btn-ghost {
    border: 1px solid var(--line-strong);
    background: rgba(255, 255, 255, 0.7);
    color: var(--ink);
  }
  .sh-section {
    padding: 5.5rem 0;
  }
  .sh-card {
    border: 1px solid var(--line);
    background: var(--surface);
    box-shadow: var(--shadow);
    border-radius: 28px;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }
  .sh-dark-card {
    background: linear-gradient(180deg, rgba(9, 18, 33, 0.98) 0%, rgba(13, 27, 51, 0.96) 100%);
    border: 1px solid rgba(148, 163, 184, 0.14);
    color: white;
  }
  .sh-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 999px;
    border: 1px solid rgba(29, 78, 216, 0.14);
    background: rgba(255, 255, 255, 0.7);
    color: var(--brand-deep);
    padding: 0.5rem 0.9rem;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .sh-kpi {
    border: 1px solid rgba(148, 163, 184, 0.22);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.78);
    padding: 1rem 1.1rem;
  }
  .sh-kpi strong {
    display: block;
    font-size: 1.05rem;
    margin-bottom: 0.2rem;
  }
  .sh-grid-overlay {
    background-image:
      linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
    background-size: 34px 34px;
  }
  .sh-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 0;
  }
  .sh-image-shell {
    overflow: hidden;
    border-radius: 28px;
    position: relative;
    min-height: 100%;
  }
  .sh-image-shell > * {
    position: relative;
  }
  .sh-image-shell::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(15, 23, 42, 0) 20%, rgba(15, 23, 42, 0.32) 100%);
    z-index: 1;
    pointer-events: none;
  }
  .sh-floating-note {
    position: absolute;
    right: 1.2rem;
    bottom: 1.2rem;
    max-width: 15rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: rgba(9, 18, 33, 0.78);
    backdrop-filter: blur(18px);
    color: white;
    padding: 1rem;
    box-shadow: 0 20px 35px -24px rgba(9, 18, 33, 0.9);
    z-index: 2;
  }
  .sh-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.55rem 0.85rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid var(--line);
    color: var(--ink-soft);
    font-size: 0.82rem;
    font-weight: 500;
  }
  .sh-feature-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 18px;
    display: grid;
    place-items: center;
    background: linear-gradient(145deg, rgba(29, 78, 216, 0.12), rgba(15, 118, 110, 0.16));
    color: var(--brand);
  }
  .sh-input {
    width: 100%;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.88);
    padding: 0.95rem 1rem;
    color: var(--ink);
  }
  .sh-input:focus {
    outline: none;
    border-color: rgba(29, 78, 216, 0.45);
    box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.12);
  }
  .sh-contact-band {
    background: linear-gradient(135deg, rgba(29, 78, 216, 0.06), rgba(15, 118, 110, 0.08));
    border: 1px solid rgba(148, 163, 184, 0.2);
  }
  @media (max-width: 767px) {
    .sh-section {
      padding: 4rem 0;
    }
    .sh-nav-link.active::after {
      bottom: -0.35rem;
    }
  }
`;

const NAV_ITEMS = ["Home", "About", "Services", "Contact"];

const BRAND = {
  name: "StellarOne",
  sub: "Health Technologies",
};

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  heroSecondary: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  operations: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  telehealth: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1200&q=80",
  about: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  contact: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
};

const HIGHLIGHTS = [
  { headline: "Enterprise-ready", caption: "Healthcare delivery modernization" },
  { headline: "AI-assisted", caption: "RCM and patient access workflows" },
  { headline: "Multichannel", caption: "Web, mobile, and operational touchpoints" },
];

const TRUST_POINTS = [
  "Operational governance",
  "Secure automation design",
  "Revenue cycle enablement",
  "Care experience modernization",
];

const PILLARS = [
  {
    title: "Clinical experience",
    text: "Human-centered digital journeys that help patients understand, access, and continue care with confidence.",
    icon: HeartPulse,
    color: "var(--accent)",
  },
  {
    title: "Revenue operations",
    text: "Workflow automation for eligibility, coding, visibility, and follow-through that gives teams cleaner execution.",
    icon: BriefcaseBusiness,
    color: "var(--brand)",
  },
  {
    title: "Enterprise AI layer",
    text: "A dependable orchestration approach connecting data, teams, and automation without losing control or accountability.",
    icon: Layers3,
    color: "var(--gold)",
  },
];

const PRODUCTS = [
  {
    title: "Stellar.AI",
    subtitle: "Revenue intelligence suite",
    text: "An enterprise workflow layer for eligibility checks, coding support, and performance visibility across high-volume healthcare operations.",
    bullets: [
      "Eligibility and benefits verification",
      "AI-assisted CPT and ICD-10 coding workflows",
      "Denials, payer mix, and AR visibility dashboards",
    ],
    icon: BarChart3,
    image: IMAGES.operations,
    accent: "var(--brand)",
  },
  {
    title: "EasyMed",
    subtitle: "Digital care access experience",
    text: "A multilingual telehealth experience that helps patients communicate symptoms clearly, reach doctors faster, and continue care in a familiar language.",
    bullets: [
      "AI-supported symptom intake",
      "Patient-doctor chat and consultation support",
      "Responsive web and mobile delivery patterns",
    ],
    icon: MessageSquare,
    image: IMAGES.telehealth,
    accent: "var(--accent)",
  },
];

const SERVICES = [
  {
    title: "Eligibility & benefits verification",
    icon: ShieldCheck,
    text: "Reduce front-desk friction with automation that surfaces coverage detail quickly and consistently.",
  },
  {
    title: "Medical coding agent",
    icon: FileCheck2,
    text: "Support coding teams with guided AI workflows built around structured review rather than black-box output.",
  },
  {
    title: "Operational analytics",
    icon: Activity,
    text: "Give leaders a clearer view of denials, aging, throughput, and the signals that actually require action.",
  },
  {
    title: "Telehealth engagement",
    icon: Stethoscope,
    text: "Extend care access with multilingual digital interactions that feel simple for patients and manageable for teams.",
  },
];

const DELIVERY_STEPS = [
  {
    title: "Align the operating need",
    text: "Map the healthcare workflow, stakeholders, and service expectations before introducing automation.",
  },
  {
    title: "Design controlled experiences",
    text: "Shape interfaces, workflows, and AI checkpoints so teams gain speed without losing oversight.",
  },
  {
    title: "Launch and scale deliberately",
    text: "Expand from high-value use cases into a connected digital operating model across products and teams.",
  },
];

function FontImport() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      ${TOKENS}
    `}</style>
  );
}

function BrandMark() {
  return (
    <div className="sh-brand">
      <div className="sh-brand-mark">
        <Sparkles size={16} />
      </div>
      <div className="sh-brand-name">
        <strong className="sh-serif">{BRAND.name}</strong>
        <span>{BRAND.sub}</span>
      </div>
    </div>
  );
}

function ImagePanel({
  src,
  alt,
  className = "",
  note,
  children,
  loading = "lazy",
  fetchPriority,
}) {
  return (
    <div className={`sh-image-shell ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        className="sh-photo"
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
      {children}
      {note ? <div className="sh-floating-note">{note}</div> : null}
    </div>
  );
}

function Nav({ page, setPage, mobileOpen, setMobileOpen }) {
  return (
    <header className="sh-nav-shell">
      <div className="sh-shell flex items-center justify-between py-4">
        <button onClick={() => setPage("Home")} aria-label="Go to home" className="text-left">
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
          <button onClick={() => setPage("Contact")} className="sh-btn-primary px-5 py-3 text-sm">
            Book a conversation <ArrowRight size={15} />
          </button>
        </nav>
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileOpen ? (
        <div className="sh-shell md:hidden pb-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => {
                setPage(item);
                setMobileOpen(false);
              }}
              className="text-left py-1.5 text-sm"
              style={{ color: page === item ? "var(--ink)" : "var(--ink-soft)" }}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => {
              setPage("Contact");
              setMobileOpen(false);
            }}
            className="sh-btn-primary px-5 py-3 text-sm mt-1"
          >
            Book a conversation <ArrowRight size={15} />
          </button>
        </div>
      ) : null}
    </header>
  );
}

function Hero({ setPage }) {
  return (
    <section className="sh-section pt-10 md:pt-16">
      <div className="sh-shell grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">
        <div>
          <div className="sh-badge mb-5">
            <BadgeCheck size={14} /> Enterprise healthcare experience design
          </div>
          <h1 className="sh-serif text-5xl md:text-7xl leading-[0.96] tracking-[-0.05em] max-w-3xl mb-6">
            Professional healthcare technology presentation with boardroom-level polish.
          </h1>
          <p className="text-lg leading-8 max-w-2xl mb-8" style={{ color: "var(--ink-soft)" }}>
            StellarOne now leads with a cleaner enterprise identity, refined hierarchy, stronger color balance,
            and healthcare-focused imagery that makes the brand feel more credible, premium, and conversion-ready.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <button onClick={() => setPage("Services")} className="sh-btn-primary px-6 py-3.5 text-sm">
              Explore capabilities <ArrowRight size={15} />
            </button>
            <button onClick={() => setPage("About")} className="sh-btn-ghost px-6 py-3.5 text-sm">
              Why StellarOne <ArrowUpRight size={15} />
            </button>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item.headline} className="sh-kpi">
                <strong className="sh-serif">{item.headline}</strong>
                <span className="text-sm" style={{ color: "var(--ink-muted)" }}>
                  {item.caption}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[32px] sh-grid-overlay opacity-70" aria-hidden="true" />
          <div className="relative grid gap-4 md:grid-cols-[1.2fr_0.8fr] items-end">
            <div className="sh-card p-3 md:p-4">
              <ImagePanel
                src={IMAGES.hero}
                alt="Healthcare professional reviewing digital patient workflows"
                className="h-[27rem]"
                loading="eager"
                fetchPriority="high"
                note={
                  <>
                    <p className="text-[11px] uppercase tracking-[0.16em] mb-1 text-slate-300">Enterprise look</p>
                    <p className="text-sm leading-6 text-slate-100">
                      A premium visual layer built around healthcare operations, patient experience, and modern AI adoption.
                    </p>
                  </>
                }
              />
            </div>
            <div className="space-y-4">
              <div className="sh-card p-3">
                <ImagePanel
                  src={IMAGES.heroSecondary}
                  alt="Doctor using telehealth technology"
                  className="h-56"
                />
              </div>
              <div className="sh-dark-card rounded-[28px] p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300 mb-3">Design direction</p>
                <div className="space-y-3 text-sm text-slate-200 leading-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-1 text-emerald-300" />
                    <span>Sharper information hierarchy with premium spacing and glass-card surfaces</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-1 text-emerald-300" />
                    <span>Deep navy, cobalt, and teal palette to signal trust, intelligence, and healthcare focus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-1 text-emerald-300" />
                    <span>Topic-relevant photography to add credibility and emotional connection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="pb-2">
      <div className="sh-shell sh-card px-6 py-6 md:px-8 md:py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="sh-badge mb-3">
              <Building2 size={14} /> Enterprise readiness
            </p>
            <h2 className="sh-serif text-3xl md:text-4xl tracking-[-0.04em] max-w-2xl">
              A more credible digital presence for healthcare buyers, partners, and operational leaders.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {TRUST_POINTS.map((point) => (
              <span key={point} className="sh-pill">
                <ShieldCheck size={14} color="var(--accent)" /> {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="sh-section">
      <div className="sh-shell">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p className="sh-badge mb-4">
              <Globe2 size={14} /> Experience pillars
            </p>
            <h2 className="sh-serif text-4xl md:text-5xl tracking-[-0.05em] max-w-2xl">
              Every section now communicates strategy, capability, and trust more clearly.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7" style={{ color: "var(--ink-soft)" }}>
            The refreshed layout balances strong executive messaging with product proof points so the site feels enterprise-led rather than template-driven.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((item) => (
            <div key={item.title} className="sh-card p-7 md:p-8">
              <div className="sh-feature-icon mb-5" style={{ color: item.color }}>
                <item.icon size={22} />
              </div>
              <h3 className="sh-serif text-2xl tracking-[-0.03em] mb-3">{item.title}</h3>
              <p className="text-sm leading-7" style={{ color: "var(--ink-soft)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection({ setPage }) {
  return (
    <section className="sh-section pt-0">
      <div className="sh-shell space-y-6">
        {PRODUCTS.map((item, index) => (
          <div key={item.title} className="sh-card overflow-hidden">
            <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-5">
                  <div className="sh-feature-icon" style={{ color: item.accent }}>
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em]" style={{ color: "var(--ink-muted)" }}>
                      {item.subtitle}
                    </p>
                    <h3 className="sh-serif text-3xl tracking-[-0.04em]">{item.title}</h3>
                  </div>
                </div>
                <p className="text-base leading-7 mb-6" style={{ color: "var(--ink-soft)" }}>
                  {item.text}
                </p>
                <div className="space-y-3 mb-8">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm leading-6">
                      <CheckCircle2 size={17} className="mt-1" style={{ color: item.accent }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setPage("Services")} className="sh-btn-ghost px-5 py-3 text-sm self-start">
                  View service detail <ArrowUpRight size={15} />
                </button>
              </div>
              <div className="min-h-[20rem] lg:min-h-full p-3 md:p-4">
                <ImagePanel
                  src={item.image}
                  alt={
                    item.title === "Stellar.AI"
                      ? "Healthcare operations team reviewing analytics and revenue workflow performance"
                      : "Doctor connecting with a patient through a multilingual telehealth experience"
                  }
                  className="h-full min-h-[20rem]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DeliverySection() {
  return (
    <section className="sh-section pt-0">
      <div className="sh-shell grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
        <div className="sh-dark-card rounded-[32px] p-8 md:p-10">
          <p className="sh-badge mb-4 text-white border-white/10 bg-white/10">
            <Cpu size={14} /> Operating model
          </p>
          <h2 className="sh-serif text-4xl tracking-[-0.05em] mb-5">
            Restyled to feel consistent from first impression to final CTA.
          </h2>
          <p className="text-base leading-7 text-slate-300">
            The updated site uses repeated visual patterns, cleaner cards, stronger section transitions, and more confident typography so the full experience feels cohesive and enterprise level.
          </p>
        </div>
        <div className="grid gap-4">
          {DELIVERY_STEPS.map((step, index) => (
            <div key={step.title} className="sh-card p-7 md:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white grid place-items-center font-semibold flex-shrink-0">
                0{index + 1}
              </div>
              <div>
                <h3 className="sh-serif text-2xl tracking-[-0.03em] mb-2">{step.title}</h3>
                <p className="text-sm leading-7" style={{ color: "var(--ink-soft)" }}>
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ setPage }) {
  return (
    <section className="sh-section pt-0">
      <div className="sh-shell sh-dark-card rounded-[32px] px-8 py-10 md:px-12 md:py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-300 mb-3">Ready for the next step</p>
          <h2 className="sh-serif text-4xl md:text-5xl tracking-[-0.05em] max-w-3xl">
            Present StellarOne with the confidence of a modern healthcare enterprise brand.
          </h2>
        </div>
        <button onClick={() => setPage("Contact")} className="sh-btn-primary px-6 py-3.5 text-sm self-start lg:self-center">
          Connect with the team <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="pb-8">
      <div className="sh-shell sh-card px-6 py-8 md:px-8 md:py-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-8 text-sm">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-sm leading-7" style={{ color: "var(--ink-soft)" }}>
              Healthcare technology experiences built to connect care delivery, revenue workflows, and enterprise AI modernization.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3">Navigate</p>
            <div className="flex flex-col gap-2" style={{ color: "var(--ink-soft)" }}>
              {NAV_ITEMS.map((item) => (
                <button key={item} onClick={() => setPage(item)} className="text-left">
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-3">Solutions</p>
            <div className="flex flex-col gap-2" style={{ color: "var(--ink-soft)" }}>
              <span>Stellar.AI</span>
              <span>EasyMed</span>
              <span>Healthcare operations design</span>
            </div>
          </div>
          <div>
            <p className="font-semibold mb-3">Contact</p>
            <div className="flex flex-col gap-2" style={{ color: "var(--ink-soft)" }}>
              <a href="mailto:hello@stellaronehealth.com">hello@stellaronehealth.com</a>
              <a href="tel:+919180328119">+91 91803 28119</a>
              <span>India · Serving healthcare organizations in the United States</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-xs" style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}>
          © {new Date().getFullYear()} StellarOne Health Technologies Pvt. Ltd. All rights reserved.
        </div>
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
      <DeliverySection />
      <CTASection setPage={setPage} />
    </>
  );
}

function AboutPage() {
  return (
    <div className="sh-section pt-10 md:pt-14">
      <div className="sh-shell grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
        <div className="sh-card p-8 md:p-10 lg:p-12">
          <p className="sh-badge mb-5">
            <Sparkles size={14} /> About StellarOne
          </p>
          <h1 className="sh-serif text-5xl md:text-6xl tracking-[-0.05em] leading-[0.98] mb-6">
            A more mature brand story for a healthcare technology company.
          </h1>
          <p className="text-base leading-8 mb-8" style={{ color: "var(--ink-soft)" }}>
            The restyled presentation positions StellarOne as a serious partner across care experience, revenue operations, and enterprise AI enablement.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Headquarters", value: "India" },
              { label: "Primary market", value: "United States" },
              { label: "Product lines", value: "Stellar.AI and EasyMed" },
              { label: "Positioning", value: "Healthcare AI and workflow modernization" },
            ].map((item) => (
              <div key={item.label} className="sh-contact-band rounded-[24px] p-5">
                <p className="text-xs uppercase tracking-[0.16em] mb-2" style={{ color: "var(--ink-muted)" }}>
                  {item.label}
                </p>
                <p className="sh-serif text-xl tracking-[-0.03em]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sh-card p-3 md:p-4">
          <ImagePanel src={IMAGES.about} alt="Healthcare team collaborating around technology" className="h-full min-h-[28rem]" />
        </div>
      </div>

      <div className="sh-shell grid md:grid-cols-3 gap-5 mt-6">
        {PILLARS.map((item) => (
          <div key={item.title} className="sh-card p-7">
            <div className="sh-feature-icon mb-4" style={{ color: item.color }}>
              <item.icon size={20} />
            </div>
            <h2 className="sh-serif text-2xl tracking-[-0.03em] mb-3">{item.title}</h2>
            <p className="text-sm leading-7" style={{ color: "var(--ink-soft)" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="sh-section pt-10 md:pt-14">
      <div className="sh-shell">
        <div className="max-w-3xl mb-10">
          <p className="sh-badge mb-5">
            <BarChart3 size={14} /> Services and products
          </p>
          <h1 className="sh-serif text-5xl md:text-6xl tracking-[-0.05em] leading-[0.98] mb-5">
            Premium layouts for every capability the company wants to showcase.
          </h1>
          <p className="text-base leading-8" style={{ color: "var(--ink-soft)" }}>
            The refreshed services page uses stronger card treatment, cleaner content grouping, and richer imagery to make each offer feel more polished and easier to scan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {SERVICES.map((service) => (
            <div key={service.title} className="sh-card p-7 md:p-8">
              <div className="sh-feature-icon mb-4">
                <service.icon size={20} />
              </div>
              <h2 className="sh-serif text-2xl tracking-[-0.03em] mb-3">{service.title}</h2>
              <p className="text-sm leading-7" style={{ color: "var(--ink-soft)" }}>
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
          <div className="sh-dark-card rounded-[32px] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-300 mb-4">Technology foundation</p>
            <h2 className="sh-serif text-4xl tracking-[-0.05em] mb-5">A cleaner way to explain how the platform fits together.</h2>
            <p className="text-base leading-8 text-slate-300 mb-6">
              The new structure lets visitors understand the relationship between workflows, products, interfaces, and business outcomes without reading dense blocks of text.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              {[
                "React front end",
                "FastAPI services",
                "LangChain orchestration",
                "ChromaDB retrieval",
                "Node and Express integrations",
                "Vercel delivery",
              ].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="sh-card p-3 md:p-4">
            <ImagePanel src={IMAGES.operations} alt="Healthcare operations analytics" className="h-full min-h-[22rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="sh-section pt-10 md:pt-14">
      <div className="sh-shell grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
        <div className="sh-card overflow-hidden">
          <div className="p-3 md:p-4">
            <ImagePanel src={IMAGES.contact} alt="Modern healthcare facility" className="h-[18rem] md:h-[20rem]" />
          </div>
          <div className="px-8 pb-8 md:px-10 md:pb-10">
            <p className="sh-badge mb-4 mt-2">
              <Mail size={14} /> Contact the team
            </p>
            <h1 className="sh-serif text-4xl md:text-5xl tracking-[-0.05em] leading-[0.98] mb-4">Let the visual experience match the ambition of the business.</h1>
            <p className="text-base leading-8 mb-6" style={{ color: "var(--ink-soft)" }}>
              The updated contact page pairs a premium visual layout with a cleaner enquiry form and clearer points of contact.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} color="var(--brand)" />
                <a href="mailto:hello@stellaronehealth.com">hello@stellaronehealth.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} color="var(--brand)" />
                <a href="tel:+919180328119">+91 91803 28119</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} color="var(--brand)" />
                <span>India · Supporting healthcare organizations in the United States</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sh-card p-8 md:p-10">
          {sent ? (
            <div className="sh-contact-band rounded-[28px] p-8">
              <CheckCircle2 size={26} color="var(--accent)" className="mb-4" />
              <h2 className="sh-serif text-3xl tracking-[-0.03em] mb-2">Message received.</h2>
              <p className="text-sm leading-7" style={{ color: "var(--ink-soft)" }}>
                This is still a front-end preview, so no live submission was sent, but the refreshed confirmation state is ready for a production form integration.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.14em] mb-2 block" style={{ color: "var(--ink-muted)" }}>
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="sh-input"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.14em] mb-2 block" style={{ color: "var(--ink-muted)" }}>
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="sh-input"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.14em] mb-2 block" style={{ color: "var(--ink-muted)" }}>
                  Company
                </label>
                <input
                  value={form.company}
                  onChange={(event) => setForm({ ...form, company: event.target.value })}
                  className="sh-input"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.14em] mb-2 block" style={{ color: "var(--ink-muted)" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  className="sh-input resize-none"
                />
              </div>
              <button type="submit" className="sh-btn-primary px-6 py-3.5 text-sm">
                Send message <ArrowRight size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function StellarOneSite() {
  const [page, setPage] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shouldResetScroll, setShouldResetScroll] = useState(false);

  const navigateTo = (nextPage) => {
    if (nextPage === page) {
      setMobileOpen(false);
      return;
    }
    setMobileOpen(false);
    setShouldResetScroll(true);
    setPage(nextPage);
  };

  useEffect(() => {
    if (!shouldResetScroll) {
      return;
    }
    window.scrollTo?.(0, 0);
    setShouldResetScroll(false);
  }, [page, shouldResetScroll]);

  return (
    <div className="sh-root">
      <FontImport />
      <Nav page={page} setPage={navigateTo} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {page === "Home" ? <HomePage setPage={navigateTo} /> : null}
      {page === "About" ? <AboutPage /> : null}
      {page === "Services" ? <ServicesPage /> : null}
      {page === "Contact" ? <ContactPage /> : null}
      <Footer setPage={navigateTo} />
    </div>
  );
}
