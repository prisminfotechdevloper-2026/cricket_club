import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tournament } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { MapPin, Calendar, ArrowRight, Trophy, Shield } from "lucide-react";

interface TournamentsDirectoryProps {
  tournaments: Tournament[];
}

export function TournamentsDirectory({ tournaments }: TournamentsDirectoryProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO BANNER: LIGHT THEME TOURNAMENT CAMPAIGN ATMOSPHERE
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-900 border-b border-stone-200 py-12 sm:py-16 lg:py-20">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Tournament Campaign Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0A04B]/10 text-[#F0A04B] border border-[#C16A35]/20 text-[11px] font-mono font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0A04B] animate-pulse" />
                <span>COMMUNITY PARTICIPATION // KVO &amp; VILLAGE CUPS</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[0.98]">
                TOURNAMENTS WE PLAY
                <span className="bg-gradient-to-r from-[#F0A04B] via-[#F0A04B] to-[#D7833D] bg-clip-text text-transparent block mt-1">
                  Our Competitive Journey.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                DCC participates in community cricket competitions and represents Devpur Gaam when we take the field.
              </p>

              {/* Action Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Trophy className="w-3.5 h-3.5 text-[#F0A04B]" />
                  <span>2× RUNNERS-UP SILVERWARE</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>RANK #10 KVO CIRCUIT</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-[#EAA05E]" />
                  <span>25+ ANNUAL FIXTURES</span>
                </div>
              </div>
            </div>

            {/* Right Column: Telemetry Cards (Light Theme) */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#F0A04B] tracking-wider block">
                    CIRCUIT RANK
                  </span>
                  <span className="font-headline text-2xl font-black text-stone-900 block">
                    Top #10
                  </span>
                  <span className="text-[11px] text-stone-500 font-body block">
                    KVO Cricket Standings
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#F0A04B] tracking-wider block">
                    SILVERWARE
                  </span>
                  <span className="font-headline text-2xl font-black text-stone-900 block">
                    2× Finals
                  </span>
                  <span className="text-[11px] text-stone-500 font-body block">
                    Community Cup Podium
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#F0A04B] tracking-wider block">
                    MATCHES
                  </span>
                  <span className="font-headline text-2xl font-black text-[#F0A04B] block">
                    25+ / Yr
                  </span>
                  <span className="text-[11px] text-stone-500 font-body block">
                    Leather-Ball Pressure
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider block">
                    DEVELOPMENT
                  </span>
                  <span className="font-headline text-2xl font-black text-stone-900 block">
                    Kanga B
                  </span>
                  <span className="text-[11px] text-stone-500 font-body block">
                    Aditya Koli Mentorship
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="py-10 sm:py-14">
        <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tournaments.map((tour) => (
            <div
              key={tour.id}
              className="group rounded-3xl bg-surface border border-border overflow-hidden sports-card flex flex-col justify-between"
            >
              {/* Cover Banner */}
              <div className="relative aspect-[16/9] w-full bg-stone-200 overflow-hidden">
                <Image
                  src={tour.coverImage}
                  alt={tour.name}
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm border border-white/10">
                    {tour.season}
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-brand-orange text-brand-black">
                    {tour.finishStage}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-headline text-3xl font-bold leading-tight !text-white text-white drop-shadow-sm group-hover:text-brand-orange transition-colors">
                    {tour.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-300 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    <span>{tour.location}</span>
                  </div>
                </div>
              </div>

              {/* Tournament Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                    {tour.summary}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted font-medium pt-1">
                    <Calendar className="w-4 h-4 text-brand-copper" />
                    <span>{tour.dates}</span>
                    <span>•</span>
                    <span>Organized by {tour.organizer}</span>
                  </div>
                </div>

                {/* Campaign Record & Top Performer */}
                <div className="pt-4 border-t border-border/80 space-y-4">
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-surface-soft border border-border/80 text-center">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-muted block tracking-wider">
                        Campaign Record
                      </span>
                      <span className="font-headline text-2xl font-bold text-brand-black">
                        {tour.wins} Wins / {tour.losses} Loss
                      </span>
                      <span className="text-[11px] text-muted block mt-0.5">
                        {tour.matchesPlayed} Matches Played
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-muted block tracking-wider">
                        Top Performer
                      </span>
                      <span className="font-headline text-xl font-bold text-brand-copper truncate block">
                        {tour.topPerformer.playerName}
                      </span>
                      <span className="text-[11px] text-muted block mt-0.5">
                        {tour.topPerformer.stat}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/tournaments/${tour.slug}`}
                    className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-surface-soft hover:bg-stone-100 border border-border text-xs font-bold uppercase tracking-wider text-brand-black transition-colors"
                  >
                    <span>View Campaign Matches &amp; Details</span>
                    <ArrowRight className="w-4 h-4 text-brand-copper" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      </div>
    </div>
  );
}
