"use client";

import React from "react";
import { TrainingSession } from "@/lib/types/content";
import { Coach } from "@/lib/types/cricket";
import { CricketHero } from "@/components/cricket/CricketHero";
import { CricketPhilosophyStory } from "@/components/cricket/CricketPhilosophyStory";
import { CricketPillarsDetailed } from "@/components/cricket/CricketPillarsDetailed";
 
interface ClubLifeViewProps {
  sessions?: TrainingSession[];
  coaches?: Coach[];
}

export function ClubLifeView({ sessions, coaches }: ClubLifeViewProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* Phase 1: Cricket Hero Section */}
      <CricketHero />

      {/* Phase 2: Cricket as a Medium of Connection & Community Ethos */}
      <CricketPhilosophyStory />

      {/* Phase 3: The 4 Practice Pillars Detailed (Emotion, Struggle & Consistency) */}
      <CricketPillarsDetailed />

      {/* Phase 4: Systematic Coaching & Player Development Flowchart */}
      
    </div>
  );
}
 