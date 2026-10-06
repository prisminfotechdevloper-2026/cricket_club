import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { galleryAlbums } from "@/lib/data/gallery";
import { Camera, Calendar, ArrowRight } from "lucide-react";

export function GalleryTeaserSection() {
  const albums = galleryAlbums.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 border-b border-border/80 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Club Memories"
          title="Moments Beyond The Scoreboard"
          description="Capture the spirit of Devpur Cricket Club — from triumphant trophy lifts and evening floodlit battles to candid camaraderie in the dugout."
          actionText="View Complete Photo Archive"
          actionHref="/gallery"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {albums.map((album) => (
            <Link
              key={album.id}
              href={`/gallery/${album.slug}`}
              className="group rounded-3xl bg-surface-soft border border-border overflow-hidden sports-card flex flex-col justify-between"
            >
              {/* Photo Cover with Count Pill */}
              <div className="relative aspect-[4/3] w-full bg-stone-200 overflow-hidden">
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Photo Count Tag */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
                  <Camera className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{album.photoCount} Photos</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-peach block mb-1">
                    {album.season} • {album.category}
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold leading-tight group-hover:text-brand-orange transition-colors">
                    {album.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Strip */}
              <div className="p-4 flex items-center justify-between text-xs text-muted font-medium bg-surface">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-copper" />
                  {album.date}
                </span>

                <span className="inline-flex items-center gap-1 text-brand-black font-bold group-hover:text-brand-copper transition-colors">
                  <span>Open Album</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
