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

/* ============================================================
   STELLARONE HEALTH
   Complete standalone React component
   ============================================================ */

const BRAND = {
  name: "StellarOne Health",
  legalName: "StellarOne Health Technologies Pvt. Ltd.",
  email: "Praveen.Jayaraman@stellaronehealth.com",
  phone: "+91 91803 28119",
};

const COLORS = {
  bg: "#f4f7fb",
  surface: "rgba(255, 255, 255, 0.86)",
  white: "#ffffff",
  panel: "#eaf0f8",
  ink: "#0f172a",
  soft: "#475569",
  muted: "#64748b",
  line: "rgba(148, 163, 184, 0.24)",
  lineStrong: "rgba(148, 163, 184, 0.4)",
  brand: "#1d4ed8",
  brandDeep: "#0f3aa9",
  accent: "#0f766e",
  accentSoft: "#dff7f1",
  gold: "#c7922d",
  navy: "#091221",
  navySoft: "#0d1b33",
};

/* ============================================================
   IMAGES
   ============================================================ */

const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85",

  heroSecondary:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=85",

  operations:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=85",

  telehealth:
    "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1400&q=85",

  about:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=85",

  contact:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85",
};

/* ============================================================
   DATA
   ============================================================ */

const NAV_ITEMS = [
  { label: "Home", id: "Home" },
  { label: "About", id: "About" },
  { label: "Services", id: "Services" },
  { label: "Contact", id: "Contact" },
];

const HIGHLIGHTS = [
  {
    headline: "Enterprise-ready",
    caption: "Healthcare delivery modernization",
  },
  {
    headline: "AI-assisted",
    caption: "RCM and patient access workflows",
  },
  {
    headline: "Multichannel",
    caption: "Web, mobile, and operational touchpoints",
  },
];

const TRUST_POINTS = [
  "Operational governance",
  "Secure automation design",
  "Revenue cycle enablement",
  "Care experience modernization",
];

const PILLARS = [
  {
    title: "Clinical Experience",
    text:
      "Human-centered digital journeys that help patients understand, access, and continue care with confidence.",
    icon: HeartPulse,
    color: COLORS.accent,
  },
  {
    title: "Revenue Operations",
    text:
      "Workflow automation for eligibility, coding, visibility, and follow-through that gives healthcare teams cleaner execution.",
    icon: BriefcaseBusiness,
    color: COLORS.brand,
  },
  {
    title: "Enterprise AI Layer",
    text:
      "A dependable orchestration approach connecting data, teams, and automation without losing control or accountability.",
    icon: Layers3,
    color: COLORS.gold,
  },
];

const PRODUCTS = [
  {
    title: "Stellar.AI",
    subtitle: "Revenue Intelligence Suite",
    text:
      "An enterprise workflow layer for eligibility checks, coding support, denial management, and performance visibility across high-volume healthcare operations.",
    bullets: [
      "Eligibility and benefits verification",
      "AI-assisted CPT and ICD-10 coding workflows",
      "Denials, payer mix, and AR visibility dashboards",
    ],
    icon: BarChart3,
    image: IMAGES.operations,
    accent: COLORS.brand,
  },
  {
    title: "EasyMed",
    subtitle: "Digital Care Access Experience",
    text:
      "A multilingual telehealth experience that helps patients communicate symptoms clearly, reach doctors faster, and continue care in a familiar language.",
    bullets: [
      "AI-supported symptom intake",
      "Patient-doctor chat and consultation support",
      "Responsive web and mobile delivery",
    ],
    icon: MessageSquare,
    image: IMAGES.telehealth,
    accent: COLORS.accent,
  },
];

const SERVICES = [
  {
    title: "Eligibility & Benefits Verification",
    icon: ShieldCheck,
    text:
      "Reduce front-desk friction with automation that surfaces coverage detail quickly and consistently.",
  },
  {
    title: "Medical Coding Agent",
    icon: FileCheck2,
    text:
      "Support coding teams with guided AI workflows built around structured review rather than black-box output.",
  },
  {
    title: "Operational Analytics",
    icon: Activity,
    text:
      "Give leaders a clearer view of denials, aging, throughput, and the signals that actually require action.",
  },
  {
    title: "Telehealth Engagement",
    icon: Stethoscope,
    text:
      "Extend care access with multilingual digital interactions that feel simple for patients and manageable for teams.",
  },
];

const DELIVERY_STEPS = [
  {
    title: "Align the Operating Need",
    text:
      "Map the healthcare workflow, stakeholders, and service expectations before introducing automation.",
  },
  {
    title: "Design Controlled Experiences",
    text:
      "Shape interfaces, workflows, and AI checkpoints so teams gain speed without losing oversight.",
  },
  {
    title: "Launch and Scale Deliberately",
    text:
      "Expand from high-value use cases into a connected digital operating model across products and teams.",
  },
];

/* ============================================================
   GLOBAL CSS
   No Tailwind dependency.
   ============================================================ */

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

  :root {
    --sh-bg: #f4f7fb;
    --sh-surface: rgba(255,255,255,0.86);
    --sh-white: #ffffff;
    --sh-ink: #0f172a;
    --sh-soft: #475569;
    --sh-muted: #64748b;
    --sh-line: rgba(148,163,184,0.24);
    --sh-line-strong: rgba(148,163,184,0.4);
    --sh-brand: #1d4ed8;
    --sh-brand-deep: #0f3aa9;
    --sh-accent: #0f766e;
    --sh-accent-soft: #dff7f1;
    --sh-gold: #c7922d;
    --sh-navy: #091221;
    --sh-navy-soft: #0d1b33;
    --sh-shadow: 0 30px 70px -45px rgba(15,23,42,0.45);
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    background:
      radial-gradient(
        circle at top left,
        rgba(29,78,216,0.08),
        transparent 28%
      ),
      radial-gradient(
        circle at top right,
        rgba(15,118,110,0.08),
        transparent 24%
      ),
      var(--sh-bg);
    color: var(--sh-ink);
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .sh-root {
    min-height: 100vh;
    background:
      radial-gradient(
        circle at 15% 10%,
        rgba(29,78,216,0.055),
        transparent 30%
      ),
      radial-gradient(
        circle at 90% 20%,
        rgba(15,118,110,0.05),
        transparent 25%
      ),
      var(--sh-bg);
    color: var(--sh-ink);
  }

  .sh-font-display {
    font-family:
      "Plus Jakarta Sans",
      Inter,
      ui-sans-serif,
      system-ui,
      sans-serif;
  }

  .sh-layout {
    display: flex;
    min-height: 100vh;
  }

  /* ----------------------------------------------------------
     TOP BRAND BAR
     ---------------------------------------------------------- */

  .sh-topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 78px;
    z-index: 100;
    display: flex;
    align-items: center;
    padding: 0 30px;
    background: rgba(244,247,251,0.9);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--sh-line);
  }

  .sh-topbar-inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sh-brand {
    display: inline-flex;
    align-items: center;
    gap: 13px;
    border: 0;
    background: transparent;
    padding: 0;
    color: var(--sh-ink);
  }

  .sh-brand-mark {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    display: grid;
    place-items: center;
    border-radius: 15px;
    color: #fff;
    background:
      linear-gradient(
        135deg,
        var(--sh-brand) 0%,
        #4f46e5 48%,
        var(--sh-accent) 100%
      );
    box-shadow:
      0 18px 32px -22px rgba(29,78,216,0.9);
  }

  .sh-brand-copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.05;
  }

  .sh-brand-name {
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -0.045em;
  }

  .sh-brand-sub {
    margin-top: 4px;
    color: var(--sh-muted);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .sh-mobile-menu {
    width: 44px;
    height: 44px;
    display: none;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--sh-line);
    border-radius: 14px;
    background: rgba(255,255,255,0.75);
    color: var(--sh-ink);
  }

  /* ----------------------------------------------------------
     LEFT SIDEBAR
     ---------------------------------------------------------- */

  .sh-sidebar {
    position: fixed;
    top: 78px;
    left: 0;
    bottom: 0;
    width: 245px;
    z-index: 80;
    padding: 28px 18px;
    background:
      linear-gradient(
        180deg,
        rgba(255,255,255,0.88),
        rgba(241,245,249,0.86)
      );
    border-right: 1px solid var(--sh-line);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .sh-sidebar-label {
    padding: 0 13px;
    margin: 3px 0 12px;
    color: var(--sh-muted);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .sh-sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .sh-sidebar-item {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 13px;
    border: 0;
    border-radius: 14px;
    background: transparent;
    color: var(--sh-soft);
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    transition:
      background 0.18s ease,
      color 0.18s ease,
      transform 0.18s ease;
  }

  .sh-sidebar-item:hover {
    background: rgba(255,255,255,0.8);
    color: var(--sh-ink);
    transform: translateX(2px);
  }

  .sh-sidebar-item.active {
    color: var(--sh-brand);
    background:
      linear-gradient(
        135deg,
        rgba(29,78,216,0.1),
        rgba(15,118,110,0.07)
      );
  }

  .sh-sidebar-item.active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 9px;
    bottom: 9px;
    width: 3px;
    border-radius: 999px;
    background:
      linear-gradient(
        180deg,
        var(--sh-brand),
        var(--sh-accent)
      );
  }

  .sh-sidebar-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: rgba(255,255,255,0.72);
  }

  .sh-sidebar-item.active .sh-sidebar-icon {
    background: rgba(255,255,255,0.9);
  }

  .sh-sidebar-bottom {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 25px;
  }

  .sh-sidebar-card {
    padding: 16px;
    border-radius: 18px;
    color: white;
    background:
      linear-gradient(
        145deg,
        var(--sh-navy),
        var(--sh-navy-soft)
      );
    box-shadow:
      0 25px 45px -32px rgba(9,18,33,0.9);
  }

  .sh-sidebar-card small {
    display: block;
    margin-bottom: 7px;
    color: #94a3b8;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .sh-sidebar-card strong {
    display: block;
    margin-bottom: 10px;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 14px;
  }

  .sh-sidebar-card span {
    display: block;
    color: #cbd5e1;
    font-size: 11px;
    line-height: 1.6;
  }

  /* ----------------------------------------------------------
     MAIN
     ---------------------------------------------------------- */

  .sh-main {
    width: 100%;
    margin-left: 245px;
    padding-top: 78px;
  }

  .sh-container {
    width: min(1160px, calc(100% - 48px));
    margin: 0 auto;
  }

  .sh-section {
    padding: 82px 0;
  }

  .sh-section-top {
    padding-top: 50px;
  }

  /* ----------------------------------------------------------
     BUTTONS
     ---------------------------------------------------------- */

  .sh-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-height: 45px;
    padding: 0 19px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-size: 13px;
    font-weight: 700;
    transition:
      transform 0.18s ease,
      box-shadow 0.18s ease,
      background 0.18s ease;
  }

  .sh-btn:hover {
    transform: translateY(-2px);
  }

  .sh-btn-primary {
    color: white;
    background:
      linear-gradient(
        135deg,
        var(--sh-brand),
        #4338ca
      );
    box-shadow:
      0 22px 34px -24px rgba(29,78,216,0.9);
  }

  .sh-btn-dark {
    color: white;
    background: var(--sh-navy);
    box-shadow:
      0 22px 34px -24px rgba(9,18,33,0.9);
  }

  .sh-btn-outline {
    color: var(--sh-ink);
    border-color: var(--sh-line-strong);
    background: rgba(255,255,255,0.72);
  }

  /* ----------------------------------------------------------
     CARDS
     ---------------------------------------------------------- */

  .sh-card {
    border: 1px solid var(--sh-line);
    border-radius: 28px;
    background: var(--sh-surface);
    box-shadow: var(--sh-shadow);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .sh-dark-card {
    border: 1px solid rgba(148,163,184,0.14);
    border-radius: 28px;
    color: white;
    background:
      linear-gradient(
        180deg,
        rgba(9,18,33,0.98),
        rgba(13,27,51,0.96)
      );
  }

  /* ----------------------------------------------------------
     BADGE
     ---------------------------------------------------------- */

  .sh-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 13px;
    border: 1px solid rgba(29,78,216,0.14);
    border-radius: 999px;
    background: rgba(255,255,255,0.72);
    color: var(--sh-brand-deep);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  /* ----------------------------------------------------------
     HERO
     ---------------------------------------------------------- */

  .sh-hero {
    display: grid;
    grid-template-columns: 1.04fr 0.96fr;
    gap: 46px;
    align-items: center;
  }

  .sh-hero h1 {
    max-width: 790px;
    margin: 20px 0;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: clamp(42px, 5vw, 74px);
    line-height: 0.98;
    letter-spacing: -0.055em;
  }

  .sh-hero-description {
    max-width: 680px;
    margin-bottom: 28px;
    color: var(--sh-soft);
    font-size: 17px;
    line-height: 1.85;
  }

  .sh-button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 35px;
  }

  .sh-kpi-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
  }

  .sh-kpi {
    padding: 16px;
    border: 1px solid rgba(148,163,184,0.22);
    border-radius: 20px;
    background: rgba(255,255,255,0.78);
  }

  .sh-kpi strong {
    display: block;
    margin-bottom: 5px;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 13px;
  }

  .sh-kpi span {
    color: var(--sh-muted);
    font-size: 11px;
    line-height: 1.5;
  }

  .sh-hero-visual {
    position: relative;
  }

  .sh-grid-overlay {
    position: absolute;
    inset: -18px;
    border-radius: 35px;
    opacity: 0.65;
    background-image:
      linear-gradient(
        rgba(148,163,184,0.08) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(148,163,184,0.08) 1px,
        transparent 1px
      );
    background-size: 34px 34px;
  }

  .sh-hero-images {
    position: relative;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 13px;
    align-items: end;
  }

  /* ----------------------------------------------------------
     IMAGE
     ---------------------------------------------------------- */

  .sh-image-frame {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    min-height: 100%;
  }

  .sh-image-frame img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .sh-image-frame::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(
        180deg,
        transparent 25%,
        rgba(15,23,42,0.34) 100%
      );
  }

  .sh-hero-main-image {
    height: 440px;
    padding: 9px;
    border: 1px solid var(--sh-line);
    border-radius: 28px;
    background: rgba(255,255,255,0.76);
    box-shadow: var(--sh-shadow);
  }

  .sh-hero-main-image .sh-image-frame {
    height: 420px;
  }

  .sh-hero-side {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  .sh-side-image {
    height: 205px;
    padding: 8px;
    border: 1px solid var(--sh-line);
    border-radius: 25px;
    background: rgba(255,255,255,0.76);
  }

  .sh-side-image .sh-image-frame {
    height: 188px;
  }

  .sh-floating-note {
    position: absolute;
    z-index: 3;
    right: 16px;
    bottom: 16px;
    max-width: 245px;
    padding: 15px;
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 18px;
    background: rgba(9,18,33,0.78);
    backdrop-filter: blur(18px);
    color: white;
    box-shadow:
      0 25px 45px -30px rgba(9,18,33,0.9);
  }

  .sh-floating-note small {
    display: block;
    margin-bottom: 5px;
    color: #cbd5e1;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .sh-floating-note p {
    margin: 0;
    color: #f8fafc;
    font-size: 12px;
    line-height: 1.65;
  }

  /* ----------------------------------------------------------
     TRUST
     ---------------------------------------------------------- */

  .sh-trust {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    padding: 27px 30px;
  }

  .sh-trust h2 {
    max-width: 650px;
    margin: 10px 0 0;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 29px;
    line-height: 1.12;
    letter-spacing: -0.04em;
  }

  .sh-pill-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 8px;
  }

  .sh-pill {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 12px;
    border: 1px solid var(--sh-line);
    border-radius: 999px;
    background: rgba(255,255,255,0.7);
    color: var(--sh-soft);
    font-size: 11px;
    font-weight: 600;
  }

  /* ----------------------------------------------------------
     SECTION HEAD
     ---------------------------------------------------------- */

  .sh-section-head {
    max-width: 760px;
    margin-bottom: 35px;
  }

  .sh-section-head h2,
  .sh-page-title {
    margin: 18px 0 12px;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: clamp(36px, 4vw, 56px);
    line-height: 1;
    letter-spacing: -0.055em;
  }

  .sh-section-head p,
  .sh-page-description {
    margin: 0;
    color: var(--sh-soft);
    font-size: 15px;
    line-height: 1.85;
  }

  /* ----------------------------------------------------------
     PILLARS
     ---------------------------------------------------------- */

  .sh-three-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .sh-pillar {
    padding: 29px;
  }

  .sh-feature-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    margin-bottom: 20px;
    border-radius: 16px;
    background:
      linear-gradient(
        145deg,
        rgba(29,78,216,0.12),
        rgba(15,118,110,0.16)
      );
  }

  .sh-pillar h3 {
    margin: 0 0 10px;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 22px;
    letter-spacing: -0.035em;
  }

  .sh-pillar p {
    margin: 0;
    color: var(--sh-soft);
    font-size: 13px;
    line-height: 1.8;
  }

  /* ----------------------------------------------------------
     PRODUCTS
     ---------------------------------------------------------- */

  .sh-product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
  }

  .sh-product-copy {
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sh-product-media {
    min-height: 430px;
    padding: 12px;
  }

  .sh-product-media .sh-image-frame {
    min-height: 405px;
  }

  .sh-product-heading {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-bottom: 19px;
  }

  .sh-product-heading h3 {
    margin: 4px 0 0;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 31px;
    letter-spacing: -0.045em;
  }

  .sh-product-heading p {
    margin: 0;
    color: var(--sh-muted);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .sh-product-copy > p {
    margin: 0 0 22px;
    color: var(--sh-soft);
    font-size: 14px;
    line-height: 1.85;
  }

  .sh-check-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 25px;
  }

  .sh-check {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    color: var(--sh-ink);
    font-size: 12px;
    line-height: 1.6;
  }

  /* ----------------------------------------------------------
     DELIVERY
     ---------------------------------------------------------- */

  .sh-delivery {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 20px;
    align-items: start;
  }

  .sh-delivery-intro {
    padding: 38px;
  }

  .sh-delivery-intro h2 {
    margin: 17px 0;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 37px;
    line-height: 1;
    letter-spacing: -0.05em;
  }

  .sh-delivery-intro p {
    margin: 0;
    color: #cbd5e1;
    font-size: 14px;
    line-height: 1.8;
  }

  .sh-step-list {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  .sh-step {
    display: flex;
    gap: 16px;
    padding: 25px;
  }

  .sh-step-number {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    color: white;
    background: var(--sh-navy);
    font-size: 12px;
    font-weight: 800;
  }

  .sh-step h3 {
    margin: 0 0 7px;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 19px;
    letter-spacing: -0.03em;
  }

  .sh-step p {
    margin: 0;
    color: var(--sh-soft);
    font-size: 12px;
    line-height: 1.75;
  }

  /* ----------------------------------------------------------
     CTA
     ---------------------------------------------------------- */

  .sh-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    padding: 42px;
  }

  .sh-cta h2 {
    max-width: 720px;
    margin: 8px 0 0;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: clamp(32px, 4vw, 50px);
    line-height: 1;
    letter-spacing: -0.055em;
  }

  .sh-cta small {
    color: #cbd5e1;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  /* ----------------------------------------------------------
     PAGE LAYOUT
     ---------------------------------------------------------- */

  .sh-page-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 20px;
    align-items: stretch;
  }

  .sh-page-copy {
    padding: 44px;
  }

  .sh-page-copy h1 {
    margin: 18px 0;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: clamp(40px, 4.5vw, 62px);
    line-height: 0.98;
    letter-spacing: -0.055em;
  }

  .sh-page-copy > p {
    margin: 0 0 28px;
    color: var(--sh-soft);
    font-size: 14px;
    line-height: 1.9;
  }

  .sh-about-image {
    min-height: 500px;
    padding: 12px;
  }

  .sh-about-image .sh-image-frame {
    min-height: 475px;
  }

  .sh-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .sh-stat {
    padding: 16px;
    border: 1px solid rgba(148,163,184,0.2);
    border-radius: 19px;
    background:
      linear-gradient(
        135deg,
        rgba(29,78,216,0.055),
        rgba(15,118,110,0.055)
      );
  }

  .sh-stat-label {
    margin-bottom: 6px;
    color: var(--sh-muted);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .sh-stat-value {
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.025em;
  }

  /* ----------------------------------------------------------
     SERVICES
     ---------------------------------------------------------- */

  .sh-services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .sh-service {
    padding: 29px;
  }

  .sh-service h3 {
    margin: 0 0 10px;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 21px;
    letter-spacing: -0.035em;
  }

  .sh-service p {
    margin: 0;
    color: var(--sh-soft);
    font-size: 13px;
    line-height: 1.8;
  }

  .sh-tech-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 18px;
    margin-top: 18px;
  }

  .sh-tech-copy {
    padding: 40px;
  }

  .sh-tech-copy h2 {
    margin: 15px 0;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 37px;
    line-height: 1;
    letter-spacing: -0.05em;
  }

  .sh-tech-copy p {
    margin: 0 0 22px;
    color: #cbd5e1;
    font-size: 13px;
    line-height: 1.85;
  }

  .sh-tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .sh-tech-tag {
    padding: 8px 11px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 999px;
    background: rgba(255,255,255,0.05);
    color: #e2e8f0;
    font-size: 10px;
  }

  .sh-tech-image {
    min-height: 330px;
    padding: 10px;
  }

  .sh-tech-image .sh-image-frame {
    min-height: 310px;
  }

  /* ----------------------------------------------------------
     CONTACT
     ---------------------------------------------------------- */

  .sh-contact-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 20px;
    align-items: start;
  }

  .sh-contact-info {
    overflow: hidden;
  }

  .sh-contact-image {
    height: 285px;
    padding: 10px;
  }

  .sh-contact-image .sh-image-frame {
    height: 265px;
  }

  .sh-contact-copy {
    padding: 32px 38px 38px;
  }

  .sh-contact-copy h1 {
    margin: 17px 0;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: clamp(35px, 4vw, 52px);
    line-height: 1;
    letter-spacing: -0.05em;
  }

  .sh-contact-copy > p {
    margin: 0 0 25px;
    color: var(--sh-soft);
    font-size: 13px;
    line-height: 1.85;
  }

  .sh-contact-details {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  .sh-contact-detail {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--sh-soft);
    font-size: 12px;
  }

  .sh-contact-form {
    padding: 38px;
  }

  .sh-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .sh-form-group {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .sh-form-label {
    color: var(--sh-muted);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .sh-input {
    width: 100%;
    padding: 13px 14px;
    border: 1px solid var(--sh-line);
    border-radius: 15px;
    outline: none;
    background: rgba(255,255,255,0.88);
    color: var(--sh-ink);
    font-size: 13px;
    transition:
      border-color 0.18s ease,
      box-shadow 0.18s ease;
  }

  .sh-input:focus {
    border-color: rgba(29,78,216,0.45);
    box-shadow:
      0 0 0 4px rgba(29,78,216,0.1);
  }

  .sh-textarea {
    min-height: 145px;
    resize: vertical;
  }

  .sh-success {
    padding: 30px;
    border: 1px solid rgba(15,118,110,0.15);
    border-radius: 22px;
    background:
      linear-gradient(
        135deg,
        rgba(29,78,216,0.06),
        rgba(15,118,110,0.08)
      );
  }

  .sh-success h2 {
    margin: 13px 0 8px;
    font-family:
      "Plus Jakarta Sans",
      Inter,
      sans-serif;
    font-size: 27px;
    letter-spacing: -0.035em;
  }

  .sh-success p {
    margin: 0;
    color: var(--sh-soft);
    font-size: 12px;
    line-height: 1.8;
  }

  /* ----------------------------------------------------------
     FOOTER
     ---------------------------------------------------------- */

  .sh-footer {
    padding: 0 0 35px;
  }

  .sh-footer-grid {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr 0.7fr 1fr;
    gap: 30px;
    padding: 35px;
  }

  .sh-footer p {
    color: var(--sh-soft);
    font-size: 12px;
    line-height: 1.8;
  }

  .sh-footer-heading {
    margin-bottom: 13px;
    font-size: 12px;
    font-weight: 800;
  }

  .sh-footer-links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--sh-soft);
    font-size: 11px;
  }

  .sh-footer-links button {
    width: fit-content;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font-size: inherit;
  }

  .sh-footer-links a:hover,
  .sh-footer-links button:hover {
    color: var(--sh-brand);
  }

  .sh-footer-bottom {
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid var(--sh-line);
    color: var(--sh-muted);
    font-size: 10px;
  }

  /* ----------------------------------------------------------
     MOBILE
     ---------------------------------------------------------- */

  @media (max-width: 1000px) {
    .sh-sidebar {
      width: 210px;
    }

    .sh-main {
      margin-left: 210px;
    }

    .sh-container {
      width: min(100% - 32px, 1160px);
    }

    .sh-hero {
      grid-template-columns: 1fr;
    }

    .sh-three-grid {
      grid-template-columns: 1fr;
    }

    .sh-trust {
      flex-direction: column;
      align-items: flex-start;
    }

    .sh-pill-list {
      justify-content: flex-start;
    }

    .sh-delivery,
    .sh-page-grid,
    .sh-contact-grid,
    .sh-tech-grid {
      grid-template-columns: 1fr;
    }

    .sh-footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 760px) {
    .sh-topbar {
      height: 70px;
      padding: 0 16px;
    }

    .sh-sidebar {
      display: none;
    }

    .sh-main {
      margin-left: 0;
      padding-top: 70px;
    }

    .sh-mobile-menu {
      display: flex;
    }

    .sh-container {
      width: calc(100% - 28px);
    }

    .sh-section {
      padding: 58px 0;
    }

    .sh-hero-images {
      grid-template-columns: 1fr;
    }

    .sh-hero-main-image {
      height: 380px;
    }

    .sh-hero-main-image .sh-image-frame {
      height: 360px;
    }

    .sh-hero-side {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .sh-side-image {
      height: 180px;
    }

    .sh-side-image .sh-image-frame {
      height: 164px;
    }

    .sh-kpi-grid {
      grid-template-columns: 1fr;
    }

    .sh-product {
      grid-template-columns: 1fr;
    }

    .sh-product-media {
      order: -1;
      min-height: 310px;
    }

    .sh-product-media .sh-image-frame {
      min-height: 285px;
    }

    .sh-product-copy {
      padding: 29px;
    }

    .sh-services-grid {
      grid-template-columns: 1fr;
    }

    .sh-cta {
      flex-direction: column;
      align-items: flex-start;
      padding: 30px;
    }

    .sh-footer-grid {
      grid-template-columns: 1fr;
    }

    .sh-brand-name {
      font-size: 16px;
    }

    .sh-brand-sub {
      font-size: 8px;
    }
  }

  @media (max-width: 480px) {
    .sh-hero-side {
      grid-template-columns: 1fr;
    }

    .sh-side-image {
      height: 210px;
    }

    .sh-side-image .sh-image-frame {
      height: 194px;
    }

    .sh-stat-grid {
      grid-template-columns: 1fr;
    }

    .sh-floating-note {
      right: 10px;
      bottom: 10px;
      max-width: 210px;
    }
  }
`;

/* ============================================================
   GLOBAL STYLE COMPONENT
   ============================================================ */

function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />;
}

/* ============================================================
   BRAND
   ============================================================ */

function Brand({ onClick }) {
  return (
    <button
      type="button"
      className="sh-brand"
      onClick={onClick}
      aria-label="Go to StellarOne Health home"
    >
      <div className="sh-brand-mark">
        <Sparkles size={18} strokeWidth={2.2} />
      </div>

      <div className="sh-brand-copy">
        <div className="sh-brand-name">
          {BRAND.name}
        </div>

        <div className="sh-brand-sub">
          Health Technologies
        </div>
      </div>
    </button>
  );
}

/* ============================================================
   ICON MAP
   ============================================================ */

function getNavIcon(id) {
  if (id === "Home") return HeartPulse;
  if (id === "About") return Building2;
  if (id === "Services") return Layers3;
  if (id === "Contact") return Mail;

  return Activity;
}

/* ============================================================
   TOP BAR
   ============================================================ */

function TopBar({
  onHome,
  mobileOpen,
  setMobileOpen,
}) {
  return (
    <header className="sh-topbar">
      <div className="sh-topbar-inner">
        <Brand onClick={onHome} />

        <button
          type="button"
          className="sh-mobile-menu"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>
    </header>
  );
}

/* ============================================================
   SIDEBAR
   ============================================================ */

function Sidebar({
  page,
  navigate,
}) {
  return (
    <aside className="sh-sidebar">
      <div className="sh-sidebar-label">
        Navigation
      </div>

      <nav className="sh-sidebar-nav">
        {NAV_ITEMS.map((item) => {
          const Icon = getNavIcon(item.id);

          return (
            <button
              type="button"
              key={item.id}
              className={`sh-sidebar-item ${
                page === item.id ? "active" : ""
              }`}
              onClick={() => navigate(item.id)}
            >
              <span className="sh-sidebar-icon">
                <Icon size={16} />
              </span>

              <span>{item.label}</span>
            </button>
          );
        })}

        <button
          type="button"
          className="sh-sidebar-item"
          onClick={() => navigate("Contact")}
          style={{ marginTop: 8 }}
        >
          <span
            className="sh-sidebar-icon"
            style={{
              color: COLORS.brand,
            }}
          >
            <ArrowRight size={16} />
          </span>

          <span>Book a Conversation</span>
        </button>
      </nav>

      <div className="sh-sidebar-bottom">
        <div className="sh-sidebar-card">
          <small>StellarOne Health</small>

          <strong>
            Healthcare. AI. Intelligence.
          </strong>

          <span>
            Connecting care experiences, revenue
            operations, and intelligent automation.
          </span>
        </div>
      </div>
    </aside>
  );
}

/* ============================================================
   MOBILE NAV
   ============================================================ */

function MobileNav({
  page,
  navigate,
  open,
  setOpen,
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 70,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: "12px 14px 16px",
        background: "rgba(244,247,251,0.97)",
        borderBottom: `1px solid ${COLORS.line}`,
        boxShadow:
          "0 25px 45px -35px rgba(15,23,42,0.4)",
      }}
    >
      {NAV_ITEMS.map((item) => {
        const Icon = getNavIcon(item.id);

        return (
          <button
            type="button"
            key={item.id}
            onClick={() => {
              navigate(item.id);
              setOpen(false);
            }}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "13px 12px",
              marginBottom: 4,
              border: 0,
              borderRadius: 13,
              background:
                page === item.id
                  ? "rgba(29,78,216,0.08)"
                  : "transparent",
              color:
                page === item.id
                  ? COLORS.brand
                  : COLORS.soft,
              textAlign: "left",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            <Icon size={17} />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================
   IMAGE COMPONENT
   ============================================================ */

function ImagePanel({
  src,
  alt,
  className = "",
  note,
}) {
  return (
    <div
      className={`sh-image-frame ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
      />

      {note ? (
        <div className="sh-floating-note">
          {note}
        </div>
      ) : null}
    </div>
  );
}

/* ============================================================
   HERO
   ============================================================ */

function Hero({ navigate }) {
  return (
    <section className="sh-section sh-section-top">
      <div className="sh-container">
        <div className="sh-hero">
          <div>
            <div className="sh-badge">
              <BadgeCheck size={13} />
              Enterprise Healthcare Technology
            </div>

            <h1 className="sh-font-display">
              Building the intelligent infrastructure for modern
              healthcare.
            </h1>

            <p className="sh-hero-description">
              StellarOne Health connects healthcare delivery,
              revenue operations, digital patient experiences,
              and AI-enabled workflows into a more intelligent
              operating model.
            </p>

            <div className="sh-button-row">
              <button
                type="button"
                className="sh-btn sh-btn-primary"
                onClick={() => navigate("Services")}
              >
                Explore capabilities
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                className="sh-btn sh-btn-outline"
                onClick={() => navigate("About")}
              >
                Why StellarOne
                <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="sh-kpi-grid">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.headline}
                  className="sh-kpi"
                >
                  <strong className="sh-font-display">
                    {item.headline}
                  </strong>

                  <span>{item.caption}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sh-hero-visual">
            <div
              className="sh-grid-overlay"
              aria-hidden="true"
            />

            <div className="sh-hero-images">
              <div className="sh-hero-main-image">
                <ImagePanel
                  src={IMAGES.hero}
                  alt="Healthcare professional using modern digital healthcare technology"
                  note={
                    <>
                      <small>
                        StellarOne Health
                      </small>

                      <p>
                        Technology designed around
                        healthcare operations, patient
                        experience, and intelligent
                        automation.
                      </p>
                    </>
                  }
                />
              </div>

              <div className="sh-hero-side">
                <div className="sh-side-image">
                  <ImagePanel
                    src={IMAGES.heroSecondary}
                    alt="Doctor using digital healthcare technology"
                  />
                </div>

                <div
                  className="sh-dark-card"
                  style={{
                    padding: 22,
                    borderRadius: 25,
                  }}
                >
                  <div
                    style={{
                      color: "#94a3b8",
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginBottom: 13,
                    }}
                  >
                    Our focus
                  </div>

                  {[
                    "Care experience",
                    "Revenue intelligence",
                    "Enterprise AI",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        marginBottom: 10,
                        color: "#e2e8f0",
                        fontSize: 11,
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckCircle2
                        size={14}
                        color="#6ee7b7"
                        style={{
                          flex: "0 0 auto",
                          marginTop: 1,
                        }}
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TRUST
   ============================================================ */

function TrustSection() {
  return (
    <section
      className="sh-section"
      style={{ paddingTop: 0 }}
    >
      <div className="sh-container">
        <div className="sh-card sh-trust">
          <div>
            <div className="sh-badge">
              <Building2 size={13} />
              Enterprise Readiness
            </div>

            <h2 className="sh-font-display">
              A credible digital presence for healthcare buyers,
              partners, and operational leaders.
            </h2>
          </div>

          <div className="sh-pill-list">
            {TRUST_POINTS.map((point) => (
              <span
                key={point}
                className="sh-pill"
              >
                <ShieldCheck
                  size={13}
                  color={COLORS.accent}
                />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PILLARS
   ============================================================ */

function PillarsSection() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <div className="sh-badge">
            <Layers3 size={13} />
            Three Operating Pillars
          </div>

          <h2 className="sh-font-display">
            Connecting the patient, the operation, and the
            intelligence layer.
          </h2>

          <p>
            StellarOne Health brings together digital care
            experiences, healthcare revenue operations, and
            AI-enabled workflows into a connected operating
            model.
          </p>
        </div>

        <div className="sh-three-grid">
          {PILLARS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="sh-card sh-pillar"
              >
                <div
                  className="sh-feature-icon"
                  style={{
                    color: item.color,
                  }}
                >
                  <Icon size={21} />
                </div>

                <h3 className="sh-font-display">
                  {item.title}
                </h3>

                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRODUCTS
   ============================================================ */

function ProductsSection({ navigate }) {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <div className="sh-badge">
            <Sparkles size={13} />
            Our Platforms
          </div>

          <h2 className="sh-font-display">
            Products built around real healthcare workflows.
          </h2>

          <p>
            From revenue intelligence to patient-facing
            telehealth, StellarOne Health focuses on practical
            technology that improves healthcare experiences.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {PRODUCTS.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="sh-card sh-product"
              >
                <div
                  className="sh-product-copy"
                  style={{
                    order:
                      index % 2 === 1
                        ? 2
                        : 1,
                  }}
                >
                  <div className="sh-product-heading">
                    <div
                      className="sh-feature-icon"
                      style={{
                        color: item.accent,
                        marginBottom: 0,
                      }}
                    >
                      <Icon size={21} />
                    </div>

                    <div>
                      <p>
                        {item.subtitle}
                      </p>

                      <h3 className="sh-font-display">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p>{item.text}</p>

                  <div className="sh-check-list">
                    {item.bullets.map(
                      (bullet) => (
                        <div
                          key={bullet}
                          className="sh-check"
                        >
                          <CheckCircle2
                            size={15}
                            color={item.accent}
                          />

                          <span>{bullet}</span>
                        </div>
                      )
                    )}
                  </div>

                  <button
                    type="button"
                    className="sh-btn sh-btn-outline"
                    style={{
                      width: "fit-content",
                    }}
                    onClick={() =>
                      navigate("Services")
                    }
                  >
                    View capabilities
                    <ArrowUpRight size={15} />
                  </button>
                </div>

                <div
                  className="sh-product-media"
                  style={{
                    order:
                      index % 2 === 1
                        ? 1
                        : 2,
                  }}
                >
                  <ImagePanel
                    src={item.image}
                    alt={
                      item.title ===
                      "Stellar.AI"
                        ? "Healthcare operations and analytics"
                        : "Doctor providing telehealth consultation"
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DELIVERY
   ============================================================ */

function DeliverySection() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-delivery">
          <div className="sh-dark-card sh-delivery-intro">
            <div
              className="sh-badge"
              style={{
                color: "white",
                borderColor:
                  "rgba(255,255,255,0.1)",
                background:
                  "rgba(255,255,255,0.07)",
              }}
            >
              <Cpu size={13} />
              Operating Model
            </div>

            <h2 className="sh-font-display">
              From healthcare complexity to controlled digital
              execution.
            </h2>

            <p>
              We focus on high-value healthcare workflows first,
              then build toward a connected digital operating
              model that can scale across teams, products, and
              patient journeys.
            </p>
          </div>

          <div className="sh-step-list">
            {DELIVERY_STEPS.map(
              (step, index) => (
                <div
                  key={step.title}
                  className="sh-card sh-step"
                >
                  <div className="sh-step-number">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="sh-font-display">
                      {step.title}
                    </h3>

                    <p>{step.text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA
   ============================================================ */

function CTASection({ navigate }) {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-dark-card sh-cta">
          <div>
            <small>
              Ready for the next step
            </small>

            <h2 className="sh-font-display">
              Let's build the next generation of healthcare
              technology together.
            </h2>
          </div>

          <button
            type="button"
            className="sh-btn sh-btn-primary"
            onClick={() => navigate("Contact")}
          >
            Connect with the team
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOME PAGE
   ============================================================ */

function HomePage({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <TrustSection />
      <PillarsSection />
      <ProductsSection navigate={navigate} />
      <DeliverySection />
      <CTASection navigate={navigate} />
    </>
  );
}

/* ============================================================
   ABOUT PAGE
   ============================================================ */

function AboutPage() {
  return (
    <section className="sh-section sh-section-top">
      <div className="sh-container">
        <div className="sh-page-grid">
          <div className="sh-card sh-page-copy">
            <div className="sh-badge">
              <Sparkles size={13} />
              About StellarOne Health
            </div>

            <h1 className="sh-font-display">
              Healthcare technology with an enterprise mindset.
            </h1>

            <p>
              StellarOne Health is focused on modernizing the way
              healthcare organizations connect patient
              experiences, operational workflows, revenue
              processes, and artificial intelligence.
            </p>

            <p>
              Our approach combines practical workflow design,
              intelligent automation, data visibility, and
              human oversight — helping healthcare teams adopt
              technology without losing control of the operation.
            </p>

            <div className="sh-stat-grid">
              <div className="sh-stat">
                <div className="sh-stat-label">
                  Headquarters
                </div>

                <div className="sh-stat-value">
                  India
                </div>
              </div>

              <div className="sh-stat">
                <div className="sh-stat-label">
                  Primary Market
                </div>

                <div className="sh-stat-value">
                  United States
                </div>
              </div>

              <div className="sh-stat">
                <div className="sh-stat-label">
                  Platforms
                </div>

                <div className="sh-stat-value">
                  Stellar.AI
                </div>
              </div>

              <div className="sh-stat">
                <div className="sh-stat-label">
                  Digital Care
                </div>

                <div className="sh-stat-value">
                  EasyMed
                </div>
              </div>
            </div>
          </div>

          <div className="sh-card sh-about-image">
            <ImagePanel
              src={IMAGES.about}
              alt="Healthcare professionals collaborating around technology"
            />
          </div>
        </div>

        <div
          className="sh-three-grid"
          style={{
            marginTop: 20,
          }}
        >
          {PILLARS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="sh-card sh-pillar"
              >
                <div
                  className="sh-feature-icon"
                  style={{
                    color: item.color,
                  }}
                >
                  <Icon size={21} />
                </div>

                <h3 className="sh-font-display">
                  {item.title}
                </h3>

                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICES PAGE
   ============================================================ */

function ServicesPage() {
  return (
    <section className="sh-section sh-section-top">
      <div className="sh-container">
        <div className="sh-section-head">
          <div className="sh-badge">
            <BarChart3 size={13} />
            Services & Products
          </div>

          <h1 className="sh-page-title sh-font-display">
            Healthcare capabilities designed for measurable
            operational impact.
          </h1>

          <p className="sh-page-description">
            StellarOne Health combines healthcare expertise,
            digital experiences, automation, analytics, and AI
            to help organizations modernize critical workflows.
          </p>
        </div>

        <div className="sh-services-grid">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="sh-card sh-service"
              >
                <div className="sh-feature-icon">
                  <Icon size={21} />
                </div>

                <h3 className="sh-font-display">
                  {service.title}
                </h3>

                <p>{service.text}</p>
              </div>
            );
          })}
        </div>

        <div className="sh-tech-grid">
          <div className="sh-dark-card sh-tech-copy">
            <div
              className="sh-badge"
              style={{
                color: "white",
                borderColor:
                  "rgba(255,255,255,0.1)",
                background:
                  "rgba(255,255,255,0.07)",
              }}
            >
              <Cpu size={13} />
              Technology Foundation
            </div>

            <h2 className="sh-font-display">
              A connected technology stack for modern healthcare
              workflows.
            </h2>

            <p>
              Our architecture can bring together patient
              experiences, AI orchestration, operational
              applications, APIs, analytics, and enterprise
              integrations into a cohesive ecosystem.
            </p>

            <div className="sh-tech-tags">
              {[
                "React",
                "FastAPI",
                "Node.js",
                "Express",
                "LangChain",
                "ChromaDB",
                "Firebase",
                "Vercel",
              ].map((item) => (
                <span
                  key={item}
                  className="sh-tech-tag"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="sh-card sh-tech-image">
            <ImagePanel
              src={IMAGES.operations}
              alt="Healthcare operations analytics"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT PAGE
   ============================================================ */

function ContactPage() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const updateField = (
    field,
    value
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="sh-section sh-section-top">
      <div className="sh-container">
        <div className="sh-contact-grid">
          <div className="sh-card sh-contact-info">
            <div className="sh-contact-image">
              <ImagePanel
                src={IMAGES.contact}
                alt="Modern healthcare facility"
              />
            </div>

            <div className="sh-contact-copy">
              <div className="sh-badge">
                <Mail size={13} />
                Contact StellarOne Health
              </div>

              <h1 className="sh-font-display">
                Let's start a conversation.
              </h1>

              <p>
                Whether you're exploring healthcare AI,
                revenue-cycle modernization, telehealth, or
                digital transformation, we'd love to understand
                what you're trying to accomplish.
              </p>

              <div className="sh-contact-details">
                <div className="sh-contact-detail">
                  <Mail
                    size={16}
                    color={COLORS.brand}
                  />

                  <a
                    href={`mailto:${BRAND.email}`}
                  >
                    {BRAND.email}
                  </a>
                </div>

                <div className="sh-contact-detail">
                  <Phone
                    size={16}
                    color={COLORS.brand}
                  />

                  <a
                    href={`tel:${BRAND.phone.replace(
                      /\\s/g,
                      ""
                    )}`}
                  >
                    {BRAND.phone}
                  </a>
                </div>

                <div className="sh-contact-detail">
                  <MapPin
                    size={16}
                    color={COLORS.brand}
                  />

                  <span>
                    India · Serving healthcare
                    organizations in the United States
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="sh-card sh-contact-form">
            {sent ? (
              <div className="sh-success">
                <CheckCircle2
                  size={28}
                  color={COLORS.accent}
                />

                <h2 className="sh-font-display">
                  Message received.
                </h2>

                <p>
                  Thank you for reaching out to StellarOne
                  Health. The front-end form is ready for
                  connection to your production email or backend
                  service.
                </p>
              </div>
            ) : (
              <form
                className="sh-form"
                onSubmit={handleSubmit}
              >
                <div className="sh-form-group">
                  <label
                    htmlFor="stellar-name"
                    className="sh-form-label"
                  >
                    Name
                  </label>

                  <input
                    id="stellar-name"
                    className="sh-input"
                    required
                    value={form.name}
                    onChange={(event) =>
                      updateField(
                        "name",
                        event.target.value
                      )
                    }
                    placeholder="Your name"
                  />
                </div>

                <div className="sh-form-group">
                  <label
                    htmlFor="stellar-email"
                    className="sh-form-label"
                  >
                    Email
                  </label>

                  <input
                    id="stellar-email"
                    className="sh-input"
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField(
                        "email",
                        event.target.value
                      )
                    }
                    placeholder="you@company.com"
                  />
                </div>

                <div className="sh-form-group">
                  <label
                    htmlFor="stellar-company"
                    className="sh-form-label"
                  >
                    Company
                  </label>

                  <input
                    id="stellar-company"
                    className="sh-input"
                    value={form.company}
                    onChange={(event) =>
                      updateField(
                        "company",
                        event.target.value
                      )
                    }
                    placeholder="Company name"
                  />
                </div>

                <div className="sh-form-group">
                  <label
                    htmlFor="stellar-message"
                    className="sh-form-label"
                  >
                    Message
                  </label>

                  <textarea
                    id="stellar-message"
                    className="sh-input sh-textarea"
                    required
                    value={form.message}
                    onChange={(event) =>
                      updateField(
                        "message",
                        event.target.value
                      )
                    }
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="sh-btn sh-btn-primary"
                  style={{
                    width: "fit-content",
                    marginTop: 4,
                  }}
                >
                  Send message
                  <ArrowRight size={15} />
                </button>

                <div
                  style={{
                    color: COLORS.muted,
                    fontSize: 10,
                    lineHeight: 1.6,
                  }}
                >
                  Your enquiry will be directed to{" "}
                  <strong>
                    {BRAND.email}
                  </strong>
                  .
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer({ navigate }) {
  return (
    <footer className="sh-footer">
      <div className="sh-container">
        <div className="sh-card sh-footer-grid">
          <div>
            <Brand onClick={() => navigate("Home")} />

            <p>
              Healthcare technology experiences built to connect
              care delivery, revenue workflows, patient access,
              and enterprise AI modernization.
            </p>
          </div>

          <div>
            <div className="sh-footer-heading">
              Navigate
            </div>

            <div className="sh-footer-links">
              {NAV_ITEMS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() =>
                    navigate(item.id)
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="sh-footer-heading">
              Solutions
            </div>

            <div className="sh-footer-links">
              <span>Stellar.AI</span>
              <span>EasyMed</span>
              <span>Healthcare AI</span>
              <span>Revenue Operations</span>
            </div>
          </div>

          <div>
            <div className="sh-footer-heading">
              Contact
            </div>

            <div className="sh-footer-links">
              <a
                href={`mailto:${BRAND.email}`}
              >
                {BRAND.email}
              </a>

              <a
                href={`tel:${BRAND.phone.replace(
                  /\\s/g,
                  ""
                )}`}
              >
                {BRAND.phone}
              </a>

              <span>
                India · United States
              </span>
            </div>
          </div>

          <div
            className="sh-footer-bottom"
            style={{
              gridColumn: "1 / -1",
            }}
          >
            © {new Date().getFullYear()}{" "}
            {BRAND.legalName}. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   MAIN APP
   ============================================================ */

export default function StellarOneSite() {
  const [page, setPage] =
    useState("Home");

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const navigate = (nextPage) => {
    const validPage = NAV_ITEMS.some(
      (item) => item.id === nextPage
    );

    if (!validPage) {
      return;
    }

    setPage(nextPage);
    setMobileOpen(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <div className="sh-root">
      <GlobalStyles />

      <TopBar
        onHome={() => navigate("Home")}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Sidebar
        page={page}
        navigate={navigate}
      />

      <MobileNav
        page={page}
        navigate={navigate}
        open={mobileOpen}
        setOpen={setMobileOpen}
      />

      <main className="sh-main">
        {page === "Home" && (
          <HomePage navigate={navigate} />
        )}

        {page === "About" && (
          <AboutPage />
        )}

        {page === "Services" && (
          <ServicesPage />
        )}

        {page === "Contact" && (
          <ContactPage />
        )}

        <Footer navigate={navigate} />
      </main>
    </div>
  );
}