"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import {
  Activity,
  Target,
  Shield,
  Zap,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export function HomeCoachingSection() {
  const [coachImgIdx, setCoachImgIdx] = useState(0);
  const [mobilePillarIdx, setMobilePillarIdx] = useState(0);

  const coachImages = [
    {
      src: "/coaching_drill/Aditya_Koli_coach1.png",
      alt: "Aditya Koli - Cricket Coach Devpur Cricket Club in Action",
      tag: "Coach In Action • Match Prep",
      objectPosition: "object-[center_78%]",
    },
    {
      src: "/coaching_drill/Aditya_Koli_coach2.png",
      alt: "Coach Aditya Koli - DCC Turf Net Drills at Matunga Ground",
      tag: "Turf Net Drills • Matunga Ground",
      objectPosition: "object-[center_20%]",
    },
    {
      src: "/coaching_drill/Aditya_Koli_coach3.png",
      alt: "Coach Aditya Koli - Devpur Cricket Club Head Coach",
      tag: "Coach Mentorship • Devpur Cricket Club",
      objectPosition: "object-[center_20%]",
    },
  ];

  // Auto-rotate coach images every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCoachImgIdx((prev) => (prev + 1) % coachImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [coachImages.length]);

  const pillars = [
    {
      step: "01",
      title: "Nets & Training",
      subtitle: "Disciplined Turf Practice",
      tag: "Turf Drills & Nets",
      image: "/coaching_drill/net_training.png",
    },
    {
      step: "02",
      title: "Batting Technique",
      subtitle: "Strokeplay & Composure",
      tag: "Technique & Timing",
      image: "/coaching_drill/batting.png",
    },
    {
      step: "03",
      title: "Bowling Mastery",
      subtitle: "Accuracy & Variations",
      tag: "Pace, Spin & Seam",
      image: "/coaching_drill/balling.png",
    },
    {
      step: "04",
      title: "Fielding & Agility",
      subtitle: "Reflexes & Precision",
      tag: "Ground & Aerial Drills",
      image: "/coaching_drill/fielding.png",
    },
  ];

  // Auto-slide mobile pillars every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setMobilePillarIdx((prev) => (prev + 1) % pillars.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [pillars.length]);

  return (
    <section className="py-14 sm:py-20 bg-background border-b border-border/80 overflow-hidden relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl text-start space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/10 text-brand-orange font-mono text-xs font-bold uppercase tracking-wider">
            <span>Professional Coaching &amp; Player Development</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
            Structured Training Complete Player Development.
          </h2>

          <p className="text-foreground-soft text-sm sm:text-base font-body leading-relaxed max-w-2xl">
            Under the professional guidance of Coach <strong>Aditya Koli</strong> (Kanga B Division),
            our coaching mandate focuses on systematic technical skills, stamina, discipline,
            and match readiness for every Devpur Cricket Club player.
          </p>
        </div>

        {/* =====================================================================
            COACH PROFILE SECTION: Left Single 3s-Rotating Image, Right Summary
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 p-4 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl bg-surface border border-border/80 shadow-sm">
          {/* Left: Single Coach Image (Auto-slides every 3 seconds) */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="relative aspect-[4/5] object-cover sm:aspect-[4/5] max-h-[400px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-border/80 shadow-lg group bg-stone-900">
              {coachImages.map((img, idx) => (
                <div
                  key={img.src}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${coachImgIdx === idx
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                    }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={idx === 0}
                    className={`object-cover ${img.objectPosition} transition-transform duration-700 ease-out group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                </div>
              ))}


            </div>
          </div>

          {/* Right: Coach Summary & Philosophy */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange font-mono text-xs font-bold uppercase tracking-wider">
                <span>Head Coach Profile</span>
              </div>

              <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
                ADITYA KOLI
              </h3>

              <p className="text-xs sm:text-sm font-mono font-bold uppercase text-brand-copper tracking-wider">
                Cricket Coach &middot; Devpur Cricket Club
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-headline text-xl sm:text-2xl font-bold text-foreground">
                Developing Players Beyond the Basics.
              </h4>

              <p className="text-sm sm:text-base text-foreground-soft leading-relaxed font-body">
                At DCC, Aditya Koli guides our players through structured cricket practice focused on technical improvement, fitness, discipline and match preparation. His approach combines skill development with practical match situations, helping players understand their game, identify areas for improvement and build confidence over time.
              </p>
            </div>

            {/* Core Coaching Focus & Regimen */}
            <div className="pt-4 border-t border-border/70 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  Main Focus on
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 text-xs font-mono">
                {[
                  { label: "Batting Development", isHighlight: false },
                  { label: "Bowling Development", isHighlight: false },
                  { label: "Fielding", isHighlight: false },
                  { label: "Fitness & Conditioning", isHighlight: false },
                  { label: "Match Preparation", isHighlight: false },
                  { label: "3 Net Sessions Weekly", isHighlight: true },
                ].map((item) => {

                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 px-2.5 py-2 sm:px-3 sm:py-2.5 rounded-md border transition-all duration-150 shadow-2xs ${item.isHighlight
                          ? "bg-brand-orange/10 border-brand-orange/30 text-brand-orange font-bold hover:bg-brand-orange/15"
                          : "bg-surface-soft border-border/80 font-semibold text-foreground hover:border-brand-orange/40 hover:bg-muted/50"
                        }`}
                    >
                      <span className="leading-snug text-[11px] sm:text-xs">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Header */}
        <div className="mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange block">
            Systematic Training Focus
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
            Core Coaching Mandate &amp; Practice Pillars
          </h3>
        </div>

        {/* 4 Core Pillars - Mobile Auto-Slider (Every 3s) */}
        <div className="block md:hidden">
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-sm">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${mobilePillarIdx * 100}%)` }}
            >
              {pillars.map((item) => (
                <div key={item.step} className="w-full shrink-0">
                  <div className="flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                      
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-2">
                      <h4 className="font-headline text-lg font-bold uppercase tracking-wide text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-brand-copper">
                        {item.subtitle}
                      </p>

                      {/* Bottom Tag */}
                      <div className="pt-3 border-t border-border/80 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                        <span>{item.tag}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {pillars.map((item, idx) => (
              <button
                key={item.step}
                onClick={() => setMobilePillarIdx(idx)}
                aria-label={`Go to Pillar ${item.step}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${mobilePillarIdx === idx
                    ? "w-6 bg-brand-orange"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* 4 Core Pillars - Desktop & Tablet Normal Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((item) => (
            <div
              key={item.step}
              className="group rounded-2xl bg-surface border border-border/80 hover:border-brand-orange/60 hover:shadow-lg transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10.5px] font-mono font-bold uppercase tracking-wider text-white border border-white/10">
                  Pillar {item.step}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-headline text-lg sm:text-xl font-bold uppercase tracking-wide text-foreground group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs font-semibold text-brand-copper">
                    {item.subtitle}
                  </span>
                </div>

                {/* Bottom Tag */}
                <div className="pt-3 border-t border-border/80 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>{item.tag}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/cricket"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#EA4326] hover:bg-[#D9381E] text-white font-headline text-sm sm:text-base font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
          >
            <span>Explore Our Coaching Approach</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <p className="text-xs text-muted-foreground mt-2.5 font-mono">
            3-Day Weekly Net Practice @ Matunga Ground • Pre-Season to Tournament Knockouts
          </p>
        </div>
      </Container>
    </section>
  );
}
