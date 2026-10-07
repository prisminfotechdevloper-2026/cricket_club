"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { TrainingSession, TrainingCategory } from "@/lib/types/content";
import { Coach } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import {
  Clock,
  User,
  MapPin,
  Play,
  X,
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

const emptySubscribe = () => () => {};
const useIsMounted = () => React.useSyncExternalStore(emptySubscribe, () => true, () => false);

export function ClubLifeView({ sessions, coaches }: ClubLifeViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<TrainingCategory>("all");
  const [selectedVideo, setSelectedVideo] = useState<TrainingSession | null>(null);
  const mounted = useIsMounted();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  // Keyboard navigation: Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    if (selectedVideo) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo]);

  const filteredSessions =
    selectedCategory === "all"
      ? sessions
      : sessions.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO BANNER: LIGHT THEME SPORTS LIFE & NETS ATMOSPHERE
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-900 border-b border-stone-200 py-12 sm:py-16 lg:py-20">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Typography & Mission */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E86016]/10 text-[#D45D0E] border border-[#E86016]/20 text-[11px] font-mono font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E86016] animate-pulse" />
                <span>DCC ATHLETIC &amp; CRICKET LIFE • MATUNGA GROUND</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[0.98]">
                Discipline in the Nets.
                <span className="bg-gradient-to-r from-[#D45D0E] via-[#F0761E] to-[#D49A44] bg-clip-text text-transparent block mt-1">
                  Brotherhood for Life.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                Devpur Cricket Club maintains a consistent 3-day weekly rhythm at Matunga Ground on turf and clay wickets.
                Structured practice under Head Coach Mr. Aditya Koli (Kanga B Division player) develops genuine match
                temperament, fitness, and lifelong community bonds.
              </p>

              {/* Action Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>SEASON 2026–27 ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-[#D45D0E]" />
                  <span>MON • WED • FRI 7:00 AM</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-[#D49A44]" />
                  <span>MATUNGA GROUND, MUMBAI</span>
                </div>
              </div>
            </div>

            {/* Right Column: Routine Card (Light Theme) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-7 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-l from-[#E86016] to-[#D45D0E] text-[10px] font-mono font-black uppercase tracking-wider rounded-bl-2xl text-white">
                  OFFICIAL NET PROTOCOL
                </div>

                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D45D0E] font-bold block mb-1">
                  ROUTINE SPECIFICATION
                </span>
                <h3 className="font-headline text-2xl font-bold text-stone-900 mb-4">
                  Weekly Practice Structure
                </h3>

                <div className="space-y-3 text-xs text-stone-700">
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#E86016]/15 text-[#D45D0E] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                      01
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Turf Net Practice (2 Hours)</p>
                      <p className="text-[11px] text-stone-500 mt-0.5">High-volume throwdowns, genuine leather-ball pace and spin variations.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#D49A44]/15 text-[#D49A44] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                      02
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Coach Aditya Koli Mentorship</p>
                      <p className="text-[11px] text-stone-500 mt-0.5">Tactical match simulations and technique refinement by Kanga B Div cricketer.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                      03
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Athletic Stamina &amp; Reflexes</p>
                      <p className="text-[11px] text-stone-500 mt-0.5">Dynamic slip catches, sprint intervals between wickets &amp; injury prevention.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 grid grid-cols-3 gap-2 text-center font-mono">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-bold">Weekly</span>
                    <span className="font-black text-base text-stone-900">3 Days</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-bold">Per Year</span>
                    <span className="font-black text-base text-[#D45D0E]">5–6 Mos</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-bold">Squad</span>
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
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
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
              <button
                type="button"
                className="relative aspect-video w-full bg-stone-900 overflow-hidden cursor-pointer block text-left group/btn"
                onClick={() => setSelectedVideo(session)}
                aria-label={`Play session video: ${session.title}`}
              >
                <Image
                  src={session.thumbnail}
                  alt={session.title}
                  fill
                  className="object-cover group-hover/btn:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/btn:bg-black/35 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg group-hover/btn:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/80 text-white font-mono text-[10px] font-bold">
                  {session.duration}
                </div>
              </button>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-copper">
                    {session.category.replace("-", " ")}
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

        {/* Coach Guidance Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-soft border border-border">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-copper">
              GUIDED BY EXPERIENCE
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-brand-black">
              Professional Mentorship &amp; Club Coaching
            </h3>
            <p className="text-xs sm:text-sm text-foreground-soft">
              Mr. Aditya Koli guides our 50+ members through match-scenario preparation, workload management, and technique refinement.
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
                    {c.role}
                  </span>
                  <span className="text-[11px] text-foreground-soft block mt-0.5">
                    {c.experience} • {c.coachingFocus.slice(0, 2).join(" • ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      </div>

      {/* Video Modal */}
      {mounted &&
        selectedVideo &&
        createPortal(
          <dialog
            open
            className="fixed inset-0 m-0 p-0 w-full h-full max-w-none max-h-none z-[120] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 border-0 text-inherit"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <button
              type="button"
              className="absolute inset-0 w-full h-full cursor-default bg-transparent -z-10"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video dialog backdrop"
            />
            <div
              className="relative w-full max-w-4xl bg-stone-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10"
            >
              <div className="p-4 bg-stone-900 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 id="video-modal-title" className="font-headline text-lg sm:text-xl font-bold text-white">
                    {selectedVideo.title}
                  </h3>
                  <span className="text-xs text-stone-400">
                    Coach: {selectedVideo.coachName} • {selectedVideo.duration}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Close video dialog"
                  className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                <Image
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  fill
                  className="object-cover opacity-60"
                  sizes="100vw"
                />
                <div className="relative z-10 text-center space-y-2 p-6">
                  <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center mx-auto shadow-xl">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                  <p className="text-white text-sm font-semibold">
                    Simulated Club Practice Video Clip
                  </p>
                  <p className="text-xs text-stone-400 max-w-md">
                    {selectedVideo.description}
                  </p>
                </div>
              </div>
            </div>
          </dialog>,
          document.body
        )}
    </div>
  );
}
