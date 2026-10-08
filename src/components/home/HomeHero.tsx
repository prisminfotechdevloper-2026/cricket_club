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
          HERO SECTION: 50% VIEWPORT HEIGHT CRICKET VISION & PURPOSE HERO
          Background: /images/hero_banner_panoramic.jpg (Matunga Gymkhana Pavilion & Team)
          Layout: 50vh height, filled image, emotional cricket vision headline & subtext
          ========================================================================= */}
      <div className="relative h-[50vh] min-h-[380px] max-h-[500px] flex items-center overflow-hidden">
        {/* Full-Cover Panoramic Background Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/hero_banner_panoramic.jpg"
            alt="Devpur Cricket Club Team Celebration at Matunga Gymkhana Cricket Pavilion"
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />

          {/* Cinematic Dark Vignette & Gradient Overlays for High-Contrast Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 via-50% to-black/25 sm:from-black/85 sm:via-black/55 sm:to-black/20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <Container className="relative z-10 w-full py-8 sm:py-10">
          <div className="max-w-2xl sm:max-w-3xl space-y-3 sm:space-y-4 text-left">
            {/* Main Headline: Cricket Passion & Brotherhood */}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white uppercase tracking-wide leading-[1.08] drop-shadow-md">
              CRICKET BRINGS US TOGETHER <br></br>
              THE CLUB MAKES US FAMILY.
            </h1>

            {/* Subtext: Purpose & Vision */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl drop-shadow-sm font-body">
              More than a game, cricket is the reason we meet, grow and create memories together.
            </p>

            {/* Know More Call-To-Action Button */}
            <div className="pt-2 sm:pt-3">
              <Link
                href="/history"
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-md bg-[#EA4326] hover:bg-[#D9381E] active:scale-[0.98] text-white font-headline text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider shadow-lg shadow-black/30 hover:shadow-xl transition-[transform,background-color,box-shadow] duration-150 cursor-pointer group"
              >
                <span>KNOW MORE</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

