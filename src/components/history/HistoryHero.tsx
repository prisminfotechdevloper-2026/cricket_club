"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";

export function HistoryHero() {
  return (
    <article
      aria-label="Our Story - Devpur Cricket Club"
      className="relative w-full overflow-hidden bg-[#FAF7F2] py-8 sm:py-12 md:py-16 border-b border-[#EAE3D6]"
    >
      {/* Soft warm background glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 w-[560px] h-[360px] rounded-full bg-[#f39a3b]/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[480px] h-[380px] rounded-full bg-[#EAE3D6]/40 blur-3xl" />
      </div>

      <Container className="relative z-10 max-w-5xl">
        {/* =====================================================================
            01. HERO HEADER: Eyebrow + H1 + Hero Image + Action Hook
            ===================================================================== */}
        <header className="flex flex-col space-y-6 sm:space-y-8">
          {/* Eyebrow & Category */}
          <div className="inline-flex items-center gap-3">
            <span className="font-body font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-[#f39a3b]">
              Our Story
            </span>
            <span className="w-10 h-px bg-[#f39a3b]" aria-hidden="true" />
            <span className="text-xs text-stone-500 font-medium">Est. 2013</span>
          </div>

          {/* H1 Headline (Exactly as specified in story.md) */}
          <h1 className="font-headline text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-extrabold tracking-tight leading-[1.08] text-[#0F172A] max-w-4xl">
            Every team has a beginning. Ours began{" "}
            <span className="text-[#f39a3b]">with a conversation.</span>
          </h1>

          {/* Hero Image Container: 16:9 / 16:10 format with descriptive alt */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-xl sm:shadow-2xl border border-stone-200/90 group">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#EAE3D6]">
              <Image
                src="/history/image.png"
                alt="Devpur Cricket Club team members in traditional cricket whites on the maidan"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1080px"
                className="object-cover object-[center_32%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Verified Team Tag */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 bg-black/80 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold shadow-md">
                Devpur Cricket Club • Matunga Ground
              </div>
            </div>
          </div>
        </header>

        {/* =====================================================================
            02. CHAPTER 1: Where it started + The Historic Quote
            ===================================================================== */}
        <section className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#EAE3D6]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#f39a3b]" />
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0F172A] tracking-tight">
              Where it started
            </h2>
          </div>

          <div className="space-y-5 text-stone-700 text-base sm:text-[17px] md:text-lg leading-[1.78] max-w-3xl">
            <p>
              The passion for cricket has always been alive in our KVO community.
              Year after year, the Kutchi Visa Oswal (KVO) Cricket Tournaments
              brought the Kutchi community together through competition, recreation
              and a shared love for the game. Watching that spirit, two friends
              from Devpur Gaam started talking.
            </p>

            {/* Heart-Touching Blockquote Container */}
            <blockquote className="my-8 sm:my-10 rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-[#EAE3D6] shadow-md relative overflow-hidden">
              <span
                className="font-headline text-7xl sm:text-8xl md:text-9xl font-black text-[#f39a3b]/15 absolute -top-4 -left-1 select-none pointer-events-none"
                aria-hidden="true"
              >
                “
              </span>
              <div className="relative z-10 pl-4 sm:pl-6 border-l-4 border-[#f39a3b]">
                <p className="font-headline text-lg sm:text-xl md:text-2xl font-bold text-[#0F172A] leading-snug tracking-tight">
                  “When cricket can bring so many people together, why can&apos;t we build a Devpur Gaam team of our own and bring Devpur&apos;s youngsters together?”
                </p>
                <cite className="block font-body text-xs sm:text-sm font-semibold text-[#f39a3b] uppercase tracking-wider mt-3 not-italic">
                  — The conversation between two friends from Devpur Gaam
                </cite>
              </div>
            </blockquote>

            <p>
              A casual conversation became an idea worth pursuing: one team, one
              identity, one shared passion for the youth of Devpur.
            </p>
          </div>
        </section>

        {/* =====================================================================
            03. CHAPTER 2: More than tournaments
            ===================================================================== */}
        <section className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#EAE3D6]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#f39a3b]" />
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0F172A] tracking-tight">
              More than tournaments
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5 text-stone-700 text-base sm:text-[17px] md:text-lg leading-[1.78]">
              <p>
                The vision was bigger than playing matches. We wanted the
                youngsters of Devpur to meet, connect and discover the talent
                within our community, to revive friendships, build new bonds and
                bring Devpur families closer. We imagined a team that gives our
                youth a reason to come together, a platform to show their
                potential, and memories to carry for years.
              </p>
              <p>
                So the conversation became a vision, and the vision became
                Devpur Cricket Club.
              </p>
            </div>

            {/* Core Pillars Mini-Callout */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-[#EAE3D6] shadow-sm flex flex-col space-y-3.5">
              <span className="font-body text-xs font-bold uppercase tracking-wider text-[#f39a3b]">
                The Foundational Pillars
              </span>
              <div className="flex items-center gap-3 text-stone-800 font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-[#f39a3b]" />
                <span>One Team</span>
              </div>
              <div className="flex items-center gap-3 text-stone-800 font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-[#f39a3b]" />
                <span>One Identity</span>
              </div>
              <div className="flex items-center gap-3 text-stone-800 font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-[#f39a3b]" />
                <span>One Shared Passion</span>
              </div>
              <div className="pt-2 border-t border-stone-100 text-xs text-stone-500">
                Created for the youth and families of Devpur Gaam.
              </div>
            </div>
          </div>
        </section>



        {/* =====================================================================
            05. CLOSING BLOCK: Roots, People & Pride
            ===================================================================== */}
        <section className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-white p-7 sm:p-10 md:p-12 border border-[#EAE3D6] shadow-md text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-headline text-xl sm:text-2xl md:text-[26px] font-bold text-[#0F172A] leading-snug">
                Devpur Cricket Club is not just about the game. It is about our roots, our people and the pride of Devpur Gaam. This is where our story began, and it is only the beginning.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#f39a3b] hover:bg-[#d8842c] active:scale-[0.98] text-white font-body font-semibold text-sm shadow-md shadow-[#f39a3b]/25 hover:shadow-lg transition-[background-color,box-shadow,transform] duration-200 cursor-pointer"
              >
                <span>Join Devpur</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </article>
  );
}
