"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
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
      className="relative w-full overflow-hidden bg-[#FDFAF4] py-4 sm:py-5 lg:py-6 border-b border-[#EFE6D6]"
    >
      {/* Soft warm background smudges (no sketch watermark).
          Optional: add a faint sketch PNG here later:
          <Image src="/images/cricket_sketch_bg.png" alt="" fill className="object-cover opacity-20" /> */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 left-[35%] w-[600px] h-[360px] rounded-full bg-[#F6E7C8]/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[260px] rounded-full bg-[#F6E7C8]/25 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* ============================ LEFT ============================ */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 w-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="font-body text-[#F0A04B] font-bold text-xs tracking-[0.18em] uppercase">
                Our Story
              </span>
              <span className="w-9 h-px bg-[#C16A35]" aria-hidden="true" />
            </div>

            {/* Heading — Clean, modern sans-serif font family (no roman/serif feel) */}
            <h2 className="font-body font-extrabold uppercase text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px] leading-[1.08] tracking-tight">
              <span className="block text-[#111827]">A Club Built on</span>
              <span className="block text-[#111827]">Cricket</span>
              <span className="block text-[#F0A04B]">Strengthened</span>
              <span className="block text-[#F0A04B]">by Community.</span>
            </h2>

            {/* Paragraph — Expanded width to eliminate the empty right void */}
            <p className="font-body text-[#6B7280] text-[15px] sm:text-[16px] leading-[1.7] w-full max-w-[560px]">
              DCC began as a friendly group from Devpur Gaam, bringing families
              and neighbours together through a shared love for cricket, and
              has grown into a structured club representing generations on and
              off the field.
            </p>

            {/* Desktop Buttons & Members (Hidden on mobile, shown on lg) */}
            <div className="hidden lg:flex flex-col space-y-6">
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/members"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F0A04B] hover:bg-[#D7833D] text-white text-[13px] font-semibold shadow-[0_8px_18px_-6px_rgba(240,160,75,0.6)] transition-all active:scale-[0.98]"
                >
                  <span>Meet our community</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/history"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#111827] text-[13px] font-semibold shadow-[0_4px_14px_-4px_rgba(0,0,0,0.12)] hover:shadow-md transition-all active:scale-[0.98]"
                >
                  Explore our journey
                </Link>
              </div>

              {/* Members */}
              <div className="flex items-center gap-3.5 pt-2">
                <div className="flex items-center -space-x-3">
                  {AVATARS.map((src, i) => (
                    <div
                      key={i}
                      className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shrink-0 shadow-sm"
                    >
                      <Image src={src} alt="DCC Squad Member" fill sizes="40px" className="object-cover object-top" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-[#111827] font-bold text-sm leading-tight">50+ members</span>
                  <span className="font-body text-[#6B7280] text-xs leading-tight mt-0.5">and growing together</span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================ RIGHT ============================ */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center w-full px-1 sm:px-0">
            <div className="relative w-full max-w-[480px] lg:max-w-[500px] mb-14 lg:mb-12">
              {/*
                Layer 1 — TOP-LEFT flap (Dark Copper #C16A35).
              */}
              <div
                aria-hidden="true"
                className="absolute -top-2 -left-5 w-[30%] bottom-[30%] bg-[#C16A35] rounded-[14px] rotate-[-9deg]"
              />

              {/*
                Layer 2 — BOTTOM-RIGHT (Hover Orange #D7833D).
              */}
              <div
                aria-hidden="true"
                className="absolute top-[20%] -right-2 w-[30%] -bottom-5 bg-[#D7833D] rounded-[14px] -rotate-[7deg]"
              />

              {/* Photo (slight tilt) */}
              <div className="relative -rotate-[1.5deg]">
                <div className="relative aspect-[7/5] w-full rounded-[14px] overflow-hidden shadow-[0_18px_36px_-14px_rgba(0,0,0,0.35)] group">
                  <Image
                    src="/images/about_team_heritage.png"
                    alt="Devpur Cricket Club Team on Historic Mumbai Cricket Ground"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 540px"
                  />
                </div>

                {/* Badge */}
                <div className="absolute bottom-4 -right-1 sm:right-0 z-20">
                  <div className="inline-flex items-center gap-3 pl-3.5 pr-5 py-3 rounded-xl bg-[#0F172A] shadow-xl">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#F0A04B] fill-[#F0A04B]/30" strokeWidth={2.2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body text-white font-semibold text-[13px] leading-tight">
                        Matunga Ground
                      </span>
                      <span className="font-body text-[#9CA3AF] text-[11px] leading-tight mt-0.5">
                        Our Home Ground
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <span className="absolute -bottom-11 left-4 font-script-signature text-xl font-normal text-[#4B5563] -rotate-[3deg] select-none whitespace-nowrap">
                Devpur Cricket Club
              </span>
            </div>

            {/* Mobile Buttons: Aligned directly below image with exact same width & height */}
            <div className="flex lg:hidden flex-col gap-3.5 w-full max-w-[480px]">
              <Link
                href="/members"
                className="w-full h-[52px] flex items-center justify-center gap-2.5 rounded-full bg-[#F0A04B] hover:bg-[#D7833D] text-white font-semibold text-[15px] shadow-[0_6px_20px_-4px_rgba(240,160,75,0.5)] transition-all active:scale-[0.98]"
              >
                <span>Meet our community</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/history"
                className="w-full h-[52px] flex items-center justify-center rounded-full bg-white hover:bg-neutral-50 text-[#0F172A] border border-[#E5E7EB] font-semibold text-[15px] shadow-sm transition-all active:scale-[0.98]"
              >
                Explore our journey
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}