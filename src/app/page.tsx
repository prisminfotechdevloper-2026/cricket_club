import React from "react";
import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeSponsorsSection } from "@/components/home/HomeSponsorsSection";

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

      {/* Sponsors Section (Desktop: Simple PNG Grid, Mobile: 3s Slider) */}
      <HomeSponsorsSection />
    </div>
  );
}
