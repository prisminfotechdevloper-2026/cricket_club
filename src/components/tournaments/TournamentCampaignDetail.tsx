import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tournament } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface TournamentCampaignDetailProps {
  tournament: Tournament;
}

export function TournamentCampaignDetail({
  tournament,
}: TournamentCampaignDetailProps) {
  return (
    <div className="py-8 sm:py-14 bg-background min-h-screen">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/tournaments"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-brand-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Tournaments Archive</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl bg-surface border border-border shadow-md overflow-hidden mb-8">
          <div className="relative aspect-[21/9] w-full min-h-[220px] bg-stone-200">
            <Image
              src={tournament.coverImage}
              alt={tournament.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-brand-orange text-brand-black">
                  {tournament.finishStage}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-peach">
                  Season {tournament.season}
                </span>
              </div>
              <h1 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight">
                {tournament.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-300">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  {tournament.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                  {tournament.dates}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm sm:text-base text-foreground-soft leading-relaxed max-w-3xl">
              {tournament.summary}
            </p>

            {/* Campaign Summary Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-2">
              <div className="p-4 rounded-2xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Matches Played
                </span>
                <span className="font-headline text-3xl font-bold text-brand-black">
                  {tournament.matchesPlayed}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Matches Won
                </span>
                <span className="font-headline text-3xl font-bold text-brand-copper">
                  {tournament.wins}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Losses
                </span>
                <span className="font-headline text-3xl font-bold text-brand-black">
                  {tournament.losses}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-soft border border-border/80">
                <span className="text-[10px] uppercase font-bold text-muted block">
                  Top Performer
                </span>
                <span className="font-headline text-xl font-bold text-brand-copper truncate block">
                  {tournament.topPerformer.playerName}
                </span>
                <span className="text-[10px] text-muted block">
                  {tournament.topPerformer.stat}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Club Campaign Fixtures */}
        <div className="rounded-3xl bg-surface border border-border shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <h2 className="font-headline text-2xl font-bold text-brand-black uppercase">
                Club Campaign Fixtures
              </h2>
            </div>
            <span className="text-xs font-mono text-muted font-semibold">
              {tournament.featuredMatches.length} Recorded Matches
            </span>
          </div>

          {tournament.featuredMatches.length === 0 ? (
            <p className="text-sm text-muted py-6 text-center">
              Scheduled fixtures will appear as tournament organizers finalize timetable.
            </p>
          ) : (
            <div className="space-y-4">
              {tournament.featuredMatches.map((m) => (
                <div
                  key={m.id}
                  className="p-5 rounded-2xl bg-surface-soft border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-headline text-xl font-bold text-brand-black">
                        DCC vs {m.opponent}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-extrabold px-2 py-0.5 rounded ${
                          m.status === "live"
                            ? "bg-red-100 text-red-800"
                            : m.status === "completed"
                            ? "bg-brand-copper/10 text-brand-copper"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {m.status}
                      </span>
                    </div>

                    <div className="text-xs text-muted flex items-center gap-2">
                      <span>{m.date}</span>
                      <span>•</span>
                      <span>{m.matchType}</span>
                    </div>

                    {m.result && (
                      <div className="text-xs font-mono font-bold text-brand-copper pt-0.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-copper shrink-0" />
                        <span>{m.result}</span>
                      </div>
                    )}
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    <div className="font-headline text-2xl font-bold text-brand-black">
                      {m.dccScore || "—"} vs {m.opponentScore || "—"}
                    </div>
                    <Link
                      href={`/matches/${m.slug}`}
                      className="mt-1 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-copper hover:underline"
                    >
                      <span>View Match Center</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
