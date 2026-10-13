"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../common/Container";

export function HistoryVisionSection() {
  // Mobile: Controls whether the image card slides over the default text card
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section
      aria-label="A Vision Beyond the Game - Devpur Cricket Club"
      className="relative w-full overflow-hidden bg-[#FAF7F2] py-8 sm:py-12 md:py-14 lg:py-18 border-b border-[#EAE3D6]"
    >
      <Container>
        {/* =====================================================================
            DESKTOP VIEW (lg+): STANDARD 2-COLUMN LAYOUT
            Left Column: Text & Vision Narrative
            Right Column: Layered Artistic Team Sunset Photo Card
            ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          {/* Left Column: Vision Narrative */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-5 text-left">
            {/* Eyebrow / Category Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#E59837]">
                A VISION BEYOND THE GAME
              </span>
            </div>

            {/* Main Headline: Serif Typography */}
            <h2 className="font-serif text-[34px] sm:text-[42px] md:text-[46px] lg:text-[48px] xl:text-[52px] font-bold tracking-[-0.015em] leading-[1.15] text-[#0F172A]">
              A Vision Beyond the Game
            </h2>

            {/* Narrative Paragraph with Subtle Bold Emphases */}
            <p className="font-body text-[#525763] text-sm sm:text-[15px] md:text-base leading-[1.8] font-normal">
              The <strong className="font-semibold text-[#0F172A]">vision</strong> was
              bigger than just participating in tournaments. It was about
              bringing the{" "}
              <strong className="font-semibold text-[#0F172A]">youngsters</strong> of
              Devpur together under one team, one identity and one shared
              passion. It was about creating opportunities for our youth to
              meet, connect and discover the talent within our own community. It
              was about reviving friendships, building new bonds, bringing
              Devpur families closer and creating a{" "}
              <strong className="font-semibold text-[#0F172A]">stronger</strong> sense
              of belonging among us Devpurians.
            </p>
          </div>

          {/* Right Column: Layered Artistic Team Photo Card */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              {/* Back Layer: Warm Amber / Ochre Offset Decorative Frame */}
              <div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-[98%] h-[98%] rounded-2xl sm:rounded-[32px] bg-[#EFA748] transform rotate-1 sm:rotate-2 transition-transform duration-300"
                aria-hidden="true"
              />

              {/* Decorative Warm Watercolor Accent at Bottom-Left */}
              <div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-32 sm:w-44 h-24 sm:h-32 rounded-3xl bg-[#EFA748]/75 blur-xs -rotate-6"
                aria-hidden="true"
              />

              {/* Main Photo Card Container */}
              <div className="relative z-10 w-full rounded-2xl sm:rounded-[28px] overflow-hidden bg-white shadow-2xl border-2 sm:border-4 border-white">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#EAE3D6]">
                  <Image
                    src="/history/devpur_vision_team_sunset.jpg"
                    alt="Devpur Cricket Club team brotherhood standing together facing sunset"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-[center_35%] transition-transform duration-700 ease-out hover:scale-103"
                  />
                  {/* Subtle golden ambient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            MOBILE VIEW (< lg): INTERACTIVE SLIDER
            - Header (Eyebrow + Heading) is OUTSIDE at the top (like HistoryConversationSection)
            - Below: Interactive Card with text content by default
            - Arrow Button at Bottom-Right: Slides IMAGE over text (Right to Left)
            - Arrow Button at Bottom-Left: Slides BACK to text (Left to Right)
            ===================================================================== */}
        <div className="block lg:hidden w-full">
          {/* MOBILE-ONLY HEADER: EYEBROW & TITLE SHOWN FIRST AT THE TOP */}
          <div className="flex flex-col space-y-2.5 text-left mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2">
              <span className="font-body font-bold text-xs tracking-[0.22em] uppercase text-[#E59837]">
                A VISION BEYOND THE GAME
              </span>
            </div>
            <h2 className="font-serif text-[30px] sm:text-[38px] font-bold tracking-[-0.015em] leading-[1.15] text-[#0F172A]">
              A Vision Beyond the Game
            </h2>
          </div>

          <div className="relative w-full max-w-[560px] mx-auto">
            {/* Back Layer: Warm Amber / Ochre Offset Decorative Frame */}
            <div
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-[98%] h-[98%] rounded-2xl sm:rounded-[32px] bg-[#EFA748] transform rotate-1 sm:rotate-2"
              aria-hidden="true"
            />

            {/* Decorative Warm Accent at Bottom-Left */}
            <div
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-28 sm:w-36 h-20 sm:h-28 rounded-3xl bg-[#EFA748]/75 blur-xs -rotate-6"
              aria-hidden="true"
            />

            {/* Main Interactive Shell with Overflow Hidden */}
            <div className="relative z-10 w-full min-h-[300px] sm:min-h-[340px] rounded-2xl sm:rounded-[28px] overflow-hidden bg-white shadow-2xl border-2 sm:border-4 border-white">
              {/* DEFAULT MOBILE VIEW: THE TEXT DATA (ONLY THE NARRATIVE BODY) */}
              <div className="p-5 sm:p-7 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] text-left bg-[#FAF7F2]">
                <div className="pb-14">
                  {/* Narrative Body */}
                  <p className="font-body text-[#525763] text-sm sm:text-[15px] leading-[1.8] font-normal">
                    The <strong className="font-semibold text-[#0F172A]">vision</strong> was
                    bigger than just participating in tournaments. It was about
                    bringing the{" "}
                    <strong className="font-semibold text-[#0F172A]">youngsters</strong> of
                    Devpur together under one team, one identity and one shared
                    passion. It was about creating opportunities for our youth to
                    meet, connect and discover the talent within our own
                    community. It was about reviving friendships, building new
                    bonds, bringing Devpur families closer and creating a{" "}
                    <strong className="font-semibold text-[#0F172A]">stronger</strong>{" "}
                    sense of belonging among us Devpurians.
                  </p>
                </div>

                {/* Right Arrow Button at Bottom-Right of the Text Card */}
                <div className="absolute bottom-3.5 right-3.5 z-20">
                  <button
                    type="button"
                    onClick={() => setIsImageOpen(true)}
                    aria-label="Slide to View Vision Image (Right to Left)"
                    className="w-11 h-11 rounded-full bg-[#E59837] hover:bg-[#D48529] active:scale-90 text-white flex items-center justify-center shadow-xl border-2 border-white transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* OVERLAPPING IMAGE: Slides in over the text from right to left! */}
              <div
                className={`absolute inset-0 z-30 bg-[#EAE3D6] overflow-hidden transform transition-transform duration-400 ease-out ${
                  isImageOpen
                    ? "translate-x-0 pointer-events-auto shadow-inner"
                    : "translate-x-full pointer-events-none"
                }`}
              >
                <Image
                  src="/history/devpur_vision_team_sunset.jpg"
                  alt="Devpur Cricket Club team brotherhood standing together facing sunset"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-[center_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                {/* Left Arrow Button at Bottom-Left of the Image Card */}
                <div className="absolute bottom-3.5 left-3.5 z-40">
                  <button
                    type="button"
                    onClick={() => setIsImageOpen(false)}
                    aria-label="Back to Vision Text (Left to Right)"
                    className="w-11 h-11 rounded-full bg-[#E59837] hover:bg-[#D48529] active:scale-90 text-white flex items-center justify-center shadow-xl border-2 border-white transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
