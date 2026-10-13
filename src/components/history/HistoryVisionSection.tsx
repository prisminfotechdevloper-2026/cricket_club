"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../common/Container";

export function HistoryVisionSection() {
  return (
    <section
      id="history-vision-stories"
      aria-label="A Vision Beyond the Game"
      className="relative w-full overflow-hidden bg-[#FAF7F2] py-8 sm:py-10 md:py-12 border-b border-[#EAE3D6]"
    >
      <Container>
        {/* =====================================================================
            SECTION HEADER: Eyebrow + Headline
            ===================================================================== */}
        <div className="flex flex-col items-start w-full text-left mb-6 sm:mb-8 pb-4 border-b border-[#EAE3D6]">
          <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#f39a3b] mb-1.5">
            A VISION BEYOND THE GAME
          </span>
          <h2 className="font-headline text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold uppercase tracking-tight leading-[1.08] text-[#0F172A]">
            A Vision Beyond the Game
          </h2>
        </div>

        {/* =====================================================================
            2-COLUMN LAYOUT: Narrative Left + Photo Right
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Vision Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 text-left">
            <p className="font-body text-[#525763] text-sm sm:text-base leading-[1.8] font-normal">
              The <strong className="font-semibold text-[#0F172A]">vision</strong> was
              bigger than just participating in tournaments. It was about
              bringing the{" "}
              <strong className="font-semibold text-[#0F172A]">youngsters</strong> of
              Devpur together under one team, one identity and one shared
              passion.
            </p>

            <p className="font-body text-[#525763] text-sm sm:text-base leading-[1.8] font-normal">
              It was about creating opportunities for our youth to meet,
              connect and discover the talent within our own community. It
              was about reviving friendships, building new bonds, bringing
              Devpur families closer and creating a{" "}
              <strong className="font-semibold text-[#0F172A]">stronger</strong> sense
              of belonging among us Devpurians.
            </p>
          </div>

          {/* Right Column: Clean Team Sunset Photo (No orange border) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[540px] rounded-2xl sm:rounded-[28px] overflow-hidden bg-white shadow-xl border border-stone-200">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#EAE3D6]">
                <Image
                  src="/history/devpur_vision_team_sunset.jpg"
                  alt="Devpur Cricket Club team brotherhood standing together facing sunset"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Card Tag Badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 bg-black/75 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold shadow-md">
                  Club Brotherhood &amp; Vision
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
