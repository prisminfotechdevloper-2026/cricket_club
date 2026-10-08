"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GalleryAlbum, GalleryCategory } from "@/lib/types/content";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import {
  Calendar,
  ArrowRight,
  MapPin,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Shield,
  Camera,
} from "lucide-react";

interface MemoriesDirectoryProps {
  albums: GalleryAlbum[];
}

function getAlbumCoverFocalPosition(coverImage: string): string {
  if (coverImage.includes("orange_cap_player") || coverImage.includes("purpal_cap_player")) {
    return "object-[center_10%]";
  }
  if (coverImage.includes("training_team") || coverImage.includes("exersise")) {
    return "object-[center_15%]";
  }
  if (coverImage.includes("ground_players_group") || coverImage.includes("ground_playing")) {
    return "object-[center_15%]";
  }
  if (coverImage.includes("winning_time_with_group") || coverImage.includes("winning")) {
    return "object-[center_20%]";
  }
  if (coverImage.includes("team_wedding_party")) {
    return "object-[center_20%]";
  }
  if (coverImage.includes("memories")) {
    return "object-[center_20%]";
  }
  if (coverImage.includes("team_group") || coverImage.includes("team_members") || coverImage.includes("members")) {
    return "object-[center_18%]";
  }
  return "object-[center_20%]";
}

const CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All Moments" },
  { id: "celebrations", label: "Trophy & Cap Glory" },
  { id: "team-moments", label: "Brotherhood & Smiles" },
  { id: "training", label: "Turf Nets & Sweat" },
  { id: "match-day", label: "Matchday & Squad XI" },
  { id: "tournaments", label: "Heritage Archives" },
];

const HERO_SLIDES = [
  {
    id: "slide-1",
    image: "/images/winning_time_with_group.png",
    index: "01",
    tag: "Championship Silverware",
    badge: "01 // SILVERWARE TRIUMPH",
    kicker: "TOURNAMENT FINAL PODIUM // MATUNGA GYMKHANA",
    title: "Lifting Silverware Under Stadium Floodlights",
    subtitle:
      "Two-time KVO championship finalists hoisting the runner-up silverware alongside club elders and organizers at the Matunga Gymkhana Cricket Pavilion.",
    location: "Matunga Gymkhana Cricket Pavilion",
    highlightStat: "2x Runner-Up Silverware",
    objectPosition: "object-center",
  },
  {
    id: "slide-2",
    image: "/images/team_group.png",
    index: "02",
    tag: "Matchday Red XI",
    badge: "02 // 50+ BROTHERS UNITED",
    kicker: "LEATHER-BALL SQUAD // DEV PUR XI",
    title: "Wearing the Red Crest with Village Pride",
    subtitle:
      "From pre-match team huddles to fighting for every single run. 50+ active Devpur brothers united on the outfield across Mumbai's iconic grounds.",
    location: "Competitive Outfield Turf",
    highlightStat: "50+ Active Brothers",
    objectPosition: "object-[center_20%]",
  },
  {
    id: "slide-3",
    image: "/images/team_wedding_party.png",
    index: "03",
    tag: "Wedding Brotherhood",
    badge: "03 // LIFELONG BROTHERHOOD",
    kicker: "FROM CRICKET FLANNELS TO WEDDING KURTAS",
    title: "Standing Beside Teammates on Life's Biggest Days",
    subtitle:
      "When a Devpur teammate ties the knot, all 50+ brothers show up in matching festive sherwanis and kurtas. A bond forged on the turf that never ends at the boundary rope.",
    location: "Teammates Wedding Celebration",
    highlightStat: "Lifetime Brotherhood",
    objectPosition: "object-center",
  },
  {
    id: "slide-4",
    image: "/images/party.png",
    index: "04",
    tag: "Annual Gala Lounge",
    badge: "04 // CELEBRATION EVENINGS",
    kicker: "OFF-PITCH CELEBRATIONS // SQUAD BOND",
    title: "Suits, Smiles & Celebration Evenings",
    subtitle:
      "Trading match whites for sharp blazers and suits. Raising toasts to hard-fought tournament campaigns, memorable sixes, and endless team laughter.",
    location: "Annual Club Gala Lounge",
    highlightStat: "Annual Squad Gala",
    objectPosition: "object-center",
  },
  {
    id: "slide-5",
    image: "/images/members.png",
    index: "05",
    tag: "Village Heritage",
    badge: "05 // DEVPUR GAAM IDENTITY",
    kicker: "HONORING OUR ROOTS // EST. 2013",
    title: "Rooted in Devpur Heritage & Community Respect",
    subtitle:
      "Honoring our community elders and village traditions. From Devpur roots to Mumbai's premier cricket circuits, driven by discipline, pride, and unity.",
    location: "Devpur Community Hall",
    highlightStat: "Est. 2013 • Devpur Gaam",
    objectPosition: "object-center",
  },
];

export function MemoriesDirectory({ albums }: MemoriesDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatically cycle through the 5 authentic background images every 3 seconds continuously (non-stop)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = HERO_SLIDES[activeSlide];

  const filteredAlbums = albums.filter((album) => {
    if (selectedCategory === "all") return true;
    return album.category === selectedCategory;
  });

  const totalPhotos = albums.reduce((acc, curr) => acc + curr.items.length, 0);

  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO BANNER: AWARD-WINNING FULL-BLEED EDITORIAL PHOTOGRAPHY SHOWCASE
          - Zero bulky cards blocking the photos
          - 5 authentic background images cycling every 3 seconds non-stop
          - Continuous automated motion (no pause on hover or click)
          - Bottom cinematic editorial typography
          - Sleek 5-chapter interactive progress timeline
          ========================================================================= */}
      <section className="relative overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between border-b border-white/10 select-none bg-black">
        {/* Full-Bleed Background Images with Smooth 3s Ken-Burns Crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className={`relative w-full h-full ${isActive ? "animate-kenburns-pan" : ""}`}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className={`object-cover ${slide.objectPosition || "object-center"}`}
                    sizes="100vw"
                  />
                </div>
              </div>
            );
          })}

          {/* Minimalist Edge Vignettes: Leaves the entire center 70% unobstructed and brilliant! */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/75 via-black/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10 pointer-events-none" />
        </div>

        {/* TOP FLOATING ROW: Telemetry pill & Minimalist Controls */}
        <Container className="relative z-20 w-full pt-6 sm:pt-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest shadow-lg">
                <Camera className="w-3.5 h-3.5 text-[#EA6E18]" />
                <span>VISUAL ARCHIVES // 2013–2027</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EA6E18]/30 backdrop-blur-md text-[#F8C080] border border-[#EA6E18]/50 text-[11px] font-mono font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>3s AUTO-LOOP</span>
                <span className="text-white/60 mx-1">•</span>
                <span className="text-white font-mono">{currentSlideData.badge}</span>
              </div>
            </div>

            {/* Quick Minimalist Nav Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white/80 tracking-widest hidden sm:inline-block mr-1">
                0{activeSlide + 1} / 0{HERO_SLIDES.length}
              </span>
              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full p-1 shadow-lg">
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide(
                      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
                    )
                  }
                  className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
                  }
                  className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Container>

        {/* BOTTOM EDITORIAL SHOWCASE (Pure Typography, Zero Cards Covering the Image) */}
        <Container className="relative z-20 w-full pb-6 sm:pb-8 pt-24 sm:pt-32">
          <div className="space-y-3 sm:space-y-4 max-w-4xl text-left">
            {/* Kicker & Location */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-[#EA6E18] text-white font-bold tracking-wider uppercase text-[10px] sm:text-xs shadow-sm">
                {currentSlideData.kicker}
              </span>
              <span className="inline-flex items-center gap-1.5 text-stone-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#F8C080]" />
                <span>{currentSlideData.location}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#F8C080] font-bold">
                <Trophy className="w-3.5 h-3.5 text-[#EA6E18]" />
                <span>{currentSlideData.highlightStat}</span>
              </span>
            </div>

            {/* Massive Editorial Headline */}
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[0.98] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {currentSlideData.title}
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-200 leading-relaxed font-medium max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {currentSlideData.subtitle}
            </p>
          </div>

          {/* 5-Slide Interactive Progress Bar Timeline */}
          <div className="grid grid-cols-5 gap-2 sm:gap-3 pt-5 mt-4 sm:mt-6 border-t border-white/20">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === activeSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className="group text-left focus:outline-none transition-transform hover:scale-[1.02]"
                >
                  {/* Animated Progress Bar */}
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden mb-1.5 relative">
                    <div
                      key={`prog-${idx}-${activeSlide}`}
                      className={`h-full bg-gradient-to-r from-[#EA6E18] to-[#F89928] rounded-full ${
                        isActive
                          ? "animate-progress-3s w-full"
                          : idx < activeSlide
                          ? "w-full"
                          : "w-0"
                      }`}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider block transition-colors truncate ${
                        isActive
                          ? "text-[#F8C080]"
                          : "text-white/60 group-hover:text-white"
                      }`}
                    >
                      {slide.index} // {slide.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="py-10 sm:py-14">
        <Container>

        {/* Filter Pill Nav */}
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

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAlbums.map((album) => {
            const coverImage = album.coverImage || album.items[0]?.url || "/images/team_group.png";
            return (
              <Link
                key={album.id}
                href={`/memories/${album.slug}`}
                className="group bg-surface rounded-2xl border border-border overflow-hidden hover:border-brand-copper/60 hover:shadow-lg transition-[border-color,box-shadow] flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                  <Image
                    src={coverImage}
                    alt={album.title}
                    fill
                    className={`object-cover ${getAlbumCoverFocalPosition(coverImage)} group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-45% to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-[10px] font-bold border border-white/10 shadow-xs">
                    {album.items.length} Photos
                  </div>
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 z-10 pointer-events-none space-y-1">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase font-bold text-brand-peach drop-shadow-xs block">
                      {album.season}
                    </span>
                    <h3 className="font-headline text-lg sm:text-xl font-bold leading-tight !text-white text-white drop-shadow-md group-hover:text-brand-orange transition-colors">
                      {album.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-foreground-soft line-clamp-2">
                    {album.description}
                  </p>

                  <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-brand-copper font-semibold">
                    <span>View Album</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
      </div>
    </div>
  );
}
