import React from "react";
import Link from "next/link";
import { Match } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { Calendar, Clock, MapPin, ArrowLeft, Trophy, CheckCircle2 } from "lucide-react";

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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-brand-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Matches</span>
          </Link>
        </div>

        <div className="rounded-3xl bg-surface border border-border shadow-md overflow-hidden p-6 sm:p-10 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-copper block mb-1">
                {match.tournament} • {match.matchType}
              </span>
              <h1 className="font-headline text-3xl sm:text-5xl font-bold text-brand-black">
                DCC vs {match.opponent}
              </h1>
            </div>

            <div className="text-right">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-stone-100 text-stone-800">
                Match Completed
              </span>
              <div className="text-xs text-muted mt-2">Season {match.season}</div>
            </div>
          </div>

          {/* Result Banner */}
          <div className="my-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                  Final Result
                </span>
                <span className="font-headline text-2xl font-bold text-emerald-950">
                  {match.result}
                </span>
              </div>
            </div>

            <CheckCircle2 className="w-6 h-6 text-emerald-600 hidden sm:block" />
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
