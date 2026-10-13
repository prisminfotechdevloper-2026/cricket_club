"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Container } from "../common/Container";

const AVATARS = [
  "/coaching_drill/Aditya_Koli_coach1.png",
  "/coaching_drill/Aditya_Koli_coach2.png",
  "/coaching_drill/Aditya_Koli_coach3.png",
  "/images/orange_cap_player.png",
];

export function HomeStoryShowcase() {
  return (
    <section
      id="our-story"
      aria-label="Our Story - Devpur Cricket Club"
      className="relative w-full overflow-hidden bg-[#FDFAF4] py-6 sm:py-8 lg:py-10 border-b border-[#EFE6D6]"
    >
      {/* Soft warm background smudges */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 left-[35%] w-[600px] h-[360px] rounded-full bg-[#F6E7C8]/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[260px] rounded-full bg-[#F6E7C8]/25 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* ============================ LEFT COLUMN: HEADING + IMAGE ============================ */}
          <div className="lg:col-span-6 flex flex-col space-y-4 sm:space-y-4.5 w-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="font-body text-[#f39a3b] font-bold text-xs tracking-[0.18em] uppercase">
                Our Story
              </span>
              <span className="w-9 h-px bg-[#f39a3b]" aria-hidden="true" />
            </div>

            {/* Heading */}
            <h2 className="font-headline font-extrabold uppercase text-[30px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[1.08] tracking-tight">
              <span className="block text-[#111827]">A Club Built on Cricket</span>
              <span className="block text-[#f39a3b]">Strengthened by Community.</span>
            </h2>

            {/* Image (directly below heading in same column) */}
            <div className="relative w-full pt-0.5">
              <div className="relative aspect-[16/10] sm:aspect-[7/5] w-full rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-stone-200/90 bg-white group">
                <Image
                  src="/images/about_team_heritage.png"
                  alt="Devpur Cricket Club Team on Historic Mumbai Cricket Ground"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Ground Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20">
                  <div className="inline-flex items-center gap-2.5 sm:gap-3 pl-3 pr-4 sm:pl-3.5 sm:pr-4 py-2 sm:py-2.5 rounded-xl bg-[#0F172A]/90 backdrop-blur-md shadow-xl border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#f39a3b] fill-[#f39a3b]/30" strokeWidth={2.2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body text-white font-semibold text-[12px] sm:text-[13px] leading-tight">
                        Matunga Ground
                      </span>
                      <span className="font-body text-[#9CA3AF] text-[10px] sm:text-[11px] leading-tight mt-0.5">
                        Our Home Ground
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-2.5 flex justify-start pl-2">
                <span className="font-script-signature text-xl font-normal text-[#4B5563] -rotate-[2deg] select-none whitespace-nowrap">
                  Devpur Cricket Club
                </span>
              </div>
            </div>
          </div>

          {/* ============================ RIGHT COLUMN: MAIN TEXT CONTENT ============================ */}
          <div className="lg:col-span-6 flex flex-col w-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-[#EAE2D2] shadow-sm flex flex-col space-y-4">
              {/* Introductory Narrative */}
              <p className="font-body text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.68]">
                DCC began as a friendly circle from Devpur Gaam, bringing families and neighbours together through a shared love for cricket — now grown into a proud, structured club across generations on and off the field.
              </p>

              {/* Core Mission & Goals — Direct-hitting highlighted points */}
              <div className="space-y-3 pt-1 border-t border-[#F0E8D8]">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#f39a3b]/15 text-[#f39a3b] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <p className="font-body text-[#374151] text-[14px] sm:text-[15px] leading-snug">
                    <strong className="font-bold text-[#111827]">Community Brotherhood:</strong> Uniting <span className="font-bold text-[#111827] bg-[#f39a3b]/15 px-1.5 py-0.5 rounded">50+ Devpur Gaam members</span> and families under one proud sporting banner.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#f39a3b]/15 text-[#f39a3b] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <p className="font-body text-[#374151] text-[14px] sm:text-[15px] leading-snug">
                    <strong className="font-bold text-[#111827]">Serious Cricket:</strong> Regular leather-ball practice at <strong className="font-bold text-[#111827]">Matunga Ground</strong> with structured training under <strong className="font-bold text-[#111827]">Coach Aditya Koli</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#f39a3b]/15 text-[#f39a3b] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <p className="font-body text-[#374151] text-[14px] sm:text-[15px] leading-snug">
                    <strong className="font-bold text-[#111827]">A Vision Beyond The Pitch:</strong> Fostering <strong className="font-bold text-[#111827]">youth talent, physical fitness &amp; lifelong bonds</strong> across multiple generations.
                  </p>
                </div>
              </div>

              {/* Action Buttons & Members Social Proof */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3 border-t border-[#F0E8D8]">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/members"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f39a3b] hover:bg-[#d8842c] text-white text-[13px] font-semibold shadow-[0_6px_16px_-4px_rgba(243,154,59,0.5)] transition-[background-color,transform,box-shadow] active:scale-[0.98]"
                  >
                    <span>Meet our community</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/history"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-[#111827] border border-stone-200 text-[13px] font-semibold shadow-sm hover:shadow transition-[background-color,transform,box-shadow] active:scale-[0.98]"
                  >
                    Explore our journey
                  </Link>
                </div>

                {/* Members */}
                <div className="flex items-center gap-2.5 shrink-0 pt-1 sm:pt-0">
                  <div className="flex items-center -space-x-2.5">
                    {AVATARS.map((src) => (
                      <div
                        key={src}
                        className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shrink-0 shadow-sm"
                      >
                        <Image src={src} alt="DCC Squad Member" fill sizes="32px" className="object-cover object-top" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body text-[#111827] font-bold text-xs leading-tight">50+ members</span>
                    <span className="font-body text-[#6B7280] text-[10px] leading-tight">and growing together</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}