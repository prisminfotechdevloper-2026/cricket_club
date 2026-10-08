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
      {/* Section 01 — Hero: Community-First Identity */}
      <HomeHero />

      {/* Section 02 — Today / Next Match: Dynamic Match Center */}
      <TodayMatchSection />

      {/* Section 03 — What DCC Is: Short Explanation of the Club */}
      <ClubIntroSection />

      {/* Section 04 — Club Life: Practice + Fitness + Match Preparation + Social Connection */}
      <ClubLifeSection />

      {/* Section 05 — Our Members: People First, Stats Second */}
      <FeaturedPlayersSection />

      {/* Section 06 — Community Value: Why Members Choose Club Life */}
      <WhyWePlaySection />

      {/* Section 07 — Tournament Participation: External/Community Competitions DCC Plays In */}
      <TournamentParticipationSection />

      {/* Section 08 — Sponsors: Highly Visible Partner Showcase */}
      <SponsorShowcaseSection />

      {/* Section 09 — Season Memories: Visual Archive & Documentary Moments */}
      <GalleryTeaserSection />
      <CommunityMomentsSection />

      {/* Section 10 — Member Growth & Milestones: Achievements & Season Journey */}
      <NextLevelStorySection />
      <SeasonJourneySection />

      {/* Section 11 — Final Community CTA */}
      <ClubCTASection />
    </div>
  );
}
