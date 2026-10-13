"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../common/Container";

/* Desktop stacked quote box and narrative */
function DesktopQuoteAndFollowup() {
  return (
    <>
      {/* Highlighted Quote Box with Styled Quotation Mark */}
      <div className="rounded-2xl sm:rounded-3xl bg-[#0F1626]/85 backdrop-blur-md border border-white/12 p-5 sm:p-6 md:p-7 shadow-xl">
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Large Stylized Double Quote Mark */}
          <span
            className="font-headline text-5xl sm:text-6xl md:text-7xl font-black text-[#f39a3b] leading-none shrink-0 select-none -mt-1 sm:-mt-2"
            aria-hidden="true"
          >
            “
          </span>

          {/* Quote Text with Bold Emphasis */}
          <p className="font-body text-[#CBD5E1] text-sm sm:text-[15px] md:text-base leading-[1.68] font-normal">
            When cricket can bring so many people together, why can&apos;t
            we build a{" "}
            <strong className="font-bold text-white tracking-wide">
              DEVPUR GAAM
            </strong>{" "}
            team of our own{" "}
            <strong className="font-bold text-[#f39a3b] tracking-wide">
              TO BRING DEVPUR YOUNGSTERS TOGETHER?
            </strong>
          </p>
        </div>
      </div>

      {/* Narrative Follow-Up Paragraph */}
      <p className="font-body text-[#94A3B8] text-sm sm:text-[15px] md:text-base leading-[1.78] max-w-xl">
        What started as a casual conversation soon turned into an idea worth
        pursuing — bringing Devpur&apos;s youth together under one team,
        one identity and one shared passion.
      </p>
    </>
  );
}

export function HistoryConversationSection() {
  // Mobile: Controls whether the content card is slid over the image
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <section
      aria-label="The Conversation - When Cricket Can Bring So Many People Together"
      className="relative w-full overflow-hidden bg-[#0A0E15] py-8 sm:py-12 md:py-14 lg:py-18 border-b border-white/10"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-[#f39a3b]/5 blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[400px] h-[350px] rounded-full bg-[#1e293b]/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-16 items-center">
          {/* =====================================================================
              MOBILE-ONLY HEADER: EYEBROW & TITLE SHOWN FIRST ON SMALL SCREENS
              ===================================================================== */}
          <div className="flex lg:hidden flex-col space-y-3 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="font-body font-bold text-xs tracking-[0.22em] uppercase text-[#f39a3b]">
                THE CONVERSATION
              </span>
            </div>
            <h2 className="font-headline text-[26px] sm:text-[34px] font-extrabold uppercase tracking-tight leading-[1.1] text-white">
              When Cricket Can Bring{" "}
              <span className="text-[#f39a3b]">So Many People Together?</span>
            </h2>
          </div>

          {/* =====================================================================
              LEFT COLUMN (DESKTOP) / MIDDLE (MOBILE):
              LAYERED ARTISTIC CRICKET BALL AT SUNSET CARD
              ON MOBILE: SUPPORTS SLIDING OVERLAY WITH ARROWS
              ===================================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center pt-2 sm:pt-4 lg:pt-0">
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              {/* Main Photo Card Container with relative positioning for overlay */}
              <div className="relative z-10 w-full min-h-[320px] sm:min-h-[360px] rounded-2xl sm:rounded-[28px] overflow-hidden bg-[#0F1626] shadow-2xl border border-white/12">
                <div className="relative aspect-[16/12] sm:aspect-[16/10] min-h-[320px] sm:min-h-[360px] w-full overflow-hidden bg-[#182133]">
                  {/* Photo: Devpur Cricket Club Team Players on the ground */}
                  <Image
                    src="/images/team_group.png"
                    alt="Devpur Cricket Club players and teammates"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-[center_20%] transition-transform duration-700 ease-out hover:scale-103"
                  />
                  {/* Subtle ambient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Club Players Badge */}
                  <div className="hidden sm:block absolute bottom-3.5 left-3.5 z-20 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-semibold pointer-events-none">
                    Devpur Cricket Club Brotherhood
                  </div>

                  {/* =============================================================
                      MOBILE ONLY: RIGHT ARROW AT BOTTOM-RIGHT OF IMAGE
                      Clicking this slides the content OVER the image (right-to-left)
                      ============================================================= */}
                  <div
                    className={`lg:hidden absolute bottom-3.5 right-3.5 z-20 transition-[opacity,transform] duration-300 ${
                      isOverlayOpen
                        ? "opacity-0 pointer-events-none scale-75"
                        : "opacity-100 pointer-events-auto scale-100"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setIsOverlayOpen(true)}
                      aria-label="Slide to Read Conversation (Right to Left)"
                      className="w-11 h-11 rounded-full bg-[#f39a3b] hover:bg-[#d8842c] active:scale-90 text-white flex items-center justify-center shadow-xl border-2 border-white/20 transition-[background-color,transform] cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>

                  {/* =============================================================
                      MOBILE ONLY: SLIDING CONTENT OVERLAY
                      Slides directly OVER the image from right to left!
                      Contains the quote box + paragraph in column-wise order.
                      Has Left Arrow at bottom-left to slide back out (left-to-right).
                      ============================================================= */}
                  <div
                    className={`lg:hidden absolute inset-0 z-30 bg-[#0A0E15]/95 backdrop-blur-md p-4 sm:p-5 flex flex-col justify-between overflow-y-auto transform transition-transform duration-400 ease-out ${
                      isOverlayOpen
                        ? "translate-x-0 pointer-events-auto shadow-inner"
                        : "translate-x-full pointer-events-none"
                    }`}
                  >
                    {/* Content: Column-Wise stacked (Quote Box + Paragraph) */}
                    <div className="space-y-3.5 text-left pb-14">
                      {/* Highlighted Quote Box */}
                      <div className="rounded-xl sm:rounded-2xl bg-[#0F1626] border border-white/12 p-4 shadow-sm">
                        <div className="flex items-start gap-3">
                          <span
                            className="font-headline text-4xl sm:text-5xl font-black text-[#f39a3b] leading-none shrink-0 select-none -mt-1"
                            aria-hidden="true"
                          >
                            “
                          </span>
                          <p className="font-body text-[#CBD5E1] text-xs sm:text-sm leading-[1.65] font-normal">
                            When cricket can bring so many people together, why
                            can&apos;t we build a{" "}
                            <strong className="font-bold text-white tracking-wide">
                              DEVPUR GAAM
                            </strong>{" "}
                            team of our own{" "}
                            <strong className="font-bold text-[#f39a3b] tracking-wide">
                              TO BRING DEVPUR YOUNGSTERS TOGETHER?
                            </strong>
                          </p>
                        </div>
                      </div>

                      {/* Follow-up Narrative Paragraph */}
                      <p className="font-body text-[#94A3B8] text-xs sm:text-sm leading-[1.7] font-normal px-1">
                        What started as a casual conversation soon turned into an
                        idea worth pursuing — bringing Devpur&apos;s youth
                        together under one team, one identity and one shared
                        passion.
                      </p>
                    </div>

                    {/* Left Arrow Button at the BOTTOM-LEFT of the content */}
                    <div className="absolute bottom-3.5 left-3.5 z-40">
                      <button
                        type="button"
                        onClick={() => setIsOverlayOpen(false)}
                        aria-label="Back to Photo (Left to Right)"
                        className="w-11 h-11 rounded-full bg-[#f39a3b] hover:bg-[#d8842c] active:scale-90 text-white flex items-center justify-center shadow-xl border-2 border-white/20 transition-[background-color,transform] cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN (DESKTOP ONLY):
              THE CONVERSATION NARRATIVE & HIGHLIGHTED QUOTE BOX (STANDARD STACKED)
              ===================================================================== */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 flex-col justify-center space-y-5 text-left">
            {/* Eyebrow / Category Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#f39a3b]">
                THE CONVERSATION
              </span>
            </div>

            {/* Main Headline: Modern Cricket Typography */}
            <h2 className="font-headline text-[30px] sm:text-[38px] md:text-[44px] lg:text-[46px] xl:text-[50px] font-extrabold uppercase tracking-tight leading-[1.08] text-white">
              When Cricket Can Bring{" "}
              <span className="text-[#f39a3b]">So Many People Together?</span>
            </h2>

            {/* Quote Card & Follow-up Narrative */}
            <DesktopQuoteAndFollowup />
          </div>
        </div>
      </Container>
    </section>
  );
}
