"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Trophy, Users, Shield, Heart } from "lucide-react";
import {
  HistoryJourneyTimelineSection,
  HistoryRoadmapTab,
} from "./HistoryJourneyTimelineSection";
import { HistoryHero } from "./HistoryHero";
import { HistoryVisionSection } from "./HistoryVisionSection";
import { HistoryVisionMediumSection } from "./HistoryVisionMediumSection";
import { HistoryMilestonesSection } from "./HistoryMilestonesSection";
import { HistoryPresentMotiveSection } from "./HistoryPresentMotiveSection";
import { HomePartnersBehindSection } from "../home/HomePartnersBehindSection";
import { Container } from "../common/Container";

const TAB_ORDER: HistoryRoadmapTab[] = [
  "our-story",
  "our-vision",
  "milestones",
  "present-motive",
];

const TAB_META: Record<
  HistoryRoadmapTab,
  { label: string; number: string; nextLabel: string; prevLabel?: string }
> = {
  "our-story": {
    label: "Our Story",
    number: "1",
    nextLabel: "2 – Our Vision",
  },
  "our-vision": {
    label: "Our Vision",
    number: "2",
    prevLabel: "1 – Our Story",
    nextLabel: "3 – Milestones",
  },
  "milestones": {
    label: "Milestones",
    number: "3",
    prevLabel: "2 – Our Vision",
    nextLabel: "4 – Present Motive",
  },
  "present-motive": {
    label: "Present Motive",
    number: "4",
    prevLabel: "3 – Milestones",
    nextLabel: "Explore Matches & Squad",
  },
};

export function ClubHistoryView() {
  const [activeTab, setActiveTab] = useState<HistoryRoadmapTab>("our-story");

  // Sync with URL query param or hash if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const queryTab = urlParams.get("tab") as HistoryRoadmapTab | null;
      const hash = window.location.hash.replace("#", "") as HistoryRoadmapTab;

      if (queryTab && TAB_ORDER.includes(queryTab)) {
        setActiveTab(queryTab);
      } else if (hash && TAB_ORDER.includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, []);

  const handleSelectTab = (tab: HistoryRoadmapTab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      // Update browser URL hash without jump
      window.history.replaceState(null, "", `#${tab}`);
      const contentEl = document.getElementById("roadmap-active-content");
      if (contentEl) {
        contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const currentIndex = TAB_ORDER.indexOf(activeTab);
  const prevTab = currentIndex > 0 ? TAB_ORDER[currentIndex - 1] : null;
  const nextTab =
    currentIndex < TAB_ORDER.length - 1 ? TAB_ORDER[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* =========================================================================
          01. THE JOURNEY ROADMAP (Interactive Pointers at TOP of History Page)
          ========================================================================= */}
      <HistoryJourneyTimelineSection
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Anchor for smooth scroll when pointers are clicked */}
      <div id="roadmap-active-content" className="scroll-mt-16" />

      {/* =========================================================================
          02. DYNAMIC CONTENT AREA ACCORDING TO SELECTED POINTER
          ========================================================================= */}
      <div className="transition-opacity duration-300">
        {/* POINTER 1: OUR STORY (Single Unified Story Component) */}
        {activeTab === "our-story" && (
          <div className="animate-in fade-in duration-300">
            <HistoryHero />
          </div>
        )}

        {/* POINTER 2: OUR VISION (A Vision Beyond the Game + 6 Community Medium Cards) */}
        {activeTab === "our-vision" && (
          <div className="animate-in fade-in duration-300">
            <HistoryVisionSection />
            <HistoryVisionMediumSection />
          </div>
        )}

        {/* POINTER 3: MILESTONES (Silverware, 5x Finalists & Santneet Cup Glory) */}
        {activeTab === "milestones" && (
          <div className="animate-in fade-in duration-300">
            <HistoryMilestonesSection />
          </div>
        )}

        {/* POINTER 4: PRESENT MOTIVE (5 Times Runners-Up -> Win Champion Trophy) */}
        {activeTab === "present-motive" && (
          <div className="animate-in fade-in duration-300">
            <HistoryPresentMotiveSection />
          </div>
        )}
      </div>

      {/* =========================================================================
          03. ROADMAP STEPPER NAVIGATION (Next / Previous pointer guide)
          ========================================================================= */}
      <section className="bg-[#FAF7F2] py-6 sm:py-7 border-b border-[#EAE3D6]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Previous Pointer */}
            <div>
              {prevTab ? (
                <button
                  type="button"
                  onClick={() => handleSelectTab(prevTab)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-stone-50 border border-[#EAE3D6] text-stone-700 text-xs sm:text-sm font-semibold shadow-2xs transition-all active:scale-95 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-[#f39a3b]" />
                  <span>Previous: {TAB_META[prevTab].label}</span>
                </button>
              ) : (
                <span className="text-xs text-stone-400 font-mono hidden sm:inline">
                  Step 1 of 4 • Our Beginning
                </span>
              )}
            </div>

            {/* Current Step Indicator */}
            <div className="flex items-center gap-2">
              {TAB_ORDER.map((t, idx) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleSelectTab(t)}
                  aria-label={`Jump to ${TAB_META[t].label}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTab === t
                      ? "w-8 bg-[#f39a3b]"
                      : "w-2 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>

            {/* Next Pointer */}
            <div>
              {nextTab ? (
                <button
                  type="button"
                  onClick={() => handleSelectTab(nextTab)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f39a3b] hover:bg-[#f39a3b] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <span>Next: {TAB_META[nextTab].label}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  href="/players"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0F172A] hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <span>Explore DCC Squad</span>
                  <ArrowRight className="w-4 h-4 text-[#f39a3b]" />
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          04. PARTNERS BEHIND DCC (Sponsors Section — Always Present)
          ========================================================================= */}
      <HomePartnersBehindSection />

      {/* =========================================================================
          05. BANK DETAILS FOR CONTRIBUTION (Always Present)
          ========================================================================= */}
       
    </div>
  );
}
