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
  ChevronLeft,
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
          PAGE HERO BANNER
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
          ========================================================================= */}
      <section className="flex-1 py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: DEDICATED CATEGORY CONTENT */}
            <main className="lg:col-span-8 min-w-0">
              {activeCategory === "overview" && <OverviewStorySection />}
              {activeCategory === "timeline" && <TimelineStorySection />}
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
    <article className="space-y-6">
      <ChapterHeader
        chapter="Chapter 01"
        tag="The Beginning"
        title="Club Inception & Genesis"
        subtitle="How a handful of passionate cricket lovers from Devpur Gaam founded DCC in 2013."
      />

      <StoryPhotoBanner
        src="/images/5year_age_memories.png"
        alt="Early days memories of Devpur Cricket Club members"
        badge="Archival Record • 2013 Inception"
        caption="The foundation members of Devpur Cricket Club during our first Sunday gathering."
      />

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

      <blockquote className="border-l-4 border-[#EA4326] pl-4 py-2 italic text-muted-foreground bg-muted/30 rounded-r-lg">
        &ldquo;We did not start with money or fancy equipment. We started with
        passion, honesty, and an unbreakable bond between brothers.&rdquo;
      </blockquote>
    </article>
  );
}

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
      <ChapterHeader
        chapter="Chapter 02"
        tag="Milestones"
        title="Timeline & Historical Milestones"
        subtitle="A step-by-step journey of how DCC rose through hard work and unity."
      />

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
        chapter="Chapter 03"
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
        chapter="Chapter 04"
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
        chapter="Chapter 05"
        tag="Camaraderie"
        title="Brotherhood & Club Life"
        subtitle="The laughter, post-match chai, train journeys, and family celebrations."
      />

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

interface TrophySlide {
  id: string;
  image: string;
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
      {/* Main Image Slider Frame with Y-Center Left/Right Buttons & Zero Face Cropping */}
      <div className="relative h-[440px] sm:h-[500px] md:h-[540px] w-full rounded-2xl overflow-hidden border border-border/80 shadow-xl bg-[#0A0D14] select-none group">
        {/* Ambient Blurred Background to create a rich stadium floodlight atmosphere */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            key={`bg-${activeSlide.id}`}
            src={activeSlide.image}
            alt=""
            fill
            className="object-cover blur-2xl scale-125 opacity-35"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
        </div>

        {/* Uncropped Foreground Image: Full Head, Face, Trophy & Body 100% visible */}
        <div className="relative w-full h-full p-2.5 sm:p-4 flex items-center justify-center z-10 pointer-events-none">
          <Image
            key={activeSlide.id}
            src={activeSlide.image}
            alt={activeSlide.title}
            fill
            priority
            className="object-contain object-center drop-shadow-2xl"
            sizes="(max-width: 1024px) 100vw, 780px"
          />
        </div>

        {/* Slide Counter & Category Pill (Top Corners) */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-headline font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#EA4326] border border-white/10 shadow-sm">
            {activeSlide.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-black/80 backdrop-blur-md text-white/90 border border-white/10 shadow-sm">
            {String(currentIdx + 1).padStart(2, "0")} / {String(TROPHY_SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        {/* LEFT SLIDER BUTTON: CENTER PLACED IN Y-DIRECTION */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Achievement"
          className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/75 hover:bg-[#EA4326] text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl transition-[transform,background-color] duration-150 hover:scale-105 active:scale-95 z-30 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* RIGHT SLIDER BUTTON: CENTER PLACED IN Y-DIRECTION */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Achievement"
          className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/75 hover:bg-[#EA4326] text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl transition-[transform,background-color] duration-150 hover:scale-105 active:scale-95 z-30 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Bottom Unobtrusive Title Tag inside Frame */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 pointer-events-none flex justify-center">
          <span className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-headline font-bold uppercase tracking-wider bg-black/85 backdrop-blur-md text-white border border-white/15 shadow-md truncate max-w-full">
            {activeSlide.badge}
          </span>
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

      {/* Thumbnail Strip: Portrait Aspect Ratio with object-contain so all faces remain fully visible */}
      <div className="grid grid-cols-6 gap-2 pt-1">
        {TROPHY_SLIDES.map((slide, idx) => {
          const isSelected = currentIdx === idx;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentIdx(idx)}
              className={`relative aspect-[3/4] rounded-lg overflow-hidden border-2 bg-black/80 p-1 transition-[transform,opacity,border-color] duration-150 cursor-pointer ${
                isSelected
                  ? "border-[#EA4326] scale-[1.03] shadow-md ring-2 ring-[#EA4326]/30"
                  : "border-border/60 opacity-60 hover:opacity-100 hover:border-foreground/40"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain p-0.5"
                sizes="120px"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function HonorsStorySection() {
  return (
    <article className="space-y-6">
      <ChapterHeader
        chapter="Chapter 06"
        tag="Silverware"
        title="Trophies & Honors"
        subtitle="Celebrating the hard-earned victories that brought pride to Devpur Gaam."
      />

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
    </article>
  );
}
