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
  ShieldCheck,
  X,
} from "lucide-react";

interface TrainingHubProps {
  sessions: TrainingSession[];
  coaches: Coach[];
}

const CATEGORIES: { id: TrainingCategory; label: string }[] = [
  { id: "all", label: "All Sessions" },
  { id: "net-practice", label: "Net Practice" },
  { id: "batting", label: "Batting Drills" },
  { id: "bowling", label: "Pace & Spin" },
  { id: "fielding", label: "Fielding Reflexes" },
  { id: "fitness", label: "Fitness & Conditioning" },
  { id: "match-prep", label: "Match Scenarios" },
];

const emptySubscribe = () => () => {};
const useIsMounted = () => React.useSyncExternalStore(emptySubscribe, () => true, () => false);

export function TrainingHub({ sessions, coaches }: TrainingHubProps) {
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
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedVideo]);

  const filteredSessions = sessions.filter((s) => {
    if (selectedCategory === "all") return true;
    return s.category === selectedCategory;
  });

  return (
    <div className="py-10 sm:py-16 bg-background min-h-screen">
      <Container>
        {/* Page Heading */}
        <SectionHeading
          eyebrow="Development Syllabus"
          title="Training & Player Development"
          description="Preparation happens long before match day. Devpur Cricket Club provides an accredited coaching syllabus on professional turf pitches, developing technique, mental discipline, and athletic conditioning."
        />

        {/* Category Filters */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-brand-charcoal text-white shadow-xs"
                  : "bg-surface text-foreground-soft border border-border hover:bg-stone-50 hover:text-brand-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Training Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="group rounded-3xl bg-surface border border-border overflow-hidden sports-card flex flex-col justify-between"
            >
              {/* Thumbnail with interactive Play trigger */}
              <div
                role="button"
                tabIndex={0}
                aria-label={`Watch video demonstration: ${session.title}`}
                onClick={() => setSelectedVideo(session)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedVideo(session);
                  }
                }}
                className="relative aspect-video w-full bg-stone-200 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-copper"
              >
                <Image
                  src={session.thumbnail}
                  alt={session.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-brand-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 ml-0.5 fill-current text-brand-black" />
                  </div>
                </div>

                {/* Duration Badge */}
                {session.videoDuration && (
                  <div className="absolute bottom-3 right-3 text-[11px] font-bold text-white bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded">
                    {session.videoDuration}
                  </div>
                )}

                {/* Category Tag */}
                <div className="absolute top-3 left-3 text-[10px] uppercase font-extrabold tracking-wider bg-white/90 text-brand-black backdrop-blur-md px-2.5 py-1 rounded-md">
                  {session.category}
                </div>
              </div>

              {/* Session Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                    <span className="flex items-center gap-1 font-semibold text-brand-black">
                      <User className="w-3.5 h-3.5 text-brand-copper" />
                      {session.coachName}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-copper" />
                      {session.duration}
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl font-bold text-brand-black leading-snug group-hover:text-brand-copper transition-colors">
                    {session.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed line-clamp-2">
                    {session.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-muted pt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                    <span className="truncate">{session.location}</span>
                  </div>
                </div>

                {/* Key Focus Tags & Watch Button */}
                <div className="pt-3 border-t border-border/80 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {session.keyFocus.map((focus, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-surface-soft text-stone-700 border border-border"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedVideo(session)}
                    className="w-full py-2.5 px-4 rounded-xl bg-surface-soft hover:bg-stone-100 border border-border text-xs font-bold uppercase tracking-wider text-brand-black flex items-center justify-center gap-2 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 text-brand-copper" />
                    <span>Watch Training Breakdown</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Preview Modal */}
        {mounted &&
          selectedVideo &&
          createPortal(
            <div
              className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-200"
              onClick={() => setSelectedVideo(null)}
              role="dialog"
              aria-modal="true"
              aria-label={selectedVideo.title}
            >
              <div
                className="bg-surface rounded-t-[28px] sm:rounded-3xl max-w-3xl w-full border border-border shadow-2xl relative max-h-[92dvh] sm:max-h-[90vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Drag Indicator Pill */}
                <div className="w-12 h-1 rounded-full bg-stone-300 mx-auto mt-2.5 mb-1 sm:hidden shrink-0" />

                {/* Sticky Modal Top Bar */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border bg-surface shrink-0">
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-copper bg-brand-copper/10 px-2.5 py-1 rounded-md shrink-0">
                      {selectedVideo.category}
                    </span>
                    <span className="text-xs font-medium text-muted truncate">
                      {selectedVideo.duration} • Video: {selectedVideo.videoDuration}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-brand-black transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-copper"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Scrollable Modal Content */}
                <div className="overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-4 sm:space-y-5">
                  {/* YouTube Responsive Video Player */}
                  <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-lg ring-1 ring-black/10 shrink-0">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId || "v3soFH5Jn68"}?autoplay=1&rel=0&modestbranding=1`}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0 absolute inset-0"
                    />
                  </div>

                  {/* Video Info & Drill Syllabus */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-brand-black leading-tight">
                        {selectedVideo.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground-soft mt-2 leading-relaxed">
                        {selectedVideo.description}
                      </p>
                    </div>

                    {/* Coach Supervision Card */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-soft border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-charcoal text-white flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                          DCC
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs sm:text-sm font-bold text-brand-black block truncate">
                            Supervised by {selectedVideo.coachName}
                          </span>
                          <span className="text-[11px] sm:text-xs text-muted block truncate">
                            {selectedVideo.coachRole} • {selectedVideo.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] sm:text-xs font-semibold text-brand-copper bg-brand-copper/10 px-2.5 py-1 rounded-lg">
                          {selectedVideo.attendeesCount} Registered Athletes
                        </span>
                      </div>
                    </div>

                    {/* Key Coaching Principles */}
                    <div className="pt-1">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-muted block mb-2">
                        Core Technical Focus in this Session
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedVideo.keyFocus.map((focus, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1 rounded-lg bg-surface text-stone-800 border border-border flex items-center gap-1.5"
                          >
                            <span className="text-brand-copper font-bold">✓</span>
                            <span>{focus}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button for effortless mobile dismissal */}
                    <div className="pt-2 pb-2 sm:pb-0">
                      <button
                        onClick={() => setSelectedVideo(null)}
                        className="w-full py-3 px-4 rounded-xl bg-brand-charcoal hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
                      >
                        Close Video Breakdown
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}

        {/* Coaches Section Spotlight */}
        <div className="pt-8 border-t border-border">
          <SectionHeading
            eyebrow="Mentorship"
            title="DCC Technical Staff & Specialists"
            description="Our coaches combine decades of competitive first-class and regional experience to guide player growth at every stage of the season."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {coaches.map((coach) => (
              <div
                key={coach.id}
                className="p-6 sm:p-7 rounded-3xl bg-surface border border-border sports-card flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-18 h-18 rounded-2xl overflow-hidden bg-stone-100 border border-border shrink-0">
                      <Image
                        src={coach.photo}
                        alt={coach.name}
                        fill
                        className="object-cover"
                        sizes="72px"
                      />
                    </div>
                    <div>
                      <h3 className="font-headline text-2xl font-bold text-brand-black leading-tight">
                        {coach.name}
                      </h3>
                      <p className="text-xs font-bold text-brand-copper mt-0.5">
                        {coach.role}
                      </p>
                      <span className="text-[11px] text-muted block mt-0.5">
                        {coach.experience}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                    {coach.bio}
                  </p>

                  <div className="pt-3 border-t border-border/80 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted block">
                      Core Coaching Focus
                    </span>
                    {coach.coachingFocus.map((focus, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-foreground-soft"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
