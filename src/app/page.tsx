import React from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { SponsorShowcaseSection } from "@/components/home/SponsorShowcaseSection";
import { TodayMatchSection } from "@/components/home/TodayMatchSection";
import { ClubIntroSection } from "@/components/home/ClubIntroSection";
import { ClubLifeSection } from "@/components/home/ClubLifeSection";
import { TournamentParticipationSection } from "@/components/home/TournamentParticipationSection";
import { FeaturedPlayersSection } from "@/components/home/FeaturedPlayersSection";
import { NextLevelStorySection } from "@/components/home/NextLevelStorySection";
import { WhyWePlaySection } from "@/components/home/WhyWePlaySection";
import { GalleryTeaserSection } from "@/components/home/GalleryTeaserSection";
import { CommunityMomentsSection } from "@/components/home/CommunityMomentsSection";
import { SeasonJourneySection } from "@/components/home/SeasonJourneySection";
import { ClubCTASection } from "@/components/home/ClubCTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Community Club Hero */}
      <HomeHero />

      {/* 2. Sponsor Visibility (PROUDLY SUPPORTED BY) */}
      <SponsorShowcaseSection />

      {/* 3. Today / Live / Next Match */}
      <TodayMatchSection />

      {/* 4. What DCC Is (From Net Practice to Match Day) */}
      <ClubIntroSection />

      {/* 5. Club Life (3-Day Nets & Practice Routines) */}
      <ClubLifeSection />

      {/* 6. Matches & Tournaments We Play */}
      <TournamentParticipationSection />

      {/* 7. Member Highlights & Progression */}
      <FeaturedPlayersSection />
      <NextLevelStorySection />

      {/* 8. Why Community Cricket Matters (Why Members Choose Club Life) */}
      <WhyWePlaySection />

      {/* 9. Season Memories & Community Moments */}
      <GalleryTeaserSection />
      <CommunityMomentsSection />

      {/* 10. Season Journey (Oct - Mar/May Annual Cycle) */}
      <SeasonJourneySection />

      {/* 11. Sponsors / Community Partnership CTA */}
      <ClubCTASection />
    </div>
  );
}
