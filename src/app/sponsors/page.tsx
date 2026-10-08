import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { sponsors } from "@/lib/data/sponsors";
import { Mail, Shield, Award } from "lucide-react";

export const metadata = {
  title: "Official Sponsors & Community Partners | Devpur Cricket Club",
  description: "Meet the official sponsors and partners supporting Devpur Cricket Club for the 2026–2029 cycle. Powering community cricket, professional coaching, match jerseys, and tournament participation.",
};

export default function SponsorsPage() {
  const principalSponsors = sponsors.filter((s) => s.tier === "principal");
  const associateSponsors = sponsors.filter((s) => s.tier === "associate");
  const officialAndCommunity = sponsors.filter((s) => s.tier === "official" || s.tier === "community");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Page Header: MCC Cricket Inspired Prestige Partner Atmosphere */}
      <section className="relative overflow-hidden bg-[#080D1A] text-white border-b border-white/10 py-12 sm:py-16 lg:py-20">
        {/* Warm Golden/Amber Glow & Sports Matrix */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F89928]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#EA6E18]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Mission & Identity */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-stone-200 border border-white/15 text-[11px] font-mono font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA6E18] animate-pulse" />
                <span>COMMUNITY PARTNERSHIPS // 2026–2029 CYCLE</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.98]">
                Powered by Our
                <span className="bg-gradient-to-r from-[#E66212] via-[#EA6E18] to-[#F89928] bg-clip-text text-transparent block mt-1">
                  Proud Club Partners.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl">
                Our sponsors are true co-creators of Devpur Cricket Club&apos;s sporting journey — supporting structured
                training at Matunga Ground, professional coaching under Head Coach Aditya Koli, tournament entry fees,
                and high-quality match equipment for 50+ members.
              </p>

              {/* Action Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-stone-200">
                  <Shield className="w-3.5 h-3.5 text-[#EA6E18]" />
                  <span>7 OFFICIAL BRANDS</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-stone-200">
                  <Award className="w-3.5 h-3.5 text-[#F89928]" />
                  <span>~25 MATCHES / YR ON JERSEY</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-stone-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>10,000+ KVO COMMUNITY REACH</span>
                </div>
              </div>
            </div>

            {/* Right Column: Telemetry Cards */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#F8C080] tracking-wider block">
                    ACTIVE PARTNERS
                  </span>
                  <span className="font-headline text-2xl font-black text-white block">
                    7 Brands
                  </span>
                  <span className="text-[11px] text-stone-400 font-body block">
                    Official 2026–2029 MOUs
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#F8C080] tracking-wider block">
                    JERSEY MATCHES
                  </span>
                  <span className="font-headline text-2xl font-black text-white block">
                    ~25 / Season
                  </span>
                  <span className="text-[11px] text-stone-400 font-body block">
                    Leather-Ball Leagues
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#F0761E] tracking-wider block">
                    DIGITAL PRESENCE
                  </span>
                  <span className="font-headline text-2xl font-black text-[#F0761E] block">
                    ~1K Views
                  </span>
                  <span className="text-[11px] text-stone-400 font-body block">
                    Avg. Reach per Reel
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                    KVO ECOSYSTEM
                  </span>
                  <span className="font-headline text-2xl font-black text-white block">
                    10,000+
                  </span>
                  <span className="text-[11px] text-stone-400 font-body block">
                    Cricket Network
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Official Sponsor Roster */}
      <section className="py-14 sm:py-20 border-b border-border/80">
        <Container>
          {/* Principal Tier */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-brand-orange/20 text-brand-black text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-copper" />
                <span>Principal Partner</span>
              </span>
              <span className="text-xs text-muted font-medium">Primary Front-of-Jersey Sponsor</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principalSponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="p-8 rounded-3xl bg-surface border-2 border-brand-orange/40 shadow-sm flex flex-col justify-between space-y-6 sports-card"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="relative w-44 h-18 sm:w-56 sm:h-20 bg-white rounded-2xl p-3 border border-border flex items-center justify-center shadow-xs">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain p-2"
                          sizes="220px"
                        />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-bold uppercase tracking-wider">
                        {sponsor.tenure}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-headline text-2xl font-bold text-brand-black">
                        {sponsor.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed mt-2">
                        {sponsor.description}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-surface-soft border border-border space-y-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-muted block">
                        Partnership Scope
                      </span>
                      <ul className="space-y-1">
                        {sponsor.visibilityScope.map((scope) => (
                          <li key={scope} className="text-xs text-foreground-soft font-medium flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-brand-copper" />
                            <span>{scope}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Associate Tier */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-600" />
                <span>Associate Partners</span>
              </span>
              <span className="text-xs text-muted font-medium">Kit &amp; Matchday Sponsors</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {associateSponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="p-6 rounded-3xl bg-surface border border-border shadow-xs flex flex-col justify-between space-y-5 sports-card"
                >
                  <div className="space-y-4">
                    <div className="relative w-full h-20 bg-white rounded-2xl p-2 border border-border flex items-center justify-center shadow-xs">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain p-2"
                        sizes="200px"
                      />
                    </div>

                    <div>
                      <h3 className="font-headline text-xl font-bold text-brand-black">
                        {sponsor.name}
                      </h3>
                      <p className="text-xs text-foreground-soft leading-relaxed mt-2 line-clamp-3">
                        {sponsor.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted">
                    <span className="font-semibold">{sponsor.tenure}</span>
                    <span className="text-brand-black font-medium">{sponsor.tierLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official & Community Tier */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-md bg-stone-900 text-stone-200 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 border border-stone-800">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>Official &amp; Community Patrons</span>
              </span>
              <span className="text-xs text-muted font-medium">Equipment &amp; Gaam Mahajan Patrons</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {officialAndCommunity.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="p-6 rounded-3xl bg-surface border border-border shadow-xs flex flex-col justify-between space-y-5 sports-card"
                >
                  <div className="space-y-4">
                    <div className="relative w-full h-20 bg-white rounded-2xl p-2 border border-border flex items-center justify-center shadow-xs">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain p-2"
                        sizes="200px"
                      />
                    </div>

                    <div>
                      <h3 className="font-headline text-xl font-bold text-brand-black">
                        {sponsor.name}
                      </h3>
                      <p className="text-xs text-foreground-soft leading-relaxed mt-2 line-clamp-3">
                        {sponsor.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted">
                    <span className="font-semibold">{sponsor.tenure}</span>
                    <span className="text-brand-black font-medium">{sponsor.tierLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. What Sponsorship Supports (The 4 Club Pillars) */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-surface">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-copper block mb-2">
              Transparent Club Impact
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-brand-black tracking-tight">
              Where Sponsorship Capital Is Invested
            </h2>
            <p className="mt-3 text-sm sm:text-base text-foreground-soft leading-relaxed">
              Every rupee from our official sponsors directly fuels player development, equipment, tournament fees, and club operational expenses for our 50+ members.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-surface-soft border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-copper flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-headline text-lg font-bold text-brand-black">
                Professional Coaching
              </h3>
              <p className="text-xs text-foreground-soft leading-relaxed">
                Hiring accredited coaches including Head Coach Mr. Aditya Koli (Kanga B Division) for 3-day weekly net sessions at Matunga Ground.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-surface-soft border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-copper flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-headline text-lg font-bold text-brand-black">
                Professional Gear &amp; Kits
              </h3>
              <p className="text-xs text-foreground-soft leading-relaxed">
                Procuring top-grade leather balls, team safety equipment, and custom branded matchday jerseys for ~25 competitive matches per season.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-surface-soft border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-copper flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-headline text-lg font-bold text-brand-black">
                Tournament Entry Fees
              </h3>
              <p className="text-xs text-foreground-soft leading-relaxed">
                Covering registration, ground fees, and logistical support across KVO Community Cups, Village Premier Leagues, and invitational tournaments.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-surface-soft border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-copper flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-headline text-lg font-bold text-brand-black">
                Community &amp; Gaam Heritage
              </h3>
              <p className="text-xs text-foreground-soft leading-relaxed">
                Preserving club history, archiving season memories, and uniting Devpur Gaam cricket enthusiasts across Mumbai under one proud banner.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Official MOU Framework & Sponsor Enquiry CTA */}
      <section className="py-14 sm:py-20 bg-surface">
        <Container>
          <div className="rounded-3xl bg-brand-charcoal text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-brand-charcoal shadow-xl">
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 text-brand-peach text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span>3-SEASON PARTNERSHIP FRAMEWORK // 2026–2029</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Back Devpur Cricket Club&apos;s Next Chapter
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                The standard DCC sponsorship agreement covers three competitive seasons (2026–27, 2027–28, and 2028–29). Sponsors receive jersey logo placement across approximately 25 tournament matches per season, social media presence, and authentic community engagement.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 space-y-1.5 max-w-xl">
                <p className="font-bold text-white">Documented Sponsor Visibility Scope:</p>
                <p>• Match jersey branding for ~25 seasonal fixtures</p>
                <p>• Estimated ~1K views per social media reel (digital community reach)</p>
                <p>• High-visibility exposure across 10K+ KVO cricket ecosystem</p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:devpurcc@gmail.com?subject=DCC%20Sponsorship%20Inquiry"
                  className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-copper text-brand-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-[background-color,box-shadow] shadow-md inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Inquire for Sponsorship</span>
                </a>

                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors border border-white/20"
                >
                  Learn About Our Club
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
