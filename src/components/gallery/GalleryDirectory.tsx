"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GalleryAlbum, GalleryCategory } from "@/lib/types/content";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import {
  Camera,
  Calendar,
  ArrowRight,
  MapPin,
  Trophy,
  Heart,
  Flame,
  Award,
  Users,
} from "lucide-react";

interface GalleryDirectoryProps {
  albums: GalleryAlbum[];
}

const CATEGORIES: { id: GalleryCategory; label: string; icon: string }[] = [
  { id: "all", label: "All Moments (23)", icon: "📸" },
  { id: "celebrations", label: "Trophy & Cap Glory", icon: "🏆" },
  { id: "team-moments", label: "Brotherhood & Smiles", icon: "🎉" },
  { id: "training", label: "Turf Nets & Sweat", icon: "🏏" },
  { id: "match-day", label: "Matchday & Squad XI", icon: "⚡" },
  { id: "tournaments", label: "Heritage Archives", icon: "📜" },
];

export function GalleryDirectory({ albums }: GalleryDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");

  const filteredAlbums = albums.filter((album) => {
    if (selectedCategory === "all") return true;
    return album.category === selectedCategory;
  });

  const totalPhotos = albums.reduce((acc, curr) => acc + curr.items.length, 0);

  return (
    <div className="py-10 sm:py-16 bg-background min-h-screen">
      <Container>
        {/* Header with emotional quote */}
        <div className="mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-black">
              Official DCC Photo Vault
            </span>
            <span className="text-muted text-xs">•</span>
            <span className="text-[11px] font-bold text-brand-copper">
              Authentic Club Memories
            </span>
          </div>

          <SectionHeading
            eyebrow="Heart & Heritage"
            title="Moments, Trophies & Lifelong Brotherhood"
            description="Every picture tells our story — from sweat on the turf and ferocious matchday battles to unforgettable wedding cheers, shared train rides, and championship silverware."
          />

          {/* Quick Highlights / Emotion Stat Strip */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            <div className="p-3.5 rounded-2xl bg-surface border border-border flex items-center gap-3 sports-card">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-muted block">Silverware</span>
                <span className="font-bold text-xs sm:text-sm text-brand-black">Champions Cups</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface border border-border flex items-center gap-3 sports-card">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-brand-orange flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-muted block">Cap Honors</span>
                <span className="font-bold text-xs sm:text-sm text-brand-black">Orange & Purple</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface border border-border flex items-center gap-3 sports-card">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-muted block">Happiness</span>
                <span className="font-bold text-xs sm:text-sm text-brand-black">Weddings & Feasts</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface border border-border flex items-center gap-3 sports-card">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-muted block">Memories</span>
                <span className="font-bold text-xs sm:text-sm text-brand-black">{totalPhotos} Club Photos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-brand-charcoal text-white shadow-md scale-102"
                  : "bg-surface text-foreground-soft border border-border hover:bg-stone-50 hover:text-brand-black"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 mb-16">
          {filteredAlbums.map((album, index) => {
            // Editorial layout: 7/5 for row 1, 4/4/4 for row 2, etc.
            const colSpan =
              index === 0
                ? "lg:col-span-7 aspect-[16/11]"
                : index === 1
                ? "lg:col-span-5 aspect-[16/11]"
                : "lg:col-span-4 aspect-[4/5] md:aspect-[16/12]";

            return (
              <Link
                key={album.id}
                href={`/gallery/${album.slug}`}
                className={`group relative rounded-3xl overflow-hidden border border-border bg-surface sports-card flex flex-col justify-end shadow-sm hover:border-brand-copper hover:shadow-xl transition-all duration-300 ${colSpan}`}
              >
                {/* Background Photo */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  {/* Luxury Multi-layer Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 group-hover:via-black/45 transition-colors" />
                </div>

                {/* Top Corner Badges */}
                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-xs">
                    <Camera className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{album.photoCount} Photos</span>
                  </span>

                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand-orange text-brand-black shadow-xs">
                    {album.season}
                  </span>
                </div>

                {/* Bottom Content Card Info */}
                <div className="relative z-10 p-5 sm:p-7 text-white space-y-3">
                  <div className="flex items-center gap-2 text-xs text-brand-peach font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span>{album.category.replace("-", " ")}</span>
                    <span className="text-white/40">•</span>
                    <span className="flex items-center gap-1 text-neutral-300 font-medium truncate">
                      <MapPin className="w-3 h-3 text-brand-orange shrink-0" />
                      <span className="truncate">{album.location}</span>
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white group-hover:text-brand-orange transition-colors">
                    {album.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed max-w-xl">
                    {album.description}
                  </p>

                  {/* Thumbnail mini-strip */}
                  <div className="flex items-center gap-1.5 pt-1">
                    {album.items.slice(0, 4).map((item) => (
                      <div
                        key={item.id}
                        className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/30 shrink-0 bg-black/40"
                      >
                        <Image
                          src={item.url}
                          alt="preview"
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {album.items.length > 4 && (
                      <span className="text-[11px] font-bold text-neutral-400 pl-1">
                        +{album.items.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Bottom Footer Bar */}
                  <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-neutral-300">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                      {album.date}
                    </span>

                    <span className="inline-flex items-center gap-1 text-white font-bold group-hover:text-brand-orange transition-colors">
                      <span>View Collection</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
