import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleCheck,
  Code2,
  HeartPulse,
  Home,
  Hospital,
  Menu,
  MessageSquare,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

/* =========================================================
   BRAND
========================================================= */

const BRAND = {
  name: "StellarOne Health",
  legalName: "StellarOne Health Technologies Pvt. Ltd.",
  email: "Praveen.Jayaraman@stellaronehealth.com",
  phone: "+91 91803 28119",
};

/* =========================================================
   STELLARONE HEALTH COLOR PALETTE
========================================================= */

const COLORS = {
  background: "#f4f7fb",
  surface: "rgba(255,255,255,0.84)",
  surfaceSolid: "#ffffff",
  panel: "#eaf0f8",

  ink: "#0f172a",
  inkSoft: "#475569",
  inkMuted: "#64748b",

  line: "rgba(148,163,184,0.24)",
  lineStrong: "rgba(148,163,184,0.40)",

  brand: "#1d4ed8",
  brandDeep: "#0f3aa9",

  accent: "#0f766e",
  accentSoft: "#dff7f1",

  gold: "#c7922d",

  navy: "#091221",
  navySoft: "#0d1b33",
};

/* =========================================================
   TEMPORARY VISUAL ASSETS
========================================================= */

const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=88",

  heroSecondary:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=88",

  operations:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=88",

  telehealth:
    "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1600&q=88",

  about:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=88",

  contact:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=88",

  /* Services */

  aiWorkflows:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=88",

  revenueCycle:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=88",

  patientAccess:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=88",

  softwareEngineering:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=88",

  enterpriseIntegration:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=88",

  healthcareConsulting:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=88",
};

/* =========================================================
   GLOBAL STYLES
========================================================= */

function GlobalStyles() {
  return (
    <style>{`

      :root {
        --background: ${COLORS.background};
        --surface: ${COLORS.surface};
        --surface-solid: ${COLORS.surfaceSolid};
        --panel: ${COLORS.panel};

        --ink: ${COLORS.ink};
        --ink-soft: ${COLORS.inkSoft};
        --ink-muted: ${COLORS.inkMuted};

        --line: ${COLORS.line};
        --line-strong: ${COLORS.lineStrong};

        --brand: ${COLORS.brand};
        --brand-deep: ${COLORS.brandDeep};

        --accent: ${COLORS.accent};
        --accent-soft: ${COLORS.accentSoft};

        --gold: ${COLORS.gold};

        --navy: ${COLORS.navy};
        --navy-soft: ${COLORS.navySoft};

        --shadow:
          0 30px 70px -45px rgba(15,23,42,0.45);

        --radius-lg: 28px;
        --radius-md: 20px;
        --radius-sm: 14px;
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        background: var(--background);
        color: var(--ink);

        font-family:
          Inter,
          ui-sans-serif,
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          sans-serif;

        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }

      body,
      button,
      input,
      textarea {
        font-family: inherit;
      }

      button,
      a {
        -webkit-tap-highlight-color: transparent;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      img {
        display: block;
        max-width: 100%;
      }

      button {
        cursor: pointer;
      }

      ::selection {
        background: rgba(29,78,216,0.16);
      }

      .sh-app {
        min-height: 100vh;
        overflow-x: hidden;

        background:
          radial-gradient(
            circle at 80% 0%,
            rgba(29,78,216,0.07),
            transparent 32rem
          ),
          var(--background);
      }

      /* =====================================================
         TOP BAR
      ===================================================== */

      .sh-topbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        height: 78px;

        z-index: 1000;

        display: flex;
        align-items: center;

        background: rgba(244,247,251,0.86);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        border-bottom: 1px solid var(--line);
      }

      .sh-topbar-inner {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 30px;
      }

      .sh-brand {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .sh-brand-mark {
        width: 40px;
        height: 40px;

        border-radius: 12px;

        display: grid;
        place-items: center;

        background:
          linear-gradient(
            145deg,
            var(--brand),
            var(--brand-deep)
          );

        color: white;

        box-shadow:
          0 12px 30px -14px rgba(29,78,216,0.65);
      }

      .sh-brand-name {
        font-size: 18px;
        font-weight: 850;
        letter-spacing: -0.035em;
      }

      .sh-brand-subtitle {
        color: var(--ink-muted);
        font-size: 11px;
        margin-top: 2px;
      }

      .sh-mobile-menu-btn {
        display: none;

        width: 44px;
        height: 44px;

        border: 1px solid var(--line);
        border-radius: 12px;

        background: rgba(255,255,255,0.86);
        color: var(--ink);

        align-items: center;
        justify-content: center;
      }

      /* =====================================================
         SIDEBAR
      ===================================================== */

      .sh-sidebar {
        position: fixed;

        top: 78px;
        bottom: 0;
        left: 0;

        width: 245px;

        z-index: 900;

        display: flex;
        flex-direction: column;

        padding: 28px 18px;

        background: rgba(255,255,255,0.72);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        border-right: 1px solid var(--line);
      }

      .sh-nav-label {
        padding: 0 12px;

        margin:
          6px 0
          12px;

        color: var(--ink-muted);

        font-size: 10px;
        font-weight: 850;

        letter-spacing: 0.14em;
        text-transform: uppercase;
      }

      .sh-nav {
        display: grid;
        gap: 6px;
      }

      .sh-nav-button {
        width: 100%;

        display: flex;
        align-items: center;

        gap: 12px;

        border: 0;
        border-radius: 14px;

        padding: 13px 14px;

        background: transparent;
        color: var(--ink-soft);

        font-size: 14px;
        font-weight: 700;

        text-align: left;

        transition:
          background 0.2s ease,
          color 0.2s ease,
          transform 0.2s ease;
      }

      .sh-nav-button:hover {
        background: rgba(29,78,216,0.06);
        color: var(--brand);

        transform: translateX(2px);
      }

      .sh-nav-button.active {
        background: rgba(29,78,216,0.09);
        color: var(--brand);
      }

      .sh-nav-icon {
        width: 19px;
        height: 19px;

        flex: 0 0 auto;
      }

      .sh-sidebar-bottom {
        margin-top: auto;
      }

      .sh-sidebar-card {
        padding: 18px;

        border-radius: 18px;

        background:
          linear-gradient(
            145deg,
            rgba(29,78,216,0.09),
            rgba(15,118,110,0.08)
          );

        border: 1px solid var(--line);
      }

      .sh-sidebar-card strong {
        display: block;

        font-size: 14px;

        margin-bottom: 6px;
      }

      .sh-sidebar-card p {
        margin: 0;

        color: var(--ink-muted);

        font-size: 12px;
        line-height: 1.6;
      }

      /* =====================================================
         MOBILE DRAWER
      ===================================================== */

      .sh-mobile-overlay {
        position: fixed;
        inset: 0;

        z-index: 1200;

        background: rgba(9,18,33,0.4);

        backdrop-filter: blur(4px);
      }

      .sh-mobile-drawer {
        position: fixed;

        top: 0;
        right: 0;
        bottom: 0;

        width: min(86vw, 360px);

        z-index: 1300;

        padding: 24px;

        background: #fff;

        box-shadow:
          -30px 0 70px -35px rgba(15,23,42,0.5);
      }

      .sh-mobile-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-bottom: 22px;

        border-bottom: 1px solid var(--line);
      }

      .sh-close-btn {
        width: 42px;
        height: 42px;

        display: grid;
        place-items: center;

        border:
          1px solid var(--line);

        border-radius: 12px;

        background: var(--background);
        color: var(--ink);
      }

      .sh-mobile-nav {
        display: grid;
        gap: 7px;

        margin-top: 24px;
      }

      .sh-mobile-nav .sh-nav-button {
        padding: 15px;
      }

      /* =====================================================
         MAIN
      ===================================================== */

      .sh-main {
        margin-left: 245px;
        padding-top: 78px;
      }

      .sh-container {
        width: min(1280px, 100%);
        margin: 0 auto;
      }

      .sh-section {
        padding: 110px 6vw;
      }

      /* =====================================================
         EYEBROW
      ===================================================== */

      .sh-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;

        color: var(--brand);

        font-size: 11px;
        font-weight: 850;

        letter-spacing: 0.15em;
        text-transform: uppercase;
      }

      .sh-eyebrow-dot {
        width: 7px;
        height: 7px;

        border-radius: 50%;

        background: var(--accent);
      }

      /* =====================================================
         HERO
      ===================================================== */

      .sh-hero {
        min-height: calc(100vh - 78px);

        display: flex;
        align-items: center;

        padding:
          clamp(60px,8vw,120px)
          6vw;
      }

      .sh-hero-grid {
        width: min(1280px,100%);
        margin: 0 auto;

        display: grid;

        grid-template-columns:
          minmax(0,1.02fr)
          minmax(420px,.98fr);

        gap:
          clamp(50px,7vw,110px);

        align-items: center;
      }

      .sh-hero-copy {
        max-width: 760px;
      }

      .sh-hero-title {
        margin:
          22px 0
          28px;

        font-size:
          clamp(44px,6.2vw,84px);

        line-height: 0.98;

        letter-spacing: -0.06em;

        font-weight: 850;
      }

      .sh-gradient-text {
        background:
          linear-gradient(
            110deg,
            var(--brand-deep),
            var(--brand),
            var(--accent)
          );

        -webkit-background-clip: text;
        background-clip: text;

        color: transparent;
      }

      .sh-hero-description {
        max-width: 680px;

        margin: 0;

        color: var(--ink-soft);

        font-size:
          clamp(17px,1.45vw,20px);

        line-height: 1.7;
      }

      .sh-hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;

        margin-top: 36px;
      }

      .sh-btn {
        min-height: 50px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        gap: 9px;

        padding: 0 20px;

        border-radius: 13px;

        border: 1px solid transparent;

        font-size: 14px;
        font-weight: 750;

        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      .sh-btn:hover {
        transform: translateY(-2px);
      }

      .sh-btn-primary {
        color: #fff;

        background:
          linear-gradient(
            135deg,
            var(--brand),
            var(--brand-deep)
          );

        box-shadow:
          0 20px 40px -25px
          rgba(29,78,216,0.75);
      }

      .sh-btn-secondary {
        background: rgba(255,255,255,0.75);

        border-color: var(--line-strong);

        color: var(--ink);
      }

      .sh-hero-note {
        display: flex;
        align-items: center;

        gap: 9px;

        margin-top: 28px;

        color: var(--ink-muted);

        font-size: 12px;
      }

      .sh-hero-note svg {
        color: var(--accent);
      }

      /* =====================================================
         HERO IMAGE
      ===================================================== */

      .sh-hero-visual {
        position: relative;
      }

      .sh-hero-image {
        position: relative;

        min-height: 590px;

        overflow: hidden;

        border-radius: 34px;

        border: 1px solid rgba(255,255,255,0.7);

        box-shadow: var(--shadow);
      }

      .sh-hero-image img {
        width: 100%;
        height: 590px;

        object-fit: cover;
      }

      .sh-image-overlay {
        position: absolute;
        inset: 0;

        background:
          linear-gradient(
            180deg,
            rgba(9,18,33,0.02),
            rgba(9,18,33,0.45)
          );
      }

      .sh-floating-stat {
        position: absolute;

        left: -34px;
        bottom: 38px;

        width: 210px;

        padding: 20px;

        border-radius: 20px;

        background: rgba(255,255,255,0.92);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        border: 1px solid rgba(255,255,255,0.8);

        box-shadow:
          0 25px 55px -35px
          rgba(15,23,42,0.6);
      }

      .sh-floating-stat-number {
        font-size: 32px;
        line-height: 1;

        font-weight: 850;

        color: var(--brand-deep);
      }

      .sh-floating-stat-label {
        margin-top: 8px;

        color: var(--ink-muted);

        font-size: 12px;
        line-height: 1.5;
      }

      .sh-floating-badge {
        position: absolute;

        right: -25px;
        top: 34px;

        display: flex;
        align-items: center;

        gap: 9px;

        padding: 13px 15px;

        border-radius: 14px;

        background: var(--navy);
        color: white;

        box-shadow:
          0 25px 50px -30px
          rgba(9,18,33,0.8);

        font-size: 12px;
        font-weight: 700;
      }

      /* =====================================================
         STATEMENT
      ===================================================== */

      .sh-statement {
        padding-top: 80px;
        padding-bottom: 80px;
      }

      .sh-statement-grid {
        display: grid;

        grid-template-columns:
          0.75fr
          1.25fr;

        gap: 80px;

        align-items: start;
      }

      .sh-statement-title {
        margin: 0;

        font-size:
          clamp(38px,5vw,64px);

        line-height: 1.02;

        letter-spacing: -0.055em;

        font-weight: 850;
      }

      .sh-statement-copy {
        padding-top: 8px;

        color: var(--ink-soft);

        font-size:
          clamp(18px,1.5vw,21px);

        line-height: 1.75;
      }

      /* =====================================================
         CAPABILITIES
      ===================================================== */

      .sh-capabilities {
        padding-top: 55px;
      }

      .sh-capability-grid {
        margin-top: 50px;

        display: grid;

        grid-template-columns:
          repeat(4,1fr);

        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
      }

      .sh-capability {
        min-height: 270px;

        padding: 34px 28px;

        border-right:
          1px solid var(--line);

        transition:
          background 0.25s ease;
      }

      .sh-capability:last-child {
        border-right: 0;
      }

      .sh-capability:hover {
        background:
          rgba(255,255,255,0.65);
      }

      .sh-capability-icon {
        width: 46px;
        height: 46px;

        display: grid;
        place-items: center;

        border-radius: 14px;

        background:
          rgba(29,78,216,0.08);

        color: var(--brand);
      }

      .sh-capability h3 {
        margin:
          30px 0
          12px;

        font-size: 20px;

        letter-spacing: -0.025em;
      }

      .sh-capability p {
        margin: 0;

        color: var(--ink-muted);

        font-size: 14px;
        line-height: 1.7;
      }

      /* =====================================================
         PRODUCT SECTIONS
      ===================================================== */

      .sh-product-section {
        padding:
          120px
          6vw;
      }

      .sh-product-dark {
        background:
          radial-gradient(
            circle at 90% 10%,
            rgba(29,78,216,0.23),
            transparent 32rem
          ),
          var(--navy);

        color: white;
      }

      .sh-product-grid {
        display: grid;

        grid-template-columns:
          minmax(0,.92fr)
          minmax(0,1.08fr);

        gap:
          clamp(50px,7vw,110px);

        align-items: center;
      }

      .sh-product-grid.reverse {
        grid-template-columns:
          minmax(0,1.08fr)
          minmax(0,.92fr);
      }

      .sh-product-copy {
        max-width: 650px;
      }

      .sh-product-label {
        display: flex;
        align-items: center;

        gap: 10px;

        color: var(--accent);

        font-size: 12px;
        font-weight: 800;

        letter-spacing: 0.15em;
        text-transform: uppercase;
      }

      .sh-product-dark .sh-product-label {
        color: #69d6ca;
      }

      .sh-product-title {
        margin:
          22px 0
          22px;

        font-size:
          clamp(38px,4.5vw,60px);

        line-height: 1;

        letter-spacing: -0.055em;

        font-weight: 850;
      }

      .sh-product-description {
        margin: 0;

        color: var(--ink-soft);

        font-size: 17px;

        line-height: 1.75;
      }

      .sh-product-dark .sh-product-description {
        color: rgba(255,255,255,0.68);
      }

      .sh-product-list {
        display: grid;
        gap: 14px;

        margin:
          32px 0
          0;

        padding: 0;

        list-style: none;
      }

      .sh-product-list li {
        display: flex;
        align-items: flex-start;

        gap: 10px;

        color: var(--ink-soft);

        font-size: 14px;
        line-height: 1.55;
      }

      .sh-product-dark .sh-product-list li {
        color: rgba(255,255,255,0.72);
      }

      .sh-product-list svg {
        flex: 0 0 auto;

        margin-top: 2px;

        color: var(--accent);
      }

      .sh-product-visual {
        position: relative;
      }

      .sh-product-image {
        overflow: hidden;

        border-radius: 30px;

        min-height: 520px;

        border: 1px solid var(--line);

        box-shadow: var(--shadow);
      }

      .sh-product-dark .sh-product-image {
        border-color:
          rgba(255,255,255,0.12);

        box-shadow:
          0 35px 80px -45px
          rgba(0,0,0,0.8);
      }

      .sh-product-image img {
        width: 100%;
        height: 520px;

        object-fit: cover;
      }

      .sh-product-card {
        position: absolute;

        right: 25px;
        bottom: 25px;

        width:
          min(290px,calc(100% - 50px));

        padding: 20px;

        border-radius: 18px;

        background:
          rgba(255,255,255,0.92);

        color: var(--ink);

        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);

        box-shadow:
          0 25px 60px -40px
          rgba(15,23,42,0.65);
      }

      .sh-product-dark .sh-product-card {
        background:
          rgba(13,27,51,0.91);

        color: white;

        border:
          1px solid
          rgba(255,255,255,0.12);
      }

      .sh-product-card-label {
        color: var(--ink-muted);

        font-size: 10px;
        font-weight: 800;

        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .sh-product-dark .sh-product-card-label {
        color:
          rgba(255,255,255,0.5);
      }

      .sh-product-card-title {
        margin-top: 8px;

        font-size: 18px;
        font-weight: 800;

        letter-spacing: -0.02em;
      }

      /* =====================================================
         OUTCOMES
      ===================================================== */

      .sh-outcomes {
        padding-top: 120px;
        padding-bottom: 120px;
      }

      .sh-outcomes-header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        gap: 40px;
      }

      .sh-section-title {
        margin:
          18px 0
          0;

        font-size:
          clamp(38px,4.7vw,62px);

        line-height: 1.02;

        letter-spacing: -0.055em;

        font-weight: 850;
      }

      .sh-section-description {
        max-width: 500px;

        color: var(--ink-soft);

        font-size: 16px;
        line-height: 1.7;
      }

      .sh-outcome-grid {
        display: grid;

        grid-template-columns:
          repeat(3,1fr);

        margin-top: 60px;

        border-top: 1px solid var(--line);
      }

      .sh-outcome {
        padding: 34px 30px;

        border-right:
          1px solid var(--line);
      }

      .sh-outcome:last-child {
        border-right: 0;
      }

      .sh-outcome-number {
        color: var(--brand);

        font-size: 13px;
        font-weight: 800;

        letter-spacing: 0.1em;
      }

      .sh-outcome h3 {
        margin:
          26px 0
          12px;

        font-size: 23px;

        letter-spacing: -0.03em;
      }

      .sh-outcome p {
        margin: 0;

        color: var(--ink-muted);

        font-size: 14px;
        line-height: 1.7;
      }

      /* =====================================================
         CTA
      ===================================================== */

      .sh-cta {
        padding:
          110px
          6vw;
      }

      .sh-cta-box {
        position: relative;

        overflow: hidden;

        padding:
          clamp(45px,7vw,90px);

        border-radius: 32px;

        background:
          radial-gradient(
            circle at 85% 10%,
            rgba(15,118,110,0.26),
            transparent 25rem
          ),
          linear-gradient(
            135deg,
            var(--navy),
            var(--navy-soft)
          );

        color: white;
      }

      .sh-cta-title {
        max-width: 850px;

        margin:
          18px 0
          20px;

        font-size:
          clamp(38px,5vw,66px);

        line-height: 1;

        letter-spacing: -0.055em;

        font-weight: 850;
      }

      .sh-cta-description {
        max-width: 670px;

        color:
          rgba(255,255,255,0.66);

        font-size: 17px;
        line-height: 1.7;
      }

      /* =====================================================
         PAGE HERO
      ===================================================== */

      .sh-page-hero {
        padding:
          100px
          6vw
          80px;
      }

      .sh-page-hero-grid {
        width: min(1280px,100%);
        margin: 0 auto;

        display: grid;

        grid-template-columns:
          minmax(0,1fr)
          minmax(400px,.8fr);

        gap: 80px;

        align-items: center;
      }

      .sh-page-title {
        margin:
          22px 0;

        font-size:
          clamp(44px,6vw,78px);

        line-height: 0.98;

        letter-spacing: -0.06em;

        font-weight: 850;
      }

      .sh-page-description {
        max-width: 680px;

        color: var(--ink-soft);

        font-size: 18px;
        line-height: 1.75;
      }

      .sh-page-image {
        overflow: hidden;

        border-radius: 30px;

        box-shadow: var(--shadow);
      }

      .sh-page-image img {
        width: 100%;
        height: 480px;

        object-fit: cover;
      }

      /* =====================================================
         ABOUT
      ===================================================== */

      .sh-mission {
        padding-top: 70px;
      }

      .sh-mission-grid {
        display: grid;

        grid-template-columns:
          0.7fr
          1.3fr;

        gap: 80px;
      }

      .sh-mission-title {
        margin: 0;

        font-size:
          clamp(34px,4vw,55px);

        line-height: 1.03;

        letter-spacing: -0.05em;

        font-weight: 850;
      }

      .sh-mission-copy {
        color: var(--ink-soft);

        font-size: 18px;
        line-height: 1.8;
      }

      .sh-values-grid {
        display: grid;

        grid-template-columns:
          repeat(3,1fr);

        margin-top: 60px;

        border-top:
          1px solid var(--line);
      }

      .sh-value {
        padding: 34px 28px;

        border-right:
          1px solid var(--line);
      }

      .sh-value:last-child {
        border-right: 0;
      }

      .sh-value-icon {
        color: var(--brand);
      }

      .sh-value h3 {
        margin:
          24px 0
          10px;

        font-size: 20px;
      }

      .sh-value p {
        margin: 0;

        color: var(--ink-muted);

        font-size: 14px;
        line-height: 1.7;
      }

      /* =====================================================
         SERVICES PAGE
      ===================================================== */

      .sh-services-hero {
        padding:
          clamp(65px,8vw,105px)
          6vw
          45px;
      }

      .sh-services-hero-inner {
        max-width: 900px;
      }

      .sh-services-title {
        margin:
          18px 0
          15px;

        font-size:
          clamp(52px,6.5vw,82px);

        line-height: 0.94;

        letter-spacing: -0.065em;

        font-weight: 850;
      }

      .sh-services-intro {
        max-width: 760px;

        margin: 0;

        color: var(--ink-soft);

        font-size:
          clamp(17px,1.5vw,21px);

        line-height: 1.65;
      }

      .sh-services-section {
        padding:
          25px
          6vw
          110px;
      }

      .sh-services-cards {
        display: grid;
        gap: 16px;
      }

      /* =====================================================
         SERVICE CARD
      ===================================================== */

      .sh-service-card {
        display: grid;

        grid-template-columns:
          minmax(0,1fr)
          minmax(360px,.72fr);

        min-height: 330px;

        overflow: hidden;

        background:
          rgba(255,255,255,0.78);

        border:
          1px solid
          rgba(148,163,184,0.20);

        border-radius: 24px;

        box-shadow:
          0 18px 45px -38px
          rgba(15,23,42,0.45);

        transition:
          transform 0.25s ease,
          box-shadow 0.25s ease,
          border-color 0.25s ease;
      }

      .sh-service-card:hover {
        transform: translateY(-3px);

        border-color:
          rgba(29,78,216,0.18);

        box-shadow:
          0 28px 60px -40px
          rgba(15,23,42,0.55);
      }

      /* =====================================================
         SERVICE CONTENT
      ===================================================== */

      .sh-service-content {
        display: grid;

        grid-template-columns:
          54px
          minmax(0,1fr);

        gap: 22px;

        padding:
          34px
          34px
          34px
          28px;
      }

      .sh-service-top {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 12px;
      }

      .sh-service-number-box {
        width: 52px;
        height: 52px;

        display: grid;
        place-items: center;

        border-radius: 15px;

        background:
          rgba(29,78,216,0.08);

        color: var(--brand);

        font-size: 15px;
        font-weight: 850;
      }

      .sh-service-icon {
        width: 52px;
        height: 52px;

        display: grid;
        place-items: center;

        border-radius: 15px;

        background:
          rgba(29,78,216,0.08);

        color: var(--brand);
      }

      .sh-service-copy {
        display: flex;
        flex-direction: column;
        justify-content: center;

        min-width: 0;
      }

      .sh-service-copy h2 {
        margin: 0;

        color: var(--ink);

        font-size:
          clamp(24px,2.3vw,34px);

        line-height: 1.05;

        letter-spacing: -0.045em;

        font-weight: 850;
      }

      .sh-service-copy p {
        max-width: 620px;

        margin:
          17px
          0
          0;

        color: var(--ink-soft);

        font-size: 15px;

        line-height: 1.7;
      }

      .sh-service-link {
        width: fit-content;

        display: inline-flex;
        align-items: center;

        gap: 8px;

        margin-top: 20px;

        padding: 0;

        border: 0;

        background: transparent;

        color: var(--brand);

        font-size: 14px;
        font-weight: 800;

        transition:
          gap 0.2s ease,
          color 0.2s ease;
      }

      .sh-service-link:hover {
        gap: 12px;
        color: var(--brand-deep);
      }

      /* =====================================================
         SERVICE IMAGE
      ===================================================== */

      .sh-service-image {
        position: relative;

        min-height: 330px;

        overflow: hidden;

        margin:
          12px
          12px
          12px
          0;

        border-radius: 19px;
      }

      .sh-service-image img {
        width: 100%;
        height: 100%;

        min-height: 306px;

        object-fit: cover;

        transition:
          transform 0.5s ease;
      }

      .sh-service-card:hover
      .sh-service-image img {
        transform: scale(1.035);
      }

      .sh-service-image-overlay {
        position: absolute;
        inset: 0;

        background:
          linear-gradient(
            180deg,
            rgba(9,18,33,0),
            rgba(9,18,33,0.12)
          );

        pointer-events: none;
      }

      /* =====================================================
         SERVICES BOTTOM CTA
      ===================================================== */

      .sh-services-bottom-cta {
        display: flex;
        align-items: center;

        gap: 15px;

        margin-top: 20px;

        padding:
          20px
          22px;

        border:
          1px solid
          rgba(29,78,216,0.10);

        border-radius: 20px;

        background:
          linear-gradient(
            110deg,
            rgba(29,78,216,0.07),
            rgba(15,118,110,0.06)
          );
      }

      .sh-services-bottom-icon {
        width: 44px;
        height: 44px;

        display: grid;
        place-items: center;

        flex: 0 0 auto;

        border-radius: 13px;

        background:
          rgba(29,78,216,0.09);

        color: var(--brand);
      }

      .sh-services-bottom-copy {
        display: flex;
        flex-direction: column;

        flex: 1;
      }

      .sh-services-bottom-copy strong {
        font-size: 15px;
      }

      .sh-services-bottom-copy span {
        margin-top: 3px;

        color: var(--ink-muted);

        font-size: 12px;
      }

      /* =====================================================
         CONTACT
      ===================================================== */

      .sh-contact-grid {
        display: grid;

        grid-template-columns:
          0.9fr
          1.1fr;

        gap: 80px;

        align-items: start;
      }

      .sh-contact-image {
        overflow: hidden;

        border-radius: 30px;

        margin-top: 50px;

        box-shadow: var(--shadow);
      }

      .sh-contact-image img {
        width: 100%;
        height: 430px;

        object-fit: cover;
      }

      .sh-contact-details {
        display: grid;
        gap: 16px;

        margin-top: 38px;
      }

      .sh-contact-detail {
        display: flex;
        align-items: flex-start;

        gap: 14px;

        padding: 18px;

        border:
          1px solid var(--line);

        border-radius: 16px;

        background:
          rgba(255,255,255,0.58);
      }

      .sh-contact-detail-icon {
        width: 40px;
        height: 40px;

        display: grid;
        place-items: center;

        flex: 0 0 auto;

        border-radius: 11px;

        background:
          rgba(29,78,216,0.08);

        color: var(--brand);
      }

      .sh-contact-detail strong {
        display: block;

        font-size: 14px;

        margin-bottom: 5px;
      }

      .sh-contact-detail span {
        color: var(--ink-muted);

        font-size: 13px;

        word-break: break-word;
      }

      .sh-form {
        padding: 32px;

        border:
          1px solid var(--line);

        border-radius: 24px;

        background:
          rgba(255,255,255,0.7);

        box-shadow: var(--shadow);
      }

      .sh-form-title {
        margin:
          0 0
          8px;

        font-size: 27px;

        letter-spacing: -0.035em;
      }

      .sh-form-subtitle {
        margin:
          0 0
          30px;

        color: var(--ink-muted);

        font-size: 14px;

        line-height: 1.6;
      }

      .sh-form-grid {
        display: grid;

        grid-template-columns:
          repeat(2,1fr);

        gap: 16px;
      }

      .sh-field {
        display: grid;
        gap: 7px;
      }

      .sh-field.full {
        grid-column: 1 / -1;
      }

      .sh-field label {
        color: var(--ink-soft);

        font-size: 12px;
        font-weight: 750;
      }

      .sh-field input,
      .sh-field textarea {
        width: 100%;

        border:
          1px solid var(--line-strong);

        border-radius: 12px;

        background:
          rgba(255,255,255,0.85);

        padding:
          13px
          14px;

        outline: none;

        color: var(--ink);

        font-size: 14px;

        transition:
          border-color 0.2s ease,
          box-shadow 0.2s ease;
      }

      .sh-field input {
        height: 48px;
      }

      .sh-field textarea {
        min-height: 130px;

        resize: vertical;
      }

      .sh-field input:focus,
      .sh-field textarea:focus {
        border-color:
          rgba(29,78,216,0.6);

        box-shadow:
          0 0 0 4px
          rgba(29,78,216,0.08);
      }

      .sh-form-submit {
        width: 100%;
        margin-top: 20px;
      }

      .sh-success {
        display: flex;
        align-items: flex-start;

        gap: 12px;

        margin-top: 20px;

        padding: 15px;

        border-radius: 13px;

        background: var(--accent-soft);
        color: var(--accent);

        font-size: 13px;

        line-height: 1.55;
      }

      /* =====================================================
         FOOTER
      ===================================================== */

      .sh-footer {
        margin-left: 245px;

        padding:
          55px
          6vw
          35px;

        background: var(--navy);

        color: white;
      }

      .sh-footer-grid {
        width: min(1280px,100%);
        margin: 0 auto;

        display: grid;

        grid-template-columns:
          1.3fr
          0.7fr
          0.7fr;

        gap: 60px;
      }

      .sh-footer-brand {
        font-size: 20px;

        font-weight: 850;

        letter-spacing: -0.03em;
      }

      .sh-footer-description {
        max-width: 430px;

        margin-top: 14px;

        color:
          rgba(255,255,255,0.56);

        font-size: 13px;

        line-height: 1.7;
      }

      .sh-footer-heading {
        margin-bottom: 16px;

        color:
          rgba(255,255,255,0.42);

        font-size: 10px;

        font-weight: 800;

        letter-spacing: 0.14em;

        text-transform: uppercase;
      }

      .sh-footer-links {
        display: grid;
        gap: 10px;
      }

      .sh-footer-links button,
      .sh-footer-links a {
        width: fit-content;

        border: 0;

        background: transparent;

        padding: 0;

        color:
          rgba(255,255,255,0.72);

        font-size: 13px;

        cursor: pointer;
      }

      .sh-footer-links button:hover,
      .sh-footer-links a:hover {
        color: white;
      }

      .sh-footer-bottom {
        width: min(1280px,100%);
        margin:
          45px
          auto
          0;

        padding-top: 20px;

        border-top:
          1px solid
          rgba(255,255,255,0.1);

        color:
          rgba(255,255,255,0.38);

        font-size: 11px;
      }

      /* =====================================================
         TABLET
      ===================================================== */

      @media (max-width: 1100px) {

        .sh-sidebar {
          width: 215px;
        }

        .sh-main {
          margin-left: 215px;
        }

        .sh-footer {
          margin-left: 215px;
        }

        .sh-hero-grid {
          grid-template-columns: 1fr;
        }

        .sh-hero-copy {
          max-width: 900px;
        }

        .sh-hero-image {
          min-height: 480px;
        }

        .sh-hero-image img {
          height: 480px;
        }

        .sh-floating-stat {
          left: 24px;
        }

        .sh-floating-badge {
          right: 24px;
        }

        .sh-capability-grid {
          grid-template-columns:
            repeat(2,1fr);
        }

        .sh-capability:nth-child(2) {
          border-right: 0;
        }

        .sh-capability:nth-child(-n+2) {
          border-bottom:
            1px solid var(--line);
        }

        .sh-product-grid,
        .sh-product-grid.reverse {
          grid-template-columns: 1fr;
        }

        .sh-outcomes-header {
          display: block;
        }

        .sh-section-description {
          margin-top: 24px;
        }

        .sh-page-hero-grid {
          grid-template-columns: 1fr;
        }

        .sh-mission-grid {
          grid-template-columns: 1fr;
          gap: 35px;
        }

        .sh-contact-grid {
          grid-template-columns: 1fr;
        }

        /* Service cards become vertical */
        .sh-service-card {
          grid-template-columns: 1fr;
        }

        .sh-service-image {
          order: -1;

          min-height: 300px;

          margin:
            12px
            12px
            0;
        }

        .sh-service-image img {
          min-height: 300px;
          height: 300px;
        }

        .sh-service-content {
          padding: 28px;
        }
      }

      /* =====================================================
         MOBILE
      ===================================================== */

      @media (max-width: 767px) {

        /* Header */

        .sh-topbar {
          height: 68px;
        }

        .sh-topbar-inner {
          padding: 0 17px;
        }

        .sh-brand-mark {
          width: 37px;
          height: 37px;

          border-radius: 11px;
        }

        .sh-brand-name {
          font-size: 16px;
        }

        .sh-brand-subtitle {
          display: none;
        }

        .sh-mobile-menu-btn {
          display: flex;
        }

        .sh-sidebar {
          display: none;
        }

        /* Main */

        .sh-main {
          margin-left: 0;
          padding-top: 68px;
        }

        .sh-section {
          padding:
            76px
            20px;
        }

        /* Hero */

        .sh-hero {
          min-height: auto;

          padding:
            65px
            20px
            60px;
        }

        .sh-hero-grid {
          gap: 42px;
        }

        .sh-hero-title {
          margin-top: 18px;
          margin-bottom: 22px;

          font-size:
            clamp(43px,13vw,62px);

          line-height: 0.96;
        }

        .sh-hero-description {
          font-size: 16px;
          line-height: 1.7;
        }

        .sh-hero-actions {
          display: grid;
          gap: 10px;
        }

        .sh-btn {
          width: 100%;
          min-height: 52px;
        }

        .sh-hero-note {
          align-items: flex-start;
          line-height: 1.5;
        }

        .sh-hero-image {
          min-height: 390px;

          border-radius: 24px;
        }

        .sh-hero-image img {
          height: 390px;
        }

        .sh-floating-stat {
          left: 14px;
          bottom: 14px;

          width: 175px;

          padding: 15px;
        }

        .sh-floating-stat-number {
          font-size: 26px;
        }

        .sh-floating-badge {
          right: 14px;
          top: 14px;

          padding:
            10px
            12px;

          font-size: 10px;
        }

        /* Statement */

        .sh-statement {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .sh-statement-grid {
          grid-template-columns: 1fr;

          gap: 24px;
        }

        .sh-statement-copy {
          font-size: 16px;
        }

        /* Capabilities */

        .sh-capabilities {
          padding-top: 20px;
        }

        .sh-capability-grid {
          grid-template-columns: 1fr;

          margin-top: 35px;
        }

        .sh-capability,
        .sh-capability:nth-child(2) {
          border-right: 0;
          border-bottom:
            1px solid var(--line);
        }

        .sh-capability:last-child {
          border-bottom: 0;
        }

        .sh-capability {
          min-height: auto;

          padding:
            28px
            22px;
        }

        .sh-capability h3 {
          margin-top: 22px;
        }

        /* Products */

        .sh-product-section {
          padding:
            75px
            20px;
        }

        .sh-product-grid,
        .sh-product-grid.reverse {
          gap: 42px;
        }

        .sh-product-title {
          font-size:
            clamp(37px,11vw,52px);
        }

        .sh-product-description {
          font-size: 16px;
        }

        .sh-product-image {
          min-height: 360px;

          border-radius: 24px;
        }

        .sh-product-image img {
          height: 360px;
        }

        .sh-product-card {
          right: 14px;
          bottom: 14px;

          width:
            calc(100% - 28px);
        }

        /* Outcomes */

        .sh-outcomes {
          padding-top: 75px;
          padding-bottom: 75px;
        }

        .sh-outcome-grid {
          grid-template-columns: 1fr;

          margin-top: 35px;
        }

        .sh-outcome {
          border-right: 0;

          border-bottom:
            1px solid var(--line);

          padding:
            28px
            0;
        }

        .sh-outcome:last-child {
          border-bottom: 0;
        }

        /* CTA */

        .sh-cta {
          padding:
            65px
            20px;
        }

        .sh-cta-box {
          padding:
            40px
            24px;

          border-radius: 24px;
        }

        .sh-cta-title {
          font-size:
            clamp(38px,11vw,55px);
        }

        .sh-cta-description {
          font-size: 15px;
        }

        /* Page Hero */

        .sh-page-hero {
          padding:
            70px
            20px
            50px;
        }

        .sh-page-hero-grid {
          gap: 38px;
        }

        .sh-page-title {
          font-size:
            clamp(43px,12vw,60px);
        }

        .sh-page-description {
          font-size: 16px;
        }

        .sh-page-image img {
          height: 350px;
        }

        /* About */

        .sh-mission {
          padding-top: 40px;
        }

        .sh-mission-grid {
          grid-template-columns: 1fr;
        }

        .sh-values-grid {
          grid-template-columns: 1fr;

          margin-top: 35px;
        }

        .sh-value {
          border-right: 0;

          border-bottom:
            1px solid var(--line);

          padding:
            28px
            0;
        }

        .sh-value:last-child {
          border-bottom: 0;
        }

        /* =================================================
           SERVICES — MOBILE
        ================================================= */

        .sh-services-hero {
          padding:
            55px
            20px
            28px;
        }

        .sh-services-title {
          margin-top: 15px;

          font-size:
            clamp(48px,15vw,64px);

          line-height: 0.94;
        }

        .sh-services-intro {
          font-size: 16px;
          line-height: 1.65;
        }

        .sh-services-section {
          padding:
            18px
            20px
            70px;
        }

        .sh-services-cards {
          gap: 14px;
        }

        /*
          IMPORTANT:
          Service cards use a normal vertical flow on mobile.
          No negative margins.
          No absolute text positioning.
        */

        .sh-service-card {
          display: flex;
          flex-direction: column;

          min-height: 0;

          border-radius: 22px;
        }

        .sh-service-content {
          order: 1;

          display: grid;

          grid-template-columns:
            46px
            minmax(0,1fr);

          gap: 16px;

          padding:
            24px
            22px
            24px;
        }

        .sh-service-top {
          gap: 9px;
        }

        .sh-service-number-box,
        .sh-service-icon {
          width: 44px;
          height: 44px;

          border-radius: 13px;
        }

        .sh-service-number-box {
          font-size: 13px;
        }

        .sh-service-icon svg {
          width: 21px;
          height: 21px;
        }

        .sh-service-copy {
          display: block;
        }

        .sh-service-copy h2 {
          font-size: 23px;

          line-height: 1.08;

          letter-spacing: -0.04em;
        }

        .sh-service-copy p {
          margin-top: 12px;

          font-size: 14px;

          line-height: 1.65;
        }

        .sh-service-link {
          margin-top: 15px;

          font-size: 13px;
        }

        .sh-service-image {
          order: 2;

          height: 205px;
          min-height: 205px;

          margin:
            0
            10px
            10px;

          border-radius: 17px;
        }

        .sh-service-image img {
          width: 100%;

          height: 205px;
          min-height: 205px;

          object-fit: cover;
        }

        /* Services CTA */

        .sh-services-bottom-cta {
          display: grid;

          grid-template-columns:
            44px
            1fr;

          gap: 12px;

          padding: 18px;
        }

        .sh-services-bottom-cta
        .sh-btn {
          grid-column: 1 / -1;

          width: 100%;
        }

        /* Contact */

        .sh-contact-grid {
          gap: 45px;
        }

        .sh-contact-image {
          margin-top: 35px;
        }

        .sh-contact-image img {
          height: 320px;
        }

        .sh-form {
          padding: 22px;

          border-radius: 20px;
        }

        .sh-form-grid {
          grid-template-columns: 1fr;
        }

        .sh-field.full {
          grid-column: auto;
        }

        /* Footer */

        .sh-footer {
          margin-left: 0;

          padding:
            50px
            20px
            28px;
        }

        .sh-footer-grid {
          grid-template-columns: 1fr;

          gap: 35px;
        }

        .sh-footer-bottom {
          margin-top: 35px;
        }
      }

      /* =====================================================
         EXTRA SMALL PHONES
      ===================================================== */

      @media (max-width: 390px) {

        .sh-brand-name {
          font-size: 15px;
        }

        .sh-hero-title {
          font-size: 42px;
        }

        .sh-section-title {
          font-size: 37px;
        }

        .sh-product-title {
          font-size: 36px;
        }

        .sh-services-title {
          font-size: 46px;
        }

        .sh-service-copy h2 {
          font-size: 21px;
        }

        .sh-service-copy p {
          font-size: 13.5px;
        }

        .sh-service-image {
          height: 185px;
          min-height: 185px;
        }

        .sh-service-image img {
          height: 185px;
          min-height: 185px;
        }

        .sh-floating-badge {
          display: none;
        }
      }

      /* =====================================================
         ACCESSIBILITY / REDUCED MOTION
      ===================================================== */

      @media (prefers-reduced-motion: reduce) {

        html {
          scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

    `}</style>
  );
}

/* =========================================================
   BRAND
========================================================= */

function Brand({ compact = false }) {
  return (
    <div className="sh-brand">

      <div className="sh-brand-mark">
        <HeartPulse
          size={22}
          strokeWidth={2.4}
        />
      </div>

      {!compact && (
        <div>
          <div className="sh-brand-name">
            {BRAND.name}
          </div>

          <div className="sh-brand-subtitle">
            Healthcare. Intelligence. Access.
          </div>
        </div>
      )}

    </div>
  );
}

/* =========================================================
   NAVIGATION
========================================================= */

const NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    icon: Users,
  },
  {
    id: "services",
    label: "Services",
    icon: Network,
  },
  {
    id: "contact",
    label: "Contact",
    icon: MessageSquare,
  },
];

/* =========================================================
   NAV BUTTON
========================================================= */

function NavButton({
  item,
  activePage,
  onNavigate,
}) {
  const Icon = item.icon;

  return (
    <button
      className={
        `sh-nav-button ${
          activePage === item.id
            ? "active"
            : ""
        }`
      }
      onClick={() =>
        onNavigate(item.id)
      }
      aria-current={
        activePage === item.id
          ? "page"
          : undefined
      }
    >
      <Icon className="sh-nav-icon" />

      <span>
        {item.label}
      </span>
    </button>
  );
}

/* =========================================================
   TOP BAR
========================================================= */

function TopBar({ onOpenMenu }) {
  return (
    <header className="sh-topbar">

      <div className="sh-topbar-inner">

        <Brand />

        <button
          className="sh-mobile-menu-btn"
          onClick={onOpenMenu}
          aria-label="Open navigation menu"
        >
          <Menu size={21} />
        </button>

      </div>

    </header>
  );
}

/* =========================================================
   SIDEBAR
========================================================= */

function Sidebar({
  activePage,
  onNavigate,
}) {
  return (
    <aside className="sh-sidebar">

      <div className="sh-nav-label">
        Explore
      </div>

      <nav
        className="sh-nav"
        aria-label="Primary navigation"
      >
        {NAV_ITEMS.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            activePage={activePage}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div className="sh-sidebar-bottom">

        <div className="sh-sidebar-card">

          <strong>
            Building the future of healthcare.
          </strong>

          <p>
            Intelligent technology designed
            around the realities of healthcare
            organizations and patients.
          </p>

        </div>

      </div>

    </aside>
  );
}

/* =========================================================
   MOBILE DRAWER
========================================================= */

function MobileDrawer({
  open,
  activePage,
  onNavigate,
  onClose,
}) {
  if (!open) return null;

  return (
    <>
      <div
        className="sh-mobile-overlay"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className="sh-mobile-drawer"
        aria-label="Mobile navigation"
      >

        <div className="sh-mobile-drawer-header">

          <Brand compact />

          <button
            className="sh-close-btn"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>

        </div>

        <nav className="sh-mobile-nav">

          {NAV_ITEMS.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              activePage={activePage}
              onNavigate={(page) => {
                onNavigate(page);
                onClose();
              }}
            />
          ))}

        </nav>

      </aside>
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero({ onNavigate }) {
  return (
    <section className="sh-hero">

      <div className="sh-hero-grid">

        <div className="sh-hero-copy">

          <div className="sh-eyebrow">
            <span className="sh-eyebrow-dot" />
            Healthcare technology
          </div>

          <h1 className="sh-hero-title">

            Intelligence that moves{" "}

            <span className="sh-gradient-text">
              healthcare forward.
            </span>

          </h1>

          <p className="sh-hero-description">
            StellarOne Health helps healthcare
            organizations simplify complex
            operations, strengthen revenue
            performance, and deliver better
            digital experiences through
            intelligent automation and AI.
          </p>

          <div className="sh-hero-actions">

            <button
              className="sh-btn sh-btn-primary"
              onClick={() =>
                onNavigate("services")
              }
            >
              Explore Our Solutions
              <ArrowRight size={17} />
            </button>

            <button
              className="sh-btn sh-btn-secondary"
              onClick={() =>
                onNavigate("contact")
              }
            >
              Talk to Our Team
            </button>

          </div>

          <div className="sh-hero-note">

            <CheckCircle2 size={16} />

            Built around healthcare workflows,
            outcomes and people.

          </div>

        </div>

        <div className="sh-hero-visual">

          <div className="sh-hero-image">

            <img
              src={IMAGES.hero}
              alt="Healthcare professional using digital technology"
            />

            <div className="sh-image-overlay" />

          </div>

          <div className="sh-floating-badge">

            <Sparkles size={15} />

            AI-powered healthcare

          </div>

          <div className="sh-floating-stat">

            <div className="sh-floating-stat-number">
              AI + Human
            </div>

            <div className="sh-floating-stat-label">
              Intelligent systems designed
              to augment healthcare teams,
              not replace them.
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   STATEMENT
========================================================= */

function StatementSection() {
  return (
    <section className="sh-section sh-statement">

      <div className="sh-container">

        <div className="sh-statement-grid">

          <div>

            <div className="sh-eyebrow">
              <span className="sh-eyebrow-dot" />
              Our perspective
            </div>

          </div>

          <div>

            <h2 className="sh-statement-title">

              Healthcare is complex.
              <br />

              Your technology{" "}

              <span className="sh-gradient-text">
                shouldn't be.
              </span>

            </h2>

            <p className="sh-statement-copy">
              StellarOne Health brings together
              healthcare expertise, intelligent
              automation, revenue-cycle intelligence,
              and digital patient experiences to
              help organizations operate with
              greater clarity and confidence.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

function CapabilitiesSection() {
  const capabilities = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Workflows",
      text:
        "Automate repetitive processes, surface meaningful insights, and help teams make faster, more informed decisions.",
    },
    {
      icon: Target,
      title: "Revenue Cycle Intelligence",
      text:
        "Improve visibility across eligibility, coding, denials, accounts receivable, and payer performance.",
    },
    {
      icon: HeartPulse,
      title: "Digital Patient Access",
      text:
        "Create simpler, more intuitive healthcare experiences across digital and connected channels.",
    },
    {
      icon: Network,
      title: "Enterprise Integration",
      text:
        "Connect systems, workflows and data so healthcare organizations can operate from a more complete picture.",
    },
  ];

  return (
    <section className="sh-section sh-capabilities">

      <div className="sh-container">

        <div className="sh-eyebrow">
          <span className="sh-eyebrow-dot" />
          What we do
        </div>

        <div className="sh-capability-grid">

          {capabilities.map((item) => {

            const Icon = item.icon;

            return (
              <article
                className="sh-capability"
                key={item.title}
              >

                <div className="sh-capability-icon">
                  <Icon size={22} />
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>
            );

          })}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   STELLAR.AI
========================================================= */

function StellarAISection() {
  return (
    <section
      id="stellar-ai"
      className="sh-product-section sh-product-dark"
    >

      <div className="sh-container">

        <div className="sh-product-grid">

          <div className="sh-product-copy">

            <div className="sh-product-label">
              <BrainCircuit size={16} />
              Stellar.AI
            </div>

            <h2 className="sh-product-title">
              The intelligence layer for
              healthcare revenue operations.
            </h2>

            <p className="sh-product-description">
              Stellar.AI brings intelligence into
              the revenue cycle, helping healthcare
              organizations understand performance,
              identify opportunities, prioritize work,
              and turn complex operational data into
              actionable insight.
            </p>

            <ul className="sh-product-list">

              <li>
                <CircleCheck size={17} />
                Revenue-cycle visibility across
                critical workflows
              </li>

              <li>
                <CircleCheck size={17} />
                Intelligent identification of
                operational opportunities
              </li>

              <li>
                <CircleCheck size={17} />
                Denial and accounts-receivable
                insights
              </li>

              <li>
                <CircleCheck size={17} />
                Executive-ready performance
                intelligence
              </li>

            </ul>

            <div className="sh-hero-actions">

              <button className="sh-btn sh-btn-primary">
                Explore Stellar.AI
                <ArrowUpRight size={17} />
              </button>

            </div>

          </div>

          <div className="sh-product-visual">

            <div className="sh-product-image">

              <img
                src={IMAGES.operations}
                alt="Healthcare operations team"
                loading="lazy"
              />

            </div>

            <div className="sh-product-card">

              <div className="sh-product-card-label">
                Intelligence
              </div>

              <div className="sh-product-card-title">
                From operational data to
                better decisions.
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   EASYMED
========================================================= */

function EasyMedSection() {
  return (
    <section
      id="easymed"
      className="sh-product-section"
    >

      <div className="sh-container">

        <div className="sh-product-grid reverse">

          <div className="sh-product-visual">

            <div className="sh-product-image">

              <img
                src={IMAGES.telehealth}
                alt="Patient using digital healthcare services"
                loading="lazy"
              />

            </div>

            <div className="sh-product-card">

              <div className="sh-product-card-label">
                Patient experience
              </div>

              <div className="sh-product-card-title">
                Healthcare access,
                made easier.
              </div>

            </div>

          </div>

          <div className="sh-product-copy">

            <div className="sh-product-label">
              <HeartPulse size={16} />
              EasyMed
            </div>

            <h2 className="sh-product-title">
              Healthcare access,
              made easier.
            </h2>

            <p className="sh-product-description">
              EasyMed is designed to make digital
              healthcare more accessible, convenient,
              and intuitive for patients while helping
              providers deliver connected care
              experiences.
            </p>

            <ul className="sh-product-list">

              <li>
                <CircleCheck size={17} />
                Convenient digital healthcare access
              </li>

              <li>
                <CircleCheck size={17} />
                Virtual consultation experiences
              </li>

              <li>
                <CircleCheck size={17} />
                Connected patient journeys
              </li>

              <li>
                <CircleCheck size={17} />
                Designed for scalable digital
                healthcare delivery
              </li>

            </ul>

            <div className="sh-hero-actions">

              <button className="sh-btn sh-btn-primary">
                Explore EasyMed
                <ArrowUpRight size={17} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   OUTCOMES
========================================================= */

function OutcomesSection() {

  const outcomes = [
    {
      number: "01",
      title: "Greater operational clarity",
      text:
        "Bring fragmented healthcare processes and information into a clearer operational picture.",
    },
    {
      number: "02",
      title: "Better financial performance",
      text:
        "Use intelligence and automation to identify revenue opportunities and reduce avoidable friction.",
    },
    {
      number: "03",
      title: "More connected experiences",
      text:
        "Create digital experiences that make healthcare easier for patients, providers and teams.",
    },
  ];

  return (
    <section className="sh-section sh-outcomes">

      <div className="sh-container">

        <div className="sh-outcomes-header">

          <div>

            <div className="sh-eyebrow">
              <span className="sh-eyebrow-dot" />
              Designed for outcomes
            </div>

            <h2 className="sh-section-title">
              Technology should make
              <br />
              healthcare work better.
            </h2>

          </div>

          <p className="sh-section-description">
            We focus on practical technology
            that creates measurable improvements
            across healthcare operations and
            patient experiences.
          </p>

        </div>

        <div className="sh-outcome-grid">

          {outcomes.map((item) => (

            <article
              className="sh-outcome"
              key={item.number}
            >

              <div className="sh-outcome-number">
                {item.number}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTASection({ onNavigate }) {
  return (
    <section className="sh-cta">

      <div className="sh-container">

        <div className="sh-cta-box">

          <div className="sh-eyebrow">
            <span className="sh-eyebrow-dot" />
            Start a conversation
          </div>

          <h2 className="sh-cta-title">
            Let’s solve what’s next
            in healthcare.
          </h2>

          <p className="sh-cta-description">
            Whether you're looking to improve
            revenue performance, modernize
            operations, or create a better digital
            healthcare experience, we'd love to
            understand what you're trying to solve.
          </p>

          <div className="sh-hero-actions">

            <button
              className="sh-btn sh-btn-primary"
              onClick={() =>
                onNavigate("contact")
              }
            >
              Talk to Our Team
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />

      <StatementSection />

      <CapabilitiesSection />

      <StellarAISection />

      <EasyMedSection />

      <OutcomesSection />

      <CTASection onNavigate={onNavigate} />
    </>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function AboutPage({ onNavigate }) {
  return (
    <>
      <section className="sh-page-hero">

        <div className="sh-page-hero-grid">

          <div>

            <div className="sh-eyebrow">
              <span className="sh-eyebrow-dot" />
              About StellarOne Health
            </div>

            <h1 className="sh-page-title">
              We build technology for
              the realities of healthcare.
            </h1>

            <p className="sh-page-description">
              Healthcare doesn't need more complexity.
              It needs technology that understands
              the people, processes and pressures
              behind every interaction.
            </p>

          </div>

          <div className="sh-page-image">

            <img
              src={IMAGES.about}
              alt="Healthcare professionals collaborating"
              loading="lazy"
            />

          </div>

        </div>

      </section>

      <section className="sh-section sh-mission">

        <div className="sh-container">

          <div className="sh-mission-grid">

            <div>

              <div className="sh-eyebrow">
                <span className="sh-eyebrow-dot" />
                Our mission
              </div>

              <h2 className="sh-mission-title">
                Make healthcare technology
                simpler, smarter, and more human.
              </h2>

            </div>

            <div className="sh-mission-copy">

              <p>
                StellarOne Health brings together
                healthcare expertise, technology,
                artificial intelligence and digital
                experiences to solve some of the
                industry's most persistent challenges.
              </p>

              <p>
                We believe technology should remove
                friction rather than create it. That
                means designing solutions around the
                workflows of healthcare organizations
                and the real experiences of patients
                and care teams.
              </p>

              <p>
                Our approach combines practical
                innovation with a deep understanding
                of healthcare operations, revenue cycle
                management and digital access.
              </p>

            </div>

          </div>

          <div className="sh-values-grid">

            <article className="sh-value">

              <ShieldCheck
                className="sh-value-icon"
                size={24}
              />

              <h3>
                Trust by design
              </h3>

              <p>
                Healthcare technology must be built
                with security, reliability and
                responsible innovation at its core.
              </p>

            </article>

            <article className="sh-value">

              <Target
                className="sh-value-icon"
                size={24}
              />

              <h3>
                Outcome focused
              </h3>

              <p>
                We focus on technology that solves
                meaningful problems and produces
                measurable value.
              </p>

            </article>

            <article className="sh-value">

              <Users
                className="sh-value-icon"
                size={24}
              />

              <h3>
                Human centered
              </h3>

              <p>
                Better healthcare technology starts
                by understanding the people who use
                it every day.
              </p>

            </article>

          </div>

        </div>

      </section>

      <CTASection
        onNavigate={onNavigate}
      />
    </>
  );
}

/* =========================================================
   SERVICES PAGE
========================================================= */

function ServicesPage({ onNavigate }) {

  const services = [

    {
      number: "01",
      name: "AI-Powered Workflows",
      description:
        "Automate repetitive processes, surface meaningful insights, and help teams make faster, more informed decisions.",
      icon: BrainCircuit,
      image: IMAGES.aiWorkflows,
      imageAlt:
        "Artificial intelligence technology supporting healthcare workflows",
    },

    {
      number: "02",
      name: "Revenue Cycle Intelligence",
      description:
        "Improve visibility across eligibility, coding, denials, accounts receivable, and payer performance.",
      icon: Target,
      image: IMAGES.revenueCycle,
      imageAlt:
        "Revenue cycle analytics and healthcare financial intelligence",
    },

    {
      number: "03",
      name: "Digital Patient Access",
      description:
        "Create simpler, more intuitive healthcare experiences across digital and connected channels.",
      icon: HeartPulse,
      image: IMAGES.patientAccess,
      imageAlt:
        "Patient accessing healthcare through a digital device",
    },

    {
      number: "04",
      name: "Healthcare Software Engineering",
      description:
        "Build scalable architecture, healthcare products, and integrations designed around real-world healthcare workflows.",
      icon: Code2,
      image: IMAGES.softwareEngineering,
      imageAlt:
        "Software engineering environment supporting healthcare technology",
    },

    {
      number: "05",
      name: "Enterprise Integration",
      description:
        "Connect systems, data, and workflows to create a more unified healthcare technology environment.",
      icon: Network,
      image: IMAGES.enterpriseIntegration,
      imageAlt:
        "Enterprise technology infrastructure and connected systems",
    },

    {
      number: "06",
      name: "Healthcare Technology Consulting",
      description:
        "Strategic guidance for organizations evaluating technology modernization, AI adoption, and digital transformation.",
      icon: Users,
      image: IMAGES.healthcareConsulting,
      imageAlt:
        "Healthcare technology consulting and strategy meeting",
    },

  ];

  return (
    <>

      {/* ===================================================
          SERVICES HERO
      =================================================== */}

      <section className="sh-services-hero">

        <div className="sh-container">

          <div className="sh-services-hero-inner">

            <div className="sh-eyebrow">
              <span className="sh-eyebrow-dot" />
              Our services
            </div>

            <h1 className="sh-services-title">
              What{" "}
              <span className="sh-gradient-text">
                We Do
              </span>
            </h1>

            <p className="sh-services-intro">
              Technology and expertise to help
              healthcare organizations operate
              smarter, perform better, and deliver
              exceptional experiences.
            </p>

          </div>

        </div>

      </section>

      {/* ===================================================
          SERVICES
      =================================================== */}

      <section className="sh-services-section">

        <div className="sh-container">

          <div className="sh-services-cards">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <article
                  className="sh-service-card"
                  key={service.number}
                >

                  {/* Text */}

                  <div className="sh-service-content">

                    <div className="sh-service-top">

                      <div className="sh-service-number-box">
                        {service.number}
                      </div>

                      <div className="sh-service-icon">
                        <Icon
                          size={25}
                          strokeWidth={2}
                        />
                      </div>

                    </div>

                    <div className="sh-service-copy">

                      <h2>
                        {service.name}
                      </h2>

                      <p>
                        {service.description}
                      </p>

                      <button
                        className="sh-service-link"
                        onClick={() =>
                          onNavigate("contact")
                        }
                      >
                        Learn more
                        <ArrowRight size={17} />
                      </button>

                    </div>

                  </div>

                  {/* Image */}

                  <div className="sh-service-image">

                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                    />

                    <div className="sh-service-image-overlay" />

                  </div>

                </article>

              );

            })}

          </div>

          {/* =================================================
              SERVICES CTA
          ================================================= */}

          <div className="sh-services-bottom-cta">

            <div className="sh-services-bottom-icon">
              <MessageSquare size={21} />
            </div>

            <div className="sh-services-bottom-copy">

              <strong>
                Have a specific need?
              </strong>

              <span>
                Let's discuss how we can help
                your organization.
              </span>

            </div>

            <button
              className="sh-btn sh-btn-primary"
              onClick={() =>
                onNavigate("contact")
              }
            >
              Get in Touch
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </section>

    </>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

function ContactPage() {

  const [sent, setSent] =
    useState(false);

  function handleSubmit(event) {

    event.preventDefault();

    setSent(true);
  }

  return (
    <section className="sh-page-hero">

      <div className="sh-container">

        <div className="sh-contact-grid">

          <div>

            <div className="sh-eyebrow">
              <span className="sh-eyebrow-dot" />
              Get in touch
            </div>

            <h1 className="sh-page-title">
              Let’s solve what’s next
              in healthcare.
            </h1>

            <p className="sh-page-description">
              Tell us what you're building,
              improving or trying to solve.
              Our team would be happy to
              start the conversation.
            </p>

            <div className="sh-contact-details">

              <a
                className="sh-contact-detail"
                href={`mailto:${BRAND.email}`}
              >

                <div className="sh-contact-detail-icon">
                  <MessageSquare size={19} />
                </div>

                <div>

                  <strong>
                    Email
                  </strong>

                  <span>
                    {BRAND.email}
                  </span>

                </div>

              </a>

              <a
                className="sh-contact-detail"
                href={`tel:${BRAND.phone.replace(
                  /\s/g,
                  ""
                )}`}
              >

                <div className="sh-contact-detail-icon">
                  <Phone size={19} />
                </div>

                <div>

                  <strong>
                    Phone
                  </strong>

                  <span>
                    {BRAND.phone}
                  </span>

                </div>

              </a>

              <div className="sh-contact-image">

                <img
                  src={IMAGES.contact}
                  alt="Modern healthcare facility"
                  loading="lazy"
                />

              </div>

            </div>

          </div>

          <form
            className="sh-form"
            onSubmit={handleSubmit}
          >

            <h2 className="sh-form-title">
              Start a conversation
            </h2>

            <p className="sh-form-subtitle">
              Share a few details and our team
              can follow up with you.
            </p>

            <div className="sh-form-grid">

              <div className="sh-field">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />

              </div>

              <div className="sh-field">

                <label htmlFor="company">
                  Organization
                </label>

                <input
                  id="company"
                  name="company"
                  placeholder="Organization"
                />

              </div>

              <div className="sh-field">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

              </div>

              <div className="sh-field">

                <label htmlFor="phone">
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                />

              </div>

              <div className="sh-field full">

                <label htmlFor="message">
                  How can we help?
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a little about what you're looking to solve..."
                  required
                />

              </div>

            </div>

            <button
              type="submit"
              className="sh-btn sh-btn-primary sh-form-submit"
            >
              Send Message
              <ArrowRight size={17} />
            </button>

            {sent && (

              <div className="sh-success">

                <CheckCircle2 size={18} />

                <div>

                  <strong>
                    Thank you.
                  </strong>

                  <br />

                  Your message has been
                  captured. We'll be in touch.

                </div>

              </div>

            )}

          </form>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer({ onNavigate }) {
  return (
    <footer className="sh-footer">

      <div className="sh-footer-grid">

        <div>

          <div className="sh-footer-brand">
            {BRAND.name}
          </div>

          <p className="sh-footer-description">
            Intelligent healthcare technology
            designed to simplify operations,
            strengthen performance and make
            healthcare access easier.
          </p>

        </div>

        <div>

          <div className="sh-footer-heading">
            Company
          </div>

          <div className="sh-footer-links">

            <button
              onClick={() =>
                onNavigate("about")
              }
            >
              About
            </button>

            <button
              onClick={() =>
                onNavigate("services")
              }
            >
              Services
            </button>

            <button
              onClick={() =>
                onNavigate("contact")
              }
            >
              Contact
            </button>

          </div>

        </div>

        <div>

          <div className="sh-footer-heading">
            Solutions
          </div>

          <div className="sh-footer-links">

            <button
              onClick={() =>
                onNavigate("home")
              }
            >
              Stellar.AI
            </button>

            <button
              onClick={() =>
                onNavigate("home")
              }
            >
              EasyMed
            </button>

            <a
              href={`mailto:${BRAND.email}`}
            >
              Email us
            </a>

          </div>

        </div>

      </div>

      <div className="sh-footer-bottom">
        © {new Date().getFullYear()}{" "}
        {BRAND.legalName}. All rights
        reserved.
      </div>

    </footer>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

export default function StellarOneSite() {

  const [page, setPage] =
    useState("home");

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  function navigate(nextPage) {

    setPage(nextPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {

    const titles = {
      home:
        "StellarOne Health | Intelligence that moves healthcare forward.",

      about:
        "About | StellarOne Health",

      services:
        "Services | StellarOne Health",

      contact:
        "Contact | StellarOne Health",
    };

    document.title =
      titles[page] ||
      "StellarOne Health";

  }, [page]);

  let content;

  switch (page) {

    case "about":

      content = (
        <AboutPage
          onNavigate={navigate}
        />
      );

      break;

    case "services":

      content = (
        <ServicesPage
          onNavigate={navigate}
        />
      );

      break;

    case "contact":

      content = (
        <ContactPage />
      );

      break;

    default:

      content = (
        <HomePage
          onNavigate={navigate}
        />
      );
  }

  return (
    <>
      <GlobalStyles />

      <div className="sh-app">

        <TopBar
          onOpenMenu={() =>
            setMobileMenuOpen(true)
          }
        />

        <Sidebar
          activePage={page}
          onNavigate={navigate}
        />

        <MobileDrawer
          open={mobileMenuOpen}
          activePage={page}
          onNavigate={navigate}
          onClose={() =>
            setMobileMenuOpen(false)
          }
        />

        <main className="sh-main">
          {content}
        </main>

        <Footer
          onNavigate={navigate}
        />

      </div>
    </>
  );
}