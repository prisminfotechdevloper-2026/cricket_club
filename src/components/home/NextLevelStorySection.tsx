import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../common/Container";

export function NextLevelStorySection() {
  return (
    <section className="py-16 sm:py-24 border-b border-border/80 bg-surface">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-charcoal text-white text-[11px] font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span>MEMBER SPOTLIGHT & PROGRESSION</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight leading-[0.98]">
            Celebrating Member Milestones &amp; Growth
          </h2>
          <p className="mt-4 text-sm sm:text-base text-foreground-soft leading-relaxed">
            Through consistent net practice at Matunga Ground, 25+ seasonal leather-ball fixtures, and dedicated coaching guidance under Mr. Aditya Koli, our members hone match temperament, achieve milestones, and represent Devpur Gaam with distinction across community cricket circuits.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Story Card */}
          <div className="lg:col-span-7 rounded-3xl bg-surface-soft border border-border p-6 sm:p-8 flex flex-col justify-between shadow-xs sports-card">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-black">
                  Excellence in Leather-Ball Cricket
                </span>
                <span className="text-[11px] font-mono text-muted">
                  Matunga Ground Net Rhythm
                </span>
              </div>

              <div>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-brand-black leading-snug">
                  Building Match-Winning Temperament
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground-soft leading-relaxed">
                  Regular club training under Head Coach Mr. Aditya Koli (Kanga B Division player) bridges the gap between recreational net play and high-stakes tournament cricket. Our players refine defensive technique, face genuine pace, and learn match-finishing composure.
                </p>
              </div>

              {/* Photo Showcase: Orange & Purple Cap Honorees */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-stone-900 group shadow-sm">
                  <Image
                    src="/images/orange_cap_player.png"
                    alt="Orange Cap run-scorer honor"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 via-25% to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white pointer-events-none">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-peach block mb-0.5">
                      TOP RUN-SCORER
                    </span>
                    <p className="text-xs sm:text-sm font-bold leading-tight">Orange Cap Honoree</p>
                  </div>
                </div>

                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-stone-900 group shadow-sm">
                  <Image
                    src="/images/purpal_cap_player.png"
                    alt="Purple Cap wicket-taker honor"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 via-25% to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white pointer-events-none">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-peach block mb-0.5">
                      LEADING WICKETS
                    </span>
                    <p className="text-xs sm:text-sm font-bold leading-tight">Purple Cap Honoree</p>
                  </div>
                </div>
              </div>

              {/* Development Pillars (Typographic, NO Clipart Icons) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-border">
                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-brand-copper">01</span>
                  <h4 className="text-xs font-bold text-brand-black uppercase tracking-wider">Tactical Clarity</h4>
                  <p className="text-[11px] text-muted leading-relaxed">Field setting awareness &amp; situation management</p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-brand-copper">02</span>
                  <h4 className="text-xs font-bold text-brand-black uppercase tracking-wider">Match Volume</h4>
                  <p className="text-[11px] text-muted leading-relaxed">25+ seasonal competitive leather-ball fixtures</p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-brand-copper">03</span>
                  <h4 className="text-xs font-bold text-brand-black uppercase tracking-wider">KVO Recognition</h4>
                  <p className="text-[11px] text-muted leading-relaxed">Rank #10 among 10,000+ community cricket players</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Dark Athletic Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-7 sm:p-8 rounded-3xl dark-sports-card text-white flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-5 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-peach text-[11px] font-bold uppercase tracking-widest">
                  <span>Club Practice Rhythm</span>
                </div>

                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Consistent Practice &amp; Community Values
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  We focus on real cricket discipline: turf practice at Matunga Ground, intense leather-ball match volume, experienced coaching guidance under Mr. Aditya Koli, and an empowering club brotherhood.
                </p>

                {/* Progression Steps */}
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                    <span className="font-mono text-sm font-extrabold text-brand-orange mt-0.5">
                      01
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Consistent Net Practice</h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">Mon, Wed, Fri sessions keep batting and bowling rhythm sharp throughout the season.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                    <span className="font-mono text-sm font-extrabold text-brand-orange mt-0.5">
                      02
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">High-Pressure Community Cups</h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">Competing against premier community sides tests decision-making under intense scoreboard pressure.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                    <span className="font-mono text-sm font-extrabold text-brand-orange mt-0.5">
                      03
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Community Pride &amp; Network</h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">Representing Devpur Gaam builds genuine respect and lasting social and professional relationships.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-400">
                  50+ Active Members • Est. 2013
                </span>
                <Link
                  href="/players"
                  className="font-bold text-brand-orange hover:text-brand-peach transition-colors uppercase tracking-wider"
                >
                  Explore Squad Roster →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
