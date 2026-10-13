"use client";

import React from "react";
import { HistoryHero } from "./HistoryHero";
import { HistoryConversationSection } from "./HistoryConversationSection";
import { HistoryVisionSection } from "./HistoryVisionSection";
import { HistoryVisionMediumSection } from "./HistoryVisionMediumSection";
import { HistoryJourneyTimelineSection } from "./HistoryJourneyTimelineSection";
import { HomePartnersBehindSection } from "../home/HomePartnersBehindSection";

export function ClubHistoryView() {
  return (
    <div className="min-h-screen bg-background">
      {/* 01. History Hero Section (Matching UI Reference) */}
      <HistoryHero />

      {/* 02. The Journey Timeline Section (Dark Black Theme) */}
      <HistoryJourneyTimelineSection />

      {/* 03. The Conversation Section (Matching UI Reference) */}
      <HistoryConversationSection />

      {/* 04. A Vision Beyond the Game Section (Matching UI Reference) */}
      <HistoryVisionSection />

      {/* 05. Our Vision: Cricket as Our Medium Section (Dark Theme with 6 Cards & Visible Stadium Bg) */}
      <HistoryVisionMediumSection />

      {/* 06. Partners Behind DCC (Sponsors Section) */}
      <HomePartnersBehindSection />
    </div>
  );
}
