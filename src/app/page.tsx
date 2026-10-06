import React from "react";
import { Container } from "@/components/common/Container";
import { HomeHero } from "@/components/home/HomeHero";
import { SeasonStatsStrip } from "@/components/home/SeasonStatsStrip";
import { LiveMatchCard } from "@/components/matches/LiveMatchCard";
import { UpcomingMatchCard } from "@/components/matches/UpcomingMatchCard";
import { ClubIntroSection } from "@/components/home/ClubIntroSection";
import { TrainingTeaserSection } from "@/components/home/TrainingTeaserSection";
import { FeaturedPlayersSection } from "@/components/home/FeaturedPlayersSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { TournamentParticipationSection } from "@/components/home/TournamentParticipationSection";
import { GalleryTeaserSection } from "@/components/home/GalleryTeaserSection";
import { CoachesSection } from "@/components/home/CoachesSection";
import { ClubCTASection } from "@/components/home/ClubCTASection";
import { matches } from "@/lib/data/matches";

export default function HomePage() {
  const liveMatch = matches.find((m) => m.status === "live") || matches[0];
  const upcomingMatch = matches.find((m) => m.status === "upcoming") || matches[1];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2 & 3. Today's Live Match & Next Match Hub */}
      <section className="py-10 sm:py-14 border-b border-border/80 bg-background">
        <Container>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Matchday Center 
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-brand-black tracking-tight leading-none">
                Today&apos;s Match &amp; Upcoming Action
              </h2>
            </div>
            <div className="text-xs text-muted font-medium">
              Live score simulated from Devpur Cricket Ground
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Primary: Live Match Card (8 Cols on Desktop) */}
            <div className="lg:col-span-8">
              <LiveMatchCard match={liveMatch} />
            </div>

            {/* Secondary: Next Match Card (4 Cols on Desktop) */}
            <div className="lg:col-span-4 h-full flex flex-col justify-between">
              <UpcomingMatchCard match={upcomingMatch} />
            </div>  
          </div>
        </Container>
      </section>

      {/* 4. Season Statistics Strip */}
      <SeasonStatsStrip />

      {/* 5. Club Introduction & Annual Cycle */}
      <ClubIntroSection />

      {/* 6. Training & Player Development */}
      <TrainingTeaserSection />

      {/* 7. Featured Players */}
      <FeaturedPlayersSection />

      {/* 8. Current Season Highlights */}
      <HighlightsSection />

      {/* 9. Tournament Participation Archive Preview */}
      <TournamentParticipationSection />

      {/* 10. Latest Memories / Photo Gallery */}
      <GalleryTeaserSection />

      {/* 11. Coaches Spotlight */}
      <CoachesSection />

      {/* 12. Join Club / Contact CTA */}
      <ClubCTASection />
    </div>
  );
}
