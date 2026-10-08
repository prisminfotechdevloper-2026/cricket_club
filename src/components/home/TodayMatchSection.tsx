import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { LiveMatchCard } from "../matches/LiveMatchCard";
import { UpcomingMatchCard } from "../matches/UpcomingMatchCard";
import { matches } from "@/lib/data/matches";
import { sponsors } from "@/lib/data/sponsors";

export function TodayMatchSection() {
  const liveMatch = matches.find((m) => m.status === "live") || matches[0];
  const upcomingMatch = matches.find((m) => m.status === "upcoming") || matches[1];

  return (
    <section className="py-12 sm:py-16 border-b border-border/80 bg-background">
      <Container>
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-brand-charcoal text-white text-[11px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              <span>MATCHDAY COMMAND CENTER</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-black tracking-tight leading-none uppercase">
              Today&apos;s Match &amp; Live Score
            </h2>
            <p className="text-xs sm:text-sm text-foreground-soft mt-1">
              Follow DCC&apos;s community tournament matches with simulated live scoring &amp; external Cric Club links.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/matches"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-surface hover:bg-surface-soft border border-border text-xs font-bold uppercase tracking-wider text-brand-black transition-colors shadow-2xs"
            >
              <span>Full Fixtures →</span>
            </Link>
          </div>
        </div>

        {/* Match Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Primary: Live Match Card (8 Cols on Desktop) */}
          <div className="lg:col-span-8">
            <LiveMatchCard match={liveMatch} />
          </div>

          {/* Secondary: Next Match Card (4 Cols on Desktop) */}
          <div className="lg:col-span-4 h-full flex flex-col justify-between">
            <UpcomingMatchCard match={upcomingMatch} />
          </div>
        </div>

        {/* Live Match Sponsor Integration Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-surface border border-border/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-copper block">
              MATCHDAY BROADCAST &amp; SCORECARD PARTNERS
            </span>
            <p className="text-xs text-foreground-soft font-medium mt-0.5">
              Live tournament coverage supported by official DCC community sponsors.
            </p>
          </div>

          {/* Mini Sponsor Logos Strip */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto py-1 w-full sm:w-auto scrollbar-none">
            {sponsors.slice(0, 5).map((sp) => (
              <div
                key={sp.id}
                className="relative w-12 h-7 sm:w-14 sm:h-8 shrink-0 opacity-80 hover:opacity-100 transition-opacity"
                title={sp.name}
              >
                <Image
                  src={sp.logo}
                  alt={sp.name}
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
            ))}
            <Link
              href="/sponsors"
              className="text-[11px] font-bold uppercase tracking-wider text-brand-copper hover:underline shrink-0"
            >
              + Partners
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
