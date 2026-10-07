"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { GalleryAlbum } from "@/lib/types/content";
import { Container } from "../common/Container";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";

interface GalleryAlbumDetailProps {
  album: GalleryAlbum;
}

const emptySubscribe = () => () => {};
const useIsMounted = () => React.useSyncExternalStore(emptySubscribe, () => true, () => false);

export function GalleryAlbumDetail({ album }: GalleryAlbumDetailProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const mounted = useIsMounted();

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev !== null ? (prev + 1) % album.items.length : 0
      );
    }
  }, [activePhotoIndex, album.items.length]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev !== null
          ? (prev - 1 + album.items.length) % album.items.length
          : 0
      );
    }
  }, [activePhotoIndex, album.items.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;
    const total = album.items.length;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % total : null));
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + total) % total : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, album.items.length]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePhotoIndex]);

  return (
    <div className="py-8 sm:py-14 bg-background min-h-screen">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-brand-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Collections</span>
          </Link>
        </div>

        {/* Album Header Banner */}
        <div className="rounded-3xl bg-surface border border-border shadow-md p-6 sm:p-10 mb-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-charcoal text-white">
                {album.category}
              </span>
              <span className="text-xs font-bold text-brand-copper uppercase">
                Season {album.season}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-copper" />
                {album.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-copper" />
                {album.location}
              </span>
            </div>
          </div>

          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
            {album.title}
          </h1>

          <p className="text-sm sm:text-base text-foreground-soft leading-relaxed max-w-3xl">
            {album.description}
          </p>

          <div className="pt-2 text-xs font-mono font-bold text-muted flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span>CLICK ANY FRAME TO LAUNCH LIGHTBOX VIEWER</span>
          </div>
        </div>

        {/* Dynamic Photo Grid (Varied aspects & masonry composition) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.items.map((item, idx) => {
            const aspectClass =
              item.aspect === "portrait"
                ? "aspect-[3/4]"
                : item.aspect === "square"
                ? "aspect-square"
                : "aspect-[16/10]";

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${item.caption}`}
                onClick={() => setActivePhotoIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActivePhotoIndex(idx);
                  }
                }}
                className={`group relative rounded-3xl overflow-hidden border border-border bg-stone-100 sports-card cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-copper ${aspectClass}`}
              >
                <Image
                  src={item.url}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white" />

                {/* Hover Trigger Details */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="self-end">
                    <span className="p-2 rounded-full bg-black/60 backdrop-blur-md inline-flex text-white">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm font-semibold leading-snug">
                      {item.caption}
                    </p>
                    <span className="text-[10px] text-neutral-300 block mt-1">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Lightbox Modal */}
        {mounted &&
          activePhotoIndex !== null &&
          createPortal(
            <dialog
              open
              aria-label="Image lightbox viewer"
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200 border-0 m-0 max-w-none max-h-none w-screen h-screen"
            >
              <button
                type="button"
                className="absolute inset-0 w-full h-full cursor-default bg-transparent -z-10"
                onClick={() => setActivePhotoIndex(null)}
                aria-label="Close dialog backdrop"
              />
              {/* Top Toolbar */}
              <div
                className="flex items-center justify-between text-white z-10 shrink-0 gap-3"
              >
                <div className="text-xs sm:text-sm font-semibold text-neutral-300 truncate">
                  Image {activePhotoIndex + 1} of {album.items.length} • {album.title}
                </div>

                <button
                  onClick={() => setActivePhotoIndex(null)}
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Stage */}
              <div
                className="relative flex-1 flex items-center justify-center my-2 sm:my-4 overflow-hidden"
              >
                <button
                  onClick={handlePrev}
                  className="absolute left-1 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/15 backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="relative w-full h-full max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center">
                  <Image
                    src={album.items[activePhotoIndex].url}
                    alt={album.items[activePhotoIndex].caption}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>

                <button
                  onClick={handleNext}
                  className="absolute right-1 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/15 backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Bottom Caption & Thumbnails */}
              <div
                className="text-center space-y-2 sm:space-y-3 z-10 shrink-0 pb-1"
              >
                <p className="text-xs sm:text-base font-semibold text-white max-w-2xl mx-auto px-4 line-clamp-2">
                  {album.items[activePhotoIndex].caption}
                </p>

                {/* Thumbnails strip */}
                <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-1.5 px-2">
                  {album.items.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => setActivePhotoIndex(i)}
                      className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-transform ${
                        activePhotoIndex === i
                          ? "border-brand-orange scale-105"
                          : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={item.url}
                        alt={item.caption}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </dialog>,
            document.body
          )}
      </Container>
    </div>
  );
}
