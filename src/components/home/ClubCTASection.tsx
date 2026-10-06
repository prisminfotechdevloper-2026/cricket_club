import React from "react";
import Link from "next/link";
import { Container } from "../common/Container";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function ClubCTASection() {
  return (
    <section className="py-14 sm:py-20 bg-surface">
      <Container>
        <div className="rounded-3xl bg-brand-charcoal text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl border border-brand-charcoal">
          {/* Subtle background ornament */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-copper/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-peach text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <span>Join Devpur Cricket Club</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              ELEVATE YOUR GAME.
              <br />
              <span className="text-brand-orange">TRAIN ON TURF.</span> COMPETE WITH PRIDE.
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              Whether you are an aspiring top-order batter seeking strike rotation drills or an express pacer aiming to master the blockhole, DCC offers a competitive home for serious cricket development.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/training"
                className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-copper text-brand-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 group"
              >
                <span>Explore Training Syllabus</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/matches"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all border border-white/20"
              >
                View Match Schedule
              </Link>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Devpur Cricket Ground</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <span>contact@devpurcricketclub.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Season 2026–27 Open</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
