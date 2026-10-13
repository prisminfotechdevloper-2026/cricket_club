"use client";

import React from "react";
import Link from "next/link";
import { Trophy, Target, Flame, Users, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Container } from "../common/Container";

export function HistoryPresentMotiveSection() {
  return (
    <section
      id="present-motive"
      aria-label="Devpur Cricket Club Present Motive and Mission"
      className="relative w-full overflow-hidden bg-[#FAF7F2] py-8 sm:py-12 md:py-14 border-b border-[#EAE3D6]"
    >
      <Container>
        <div className="flex flex-col items-start w-full text-left">
          {/* =====================================================================
              HEADER: Short, Punchy, Scannable in 3 Seconds
              ===================================================================== */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#f39a3b]">
              THE PRESENT MOTIVE // OUR GOAL
            </span>
          </div>

          <h2 className="font-headline text-[28px] sm:text-[38px] md:text-[46px] font-extrabold uppercase tracking-tight leading-[1.08] text-[#0F172A] max-w-4xl">
            5 Times Runners-Up.{" "}
            <span className="text-[#f39a3b]">Next: The Winner&apos;s Trophy.</span>
          </h2>

          <p className="font-body text-[#525763] text-sm sm:text-base leading-[1.7] max-w-3xl mt-2.5 mb-8 sm:mb-10">
            We fought our way to 5 tournament finals across the Inspiration League, KVO Navneet (B &amp; C Divisions), and Sportobuddy Plate Group. We proved we belong at the very top — now, our single mission is to cross the final hurdle and lift the Champion&apos;s Trophy for Devpur Gaam.
          </p>

          {/* =====================================================================
              TWO HIGHLIGHT CARDS: The Proven Past vs The Present Mission
              ===================================================================== */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
            {/* Card 1: The Foundation (5x Runners-Up) */}
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#EAE3D6] p-6 sm:p-7 shadow-xs flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EAE3D6] text-[11px] font-mono font-bold text-[#64748B] uppercase tracking-wider">
                    THE FOUNDATION
                  </span>
                  <span className="font-headline text-2xl font-black text-[#0F172A]">
                    5× Finals
                  </span>
                </div>

                <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">
                  Proven Championship Caliber
                </h3>

                <ul className="space-y-2.5 text-sm sm:text-[14.5px] text-[#525763] font-body">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#f39a3b] shrink-0 mt-0.5" />
                    <span>Finalists in <strong>Inspiration League</strong>, <strong>KVO Navneet (B &amp; C)</strong>, and <strong>Sportobuddy</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#f39a3b] shrink-0 mt-0.5" />
                    <span>Battle-tested under maximum pressure in high-stakes knockout games.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#f39a3b] shrink-0 mt-0.5" />
                    <span>Resilience forged over a decade of community cricket.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-[#EAE3D6] text-xs font-mono text-[#64748B]">
                STATUS: Consistent Podium Finishers
              </div>
            </div>

            {/* Card 2: The Target (Winning the Championship Trophy) */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#FFFDF9] border-2 border-[#f39a3b]/50 p-6 sm:p-7 shadow-md flex flex-col justify-between text-left relative overflow-hidden">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f39a3b]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF6E9] border border-[#F5E6CC] text-[11px] font-mono font-bold text-[#f39a3b] uppercase tracking-wider">
                    THE PRESENT TARGET
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-headline text-2xl font-black text-[#f39a3b]">
                    <Trophy className="w-6 h-6 text-[#f39a3b]" />
                    <span>1st Place</span>
                  </span>
                </div>

                <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">
                  Lifting the Winner&apos;s Trophy
                </h3>

                <ul className="space-y-2.5 text-sm sm:text-[14.5px] text-[#525763] font-body">
                  <li className="flex items-start gap-2.5">
                    <Target className="w-4 h-4 text-[#f39a3b] shrink-0 mt-0.5" />
                    <span><strong>Breaking the Final Hurdle</strong>: Turning 5 silver finishes into championship gold.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-[#f39a3b] shrink-0 mt-0.5" />
                    <span><strong>Matunga Ground Drills</strong>: Precision practice for death overs &amp; crunch moments.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Flame className="w-4 h-4 text-[#f39a3b] shrink-0 mt-0.5" />
                    <span><strong>Devpur Gaam Pride</strong>: Bringing the prestigious trophy home for our community.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-[#F5E6CC] text-xs font-mono font-bold text-[#f39a3b]">
                MISSION: Win the Final Silverware
              </div>
            </div>
          </div>

          {/* =====================================================================
              3 QUICK HIGHLIGHT PILLARS (Clean, 1-Line Scannable Badges)
              ===================================================================== */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-8 sm:mb-10">
            <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#EAE3D6] shadow-2xs flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EAE3D6] flex items-center justify-center text-[#f39a3b] shrink-0">
                <Flame className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <span className="font-headline text-sm font-bold text-[#0F172A] block">
                  The Hunger
                </span>
                <span className="text-xs text-[#64748B] font-body block mt-0.5">
                  5 heartbreaks made us hungrier to win.
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#EAE3D6] shadow-2xs flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EAE3D6] flex items-center justify-center text-[#f39a3b] shrink-0">
                <Users className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <span className="font-headline text-sm font-bold text-[#0F172A] block">
                  The Squad
                </span>
                <span className="text-xs text-[#64748B] font-body block mt-0.5">
                  Youth fearless hitting + veteran calm.
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#EAE3D6] shadow-2xs flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EAE3D6] flex items-center justify-center text-[#f39a3b] shrink-0">
                <Trophy className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <span className="font-headline text-sm font-bold text-[#0F172A] block">
                  One Mission
                </span>
                <span className="text-xs text-[#64748B] font-body block mt-0.5">
                  Lifting the trophy for Devpur Gaam.
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================================
              ACTION FOOTER: Short Team Quote + Direct Buttons
              ===================================================================== */}
          <div className="w-full rounded-2xl bg-white border border-[#EAE3D6] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <p className="font-body text-xs sm:text-sm text-[#0F172A] font-medium italic max-w-xl">
              “5 finals proved we can reach the top. Now, every single ball is bowled and batted to bring the Champion Trophy home.”
            </p>

            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <Link
                href="/players"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#f39a3b] hover:bg-[#f39a3b] active:scale-95 text-white font-body font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                <span>View DCC Squad</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
