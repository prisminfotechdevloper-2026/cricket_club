import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tournament } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

interface TournamentsDirectoryProps {
  tournaments: Tournament[];
}

export function TournamentsDirectory({ tournaments }: TournamentsDirectoryProps) {
  return (
    <div className="py-10 sm:py-16 bg-background min-h-screen">
      <Container>
        <SectionHeading
          eyebrow="Competitions"
          title="Tournaments & External Participation"
          description="Devpur Cricket Club participates in premier regional and state-level cricket championships across Rajasthan. Explore our competitive campaigns, match records, and top player honors."
        />

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
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm border border-white/10">
                    {tour.season}
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-brand-orange text-brand-black">
                    {tour.finishStage}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-headline text-3xl font-bold leading-tight group-hover:text-brand-orange transition-colors">
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
  );
}
