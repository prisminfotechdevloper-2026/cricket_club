import React from "react";
import Link from "next/link";
import { Match } from "@/lib/types/cricket";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

interface UpcomingMatchCardProps {
  match: Match;
}

export function UpcomingMatchCard({ match }: UpcomingMatchCardProps) {
  return (
    <div className="rounded-2xl bg-surface border border-border p-5 sm:p-6 shadow-sm hover:border-brand-copper/50 transition-[border-color] flex flex-col justify-between">
      <div className="space-y-4">
        {/* Tournament & Tag */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-copper">
            {match.tournament}
          </span>
          <span className="text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
            NEXT FIXTURE
          </span>
        </div>

        {/* Teams Matchup */}
        <div className="py-2">
          <div className="font-headline text-2xl sm:text-3xl font-bold text-brand-black flex items-center gap-2">
            <span>DCC</span>
            <span className="text-sm font-normal text-muted">vs</span>
            <span className="text-foreground-soft">{match.opponent}</span>
          </div>
          <span className="text-xs text-muted font-medium mt-1 block">
            {match.matchType} • Season {match.season}
          </span>
        </div>

        {/* Date & Location */}
        <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs text-foreground-soft font-medium">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-brand-copper shrink-0" />
            <span>{match.date}</span>
            <span className="text-stone-300">•</span>
            <Clock className="w-3.5 h-3.5 text-brand-copper shrink-0" />
            <span>{match.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-brand-copper shrink-0" />
            <span>{match.venue}</span>
          </div>
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-border/60">
        <Link
          href="/matches"
          className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-brand-black hover:text-brand-copper transition-colors group"
        >
          <span>Match Preview & Squad</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
