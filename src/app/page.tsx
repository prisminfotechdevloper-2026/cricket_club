import React from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { TodayMatchSection } from "@/components/home/TodayMatchSection";
import { SponsorShowcaseSection } from "@/components/home/SponsorShowcaseSection";
import { WhyWePlaySection } from "@/components/home/WhyWePlaySection";
import { ClubLifeSection } from "@/components/home/ClubLifeSection";
import { SeasonJourneySection } from "@/components/home/SeasonJourneySection";
import { FeaturedPlayersSection } from "@/components/home/FeaturedPlayersSection";
import { NextLevelStorySection } from "@/components/home/NextLevelStorySection";
import { CommunityMomentsSection } from "@/components/home/CommunityMomentsSection";
import { GalleryTeaserSection } from "@/components/home/GalleryTeaserSection";
import { EditorialBlogSection } from "@/components/home/EditorialBlogSection";
import { ClubCTASection } from "@/components/home/ClubCTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero: Club + Community + Cricket First */}
      <HomeHero />

      {/* 2. Today's Match & Live Score Trigger */}
      <TodayMatchSection />

      {/* 3. Official Sponsor Showcase Strip */}
      <SponsorShowcaseSection />

      {/* 4. Why We Play Together (Community Benefits: Fitness, Discipline, Friendship, Community, Network, Growth) */}
      <WhyWePlaySection />

      {/* 5. Life Inside DCC (6 Club Activities) */}
      <ClubLifeSection />

      {/* 6. Season Journey (Oct - Mar/May Annual Cycle) */}
      <SeasonJourneySection />

      {/* 7. Featured Players & Squad */}
      <FeaturedPlayersSection />

      {/* 8. From DCC to the Next Level (Cricket Can Open Bigger Doors) */}
      <NextLevelStorySection />

      {/* 9. Beyond the Boundary (Social Gatherings, Weddings, Team Travel) */}
      <CommunityMomentsSection />

      {/* 10. Memories & Photo Archive */}
      <GalleryTeaserSection />

      {/* 11. Editorial Journal & Cricket Playbooks */}
      <EditorialBlogSection />

      {/* 12. Community CTA & Location */}
      <ClubCTASection />
    </div>
  );
}

