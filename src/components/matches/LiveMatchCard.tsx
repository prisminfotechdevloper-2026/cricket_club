import React from "react";
import Link from "next/link";
import { Match } from "@/lib/types/cricket";
import { LiveBadge } from "../common/LiveBadge";
import { MapPin, Clock, ArrowRight, Zap, Target } from "lucide-react";

interface LiveMatchCardProps {
  match: Match;
}

export function LiveMatchCard({ match }: LiveMatchCardProps) {
  const liveDetails = match.liveDetails;

  return (
    <div className="relative rounded-3xl bg-surface border border-border shadow-md overflow-hidden transition-all hover:shadow-lg">
      {/* Top Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-maroon via-brand-red to-brand-copper" />

      <div className="p-5 sm:p-7 lg:p-8">
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-border/80">
          <div className="flex items-center gap-2.5">
            <LiveBadge text="LIVE NOW" size="md" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-copper">
              {match.tournament} • {match.matchType}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-muted">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-copper" />
              {match.time}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-copper" />
              {match.venue}
            </span>
          </div>
        </div>

        {/* Scoreboard Big Numbers */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* DCC Score */}
          <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-surface-soft border border-border/80">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                Batting 2nd (Innings 2)
              </span>
              <div className="flex items-center gap-2">
                <span className="font-headline text-2xl sm:text-3xl font-bold text-brand-black">
                  Devpur Cricket Club
                </span>
                <span className="text-xs px-2 py-0.5 rounded font-extrabold bg-brand-charcoal text-white">
                  DCC
                </span>
              </div>
              <span className="text-xs text-brand-copper font-semibold block">
                {match.dccOvers} Overs
              </span>
            </div>

            <div className="text-right">
              <div className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black tracking-tight leading-none">
                {match.dccScore}
              </div>
              <span className="text-xs font-semibold text-brand-copper bg-brand-copper/10 px-2 py-0.5 rounded-full inline-block mt-1">
                CRR: {liveDetails?.currentRunRate || "8.42"}
              </span>
            </div>
          </div>

          {/* Opponent Score */}
          <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-surface-soft/60 border border-border/60">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                Innings 1 Completed
              </span>
              <div className="flex items-center gap-2">
                <span className="font-headline text-xl sm:text-2xl font-bold text-foreground-soft">
                  {match.opponent}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded font-bold bg-stone-200 text-stone-700">
                  {match.opponentShort}
                </span>
              </div>
              <span className="text-xs text-muted font-medium block">
                {match.opponentOvers} Overs
              </span>
            </div>

            <div className="text-right">
              <div className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground-soft tracking-tight leading-none">
                {match.opponentScore}
              </div>
              <span className="text-xs text-muted block mt-1">
                Target: {liveDetails?.target || "184"}
              </span>
            </div>
          </div>
        </div>

        {/* Live Equation Banner */}
        {liveDetails && (
          <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-brand-charcoal text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-red flex items-center justify-center shrink-0">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-headline text-lg sm:text-xl font-bold tracking-wide text-brand-peach">
                  Need {liveDetails.requiredRuns} runs from {liveDetails.remainingBalls} balls
                </div>
                <div className="text-xs text-neutral-300">
                  Required Run Rate: {liveDetails.requiredRunRate} • Current Run Rate: {liveDetails.currentRunRate}
                </div>
              </div>
            </div>

            {/* Recent Balls Strip */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mr-1">
                Recent:
              </span>
              {liveDetails.recentBalls.map((ball, idx) => (
                <span
                  key={idx}
                  className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                    ball === "6"
                      ? "bg-purple-600 text-white"
                      : ball === "4"
                      ? "bg-blue-600 text-white"
                      : ball === "W"
                      ? "bg-brand-red text-white"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {ball}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Active Batters & Bowler Mini Bar */}
        {liveDetails && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 pb-5 border-b border-border/80 text-xs">
            {liveDetails.currentBatters.map((b) => (
              <div
                key={b.id}
                className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200/60"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-copper" />
                  <span className="font-bold text-brand-black">
                    {b.name} {b.isStriker && "*"}
                  </span>
                </div>
                <span className="font-headline text-sm font-bold text-brand-black">
                  {b.runs} <span className="text-muted font-normal">({b.balls})</span>
                </span>
              </div>
            ))}

            <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200/60 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span className="font-semibold text-brand-black">
                  {liveDetails.currentBowler.name}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-foreground-soft">
                {liveDetails.currentBowler.overs}-{liveDetails.currentBowler.maidens}-
                {liveDetails.currentBowler.runs}-{liveDetails.currentBowler.wickets}
              </span>
            </div>
          </div>
        )}

        {/* Bottom CTA Row */}
        <div className="pt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-muted flex items-center gap-2">
            <Zap className="w-4 h-4 text-brand-copper" />
            <span>Simulated live demo match with interactive commentary & scorecard.</span>
          </div>

          <Link
            href={`/matches/${match.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-copper hover:bg-brand-copper-dark text-white font-bold text-sm uppercase tracking-wider transition-all shadow-sm group ml-auto"
          >
            <span className="text-white font-bold">View Full Live Scorecard</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
