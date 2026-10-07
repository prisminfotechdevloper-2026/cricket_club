import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Player } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { ArrowLeft } from "lucide-react";

interface PlayerProfileDetailProps {
  player: Player;
}

export function PlayerProfileDetail({ player }: PlayerProfileDetailProps) {
  const isBowler =
    player.role === "Fast Bowler" || player.role === "Spin Bowler";

  return (
    <div className="py-8 sm:py-14 bg-background min-h-screen">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/players"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted hover:text-brand-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO SQUAD ROSTER</span>
          </Link>
        </div>

        {/* Hero Profile Banner */}
        <div className="rounded-3xl bg-surface border border-border shadow-md overflow-hidden p-6 sm:p-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Player Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative aspect-[3/4] w-full max-w-xs rounded-2xl overflow-hidden bg-stone-900 border border-border shadow-md">
                <Image
                  src={player.photo}
                  alt={player.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 font-mono text-sm font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 tracking-widest">
                  #{player.jerseyNumber}
                </div>
              </div>
            </div>

            {/* Player Info & Bio */}
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-brand-charcoal text-white">
                    {player.role}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-copper">
                    Devpur Cricket Club • Since {player.joiningYear}
                  </span>
                </div>

                <h1 className="font-headline text-4xl sm:text-6xl font-black text-brand-black tracking-tight leading-none uppercase">
                  {player.name}
                </h1>

                <p className="text-sm font-mono text-foreground-soft">
                  {player.battingStyle}
                  {player.bowlingStyle ? ` • ${player.bowlingStyle}` : ""}
                </p>
              </div>

              <p className="text-sm sm:text-base text-foreground-soft leading-relaxed max-w-2xl">
                {player.bio}
              </p>

              {/* Season Highlight Box */}
              {player.seasonHighlight && (
                <div className="p-4 rounded-2xl bg-surface-soft border border-border/80 text-brand-black flex items-start gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-stone-900 text-brand-orange px-2 py-1 rounded shrink-0 mt-0.5">
                    HIGHLIGHT
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted block">
                      SEASON 2026–27 MOMENT
                    </span>
                    <p className="text-xs sm:text-sm font-medium mt-0.5">
                      {player.seasonHighlight}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Career vs Current Season Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Current Season (2026–27) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <h3 className="font-headline text-2xl font-bold text-brand-black uppercase">
                  Current Season (2026–27)
                </h3>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-brand-copper/10 text-brand-copper border border-brand-copper/20">
                ACTIVE CAMPAIGN
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3.5 rounded-xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Matches
                </span>
                <span className="font-headline text-3xl font-bold text-brand-black">
                  {player.currentSeasonStats.matches}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  {isBowler ? "Wickets" : "Runs"}
                </span>
                <span className="font-headline text-3xl font-bold text-brand-copper">
                  {isBowler
                    ? player.currentSeasonStats.wickets
                    : player.currentSeasonStats.runs}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  {isBowler ? "Econ" : "Strike Rate"}
                </span>
                <span className="font-headline text-3xl font-bold text-brand-black">
                  {isBowler
                    ? player.currentSeasonStats.economy
                    : player.currentSeasonStats.strikeRate}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  {isBowler ? "Best Bowling" : "Highest Score"}
                </span>
                <span className="font-headline text-2xl font-bold text-brand-black">
                  {isBowler
                    ? player.currentSeasonStats.bestBowling || "—"
                    : player.currentSeasonStats.highestScore}
                </span>
              </div>
            </div>

            {/* Detailed batting/bowling sub-metrics */}
            <div className="pt-2 border-t border-border/60 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-stone-50">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  {isBowler ? "Runs Conceded" : "Fours (4s)"}
                </span>
                <span className="font-bold text-brand-black text-sm">
                  {isBowler ? "138" : player.currentSeasonStats.fours}
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-stone-50">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  {isBowler ? "Maidens" : "Sixes (6s)"}
                </span>
                <span className="font-bold text-brand-black text-sm">
                  {isBowler ? "4" : player.currentSeasonStats.sixes}
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-stone-50">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Catches
                </span>
                <span className="font-bold text-brand-black text-sm">
                  {player.currentSeasonStats.catches}
                </span>
              </div>
            </div>
          </div>

          {/* All-Time Career Stats */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-copper" />
                <h3 className="font-headline text-2xl font-bold text-brand-black uppercase">
                  Club Career Record
                </h3>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700">
                ALL FIXTURES
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3.5 rounded-xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Matches
                </span>
                <span className="font-headline text-3xl font-bold text-brand-black">
                  {player.careerStats.matches}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Total Runs
                </span>
                <span className="font-headline text-3xl font-bold text-brand-black">
                  {player.careerStats.runs}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Bat Average
                </span>
                <span className="font-headline text-3xl font-bold text-brand-copper">
                  {player.careerStats.average}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  {isBowler ? "Career Wkts" : "50s / 100s"}
                </span>
                <span className="font-headline text-2xl font-bold text-brand-black">
                  {isBowler
                    ? player.careerStats.wickets
                    : `${player.careerStats.fifties} / ${player.careerStats.hundreds}`}
                </span>
              </div>
            </div>

            {/* Career Boundaries & Catches */}
            <div className="pt-2 border-t border-border/60 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-stone-50">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Career 4s
                </span>
                <span className="font-bold text-brand-black text-sm">
                  {player.careerStats.fours}
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-stone-50">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Career 6s
                </span>
                <span className="font-bold text-brand-black text-sm">
                  {player.careerStats.sixes}
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-stone-50">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Fielding Dismissals
                </span>
                <span className="font-bold text-brand-black text-sm">
                  {player.careerStats.catches + player.careerStats.runouts}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Match Performances */}
        {player.recentPerformances.length > 0 && (
          <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-sm space-y-6">
            <h3 className="font-headline text-2xl font-bold text-brand-black pb-4 border-b border-border">
              Recent Match Performances
            </h3>

            <div className="divide-y divide-border/60">
              {player.recentPerformances.map((perf) => (
                <div
                  key={perf.id}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-brand-black">
                        vs {perf.opponent}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-semibold">
                        {perf.tournament}
                      </span>
                      {perf.playerOfMatch && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          Player of the Match
                        </span>
                      )}
                    </div>
                    {perf.highlight && (
                      <p className="text-xs text-muted font-medium">{perf.highlight}</p>
                    )}
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    <div className="font-headline text-2xl font-bold text-brand-copper">
                      {perf.runs !== undefined
                        ? `${perf.runs}* (${perf.balls}b)`
                        : `${perf.wickets} Wkts (${perf.runsConceded}r)`}
                    </div>
                    <span className="text-xs text-muted">{perf.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
