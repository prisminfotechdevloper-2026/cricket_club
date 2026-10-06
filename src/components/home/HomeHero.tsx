import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { ChevronRight, ShieldCheck, Flame, Radio } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-border/80 bg-gradient-to-b from-[#FBFAF8] to-background">
      {/* Subtle athletic field lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#090A0C 1px, transparent 1px), radial-gradient(#090A0C 1px, #F6F5F3 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-copper" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-black">
                DEVPUR CRICKET CLUB
              </span>
              <span className="text-muted text-xs">•</span>
              <span className="text-xs font-semibold text-brand-copper">
                Active Season 2026–27
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-black leading-[0.95]">
                TRAIN WITH PURPOSE.
                <br />
                <span className="text-brand-copper">PLAY WITH PRIDE.</span>
                <br />
                BUILD THE LEGACY.
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-foreground-soft font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              A competitive cricket club built around disciplined training,
              dedicated coaching, player development, match experience, and a
              passionate sporting brotherhood in Rajasthan.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/matches/dcc-vs-royal-xi"
                className="px-6 py-3.5 rounded-xl bg-brand-charcoal hover:bg-brand-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                <span>View Live Score</span>
                <ChevronRight className="w-4 h-4 text-brand-peach transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/matches"
                className="px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-soft border border-border text-brand-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm"
              >
                View Matches & Fixtures
              </Link>

              <Link
                href="/about"
                className="px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground-soft hover:text-brand-copper transition-colors"
              >
                Explore The Club
              </Link>
            </div>

            {/* Quick Micro Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-foreground-soft">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-copper" />
                <span>Certified Coaching Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-brand-copper" />
                <span>JPL 2026 Semi-Finalists</span>
              </div>
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-brand-red" />
                <span>Simulated Match Live</span>
              </div>
            </div>
          </div>

          {/* Right Column: DCC Crest Feature Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-md text-center sports-card">
              {/* Outer decorative ring */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 mx-auto drop-shadow-xl my-2">
                <Image
                  src="/logo/logo.png"
                  alt="Devpur Cricket Club Official Crest"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 176px, 224px"
                />
              </div>

              <div className="space-y-1.5 pt-4 border-t border-border/80">
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-brand-black tracking-tight">
                  DEVPUR CRICKET CLUB
                </h3>
                <p className="text-xs uppercase font-bold tracking-widest text-brand-copper">
                  Club Development & Competition Program
                </p>
                <p className="text-xs text-muted max-w-xs mx-auto pt-1">
                  Turf net training, professional coaching syllabus, and competitive multi-tournament participation.
                </p>
              </div>

              {/* Club Season Badge */}
              <div className="mt-4 pt-3 flex items-center justify-around border-t border-border/60 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted block">Session</span>
                  <span className="font-bold text-brand-black">Oct – Mar</span>
                </div>
                <div className="h-6 w-px bg-border" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted block">Ground</span>
                  <span className="font-bold text-brand-black">Devpur Oval</span>
                </div>
                <div className="h-6 w-px bg-border" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted block">Status</span>
                  <span className="font-bold text-brand-copper">Semi-Finals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
