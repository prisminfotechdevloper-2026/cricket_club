import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import {
  MapPin,
  Calendar,
  Mail,
  Phone,
  Shield,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-surface-soft border-t border-border mt-auto pt-16 pb-12">
      <Container>
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
                  Train. Compete. Remember.
                </span>
              </div>
            </Link>

            <p className="text-sm text-foreground-soft leading-relaxed max-w-sm">
              Devpur Cricket Club is a competitive sports fraternity dedicated to
              structured cricket coaching, player development, and year-round
              athletic excellence in Rajasthan.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-foreground-soft">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-copper shrink-0" />
                <span>Devpur Cricket Ground, Devpur, Rajasthan 326001</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-copper shrink-0" />
                <span>Annual Cycle: October – March (Active Season 2026–27)</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-headline text-base uppercase tracking-wider text-brand-black font-bold mb-4">
              Club Hub
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground-soft font-medium">
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-copper transition-colors"
                >
                  About Club & Legacy
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="hover:text-brand-copper transition-colors"
                >
                  Training & Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/players"
                  className="hover:text-brand-copper transition-colors"
                >
                  Squad & Players
                </Link>
              </li>
              <li>
                <Link
                  href="/matches"
                  className="hover:text-brand-copper transition-colors"
                >
                  Matches & Fixtures
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
            </ul>
          </div>

          {/* Tournaments & Archive Column */}
          <div>
            <h4 className="font-headline text-base uppercase tracking-wider text-brand-black font-bold mb-4">
              Competition & History
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground-soft font-medium">
              <li>
                <Link
                  href="/tournaments"
                  className="hover:text-brand-copper transition-colors"
                >
                  Tournaments Archive
                </Link>
              </li>
              <li>
                <Link
                  href="/seasons"
                  className="hover:text-brand-copper transition-colors"
                >
                  Season-wise Memories
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-brand-copper transition-colors"
                >
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="hover:text-brand-copper transition-colors"
                >
                  Club Trophies & Honors
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Contact */}
          <div>
            <h4 className="font-headline text-base uppercase tracking-wider text-brand-black font-bold mb-4">
              Connect
            </h4>
            <div className="space-y-3 text-sm text-foreground-soft">
              <p className="text-xs text-muted">
                Interested in club membership, practice net allocation, or friendly fixtures?
              </p>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-copper" />
                  <span>contact@devpurcricketclub.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-copper" />
                  <span>+91 94140 XXXXX</span>
                </div>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-200/60 text-brand-charcoal text-xs font-semibold">
                  <Shield className="w-3 h-3 text-brand-copper" />
                  Affiliated Club
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} Devpur Cricket Club (DCC). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Client Demo Showcase • Rajasthan</span>
            <span className="hidden sm:inline">•</span>
            <span>Crafted with Purpose & Cricket Pride</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
