"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Radio, ChevronRight } from "lucide-react";
import { Container } from "../common/Container";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  { name: "Matches", href: "/matches" },
  { name: "Players", href: "/players" },
  { name: "Tournaments", href: "/tournaments" },
  { name: "Seasons", href: "/seasons" },
  { name: "Gallery", href: "/gallery" },
  { name: "Achievements", href: "/achievements" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[100] transition-colors duration-200 ${
          isOpen
            ? "bg-surface border-b border-border shadow-xs"
            : isScrolled
            ? "bg-surface shadow-xs border-b border-border"
            : "bg-surface-soft border-b border-border/80"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper rounded-lg"
            >
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 shrink-0 drop-shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo/logo.png"
                  alt="Devpur Cricket Club Emblem"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 44px, 52px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-lg sm:text-xl tracking-tight text-brand-black leading-tight">
                  DEVPUR CRICKET CLUB
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-copper leading-none">
                  Est. 2020 • Rajasthan
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
                      active
                        ? "text-brand-black bg-black/[0.05] font-bold"
                        : "text-foreground-soft hover:text-brand-black hover:bg-black/[0.03]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTAs: Live Score */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/matches/dcc-vs-royal-xi"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl bg-brand-charcoal text-white hover:bg-brand-black transition-all shadow-sm border border-brand-charcoal group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                <span className="text-white font-bold">Live Score</span>
                <span className="text-brand-peach text-xs font-bold px-1.5 py-0.5 rounded bg-white/10 group-hover:bg-white/20">
                  146/4
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <Link
                href="/matches/dcc-vs-royal-xi"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-red-50 text-brand-red border border-red-200"
                aria-label="View live match score"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                <span>LIVE</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl border border-border text-brand-black hover:bg-black/[0.04] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer: Rendered via Portal at body level to prevent parent stacking/overflow clipping */}
      {mounted &&
        isOpen &&
        createPortal(
          <div className="xl:hidden fixed inset-0 top-16 sm:top-20 z-[90] bg-black/60 animate-in fade-in duration-200 flex flex-col justify-start">
            {/* Click-outside backdrop overlay */}
            <div
              className="absolute inset-0 bg-transparent"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <div className="relative z-10 bg-surface border-b border-border max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto px-5 py-6 shadow-2xl flex flex-col justify-between">
              <div className="space-y-4">
                {/* Live Match Quick Banner */}
                <Link
                  href="/matches/dcc-vs-royal-xi"
                  onClick={() => setIsOpen(false)}
                  className="block p-4 rounded-2xl bg-brand-charcoal text-white border border-brand-charcoal hover:bg-black transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-brand-peach mb-2">
                    <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-brand-red animate-pulse" />
                      <span className="text-white">JPL Semi Final • LIVE</span>
                    </span>
                    <span className="font-bold text-brand-peach">Over 17.2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-headline text-xl font-bold text-white">
                        DCC <span className="text-brand-orange">146/4</span> vs RXI 183/8
                      </div>
                      <div className="text-xs text-neutral-300 mt-0.5">
                        Need 38 runs in 16 balls
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-brand-orange" />
                  </div>
                </Link>

                {/* Navigation Links */}
                <div className="py-2 divide-y divide-border/60">
                  {NAV_LINKS.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between py-3.5 text-base font-semibold transition-colors ${
                          active
                            ? "text-brand-copper font-bold"
                            : "text-foreground-soft hover:text-brand-black"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            active
                              ? "text-brand-copper translate-x-1"
                              : "text-neutral-400"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Club Footnote inside Drawer */}
              <div className="pt-6 border-t border-border mt-6 text-center text-xs text-muted">
                Devpur Cricket Club • Train. Compete. Remember.
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
