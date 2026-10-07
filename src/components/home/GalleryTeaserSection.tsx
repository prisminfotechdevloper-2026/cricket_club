import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { galleryAlbums } from "@/lib/data/gallery";
import { ArrowRight } from "lucide-react";

export function GalleryTeaserSection() {
  const albums = galleryAlbums.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 border-b border-border/80 bg-surface">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 text-stone-300 font-mono text-[11px] font-bold uppercase tracking-widest border border-stone-800">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>ARCHIVE // 11</span>
              <span className="text-stone-600">•</span>
              <span>VISUAL DOCUMENTARY</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl font-black tracking-tight text-brand-black uppercase">
              Moments Beyond <span className="text-brand-copper">The Scoreboard</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground-soft leading-relaxed">
              Capturing the authentic culture of Devpur Cricket Club — from floodlit championship victories to pre-dawn Mumbai train commutes and community celebrations.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm group"
            >
              <span>Explore Complete 23+ Photo Archive</span>
              <ArrowRight className="w-4 h-4 text-brand-orange transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {albums.map((album, idx) => (
            <Link
              key={album.id}
              href={`/gallery/${album.slug}`}
              className="group rounded-3xl bg-surface-soft border border-border/80 overflow-hidden sports-card flex flex-col justify-between hover:border-brand-copper/70 hover:shadow-xl transition-[border-color,box-shadow] duration-300"
            >
              {/* Photo Cover with Count Pill */}
              <div className="relative aspect-[4/3] w-full bg-stone-950 overflow-hidden">
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent group-hover:via-stone-950/25 transition-colors" />

                {/* Photo Count Tag */}
                <div className="absolute top-3 right-3 font-mono text-[11px] font-bold text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 tracking-wider">
                  [{album.photoCount} FRAMES]
                </div>

                <div className="absolute top-3 left-3 font-mono text-[10px] font-bold text-brand-peach bg-stone-900/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                  SERIES 0{idx + 1}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-peach flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span>{album.season} • {album.category.replace("-", " ")}</span>
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold leading-tight group-hover:text-brand-orange transition-colors">
                    {album.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Strip */}
              <div className="p-5 flex flex-col justify-between gap-3 bg-surface border-t border-border/80">
                <p className="text-xs text-foreground-soft line-clamp-2 leading-relaxed">
                  {album.description}
                </p>

                {/* Mini Preview Strip */}
                <div className="flex items-center gap-2 pt-1">
                  {album.items.slice(0, 4).map((item) => (
                    <div
                      key={item.id}
                      className="relative w-9 h-9 rounded-lg overflow-hidden border border-border/80 shrink-0 bg-stone-900"
                    >
                      <Image
                        src={item.url}
                        alt="preview thumbnail"
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  {album.items.length > 4 && (
                    <div className="w-9 h-9 rounded-lg bg-surface-soft border border-border/80 flex items-center justify-center text-[10px] font-mono font-bold text-muted">
                      +{album.items.length - 4}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted">
                  <span className="font-semibold text-stone-600">
                    {album.date}
                  </span>

                  <span className="inline-flex items-center gap-1 text-brand-black font-bold uppercase tracking-wider group-hover:text-brand-copper transition-colors">
                    <span>VIEW ALBUM</span>
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
