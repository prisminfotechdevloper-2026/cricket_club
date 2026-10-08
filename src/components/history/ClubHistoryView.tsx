"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Clock,
  Target,
  Shield,
  Heart,
  Trophy,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  Home,
  CheckCircle2,
} from "lucide-react";
import { Container } from "../common/Container";

type CategoryId =
  | "overview"
  | "timeline"
  | "vision"
  | "training"
  | "brotherhood"
  | "honors";

interface CategoryMeta {
  id: CategoryId;
  index: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
  tagline: string;
}

const CATEGORIES: CategoryMeta[] = [
  {
    id: "overview",
    index: "01",
    title: "Club Inception & Genesis",
    shortTitle: "Overview & Genesis",
    icon: Compass,
    tagline: "How passion for cricket brought Devpur boys together in 2013.",
  },
  {
    id: "timeline",
    index: "02",
    title: "Timeline & Milestones",
    shortTitle: "Journey Timeline",
    icon: Clock,
    tagline: "Key chapters from our humble beginning to championship finals.",
  },
  {
    id: "vision",
    index: "03",
    title: "Our Vision & Philosophy",
    shortTitle: "Vision & Values",
    icon: Target,
    tagline: "The guiding principles of sportsmanship and village pride.",
  },
  {
    id: "training",
    index: "04",
    title: "Matunga Ground & Training",
    shortTitle: "Ground & Practice",
    icon: Shield,
    tagline: "Morning turf nets, physical conditioning, and professional coaching.",
  },
  {
    id: "brotherhood",
    index: "05",
    title: "Brotherhood & Club Life",
    shortTitle: "Brotherhood & Life",
    icon: Heart,
    tagline: "The lifelong camaraderie, train journeys, and family celebrations.",
  },
  {
    id: "honors",
    index: "06",
    title: "Trophies & Honors",
    shortTitle: "Silverware & Awards",
    icon: Trophy,
    tagline: "Championship cups, Orange Caps, Purple Caps, and fair-play honors.",
  },
];

export function ClubHistoryView() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("overview");

  const currentCategoryIndex = CATEGORIES.findIndex(
    (c) => c.id === activeCategory
  );
  const nextCategory =
    currentCategoryIndex < CATEGORIES.length - 1
      ? CATEGORIES[currentCategoryIndex + 1]
      : null;

  return (
    <div className="w-full bg-background min-h-screen flex flex-col">
      {/* =========================================================================
          TOP BREADCRUMBS & PAGE HEADER
          Clean, athletic header with clear hierarchical breadcrumbs
          ========================================================================= */}
      <section className="border-b border-border/70 bg-card/60 backdrop-blur-sm py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
            {/* Breadcrumb Trail */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs sm:text-sm font-medium"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
              <Link
                href="/about"
                className="hover:text-foreground transition-colors"
              >
                About Club
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
              <span className="text-foreground font-semibold">
                History of DCC
              </span>
            </nav>

            {/* Inception Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-headline uppercase font-bold tracking-wider bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Devpur Cricket Club • Est. 2013</span>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          PAGE HERO BANNER
          Atmospheric banner with high-contrast club title & subtitle
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0A0D14] border-b border-border/80 py-12 sm:py-16 text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#EA4326_1px,transparent_1px)] [background-size:24px_24px]" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-block text-[#EA4326] font-headline text-sm font-bold uppercase tracking-widest">
              Club Heritage &amp; Archives
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              History of Devpur Cricket Club
            </h1>
            <p className="text-white/80 text-base sm:text-lg font-normal leading-relaxed max-w-2xl font-body">
              More than a club, this is a brotherhood born on the red soil of
              Matunga Ground. Explore our authentic story, divided by chapters.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          MOBILE CATEGORY PILL STRIP
          Enables quick one-tap category switching on smaller viewports
          ========================================================================= */}
      <div className="lg:hidden sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border py-3">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-headline font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#EA4326] text-white shadow-sm"
                      : "bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>
                    {cat.index}. {cat.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      {/* =========================================================================
          MAIN 2-COLUMN LAYOUT (MIG-INSPIRED ARCHITECTURE)
          Left: Dedicated Category Story Content (No mixed clutter)
          Right: Fixed / Sticky Categories Sidebar & Quick Club Facts
          ========================================================================= */}
      <section className="flex-1 py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* -------------------------------------------------------------------
                LEFT COLUMN (COL 1-8): FOCUSED CATEGORY CONTENT
                ------------------------------------------------------------------- */}
            <main className="lg:col-span-8 min-w-0">
              {/* Category 1: Overview & Genesis */}
              {activeCategory === "overview" && <OverviewStorySection />}

              {/* Category 2: Timeline & Milestones */}
              {activeCategory === "timeline" && <TimelineStorySection />}

              {/* Category 3: Vision & Philosophy */}
              {activeCategory === "vision" && <VisionStorySection />}

              {/* Category 4: Matunga Ground & Training */}
              {activeCategory === "training" && <TrainingStorySection />}

              {/* Category 5: Brotherhood & Club Life */}
              {activeCategory === "brotherhood" && <BrotherhoodStorySection />}

              {/* Category 6: Trophies & Honors */}
              {activeCategory === "honors" && <HonorsStorySection />}

              {/* Bottom Category Advancement Banner */}
              {nextCategory && (
                <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card/60 p-6 rounded-xl border border-border/80">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-headline font-bold text-muted-foreground">
                      Next Chapter
                    </span>
                    <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">
                      {nextCategory.index}. {nextCategory.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                      {nextCategory.tagline}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveCategory(nextCategory.id);
                      window.scrollTo({ top: 220, behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#EA4326] hover:bg-[#D9381E] text-white font-headline font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Read Next Chapter</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </main>

            {/* -------------------------------------------------------------------
                RIGHT COLUMN (COL 9-12): FIXED STICKY CATEGORIES SIDEBAR
                ------------------------------------------------------------------- */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Categories Navigation Card */}
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
                <div className="border-b border-border pb-3">
                  <span className="text-xs font-headline font-bold uppercase tracking-wider text-[#EA4326]">
                    History Navigation
                  </span>
                  <h2 className="font-headline text-xl font-extrabold uppercase text-foreground">
                    Story Categories
                  </h2>
                </div>

                <div className="space-y-1.5" role="tablist">
                  {CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          window.scrollTo({ top: 220, behavior: "smooth" });
                        }}
                        role="tab"
                        aria-selected={isActive}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-150 cursor-pointer group ${
                          isActive
                            ? "bg-[#EA4326] text-white shadow-md shadow-[#EA4326]/20 font-semibold"
                            : "bg-transparent text-foreground hover:bg-muted/70 hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`w-6 text-xs font-mono font-bold ${
                              isActive
                                ? "text-white/80"
                                : "text-muted-foreground group-hover:text-foreground"
                            }`}
                          >
                            {cat.index}
                          </span>
                          <Icon
                            className={`w-4 h-4 shrink-0 ${
                              isActive ? "text-white" : "text-[#EA4326]"
                            }`}
                          />
                          <span className="font-headline text-base tracking-wide truncate">
                            {cat.title}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive
                              ? "text-white translate-x-0.5"
                              : "text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-0.5"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* DCC Quick Archival Facts */}
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
                <div className="border-b border-border pb-3">
                  <span className="text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground">
                    At A Glance
                  </span>
                  <h3 className="font-headline text-lg font-bold uppercase text-foreground">
                    Club Archival Facts
                  </h3>
                </div>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
                    <div>
                      <span className="block font-semibold text-foreground">
                        Founded In
                      </span>
                      <span className="text-muted-foreground">
                        2013 (10+ Years of Legacy)
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
                    <div>
                      <span className="block font-semibold text-foreground">
                        Home Ground
                      </span>
                      <span className="text-muted-foreground">
                        Matunga Gymkhana Pavilion, Mumbai
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
                    <div>
                      <span className="block font-semibold text-foreground">
                        Community
                      </span>
                      <span className="text-muted-foreground">
                        Devpur Gaam (KVO Cricket Fraternity)
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
                    <div>
                      <span className="block font-semibold text-foreground">
                        Active Roster
                      </span>
                      <span className="text-muted-foreground">
                        50+ Registered Players
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Official Motto Banner */}
              <div className="rounded-xl p-5 bg-gradient-to-br from-[#12161F] to-[#0A0D14] text-white border border-border/60 space-y-2">
                <span className="text-[11px] font-headline uppercase font-bold tracking-widest text-[#EA4326]">
                  Club Identity
                </span>
                <p className="font-headline text-lg font-extrabold uppercase leading-snug">
                  &ldquo;Cricket brings us together. The club makes us
                  family.&rdquo;
                </p>
                <p className="text-xs text-white/70">
                  Devpur Cricket Club represents our roots with relentless pride
                  on every pitch.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}

/* =============================================================================
   CATEGORY 1 COMPONENT: INCEPTION & GENESIS
   Simple, heartfelt story of how 15 boys from Devpur Gaam started DCC in 2013
   ============================================================================= */
function OverviewStorySection() {
  return (
    <article className="space-y-6">
      {/* Chapter Title */}
      <div className="border-b border-border pb-4 space-y-1">
        <div className="flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#EA4326]">
          <span>Chapter 01</span>
          <span>•</span>
          <span>The Beginning</span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-foreground uppercase tracking-tight">
          Club Inception &amp; Genesis
        </h2>
        <p className="text-muted-foreground text-base">
          How a handful of passionate cricket lovers from Devpur Gaam founded DCC
          in 2013.
        </p>
      </div>

      {/* Authentic Photo */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border/80 shadow-md">
        <Image
          src="/images/5year_age_memories.png"
          alt="Early days memories of Devpur Cricket Club members"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 750px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
          <span className="font-headline font-bold uppercase tracking-wider text-[#EA4326]">
            Archival Record • 2013 Inception
          </span>
          <p className="text-white/90">
            The foundation members of Devpur Cricket Club during our first
            Sunday gathering.
          </p>
        </div>
      </div>

      {/* Story Narrative in Simple Sentences */}
      <div className="space-y-4 text-foreground/90 font-body text-base leading-relaxed">
        <p>
          In 2013, a group of young boys from Devpur Gaam met in Mumbai. They had
          different jobs and daily routines, but one shared dream — to play
          serious cricket together.
        </p>
        <p>
          At that time, there was no official cricket club for our village
          youth. There were no sponsors, no proper kits, and no reserved ground.
          All they had was a second-hand kit bag, deep love for the game, and
          unstoppable enthusiasm.
        </p>
        <p>
          They decided to give our community a proud name. That was the day
          <strong> Devpur Cricket Club (DCC)</strong> was born.
        </p>
      </div>

      {/* Highlight Points Card */}
      <div className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h3 className="font-headline text-lg font-bold uppercase text-foreground">
          How It All Started:
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
            <span>
              <strong>15 dedicated players:</strong> Committed to early morning
              practice every Sunday without missing a single week.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
            <span>
              <strong>Community backing:</strong> Elders of Devpur Gaam
              encouraged the boys and blessed the initiative.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
            <span>
              <strong>First official jersey:</strong> White kit with the Devpur
              Crest made its first appearance on the pitch.
            </span>
          </li>
        </ul>
      </div>

      {/* Quote Block */}
      <blockquote className="border-l-4 border-[#EA4326] pl-4 py-2 italic text-muted-foreground bg-muted/30 rounded-r-lg">
        &ldquo;We did not start with money or fancy equipment. We started with
        passion, honesty, and an unbreakable bond between brothers.&rdquo;
      </blockquote>
    </article>
  );
}

/* =============================================================================
   CATEGORY 2 COMPONENT: TIMELINE & MILESTONES
   Chronological milestones of DCC from 2013 to present day
   ============================================================================= */
function TimelineStorySection() {
  const milestones = [
    {
      year: "2013",
      title: "The First Step",
      desc: "Devpur Cricket Club was formally founded. The first 15 players began weekly net practice at local Mumbai grounds.",
      img: "/images/memories_2018.png",
    },
    {
      year: "2015",
      title: "Tournament Debut in KVO League",
      desc: "DCC officially registered for competitive leather-ball community tournaments. We played our first official fixture.",
      img: null,
    },
    {
      year: "2018",
      title: "The First Championship Cup",
      desc: "After five years of relentless hard work, DCC won its first major trophy. The celebration brought the entire village together.",
      img: "/images/achivement_winning.png",
    },
    {
      year: "2021",
      title: "Squad Expansion to 50+ Players",
      desc: "The club grew from one squad to multiple teams. Junior talent from Devpur Gaam was inducted and mentored by seniors.",
      img: null,
    },
    {
      year: "2024–Present",
      title: "Dominance & Premier Consistency",
      desc: "Regular finalists at Matunga Gymkhana with Orange Cap and Purple Cap honors. DCC stands recognized as a premier club.",
      img: "/images/achivement_winning2.png",
    },
  ];

  return (
    <article className="space-y-6">
      {/* Chapter Title */}
      <div className="border-b border-border pb-4 space-y-1">
        <div className="flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#EA4326]">
          <span>Chapter 02</span>
          <span>•</span>
          <span>Milestones</span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-foreground uppercase tracking-tight">
          Timeline &amp; Historical Milestones
        </h2>
        <p className="text-muted-foreground text-base">
          A step-by-step journey of how DCC rose through hard work and unity.
        </p>
      </div>

      {/* Chronological Timeline Cards */}
      <div className="space-y-6">
        {milestones.map((m, idx) => (
          <div
            key={m.year}
            className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-headline text-2xl sm:text-3xl font-extrabold text-[#EA4326]">
                {m.year}
              </span>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                Phase 0{idx + 1}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-headline text-xl font-bold uppercase text-foreground">
                {m.title}
              </h3>
              <p className="text-foreground/90 font-body text-base leading-relaxed">
                {m.desc}
              </p>
            </div>

            {m.img && (
              <div className="relative aspect-[16/8] w-full rounded-lg overflow-hidden border border-border/70 mt-3">
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 750px"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

/* =============================================================================
   CATEGORY 3 COMPONENT: VISION & PHILOSOPHY
   Four clear pillars of Devpur Cricket Club
   ============================================================================= */
function VisionStorySection() {
  const pillars = [
    {
      num: "01",
      title: "Grassroots Opportunities",
      desc: "Every youngster from Devpur Gaam deserves a fair chance to play. We provide kits, guidance, and match opportunities to all.",
    },
    {
      num: "02",
      title: "Spirit of the Gentleman's Game",
      desc: "We play with aggressive intent to win, but we never compromise on respect for the umpires, opponents, and rules.",
    },
    {
      num: "03",
      title: "Discipline and Daily Habits",
      desc: "Cricket teaches punctuality, mental calmness under pressure, and fitness that helps players in their personal careers.",
    },
    {
      num: "04",
      title: "Lifelong Brotherhood",
      desc: "Matches come and go, but the brotherhood stays forever. We celebrate each other's life achievements off the field.",
    },
  ];

  return (
    <article className="space-y-6">
      {/* Chapter Title */}
      <div className="border-b border-border pb-4 space-y-1">
        <div className="flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#EA4326]">
          <span>Chapter 03</span>
          <span>•</span>
          <span>Core Values</span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-foreground uppercase tracking-tight">
          Our Vision &amp; Philosophy
        </h2>
        <p className="text-muted-foreground text-base">
          The values and standards that make DCC more than just a team.
        </p>
      </div>

      <div className="space-y-4 text-foreground/90 font-body text-base leading-relaxed">
        <p>
          At Devpur Cricket Club, cricket is not viewed as just a weekend hobby.
          It is a school of character, discipline, and unity.
        </p>
        <p>
          Our vision is to build a sporting environment where the youth of our
          village stay healthy, stay united, and represent Devpur Gaam with
          impeccable sportsmanship.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {pillars.map((p) => (
          <div
            key={p.num}
            className="bg-card border border-border rounded-xl p-5 space-y-2 hover:border-[#EA4326]/50 transition-colors"
          >
            <span className="font-mono text-xs font-bold text-[#EA4326] px-2 py-0.5 rounded bg-[#EA4326]/10 inline-block">
              Pillar {p.num}
            </span>
            <h3 className="font-headline text-lg font-bold uppercase text-foreground">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-body">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Visual Quote Card */}
      <div className="bg-gradient-to-r from-card to-muted/40 border border-border p-6 rounded-xl space-y-2">
        <h3 className="font-headline text-xl font-bold uppercase text-foreground">
          Our Guiding Promise:
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          &ldquo;When a player wears the DCC badge on their chest, they carry the
          hopes and honor of Devpur Gaam. We play with heart, courage, and
          respect on every single ball.&rdquo;
        </p>
      </div>
    </article>
  );
}

/* =============================================================================
   CATEGORY 4 COMPONENT: MATUNGA GROUND & TRAINING
   Routine, fitness, and practice culture at Matunga Gymkhana Pavilion
   ============================================================================= */
function TrainingStorySection() {
  return (
    <article className="space-y-6">
      {/* Chapter Title */}
      <div className="border-b border-border pb-4 space-y-1">
        <div className="flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#EA4326]">
          <span>Chapter 04</span>
          <span>•</span>
          <span>The Ground</span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-foreground uppercase tracking-tight">
          Matunga Ground &amp; Training
        </h2>
        <p className="text-muted-foreground text-base">
          The sacred ground where our skills are sharpened before the break of
          dawn.
        </p>
      </div>

      {/* Ground Image */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border/80 shadow-md">
        <Image
          src="/images/ground_playing.png"
          alt="Matunga Gymkhana Cricket Ground playing action"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 750px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
          <span className="font-headline font-bold uppercase tracking-wider text-[#EA4326]">
            Matunga Gymkhana Cricket Ground
          </span>
          <p className="text-white/90">
            Dawn fitness sessions and turf net practices that shape our match
            readiness.
          </p>
        </div>
      </div>

      <div className="space-y-4 text-foreground/90 font-body text-base leading-relaxed">
        <p>
          Matunga Gymkhana Cricket Ground has been the home of our cricketing
          rituals. Long before the city wakes up, our players travel from
          different parts of Mumbai to arrive at the nets by 6:00 AM.
        </p>
        <p>
          Every training session is structured. We practice on both turf and
          clay wickets, preparing for all kinds of tournament pitches.
        </p>
      </div>

      {/* Routine Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-4 space-y-1.5">
          <Clock className="w-5 h-5 text-[#EA4326]" />
          <h3 className="font-headline text-base font-bold uppercase text-foreground">
            Morning Schedule
          </h3>
          <p className="text-xs text-muted-foreground">
            6:00 AM to 9:00 AM every Monday, Wednesday, and Friday.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-4 space-y-1.5">
          <Target className="w-5 h-5 text-[#EA4326]" />
          <h3 className="font-headline text-base font-bold uppercase text-foreground">
            Skill Stations
          </h3>
          <p className="text-xs text-muted-foreground">
            Slip catching, boundary throwing, death bowling, and target nets.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-4 space-y-1.5">
          <Shield className="w-5 h-5 text-[#EA4326]" />
          <h3 className="font-headline text-base font-bold uppercase text-foreground">
            Coach Guidance
          </h3>
          <p className="text-xs text-muted-foreground">
            Technical guidance under experienced Kanga League senior coaches.
          </p>
        </div>
      </div>
    </article>
  );
}

/* =============================================================================
   CATEGORY 5 COMPONENT: BROTHERHOOD & CLUB LIFE
   Memories beyond 22 yards: travels, celebrations, and lifelong bond
   ============================================================================= */
function BrotherhoodStorySection() {
  return (
    <article className="space-y-6">
      {/* Chapter Title */}
      <div className="border-b border-border pb-4 space-y-1">
        <div className="flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#EA4326]">
          <span>Chapter 05</span>
          <span>•</span>
          <span>Camaraderie</span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-foreground uppercase tracking-tight">
          Brotherhood &amp; Club Life
        </h2>
        <p className="text-muted-foreground text-base">
          The laughter, post-match chai, train journeys, and family celebrations.
        </p>
      </div>

      {/* Two Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/80 shadow-sm">
          <Image
            src="/images/buddies.png"
            alt="Devpur Cricket Club buddies and team members"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-headline font-bold uppercase tracking-wider">
            Brothers On &amp; Off The Field
          </span>
        </div>

        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/80 shadow-sm">
          <Image
            src="/images/team_wedding_party.png"
            alt="Celebrating weddings and family occasions together"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-headline font-bold uppercase tracking-wider">
            Celebrating Life Milestones
          </span>
        </div>
      </div>

      <div className="space-y-4 text-foreground/90 font-body text-base leading-relaxed">
        <p>
          Cricket brought us together, but life made us brothers. For members of
          DCC, the club is an extended family.
        </p>
        <p>
          After every Sunday match, whether we win or lose, the entire squad
          gathers for breakfast and tea. Every ball is re-analyzed with laughter
          and good spirits.
        </p>
        <p>
          We travel together for outstation tournaments, celebrate each other&apos;s
          weddings, festivals, and career victories. When one player goes through
          a difficult time, the whole club stands behind them.
        </p>
      </div>

      {/* Life Memories Highlight Box */}
      <div className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h3 className="font-headline text-lg font-bold uppercase text-foreground">
          What Makes Our Brotherhood Special:
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <Heart className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
            <span>
              <strong>Zero Ego Culture:</strong> From 18-year-old debutants to
              veteran seniors, everyone sits on the same bench as equals.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <Heart className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
            <span>
              <strong>Outstation Journeys:</strong> Train travels with bats, kit
              bags, and late-night singing create lifetime memories.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <Heart className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
            <span>
              <strong>Community Support:</strong> Standing together in family
              celebrations and supporting every village cause.
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
}

/* =============================================================================
   CATEGORY 6 COMPONENT: TROPHIES & HONORS
   Championship trophies, Orange Caps, Purple Caps, and tournament victories
   ============================================================================= */
function HonorsStorySection() {
  return (
    <article className="space-y-6">
      {/* Chapter Title */}
      <div className="border-b border-border pb-4 space-y-1">
        <div className="flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#EA4326]">
          <span>Chapter 06</span>
          <span>•</span>
          <span>Silverware</span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-foreground uppercase tracking-tight">
          Trophies &amp; Honors
        </h2>
        <p className="text-muted-foreground text-base">
          Celebrating the hard-earned victories that brought pride to Devpur
          Gaam.
        </p>
      </div>

      {/* Trophy Celebration Image */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border/80 shadow-md">
        <Image
          src="/images/winning_time_with_group.png"
          alt="Devpur Cricket Club celebrating tournament trophy win"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 750px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
          <span className="font-headline font-bold uppercase tracking-wider text-[#EA4326]">
            Championship Glory • Matunga Gymkhana
          </span>
          <p className="text-white/90">
            DCC lifting the championship trophy surrounded by team members and
            mentors.
          </p>
        </div>
      </div>

      <div className="space-y-4 text-foreground/90 font-body text-base leading-relaxed">
        <p>
          Over the past decade, DCC has competed against top community clubs
          across Mumbai and Gujarat.
        </p>
        <p>
          Our trophy cabinet holds multiple tournament championships, runner-up
          shields, and individual accolades that reflect the consistency of our
          players.
        </p>
      </div>

      {/* Honors Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Orange Cap Card */}
        <div className="bg-card border border-border rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-headline font-bold text-amber-500">
                Batting Mastery
              </span>
              <h3 className="font-headline text-lg font-bold uppercase text-foreground">
                Orange Cap Honors
              </h3>
            </div>
          </div>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            Awarded to DCC&apos;s leading run-scorers for steering pressure run
            chases in critical knockout matches.
          </p>
        </div>

        {/* Purple Cap Card */}
        <div className="bg-card border border-border rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-headline font-bold text-purple-500">
                Bowling Mastery
              </span>
              <h3 className="font-headline text-lg font-bold uppercase text-foreground">
                Purple Cap Honors
              </h3>
            </div>
          </div>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            Recognizing our strike bowlers who delivered match-winning spells,
            maidens, and breakthroughs.
          </p>
        </div>
      </div>

      {/* Fair Play Highlight */}
      <div className="bg-card border border-border rounded-xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-sm font-headline font-bold uppercase text-primary">
          <CheckCircle2 className="w-4 h-4" />
          <span>Fair Play &amp; Sportsmanship Awards</span>
        </div>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          Beyond match wins, tournament committees have repeatedly commended DCC
          for our discipline, respect toward umpires, and positive conduct on
          the field.
        </p>
      </div>
    </article>
  );
}
