import React from "react";
import Link from "next/link";
import { Season } from "@/lib/types/content";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { ArrowRight, Trophy, Calendar, Shield } from "lucide-react";

interface SeasonsDirectoryProps {
  seasons: Season[];
}

export function SeasonsDirectory({ seasons }: SeasonsDirectoryProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO BANNER: LIGHT THEME SEASON CHRONOLOGY ATMOSPHERE
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-900 border-b border-stone-200 py-12 sm:py-16 lg:py-20">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0A04B]/10 text-[#F0A04B] border border-[#C16A35]/20 text-[11px] font-mono font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0A04B] animate-pulse" />
                <span>SEASON ARCHIVE // OUR JOURNEY THROUGH TIME</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[0.98]">
                Every Season Has A Story.
                <span className="bg-gradient-to-r from-[#F0A04B] via-[#F0A04B] to-[#D7833D] bg-clip-text text-transparent block mt-1">
                  Our Journey, Brotherhood &amp; Milestones.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                A season-by-season archive of Devpur Cricket Club. Following our October to March annual cycle,
                practice rhythm at Matunga Ground, community tournament campaigns, and shared memories.
              </p>

              {/* Action Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-[#F0A04B]" />
                  <span>OCT – MAR / MAY PEAK CYCLE</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Shield className="w-3.5 h-3.5 text-[#EAA05E]" />
                  <span>EST. 2013 INCEPTION</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                  <span>2× SILVERWARE FINALISTS</span>
                </div>
              </div>
            </div>

            {/* Right Column: Telemetry Cards (Light Theme) */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5 font-mono text-xs">
                {[
                  { label: "CYCLE LENGTH", value: "5–6 Mos", sub: "Annual Peak Season", color: "text-[#F0A04B]", valueColor: "text-stone-900" },
                  { label: "TURF RHYTHM", value: "3 Days/Wk", sub: "Mon • Wed • Fri Nets", color: "text-[#F0A04B]", valueColor: "text-stone-900" },
                  { label: "LEATHER-BALL", value: "25+ Games", sub: "Competitive Matches", color: "text-[#F0A04B]", valueColor: "text-[#F0A04B]" },
                  { label: "COMMUNITY", value: "10,000+", sub: "KVO Cricket Network", color: "text-emerald-600", valueColor: "text-stone-900" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
                    <span className={`text-[10px] uppercase font-bold ${stat.color} tracking-wider block`}>
                      {stat.label}
                    </span>
                    <span className={`font-headline text-2xl font-black ${stat.valueColor} block`}>
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-stone-500 font-body block">
                      {stat.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="py-10 sm:py-14">
        <Container>

        <div className="space-y-8 mb-12">
          {seasons.map((season) => (
            <div
              key={season.id}
              className={`rounded-3xl border p-6 sm:p-10 sports-card ${
                season.isCurrent
                  ? "bg-surface border-brand-copper/60 shadow-md ring-1 ring-brand-copper/20"
                  : "bg-surface border-border shadow-xs"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {season.isCurrent ? (
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-charcoal text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                        ACTIVE CURRENT SEASON
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700">
                        HISTORICAL ARCHIVE
                      </span>
                    )}
                    <span className="text-xs text-muted font-semibold">
                      {season.startDate} – {season.endDate}
                    </span>
                  </div>

                  <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-brand-black tracking-tight">
                    {season.name}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-brand-copper font-bold mt-1">
                    Motto: &quot;{season.motto}&quot;
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-center">
                  <div className="p-3.5 rounded-2xl bg-surface-soft border border-border/80 min-w-[100px]">
                    <span className="text-[10px] uppercase font-bold text-muted block">
                      Matches
                    </span>
                    <span className="font-headline text-2xl font-bold text-brand-black">
                      {season.matchesPlayed} ({season.matchesWon}W)
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-surface-soft border border-border/80 min-w-[100px]">
                    <span className="text-[10px] uppercase font-bold text-muted block">
                      Trophies
                    </span>
                    <span className="font-headline text-2xl font-bold text-brand-copper">
                      {season.trophiesWon}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-surface-soft border border-border/80 min-w-[110px]">
                    <span className="text-[10px] uppercase font-bold text-muted block">
                      Captain
                    </span>
                    <span className="font-headline text-xl font-bold text-brand-black truncate block">
                      {season.captain}
                    </span>
                  </div>
                </div>
              </div>

              {/* Season Narrative & Highlights */}
              <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm sm:text-base text-foreground-soft leading-relaxed">
                    {season.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                    <div className="p-3 rounded-xl bg-surface-soft border border-border/80">
                      <span className="text-[10px] uppercase font-bold text-muted block">
                        Top Run Scorer
                      </span>
                      <span className="font-bold text-brand-black text-sm block mt-0.5">
                        {season.topRunScorer.name}
                      </span>
                      <span className="text-muted text-xs">
                        {season.topRunScorer.runs} Runs
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-surface-soft border border-border/80">
                      <span className="text-[10px] uppercase font-bold text-muted block">
                        Top Wicket Taker
                      </span>
                      <span className="font-bold text-brand-black text-sm block mt-0.5">
                        {season.topWicketTaker.name}
                      </span>
                      <span className="text-muted text-xs">
                        {season.topWicketTaker.wickets} Wickets
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Highlights list */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-surface-soft border border-border space-y-3">
                  <span className="text-xs uppercase font-bold tracking-wider text-brand-black block">
                    Defining Season Moments
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground-soft">
                    {season.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-2" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted font-medium">
                  {season.timeline.length} Cycle stages documented
                </span>

                <Link
                  href={`/seasons/${season.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-copper hover:text-brand-copper-dark transition-colors group"
                >
                  <span>Explore Full Season Journey & Timeline</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
      </div>
    </div>
  );
}
