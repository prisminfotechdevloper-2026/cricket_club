import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { galleryAlbums } from "@/lib/data/gallery";
import { Camera, Calendar, ArrowRight, Heart } from "lucide-react";

export function GalleryTeaserSection() {
  const albums = galleryAlbums.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 border-b border-border/80 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Club Memories & Brotherhood"
          title="Moments Beyond The Scoreboard"
          description="Capture the true soul of Devpur Cricket Club — from triumphant trophy lifts under floodlights and Orange & Purple Cap honors to wedding celebrations and lifelong brotherhood."
          actionText="View All 23 Club Photos"
          actionHref="/gallery"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {albums.map((album) => (
            <Link
              key={album.id}
              href={`/gallery/${album.slug}`}
              className="group rounded-3xl bg-surface-soft border border-border overflow-hidden sports-card flex flex-col justify-between shadow-sm hover:border-brand-copper/70 hover:shadow-xl transition-all duration-300"
            >
              {/* Photo Cover with Count Pill */}
              <div className="relative aspect-[4/3] w-full bg-stone-200 overflow-hidden">
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:via-black/25 transition-colors" />

                {/* Photo Count Tag */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-md border border-white/10 shadow-xs">
                  <Camera className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{album.photoCount} Photos</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-peach flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span>{album.season} • {album.category.replace("-", " ")}</span>
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold leading-tight group-hover:text-brand-orange transition-colors">
                    {album.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Strip */}
              <div className="p-4 sm:p-5 flex flex-col justify-between gap-3 bg-surface border-t border-border/80">
                <p className="text-xs text-foreground-soft line-clamp-2 leading-relaxed">
                  {album.description}
                </p>

                {/* Mini Preview Strip */}
                <div className="flex items-center gap-1.5 pt-1">
                  {album.items.map((item) => (
                    <div
                      key={item.id}
                      className="relative w-8 h-8 rounded-lg overflow-hidden border border-border shrink-0 bg-stone-100"
                    >
                      <Image
                        src={item.url}
                        alt="preview thumbnail"
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-copper" />
                    {album.date}
                  </span>

                  <span className="inline-flex items-center gap-1 text-brand-black font-bold group-hover:text-brand-copper transition-colors">
                    <span>Open Album</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
