"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";

/* Reusable narrative text and CTA buttons block */
function StoryAndActionButtons() {
  return (
    <>
      {/* Narrative Body Text */}
      <p className="font-body text-[#525763] text-sm sm:text-[15px] md:text-base leading-[1.78] max-w-xl">
        The passion for cricket has always been alive in our KVO community.
        Year after year, the Kutchi Visa Oswal (KVO) Cricket Tournaments
        brought KUTCHI COMMUNITY together through the spirit of
        competition, recreation and a shared love for the game. Watching this
        spirit come alive sparked a thought in the minds of two friends from
        Devpur Gaam.
      </p>

      {/* Call To Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#E59837] hover:bg-[#D48529] active:scale-[0.98] text-white font-body font-semibold text-sm sm:text-base shadow-md shadow-[#E59837]/25 hover:shadow-lg transition-all duration-200 group cursor-pointer"
        >
          <span>Join Devpur</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

      
      </div>
    </>
  );
}

export function HistoryHero() {
  return (
    <section
      aria-label="Club Overview - Our Story"
      className="relative w-full overflow-hidden bg-[#FAF7F2] py-5 sm:py-6 md:py-7 lg:py-7 border-b border-[#EAE3D6]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-14 items-center">
          {/* =====================================================================
              LEFT COLUMN: STORY & PURPOSE NARRATIVE
              On mobile: Displays Eyebrow + Main Headline first.
              On desktop (lg+): Displays Eyebrow + Headline + Narrative + CTA Buttons.
              ===================================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6 text-left">
            {/* Eyebrow / Category Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#E59837]">
                CLUB OVERVIEW — OUR STORY
              </span>
            </div>

            {/* Main Headline: Elegant High-Contrast Serif */}
            <h1 className="font-serif text-[34px] sm:text-[46px] md:text-[52px] lg:text-[54px] xl:text-[60px] font-bold tracking-[-0.015em] leading-[1.12]">
              <span className="block text-[#0F172A]">Every Team Has a</span>
              <span className="block text-[#0F172A]">Beginning. Ours Began</span>
              <span className="block text-[#E59837]">With a Conversation.</span>
            </h1>

            {/* Desktop Only: Story Narrative & CTA Buttons */}
            <div className="hidden lg:flex flex-col space-y-5 sm:space-y-6">
              <StoryAndActionButtons />
            </div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: LAYERED ARTISTIC PHOTO FRAME & SCRIPT RIBBON
              On mobile: Displays right after the headline, followed by the narrative & buttons.
              ===================================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center pt-3 sm:pt-5 lg:pt-0">
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              {/* Back Layer: Warm Amber / Ochre Offset Decorative Frame */}
              <div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-[98%] h-[98%] rounded-2xl sm:rounded-[32px] bg-[#EFA748] transform rotate-1 sm:rotate-2 transition-transform duration-300"
                aria-hidden="true"
              />

              {/* Decorative Warm Watercolor / Paint Splash Accent at Bottom-Left */}
              <div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-32 sm:w-44 h-24 sm:h-32 rounded-3xl bg-[#EFA748]/75 blur-xs -rotate-6"
                aria-hidden="true"
              />

              {/* Main Photo Card Container */}
              <div className="relative z-10 w-full rounded-2xl sm:rounded-[28px] overflow-hidden bg-white shadow-2xl border-2 sm:border-4 border-white">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#EAE3D6]">
                  <Image
                    src="/history/image.png"
                    alt="Devpur Cricket Club Team on the Maidan"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-[center_35%] transition-transform duration-700 ease-out hover:scale-103"
                  />
                  {/* Subtle warm sun flare / vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Overlapping Handwritten Script Badge / Tape (Bottom-Right) */}
              <div
                className="absolute -bottom-4 right-1 sm:-bottom-5 sm:right-3 md:right-4 z-20 transform -rotate-3 sm:-rotate-2 bg-[#FAF7F2] py-2 sm:py-2.5 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-xl border border-white/90"
              >
                <div className="relative text-right">
                  <p className="font-script text-xl sm:text-2xl md:text-[28px] font-bold text-[#1E293B] leading-tight select-none">
                    More than a team
                  </p>
                  <p className="font-script text-xl sm:text-2xl md:text-[28px] font-bold text-[#1E293B] leading-tight select-none">
                    A family
                  </p>
                  {/* Subtle golden-orange brush line at bottom of the badge */}
                  <div className="w-full h-0.5 bg-[#E59837]/80 rounded-full mt-0.5" />
                </div>
              </div>
            </div>

            {/* Mobile Only: Story Narrative & CTA Buttons (Ordered right after the Hero Image) */}
            <div className="flex lg:hidden flex-col space-y-5 pt-8 sm:pt-9 w-full text-left">
              <StoryAndActionButtons />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
