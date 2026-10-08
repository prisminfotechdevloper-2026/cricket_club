"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TrainingSession, TrainingCategory } from "@/lib/types/content";
import { Coach } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import {
  Clock,
  User,
  MapPin,
  Calendar,
} from "lucide-react";

interface ClubLifeViewProps {
  sessions: TrainingSession[];
  coaches: Coach[];
}

const CATEGORIES: { id: TrainingCategory; label: string }[] = [
  { id: "all", label: "All Activities" },
  { id: "net-practice", label: "Net Practice" },
  { id: "batting", label: "Batting Drills" },
  { id: "bowling", label: "Pace & Spin" },
  { id: "fielding", label: "Fielding Reflexes" },
  { id: "fitness", label: "Fitness & Conditioning" },
  { id: "match-prep", label: "Match Scenarios" },
];

export function ClubLifeView({ sessions, coaches }: ClubLifeViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<TrainingCategory>("all");

  const filteredSessions =
    selectedCategory === "all"
      ? sessions
      : sessions.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO BANNER: CLUB LIFE & PRACTICE RHYTHM
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-900 border-b border-stone-200 py-12 sm:py-16 lg:py-20">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Typography & Mission */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA6E18]/10 text-[#EA6E18] border border-[#EA6E18]/20 text-[11px] font-mono font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA6E18] animate-pulse" />
                <span>DEVPUR CRICKET CLUB // PRACTICE &amp; BROTHERHOOD</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[0.98]">
                CLUB LIFE
                <span className="bg-gradient-to-r from-[#E66212] via-[#EA6E18] to-[#F89928] bg-clip-text text-transparent block mt-1.5 text-2xl sm:text-4xl lg:text-5xl font-extrabold">
                  Practice Together. Play Together. Stay Connected.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                Across the season, our members come together for regular net practice, fitness, coaching support, practice matches and the social life that grows around the game.
              </p>

              {/* Action Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>SEASON 2026–27 ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-[#EA6E18]" />
                  <span>MON • WED • FRI ~2 HOURS</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-[#F89928]" />
                  <span>MATUNGA GROUND, MUMBAI</span>
                </div>
              </div>
            </div>

            {/* Right Column: Routine Card (Light Theme) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-7 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-l from-[#EA6E18] to-[#C2520E] text-[10px] font-mono font-black uppercase tracking-wider rounded-bl-2xl text-white">
                  PRACTICE RHYTHM
                </div>

                <span className="text-[11px] font-mono uppercase tracking-widest text-[#EA6E18] font-bold block mb-1">
                  WEEKLY PRACTICE STRUCTURE
                </span>
                <h3 className="font-headline text-2xl font-bold text-stone-900 mb-4">
                  Practice Routine
                </h3>

                <div className="space-y-3 text-xs text-stone-700">
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#EA6E18]/15 text-[#EA6E18] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                      01
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Turf Net Practice (~2 Hours)</p>
                      <p className="text-[11px] text-stone-500 mt-0.5">Mon • Wed • Fri regular turf &amp; clay net sessions at Matunga Ground.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#F89928]/15 text-[#F89928] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                      02
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Weekend Practice Matches</p>
                      <p className="text-[11px] text-stone-500 mt-0.5">Practice is taken into match situations through regular weekend fixtures, helping members apply what they work on during the week.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                      03
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Professional Coaching Support</p>
                      <p className="text-[11px] text-stone-500 mt-0.5">Hands-on technique refinement and match scenarios under Mr. Aditya Koli (Kanga B Division Player).</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 grid grid-cols-3 gap-2 text-center font-mono">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-bold">Rhythm</span>
                    <span className="font-black text-base text-stone-900">Mon-Wed-Fri</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-bold">Session</span>
                    <span className="font-black text-base text-[#EA6E18]">~2 Hours</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-bold">Community</span>
                    <span className="font-black text-base text-stone-900">50+ Men</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="py-10 sm:py-14">
        <Container>

        {/* Activity Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-brand-orange text-white shadow-xs"
                  : "bg-surface border border-border text-foreground-soft hover:text-brand-black hover:border-brand-copper/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Session Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="group bg-surface rounded-2xl border border-border overflow-hidden hover:border-brand-copper/60 hover:shadow-md transition-[border-color,box-shadow] flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full bg-stone-900 overflow-hidden">
                <Image
                  src={session.thumbnail}
                  alt={session.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-xs text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  {session.category.replace("-", " ")}
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/80 text-white font-mono text-[10px] font-bold">
                  {session.duration}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-copper">
                    {session.time || "Mon • Wed • Fri"}
                  </span>
                  <h4 className="font-headline text-lg sm:text-xl font-bold text-brand-black group-hover:text-brand-orange transition-colors">
                    {session.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground-soft line-clamp-2">
                    {session.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-foreground-soft">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-copper" />
                    <span>{session.coachName}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-muted" />
                    <span>{session.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white border border-stone-800 relative overflow-hidden shadow-lg">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#EA6E18]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA6E18]/20 text-[#EA6E18] border border-[#EA6E18]/30 font-mono text-[10px] font-bold uppercase tracking-wider">
                <Calendar className="w-3 h-3" />
                <span>WEEKEND FIXTURES</span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-black text-white">
                Weekend Practice Matches
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Practice is taken into match situations through regular weekend fixtures, helping members apply what they work on during the week in real match environments.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-3 rounded-2xl bg-stone-800/80 border border-stone-700/80 text-center font-mono">
                <span className="text-[10px] text-stone-400 uppercase block font-bold">Rhythm</span>
                <span className="font-bold text-sm text-[#F89928]">Every Weekend</span>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-stone-800/80 border border-stone-700/80 text-center font-mono">
                <span className="text-[10px] text-stone-400 uppercase block font-bold">Setting</span>
                <span className="font-bold text-sm text-white">Match Situations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coach Guidance Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-soft border border-border">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-copper">
              PROFESSIONAL COACHING SUPPORT
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-brand-black">
              Professional Coaching Support
            </h3>
            <p className="text-xs sm:text-sm text-foreground-soft">
              Coaching is one part of the DCC seasonal routine — helping members improve cricket skills, fitness and match readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((c) => (
              <div key={c.id} className="p-6 rounded-2xl bg-surface border border-border flex gap-4 items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-stone-200 shrink-0 border-2 border-brand-copper/30">
                  <Image src={c.photo} alt={c.name} fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold text-brand-black">
                    {c.name}
                  </h4>
                  <span className="text-xs font-semibold text-brand-copper block">
                    {c.role} • {c.experience}
                  </span>
                  <span className="text-[11px] text-foreground-soft block mt-0.5">
                    {c.coachingFocus.join(" • ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
}
