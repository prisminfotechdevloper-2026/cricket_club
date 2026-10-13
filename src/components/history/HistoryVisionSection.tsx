"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { Container } from "../common/Container";

/* ------------------------------------------------------------------ */
/* Vision & Tournament Stories Data                                   */
/* ------------------------------------------------------------------ */
const VISION_SLIDES = [
  {
    id: "vision-foundation",
    tabLabel: "01. Club Vision",
    eyebrow: "A VISION BEYOND THE GAME",
    headline: "A Vision Beyond the Game",
    narrative: (
      <>
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
      </>
    ),
    badges: null,
    imageSrc: "/history/devpur_vision_team_sunset.jpg",
    imageAlt:
      "Devpur Cricket Club team brotherhood standing together facing sunset",
    cardBadge: "Club Brotherhood & Vision",
  },
  {
    id: "tournament-triumph",
    tabLabel: "02. Santneet Cup Glory",
    eyebrow: "HISTORIC TOURNAMENT MOMENT • 2024–25",
    headline: "The Winning Glory: Devpur vs Bada",
    narrative: (
      <>
        On <strong className="font-semibold text-[#0F172A]">23rd November 2024</strong> in the
        esteemed <strong className="font-semibold text-[#0F172A]">Santneet Cup (Village Group)</strong>,
        Devpur Cricket Club wrote an unforgettable chapter against{" "}
        <strong className="font-semibold text-[#0F172A]">Bada</strong>.
        In a tense match, a phenomenal bowling spell of{" "}
        <strong className="font-semibold text-[#0F172A]">4-0-29-5</strong>,
        crowned with a thrilling <strong className="font-semibold text-[#0F172A]">Hat-Trick</strong> and the{" "}
        <strong className="font-semibold text-[#0F172A]">Man of the Match</strong> award,
        sealed an emphatic victory. This inscribed match ball remains a proud
        historic relic of Devpur Gaam&apos;s winning glory.
      </>
    ),
    badges: [
      { label: "Date", value: "23/11/2024" },
      { label: "Fixture", value: "Devpur v/s Bada" },
      { label: "Spell", value: "4-0-29-5 (5 Wkts)" },
      { label: "Milestone", value: "1 Hat-Trick" },
      { label: "Honor", value: "Man of the Match" },
    ],
    imageSrc: "/history/santneet_cup_winning_ball.jpg",
    imageAlt:
      "Santneet Cup 2024-25 historic winning match ball with 5 wickets and hat-trick inscribed",
    cardBadge: "Santneet Cup 2024–25 Match Ball",
  },
];

export function HistoryVisionSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileOverlayOpen, setMobileOverlayOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
    setMobileOverlayOpen(false);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50 && activeSlide < VISION_SLIDES.length - 1) {
      goToSlide(activeSlide + 1);
    } else if (diff < -50 && activeSlide > 0) {
      goToSlide(activeSlide - 1);
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="history-vision-stories"
      aria-label="A Vision Beyond the Game & Tournament Moments"
      className="relative w-full overflow-hidden bg-[#FAF7F2] py-5 sm:py-6 md:py-6 border-b border-[#EAE3D6]"
    >
      <Container>
        {/* =====================================================================
            TOP ROW-WISE SLIDE NAVIGATION (TABS + PREV/NEXT BUTTONS)
            Allows sliding horizontally between Part 1 (Vision) & Part 2 (Winning Ball)
            ===================================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-[#EAE3D6]">
          {/* Tab Navigation Pills */}
          <div className="flex items-center gap-2">
            {VISION_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeSlide === idx
                    ? "bg-[#E59837] text-white shadow-md scale-102"
                    : "bg-white/90 border border-[#EAE3D6] text-[#64748B] hover:text-[#0F172A] hover:bg-white"
                }`}
              >
                {slide.tabLabel}
              </button>
            ))}
          </div>

          {/* Prev / Next Slide Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#EAE3D6] text-[#0F172A] disabled:opacity-35 hover:bg-[#FAF7F2] active:scale-95 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer disabled:cursor-not-allowed shadow-xs"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="hidden sm:inline">PREV</span>
            </button>
            <button
              type="button"
              onClick={() =>
                goToSlide(Math.min(VISION_SLIDES.length - 1, activeSlide + 1))
              }
              disabled={activeSlide === VISION_SLIDES.length - 1}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#EAE3D6] text-[#0F172A] disabled:opacity-35 hover:bg-[#FAF7F2] active:scale-95 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer disabled:cursor-not-allowed shadow-xs"
              aria-label="Next slide"
            >
              <span className="hidden sm:inline">NEXT</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* =====================================================================
            ROW-WISE SLIDER CONTAINER:
            Uses CSS translateX so only 1 slide is in viewport at a time.
            Zero bleed/mixing between slides, with ample vertical headroom so
            top and bottom decorative frames are never clipped or cropped.
            ===================================================================== */}
        <div
          className="w-full overflow-hidden pt-5 pb-6 sm:pt-7 sm:pb-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {VISION_SLIDES.map((slide, sIdx) => (
              <div
                key={slide.id}
                className="w-full min-w-full shrink-0 box-border px-1 sm:px-3"
              >
                {/* =============================================================
                    DESKTOP LAYOUT (lg+): 2-Column Side-by-Side
                    Left: Eyebrow + Headline + Narrative + Badges
                    Right: Layered Artistic Photo Card
                    ============================================================= */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">
                  {/* Left Column: Narrative Details */}
                  <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-4 text-left">
                    <div className="inline-flex items-center gap-2">
                      <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#E59837]">
                        {slide.eyebrow}
                      </span>
                    </div>

                    <h2 className="font-serif text-[32px] sm:text-[38px] xl:text-[44px] font-bold tracking-tight leading-[1.18] text-[#0F172A]">
                      {slide.headline}
                    </h2>

                    <p className="font-body text-[#525763] text-sm sm:text-[15px] leading-[1.8] font-normal">
                      {slide.narrative}
                    </p>

                    {/* Stat Badges (Shown on Slide 2 for tournament match) */}
                    {slide.badges && (
                      <div className="pt-2">
                        <div className="flex items-center gap-2 mb-2.5">
                          <Trophy className="w-4 h-4 text-[#E59837]" />
                          <span className="font-body font-bold text-xs uppercase tracking-wider text-[#D97724]">
                            Match Feats Inscribed on Ball:
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2.5">
                          {slide.badges.slice(2).map((b) => (
                            <div
                              key={b.label}
                              className="bg-white border border-[#EAE3D6] rounded-xl p-2.5 sm:p-3 text-left shadow-xs"
                            >
                              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#D97724] block">
                                {b.label}
                              </span>
                              <span className="text-sm sm:text-[15px] font-bold text-[#0F172A] font-body block mt-0.5">
                                {b.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Layered Artistic Photo Card with Prominent Amber Frame */}
                  <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center pt-5 pb-5 px-3 sm:px-6">
                    <div className="relative w-full max-w-[540px] xl:max-w-[580px]">
                      {/* Back Layer: Warm Amber / Ochre Offset Decorative Frame (Matching Ball Photo Frame) */}
                      <div
                        className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4.5 w-[97%] sm:w-[98%] h-[88%] sm:h-[90%] rounded-2xl sm:rounded-[32px] bg-[#EFA748] transform rotate-1 sm:rotate-1.5 transition-transform duration-300 pointer-events-none"
                        aria-hidden="true"
                      />

                      {/* Decorative Warm Watercolor Accent at Bottom-Left */}
                      <div
                        className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-32 sm:w-44 h-24 sm:h-32 rounded-3xl bg-[#EFA748]/75 blur-xs -rotate-6 pointer-events-none"
                        aria-hidden="true"
                      />

                      {/* Main Photo Card Container */}
                      <div className="relative z-10 w-full rounded-2xl sm:rounded-[28px] overflow-hidden bg-white shadow-2xl border-2 sm:border-4 border-white">
                        <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#EAE3D6]">
                          <Image
                            src={slide.imageSrc}
                            alt={slide.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 600px"
                            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-103"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                          {/* Card Tag Badge */}
                          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 bg-black/75 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold shadow-md">
                            {slide.cardBadge}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =============================================================
                    MOBILE LAYOUT (< lg): Interactive Mobile Card Slider
                    Header is outside at the top.
                    Inside card: Text narrative & stats, with button to slide photo over!
                    ============================================================= */}
                <div className="block lg:hidden w-full px-1 pt-1 pb-4">
                  {/* Header outside the card */}
                  <div className="flex flex-col space-y-2 text-left mb-4 sm:mb-5">
                    <span className="font-body font-bold text-xs tracking-[0.22em] uppercase text-[#E59837]">
                      {slide.eyebrow}
                    </span>
                    <h2 className="font-serif text-[26px] sm:text-[32px] font-bold tracking-tight leading-[1.18] text-[#0F172A]">
                      {slide.headline}
                    </h2>
                  </div>

                  <div className="relative w-full max-w-[560px] mx-auto pt-5 pb-5 px-3 sm:px-4">
                    {/* Back Frame: Exact match to Screenshot 2 */}
                    <div
                      className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-[97%] sm:w-[98%] h-[88%] sm:h-[90%] rounded-2xl sm:rounded-[32px] bg-[#EFA748] transform rotate-1 sm:rotate-1.5 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Decorative Warm Accent at Bottom-Left */}
                    <div
                      className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-28 sm:w-36 h-20 sm:h-28 rounded-3xl bg-[#EFA748]/75 blur-xs -rotate-6 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Interactive Card Shell */}
                    <div className="relative z-10 w-full min-h-[320px] sm:min-h-[360px] rounded-2xl sm:rounded-[28px] overflow-hidden bg-white shadow-2xl border-2 sm:border-4 border-white">
                      {/* Default View: Text + Stats */}
                      <div className="p-5 sm:p-6 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] text-left bg-[#FAF7F2]">
                        <div className="space-y-3 pb-12">
                          <p className="font-body text-[#525763] text-xs sm:text-[13.5px] leading-[1.75] font-normal">
                            {slide.narrative}
                          </p>

                          {/* Match Feats Badges for Tournament Slide */}
                          {slide.badges && (
                            <div className="pt-2">
                              <div className="grid grid-cols-2 gap-2">
                                {slide.badges.slice(2).map((b) => (
                                  <div
                                    key={b.label}
                                    className="bg-white border border-[#EAE3D6] rounded-lg p-2 text-left shadow-xs"
                                  >
                                    <span className="text-[10px] font-semibold uppercase text-[#D97724] block">
                                      {b.label}
                                    </span>
                                    <span className="text-xs font-bold text-[#0F172A] block mt-0.5">
                                      {b.value}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right Arrow Button at Bottom-Right to Slide Photo Over */}
                        <div className="absolute bottom-3.5 right-3.5 z-20">
                          <button
                            type="button"
                            onClick={() => setMobileOverlayOpen(true)}
                            aria-label="Slide to View Match Photo"
                            className="w-10 h-10 rounded-full bg-[#E59837] hover:bg-[#D48529] active:scale-90 text-white flex items-center justify-center shadow-xl border-2 border-white transition-all cursor-pointer"
                          >
                            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                          </button>
                        </div>
                      </div>

                      {/* Overlapping Image: Slides in over the text */}
                      <div
                        className={`absolute inset-0 z-30 bg-[#EAE3D6] overflow-hidden transform transition-transform duration-400 ease-out ${
                          mobileOverlayOpen && activeSlide === sIdx
                            ? "translate-x-0 pointer-events-auto"
                            : "translate-x-full pointer-events-none"
                        }`}
                      >
                        <Image
                          src={slide.imageSrc}
                          alt={slide.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                        {/* Badge overlay on image */}
                        <div className="absolute top-3.5 left-3.5 z-40 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[11px] font-semibold">
                          {slide.cardBadge}
                        </div>

                        {/* Left Arrow Button to Slide Back to Text */}
                        <div className="absolute bottom-3.5 left-3.5 z-40">
                          <button
                            type="button"
                            onClick={() => setMobileOverlayOpen(false)}
                            aria-label="Back to Narrative Text"
                            className="w-10 h-10 rounded-full bg-[#E59837] hover:bg-[#D48529] active:scale-90 text-white flex items-center justify-center shadow-xl border-2 border-white transition-all cursor-pointer"
                          >
                            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
