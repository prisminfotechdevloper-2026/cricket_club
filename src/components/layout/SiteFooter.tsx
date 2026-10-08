import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import {
  MapPin,
  Calendar,
  Mail,
  MessageSquare,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-surface-soft border-t border-border mt-auto pt-16 pb-12">
      <Container>
        {/* Sponsors Recognition Banner in Footer */}
        <div className="mb-12 p-6 sm:p-7 rounded-2xl bg-surface border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-copper">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>OFFICIAL CLUB PARTNERS (2026–2029)</span>
            </div>
            <p className="text-sm font-semibold text-brand-black">
              Supporting regular net practice, professional equipment, match participation &amp; community activities.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/sponsors"
              className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              VIEW ALL SPONSORS
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/logo/dcc-logo.png"
                  alt="Devpur Cricket Club Emblem"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="font-headline font-bold text-xl tracking-tight text-brand-black block">
                  DEVPUR CRICKET CLUB
                </span>
                <span className="text-xs uppercase tracking-widest text-brand-copper font-semibold block">
                  PLAY • TRAIN • COMPETE • WIN
                </span>
              </div>
            </Link>

            <p className="text-sm text-foreground-soft leading-relaxed max-w-sm">
              Devpur Cricket Club is a community cricket club proudly representing Devpur Gaam
              inside the KVO cricket ecosystem. Cricket is our medium to train, stay fit,
              compete, build friendships, and create lasting memories.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-foreground-soft">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-copper shrink-0" />
                <span>Net Practice: Matunga Ground, Mumbai (Mon • Wed • Fri)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-copper shrink-0" />
                <span>Incepted 2013 • Season Cycle: October – March / May</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-headline text-base uppercase tracking-wider text-brand-black font-bold mb-4">
              Club &amp; Life
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground-soft font-medium">
              <li>
                <Link
                  href="/club"
                  className="hover:text-brand-copper transition-colors"
                >
                  About DCC &amp; Devpur Gaam
                </Link>
              </li>
              <li>
                <Link
                  href="/club-life"
                  className="hover:text-brand-copper transition-colors"
                >
                  Club Life &amp; Practice
                </Link>
              </li>
              <li>
                <Link
                  href="/players"
                  className="hover:text-brand-copper transition-colors"
                >
                  Our Members
                </Link>
              </li>
              <li>
                <Link
                  href="/seasons"
                  className="hover:text-brand-copper transition-colors"
                >
                  Season Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="hover:text-brand-copper transition-colors"
                >
                  Our Sponsors (2026–2029)
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-copper transition-colors font-semibold text-[#EA6E18]"
                >
                  Contact &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Matches & Memories Column */}
          <div>
            <h4 className="font-headline text-base uppercase tracking-wider text-brand-black font-bold mb-4">
              Cricket &amp; Memories
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground-soft font-medium">
              <li>
                <Link
                  href="/matches"
                  className="hover:text-brand-copper transition-colors"
                >
                  Matches We Play
                </Link>
              </li>
              <li>
                <Link
                  href="/matches/dcc-vs-royal-xi"
                  className="inline-flex items-center gap-1.5 text-brand-copper font-bold hover:underline"
                >
                  <span>Live Score Centre</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                </Link>
              </li>
              <li>
                <Link
                  href="/tournaments"
                  className="hover:text-brand-copper transition-colors"
                >
                  Tournaments We Play
                </Link>
              </li>
              <li>
                <Link
                  href="/memories"
                  className="hover:text-brand-copper transition-colors"
                >
                  Memories &amp; Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="hover:text-brand-copper transition-colors"
                >
                  Trophies &amp; Milestones
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-brand-copper transition-colors"
                >
                  Club Stories &amp; Match Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Connect */}
          <div>
            <h4 className="font-headline text-base uppercase tracking-wider text-brand-black font-bold mb-4">
              Community Connect
            </h4>
            <div className="space-y-3 text-sm text-foreground-soft">
              <p className="text-xs text-muted">
                Proudly representing Devpur Gaam within the KVO community cricket network.
              </p>
              <div className="space-y-2 text-xs">
                <a
                  href="mailto:devpurcc@gmail.com"
                  className="flex items-center gap-2 hover:text-brand-copper transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                  <span>devpurcc@gmail.com</span>
                </a>
                <a
                  href="https://instagram.com/devpurcricketclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-copper transition-colors"
                >
                  <span className="font-bold text-brand-copper text-xs shrink-0">IG</span>
                  <span>@devpurcricketclub</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                  <span>Matunga Ground, Mumbai</span>
                </div>
              </div>

              {/* Direct Cricket Query Button */}
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-[#EA6E18] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-2xs group"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#FFA53B]" />
                  <span>Send Cricket Query</span>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-mono font-bold border border-stone-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    KVO RANK #10 • 2× RUNNERS-UP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} Devpur Cricket Club (DCC). All Rights Reserved. Proudly Representing Devpur Gaam.
          </div>
          <div className="flex items-center gap-6">
            <span>Incepted in 2013</span>
            <span>•</span>
            <span>PLAY • TRAIN • COMPETE • WIN</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
