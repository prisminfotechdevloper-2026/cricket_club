"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import {
  Trophy,
  ArrowUpRight,
  Play,
  Users,
  Medal,
  MapPin,
  Calendar,
  Star,
  Heart,
  ChevronRight,
  Clock,
} from "lucide-react";
import { sponsors } from "@/lib/data/sponsors";

export function HomeHero() {
  // High-visibility sponsors for the small dock boxes
  const dockSponsors = [
    sponsors.find((s) => s.id === "lc-anchor") || sponsors[1],
    sponsors.find((s) => s.id === "metro") || sponsors[2],
    sponsors.find((s) => s.id === "nanonine") || sponsors[4],
    sponsors.find((s) => s.id === "ratna") || sponsors[3],
  ];

  return (
    <section className="relative overflow-hidden bg-[#F6F8FA]">
      {/* =========================================================================
          HERO CANVAS: SUNNY DAYTIME STADIUM WITH BATSMAN BACKGROUND
          Tightened padding and min-height for clean viewport fit on large screens
          ========================================================================= */}
      <div className="relative min-h-[auto] sm:min-h-[500px] lg:min-h-[500px] xl:min-h-[520px] flex items-center pt-4 pb-4 sm:pt-4 sm:pb-5 lg:pt-5 lg:pb-6 overflow-hidden">
        {/* Master Panoramic Background Image from User Asset */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/heros/landing/landinghero.png"
            alt="Devpur Cricket Club Stadium Atmosphere"
            fill
            priority
            className="object-cover object-[center_top] sm:object-center"
            sizes="100vw"
          />
          {/* Daylight fade gradient for text readability on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:via-white/45 lg:to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F6F8FA] via-[#F6F8FA]/60 to-transparent pointer-events-none" />
        </div>

        {/* Floating Calligraphy: "Play Train Compete Win" - Brand Gold-Copper Asset */}
        <div className="hidden lg:block absolute left-[54%] xl:left-[55%] top-[4%] xl:top-[5%] z-10 pointer-events-none animate-fade-in">
          <div className="relative w-24 h-36 xl:w-28 xl:h-40">
            <Image
              src="/heros/landing/play-train-compete-win-brand.png"
              alt="Play Train Compete Win"
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100px, 120px"
            />
          </div>
        </div>

        {/* Floating Tilted Cricket Ball Card ("Cricket Creates Brothers") */}
        <div className="hidden lg:block absolute left-[45%] xl:left-[46%] bottom-[4%] xl:bottom-[5%] z-20 pointer-events-none drop-shadow-xl transition-transform hover:scale-105 duration-300">
          <div className="relative w-56 h-36 xl:w-60 xl:h-38 -rotate-6">
            <Image
              src="/heros/landing/ball-transparent.png"
              alt="Cricket Creates Brothers"
              fill
              className="object-contain"
              sizes="240px"
            />
          </div>
        </div>

        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
            {/* -------------------------------------------------------------------
                LEFT COLUMN: TYPOGRAPHY, BUTTONS & QUICK STATS
                Professional, premium, inspiring brand identity headline
                ------------------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-5 space-y-3.5 sm:space-y-4 text-left">
              {/* Top Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#D49A44]/40 shadow-xs text-xs font-bold text-stone-800">
                <Trophy className="w-3.5 h-3.5 text-[#D45D0E] shrink-0" />
                <span>Devpur Gaam • Community Cricket Club • Est. 2013</span>
              </div>

              {/* High-Impact Headline with DCC Brand Gradient */}
              <div className="space-y-0.5">
                <h1 className="font-headline text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-black tracking-tight leading-[0.98]">
                  <span className="text-[#0F1E36] block">Rooted in Heritage.</span>
                  <span className="bg-gradient-to-r from-[#D45D0E] via-[#F0761E] to-[#D49A44] bg-clip-text text-transparent block relative">
                    Forged in Cricket.
                  </span>
                  <span className="text-[#0F1E36] block">One Club. One Brotherhood.</span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
                Devpur Cricket Club unites generations of cricketers — training at Matunga Ground, competing with honor across the KVO ecosystem, and building lifelong brotherhood.
              </p>

              {/* High-Impact Action Buttons with Brand Palette */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#D45D0E] via-[#F0761E] to-[#D49A44] hover:from-[#B85018] hover:via-[#D45D0E] hover:to-[#C58B35] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#D45D0E]/25 hover:scale-[1.02] active:scale-[0.98] transition-[transform,box-shadow,background-image] inline-flex items-center gap-1.5 group"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>Explore Our Club</span>
                </Link>

                <Link
                  href="/gallery"
                  className="px-4.5 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs sm:text-sm tracking-wide shadow-sm border border-stone-200/90 hover:border-[#D49A44]/50 hover:scale-[1.02] active:scale-[0.98] transition-[transform,border-color,background-color] inline-flex items-center gap-2"
                >
                  <div className="w-4.5 h-4.5 rounded-full bg-[#0F1E36] flex items-center justify-center shrink-0">
                    <Play className="w-2 h-2 fill-white text-white ml-0.5" />
                  </div>
                  <span>Watch Our Story</span>
                </Link>
              </div>

              {/* Quick Stats / Meta Row with Brand Color Palette */}
              <div className="pt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 items-center border-t border-stone-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#D45D0E]/10 flex items-center justify-center shrink-0">
                    <Users className="w-3.5 h-3.5 text-[#D45D0E]" />
                  </div>
                  <div>
                    <span className="font-headline text-base sm:text-lg font-black text-[#0F1E36] block leading-none">
                      50+
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium block">
                      Active Members
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#D49A44]/15 flex items-center justify-center shrink-0">
                    <Medal className="w-3.5 h-3.5 text-[#D49A44]" />
                  </div>
                  <div>
                    <span className="font-headline text-base sm:text-lg font-black text-[#0F1E36] block leading-none">
                      2x
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium block">
                      KVO Runners-Up
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#D49A44]/15 flex items-center justify-center shrink-0">
                    <Trophy className="w-3.5 h-3.5 text-[#D49A44]" />
                  </div>
                  <div>
                    <span className="font-headline text-base sm:text-lg font-black text-[#0F1E36] block leading-none">
                      Rank 10
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium block">
                      in KVO
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#D45D0E]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#D45D0E]" />
                  </div>
                  <div>
                    <span className="font-headline text-xs font-black text-[#0F1E36] block leading-tight">
                      Matunga Ground
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium block">
                      Net Practice
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer for Center Batsman in Canvas */}
            <div className="hidden lg:block lg:col-span-1 xl:col-span-2" />

            {/* -------------------------------------------------------------------
                RIGHT COLUMN: FLOATING WHITE DCC IDENTITY CARD
                Synced with DCC crest colors (Brand Gold & Copper)
                ------------------------------------------------------------------- */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm xl:max-w-md bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl border border-stone-100/90 relative z-20 space-y-3 sm:space-y-3.5">
                {/* Header: DCC Crest + Title */}
                <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 drop-shadow-sm">
                    <Image
                      src="/logo/dcc-logo.png"
                      alt="Devpur Cricket Club Crest"
                      fill
                      priority
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <h3 className="font-headline text-lg sm:text-xl font-black text-brand-black tracking-tight uppercase leading-tight">
                      DEVPUR CRICKET CLUB
                    </h3>
                    <p className="text-[10px] font-bold text-[#D45D0E] tracking-wider uppercase">
                      PROUDLY REPRESENTING DEVPUR GAAM
                    </p>
                    <p className="text-[9px] font-bold text-stone-400 tracking-widest uppercase">
                      PLAY • TRAIN • COMPETE • WIN
                    </p>
                  </div>
                </div>

                {/* 4 Stat Metric Boxes in Grid */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  <div className="bg-stone-50 rounded-xl p-2 text-center border border-stone-100">
                    <Calendar className="w-3.5 h-3.5 text-[#D45D0E] mx-auto mb-0.5" />
                    <span className="text-[8.5px] uppercase font-bold text-stone-400 block tracking-wider">
                      INCEPTION
                    </span>
                    <span className="font-headline text-sm sm:text-base font-black text-stone-900 block mt-0.5">
                      2013
                    </span>
                  </div>

                  <div className="bg-stone-50 rounded-xl p-2 text-center border border-stone-100">
                    <Users className="w-3.5 h-3.5 text-[#D45D0E] mx-auto mb-0.5" />
                    <span className="text-[8.5px] uppercase font-bold text-stone-400 block tracking-wider">
                      MEMBERS
                    </span>
                    <span className="font-headline text-sm sm:text-base font-black text-stone-900 block mt-0.5">
                      50+
                    </span>
                  </div>

                  <div className="bg-stone-50 rounded-xl p-2 text-center border border-stone-100">
                    <Trophy className="w-3.5 h-3.5 text-[#D49A44] mx-auto mb-0.5" />
                    <span className="text-[8.5px] uppercase font-bold text-stone-400 block tracking-wider">
                      TROPHIES
                    </span>
                    <span className="font-headline text-xs sm:text-sm font-black text-stone-900 block mt-0.5">
                      2× Silver
                    </span>
                  </div>

                  <div className="bg-stone-50 rounded-xl p-2 text-center border border-stone-100">
                    <Star className="w-3.5 h-3.5 text-[#D49A44] mx-auto mb-0.5 fill-[#D49A44]" />
                    <span className="text-[8.5px] uppercase font-bold text-stone-400 block tracking-wider">
                      KVO RANK
                    </span>
                    <span className="font-headline text-sm sm:text-base font-black text-stone-900 block mt-0.5">
                      #10
                    </span>
                  </div>
                </div>

                {/* Bottom Callout Strip: Practice Rhythm & Coach */}
                <div className="bg-amber-50/80 border border-[#D49A44]/30 rounded-xl px-3 py-2 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-stone-700 font-medium">
                    <MapPin className="w-3 h-3 text-[#D45D0E] shrink-0" />
                    <span className="truncate">Practice: Mon • Wed • Fri (Matunga Ground)</span>
                  </div>
                  <Link
                    href="/about#coach"
                    className="font-bold text-[#D45D0E] hover:text-[#B85018] uppercase tracking-wide shrink-0 ml-1.5 transition-colors"
                  >
                    COACH A. KOLI →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* =========================================================================
          BOTTOM HERO DOCK: CLUB HIGHLIGHTS | NEXT MATCH | OUR SPONSORS
          Directly integrated beneath the hero canvas with brand color accents
          ========================================================================= */}
      <div className="relative z-20 pt-1 pb-5 sm:pb-6">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-3.5 items-stretch">
            {/* 1. Club Highlights (4 Action Cards) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-3.5 sm:p-4 border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1 h-3.5 bg-gradient-to-b from-[#D45D0E] to-[#D49A44] rounded-full" />
                <h4 className="font-headline text-sm font-black text-brand-black uppercase tracking-tight">
                  Club Highlights
                </h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <Link
                  href="/training"
                  className="p-2 sm:p-2.5 rounded-xl bg-stone-50 hover:bg-amber-50/60 border border-stone-100 hover:border-[#D49A44]/40 transition-[background-color,border-color] text-left group"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#D45D0E]/10 flex items-center justify-center mb-1.5">
                    <svg className="w-3.5 h-3.5 text-[#D45D0E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 4l6 6-8 8a2 2 0 0 1-2.8 0l-1.4-1.4a2 2 0 0 1 0-2.8L14 4z" />
                      <path d="M3 21l3-3" />
                      <circle cx="19" cy="5" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="font-headline font-black text-stone-900 text-[11px] sm:text-xs block leading-tight group-hover:text-[#D45D0E] transition-colors">
                    Regular Practice
                  </span>
                  <span className="text-[9.5px] text-stone-500 block">Build your skills</span>
                </Link>

                <Link
                  href="/matches"
                  className="p-2 sm:p-2.5 rounded-xl bg-stone-50 hover:bg-amber-50/60 border border-stone-100 hover:border-[#D49A44]/40 transition-[background-color,border-color] text-left group"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#D49A44]/15 flex items-center justify-center mb-1.5">
                    <Trophy className="w-3.5 h-3.5 text-[#D49A44]" />
                  </div>
                  <span className="font-headline font-black text-stone-900 text-[11px] sm:text-xs block leading-tight group-hover:text-[#D45D0E] transition-colors">
                    Friendly Matches
                  </span>
                  <span className="text-[9.5px] text-stone-500 block">Play &amp; Learn</span>
                </Link>

                <Link
                  href="/club-life"
                  className="p-2 sm:p-2.5 rounded-xl bg-stone-50 hover:bg-amber-50/60 border border-stone-100 hover:border-[#D49A44]/40 transition-[background-color,border-color] text-left group"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#D45D0E]/10 flex items-center justify-center mb-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D45D0E]" />
                  </div>
                  <span className="font-headline font-black text-stone-900 text-[11px] sm:text-xs block leading-tight group-hover:text-[#D45D0E] transition-colors">
                    Team Bonding
                  </span>
                  <span className="text-[9.5px] text-stone-500 block">More than a team</span>
                </Link>

                <Link
                  href="/memories"
                  className="p-2 sm:p-2.5 rounded-xl bg-stone-50 hover:bg-amber-50/60 border border-stone-100 hover:border-[#D49A44]/40 transition-[background-color,border-color] text-left group"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-rose-100 flex items-center justify-center mb-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  </div>
                  <span className="font-headline font-black text-stone-900 text-[11px] sm:text-xs block leading-tight group-hover:text-[#D45D0E] transition-colors">
                    Life Milestones
                  </span>
                  <span className="text-[9.5px] text-stone-500 block">Together Always</span>
                </Link>
              </div>
            </div>

            {/* 2. Next Match Panoramic Banner Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-1 border border-stone-200/80 shadow-sm flex flex-col justify-center">
              <Link
                href="/matches"
                className="relative block w-full h-full min-h-[118px] sm:min-h-[124px] lg:min-h-[128px] rounded-xl overflow-hidden group"
              >
                <Image
                  src="/heros/landing/image-transparent.png"
                  alt="Next Match: Devpur vs KVO Warriors"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </Link>
            </div>

            {/* 3. Our Sponsors Pill Row */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-3 sm:p-4 border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-headline text-sm font-black text-brand-black uppercase tracking-tight">
                  Our Sponsors
                </h4>
                <Link
                  href="/sponsors"
                  className="text-[#D45D0E] hover:text-[#B85018] text-[11px] font-bold font-mono tracking-wider transition-colors"
                >
                  View All →
                </Link>
              </div>

              {/* Sponsor Logo Squares */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {dockSponsors.map((sp) => (
                  <Link
                    key={sp.id}
                    href="/sponsors"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-stone-200 p-1.5 flex items-center justify-center hover:border-[#D49A44]/60 hover:shadow-xs transition-[border-color,box-shadow] group"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={sp.logo}
                        alt={sp.name}
                        fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                  </Link>
                ))}

                {/* Plus Button leading to All Sponsors */}
                <Link
                  href="/sponsors"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200/80 flex items-center justify-center text-stone-500 hover:text-stone-900 font-bold text-base transition-colors"
                >
                  +
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
