"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../common/Container";
import { Users, Quote, MapPin, Trophy, UserCheck, ShieldCheck } from "lucide-react";

export function CricketPhilosophyStory() {
  return (
    <section className="py-16 sm:py-24 bg-background border-b border-border/80 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-xs font-bold uppercase tracking-wider">
             <span>Club Ethos &bull; The Soul of DCC Cricket</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.05]">
            More Than a Game: Cricket as a <span className="text-brand-orange">Medium of Connection.</span>
          </h2>

          <p className="text-foreground-soft text-sm sm:text-base lg:text-lg font-body leading-relaxed">
            On the surface, cricket is played with willow and leather across twenty-two yards.
            For Devpur Cricket Club, it is the sacred bond that unites generations, teaches humility,
            and binds our community into an unbreakable brotherhood.
          </p>
        </div>

        {/* Narrative & Emotional Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-foreground-soft font-body text-sm sm:text-base leading-relaxed">
            <div className="space-y-4">
              <p className="first-letter:text-4xl first-letter:font-black first-letter:text-brand-orange first-letter:float-left first-letter:mr-3 first-letter:font-headline">
                Cricket in Mumbai has never been a casual pastime; it is a cultural leveller and an emotional religion.
                At Devpur Cricket Club, we view cricket as a <strong>powerful medium to connect human hearts</strong>.
                When eleven players put on the DCC whites, social backgrounds, ages, and differences dissolve.
                An 18-year-old college student stands shoulder-to-shoulder with a senior club veteran,
                bound by the singular purpose of fighting for every run and backing up every throw.
              </p>

              <p>
                The true beauty of our club lives in the <strong>quiet struggle and relentless consistency</strong>.
                Long before the match applause begins, it starts at 6:00 AM on the Mumbai suburban trains.
                Carrying heavy cricket kit bags through bustling stations, reaching <strong>Matunga Ground</strong> as the
                first rays of light touch the dew-soaked grass, and bowling spell after spell in the sweltering heat —
                this shared sweat and sacrifice forms an unspoken respect that cannot be bought or manufactured.
              </p>

              <p>
                Rooted in Mumbai&apos;s historic <em>Maidan culture</em> and the legendary <em>&quot;Khadoos&quot; spirit</em>,
                cricket teaches our boys how to face failure with poise. Walking back to the pavilion after a tough dismissal,
                standing tall through a batting collapse, or cheering from the boundary when a teammate takes a blinder —
                these moments mold young boys into responsible, grounded men.
              </p>
            </div>

            {/* Editorial Quote Box */}
            <div className="p-6 rounded-2xl bg-surface border-l-4 border-l-brand-orange border border-border/80 shadow-xs relative">
              <Quote className="w-8 h-8 text-brand-orange/20 absolute top-4 right-4" />
              <p className="font-headline text-base sm:text-lg font-bold text-foreground italic leading-snug">
                &quot;Matches will be won and lost, tournaments will come and go. But the brotherhood built inside the
                nets of Matunga Ground, the chai shared after 50 overs under the banyan tree, and the trust forged in the heat of battle — that is what Devpur Cricket Club stands for.&quot;
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-mono font-bold text-brand-copper uppercase tracking-wider">
                <span>&mdash; DCC Team Ethos</span>
                <span>&bull;</span>
                <span>Devpur Gaam Heritage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tangible Cricket Operations & Squad Standards */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-surface border border-border p-6 sm:p-7 shadow-sm space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-orange">
                    Club Specifications
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                    Cricket Operations &bull; Standards
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3.5 text-xs font-mono">
                {/* 1. Ground & Schedule */}
                <div className="p-3.5 rounded-2xl bg-surface-soft border border-border/70 space-y-1.5">
                  <div className="flex items-center justify-between text-foreground font-bold">
                    <span className="flex items-center gap-1.5 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                      Matunga Ground, Mumbai
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                      TURF NETS
                    </span>
                  </div>
                  <p className="text-[11px] text-foreground-soft font-body leading-relaxed">
                    3-Day weekly rhythm (Mon &bull; Wed &bull; Fri &bull; 7:00 AM &ndash; 9:30 AM) on prepared turf &amp; clay practice wickets.
                  </p>
                </div>

                {/* 2. Format & Tournaments */}
                <div className="p-3.5 rounded-2xl bg-surface-soft border border-border/70 space-y-1.5">
                  <div className="flex items-center justify-between text-foreground font-bold">
                    <span className="flex items-center gap-1.5 text-xs">
                      <Trophy className="w-3.5 h-3.5 text-brand-orange" />
                      Leather-Ball Tournaments
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-brand-orange/10 text-brand-orange font-bold">
                      COMPETITIVE
                    </span>
                  </div>
                  <p className="text-[11px] text-foreground-soft font-body leading-relaxed">
                    40 &amp; 50-over league fixtures, Kanga League preparation &amp; inter-club knockout tournament circuits.
                  </p>
                </div>

                {/* 3. Coach & Selection Criteria */}
                <div className="p-3.5 rounded-2xl bg-surface-soft border border-border/70 space-y-1.5">
                  <div className="flex items-center justify-between text-foreground font-bold">
                    <span className="flex items-center gap-1.5 text-xs">
                      <UserCheck className="w-3.5 h-3.5 text-brand-orange" />
                      Selection on Merit &amp; Fitness
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-foreground-soft font-bold">
                      COACH MANDATE
                    </span>
                  </div>
                  <p className="text-[11px] text-foreground-soft font-body leading-relaxed">
                    Under Coach Aditya Koli (Kanga B Div), Match XI spots are earned strictly through net attendance, work ethic, and fitness standards.
                  </p>
                </div>

                {/* 4. Squad & Uniform Code */}
                <div className="p-3.5 rounded-2xl bg-surface-soft border border-border/70 space-y-1.5">
                  <div className="flex items-center justify-between text-foreground font-bold">
                    <span className="flex items-center gap-1.5 text-xs">
                      <Users className="w-3.5 h-3.5 text-brand-orange" />
                      50+ Squad &bull; DCC Whites
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-foreground-soft font-bold">
                      DEVPUR GAAM
                    </span>
                  </div>
                  <p className="text-[11px] text-foreground-soft font-body leading-relaxed">
                    Official white flannels mandatory for all sessions. Representing Devpur Gaam with collective discipline and brotherhood.
                  </p>
                </div>
              </div>

              {/* Quick stats footer */}
              <div className="pt-3 border-t border-border/70 grid grid-cols-3 gap-2 text-center font-mono">
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase block font-bold">Weekly</span>
                  <span className="font-headline font-black text-sm sm:text-base text-foreground">3 Days</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase block font-bold">Wickets</span>
                  <span className="font-headline font-black text-sm sm:text-base text-brand-orange">Turf / Clay</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase block font-bold">Squad</span>
                  <span className="font-headline font-black text-sm sm:text-base text-foreground">50+ Men</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
