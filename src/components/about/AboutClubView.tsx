import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Target,
  Users,
} from "lucide-react";

export function AboutClubView() {
  const values = [
    {
      title: "Discipline Before Glory",
      desc: "Great match performances are earned in 6:00 AM fitness sessions and grueling turf net repetitions, not accidental luck.",
      icon: Target,
    },
    {
      title: "Club Brotherhood",
      desc: "Win or lose, Devpur CC stands as a tight-knit sporting fraternity where senior mentors groom young prospects with respect.",
      icon: Users,
    },
    {
      title: "Relentless Competitiveness",
      desc: "We compete hard against the finest clubs in Rajasthan while upholding uncompromised integrity and the spirit of cricket.",
      icon: Shield,
    },
  ];

  const facilities = [
    {
      name: "4 International-Grade Turf Practice Nets",
      desc: "Specialized clay and red-soil turf wickets replicating conditions across state venues.",
    },
    {
      name: "Full-Sized Floodlit Cricket Oval",
      desc: "Devpur Cricket Ground equipped for evening white-ball fixtures and day-night simulations.",
    },
    {
      name: "Strength & High-Performance Conditioning Suite",
      desc: "Cricket-specific athletic gym with recovery plunge baths and physio assessment room.",
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-background min-h-screen">
      <Container>
        {/* Editorial Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-copper" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-black">
                Our Heritage &amp; Mission
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-6xl font-bold tracking-tight text-brand-black leading-tight">
              BUILT ON TURF.
              <br />
              <span className="text-brand-copper">TESTED IN COMPETITION.</span>
              <br />
              DEVOTED TO CRICKET.
            </h1>

            <p className="text-base sm:text-lg text-foreground-soft leading-relaxed max-w-xl">
              Devpur Cricket Club was established with a singular focus: to build a high-performance cricket sanctuary in Rajasthan where players train with professional intent, receive elite coaching, and play competitive white-ball matches with pride.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 drop-shadow-xl">
              <Image
                src="/logo/logo.png"
                alt="Devpur Cricket Club Shield"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 224px, 256px"
              />
            </div>
          </div>
        </div>

        {/* Philosophy: From Net Practice To Match Day */}
        <div className="rounded-3xl bg-surface border border-border shadow-sm p-8 sm:p-12 mb-16 space-y-6">
          <SectionHeading
            eyebrow="Training Philosophy"
            title="From Net Practice To Match Day"
            description="Every season is a journey of preparation, discipline and performance. We train together, learn together and compete together."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {values.map((val) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-2xl bg-surface-soft border border-border/80 space-y-3 sports-card"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-brand-copper">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-brand-black">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Facilities Showcase */}
        <div className="rounded-3xl bg-surface border border-border shadow-sm p-8 sm:p-12 mb-16 space-y-6">
          <SectionHeading
            eyebrow="Club Infrastructure"
            title="World-Class Practice Infrastructure"
            description="Our ground and training facilities in Devpur provide athletes with the ideal turf surfaces to hone bat and ball mastery."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {facilities.map((fac, idx) => (
              <div
                key={fac.name}
                className="p-6 rounded-2xl bg-surface-soft border border-border space-y-3"
              >
                <div className="flex items-center gap-2 text-brand-copper font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Facility {idx + 1}</span>
                </div>
                <h4 className="font-headline text-xl font-bold text-brand-black">
                  {fac.name}
                </h4>
                <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Cycle & Quick Action */}
        <div className="rounded-3xl bg-brand-charcoal text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-peach">
              Annual Operating Rhythm
            </span>
            <h3 className="font-headline text-3xl sm:text-4xl font-bold">
              Active Season 2026–27 (October to March)
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              Training and tournament registration are currently underway. Explore our session breakdown or view ongoing match results.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/training"
              className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-copper text-brand-black font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>View Training Program</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
