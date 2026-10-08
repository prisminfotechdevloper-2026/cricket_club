"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container } from "../common/Container";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden w-full bg-[#0E1013]">
      {/* =========================================================================
          HERO SECTION: CLEAN IMPACTFUL FULL-COVER CRICKET CLUB HERO
          Background: /images/winning_time_with_group.png
          Structure matching benchmark: Big bold headline, subtext, and 'KNOW MORE >' button
          ========================================================================= */}
      <div className="relative min-h-[540px] sm:min-h-[600px] md:min-h-[640px] lg:min-h-[680px] xl:min-h-[720px] flex items-center overflow-hidden">
        {/* Full-Cover Background Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/winning_time_with_group.png"
            alt="Devpur Cricket Club Celebration at Matunga Gymkhana"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Cinematic Dark Vignette & Gradient Overlays for High-Contrast Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 sm:from-black/80 sm:via-black/55 sm:to-black/30 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <Container className="relative z-10 w-full py-16 sm:py-20 md:py-24">
          <div className="max-w-2xl sm:max-w-3xl space-y-4 sm:space-y-6 text-left">
            {/* Main Headline */}
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.08] tracking-tight drop-shadow-md">
              This is where everything reaches fever pitch
            </h1>

            {/* Subtext */}
            <p className="text-white/95 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl drop-shadow-sm">
              Your place of leisure, luxury, food and sport is waiting for you.
            </p>

            {/* Know More Call-To-Action Button */}
            <div className="pt-2 sm:pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-md bg-[#EA4326] hover:bg-[#D9381E] active:scale-[0.98] text-white font-headline text-base sm:text-lg font-bold uppercase tracking-wider shadow-lg shadow-black/30 hover:shadow-xl transition-[transform,background-color,box-shadow] duration-150 cursor-pointer group"
              >
                <span>KNOW MORE</span>
                <ChevronRight className="w-5 h-5 stroke-[2.5] transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
