import React, { useEffect, useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  CircleCheck,
  Code2,
  HeartPulse,
  Home,
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
   COLORS
========================================================= */

const COLORS = {
  background: "#f6f8fc",
  surface: "#ffffff",
  panel: "#edf2f8",

  ink: "#101a2f",
  inkSoft: "#52627a",
  inkMuted: "#718097",

  line: "rgba(148,163,184,0.22)",
  lineStrong: "rgba(148,163,184,0.36)",

  brand: "#2457d6",
  brandDeep: "#1745b7",

  accent: "#087f78",
  accentSoft: "#e1f5f2",

  gold: "#c7922d",

  navy: "#091426",
  navySoft: "#10203a",
};


/* =========================================================
   TEMPORARY IMAGES
========================================================= */

const IMAGES = {

  hero:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=88",

  operations:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=88",

  telehealth:
    "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1600&q=88",

  about:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=88",

  contact:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=88",

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

      @import url(
        'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'
      );

      :root {

        --background: ${COLORS.background};
        --surface: ${COLORS.surface};
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
      }


      /* =====================================================
         RESET
      ===================================================== */

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {

        margin: 0;

        background:
          var(--background);

        color:
          var(--ink);

        font-family:
          "Manrope",
          Inter,
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          sans-serif;

        -webkit-font-smoothing:
          antialiased;

        text-rendering:
          optimizeLegibility;
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

      img {
        display: block;
        max-width: 100%;
      }


      /* =====================================================
         APP
      ===================================================== */

      .sh-app {

        min-height: 100vh;

        overflow-x: hidden;

        background:
          radial-gradient(
            circle at 85% 0%,
            rgba(36,87,214,.055),
            transparent 28rem
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

        height: 76px;

        z-index: 1000;

        background:
          rgba(246,248,252,.94);

        border-bottom:
          1px solid var(--line);

        backdrop-filter:
          blur(18px);

        -webkit-backdrop-filter:
          blur(18px);
      }

      .sh-topbar-inner {

        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding:
          0 28px;
      }


      /* =====================================================
         BRAND
      ===================================================== */

      .sh-brand {

        display: flex;
        align-items: center;

        gap: 11px;
      }

      .sh-brand-mark {

        width: 42px;
        height: 42px;

        display: grid;
        place-items: center;

        flex-shrink: 0;

        border-radius: 12px;

        background:
          linear-gradient(
            145deg,
            var(--brand),
            var(--brand-deep)
          );

        color: white;

        box-shadow:
          0 12px 28px -18px
          rgba(36,87,214,.75);
      }

      .sh-brand-name {

        font-size: 17px;

        line-height: 1.1;

        font-weight: 800;

        letter-spacing:
          -.035em;
      }

      .sh-brand-subtitle {

        margin-top: 3px;

        color:
          var(--ink-muted);

        font-size: 9px;

        font-weight: 600;

        letter-spacing:
          .04em;
      }


      /* =====================================================
         MOBILE MENU
      ===================================================== */

      .sh-mobile-menu-btn {

        display: none;

        width: 44px;
        height: 44px;

        align-items: center;
        justify-content: center;

        border:
          1px solid var(--line-strong);

        border-radius: 13px;

        background:
          rgba(255,255,255,.9);

        color:
          var(--ink);
      }


      /* =====================================================
         SIDEBAR
      ===================================================== */

      .sh-sidebar {

        position: fixed;

        top: 76px;
        left: 0;
        bottom: 0;

        width: 238px;

        z-index: 900;

        display: flex;
        flex-direction: column;

        padding:
          27px 16px;

        background:
          rgba(255,255,255,.74);

        border-right:
          1px solid var(--line);

        backdrop-filter:
          blur(18px);
      }

      .sh-nav-label {

        padding:
          0 12px;

        margin:
          5px 0 11px;

        color:
          var(--ink-muted);

        font-size: 9px;

        font-weight: 800;

        letter-spacing:
          .16em;

        text-transform:
          uppercase;
      }

      .sh-nav {

        display: grid;

        gap: 5px;
      }

      .sh-nav-button {

        width: 100%;

        display: flex;
        align-items: center;

        gap: 11px;

        padding:
          11px 13px;

        border: 0;

        border-radius: 11px;

        background:
          transparent;

        color:
          var(--inkSoft);

        color:
          var(--ink-soft);

        font-size: 13px;

        font-weight: 700;

        text-align: left;

        transition:
          .2s ease;
      }

      .sh-nav-button:hover {

        background:
          rgba(36,87,214,.055);

        color:
          var(--brand);
      }

      .sh-nav-button.active {

        background:
          rgba(36,87,214,.085);

        color:
          var(--brand);
      }

      .sh-nav-icon {

        width: 18px;
        height: 18px;
      }

      .sh-sidebar-bottom {

        margin-top: auto;
      }

      .sh-sidebar-card {

        padding: 16px;

        border:
          1px solid var(--line);

        border-radius: 15px;

        background:
          linear-gradient(
            145deg,
            rgba(36,87,214,.055),
            rgba(8,127,120,.045)
          );
      }

      .sh-sidebar-card strong {

        display: block;

        margin-bottom: 5px;

        font-size: 12px;

        line-height: 1.35;
      }

      .sh-sidebar-card p {

        margin: 0;

        color:
          var(--ink-muted);

        font-size: 10px;

        line-height: 1.55;
      }


      /* =====================================================
         MOBILE DRAWER
      ===================================================== */

      .sh-mobile-overlay {

        position: fixed;

        inset: 0;

        z-index: 1200;

        background:
          rgba(9,20,38,.42);
      }

      .sh-mobile-drawer {

        position: fixed;

        top: 0;
        right: 0;
        bottom: 0;

        width:
          min(86vw,350px);

        z-index: 1300;

        padding: 22px;

        background:
          white;

        box-shadow:
          -25px 0 55px -30px
          rgba(15,23,42,.55);
      }

      .sh-mobile-drawer-header {

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-bottom: 20px;

        border-bottom:
          1px solid var(--line);
      }

      .sh-close-btn {

        width: 40px;
        height: 40px;

        display: grid;
        place-items: center;

        border:
          1px solid var(--line);

        border-radius: 11px;

        background:
          var(--background);

        color:
          var(--ink);
      }

      .sh-mobile-nav {

        display: grid;

        gap: 6px;

        margin-top: 20px;
      }


      /* =====================================================
         MAIN
      ===================================================== */

      .sh-main {

        margin-left: 238px;

        padding-top: 76px;
      }

      .sh-container {

        width:
          min(1240px,100%);

        margin:
          0 auto;
      }

      .sh-section {

        padding:
          96px 6vw;
      }


      /* =====================================================
         EYEBROW
      ===================================================== */

      .sh-eyebrow {

        display: inline-flex;
        align-items: center;

        gap: 8px;

        color:
          var(--brand);

        font-size: 10px;

        font-weight: 800;

        letter-spacing:
          .17em;

        text-transform:
          uppercase;
      }

      .sh-eyebrow-dot {

        width: 6px;
        height: 6px;

        border-radius: 50%;

        background:
          var(--accent);
      }


      /* =====================================================
         GRADIENT TEXT
      ===================================================== */

      .sh-gradient-text {

        background:
          linear-gradient(
            110deg,
            var(--brand-deep),
            var(--brand)
          );

        -webkit-background-clip:
          text;

        background-clip:
          text;

        color:
          transparent;
      }


      /* =====================================================
         BUTTONS
      ===================================================== */

      .sh-btn {

        min-height: 46px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        gap: 8px;

        padding:
          0 18px;

        border:
          1px solid transparent;

        border-radius: 11px;

        font-size: 12px;

        font-weight: 750;

        transition:
          transform .2s ease,
          box-shadow .2s ease;
      }

      .sh-btn:hover {

        transform:
          translateY(-1px);
      }

      .sh-btn-primary {

        color:
          white;

        background:
          var(--brand);

        box-shadow:
          0 14px 30px -22px
          rgba(36,87,214,.75);
      }

      .sh-btn-secondary {

        color:
          var(--ink);

        background:
          rgba(255,255,255,.82);

        border-color:
          var(--line-strong);
      }


      /* =====================================================
         HERO
      ===================================================== */

      .sh-hero {

        min-height:
          calc(100vh - 76px);

        display: flex;
        align-items: center;

        padding:
          85px 6vw;
      }

      .sh-hero-grid {

        width:
          min(1240px,100%);

        margin: 0 auto;

        display: grid;

        grid-template-columns:
          minmax(0,1fr)
          minmax(400px,.86fr);

        gap:
          clamp(55px,7vw,100px);

        align-items:
          center;
      }

      .sh-hero-copy {

        max-width:
          690px;
      }

      .sh-hero-title {

        margin:
          19px 0 23px;

        font-size:
          clamp(50px,5.5vw,70px);

        line-height:
          1.01;

        letter-spacing:
          -.06em;

        font-weight:
          800;
      }

      .sh-hero-description {

        max-width:
          650px;

        margin: 0;

        color:
          var(--ink-soft);

        font-size:
          clamp(15px,1.3vw,17px);

        line-height:
          1.72;

        font-weight:
          500;
      }

      .sh-hero-actions {

        display: flex;
        flex-wrap: wrap;

        gap: 10px;

        margin-top: 29px;
      }

      .sh-hero-note {

        display: flex;
        align-items: center;

        gap: 8px;

        margin-top: 20px;

        color:
          var(--ink-muted);

        font-size: 11px;

        font-weight: 600;
      }

      .sh-hero-note svg {

        color:
          var(--accent);
      }


      /* =====================================================
         HERO IMAGE
      ===================================================== */

      .sh-hero-visual {

        position: relative;
      }

      .sh-hero-image {

        overflow: hidden;

        min-height:
          520px;

        border-radius:
          28px;

        box-shadow:
          0 28px 60px -42px
          rgba(15,23,42,.55);
      }

      .sh-hero-image img {

        width: 100%;
        height: 520px;

        object-fit: cover;
      }

      .sh-image-overlay {

        position: absolute;

        inset: 0;

        background:
          linear-gradient(
            180deg,
            transparent,
            rgba(9,20,38,.28)
          );
      }

      .sh-floating-stat {

        position: absolute;

        left: -25px;
        bottom: 28px;

        width: 185px;

        padding: 17px;

        border:
          1px solid
          rgba(255,255,255,.7);

        border-radius: 16px;

        background:
          rgba(255,255,255,.94);

        box-shadow:
          0 20px 45px -30px
          rgba(15,23,42,.6);
      }

      .sh-floating-stat-number {

        font-size: 24px;

        font-weight: 800;

        letter-spacing:
          -.04em;

        color:
          var(--brand-deep);
      }

      .sh-floating-stat-label {

        margin-top: 6px;

        color:
          var(--ink-muted);

        font-size: 10px;

        line-height: 1.5;
      }

      .sh-floating-badge {

        position: absolute;

        right: -20px;
        top: 25px;

        display: flex;
        align-items: center;

        gap: 7px;

        padding:
          10px 12px;

        border-radius:
          11px;

        background:
          var(--navy);

        color:
          white;

        font-size: 10px;

        font-weight: 700;
      }


      /* =====================================================
         STATEMENT
      ===================================================== */

      .sh-statement {

        padding-top: 70px;
        padding-bottom: 75px;
      }

      .sh-statement-grid {

        display: grid;

        grid-template-columns:
          .65fr
          1.35fr;

        gap: 70px;
      }

      .sh-statement-title {

        margin: 0;

        font-size:
          clamp(38px,4.2vw,54px);

        line-height:
          1.05;

        letter-spacing:
          -.055em;

        font-weight:
          800;
      }

      .sh-statement-copy {

        padding-top: 4px;

        color:
          var(--ink-soft);

        font-size:
          clamp(16px,1.35vw,18px);

        line-height:
          1.75;

        font-weight:
          500;
      }


      /* =====================================================
         CAPABILITIES
      ===================================================== */

      .sh-capabilities {

        padding-top: 45px;
      }

      .sh-capability-grid {

        display: grid;

        grid-template-columns:
          repeat(4,1fr);

        margin-top: 40px;

        border-top:
          1px solid var(--line);

        border-bottom:
          1px solid var(--line);
      }

      .sh-capability {

        min-height:
          235px;

        padding:
          29px 24px;

        border-right:
          1px solid var(--line);
      }

      .sh-capability:last-child {

        border-right: 0;
      }

      .sh-capability-icon {

        width: 42px;
        height: 42px;

        display: grid;
        place-items: center;

        border-radius: 12px;

        background:
          rgba(36,87,214,.075);

        color:
          var(--brand);
      }

      .sh-capability h3 {

        margin:
          22px 0 9px;

        font-size: 18px;

        line-height: 1.25;

        letter-spacing:
          -.025em;
      }

      .sh-capability p {

        margin: 0;

        color:
          var(--ink-muted);

        font-size: 12px;

        line-height: 1.65;

        font-weight: 500;
      }


      /* =====================================================
         PRODUCT SECTIONS
      ===================================================== */

      .sh-product-section {

        padding:
          100px 6vw;
      }

      .sh-product-dark {

        background:
          radial-gradient(
            circle at 88% 10%,
            rgba(36,87,214,.18),
            transparent 28rem
          ),
          var(--navy);

        color: white;
      }

      .sh-product-grid {

        display: grid;

        grid-template-columns:
          minmax(0,.9fr)
          minmax(0,1.1fr);

        gap:
          clamp(55px,7vw,95px);

        align-items: center;
      }

      .sh-product-grid.reverse {

        grid-template-columns:
          minmax(0,1.1fr)
          minmax(0,.9fr);
      }

      .sh-product-copy {

        max-width:
          620px;
      }

      .sh-product-label {

        display: flex;
        align-items: center;

        gap: 8px;

        color:
          var(--accent);

        font-size: 10px;

        font-weight: 800;

        letter-spacing:
          .15em;

        text-transform:
          uppercase;
      }

      .sh-product-dark
      .sh-product-label {

        color:
          #6dd7ce;
      }

      .sh-product-title {

        margin:
          18px 0;

        font-size:
          clamp(37px,4vw,51px);

        line-height:
          1.04;

        letter-spacing:
          -.055em;

        font-weight:
          800;
      }

      .sh-product-description {

        margin: 0;

        color:
          var(--ink-soft);

        font-size: 15px;

        line-height:
          1.75;

        font-weight:
          500;
      }

      .sh-product-dark
      .sh-product-description {

        color:
          rgba(255,255,255,.66);
      }

      .sh-product-list {

        display: grid;

        gap: 11px;

        margin:
          25px 0 0;

        padding: 0;

        list-style: none;
      }

      .sh-product-list li {

        display: flex;

        align-items:
          flex-start;

        gap: 9px;

        color:
          var(--ink-soft);

        font-size: 12px;

        line-height:
          1.55;
      }

      .sh-product-dark
      .sh-product-list li {

        color:
          rgba(255,255,255,.68);
      }

      .sh-product-list svg {

        flex-shrink: 0;

        margin-top: 2px;

        color:
          var(--accent);
      }

      .sh-product-visual {

        position: relative;
      }

      .sh-product-image {

        overflow: hidden;

        min-height:
          460px;

        border-radius:
          25px;

        box-shadow:
          0 30px 65px -45px
          rgba(15,23,42,.6);
      }

      .sh-product-image img {

        width: 100%;
        height: 460px;

        object-fit: cover;
      }

      .sh-product-card {

        position: absolute;

        right: 20px;
        bottom: 20px;

        width:
          min(250px,calc(100% - 40px));

        padding: 16px;

        border-radius:
          14px;

        background:
          rgba(255,255,255,.94);

        color:
          var(--ink);

        box-shadow:
          0 20px 45px -30px
          rgba(15,23,42,.65);
      }

      .sh-product-dark
      .sh-product-card {

        background:
          rgba(13,27,51,.94);

        color: white;

        border:
          1px solid
          rgba(255,255,255,.1);
      }

      .sh-product-card-label {

        color:
          var(--ink-muted);

        font-size: 9px;

        font-weight: 800;

        letter-spacing:
          .12em;

        text-transform:
          uppercase;
      }

      .sh-product-card-title {

        margin-top: 6px;

        font-size: 15px;

        line-height: 1.35;

        font-weight: 750;
      }


      /* =====================================================
         OUTCOMES
      ===================================================== */

      .sh-outcomes {

        padding-top: 100px;
        padding-bottom: 100px;
      }

      .sh-outcomes-header {

        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        gap: 50px;
      }

      .sh-section-title {

        margin:
          15px 0 0;

        font-size:
          clamp(38px,4.2vw,54px);

        line-height:
          1.04;

        letter-spacing:
          -.055em;

        font-weight:
          800;
      }

      .sh-section-description {

        max-width:
          450px;

        color:
          var(--ink-soft);

        font-size: 14px;

        line-height:
          1.7;
      }

      .sh-outcome-grid {

        display: grid;

        grid-template-columns:
          repeat(3,1fr);

        margin-top: 48px;

        border-top:
          1px solid var(--line);
      }

      .sh-outcome {

        padding:
          28px 26px;

        border-right:
          1px solid var(--line);
      }

      .sh-outcome:last-child {

        border-right: 0;
      }

      .sh-outcome-number {

        color:
          var(--brand);

        font-size: 10px;

        font-weight: 800;

        letter-spacing:
          .1em;
      }

      .sh-outcome h3 {

        margin:
          20px 0 8px;

        font-size: 18px;

        line-height: 1.3;
      }

      .sh-outcome p {

        margin: 0;

        color:
          var(--ink-muted);

        font-size: 12px;

        line-height: 1.65;
      }


      /* =====================================================
         CTA
      ===================================================== */

      .sh-cta {

        padding:
          85px 6vw;
      }

      .sh-cta-box {

        padding:
          clamp(42px,6vw,70px);

        border-radius:
          26px;

        background:
          radial-gradient(
            circle at 88% 10%,
            rgba(8,127,120,.22),
            transparent 22rem
          ),
          linear-gradient(
            135deg,
            var(--navy),
            var(--navy-soft)
          );

        color:
          white;
      }

      .sh-cta-title {

        max-width:
          760px;

        margin:
          15px 0;

        font-size:
          clamp(38px,4.6vw,56px);

        line-height:
          1.03;

        letter-spacing:
          -.055em;

        font-weight:
          800;
      }

      .sh-cta-description {

        max-width:
          620px;

        color:
          rgba(255,255,255,.65);

        font-size: 14px;

        line-height:
          1.7;
      }


      /* =====================================================
         PAGE HERO
      ===================================================== */

      .sh-page-hero {

        padding:
          85px 6vw 65px;
      }

      .sh-page-hero-grid {

        width:
          min(1240px,100%);

        margin: 0 auto;

        display: grid;

        grid-template-columns:
          minmax(0,1fr)
          minmax(400px,.8fr);

        gap: 75px;

        align-items: center;
      }

      .sh-page-title {

        margin:
          17px 0;

        font-size:
          clamp(46px,5.3vw,65px);

        line-height:
          1.01;

        letter-spacing:
          -.06em;

        font-weight:
          800;
      }

      .sh-page-description {

        max-width:
          650px;

        color:
          var(--ink-soft);

        font-size: 15px;

        line-height:
          1.75;

        font-weight:
          500;
      }

      .sh-page-image {

        overflow: hidden;

        border-radius:
          25px;

        box-shadow:
          0 25px 60px -42px
          rgba(15,23,42,.55);
      }

      .sh-page-image img {

        width: 100%;
        height: 430px;

        object-fit: cover;
      }


      /* =====================================================
         ABOUT
      ===================================================== */

      .sh-mission {

        padding-top: 50px;
      }

      .sh-mission-grid {

        display: grid;

        grid-template-columns:
          .7fr
          1.3fr;

        gap: 70px;
      }

      .sh-mission-title {

        margin: 0;

        font-size:
          clamp(34px,4vw,50px);

        line-height:
          1.05;

        letter-spacing:
          -.05em;

        font-weight:
          800;
      }

      .sh-mission-copy {

        color:
          var(--ink-soft);

        font-size: 15px;

        line-height:
          1.8;

        font-weight:
          500;
      }

      .sh-mission-copy p {

        margin:
          0 0 20px;
      }

      .sh-values-grid {

        display: grid;

        grid-template-columns:
          repeat(3,1fr);

        margin-top: 50px;

        border-top:
          1px solid var(--line);
      }

      .sh-value {

        padding:
          28px 24px;

        border-right:
          1px solid var(--line);
      }

      .sh-value:last-child {

        border-right: 0;
      }

      .sh-value-icon {

        color:
          var(--brand);
      }

      .sh-value h3 {

        margin:
          20px 0 8px;

        font-size: 17px;
      }

      .sh-value p {

        margin: 0;

        color:
          var(--ink-muted);

        font-size: 12px;

        line-height:
          1.65;
      }


      /* =====================================================
         SERVICES
      ===================================================== */

      .sh-services-hero {

        padding:
          70px 6vw 25px;
      }

      .sh-services-hero-inner {

        max-width:
          780px;
      }

      .sh-services-title {

        margin:
          12px 0 11px;

        font-size:
          clamp(48px,5.7vw,68px);

        line-height:
          .98;

        letter-spacing:
          -.06em;

        font-weight:
          800;
      }

      .sh-services-intro {

        max-width:
          680px;

        margin: 0;

        color:
          var(--ink-soft);

        font-size: 15px;

        line-height:
          1.65;

        font-weight:
          500;
      }

      .sh-services-section {

        padding:
          10px 6vw 85px;
      }

      .sh-services-cards {

        display: grid;

        gap: 11px;
      }


      /* =====================================================
         SERVICE CARD
      ===================================================== */

      .sh-service-card {

        display: grid;

        grid-template-columns:
          minmax(0,1fr)
          350px;

        min-height:
          205px;

        overflow: hidden;

        background:
          rgba(255,255,255,.9);

        border:
          1px solid
          rgba(148,163,184,.2);

        border-radius:
          18px;

        box-shadow:
          0 12px 30px -28px
          rgba(15,23,42,.45);

        transition:
          transform .2s ease,
          box-shadow .2s ease;
      }

      .sh-service-card:hover {

        transform:
          translateY(-2px);

        box-shadow:
          0 18px 40px -28px
          rgba(15,23,42,.48);
      }


      /* =====================================================
         SERVICE CONTENT
      ===================================================== */

      .sh-service-content {

        display: grid;

        grid-template-columns:
          50px
          minmax(0,1fr);

        gap: 13px;

        padding:
          21px;
      }

      .sh-service-number {

        width: 38px;
        height: 38px;

        display: grid;
        place-items: center;

        border-radius:
          10px;

        background:
          rgba(36,87,214,.065);

        color:
          var(--brand);

        font-size: 11px;

        font-weight: 800;
      }

      .sh-service-main {

        display: grid;

        grid-template-columns:
          42px
          minmax(0,1fr);

        gap: 11px;

        min-width: 0;
      }

      .sh-service-icon {

        width: 39px;
        height: 39px;

        display: grid;
        place-items: center;

        border-radius:
          11px;

        background:
          rgba(36,87,214,.065);

        color:
          var(--brand);
      }

      .sh-service-copy {

        min-width: 0;
      }

      .sh-service-copy h2 {

        margin:
          1px 0 0;

        font-size:
          clamp(19px,1.8vw,23px);

        line-height:
          1.12;

        letter-spacing:
          -.04em;

        font-weight:
          800;
      }

      .sh-service-copy p {

        max-width:
          520px;

        margin:
          6px 0 0;

        color:
          var(--ink-soft);

        font-size: 12px;

        line-height:
          1.48;

        font-weight:
          550;
      }

      .sh-service-link {

        display: inline-flex;
        align-items: center;

        gap: 5px;

        margin-top: 6px;

        padding: 0;

        border: 0;

        background: transparent;

        color:
          var(--brand);

        font-size: 11px;

        font-weight: 800;
      }


      /* =====================================================
         SERVICE IMAGE
      ===================================================== */

      .sh-service-image {

        position: relative;

        min-height:
          187px;

        overflow: hidden;

        margin:
          8px
          8px
          8px
          0;

        border-radius:
          14px;
      }

      .sh-service-image img {

        width: 100%;
        height: 100%;

        min-height:
          187px;

        object-fit: cover;

        transition:
          transform .4s ease;
      }

      .sh-service-card:hover
      .sh-service-image img {

        transform:
          scale(1.035);
      }

      .sh-service-image-overlay {

        position: absolute;

        inset: 0;

        background:
          linear-gradient(
            180deg,
            transparent,
            rgba(9,20,38,.08)
          );
      }


      /* =====================================================
         SERVICES CTA
      ===================================================== */

      .sh-services-bottom-cta {

        display: flex;
        align-items: center;

        gap: 12px;

        margin-top: 13px;

        padding:
          13px 15px;

        border:
          1px solid
          rgba(36,87,214,.09);

        border-radius:
          15px;

        background:
          linear-gradient(
            110deg,
            rgba(36,87,214,.055),
            rgba(8,127,120,.045)
          );
      }

      .sh-services-bottom-icon {

        width: 38px;
        height: 38px;

        display: grid;
        place-items: center;

        flex-shrink: 0;

        border-radius: 10px;

        background:
          rgba(36,87,214,.075);

        color:
          var(--brand);
      }

      .sh-services-bottom-copy {

        display: flex;
        flex-direction: column;

        flex: 1;
      }

      .sh-services-bottom-copy strong {

        font-size: 12px;
      }

      .sh-services-bottom-copy span {

        margin-top: 2px;

        color:
          var(--ink-muted);

        font-size: 10px;
      }


      /* =====================================================
         CONTACT
      ===================================================== */

      .sh-contact-grid {

        display: grid;

        grid-template-columns:
          .9fr
          1.1fr;

        gap: 70px;
      }

      .sh-contact-image {

        overflow: hidden;

        margin-top: 32px;

        border-radius:
          24px;
      }

      .sh-contact-image img {

        width: 100%;
        height: 380px;

        object-fit: cover;
      }

      .sh-contact-details {

        display: grid;

        gap: 12px;

        margin-top: 30px;
      }

      .sh-contact-detail {

        display: flex;
        align-items: flex-start;

        gap: 12px;

        padding: 15px;

        border:
          1px solid var(--line);

        border-radius:
          14px;

        background:
          rgba(255,255,255,.58);
      }

      .sh-contact-detail-icon {

        width: 36px;
        height: 36px;

        display: grid;
        place-items: center;

        flex-shrink: 0;

        border-radius: 10px;

        background:
          rgba(36,87,214,.07);

        color:
          var(--brand);
      }

      .sh-contact-detail strong {

        display: block;

        margin-bottom: 3px;

        font-size: 12px;
      }

      .sh-contact-detail span {

        color:
          var(--ink-muted);

        font-size: 11px;

        word-break:
          break-word;
      }

      .sh-form {

        padding:
          27px;

        border:
          1px solid var(--line);

        border-radius:
          20px;

        background:
          rgba(255,255,255,.75);

        box-shadow:
          0 25px 55px -42px
          rgba(15,23,42,.55);
      }

      .sh-form-title {

        margin:
          0 0 7px;

        font-size: 23px;

        letter-spacing:
          -.035em;
      }

      .sh-form-subtitle {

        margin:
          0 0 23px;

        color:
          var(--ink-muted);

        font-size: 12px;

        line-height: 1.6;
      }

      .sh-form-grid {

        display: grid;

        grid-template-columns:
          repeat(2,1fr);

        gap: 13px;
      }

      .sh-field {

        display: grid;

        gap: 6px;
      }

      .sh-field.full {

        grid-column:
          1 / -1;
      }

      .sh-field label {

        color:
          var(--ink-soft);

        font-size: 10px;

        font-weight: 750;
      }

      .sh-field input,
      .sh-field textarea {

        width: 100%;

        outline: none;

        border:
          1px solid var(--line-strong);

        border-radius:
          10px;

        background:
          white;

        padding:
          11px 12px;

        color:
          var(--ink);

        font-size: 12px;
      }

      .sh-field input {

        height: 44px;
      }

      .sh-field textarea {

        min-height:
          115px;

        resize:
          vertical;
      }

      .sh-field input:focus,
      .sh-field textarea:focus {

        border-color:
          rgba(36,87,214,.55);

        box-shadow:
          0 0 0 3px
          rgba(36,87,214,.07);
      }

      .sh-form-submit {

        width: 100%;

        margin-top: 17px;
      }

      .sh-success {

        display: flex;

        gap: 10px;

        margin-top: 15px;

        padding: 12px;

        border-radius: 10px;

        background:
          var(--accent-soft);

        color:
          var(--accent);

        font-size: 11px;

        line-height: 1.5;
      }


      /* =====================================================
         FOOTER
      ===================================================== */

      .sh-footer {

        margin-left:
          238px;

        padding:
          48px 6vw 30px;

        background:
          var(--navy);

        color: white;
      }

      .sh-footer-grid {

        width:
          min(1240px,100%);

        margin: 0 auto;

        display: grid;

        grid-template-columns:
          1.3fr
          .7fr
          .7fr;

        gap: 50px;
      }

      .sh-footer-brand {

        font-size: 18px;

        font-weight: 800;
      }

      .sh-footer-description {

        max-width:
          410px;

        margin-top: 11px;

        color:
          rgba(255,255,255,.52);

        font-size: 11px;

        line-height: 1.7;
      }

      .sh-footer-heading {

        margin-bottom: 13px;

        color:
          rgba(255,255,255,.4);

        font-size: 9px;

        font-weight: 800;

        letter-spacing:
          .14em;

        text-transform:
          uppercase;
      }

      .sh-footer-links {

        display: grid;

        gap: 8px;
      }

      .sh-footer-links button,
      .sh-footer-links a {

        width: fit-content;

        padding: 0;

        border: 0;

        background: transparent;

        color:
          rgba(255,255,255,.68);

        font-size: 11px;
      }

      .sh-footer-bottom {

        width:
          min(1240px,100%);

        margin:
          35px auto 0;

        padding-top: 17px;

        border-top:
          1px solid
          rgba(255,255,255,.09);

        color:
          rgba(255,255,255,.34);

        font-size: 9px;
      }


      /* =====================================================
         TABLET
      ===================================================== */

      @media (max-width: 1050px) {

        .sh-sidebar {

          width:
            210px;
        }

        .sh-main {

          margin-left:
            210px;
        }

        .sh-footer {

          margin-left:
            210px;
        }

        .sh-hero-grid {

          grid-template-columns:
            1fr;
        }

        .sh-hero-copy {

          max-width:
            800px;
        }

        .sh-capability-grid {

          grid-template-columns:
            repeat(2,1fr);
        }

        .sh-capability:nth-child(2) {

          border-right:
            0;
        }

        .sh-capability:nth-child(-n+2) {

          border-bottom:
            1px solid var(--line);
        }

        .sh-product-grid,
        .sh-product-grid.reverse {

          grid-template-columns:
            1fr;
        }

        .sh-page-hero-grid {

          grid-template-columns:
            1fr;
        }

        .sh-mission-grid {

          grid-template-columns:
            1fr;
        }

        .sh-contact-grid {

          grid-template-columns:
            1fr;
        }

        .sh-service-card {

          grid-template-columns:
            minmax(0,1fr)
            300px;
        }
      }


      /* =====================================================
         MOBILE
      ===================================================== */

      @media (max-width: 767px) {

        .sh-topbar {

          height:
            66px;
        }

        .sh-topbar-inner {

          padding:
            0 16px;
        }

        .sh-brand-mark {

          width: 38px;
          height: 38px;

          border-radius:
            11px;
        }

        .sh-brand-name {

          font-size:
            15px;
        }

        .sh-brand-subtitle {

          display:
            none;
        }

        .sh-mobile-menu-btn {

          display:
            flex;
        }

        .sh-sidebar {

          display:
            none;
        }

        .sh-main {

          margin-left:
            0;

          padding-top:
            66px;
        }

        .sh-section {

          padding:
            70px 20px;
        }


        /* ================================================
           MOBILE HERO
        ================================================= */

        .sh-hero {

          min-height:
            auto;

          padding:
            60px 20px 55px;
        }

        .sh-hero-grid {

          gap:
            38px;
        }

        .sh-hero-title {

          margin:
            17px 0 20px;

          font-size:
            clamp(42px,12.5vw,51px);

          line-height:
            .98;
        }

        .sh-hero-description {

          font-size:
            14px;

          line-height:
            1.7;
        }

        .sh-hero-actions {

          display:
            grid;

          gap:
            8px;
        }

        .sh-btn {

          width:
            100%;

          min-height:
            48px;

          font-size:
            12px;
        }

        .sh-hero-note {

          align-items:
            flex-start;

          font-size:
            10px;

          line-height:
            1.5;
        }

        .sh-hero-image {

          min-height:
            360px;

          border-radius:
            22px;
        }

        .sh-hero-image img {

          height:
            360px;
        }

        .sh-floating-stat {

          left:
            12px;

          bottom:
            12px;

          width:
            165px;

          padding:
            14px;
        }

        .sh-floating-stat-number {

          font-size:
            21px;
        }

        .sh-floating-stat-label {

          font-size:
            9px;
        }

        .sh-floating-badge {

          right:
            12px;

          top:
            12px;

          font-size:
            9px;
        }


        /* ================================================
           MOBILE STATEMENT
        ================================================= */

        .sh-statement {

          padding-top:
            55px;

          padding-bottom:
            55px;
        }

        .sh-statement-grid {

          grid-template-columns:
            1fr;

          gap:
            22px;
        }

        .sh-statement-title {

          font-size:
            35px;

          line-height:
            1.05;
        }

        .sh-statement-copy {

          font-size:
            14px;

          line-height:
            1.72;
        }


        /* ================================================
           MOBILE CAPABILITIES
        ================================================= */

        .sh-capabilities {

          padding-top:
            15px;
        }

        .sh-capability-grid {

          grid-template-columns:
            1fr;

          margin-top:
            32px;
        }

        .sh-capability,
        .sh-capability:nth-child(2) {

          min-height:
            auto;

          border-right:
            0;

          border-bottom:
            1px solid var(--line);

          padding:
            25px 20px;
        }

        .sh-capability:last-child {

          border-bottom:
            0;
        }

        .sh-capability h3 {

          margin-top:
            18px;

          font-size:
            17px;
        }

        .sh-capability p {

          font-size:
            12px;
        }


        /* ================================================
           MOBILE PRODUCTS
        ================================================= */

        .sh-product-section {

          padding:
            70px 20px;
        }

        .sh-product-grid,
        .sh-product-grid.reverse {

          gap:
            38px;
        }

        .sh-product-title {

          font-size:
            35px;

          line-height:
            1.04;
        }

        .sh-product-description {

          font-size:
            13px;
        }

        .sh-product-list li {

          font-size:
            11px;
        }

        .sh-product-image {

          min-height:
            340px;

          border-radius:
            21px;
        }

        .sh-product-image img {

          height:
            340px;
        }

        .sh-product-card {

          right:
            12px;

          bottom:
            12px;

          width:
            calc(100% - 24px);
        }


        /* ================================================
           MOBILE OUTCOMES
        ================================================= */

        .sh-outcomes {

          padding-top:
            70px;

          padding-bottom:
            70px;
        }

        .sh-outcomes-header {

          display:
            block;
        }

        .sh-section-title {

          font-size:
            35px;
        }

        .sh-section-description {

          margin-top:
            20px;

          font-size:
            13px;
        }

        .sh-outcome-grid {

          grid-template-columns:
            1fr;

          margin-top:
            30px;
        }

        .sh-outcome {

          padding:
            25px 0;

          border-right:
            0;

          border-bottom:
            1px solid var(--line);
        }

        .sh-outcome:last-child {

          border-bottom:
            0;
        }

        .sh-outcome h3 {

          font-size:
            17px;
        }

        .sh-outcome p {

          font-size:
            12px;
        }


        /* ================================================
           MOBILE CTA
        ================================================= */

        .sh-cta {

          padding:
            60px 20px;
        }

        .sh-cta-box {

          padding:
            38px 23px;

          border-radius:
            21px;
        }

        .sh-cta-title {

          font-size:
            36px;
        }

        .sh-cta-description {

          font-size:
            13px;
        }


        /* ================================================
           MOBILE PAGE HERO
        ================================================= */

        .sh-page-hero {

          padding:
            60px 20px 45px;
        }

        .sh-page-hero-grid {

          gap:
            35px;
        }

        .sh-page-title {

          font-size:
            42px;

          line-height:
            1;
        }

        .sh-page-description {

          font-size:
            14px;
        }

        .sh-page-image img {

          height:
            320px;
        }


        /* ================================================
           MOBILE ABOUT
        ================================================= */

        .sh-mission {

          padding-top:
            30px;
        }

        .sh-mission-grid {

          gap:
            25px;
        }

        .sh-mission-title {

          font-size:
            34px;
        }

        .sh-mission-copy {

          font-size:
            14px;
        }

        .sh-values-grid {

          grid-template-columns:
            1fr;

          margin-top:
            35px;
        }

        .sh-value {

          padding:
            25px 0;

          border-right:
            0;

          border-bottom:
            1px solid var(--line);
        }

        .sh-value:last-child {

          border-bottom:
            0;
        }


        /* ================================================
           MOBILE SERVICES
           
           IMPORTANT:
           The service card remains horizontal.
        ================================================= */

        .sh-services-hero {

          padding:
            48px 20px 20px;
        }

        .sh-services-title {

          margin-top:
            11px;

          font-size:
            46px;

          line-height:
            .98;
        }

        .sh-services-intro {

          font-size:
            13px;

          line-height:
            1.6;
        }

        .sh-services-section {

          padding:
            8px 14px 60px;
        }

        .sh-services-cards {

          gap:
            9px;
        }


        /* -----------------------------------------------
           SERVICE CARD
        ----------------------------------------------- */

        .sh-service-card {

          display:
            grid;

          grid-template-columns:
            minmax(0,1fr)
            42%;

          min-height:
            175px;

          border-radius:
            15px;
        }


        /* -----------------------------------------------
           SERVICE CONTENT
        ----------------------------------------------- */

        .sh-service-content {

          grid-template-columns:
            35px
            minmax(0,1fr);

          gap:
            7px;

          padding:
            11px 8px 11px 9px;
        }


        /* -----------------------------------------------
           NUMBER
        ----------------------------------------------- */

        .sh-service-number {

          width:
            32px;

          height:
            32px;

          border-radius:
            9px;

          font-size:
            9px;
        }


        /* -----------------------------------------------
           SERVICE MAIN
        ----------------------------------------------- */

        .sh-service-main {

          display:
            block;
        }


        /* -----------------------------------------------
           ICON
        ----------------------------------------------- */

        .sh-service-icon {

          width:
            34px;

          height:
            34px;

          margin-bottom:
            6px;

          border-radius:
            9px;
        }

        .sh-service-icon svg {

          width:
            18px;

          height:
            18px;
        }


        /* -----------------------------------------------
           SERVICE TITLE
        ----------------------------------------------- */

        .sh-service-copy h2 {

          font-size:
            clamp(15px,4.2vw,18px);

          line-height:
            1.08;

          letter-spacing:
            -.035em;
        }


        /* -----------------------------------------------
           SERVICE DESCRIPTION
        ----------------------------------------------- */

        .sh-service-copy p {

          margin-top:
            5px;

          font-size:
            clamp(9.5px,2.8vw,11.5px);

          line-height:
            1.32;

          display:
            -webkit-box;

          -webkit-line-clamp:
            3;

          -webkit-box-orient:
            vertical;

          overflow:
            hidden;
        }


        /* -----------------------------------------------
           LEARN MORE
        ----------------------------------------------- */

        .sh-service-link {

          margin-top:
            4px;

          font-size:
            9.5px;
        }

        .sh-service-link svg {

          width:
            12px;

          height:
            12px;
        }


        /* -----------------------------------------------
           SERVICE IMAGE
        ----------------------------------------------- */

        .sh-service-image {

          min-height:
            159px;

          height:
            calc(100% - 14px);

          margin:
            7px
            7px
            7px
            0;

          border-radius:
            11px;
        }

        .sh-service-image img {

          min-height:
            159px;

          height:
            100%;
        }


        /* ================================================
           SERVICES CTA
        ================================================= */

        .sh-services-bottom-cta {

          display:
            grid;

          grid-template-columns:
            35px
            minmax(0,1fr);

          gap:
            8px;

          padding:
            11px;

          border-radius:
            13px;
        }

        .sh-services-bottom-icon {

          width:
            35px;

          height:
            35px;

          border-radius:
            9px;
        }

        .sh-services-bottom-copy strong {

          font-size:
            11px;
        }

        .sh-services-bottom-copy span {

          font-size:
            9px;

          line-height:
            1.35;
        }

        .sh-services-bottom-cta
        .sh-btn {

          grid-column:
            1 / -1;

          width:
            100%;

          min-height:
            40px;

          font-size:
            10px;
        }


        /* ================================================
           MOBILE CONTACT
        ================================================= */

        .sh-contact-grid {

          gap:
            38px;
        }

        .sh-contact-image {

          margin-top:
            25px;
        }

        .sh-contact-image img {

          height:
            300px;
        }

        .sh-form {

          padding:
            20px;
        }

        .sh-form-grid {

          grid-template-columns:
            1fr;
        }

        .sh-field.full {

          grid-column:
            auto;
        }


        /* ================================================
           MOBILE FOOTER
        ================================================= */

        .sh-footer {

          margin-left:
            0;

          padding:
            45px 20px 27px;
        }

        .sh-footer-grid {

          grid-template-columns:
            1fr;

          gap:
            30px;
        }
      }


      /* =====================================================
         SMALL PHONES
      ===================================================== */

      @media (max-width: 375px) {

        .sh-brand-name {

          font-size:
            14px;
        }

        .sh-hero-title {

          font-size:
            40px;
        }

        .sh-services-title {

          font-size:
            43px;
        }

        .sh-service-card {

          grid-template-columns:
            minmax(0,1fr)
            40%;
        }

        .sh-service-content {

          grid-template-columns:
            31px
            minmax(0,1fr);

          padding:
            10px 7px 10px 8px;

          gap:
            6px;
        }

        .sh-service-number {

          width:
            29px;

          height:
            29px;
        }

        .sh-service-icon {

          width:
            32px;

          height:
            32px;
        }

        .sh-service-copy h2 {

          font-size:
            14px;
        }

        .sh-service-copy p {

          font-size:
            9px;
        }

        .sh-service-image {

          min-height:
            155px;
        }

        .sh-service-image img {

          min-height:
            155px;
        }

        .sh-floating-badge {

          display:
            none;
        }
      }


      /* =====================================================
         ACCESSIBILITY
      ===================================================== */

      @media (prefers-reduced-motion: reduce) {

        html {
          scroll-behavior:
            auto;
        }

        *,
        *::before,
        *::after {

          animation-duration:
            .01ms !important;

          animation-iteration-count:
            1 !important;

          transition-duration:
            .01ms !important;
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

      <nav className="sh-nav">

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
      />

      <aside className="sh-mobile-drawer">

        <div className="sh-mobile-drawer-header">

          <Brand compact />

          <button
            className="sh-close-btn"
            onClick={onClose}
            aria-label="Close navigation"
          >

            <X size={19} />

          </button>

        </div>


        <nav className="sh-mobile-nav">

          {NAV_ITEMS.map((item) => (

            <NavButton
              key={item.id}
              item={item}
              activePage={activePage}
              onNavigate={(nextPage) => {

                onNavigate(nextPage);

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

              <ArrowRight size={16} />

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

            <CheckCircle2 size={14} />

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

            <Sparkles size={13} />

            AI-powered healthcare

          </div>


          <div className="sh-floating-stat">

            <div className="sh-floating-stat-number">
              AI + Human
            </div>

            <div className="sh-floating-stat-label">

              Intelligent systems designed
              to augment healthcare teams.

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

                  <Icon size={20} />

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

    <section className="sh-product-section sh-product-dark">

      <div className="sh-container">

        <div className="sh-product-grid">

          <div className="sh-product-copy">

            <div className="sh-product-label">

              <BrainCircuit size={14} />

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

                <CircleCheck size={15} />

                Revenue-cycle visibility across
                critical workflows.

              </li>

              <li>

                <CircleCheck size={15} />

                Intelligent identification of
                operational opportunities.

              </li>

              <li>

                <CircleCheck size={15} />

                Denial and accounts-receivable
                insights.

              </li>

              <li>

                <CircleCheck size={15} />

                Executive-ready performance
                intelligence.

              </li>

            </ul>


            <div className="sh-hero-actions">

              <button
                className="sh-btn sh-btn-primary"
                type="button"
              >

                Explore Stellar.AI

                <ArrowUpRight size={15} />

              </button>

            </div>

          </div>


          <div className="sh-product-visual">

            <div className="sh-product-image">

              <img
                src={IMAGES.operations}
                alt="Healthcare operations"
                loading="lazy"
              />

            </div>


            <div className="sh-product-card">

              <div className="sh-product-card-label">
                Intelligence
              </div>

              <div className="sh-product-card-title">

                From operational data
                to better decisions.

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

    <section className="sh-product-section">

      <div className="sh-container">

        <div className="sh-product-grid reverse">

          <div className="sh-product-visual">

            <div className="sh-product-image">

              <img
                src={IMAGES.telehealth}
                alt="Digital healthcare experience"
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

              <HeartPulse size={14} />

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

                <CircleCheck size={15} />

                Convenient digital healthcare access.

              </li>

              <li>

                <CircleCheck size={15} />

                Virtual consultation experiences.

              </li>

              <li>

                <CircleCheck size={15} />

                Connected patient journeys.

              </li>

              <li>

                <CircleCheck size={15} />

                Designed for scalable digital
                healthcare delivery.

              </li>

            </ul>


            <div className="sh-hero-actions">

              <button
                className="sh-btn sh-btn-primary"
                type="button"
              >

                Explore EasyMed

                <ArrowUpRight size={15} />

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

              <ArrowRight size={15} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   HOME
========================================================= */

function HomePage({ onNavigate }) {

  return (

    <>

      <Hero
        onNavigate={onNavigate}
      />

      <StatementSection />

      <CapabilitiesSection />

      <StellarAISection />

      <EasyMedSection />

      <OutcomesSection />

      <CTASection
        onNavigate={onNavigate}
      />

    </>
  );
}


/* =========================================================
   ABOUT
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
                size={22}
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
                size={22}
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
                size={22}
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
   SERVICES
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
        "AI-powered healthcare workflow technology",
    },

    {
      number: "02",
      name: "Revenue Cycle Intelligence",
      description:
        "Improve visibility across eligibility, coding, denials, accounts receivable, and payer performance.",
      icon: Target,
      image: IMAGES.revenueCycle,
      imageAlt:
        "Healthcare revenue cycle analytics",
    },

    {
      number: "03",
      name: "Digital Patient Access",
      description:
        "Create simpler, more intuitive healthcare experiences across digital and connected channels.",
      icon: HeartPulse,
      image: IMAGES.patientAccess,
      imageAlt:
        "Digital healthcare patient access",
    },

    {
      number: "04",
      name: "Healthcare Software Engineering",
      description:
        "Build scalable architecture, products, and integrations designed around real-world healthcare workflows.",
      icon: Code2,
      image: IMAGES.softwareEngineering,
      imageAlt:
        "Healthcare software engineering",
    },

    {
      number: "05",
      name: "Enterprise Integration",
      description:
        "Connect systems, data, and workflows to create a more unified healthcare technology environment.",
      icon: Network,
      image: IMAGES.enterpriseIntegration,
      imageAlt:
        "Connected healthcare enterprise systems",
    },

    {
      number: "06",
      name: "Healthcare Technology Consulting",
      description:
        "Strategic guidance for organizations evaluating technology modernization, AI adoption, and digital transformation.",
      icon: Users,
      image: IMAGES.healthcareConsulting,
      imageAlt:
        "Healthcare technology consulting",
    },

  ];


  return (

    <>

      {/* ===============================================
          SERVICES HEADER
      =============================================== */}

      <section className="sh-services-hero">

        <div className="sh-container">

          <div className="sh-services-hero-inner">

            <div className="sh-eyebrow">

              <span className="sh-eyebrow-dot" />

              Our Services

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


      {/* ===============================================
          SERVICE CARDS
      =============================================== */}

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

                  <div className="sh-service-content">

                    <div className="sh-service-number">
                      {service.number}
                    </div>


                    <div className="sh-service-main">

                      <div className="sh-service-icon">

                        <Icon
                          size={20}
                          strokeWidth={2}
                        />

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
                          type="button"
                          onClick={() =>
                            onNavigate("contact")
                          }
                        >

                          Learn more

                          <ArrowRight size={13} />

                        </button>

                      </div>

                    </div>

                  </div>


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


          {/* =============================================
              BOTTOM CTA
          ============================================= */}

          <div className="sh-services-bottom-cta">

            <div className="sh-services-bottom-icon">

              <MessageSquare size={18} />

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
              type="button"
              onClick={() =>
                onNavigate("contact")
              }
            >

              Get in Touch

              <ArrowRight size={14} />

            </button>

          </div>

        </div>

      </section>

    </>
  );
}


/* =========================================================
   CONTACT
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

                  <MessageSquare size={17} />

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

                  <Phone size={17} />

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
                  autoComplete="name"
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
                  autoComplete="organization"
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
                  autoComplete="email"
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
                  autoComplete="tel"
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

              <ArrowRight size={15} />

            </button>


            {sent && (

              <div className="sh-success">

                <CheckCircle2 size={16} />

                <div>

                  <strong>
                    Thank you.
                  </strong>

                  <br />

                  Your message has been captured.
                  We'll be in touch.

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

            <a href={`mailto:${BRAND.email}`}>
              Email us
            </a>

          </div>

        </div>

      </div>


      <div className="sh-footer-bottom">

        © {new Date().getFullYear()}{" "}

        {BRAND.legalName}.

        {" "}All rights reserved.

      </div>

    </footer>
  );
}


/* =========================================================
   APPLICATION
========================================================= */

export default function StellarOneSite() {

  const [page, setPage] =
    useState("home");

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);


  function navigate(nextPage) {

    setPage(nextPage);

    setMobileMenuOpen(false);

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

      break;
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