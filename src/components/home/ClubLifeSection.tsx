import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";

const CLUB_ACTIVITIES = [
  {
    title: "Net Practice at Matunga Ground",
    category: "Mon • Wed • Fri Rhythm",
    badge: "Matunga Turf Nets",
    description:
      "Indoor and outdoor turf nets three days a week. Focus on facing real leather-ball seam, spin variations, and high-volume batting time under Head Coach Aditya Koli.",
    image: "/images/members.png",
    featured: true,
  },
  {
    title: "Coach-Led Skill Drills",
    category: "Technical Mastery",
    badge: "Coach Aditya Koli",
    description:
      "Structured batting mechanics, bowling release biomechanics, and tactical match simulation supervised by Kanga B Division player Aditya Koli.",
    image: "/images/ground_players_group.png",
    featured: false,
  },
  {
    title: "Athletic Stamina & Conditioning",
    category: "Physical Fitness",
    badge: "Pre-Net Protocol",
    description:
      "Sprint intervals, core stability, slip reflex catches, and dynamic fielding routines to stay injury-free throughout the season.",
    image: "/images/team.png",
    featured: false,
  },
  {
    title: "Weekend Practice Fixtures",
    category: "Match Readiness",
    badge: "Simulated Pressure",
    description:
      "Full-length 20-over and 40-over weekend friendly fixtures against reputed Mumbai club sides to test tactical game plans.",
    image: "/images/ground_playing.png",
    featured: false,
  },
  {
    title: "25+ Tournament Matches",
    category: "Competitive Cricket",
    badge: "KVO Community Cups",
    description:
      "Representing Devpur Gaam across premier community tournaments with full leather-ball rules and official sponsor jersey presence.",
    image: "/images/winning_time_with_group.png",
    featured: false,
  },
  {
    title: "Community Celebrations & Brotherhood",
    category: "Beyond the Pitch",
    badge: "Lifelong Camaraderie",
    description:
      "Annual team dinners, celebration gatherings, train tour banter, and standing beside our members in weddings and life milestones.",
    image: "/images/party.png",
    featured: false,
  },
];

export function ClubLifeSection() {
  return (
    <section id="club-life" className="py-16 sm:py-24 bg-surface-soft border-b border-border/80">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-charcoal text-white text-[11px] font-bold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>THE CLUB EXPERIENCE</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight leading-[0.98]">
              Life Inside DCC
            </h2>
            <p className="text-sm sm:text-base text-foreground-soft max-w-2xl mt-2">
              Cricket is our medium — but our club life encompasses discipline, regular practice,
              competitive matchdays, and unforgettable community celebrations.
            </p>
          </div>

          <Link
            href="/training"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-copper hover:text-brand-orange transition-colors shrink-0"
          >
            Explore Practice Schedule →
          </Link>
        </div>

        {/* Editorial Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLUB_ACTIVITIES.map((act) => (
            <div
              key={act.title}
              className="rounded-3xl bg-surface border border-border/80 overflow-hidden shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group sports-card"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-106"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                {/* Badges on image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-mono font-bold text-brand-peach uppercase tracking-widest text-[10px]">
                    {act.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono border border-white/20">
                    {act.badge}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-brand-black tracking-tight group-hover:text-brand-copper transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed mt-2">
                    {act.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
