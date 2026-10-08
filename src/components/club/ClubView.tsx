"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../common/Container";
import {
  ArrowRight,
  Trophy,
  Play,
  MapPin,
  Calendar,
  Shield,
  Target,
  Award,
} from "lucide-react";

export function ClubView() {
  const values = [
    {
      num: "01",
      title: "Discipline Before Glory",
      desc: "Great match performances are earned in early morning fitness sessions and grueling turf net repetitions at Matunga Ground, not accidental luck.",
    },
    {
      num: "02",
      title: "Club Brotherhood",
      desc: "Win or lose, Devpur CC stands as a tight-knit sporting fraternity where senior mentors groom young prospects with respect and shared identity.",
    },
    {
      num: "03",
      title: "Relentless Competitiveness",
      desc: "We compete hard against top clubs across the KVO community cricket ecosystem while upholding uncompromised integrity and the spirit of cricket.",
    },
  ];

  const facilities = [
    {
      num: "01",
      name: "Matunga Ground Turf Practice Nets",
      desc: "Dedicated 3-days-a-week net practice (Monday, Wednesday, Friday) with clay and turf wickets.",
    },
    {
      num: "02",
      name: "Professional Coaching Pedigree",
      desc: "Led by Head Coach Mr. Aditya Koli, Kanga B Division player, providing structured skill development and match drills.",
    },
    {
      num: "03",
      name: "Complete Club Equipment & Match Kits",
      desc: "Quality leather balls, safety gear, and official match jerseys provided for 25+ tournament fixtures per season.",
    },
  ];

  const committeeMembers = [
    "Harsh Gala",
    "Sandesh Gala",
    "Mukul Furiya",
    "Mehul Gala",
    "Sanyam Gala",
    "Deep Haria",
    "Yash Haria",
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          CLUB PANORAMIC HERO: STADIUM WITH BATSMAN, CREST & FLOATING STAT DOCK
          1:1 matching user design with DCC official crest & brand palette
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F6F8FA] min-h-[500px] sm:min-h-[540px] lg:min-h-[560px] xl:min-h-[600px] flex items-center pt-4 pb-16 lg:py-10 mb-16">
        {/* Master Panoramic Background Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/heros/club/club_heroimg.png"
            alt="Devpur Cricket Club Stadium Atmosphere"
            fill
            priority
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle daylight fade for text legibility on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:via-white/40 lg:to-transparent pointer-events-none" />
        </div>

        {/* Upper Right Floating Calligraphy: "Play Train Grow Together" */}
        <div className="hidden lg:block absolute right-[3%] xl:right-[4%] top-[8%] xl:top-[10%] z-10 pointer-events-none -rotate-6 animate-fade-in">
          <div className="relative w-22 h-32 xl:w-24 xl:h-36">
            <Image
              src="/heros/club/play-train-grow-together.png"
              alt="Play Train Grow Together"
              fill
              className="object-contain drop-shadow-sm"
              sizes="110px"
            />
          </div>
        </div>

        {/* Bottom Right Floating Calligraphy: "One Club One Family" */}
        <div className="hidden lg:block absolute right-[2%] xl:right-[2.5%] bottom-[3%] z-10 pointer-events-none animate-fade-in">
          <div className="relative w-28 h-18 xl:w-32 xl:h-20">
            <Image
              src="/heros/club/one-club-one-family.png"
              alt="One Club One Family"
              fill
              className="object-contain"
              sizes="130px"
            />
          </div>
        </div>

        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            {/* -------------------------------------------------------------------
                LEFT COLUMN: BADGE, HEADLINE, SUBTITLE, BUTTONS & EST META
                ------------------------------------------------------------------- */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-3.5 text-left">
              {/* Top Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18202F] text-white font-mono text-[11px] font-bold uppercase tracking-wider shadow-sm">
                <Trophy className="w-3.5 h-3.5 text-[#EA6E18] shrink-0" />
                <span>COMMUNITY CLUB // EST. 2013</span>
                <span className="text-stone-400">•</span>
                <span>DEVPUR GAAM</span>
              </div>

              {/* Headline with Brand Orange Brush Style */}
              <div className="space-y-0.5">
                <h1 className="font-headline tracking-tight uppercase leading-[0.95]">
                  <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-black italic text-[#EA6E18] drop-shadow-xs">
                    MORE THAN CRICKET.
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-black italic text-[#0F1E36]">
                    A CLUB. A COMMUNITY.
                  </span>
                </h1>
                {/* Dynamic painterly brush stroke underline sweeping under 'A CLUB. A COMMUNITY.' */}
                <div className="w-72 sm:w-88 h-3.5 sm:h-4 -mt-1 sm:-mt-1.5 ml-10 sm:ml-16">
                  <svg viewBox="0 0 340 18" fill="none" className="w-full h-full" preserveAspectRatio="none">
                    <path
                      d="M 2 12 C 70 18, 200 16, 336 3 C 220 13, 120 14, 18 12 Z"
                      fill="url(#brush-swoosh)"
                    />
                    <defs>
                      <linearGradient id="brush-swoosh" x1="0" y1="0" x2="340" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E66212" />
                        <stop offset="0.5" stopColor="#EA6E18" />
                        <stop offset="1" stopColor="#F89928" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="font-headline text-xs sm:text-sm font-black text-stone-600 tracking-[0.25em] uppercase pt-2">
                  DEVOTED TO BROTHERHOOD.
                </p>
              </div>

              {/* Subtitle Paragraph */}
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-lg font-medium">
                Devpur Cricket Club was incepted in 2013 with a singular purpose: to unite our community through sport. We are a community cricket club representing Devpur Gaam — where 50+ members train, compete in 25+ seasonal leather-ball fixtures, build fitness, preserve memories, and grow together.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#E66212] via-[#EA6E18] to-[#F89928] hover:from-[#D45508] hover:to-[#EA6E18] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#EA6E18]/25 hover:scale-[1.02] active:scale-[0.98] transition-[transform,box-shadow,background-image] inline-flex items-center gap-2.5 group"
                >
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
                    <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
                  </svg>
                  <span>JOIN OUR CLUB</span>
                  <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-white transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>

                <Link
                  href="#values"
                  className="px-5 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white hover:bg-stone-50 text-stone-900 font-bold text-xs sm:text-sm tracking-wide shadow-sm border border-stone-200/90 hover:scale-[1.02] active:scale-[0.98] transition-[transform,background-color,border-color] inline-flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-[#EA6E18] text-[#EA6E18]" />
                  <span>LEARN MORE</span>
                </Link>
              </div>

              {/* Bottom Left Meta Badge */}
              <div className="flex items-center gap-3 pt-3 text-xs font-bold text-stone-500">
                <span className="font-headline tracking-widest text-stone-900 uppercase">
                  EST. <span className="text-[#EA6E18] font-black">2013</span>
                </span>
                <span className="text-stone-300">|</span>
                <div className="flex items-center gap-1 text-stone-700">
                  <MapPin className="w-3.5 h-3.5 text-[#EA6E18]" />
                  <span>DEVPUR GAAM</span>
                </div>
                <div className="w-14 h-px bg-stone-300 hidden sm:block" />
              </div>
            </div>

            {/* -------------------------------------------------------------------
                RIGHT COLUMN: DCC 3D OFFICIAL SHIELD OVER STADIUM
                Positioned with breathing room to the right of the batsman
                ------------------------------------------------------------------- */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end xl:justify-center items-center pr-20 xl:pr-24">
              <div className="relative w-52 h-52 lg:w-56 lg:h-56 xl:w-64 xl:h-64 drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)] drop-shadow-[0_0_35px_rgba(240,118,30,0.3)] transition-transform hover:scale-105 duration-300">
                <Image
                  src="/logo/dcc-logo.png"
                  alt="Devpur Cricket Club 3D Official Crest"
                  fill
                  priority
                  className="object-contain"
                  sizes="256px"
                />
              </div>
            </div>
          </div>
        </Container>

        {/* -------------------------------------------------------------------
            FLOATING STAT DOCK: 4-COLUMN HORIZONTAL PILL CARD
            Positioned cleanly across the outfield grass above the bottom fold
            ------------------------------------------------------------------- */}
        <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-4 right-4 sm:left-[30%] sm:right-auto lg:left-[31%] xl:left-[33%] z-20">
          <div className="bg-white/98 backdrop-blur-md rounded-2xl border border-stone-200/80 shadow-xl px-4 py-2.5 sm:px-5 sm:py-2.5 max-w-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/80 items-center">
              {/* 1. 50+ MEMBERS */}
              <div className="flex items-center gap-2.5 sm:pr-4">
                <svg className="w-5 h-5 text-[#0F1E36] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <circle cx="9" cy="17" r="1" fill="#EA6E18" stroke="none" />
                </svg>
                <div>
                  <span className="font-headline text-lg sm:text-xl font-black text-[#EA6E18] block leading-none">
                    50+
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#0F1E36] block tracking-wider mt-0.5">
                    MEMBERS
                  </span>
                </div>
              </div>

              {/* 2. 25+ SEASONAL FIXTURES */}
              <div className="flex items-center gap-2.5 sm:px-4 pt-2 sm:pt-0">
                <svg className="w-5 h-5 text-[#0F1E36] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 4l6 6-8 8a2 2 0 0 1-2.8 0l-1.4-1.4a2 2 0 0 1 0-2.8L14 4z" />
                  <path d="M3 21l3-3" />
                  <circle cx="18" cy="18" r="2" fill="#EA6E18" stroke="#EA6E18" />
                </svg>
                <div>
                  <span className="font-headline text-lg sm:text-xl font-black text-[#EA6E18] block leading-none">
                    25+
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#0F1E36] block tracking-wider mt-0.5">
                    SEASONAL FIXTURES
                  </span>
                </div>
              </div>

              {/* 3. FITNESS & TRAINING */}
              <div className="flex items-center gap-2.5 sm:px-4 pt-2 sm:pt-0">
                <svg className="w-5 h-5 text-[#0F1E36] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12" />
                  <circle cx="12" cy="15" r="1" fill="#EA6E18" stroke="none" />
                </svg>
                <div>
                  <span className="font-headline text-sm font-black text-[#EA6E18] block leading-tight uppercase">
                    FITNESS
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#0F1E36] block tracking-wider mt-0.5">
                    &amp; TRAINING
                  </span>
                </div>
              </div>

              {/* 4. MEMORIES FOR LIFE */}
              <div className="flex items-center gap-2.5 sm:pl-4 pt-2 sm:pt-0">
                <svg className="w-5 h-5 text-[#0F1E36] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M6 2h12v7a6 6 0 0 1-12 0V2z" />
                  <circle cx="12" cy="6" r="1" fill="#EA6E18" stroke="none" />
                </svg>
                <div>
                  <span className="font-headline text-sm font-black text-[#EA6E18] block leading-tight uppercase">
                    MEMORIES
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#0F1E36] block tracking-wider mt-0.5">
                    FOR LIFE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTENT SECTIONS: SQUAD BANNER, ACHIEVEMENTS, VALUES, PRACTICE & COMMITTEE
          ========================================================================= */}
      <Container className="pb-16">
        {/* Real Club Squad & Outfield Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-lg mb-16 aspect-[16/8] sm:aspect-[21/9] bg-stone-900 sports-card">
          <Image
            src="/images/ground_players_group.png"
            alt="Devpur Cricket Club full squad and coaches on the ground"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#F0761E]">
                THE DEVPUR CRICKET FAMILY
              </span>
              <h3 className="font-headline text-2xl sm:text-4xl font-extrabold leading-tight">
                One Club. One Brotherhood. Relentless Passion.
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-medium">
                Senior mentorship, youth talent, and dedicated volunteers training together at Matunga Ground to represent Devpur Gaam with honor.
              </p>
            </div>
          </div>
        </div>

        {/* Stated Achievements & Ranking */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-border text-center shadow-xs">
            <span className="font-mono text-xs font-bold text-brand-copper uppercase block mb-1">
              ESTABLISHED
            </span>
            <span className="font-headline text-3xl sm:text-4xl font-extrabold text-brand-black block">
              2013
            </span>
            <span className="text-xs text-foreground-soft font-medium mt-1 block">
              Representing Devpur Gaam
            </span>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-border text-center shadow-xs">
            <span className="font-mono text-xs font-bold text-brand-copper uppercase block mb-1">
              ACTIVE SQUAD
            </span>
            <span className="font-headline text-3xl sm:text-4xl font-extrabold text-brand-black block">
              50+
            </span>
            <span className="text-xs text-foreground-soft font-medium mt-1 block">
              Registered Playing Members
            </span>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-border text-center shadow-xs">
            <span className="font-mono text-xs font-bold text-brand-copper uppercase block mb-1">
              KVO TOURNAMENTS
            </span>
            <span className="font-headline text-3xl sm:text-4xl font-extrabold text-brand-black block">
              2×
            </span>
            <span className="text-xs text-foreground-soft font-medium mt-1 block">
              Runners-Up Trophies Earned
            </span>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-border text-center shadow-xs">
            <span className="font-mono text-xs font-bold text-brand-copper uppercase block mb-1">
              STATED RANKING
            </span>
            <span className="font-headline text-3xl sm:text-4xl font-extrabold text-brand-black block">
              Rank 10
            </span>
            <span className="text-xs text-foreground-soft font-medium mt-1 block">
              Amongst KVO Cricket Teams
            </span>
          </div>
        </div>

        {/* Our Core Values */}
        <div id="values" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-copper">
              OUR PILLARS
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-brand-black">
              The Code That Drives Devpur CC
            </h2>
            <p className="text-sm text-foreground-soft">
              Cricket at DCC is more than a weekend game; it is a discipline that shapes character, builds physical resilience, and deepens community bonds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.num}
                className="p-6 sm:p-8 rounded-2xl bg-surface border border-border relative overflow-hidden group hover:border-brand-copper/50 transition-colors shadow-xs"
              >
                <span className="font-mono text-3xl font-extrabold text-brand-copper/20 block mb-3">
                  {v.num}
                </span>
                <h3 className="font-headline text-xl font-bold text-brand-black mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-foreground-soft leading-relaxed font-medium">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Practice & Infrastructure */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-surface-soft border border-border relative overflow-hidden">
          <div className="max-w-2xl space-y-3 mb-8">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-copper">
              STRUCTURED PREPARATION
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-brand-black">
              Practice Nets &amp; Coaching Pedigree
            </h2>
            <p className="text-sm text-foreground-soft">
              Every season begins with intense preparation. We provide our members with professional coaching and quality facilities to compete at the highest community level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <div key={f.num} className="p-6 rounded-2xl bg-surface border border-border space-y-2">
                <span className="font-mono text-xs font-bold text-brand-copper">
                  FEATURE // {f.num}
                </span>
                <h4 className="font-headline text-lg font-bold text-brand-black">
                  {f.name}
                </h4>
                <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DCC Managing Committee */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-surface border border-border shadow-xs">
          <div className="max-w-2xl space-y-2 mb-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-copper">
              LEADERSHIP &amp; STEWARDSHIP
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-brand-black">
              DCC Managing Committee
            </h2>
            <p className="text-sm text-foreground-soft">
              Dedicated club members volunteering their time to manage training schedules, sponsor partnerships, equipment, and tournament participation.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {committeeMembers.map((name) => (
              <div
                key={name}
                className="px-4 py-2 rounded-xl bg-surface-soft border border-border/80 text-xs sm:text-sm font-bold text-brand-black flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#EA6E18]" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Community-First Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-charcoal text-white text-center space-y-4 shadow-xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#EA6E18]">
            JOIN OUR BROTHERHOOD
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ready to Represent Devpur Gaam?
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto font-medium">
            Whether you are a seasoned leather-ball batsman, an express fast bowler, or a passionate supporter, there is a place for you in Devpur Cricket Club.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-[#EA6E18] hover:bg-[#D45508] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
            >
              Contact Club Committee
            </Link>
            <Link
              href="/matches"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm uppercase tracking-wider transition-colors border border-white/20"
            >
              View Match Fixtures
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
