import React from "react";
import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePartnersBehindSection } from "@/components/home/HomePartnersBehindSection";
import { HomeStoryShowcase } from "@/components/home/HomeStoryShowcase";
import { HomeHistoryTimelineStrip } from "@/components/home/HomeHistoryTimelineStrip";
// import { HomeAboutSection } from "@/components/home/HomeAboutSection"; // Hidden for now per user request
import { HomeCoachingSection } from "@/components/home/HomeCoachingSection";

export const metadata: Metadata = {
  title: "Devpur Cricket Club | Representing Devpur Gaam • Est. 2013",
  description:
    "Official website of Devpur Cricket Club (DCC). A community cricket club representing Devpur Gaam with 50+ members, regular Matunga Ground practice, match participation, and brotherhood.",
  openGraph: {
    title: "Devpur Cricket Club | Representing Devpur Gaam",
    description:
      "A community cricket club representing Devpur Gaam with 50+ members, regular Matunga Ground practice, match participation, and brotherhood.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 01 — Hero: Community-First Identity */}
      <HomeHero />

      {/* Section 01.5 — Partners Behind DCC (Directly after Hero) */}
      <HomePartnersBehindSection />
      {/* Section 02.5 — History Timeline Strip (Matching Exact UI Reference) */}
      <HomeHistoryTimelineStrip />

      {/* Section 02 — Our Story Showcase (Matching Exact UI Reference) */}
      <HomeStoryShowcase />

      

      {/* Previous Section 02 (Hidden for now):
          <HomeAboutSection />
      */}

      {/* Section 03 — Professional Coaching & Player Development Mandate */}
      <HomeCoachingSection />
    </div>
  );
}
