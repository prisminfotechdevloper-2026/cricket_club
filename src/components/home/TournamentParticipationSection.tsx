import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { tournaments } from "@/lib/data/tournaments";
import { MapPin, ArrowRight } from "lucide-react";

export function TournamentParticipationSection() {
  const activeTournaments = tournaments.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
      <Container>
        <SectionHeading
          eyebrow="Tournament Participation"
          title="Tournaments We Play"
          description="DCC participates in community cricket competitions and represents Devpur Gaam when we take the field."
          actionText="View Tournaments"
          actionHref="/tournaments"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {activeTournaments.map((tour) => (
            <div
              key={tour.id}
              className="group rounded-3xl bg-surface border border-border overflow-hidden sports-card flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/9] w-full bg-stone-200 overflow-hidden">
                <Image
                  src={tour.coverImage}
                  alt={tour.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-headline text-lg font-bold">
                    {tour.season}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-md font-semibold text-[11px]">
                    {tour.finishStage}
                  </span>
                </div>
              </div>

              {/* Tournament Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <MapPin className="w-3.5 h-3.5 text-brand-copper" />
                    <span className="line-clamp-1">{tour.location}</span>
                  </div>

                  <h3 className="font-headline text-2xl font-bold text-brand-black group-hover:text-brand-copper transition-colors">
                    {tour.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground-soft line-clamp-2 leading-relaxed">
                    {tour.summary}
                  </p>
                </div>

                {/* Match Record Stat Box */}
                <div className="pt-2 border-t border-border/80 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-center text-xs p-2.5 rounded-xl bg-surface-soft border border-border/80">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-muted block">
                        Record
                      </span>
                      <span className="font-headline text-base font-bold text-brand-black">
                        {tour.wins}W – {tour.losses}L
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-muted block">
                        Top Performer
                      </span>
                      <span className="font-bold text-brand-copper truncate block">
                        {tour.topPerformer.playerName}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/tournaments/${tour.slug}`}
                    className="inline-flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-surface-soft hover:bg-stone-100 text-xs font-bold uppercase tracking-wider text-brand-black transition-colors"
                  >
                    <span>View Campaign Matches</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-copper" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
