import React from "react";
import Link from "next/link";
import { Match } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";

interface CompletedMatchDetailProps {
  match: Match;
}

export function CompletedMatchDetail({ match }: CompletedMatchDetailProps) {

  return (
    <div className="py-8 sm:py-12 bg-background min-h-screen">
      <Container>
        <div className="mb-6">
          <Link
            href="/matches"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted hover:text-brand-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL FIXTURES</span>
          </Link>
        </div>

        <div className="rounded-3xl bg-surface border border-border shadow-md overflow-hidden p-6 sm:p-10 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-copper block mb-1">
                {match.tournament} • {match.matchType}
              </span>
              <h1 className="font-headline text-3xl sm:text-5xl font-black text-brand-black uppercase">
                DCC vs {match.opponent}
              </h1>
            </div>

            <div className="text-right">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-stone-900 text-stone-200">
                FINAL SCORECARD
              </span>
              <div className="text-xs font-mono text-muted mt-2">SEASON {match.season}</div>
            </div>
          </div>

          {/* Result Banner */}
          <div className="my-8 p-5 rounded-2xl bg-stone-900 text-white flex items-center justify-between border border-stone-800">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-brand-copper text-white font-mono text-xs font-bold uppercase tracking-widest">
                VERDICT
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">
                  Official Match Outcome
                </span>
                <span className="font-headline text-xl sm:text-2xl font-bold text-white">
                  {match.result}
                </span>
              </div>
            </div>
          </div>

          {/* Scores Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="p-6 rounded-2xl bg-surface-soft border border-border flex items-center justify-between">
              <div>
                <span className="font-headline text-2xl font-bold text-brand-black block">
                  Devpur Cricket Club
                </span>
                <span className="text-xs text-muted font-medium">
                  {match.dccOvers} Overs
                </span>
              </div>
              <div className="font-headline text-4xl sm:text-5xl font-extrabold text-brand-black">
                {match.dccScore}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-soft border border-border flex items-center justify-between">
              <div>
                <span className="font-headline text-2xl font-bold text-foreground-soft block">
                  {match.opponent}
                </span>
                <span className="text-xs text-muted font-medium">
                  {match.opponentOvers} Overs
                </span>
              </div>
              <div className="font-headline text-4xl sm:text-5xl font-bold text-foreground-soft">
                {match.opponentScore}
              </div>
            </div>
          </div>

          {/* Match Location & Time */}
          <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-6 text-xs text-muted font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-copper" />
              <span>{match.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-copper" />
              <span>{match.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-copper" />
              <span>{match.venue}</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
