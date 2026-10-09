"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { Trophy, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Cricket Stumps & Bat Sketch Watermark SVG                          */
/* ------------------------------------------------------------------ */
function CricketStumpsWatermark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* 3 Stumps / Wickets */}
      <rect x="74" y="36" width="4.5" height="88" rx="1.5" strokeWidth="1.6" />
      <rect x="86" y="36" width="4.5" height="88" rx="1.5" strokeWidth="1.6" />
      <rect x="98" y="36" width="4.5" height="88" rx="1.5" strokeWidth="1.6" />
      {/* Bails on top */}
      <rect x="72" y="32" width="16" height="3" rx="1" strokeWidth="1.4" />
      <rect x="86" y="32" width="18" height="3" rx="1" strokeWidth="1.4" />
      {/* Leaning Cricket Bat */}
      <path
        d="M58 136 L124 50 L132 56 L69 142 Z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Bat handle */}
      <path d="M124 50 L138 32 L144 37 L132 56" strokeWidth="1.6" />
      {/* Cricket ball at base */}
      <circle cx="54" cy="130" r="13" strokeWidth="1.6" />
      <path
        d="M45 122 C51 126 59 133 64 138"
        strokeWidth="1.4"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

export function HomeCoachingSection() {
  return (
    <section
      id="coaching-development"
      aria-labelledby="coaching-development-title"
      className="relative w-full overflow-hidden bg-[#0A0D14] py-5 sm:py-6 lg:py-7 lg:pb-13 border-b border-[#1B2232]"
    >
      {/* Background Image: Dark Batsmen Action Photo provided by User */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/coach_dark_bg.png"
          alt=""
          fill
          priority
          className="object-cover object-right-top sm:object-right opacity-65"
        />
        {/* High-contrast dark gradients for seamless text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14]/95 via-[#0A0D14]/80 to-[#0A0D14]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D14]/85 via-transparent to-[#0A0D14]/90" />
      </div>

      <Container className="relative z-10">
        {/* =====================================================================
            TOP HEADER (Left Aligned):
            Eyebrow: THE PEOPLE BEHIND THE PLAY —
            Title: MEET THE COACH BEHIND / OUR NEXT GENERATION
            ===================================================================== */}
        <div className="text-left max-w-4xl mb-8 sm:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-2 sm:mb-2.5">
            <span className="font-body text-[#F0A04B] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase">
              THE PEOPLE BEHIND THE PLAY
            </span>
            <span className="w-8 sm:w-10 h-px bg-[#D7833D]" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2
            id="coaching-development-title"
            className="font-display-serif font-black uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.08] mt-2"
          >
            <span className="block text-white">MEET THE COACH BEHIND</span>
            <span className="block text-[#F0A04B]">OUR NEXT GENERATION</span>
          </h2>
        </div>

        {/* =====================================================================
            FEATURED COACH SHOWCASE CARD
            - Split layout (Left: Coach Photo + Trophy Badge, Right: Info & Quote)
            - Warm orange backdrop flap on the left
            ===================================================================== */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Left accent flap behind the card */}
          <div
            aria-hidden="true"
            className="absolute -left-2.5 sm:-left-3.5 top-6 bottom-6 w-12 sm:w-16 bg-[#D7833D] rounded-2xl sm:rounded-3xl -rotate-1 pointer-events-none"
          />

          {/* Main White Card Container */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-white/20">
            {/* ================= LEFT COLUMN: COACH PHOTO ================= */}
            <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[460px] overflow-hidden bg-neutral-100">
              <Image
                src="/coaching_drill/Aditya_Koli_coach2.png"
                alt="Coach Aditya Koli - Devpur Cricket Club Head Coach"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-[center_15%] transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Floating Trophy Badge in bottom left */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 px-4 py-3 flex items-center gap-3.5 shadow-xl z-10">
                <div className="w-10 h-10 rounded-lg bg-[#F0A04B]/20 border border-[#F0A04B]/40 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-[#F0A04B]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-headline font-bold text-white text-sm sm:text-base tracking-wide leading-tight">
                    Head Coach
                  </span>
                  <span className="text-white/70 text-xs font-medium leading-tight mt-0.5">
                    Devpur Cricket Club
                  </span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: DETAILS & QUOTE ================= */}
            <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-center text-left relative overflow-hidden bg-white">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                <span className="font-body text-[#F0A04B] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase">
                  HEAD COACH
                </span>
                <span className="w-8 sm:w-10 h-px bg-[#D7833D]" aria-hidden="true" />
              </div>

              {/* Coach Name */}
              <h3 className="font-display-serif font-black uppercase text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-[#111827] leading-[1.05] mb-1.5 sm:mb-2">
                ADITYA KOLI
              </h3>

              {/* Subtitle */}
              <p className="font-body text-[#4B5563] text-sm sm:text-[15px] font-medium mb-6 sm:mb-8">
                Head Coach, Devpur Cricket Club
              </p>

              {/* Quote Block with Left Accent Line */}
              <div className="border-l-2 border-[#D7833D] pl-4 sm:pl-5 py-1 mb-7 sm:mb-9 max-w-md">
                <p className="font-body text-[#4B5563] text-sm sm:text-[15px] leading-relaxed">
                  “The best coaching builds skill, confidence, and character together. Every player deserves the chance to find their game.”
                </p>
              </div>

              {/* CTA Button */}
              <div className="relative z-10">
                <Link
                  href="/cricket"
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#F0A04B] hover:bg-[#D7833D] text-white font-medium text-sm sm:text-[15px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group w-fit cursor-pointer"
                >
                  <span>Coach Responsibilities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Decorative Stumps Watermark Sketch in bottom right */}
              <div className="absolute -bottom-4 -right-4 pointer-events-none select-none text-[#111827]/10 w-44 h-44">
                <CricketStumpsWatermark className="w-full h-full" />
              </div>

              {/* Decorative Dot Grid Matrix in bottom right */}
              <div className="absolute bottom-9 right-7 pointer-events-none select-none">
                <div
                  className="grid grid-cols-6 gap-2 opacity-35"
                  aria-hidden="true"
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#D7833D]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative Bottom-Left Angled Copper Line matching screenshot */}
      <div
        className="absolute bottom-0 left-0 w-80 sm:w-96 h-12 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 380 48" fill="none" className="w-full h-full">
          <path d="M0 48 L140 28 L380 48" stroke="#D7833D" strokeWidth="2.5" />
        </svg>
      </div>
    </section>
  );
}
