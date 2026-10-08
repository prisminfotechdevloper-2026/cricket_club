"use client";

import React, { useState, useRef, useEffect } from "react";
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
  ChevronLeft,
  MapPin,
  Calendar,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  Home,
  CheckCircle2,
  GraduationCap,
  Building2,
  Network,
} from "lucide-react";
import { Container } from "../common/Container";

type CategoryId =
  | "overview"
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
    title: "Club Overview: Our Story",
    shortTitle: "Club Overview",
    icon: Compass,
    tagline: "A community that found its way back to the game.",
  },
  {
    id: "vision",
    index: "02",
    title: "Our Vision & Philosophy",
    shortTitle: "Vision & Values",
    icon: Target,
    tagline: "The guiding principles of sportsmanship and village pride.",
  },
  {
    id: "training",
    index: "03",
    title: "Matunga Ground & Training",
    shortTitle: "Ground & Practice",
    icon: Shield,
    tagline: "Morning turf nets, physical conditioning, and professional coaching.",
  },
  {
    id: "brotherhood",
    index: "04",
    title: "Brotherhood & Club Life",
    shortTitle: "Brotherhood & Life",
    icon: Heart,
    tagline: "The lifelong camaraderie, train journeys, and family celebrations.",
  },
  {
    id: "honors",
    index: "05",
    title: "Trophies, Honors & Milestones",
    shortTitle: "Trophies & Milestones",
    icon: Trophy,
    tagline: "Championship silverware, individual honors, and our historic road to glory.",
  },
];

/* Reusable Chapter Header */
function ChapterHeader({
  chapter,
  tag,
  title,
  subtitle,
}: {
  chapter: string;
  tag: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border-b border-border pb-4 space-y-1">
      <div className="flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#EA4326]">
        <span>{chapter}</span>
        <span>•</span>
        <span>{tag}</span>
      </div>
      <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-foreground uppercase tracking-tight">
        {title}
      </h2>
      <p className="text-muted-foreground text-base">{subtitle}</p>
    </div>
  );
}

/* Reusable Story Photo Banner */
function StoryPhotoBanner({
  src,
  alt,
  badge,
  caption,
}: {
  src: string;
  alt: string;
  badge: string;
  caption: string;
}) {
  return (
    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border/80 shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 750px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
        <span className="font-headline font-bold uppercase tracking-wider text-[#EA4326]">
          {badge}
        </span>
        <p className="text-white/90">{caption}</p>
      </div>
    </div>
  );
}

export function ClubHistoryView() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("overview");
  const mobileTabsRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Automatically center active category pill on mobile when active category changes
  useEffect(() => {
    const activeBtn = pillRefs.current[activeCategory];
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeCategory]);

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
          ========================================================================= */}
      <section className="border-b border-border/70 bg-card/60 backdrop-blur-sm py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
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

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-headline uppercase font-bold tracking-wider bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Devpur Cricket Club • Est. 2013</span>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          PAGE HERO BANNER WITH RESPONSIVE GROUND BACKGROUND (2% OVERLAY)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-neutral-900 border-b border-border/80 text-white min-h-[250px] sm:min-h-[280px] md:min-h-[310px] lg:min-h-[340px] flex items-center">
        {/* Mobile Ground Background Image (Perspective View) */}
        <div className="absolute inset-0 block md:hidden pointer-events-none">
          <Image
            src="/aboutimgs/history-hero-mobile.png"
            alt="Devpur Cricket Club Ground Pitch - Mobile"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* 2% subtle dark tint so ground image stays bright and vibrant */}
          <div className="absolute inset-0 bg-black/[0.02]" />
        </div>

        {/* Desktop Ground Background Image (Aerial Panoramic Pitch View) */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <Image
            src="/aboutimgs/history-hero-desktop.jpg"
            alt="Devpur Cricket Club Ground Pitch - Desktop"
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          {/* 2% subtle dark tint so ground image stays bright and vibrant */}
          <div className="absolute inset-0 bg-black/[0.02]" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10 py-8 sm:py-12 md:py-14 w-full">
          <div className="max-w-2xl space-y-3 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-black/50 via-black/25 to-transparent">
            <span className="inline-block text-[#EA4326] font-headline text-xs sm:text-sm font-bold uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
              Club Heritage &amp; Archives
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              History of Devpur Cricket Club
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl font-body drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              More than a club, this is a brotherhood born on the red soil of
              Matunga Ground. Explore our authentic story, divided by chapters.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          MOBILE CATEGORY PILL STRIP (OPTIMIZED & SHRINK-PROOF)
          ========================================================================= */}
      <div className="lg:hidden sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border py-2.5 shadow-xs">
        <div className="relative w-full">
          {/* Subtle horizontal edge gradient cues */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

          {/* Horizontally scrollable category pills */}
          <div
            ref={mobileTabsRef}
            className="flex items-center gap-2 overflow-x-auto scroll-smooth px-4 sm:px-6 py-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
            role="tablist"
            aria-label="Story Chapters Navigation"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  ref={(el) => {
                    pillRefs.current[cat.id] = el;
                  }}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`shrink-0 min-w-max inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-headline font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-150 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#EA4326] text-white shadow-md shadow-[#EA4326]/20 font-extrabold ring-1 ring-[#EA4326]"
                      : "bg-card border border-border/80 text-foreground-soft hover:bg-muted/80 hover:text-foreground active:scale-95"
                  }`}
                >
                  <span
                    className={`text-[11px] font-mono font-bold shrink-0 ${
                      isActive ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {cat.index}.
                  </span>
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? "text-white" : "text-[#EA4326]"
                    }`}
                  />
                  <span className="shrink-0">{cat.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN 2-COLUMN LAYOUT (MIG-INSPIRED ARCHITECTURE)
          ========================================================================= */}
      <section className="flex-1 py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: DEDICATED CATEGORY CONTENT */}
            <main className="lg:col-span-8 min-w-0">
              {activeCategory === "overview" && <OverviewStorySection />}
              {activeCategory === "vision" && <VisionStorySection />}
              {activeCategory === "training" && <TrainingStorySection />}
              {activeCategory === "brotherhood" && <BrotherhoodStorySection />}
              {activeCategory === "honors" && <HonorsStorySection />}

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

            {/* RIGHT COLUMN: FIXED STICKY CATEGORIES SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
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
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-[background-color,color,box-shadow] duration-150 cursor-pointer group ${
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

function OverviewStorySection() {
  return (
    <article className="space-y-8">
      {/* Chapter Title */}
      <ChapterHeader
        chapter="Chapter 01"
        tag="Our Story & Foundation"
        title="DEVPUR CRICKET CLUB — OUR STORY"
        subtitle="A community that found its way back to the game."
      />

      {/* Main Ground Feature Photo */}
      <StoryPhotoBanner
        src="/aboutimgs/ground.png"
        alt="Devpur Cricket Club ground and training environment"
        badge="The Sacred Ground • Devpur Cricket Club"
        caption="Where our passion, friendships, and community unite on the 22 yards."
      />

      {/* Narrative Intro Note */}
      <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <div className="w-9 h-9 rounded-lg bg-[#EA4326]/10 text-[#EA4326] flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-headline font-bold text-[#EA4326] tracking-wider">
              The Origin Thought
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-foreground">
              It started with a thought.
            </h3>
          </div>
        </div>

        <div className="space-y-3.5 text-foreground/90 font-body text-base leading-relaxed">
          <p className="text-lg font-medium text-foreground">
            There was a time when cricket was a part of our lives.
          </p>
          <p>
            We played whenever we could.
            <br />
            We loved the game. We dreamed about it.
          </p>
          <p>
            But as education, work and responsibilities came in, cricket slowly became something we had to leave behind.
          </p>

          <div className="bg-muted/40 border-l-4 border-[#EA4326] p-4 rounded-r-lg my-2">
            <p className="text-xs font-headline uppercase font-bold text-muted-foreground tracking-wider mb-1">
              Then, years later, the thought came back:
            </p>
            <p className="font-headline text-xl sm:text-2xl font-extrabold text-[#EA4326] italic">
              &ldquo;Why did we ever stop playing?&rdquo;
            </p>
          </div>

          <p>
            Many of us were from Devpur and neighbouring villages. We had the passion, the memories and the willingness to start again. What we were missing was simply a place to come together.
          </p>
          <p className="font-headline text-lg font-bold text-foreground uppercase tracking-wide">
            So we decided to create one.
          </p>
        </div>
      </div>

      {/* Part 02: From a few players to a club */}
      <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-headline font-bold text-blue-500 tracking-wider">
              The Foundation • Est. 2013
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-foreground">
              From a few players to a club.
            </h3>
          </div>
        </div>

        <div className="space-y-3.5 text-foreground/90 font-body text-base leading-relaxed">
          <p>
            What started with a simple desire to play cricket again slowly became a community.
          </p>
          <p>
            We started bringing people together through the game — players from Devpur and surrounding villages, friends who had known each other for years, and people who simply wanted to be back on the field.
          </p>
          <p className="font-semibold text-foreground">
            That is how Devpur Cricket Club took shape.
          </p>

          <div className="bg-gradient-to-r from-[#EA4326]/10 via-[#EA4326]/5 to-transparent border border-[#EA4326]/20 rounded-xl p-5 my-2">
            <span className="block text-xs uppercase font-headline font-bold text-muted-foreground tracking-wider mb-1.5">
              Founded in 2013, the club grew around one simple idea:
            </span>
            <p className="font-headline text-xl sm:text-2xl font-extrabold uppercase text-[#EA4326] tracking-wider">
              Come together. Play together. Grow together.
            </p>
          </div>

          <p className="font-medium text-foreground pt-1">
            Today, DCC has a 50+ strong member/player community and continues to represent Devpur Gaam with pride.
          </p>
        </div>
      </div>

      {/* Part 03: Cricket became our connection */}
      <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-headline font-bold text-emerald-500 tracking-wider">
              Villages &amp; Generations
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-foreground">
              Cricket became our connection.
            </h3>
          </div>
        </div>

        <div className="space-y-3.5 text-foreground/90 font-body text-base leading-relaxed">
          <p className="text-lg font-medium text-foreground">
            For us, cricket was never only about the score.
          </p>
          <p>
            It became a way to connect villages, friendships and generations.
          </p>
          <p>
            Through community cricket, people who may have never met found a common ground.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-muted/40 border border-border/60">
              <CheckCircle2 className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
              <span className="text-sm font-medium text-foreground">A match brought players together.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-muted/40 border border-border/60">
              <CheckCircle2 className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
              <span className="text-sm font-medium text-foreground">A practice session built friendships.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-muted/40 border border-border/60">
              <CheckCircle2 className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
              <span className="text-sm font-medium text-foreground">A tournament created new connections.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-muted/40 border border-border/60">
              <CheckCircle2 className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
              <span className="text-sm font-medium text-foreground">And every season left behind another memory.</span>
            </div>
          </div>

          <p className="pt-1">
            From KVO cricket and Kachi community competitions to matches played across villages and communities, cricket became our common language.
          </p>
        </div>
      </div>

      {/* Part 04: We came back to the game — together */}
      <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-headline font-bold text-amber-500 tracking-wider">
              Discipline &amp; Routine • Matunga Ground
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-foreground">
              We came back to the game — together.
            </h3>
          </div>
        </div>

        <div className="space-y-3.5 text-foreground/90 font-body text-base leading-relaxed">
          <p>
            Every season, we return to the ground with the same excitement.
          </p>

          <div className="flex flex-wrap gap-2 py-1">
            {[
              "Months of practice",
              "Early mornings",
              "Net sessions",
              "Fitness",
              "Fielding drills",
              "Weekend practice matches",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-muted border border-border text-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          <p>
            We work with coaches, prepare ourselves and then step onto the field representing our club and our Gaam.
          </p>

          <div className="p-4 rounded-xl bg-muted/60 border border-border text-sm space-y-1">
            <strong className="text-foreground block font-headline uppercase tracking-wide">
              Seasonal Practice Routine
            </strong>
            <p className="text-muted-foreground leading-relaxed">
              DCC conducts approximately 5–6 months of structured seasonal training, including indoor and outdoor net practice at Matunga Ground three days a week.
            </p>
          </div>

          <p className="font-medium text-foreground pt-1">
            But the real reward is not only improvement in cricket.
          </p>

          <ul className="space-y-2 text-sm text-foreground/90 pl-1">
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#EA4326] shrink-0" />
              <span>It is the discipline.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#EA4326] shrink-0" />
              <span>The routine.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#EA4326] shrink-0" />
              <span>The friendships.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#EA4326] shrink-0" />
              <span>The conversations after practice.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#EA4326] shrink-0" />
              <span>The feeling of belonging somewhere.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Part 05: Then came the bigger dream */}
      <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-headline font-bold text-purple-500 tracking-wider">
              Aspiration &amp; Growth
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-foreground">
              Then came the bigger dream.
            </h3>
          </div>
        </div>

        <div className="space-y-3.5 text-foreground/90 font-body text-base leading-relaxed">
          <p>
            Once we started playing regularly, another thought followed:
          </p>

          <div className="space-y-2 bg-muted/30 border border-border/80 rounded-xl p-4 sm:p-5 italic text-foreground text-sm sm:text-base">
            <p>&ldquo;What if we could take this even further?&rdquo;</p>
            <p>&ldquo;What if someone who once thought cricket had passed them by could find another opportunity?&rdquo;</p>
            <p>&ldquo;What if a player from our community could move from a local ground to a bigger stage?&rdquo;</p>
            <p className="font-semibold text-[#EA4326] not-italic">
              &ldquo;What if the club could become a bridge between where we started and where we wanted to go?&rdquo;
            </p>
          </div>

          <p>
            That is why our journey is not limited to playing matches.
          </p>
          <p>
            We want to create an environment where members can play, improve, compete and discover what they are capable of.
          </p>
          <p>
            And when one of our members gets an opportunity to play at a higher level, we see it not only as an individual achievement, but as a moment of pride for the entire community.
          </p>
        </div>
      </div>

      {/* Part 06: Our journey has kept growing */}
      <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <div className="w-9 h-9 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-headline font-bold text-orange-500 tracking-wider">
              Milestones &amp; Success
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-foreground">
              Our journey has kept growing.
            </h3>
          </div>
        </div>

        <div className="space-y-3.5 text-foreground/90 font-body text-base leading-relaxed">
          <p>
            From Devpur to the wider KVO cricket community, our journey continues through matches, competitions, relationships and shared experiences.
          </p>
          <p>
            Our club has already experienced competitive success, including two runners-up finishes, while our stated goal is to continue improving our KVO standing and compete for championship success.
          </p>
          <div className="border-l-4 border-amber-500 pl-4 py-3 bg-amber-500/10 rounded-r-lg space-y-1">
            <p className="font-headline text-base sm:text-lg font-bold uppercase text-foreground">
              But our biggest achievement is something you cannot measure on a scorecard.
            </p>
            <p className="text-base font-semibold text-[#EA4326]">
              It is the number of people we have brought together.
            </p>
          </div>
        </div>
      </div>

      {/* Part 07: Because the game never really ends */}
      <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <div className="w-9 h-9 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-headline font-bold text-rose-500 tracking-wider">
              Beyond The Boundary
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-foreground">
              Because the game never really ends.
            </h3>
          </div>
        </div>

        <div className="space-y-3.5 text-foreground/90 font-body text-base leading-relaxed">
          <p>The match may finish.</p>
          <p>The season may finish.</p>
          <p className="font-semibold text-foreground text-lg">But the connection stays.</p>
          <p>
            The same people who meet on the cricket ground also meet as friends, as families and as a community. The friendships created through cricket can become conversations, collaborations and opportunities beyond the boundary.
          </p>
          <p className="font-medium text-foreground">
            That is the bigger purpose behind DCC.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2 text-center">
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <span className="block text-xs uppercase font-headline font-bold text-muted-foreground tracking-wider">
                Medium
              </span>
              <p className="font-headline text-base font-extrabold uppercase text-[#EA4326] mt-1">
                Cricket is our medium.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <span className="block text-xs uppercase font-headline font-bold text-muted-foreground tracking-wider">
                Strength
              </span>
              <p className="font-headline text-base font-extrabold uppercase text-foreground mt-1">
                Community is our strength.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <span className="block text-xs uppercase font-headline font-bold text-muted-foreground tracking-wider">
                Purpose
              </span>
              <p className="font-headline text-base font-extrabold uppercase text-[#EA4326] mt-1">
                Connection is our purpose.
              </p>
            </div>
          </div>

          <p>
            And as we move forward, we want to open the door to even more possibilities — more opportunities for our members to stay active, connect, grow, celebrate and build something together.
          </p>
        </div>
      </div>

      {/* Part 08: Our Mission */}
      <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <div className="w-9 h-9 rounded-lg bg-[#EA4326]/10 text-[#EA4326] flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-headline font-bold text-[#EA4326] tracking-wider">
              Core Purpose
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-foreground">
              Our Mission
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-foreground/90 font-body text-base leading-relaxed">
          <div className="text-center py-4 px-6 rounded-xl bg-gradient-to-r from-[#EA4326] to-[#D9381E] text-white shadow-md">
            <span className="block text-xs uppercase tracking-widest font-headline font-bold opacity-80 mb-1">
              The DCC Creed
            </span>
            <p className="font-headline text-2xl sm:text-3xl font-extrabold uppercase tracking-wider">
              PLAY. TRAIN. COMPETE. CONNECT. GROW.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            <p>We started because we wanted to play cricket again.</p>
            <p>We continued because we found a community.</p>
            <p>
              And we move forward because we believe that when people come together around something they love, something bigger than the game can grow.
            </p>
          </div>

          <div className="pt-3 border-t border-border text-foreground font-headline font-bold uppercase space-y-1">
            <p className="text-xl text-[#EA4326]">This is Devpur Cricket Club.</p>
            <p className="text-sm sm:text-base text-muted-foreground font-body font-normal not-italic">
              Not just a team. Not just a cricket club. A community that found its way back to the game.
            </p>
          </div>
        </div>
      </div>

      {/* Part 09: Powerful Closing Line */}
      <blockquote className="border-l-4 border-[#EA4326] pl-6 py-5 bg-muted/40 rounded-r-xl space-y-2 shadow-sm">
        <p className="font-headline text-xl sm:text-2xl font-bold uppercase text-foreground leading-snug">
          &ldquo;Some of us missed the cricket we could not play when we were younger. So we built a place where we could play it together.&rdquo;
        </p>
        <span className="block text-xs uppercase font-headline font-bold tracking-wider text-[#EA4326]">
          — Devpur Cricket Club
        </span>
      </blockquote>
    </article>
  );
}

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
      <ChapterHeader
        chapter="Chapter 02"
        tag="Core Values"
        title="Our Vision & Philosophy"
        subtitle="The values and standards that make DCC more than just a team."
      />

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

function TrainingStorySection() {
  return (
    <article className="space-y-6">
      <ChapterHeader
        chapter="Chapter 03"
        tag="The Ground"
        title="Matunga Ground & Training"
        subtitle="The sacred ground where our skills are sharpened before the break of dawn."
      />

      <StoryPhotoBanner
        src="/images/ground_playing.png"
        alt="Matunga Gymkhana Cricket Ground playing action"
        badge="Matunga Gymkhana Cricket Ground"
        caption="Dawn fitness sessions and turf net practices that shape our match readiness."
      />

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

function BrotherhoodStorySection() {
  return (
    <article className="space-y-6">
      <ChapterHeader
        chapter="Chapter 04"
        tag="Camaraderie"
        title="Brotherhood & Club Life"
        subtitle="The laughter, post-match chai, train journeys, and family celebrations."
      />

      {/* 4-Photo Rich Memories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/80 shadow-sm">
          <Image
            src="/images/buddies.png"
            alt="Devpur Cricket Club buddies and team members"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-headline font-bold uppercase tracking-wider">
            Brothers On &amp; Off The Field
          </span>
        </div>

        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/80 shadow-sm">
          <Image
            src="/images/train_travel.png"
            alt="Local train travel with cricket kitbags"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-headline font-bold uppercase tracking-wider">
            6:00 AM Mumbai Local Journeys
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-headline font-bold uppercase tracking-wider">
            Celebrating Life Milestones &amp; Weddings
          </span>
        </div>

        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/80 shadow-sm">
          <Image
            src="/images/memories_with_players.png"
            alt="Post-match tea gathering and bonding"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-headline font-bold uppercase tracking-wider">
            Post-Match Reflections &amp; Team Bonds
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
          We travel together across Mumbai in local trains carrying heavy kitbags,
          celebrate each other&apos;s weddings, festivals, and career victories. When one
          player goes through a difficult time, the whole club stands behind them.
        </p>
      </div>

      <div className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h3 className="font-headline text-lg font-bold uppercase text-foreground">
          What Makes Our Brotherhood Special:
        </h3>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
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
              <strong>Local &amp; Outstation Journeys:</strong> Train travels with bats, kit
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

interface TrophySlide {
  id: string;
  image: string;
  width: number;
  height: number;
  badge: string;
  title: string;
  category: string;
  description: string;
  detail: string;
}

const TROPHY_SLIDES: TrophySlide[] = [
  {
    id: "trophy-1",
    image: "/images/winning_time_with_group.png",
    width: 1280,
    height: 960,
    badge: "Tournament Champions • Matunga Gymkhana",
    title: "Championship Trophy on the Podium",
    category: "Team Silverware",
    description:
      "The entire DCC squad celebrating our major tournament victory in front of the historic Matunga Cricket Pavilion.",
    detail:
      "Every player, mentor, and supporter from Devpur Gaam united under the floodlights to lift the championship cup.",
  },
  {
    id: "trophy-2",
    image: "/images/winning.png",
    width: 960,
    height: 1280,
    badge: "Championship Victory Moment",
    title: "Lifting the Cup to the Sky",
    category: "Pure Silverware Emotion",
    description:
      "Uncontainable joy as our captain and team lift the trophy high into the Mumbai night sky.",
    detail:
      "A moment that rewarded hundreds of hours of sweat and dawn training at the nets.",
  },
  {
    id: "trophy-3",
    image: "/images/achivement_winning.png",
    width: 768,
    height: 1024,
    badge: "Medals & Team Podium",
    title: "Podium Finish & Gold Medals",
    category: "Podium Honors",
    description:
      "Proud smiles as every playing member is honored on the tournament stage with championship medals.",
    detail:
      "Proof that teamwork, mutual trust, and relentless practice always bring results on the 22 yards.",
  },
  {
    id: "trophy-4",
    image: "/images/achivement_winning2.png",
    width: 720,
    height: 1280,
    badge: "Tournament Finals",
    title: "Finalist Shield & Silverware",
    category: "League Excellence",
    description:
      "DCC squad standing strong on the podium with the runner-up shield in a hard-fought premier division final.",
    detail:
      "Competing with pride against Mumbai's top community cricket clubs till the very last over.",
  },
  {
    id: "trophy-5",
    image: "/images/orange_cap_player.png",
    width: 1200,
    height: 1600,
    badge: "Leading Run-Scorer Award",
    title: "The Prestigious Orange Cap",
    category: "Individual Batting Honor",
    description:
      "Awarded to DCC's leading batsman for fearless match-winning fifties and top tournament run tally.",
    detail:
      "Anchoring tough chases under pressure and giving DCC explosive starts at the top of the order.",
  },
  {
    id: "trophy-6",
    image: "/images/purpal_cap_player.png",
    width: 1200,
    height: 1600,
    badge: "Leading Wicket-Taker Award",
    title: "The Prestigious Purple Cap",
    category: "Individual Bowling Honor",
    description:
      "Awarded to DCC's strike fast bowler for lethal inswinging yorkers and tournament-best wickets.",
    detail:
      "Consistently delivering breakthroughs in powerplays and bowling tight death overs to win crucial matches.",
  },
];

function TrophyCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? TROPHY_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === TROPHY_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = TROPHY_SLIDES[currentIdx];

  return (
    <div className="space-y-4">
      {/* Main Image Slider Frame: Fits exact image dimensions with zero extra side borders or black panels */}
      <div className="relative w-full flex items-center justify-center">
        <div className="relative inline-block max-w-full rounded-2xl overflow-hidden shadow-2xl select-none group">
          {/* Natural Image Rendering — Width hugs the image, faces 100% visible */}
          <Image
            key={activeSlide.id}
            src={activeSlide.image}
            alt={activeSlide.title}
            width={activeSlide.width}
            height={activeSlide.height}
            priority
            className="max-h-[460px] sm:max-h-[520px] md:max-h-[580px] w-auto h-auto max-w-full rounded-2xl object-contain block mx-auto"
          />

          {/* Slide Counter & Category Pill (Directly on top corners of image) */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
            <span className="px-2.5 py-1 rounded-full text-xs font-headline font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#EA4326] border border-white/10 shadow-sm">
              {activeSlide.category}
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-black/75 backdrop-blur-md text-white/90 border border-white/10 shadow-sm">
              {String(currentIdx + 1).padStart(2, "0")} / {String(TROPHY_SLIDES.length).padStart(2, "0")}
            </span>
          </div>

          {/* LEFT SLIDER BUTTON: CENTER PLACED IN Y-DIRECTION on image edge */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Achievement"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-[#EA4326] text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-[transform,background-color] duration-150 hover:scale-105 active:scale-95 z-30 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* RIGHT SLIDER BUTTON: CENTER PLACED IN Y-DIRECTION on image edge */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Achievement"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-[#EA4326] text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-[transform,background-color] duration-150 hover:scale-105 active:scale-95 z-30 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Bottom Title Pill directly on image bottom */}
          <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none flex justify-center">
            <span className="px-3 py-1 rounded-lg text-xs sm:text-sm font-headline font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/15 shadow-md truncate max-w-full">
              {activeSlide.badge}
            </span>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 py-1">
        {TROPHY_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-[width,background-color] duration-200 cursor-pointer rounded-full ${
              currentIdx === idx
                ? "w-8 h-2.5 bg-[#EA4326]"
                : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>

      {/* Selected Trophy Story Card (Simple & Clear Text) */}
      <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm space-y-3">
        <div className="flex items-center justify-between gap-3 border-b border-border pb-2.5">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#EA4326]" />
            <span className="text-xs font-headline font-bold uppercase tracking-wider text-[#EA4326]">
              {activeSlide.category}
            </span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            Trophy {currentIdx + 1} of {TROPHY_SLIDES.length}
          </span>
        </div>

        <h4 className="font-headline text-xl font-bold uppercase text-foreground">
          {activeSlide.title}
        </h4>

        <p className="text-foreground/90 font-body text-base leading-relaxed">
          {activeSlide.description}
        </p>

        <p className="text-sm text-muted-foreground font-body leading-relaxed bg-muted/40 p-3 rounded-lg border border-border/50">
          {activeSlide.detail}
        </p>
      </div>

      {/* Thumbnail Strip: Natural preview cards without dark frame */}
      <div className="grid grid-cols-6 gap-2 pt-1">
        {TROPHY_SLIDES.map((slide, idx) => {
          const isSelected = currentIdx === idx;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentIdx(idx)}
              className={`relative aspect-[3/4] rounded-lg overflow-hidden border-2 bg-muted/30 transition-[transform,opacity,border-color] duration-150 cursor-pointer ${
                isSelected
                  ? "border-[#EA4326] scale-[1.03] shadow-md ring-2 ring-[#EA4326]/30"
                  : "border-border/60 opacity-70 hover:opacity-100 hover:border-foreground/40"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-top"
                sizes="120px"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface MilestoneSlide {
  year: string;
  phase: string;
  title: string;
  desc: string;
  highlights: string[];
  img: string;
  imgCaption: string;
}

const MILESTONES_DATA: MilestoneSlide[] = [
  {
    year: "2013",
    phase: "Phase 01",
    title: "The First Step: Club Foundation",
    desc: "Devpur Cricket Club was formally founded. The first 15 players began weekly net practice at local Mumbai grounds, reclaiming the passion paused during academic years.",
    highlights: [
      "Initial squad of 15 dedicated village players from Devpur Gaam.",
      "First structured morning net sessions on Mumbai grounds.",
      "Establishment of the official club name and white jersey identity.",
    ],
    img: "/images/memories_2018.png",
    imgCaption: "2013 • Founding members and core village organizers coming together.",
  },
  {
    year: "2015",
    phase: "Phase 02",
    title: "Tournament Debut in KVO League",
    desc: "DCC officially registered for competitive leather-ball community tournaments. We played our first official fixture against established community clubs.",
    highlights: [
      "Official entry into the prestigious Kutchhi Visa Oswal (KVO) cricket circuit.",
      "Transition from tennis ball cricket to professional leather-ball matches.",
      "Adoption of proper protective equipment, team kits, and weekend fixtures.",
    ],
    img: "/images/team_members.png",
    imgCaption: "2015 • DCC squad lined up in official match kits for early community league games.",
  },
  {
    year: "2018",
    phase: "Phase 03",
    title: "The First Championship Cup",
    desc: "After five years of relentless hard work, DCC won its first major trophy. The celebration brought the entire village and community together.",
    highlights: [
      "Maiden tournament trophy secured with outstanding all-round team displays.",
      "Devpur Gaam elders and families celebrated our historic silverware victory.",
      "Recognition of DCC as a formidable contender in Mumbai community cricket.",
    ],
    img: "/images/memories.png",
    imgCaption: "2018 • Celebrating five years of relentless grit culminating in the first historic silverware victory.",
  },
  {
    year: "2021",
    phase: "Phase 04",
    title: "Squad Expansion to 50+ Players",
    desc: "The club grew from one squad to multiple teams. Junior talent from Devpur Gaam was inducted and mentored by seniors with structured training.",
    highlights: [
      "Roster expanded beyond 50 active playing members across age brackets.",
      "Junior development program instituted to mentor teenagers and emerging talent.",
      "Structured 5–6 months seasonal camp and 3-days-a-week practice at Matunga Ground.",
    ],
    img: "/images/team_group.png",
    imgCaption: "2021 • Expanded roster united on the ground representing the growing DCC community.",
  },
  {
    year: "2024–Present",
    phase: "Phase 05",
    title: "Dominance & Premier Consistency",
    desc: "Regular finalists at Matunga Gymkhana with Orange Cap and Purple Cap honors. DCC stands recognized as a premier club in community cricket.",
    highlights: [
      "Back-to-back runners-up finishes in top-tier KVO championships.",
      "Prestigious individual league awards: Orange Cap (Runs) & Purple Cap (Wickets).",
      "Thriving community hub connecting generations through cricket and brotherhood.",
    ],
    img: "/images/ground_players_group.png",
    imgCaption: "2024–Present • Premier division finalists celebrating consistent dominance on the pitch.",
  },
];

function MilestoneTimelineSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevMilestone = () => {
    setCurrentIdx((prev) => (prev === 0 ? MILESTONES_DATA.length - 1 : prev - 1));
  };

  const nextMilestone = () => {
    setCurrentIdx((prev) => (prev === MILESTONES_DATA.length - 1 ? 0 : prev + 1));
  };

  const active = MILESTONES_DATA[currentIdx];

  return (
    <div className="space-y-5">
      {/* Horizontal Interactive Year Stepper */}
      <div className="bg-card border border-border rounded-xl p-2 sm:p-2.5 shadow-sm">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
          {MILESTONES_DATA.map((m, idx) => {
            const isActive = currentIdx === idx;
            return (
              <button
                key={m.year}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                className={`flex-1 min-w-[95px] sm:min-w-[115px] py-2 sm:py-2.5 px-2.5 rounded-lg text-center transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#EA4326] text-white shadow-md font-bold"
                    : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="block text-[11px] font-mono uppercase tracking-wider opacity-85">
                  {m.phase}
                </span>
                <span className="font-headline text-sm sm:text-base font-bold block truncate">
                  {m.year}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Milestone Slide Card */}
      <div className="bg-card border border-border rounded-2xl p-5 sm:p-7 shadow-sm space-y-5">
        {/* Card Header: Year, Phase & Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="font-headline text-3xl sm:text-4xl font-extrabold text-[#EA4326] tracking-tight">
                {active.year}
              </span>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                {active.phase}
              </span>
            </div>
            <span className="text-xs uppercase font-headline font-bold text-muted-foreground tracking-wider block">
              Step {currentIdx + 1} of {MILESTONES_DATA.length} in DCC Journey
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevMilestone}
              aria-label="Previous Milestone"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted hover:bg-[#EA4326] hover:text-white text-foreground flex items-center justify-center border border-border transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextMilestone}
              aria-label="Next Milestone"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted hover:bg-[#EA4326] hover:text-white text-foreground flex items-center justify-center border border-border transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Milestone Title & Narrative */}
        <div className="space-y-2">
          <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-foreground">
            {active.title}
          </h3>
          <p className="text-foreground/90 font-body text-base leading-relaxed">
            {active.desc}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="bg-muted/40 border border-border/80 rounded-xl p-4 sm:p-5 space-y-2.5">
          <span className="block text-xs uppercase font-headline font-bold text-[#EA4326] tracking-wider">
            Era Highlights &amp; Accomplishments
          </span>
          <ul className="space-y-2 text-sm text-foreground/90">
            {active.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EA4326] mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Milestone Photo Frame */}
        <div className="relative w-full rounded-xl overflow-hidden border border-border/80 shadow-md group">
          <div className="relative aspect-[16/9] sm:aspect-[16/8] w-full bg-black/20">
            <Image
              key={active.img}
              src={active.img}
              alt={active.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 750px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <button
              type="button"
              onClick={prevMilestone}
              aria-label="Previous Milestone"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#EA4326] text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              type="button"
              onClick={nextMilestone}
              aria-label="Next Milestone"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#EA4326] text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm font-medium">
              <span className="font-headline font-bold uppercase tracking-wider text-[#EA4326] mr-2">
                {active.year} Archive
              </span>
              <span className="text-white/90">{active.imgCaption}</span>
            </div>
          </div>
        </div>

        {/* Slide Dots and Footer */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            {MILESTONES_DATA.map((m, idx) => (
              <button
                key={m.year}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Jump to ${m.year}`}
                className={`transition-all duration-200 cursor-pointer rounded-full ${
                  currentIdx === idx
                    ? "w-8 h-2.5 bg-[#EA4326]"
                    : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>

          <span className="text-xs font-mono font-semibold text-muted-foreground">
            {String(currentIdx + 1).padStart(2, "0")} / {String(MILESTONES_DATA.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

function HonorsStorySection() {
  const [activeTab, setActiveTab] = useState<"trophies" | "milestones">("trophies");

  return (
    <article className="space-y-6">
      <ChapterHeader
        chapter="Chapter 05"
        tag="Silverware & Milestones"
        title="Trophies, Honors & Historical Milestones"
        subtitle="Celebrating our championship silverware, individual league accolades, and the historic road from 2013 to today."
      />

      {/* Interactive Tabs Switcher */}
      <div className="flex items-center gap-2 p-1.5 rounded-xl bg-card border border-border shadow-sm max-w-lg mx-auto">
        <button
          type="button"
          onClick={() => setActiveTab("trophies")}
          className={`flex-1 py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === "trophies"
              ? "bg-[#EA4326] text-white shadow-md"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Trophies &amp; Awards</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("milestones")}
          className={`flex-1 py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === "milestones"
              ? "bg-[#EA4326] text-white shadow-md"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Journey Milestones</span>
        </button>
      </div>

      {activeTab === "trophies" ? (
        <div className="space-y-6">
          {/* Interactive Trophy & Achievement Carousel */}
          <TrophyCarousel />

          <div className="space-y-4 text-foreground/90 font-body text-base leading-relaxed pt-2">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>
      ) : (
        <div className="space-y-6">
          <MilestoneTimelineSlider />

          <div className="bg-card border border-border rounded-xl p-5 space-y-2">
            <span className="text-xs font-headline font-bold uppercase tracking-wider text-[#EA4326]">
              Milestone Legacy
            </span>
            <p className="text-sm text-foreground/90 font-body leading-relaxed">
              Every phase in our timeline represents years of patience, morning sweat at Matunga Ground,
              and the collective dreams of Devpur Gaam players stepping onto bigger platforms.
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
