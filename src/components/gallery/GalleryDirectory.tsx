"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GalleryAlbum, GalleryCategory } from "@/lib/types/content";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { Camera, Calendar, ArrowRight, MapPin, Sparkles } from "lucide-react";

interface GalleryDirectoryProps {
  albums: GalleryAlbum[];
}

const CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All Collections" },
  { id: "match-day", label: "Match Day Battles" },
  { id: "training", label: "Turf Practice & Drills" },
  { id: "celebrations", label: "Trophy Celebrations" },
  { id: "tournaments", label: "Tournament Tours" },
  { id: "team-moments", label: "Squad Brotherhood" },
];

export function GalleryDirectory({ albums }: GalleryDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");

  const filteredAlbums = albums.filter((album) => {
    if (selectedCategory === "all") return true;
    return album.category === selectedCategory;
  });

  return (
    <div className="py-10 sm:py-16 bg-background min-h-screen">
      <Container>
        <SectionHeading
          eyebrow="Club Memory Bank"
          title="Moments, Trophies & Brotherhood"
          description="A visual journey capturing the grit, celebrations, and enduring cricket heritage of Devpur Cricket Club. Documented across seasons on turf and under lights."
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

        {/* Unique Editorial Grid: Varied spans for cinematic look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 mb-16">
          {filteredAlbums.map((album, index) => {
            // First item spans 8 columns for featured editorial dominance
            // Second item spans 4 columns for tall frame
            // Subsequent items create rhythmic 6/6 or 4/8 alternating balance
            const colSpan =
              index === 0
                ? "lg:col-span-8 aspect-[16/10]"
                : index === 1
                ? "lg:col-span-4 aspect-[4/5] md:aspect-auto"
                : index % 3 === 2
                ? "lg:col-span-4 aspect-[4/5] md:aspect-auto"
                : "lg:col-span-4 aspect-[4/5] md:aspect-auto";

            return (
              <Link
                key={album.id}
                href={`/gallery/${album.slug}`}
                className={`group relative rounded-3xl overflow-hidden border border-border bg-surface sports-card flex flex-col justify-end shadow-sm hover:border-brand-copper/60 transition-all ${colSpan}`}
              >
                {/* Background Photo */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  {/* Luxury Multi-layer Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:via-black/30 transition-colors" />
                </div>

                {/* Top Corner Badge: Photo Count & Category */}
                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{album.photoCount} Photos</span>
                  </span>

                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand-orange text-brand-black shadow-xs">
                    {album.season}
                  </span>
                </div>

                {/* Bottom Content Card Info */}
                <div className="relative z-10 p-6 sm:p-8 text-white space-y-3">
                  <div className="flex items-center gap-2 text-xs text-brand-peach font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{album.category.replace("-", " ")}</span>
                    <span className="text-white/40">•</span>
                    <span className="flex items-center gap-1 text-neutral-300 font-medium">
                      <MapPin className="w-3 h-3 text-brand-orange" />
                      {album.location}
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white group-hover:text-brand-orange transition-colors">
                    {album.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed max-w-xl">
                    {album.description}
                  </p>

                  <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-neutral-300">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                      {album.date}
                    </span>

                    <span className="inline-flex items-center gap-1 text-white font-bold group-hover:text-brand-orange transition-colors">
                      <span>Explore Gallery</span>
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
