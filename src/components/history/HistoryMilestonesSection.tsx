"use client";

import React from "react";
import Image from "next/image";
import { Trophy, Award, Shield, Medal, Flame } from "lucide-react";
import { Container } from "../common/Container";

/* ------------------------------------------------------------------ */
/* DCC Tournament Milestones & Silverware Campaigns                   */
/* ------------------------------------------------------------------ */
interface MilestoneItem {
  id: string;
  badge: string;
  tournament: string;
  divisionOrSeason: string;
  result: string;
  description: string;
  accentColor: string;
  icon: React.ElementType;
}

const MILESTONES_DATA: MilestoneItem[] = [
  {
    id: "inspiration-league",
    badge: "INAUGURAL SEASON",
    tournament: "Inspiration League",
    divisionOrSeason: "Inaugural Season Championship",
    result: "Runners-Up",
    description:
      "In the inaugural edition of the prestigious Inspiration League, Devpur Cricket Club delivered high-octane team performances to reach the Grand Finale and claim the Runners-Up trophy.",
    accentColor: "#f39a3b",
    icon: Trophy,
  },
  {
    id: "kvo-navneet-b",
    badge: "2× SILVER FINALISTS",
    tournament: "KVO Navneet General Tournament",
    divisionOrSeason: "B Division Championship",
    result: "2× Runners-Up",
    description:
      "Battling against premier KVO community gaam teams, Devpur Cricket Club achieved back-to-back Runners-Up finishes in B Division, establishing DCC as perennial title contenders.",
    accentColor: "#f39a3b",
    icon: Award,
  },
  {
    id: "kvo-navneet-c",
    badge: "PODIUM FINISH",
    tournament: "KVO Navneet General Tournament",
    divisionOrSeason: "C Division Championship",
    result: "1× Runners-Up",
    description:
      "Demonstrating exceptional squad depth and resilience under pressure, DCC stormed through knockout fixtures to secure a proud Runners-Up finish in C Division.",
    accentColor: "#f39a3b",
    icon: Shield,
  },
  {
    id: "sportobuddy",
    badge: "PLATE GROUP FINALIST",
    tournament: "Sportobuddy Tournament",
    divisionOrSeason: "Plate Group Championship",
    result: "1× Runners-Up",
    description:
      "In a fiercely competitive open tournament featuring top teams, DCC fought with grit through intense knockout battles to finish as Runners-Up in the Plate Group.",
    accentColor: "#f39a3b",
    icon: Medal,
  },
];

export function HistoryMilestonesSection() {
  return (
    <section
      id="history-milestones"
      aria-label="Devpur Cricket Club Milestones and Achievements"
      className="relative w-full overflow-hidden bg-[#FAF7F2] py-8 sm:py-12 md:py-14 border-b border-[#EAE3D6]"
    >
      <Container>
        {/* =====================================================================
            HEADER: Eyebrow + Main Title + Narrative
            ===================================================================== */}
        <div className="flex flex-col items-start w-full text-left mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#f39a3b]">
              DEVPUR CRICKET CLUB MILESTONES
            </span>
          </div>

          <h2 className="font-headline text-[28px] sm:text-[38px] md:text-[46px] font-extrabold uppercase tracking-tight leading-[1.08] text-[#0F172A] max-w-4xl">
            Silverware, Finals &amp;{" "}
            <span className="text-[#f39a3b]">Proud Milestones.</span>
          </h2>

          <p className="font-body text-[#525763] text-sm sm:text-base leading-[1.75] max-w-3xl mt-3">
            Over years of dedicated play at Matunga Ground and across competitive leagues, Devpur Cricket Club has forged a reputation for fighting spirit. Reaching 5 tournament finals across prestigious circuits stands as a testament to our consistency and brotherhood.
          </p>
        </div>

        {/* =====================================================================
            STATS STRIP: Quick Tournament Metric Counters (Clean 3-Column Layout)
            ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 mb-10 sm:mb-12">
          <div className="bg-white rounded-2xl p-5 border border-[#EAE3D6] shadow-xs flex flex-col justify-center text-left">
            <span className="text-xs font-mono font-bold text-[#f39a3b] uppercase tracking-wider block">
              FINAL APPEARANCES
            </span>
            <span className="font-headline text-3xl sm:text-4xl font-black text-[#0F172A] block mt-1">
              5×
            </span>
            <span className="text-[12.5px] text-[#64748B] font-body block mt-0.5">
              Runners-Up Trophies across Circuits
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#EAE3D6] shadow-xs flex flex-col justify-center text-left">
            <span className="text-xs font-mono font-bold text-[#f39a3b] uppercase tracking-wider block">
              MAJOR CIRCUITS &amp; DIVISIONS
            </span>
            <span className="font-headline text-3xl sm:text-4xl font-black text-[#0F172A] block mt-1">
              4 Divisions
            </span>
            <span className="text-[12.5px] text-[#64748B] font-body block mt-0.5">
              Inspiration, KVO Navneet (B &amp; C), Sportobuddy
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#EAE3D6] shadow-xs flex flex-col justify-center text-left">
            <span className="text-xs font-mono font-bold text-[#f39a3b] uppercase tracking-wider block">
              HISTORIC MATCH BALL
            </span>
            <span className="font-headline text-3xl sm:text-4xl font-black text-[#0F172A] block mt-1">
              5 Wkts
            </span>
            <span className="text-[12.5px] text-[#64748B] font-body block mt-0.5">
              Hat-Trick Spell vs Bada (2024–25)
            </span>
          </div>
        </div>

        {/* =====================================================================
            CARDS GRID: 4 Tournament Milestones (Diary Details)
            ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-14">
          {MILESTONES_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl sm:rounded-3xl bg-white border border-[#EAE3D6] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EAE3D6] text-[11px] font-mono font-bold text-[#f39a3b] uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5 text-[#f39a3b]" />
                      <span>{item.badge}</span>
                    </span>
                    <span className="font-headline text-sm font-bold text-[#94A3B8]">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Tournament Title & Division */}
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#f39a3b] transition-colors">
                    {item.tournament}
                  </h3>
                  <div className="inline-block mt-1 mb-3">
                    <span className="font-mono text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                      {item.divisionOrSeason}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-body text-[#525763] text-sm sm:text-[14.5px] leading-[1.7] mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Result Pill */}
                <div className="pt-4 border-t border-[#EAE3D6] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#64748B]">
                    Tournament Result:
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FDF6E9] border border-[#F5E6CC] text-[#f39a3b] text-xs font-bold font-mono uppercase tracking-wider">
                    <Trophy className="w-3.5 h-3.5 text-[#f39a3b]" />
                    <span>{item.result}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================================
            FEATURED HISTORIC RELIC: Santneet Cup 2024–25 Match Ball & Victory
            Clean image layout without any orange background frame!
            ===================================================================== */}
        <div className="rounded-3xl bg-white border border-[#EAE3D6] p-6 sm:p-8 md:p-10 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Story & Stats */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#f39a3b]">
                  HISTORIC TOURNAMENT MOMENT • 2024–25
                </span>
              </div>

              <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight">
                <span className="text-[#f39a3b]">THE INSCRIBED MATCH BALL:</span> DEVPUR V/S BADA
              </h3>

              <p className="font-body text-[#525763] text-sm sm:text-base leading-[1.78]">
                In the Santneet Cup (Village Group) on 23rd November 2024, Devpur Cricket Club produced an extraordinary bowling masterclass. A devastating spell of <strong className="text-[#f39a3b] font-bold">4-0-29-5</strong> featuring a <strong className="text-[#f39a3b] font-bold">Hat-Trick</strong> and the <strong className="text-[#f39a3b] font-bold">Man of the Match</strong> honor secured a sensational triumph. The match ball remains preserved as a permanent symbol of Devpur&apos;s bowling prowess.
              </p>

              {/* Feat Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#FAF7F2] rounded-xl p-3 border border-[#EAE3D6]">
                  <span className="text-[11px] font-mono font-semibold uppercase text-[#f39a3b] block">
                    SPELL
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] block mt-0.5">
                    4-0-29-5
                  </span>
                </div>
                <div className="bg-[#FAF7F2] rounded-xl p-3 border border-[#EAE3D6]">
                  <span className="text-[11px] font-mono font-semibold uppercase text-[#f39a3b] block">
                    SPECIAL FEAT
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] block mt-0.5">
                    1 Hat-Trick
                  </span>
                </div>
                <div className="bg-[#FAF7F2] rounded-xl p-3 border border-[#EAE3D6] col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-mono font-semibold uppercase text-[#f39a3b] block">
                    HONOR
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] block mt-0.5">
                    Man of Match
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Image Presentation (No orange frame) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF7F2] border border-stone-200 shadow-xl">
                <Image
                  src="/history/santneet_cup_winning_ball.jpg"
                  alt="Inscribed Match Ball from Devpur vs Bada victory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold">
                  Santneet Cup 2024–25 Match Ball
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
