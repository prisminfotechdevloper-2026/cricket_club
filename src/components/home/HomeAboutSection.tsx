"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import {
  Compass,
  Target,
  Shield,
  Award,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

export function HomeAboutSection() {
  return (
    <section className="py-4 sm:py-5   bg-surface-soft/60 border-b border-border/80 overflow-hidden">
      <Container>
        {/* Main Section Header */}
        <div className="text-start    mb-3 sm:mb-5 space-y-1">
          <div className="inline-flex items-center gap-2 px-1 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange font-mono text-xs font-bold uppercase tracking-wider">
             
            <span>About Devpur Cricket Club</span>
          </div>
 
        </div>

        {/* =====================================================================
            ROW 01: OUR ROOTS & HERITAGE (Text Left, Image Right)
            Features: First Image (Heritage Ground Team Photo) & Meaningful Story
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center mb-2 sm:mb-4">
          {/* Left Column: Story & History Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
               
              <h3 className="font-headline text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
                Born on Mumbai&apos;s Historic Grounds, United by Brotherhood
              </h3>
            </div>

            <p className="text-sm sm:text-base text-foreground-soft leading-relaxed font-body">
              Captured proudly in traditional cricket whites against Mumbai&apos;s
              iconic heritage skyline, Devpur Cricket Club was founded in 2013 by
              a passionate group of sports lovers from Devpur Gaam. What began as
              friendly weekend matches has grown into a prestigious institution of
              grassroots cricket, unity, and community values.
            </p>

            <p className="text-sm sm:text-base text-foreground-soft leading-relaxed font-body">
              For over a decade, our club has represented our village with
              uncompromising integrity. Win or lose, every time we step onto the
              red soil of Matunga Ground, we carry the hopes and pride of Devpur
              Gaam — building a family where every member belongs.
            </p>

            

        
          </div>

          {/* Right Column: First Image (Heritage Ground Team Photo) */}
          <div className="lg:col-span-6">
            <div className="relative group rounded-3xl overflow-hidden border border-border/80 shadow-xl bg-surface">
              {/* Aspect Ratio Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/about_team_heritage.png"
                  alt="Devpur Cricket Club Team on Historic Mumbai Cricket Ground"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[11px] font-bold uppercase tracking-wider border border-white/20 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    <span>Devpur Cricket Club Squad</span>
                  </span>
                </div>

                {/* Bottom Caption Pill */}
                <div className="absolute bottom-4 inset-x-4 z-10">
                  <p className="text-white text-xs sm:text-sm font-medium leading-snug drop-shadow-md">
                    Standing united on Mumbai&apos;s historic maidans in traditional whites — rooted in Devpur Gaam culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            ROW 02: A MOMENT OF PRIDE (Image Left, Text Right)
            Features: Second Image (Player of the Match Award Photo) & User Narrative
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Second Image (Player of the Match Award) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group rounded-3xl overflow-hidden border border-border/80 shadow-xl bg-surface">
              {/* Aspect Ratio Container (Portrait 4:5 for Award Ceremony) */}
              <div className="relative aspect-[4/5] sm:aspect-[4/5] max-h-[560px] w-full overflow-hidden mx-auto">
                <Image
                  src="/images/player_of_the_match_award.jpg"
                  alt="Devpur Cricket Club Player receiving Player of the Match Award"
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

             

                {/* Bottom Caption Pill */}
                <div className="absolute bottom-4 inset-x-4 z-10">
                  <p className="text-white text-xs sm:text-sm font-medium leading-snug drop-shadow-md">
                    A DCC player proudly in club red jersey receiving the match award alongside a senior cricket community member.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: User's Narrative on Pride, Recognition & Values */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
               
              <h3 className="font-headline text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
                A Moment of Pride for Devpur Cricket Club
              </h3>
              <p className="text-sm font-semibold text-brand-copper uppercase tracking-wider">
                A special moment from the DCC cricket journey — where hard work on the field turns into recognition.
              </p>
            </div>

            <p className="text-sm sm:text-base text-foreground-soft leading-relaxed font-body">
              In the heart of a cricket ground, a Devpur Cricket Club player proudly
              receives a Player of the Match award after a strong performance. Wearing
              the DCC red jersey and holding the award alongside a senior member of
              the cricket community, the moment reflects what the club stands for —
              practice, performance, appreciation and togetherness.
            </p>

            <p className="text-sm sm:text-base text-foreground-soft leading-relaxed font-body">
              For DCC, achievements like these are more than an individual accomplishment.
              They are moments the entire club can celebrate together. Every practice
              session, every match and every opportunity to compete creates a chance
              for our members to grow and represent the club with pride.
            </p>

            
 
          </div>
        </div>
      </Container>
    </section>
  );
}
