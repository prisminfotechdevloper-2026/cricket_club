import React from "react";
import Link from "next/link";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";

export function ClubIntroSection() {
  const pillars = [
    {
      title: "Structured Coaching Syllabus",
      desc: "BCCI Level-2 certified coaching staff overseeing customized technical plans for pace, spin, batting, and match mental fortitude.",
    },
    {
      title: "October–March Annual Cycle",
      desc: "A focused seasonal operating rhythm combining pre-season fitness, turf-net training, invitational leagues, and championship knockouts.",
    },
    {
      title: "Multi-Tournament Exposure",
      desc: "Rather than organizing leagues, DCC enters the most competitive external white-ball tournaments across the region.",
    },
  ];

  const timelineSteps = [
    { month: "OCT", label: "Trials & Nets", active: false },
    { month: "NOV", label: "Tactical Camps", active: false },
    { month: "DEC", label: "Tournaments", active: false },
    { month: "JAN", label: "Winter Cup", active: false },
    { month: "FEB", label: "Knockout Run", active: true },
    { month: "MAR", label: "Annual Awards", active: false },
  ];

  return (
    <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Philosophy Editorial */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Who We Are"
              title="From Net Practice To Match Day"
              description="Devpur Cricket Club is an athlete-centered cricket fraternity. Every season is a relentless journey of preparation, discipline, brotherhood, and match performance."
            />

            <div className="space-y-4 pt-1">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl bg-surface border border-border flex items-start gap-3.5 sports-card"
                >
                  <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-brand-black">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed mt-1">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-copper hover:text-brand-copper-dark transition-colors group"
              >
                <span>Read Full Club Legacy & Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Side: Season Journey Timeline Graphic */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-copper" />
                  <span className="font-headline text-xl font-bold text-brand-black">
                    Annual Club Journey
                  </span>
                </div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700">
                  Oct – Mar Cycle
                </span>
              </div>

              <p className="text-xs text-foreground-soft leading-relaxed">
                Our club calendar is structured to develop raw capability in the autumn nets and culminate in trophy-hunting form by late winter.
              </p>

              {/* 6 Months Timeline Track */}
              <div className="space-y-3">
                {timelineSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-colors ${
                      step.active
                        ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                        : "bg-surface-soft text-foreground-soft border-border/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-headline text-base font-bold px-2 py-0.5 rounded ${
                          step.active
                            ? "bg-brand-orange text-brand-black"
                            : "bg-stone-200 text-stone-800"
                        }`}
                      >
                        {step.month}
                      </span>
                      <span className="font-semibold">{step.label}</span>
                    </div>

                    {step.active && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-peach flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                        Current Stage
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center border-t border-border/60">
                <Link
                  href="/seasons"
                  className="text-xs font-bold uppercase tracking-wider text-brand-copper hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore 3-Season Archive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
