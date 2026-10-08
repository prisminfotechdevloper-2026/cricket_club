"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../common/Container";

export function CricketHero() {
  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[460px] lg:min-h-[520px] flex items-center overflow-hidden border-b border-border/80 bg-stone-50">
      {/* Background Hero Image - Shifted right on mobile so batsman & stadium move right, leaving clean left white space for text */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/heros/club/club_heroimg.png"
          alt="Devpur Cricket Club - Cricket & Player Development"
          fill
          priority
          className="object-cover object-[20%_center] md:object-center"
          sizes="100vw"
        />

        {/* Very soft feather only on mobile left edge for clean text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/25 to-transparent sm:hidden pointer-events-none" />
      </div>

      <Container className="relative z-10 py-5 sm:py-10 lg:py-12">
        <div className="max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
          {/* Main Headline */}
          <div className="space-y-1.5">
            <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.08]">
              Cricket is Our{" "}
              <span className="text-brand-orange underline decoration-brand-orange/30 decoration-wavy decoration-2">
                Mainstay.
              </span>
            </h1>
            <p className="font-headline text-xs sm:text-base font-bold text-brand-copper uppercase tracking-wide">
              Discipline in the Nets &bull; Performance on the Pitch &bull; Brotherhood for Life
            </p>
          </div>

          {/* Clear, Simple-to-Understand Cricket Narrative */}
          <p className="text-foreground-soft text-xs sm:text-sm lg:text-base font-body leading-relaxed max-w-lg sm:max-w-xl">
            At Devpur Cricket Club, cricket is more than just a weekend match — it is our core identity.
            Through structured leather-ball net practice at <strong>Matunga Ground</strong>, dedicated coaching,
            and competitive tournament preparation, we empower every DCC cricketer to refine their skills,
            play with composure, and represent our club with genuine pride.
          </p>
        </div>
      </Container>
    </section>
  );
}
