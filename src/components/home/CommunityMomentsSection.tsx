import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../common/Container";

interface MomentItem {
  id: string;
  seriesNumber: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tag: string;
}

const communityMoments: MomentItem[] = [
  {
    id: "moment-1",
    seriesNumber: "SERIES 01",
    title: "Life Milestones & Wedding Celebrations",
    category: "Fraternity & Family",
    description: "When a teammate gets married or marks a life milestone, the entire DCC squad shows up in traditional kurtas. We celebrate life off the pitch just as passionately as our match victories.",
    image: "/images/team_wedding_party.png",
    tag: "Life Milestones",
  },
  {
    id: "moment-2",
    seriesNumber: "SERIES 02",
    title: "Away-Match Train Journeys",
    category: "Tour Life on Tracks",
    description: "Train journeys to away matches across Western Railway — kit bags in the berths, chai stops, strategic debates, and nonstop camaraderie.",
    image: "/images/train_travel.png",
    tag: "Team Travel",
  },
  {
    id: "moment-3",
    seriesNumber: "SERIES 03",
    title: "Post-Match Feasts & Social Evenings",
    category: "Brotherhood",
    description: "Win or lose, every fixture concludes with shared meals, honest post-match reviews, laughter, and unbreakable community solidarity.",
    image: "/images/memories_with_players.png",
    tag: "Post-Match Gatherings",
  },
];

export function CommunityMomentsSection() {
  return (
    <section className="py-16 sm:py-24 border-b border-border/80 bg-background relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-charcoal text-white text-[11px] font-bold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>MORE THAN MATCH DAY</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight leading-[0.98]">
              Beyond the Boundary
            </h2>
            <p className="mt-3 text-sm sm:text-base text-foreground-soft leading-relaxed">
              Cricket is our common spark, but the brotherhood is what endures. Inside Devpur Cricket Club, teammates become lifelong family — standing shoulder to shoulder through wedding celebrations, train tours, shared meals, and community traditions.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border hover:border-brand-copper text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-black transition-[border-color,box-shadow] shadow-xs shrink-0"
          >
            <span>View All Club Memories →</span>
          </Link>
        </div>

        {/* Moments Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Card (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="group relative rounded-3xl overflow-hidden border border-border bg-stone-900 flex-1 flex flex-col justify-end shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={communityMoments[0].image}
                  alt={communityMoments[0].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                
                {/* Series Pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-mono tracking-wider border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>{communityMoments[0].seriesNumber}</span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-brand-peach font-bold">{communityMoments[0].tag}</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-peach block">
                    {communityMoments[0].category}
                  </span>
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold leading-tight group-hover:text-brand-orange transition-colors">
                    {communityMoments[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed">
                    {communityMoments[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stack (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {/* Card 2: Train Travel */}
            <div className="group relative rounded-3xl overflow-hidden border border-border bg-stone-900 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={communityMoments[1].image}
                  alt={communityMoments[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono tracking-wider border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>{communityMoments[1].seriesNumber}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-peach block">
                    {communityMoments[1].category}
                  </span>
                  <h4 className="font-headline text-lg sm:text-xl font-bold leading-tight group-hover:text-brand-orange transition-colors">
                    {communityMoments[1].title}
                  </h4>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {communityMoments[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Post-Match Feasts */}
            <div className="group relative rounded-3xl overflow-hidden border border-border bg-stone-900 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={communityMoments[2].image}
                  alt={communityMoments[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono tracking-wider border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>{communityMoments[2].seriesNumber}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-peach block">
                    {communityMoments[2].category}
                  </span>
                  <h4 className="font-headline text-lg sm:text-xl font-bold leading-tight group-hover:text-brand-orange transition-colors">
                    {communityMoments[2].title}
                  </h4>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {communityMoments[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Trust Bar */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-xs sm:text-sm font-bold text-brand-black uppercase tracking-wider">
              PROUDLY REPRESENTING DEVPUR GAAM SINCE 2013
            </p>
            <p className="text-[11px] sm:text-xs text-muted mt-0.5">
              50+ active members • Matunga Ground net training Mon / Wed / Fri • 2 Runners-Up Silverware
            </p>
          </div>

          <div className="text-xs font-mono font-bold text-brand-copper tracking-wider uppercase">
            PLAY • TRAIN • COMPETE • WIN
          </div>
        </div>
      </Container>
    </section>
  );
}
