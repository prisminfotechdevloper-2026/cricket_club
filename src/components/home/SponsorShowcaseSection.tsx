"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { sponsors } from "@/lib/data/sponsors";
import { ArrowRight } from "lucide-react";

export function SponsorShowcaseSection() {
  // Duplicate array for seamless infinite right-to-left marquee loop with stable keys
  const marqueeSponsors = [
    ...sponsors.map((s) => ({ ...s, marqueeKey: `primary-${s.id}` })),
    ...sponsors.map((s) => ({ ...s, marqueeKey: `replica-${s.id}` })),
  ];

  return (
    <section className="py-14 sm:py-20 bg-surface border-y border-border/80 overflow-hidden relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <Container>
        {/* Focused Header: Highlighting Club Partners */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 text-stone-200 font-mono text-[11px] font-bold uppercase tracking-widest border border-stone-800 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>OFFICIAL CLUB PATRONS // 2026–2029 CYCLE</span>
              <span className="text-stone-600">•</span>
              <span>DEVPUR GAAM</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl font-black tracking-tight text-brand-black uppercase leading-tight">
              Proudly Supported By <span className="text-brand-copper">Our Official Partners</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground-soft leading-relaxed">
              Backing Devpur Cricket Club&apos;s structured training under Coach Aditya Koli, match jerseys, leather-ball equipment, and tournament participation.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-xs group"
            >
              <span>Explore All Partners &amp; MOUs</span>
              <ArrowRight className="w-4 h-4 text-brand-orange transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>

      {/* =========================================================================
          CONTINUOUS RIGHT-TO-LEFT LOGO HIGHLIGHT RIBBON (NO HEAVY CARDS)
          Focused strictly on making logos HUGE, BOLD, and CRYSTAL CLEAR
          ========================================================================= */}
      <div className="w-full overflow-hidden marquee-mask py-4">
        <div className="animate-marquee-rtl flex items-center gap-6 pl-6">
          {marqueeSponsors.map((sponsor, idx) => (
            <Link
              key={sponsor.marqueeKey}
              href="/sponsors"
              className="shrink-0 w-[300px] sm:w-[360px] md:w-[400px] h-48 sm:h-52 rounded-2xl bg-white border border-stone-200/90 hover:border-brand-copper/80 hover:shadow-xl transition-[border-color,box-shadow] duration-300 group flex flex-col justify-between p-5 sm:p-6"
            >
              {/* Top Tag: Partner Tier Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded bg-stone-100 group-hover:bg-stone-900 group-hover:text-white text-stone-700 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors">
                  {sponsor.tierLabel}
                </span>
                <span className="text-[10px] font-mono font-bold text-brand-copper uppercase">
                  3-SEASON MOU
                </span>
              </div>

              {/* HUGE, PROMINENT LOGO STAGE (Fills the center with maximum optical clarity) */}
              <div className="relative w-full h-28 sm:h-32 flex items-center justify-center my-auto group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} Official Brand`}
                  fill
                  className="object-contain"
                  sizes="400px"
                  priority={idx < 4}
                />
              </div>

              {/* Bottom Subtle Brand Name */}
              <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs font-mono">
                <span className="font-headline font-black text-brand-black text-base uppercase tracking-tight group-hover:text-brand-copper transition-colors">
                  {sponsor.name}
                </span>
                <span className="text-[10px] font-mono text-stone-500 uppercase">
                  ~25 MATCHES/YR
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Container>
        {/* Clean, Non-Cluttered Telemetry Bar */}
        <div className="mt-8 pt-6 border-t border-border/70 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-foreground-soft">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span className="font-bold text-brand-black uppercase">2026–2029 Triennial MOU Cycle</span>
            <span className="text-stone-400">•</span>
            <span>₹1,80,000 Committed per Partner</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-copper" />
            <span className="font-bold text-brand-black uppercase">~25 Tournament Matches / Season</span>
            <span className="text-stone-400">•</span>
            <span>Front &amp; Sleeve Kit Visibility</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-900" />
            <span className="font-bold text-brand-black uppercase">10,000+ KVO Cricket Network</span>
            <span className="text-stone-400">•</span>
            <span>Digital Reels &amp; Matchday Coverage</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
