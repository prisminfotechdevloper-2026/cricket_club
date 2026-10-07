import React from "react";
import Link from "next/link";
import { Season } from "@/lib/types/content";
import { Container } from "../common/Container";
import {
  ArrowLeft,
  Calendar,
} from "lucide-react";

interface SeasonArchiveDetailProps {
  season: Season;
}

export function SeasonArchiveDetail({ season }: SeasonArchiveDetailProps) {
  return (
    <div className="py-8 sm:py-14 bg-background min-h-screen">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/seasons"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-brand-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Season Archives</span>
          </Link>
        </div>

        {/* Season Header */}
        <div className="rounded-3xl bg-surface border border-border shadow-md p-6 sm:p-10 mb-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {season.isCurrent ? (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-charcoal text-white">
                    CURRENT ACTIVE SEASON
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700">
                    HISTORICAL SEASON
                  </span>
                )}
                <span className="text-xs text-muted font-medium">
                  {season.startDate} to {season.endDate}
                </span>
              </div>

              <h1 className="font-headline text-4xl sm:text-6xl font-extrabold text-brand-black tracking-tight leading-tight">
                {season.name}
              </h1>
              <p className="text-xs uppercase font-extrabold tracking-widest text-brand-copper mt-1">
                Motto: &quot;{season.motto}&quot;
              </p>
            </div>

            <div className="flex items-center gap-4 text-center">
              <div className="p-4 rounded-2xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Captain
                </span>
                <span className="font-headline text-2xl font-bold text-brand-black">
                  {season.captain}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Trophies
                </span>
                <span className="font-headline text-2xl font-bold text-brand-copper">
                  {season.trophiesWon}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-foreground-soft leading-relaxed max-w-3xl">
            {season.summary}
          </p>

          {/* Season Stats Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-2">
            <div className="p-4 rounded-2xl bg-surface-soft border border-border/80">
              <span className="text-[10px] uppercase font-bold text-muted block">
                Matches Played
              </span>
              <span className="font-headline text-3xl font-bold text-brand-black">
                {season.matchesPlayed}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-surface-soft border border-border/80">
              <span className="text-[10px] uppercase font-bold text-muted block">
                Matches Won
              </span>
              <span className="font-headline text-3xl font-bold text-brand-copper">
                {season.matchesWon}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-surface-soft border border-border/80">
              <span className="text-[10px] uppercase font-bold text-muted block">
                Top Batter
              </span>
              <span className="font-headline text-xl font-bold text-brand-black truncate block">
                {season.topRunScorer.name}
              </span>
              <span className="text-[11px] text-brand-copper font-bold block">
                {season.topRunScorer.runs} Runs
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-surface-soft border border-border/80">
              <span className="text-[10px] uppercase font-bold text-muted block">
                Top Bowler
              </span>
              <span className="font-headline text-xl font-bold text-brand-black truncate block">
                {season.topWicketTaker.name}
              </span>
              <span className="text-[11px] text-brand-copper font-bold block">
                {season.topWicketTaker.wickets} Wickets
              </span>
            </div>
          </div>
        </div>

        {/* Annual Journey Timeline (Oct – March) */}
        <div className="rounded-3xl bg-surface border border-border shadow-sm p-6 sm:p-10 mb-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-copper" />
              <h2 className="font-headline text-2xl font-bold text-brand-black">
                Annual Operating Timeline
              </h2>
            </div>
            <span className="text-xs text-muted font-semibold">
              Cycle: October – March
            </span>
          </div>

          <div className="space-y-4">
            {season.timeline.map((step) => (
              <div
                key={step.month}
                className="p-5 rounded-2xl bg-surface-soft border border-border flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="font-headline text-2xl font-bold text-white bg-brand-charcoal px-3 py-1 rounded-xl text-center shrink-0 w-20">
                  {step.month}
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl font-bold text-brand-black">
                    {step.stage}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Season Highlights */}
        <div className="rounded-3xl bg-surface border border-border shadow-sm p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-2.5 pb-4 border-b border-border">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <h2 className="font-headline text-2xl font-bold text-brand-black uppercase">
              Defining Milestones & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {season.highlights.map((h) => (
              <div
                key={h}
                className="p-4 rounded-2xl bg-surface-soft border border-border flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-copper shrink-0 mt-2" />
                <span className="text-xs sm:text-sm font-semibold text-brand-black">
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
