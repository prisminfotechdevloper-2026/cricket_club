import React from "react";
import Link from "next/link";
import { Container } from "../common/Container";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export function ClubCTASection() {
  return (
    <section className="py-16 sm:py-24 bg-surface border-t border-border/80">
      <Container>
        <div className="rounded-3xl bg-stone-950 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl border border-stone-800 carbon-mesh">
          {/* Subtle atmospheric glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-copper/10 blur-2xl pointer-events-none" />

          <div className="relative max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-stone-900/90 text-stone-300 font-mono text-xs font-bold uppercase tracking-widest border border-stone-800 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>DCC COMMUNITY // EST. 2013</span>
              <span className="text-stone-600">•</span>
              <span>DEVPUR GAAM</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] uppercase">
                PLAY • TRAIN • COMPETE • WIN
                <br />
                <span className="text-brand-orange">MORE THAN CRICKET.</span> A BROTHERHOOD.
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl">
                Founded in 2013, Devpur Cricket Club unites 50+ passionate members across Devpur Gaam and the broader KVO cricket ecosystem.
                We train three days a week at Matunga Ground, compete in 25+ seasonal fixtures, and build lifelong bonds on and off the 22 yards.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/training"
                className="px-7 py-4 rounded-xl bg-brand-orange hover:bg-brand-copper text-brand-black font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-[background-color,box-shadow] shadow-md inline-flex items-center gap-2.5 group"
              >
                <span>EXPLORE CLUB LIFE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/sponsors"
                className="px-7 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors border border-stone-700 backdrop-blur-sm"
              >
                OFFICIAL PARTNERSHIPS
              </Link>

              <Link
                href="/matches"
                className="px-7 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-300 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors border border-stone-700/60"
              >
                SEASON FIXTURES
              </Link>
            </div>

            {/* Club Telemetry Bar */}
            <div className="pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs font-mono text-stone-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Matunga Ground, Mumbai (Mon • Wed • Fri)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:devpurcc@gmail.com" className="hover:text-white transition-colors">
                  devpurcc@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-brand-orange">IG:</span>
                <a
                  href="https://instagram.com/devpurcricketclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @devpurcricketclub
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
