"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { Container } from "../common/Container";

interface NavItem {
  name: string;
  href: string;
  badge?: string;
  description?: string;
}

interface NavSection {
  name: string;
  href: string;
  children?: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
  { name: "Home", href: "/" },
  {
    name: "Matches",
    href: "/matches",
    children: [
      { name: "Matches We Play", href: "/matches", description: "Upcoming fixtures, results & scorecards" },
      { name: "Live Score Centre", href: "/matches/dcc-vs-royal-xi", badge: "LIVE", description: "Matchday live score via CricClubs" },
      { name: "Tournaments We Play", href: "/tournaments", description: "Community cups & tournament leagues" },
      { name: "Season Journey", href: "/seasons", description: "Annual seasonal campaign & journey" },
      { name: "Trophies & Milestones", href: "/achievements", description: "Silverware & club milestones" },
    ],
  },
  {
    name: "Club Life",
    href: "/club-life",
    children: [
      { name: "Net Practice & Routine", href: "/club-life", description: "3-day weekly turf net practice at Matunga Ground" },
      { name: "Coach Aditya Koli", href: "/club-life#coach", description: "Skill guidance by Kanga B Division player" },
      { name: "Weekend Practice Matches", href: "/club-life#matches", description: "Applying preparation in competitive situations" },
    ],
  },
  {
    name: "Our Members",
    href: "/players",
    children: [
      { name: "Meet Our Members", href: "/players", description: "The 50+ members behind the DCC crest" },
      { name: "Member Milestones", href: "/players#milestones", description: "Celebrating member growth & achievements" },
    ],
  },
  {
    name: "Memories",
    href: "/memories",
    children: [
      { name: "Season Memories", href: "/memories", description: "Match moments, tours & photo gallery" },
    ],
  },
  {
    name: "Our Club",
    href: "/club",
    children: [
      { name: "About DCC & Devpur Gaam", href: "/club", description: "Founding roots, crest history & community heritage" },
      { name: "Official Club Partners", href: "/sponsors", description: "7 brands powering our 3-season cycle" },
      { name: "Contact & Support", href: "/contact", description: "Connect with DCC organizers & coordinators" },
    ],
  },
];

const emptySubscribe = () => () => {};
const useIsMounted = () => React.useSyncExternalStore(emptySubscribe, () => true, () => false);

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>("Matches");
  const mounted = useIsMounted();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer and dropdowns on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isSectionActive = (section: NavSection) => {
    if (section.href === "/" && pathname === "/") return true;
    if (section.href !== "/" && pathname.startsWith(section.href)) return true;
    if (section.children) {
      return section.children.some((child) => pathname === child.href || pathname.startsWith(child.href.split("?")[0]));
    }
    return false;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[100] w-full transition-[background-color,box-shadow,border-color] duration-200 ${
          isOpen
            ? "bg-surface border-b border-border shadow-xs"
            : isScrolled
            ? "bg-surface/95 backdrop-blur-md shadow-md border-b border-border"
            : "bg-surface-soft border-b border-border/80"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Brand */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper rounded-lg shrink-0 min-w-0"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 shrink-0 drop-shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo/dcc-logo.png"
                  alt="Devpur Cricket Club Emblem"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, (max-width: 768px) 44px, 52px"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline font-bold text-base sm:text-lg md:text-xl tracking-tight text-brand-black leading-tight truncate">
                  DEVPUR CRICKET CLUB
                </span>
                <span className="hidden sm:block text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-brand-copper leading-none">
                  Representing Devpur Gaam • Est. 2013
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Simple Dropdown Flyouts */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_SECTIONS.map((section) => {
                const active = isSectionActive(section);
                const hasChildren = section.children && section.children.length > 0;

                if (!hasChildren) {
                  return (
                    <Link
                      key={section.name}
                      href={section.href}
                      className={`px-3.5 py-1.5 text-sm rounded-full transition-all duration-150 ${
                        active
                          ? "bg-gradient-to-r from-[#EA6E18] to-[#F89928] text-white font-bold shadow-xs"
                          : "text-stone-700 hover:text-stone-950 font-semibold hover:bg-stone-100"
                      }`}
                    >
                      {section.name}
                    </Link>
                  );
                }

                return (
                  <div
                    key={section.name}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(section.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={section.href}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm rounded-full transition-all duration-150 ${
                        active
                          ? "bg-gradient-to-r from-[#EA6E18] to-[#F89928] text-white font-bold shadow-xs"
                          : "text-stone-700 hover:text-stone-950 font-semibold hover:bg-stone-100"
                      }`}
                      aria-expanded={openDropdown === section.name}
                    >
                      <span>{section.name}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          openDropdown === section.name ? "rotate-90 text-white" : "rotate-90 text-stone-400 group-hover:text-stone-700"
                        }`}
                      />
                    </Link>

                    {/* Dropdown Flyout Panel */}
                    <div
                      className={`absolute left-0 top-full pt-2 w-72 z-50 transition-all duration-150 ${
                        openDropdown === section.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white/95 backdrop-blur-xl border border-stone-200 shadow-2xl rounded-2xl p-2 space-y-1">
                        <div className="px-3 py-1.5 border-b border-stone-100 mb-1 flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400">
                            {section.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#EA6E18] font-semibold">
                            Quick Links
                          </span>
                        </div>
                        {section.children?.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`group/item flex flex-col px-3 py-2 rounded-xl transition-colors ${
                                childActive
                                  ? "bg-[#EA6E18]/10 text-[#EA6E18]"
                                  : "hover:bg-stone-50 text-stone-800 hover:text-[#EA6E18]"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold leading-tight flex items-center gap-1.5">
                                  <span>{child.name}</span>
                                </span>
                                {child.badge && (
                                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-red-100 text-red-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                                    <span>{child.badge}</span>
                                  </span>
                                )}
                              </div>
                              {child.description && (
                                <span className="text-[11px] text-stone-500 font-normal line-clamp-1 mt-0.5 group-hover/item:text-stone-600">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Action CTAs: Live Score */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/matches/dcc-vs-royal-xi"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-[#111A2E] text-white hover:bg-[#18233D] transition-colors shadow-sm border border-stone-800 group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-white font-bold font-mono tracking-wider">LIVE SCORE</span>
                <span className="text-[#F8C080] font-mono font-black text-xs px-1.5 py-0.5 rounded bg-white/10 group-hover:bg-white/20">
                  146/4
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <Link
                href="/matches/dcc-vs-royal-xi"
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold rounded-lg bg-red-50 text-brand-red border border-red-200"
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
                className="p-2 sm:p-2.5 rounded-xl border border-border text-brand-black hover:bg-black/[0.04] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>

        {/* MCC Cricket Style Live Running Sports Ticker */}
        <div className="bg-[#0D131F] text-stone-200 border-t border-white/[0.08] py-1.5 overflow-hidden flex items-center text-xs font-mono select-none">
          <div className="shrink-0 flex items-center gap-1.5 px-3 sm:px-4 py-0.5 bg-[#EA6E18] text-white font-black uppercase text-[10px] tracking-widest rounded-r-full shadow-sm z-10 mr-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span>DCC PULSE</span>
          </div>

          <div className="overflow-hidden flex-1 marquee-mask">
            <div className="animate-marquee-rtl flex items-center gap-8 text-[11px] font-semibold text-stone-300">
              {[1, 2].map((key) => (
                <div key={key} className="flex items-center gap-8 shrink-0">
                  <Link href="/matches/dcc-vs-royal-xi" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white font-bold">LIVE:</span>
                    <span>DCC 146/4 (17.2 ov) vs Royal XI • Need 17 off 16 balls</span>
                  </Link>
                  <span className="text-stone-600">/</span>
                  <Link href="/matches" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <span className="text-[#EA6E18] font-bold">NEXT FIXTURE:</span>
                    <span>Sunday vs KVO Stars • 9:30 AM @ Matunga Ground</span>
                  </Link>
                  <span className="text-stone-600">/</span>
                  <Link href="/club-life" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <span className="text-[#F89928] font-bold">TURF NETS:</span>
                    <span>Mon • Wed • Fri 7:00 AM guided by Coach Aditya Koli</span>
                  </Link>
                  <span className="text-stone-600">/</span>
                  <Link href="/players" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <span className="text-white font-bold">MEMBERS:</span>
                    <span>50+ Dedicated Members Proudly Representing Devpur Gaam</span>
                  </Link>
                  <span className="text-stone-600">/</span>
                  <Link href="/memories" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <span className="text-[#EA6E18] font-bold">MEMORIES:</span>
                    <span>Preserving Season Moments &amp; Community Get-Togethers</span>
                  </Link>
                  <span className="text-stone-600">/</span>
                  <Link href="/club" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <span className="text-white font-bold">HONORS:</span>
                    <span>2× Runners-Up Cups • Ranked 10 in KVO Teams • Est. 2013</span>
                  </Link>
                  <span className="text-stone-600">/</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer: Full-screen overlay portal with smooth Right-to-Left slide-in movement */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            id="mobile-nav-portal-root"
            className="lg:hidden fixed inset-0 z-[9999] overflow-hidden"
          >
            {/* Backdrop Overlay (Fade-in with tap to dismiss) */}
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-drawer-backdrop cursor-pointer"
              aria-hidden="true"
            />

            {/* Slide-in Drawer Panel: Smooth Right-to-Left Movement */}
            <div
              id="mobile-navigation-drawer"
              className="fixed inset-y-0 right-0 w-full sm:max-w-md bg-surface flex flex-col justify-between shadow-2xl animate-drawer-slide-in z-10 border-l border-border"
            >
              {/* Top Heading Bar inside Sidenavbar: Always permanently visible at top, never hidden */}
              <div className="shrink-0 flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 border-b border-border bg-surface z-20 shadow-2xs">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 group focus:outline-none"
                >
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 drop-shadow-sm transition-transform group-hover:scale-105">
                    <Image
                      src="/logo/dcc-logo.png"
                      alt="Devpur Cricket Club Emblem"
                      fill
                      priority
                      className="object-contain"
                      sizes="44px"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline font-bold text-base sm:text-lg text-brand-black leading-tight truncate">
                      DEVPUR CRICKET CLUB
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#EA6E18] font-bold">
                      DEV PUR GAAM • EST. 2013
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 sm:p-2.5 rounded-xl border border-border text-brand-black hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA6E18]"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5 text-stone-800" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-6 py-4 space-y-4">
                {/* Live Match Quick Banner */}
                <Link
                  href="/matches/dcc-vs-royal-xi"
                  onClick={() => setIsOpen(false)}
                  className="block p-4 rounded-2xl bg-brand-charcoal text-white border border-brand-charcoal hover:bg-black transition-colors shadow-md group"
                >
                  <div className="flex items-center justify-between text-xs text-brand-peach mb-2">
                    <span className="font-semibold uppercase tracking-wider flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                      </span>
                      <span className="text-white font-bold">JPL Semi Final • LIVE</span>
                    </span>
                    <span className="font-bold text-brand-peach bg-white/10 px-2 py-0.5 rounded">
                      Over 17.2
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <div className="font-headline text-2xl font-bold tracking-tight text-white">
                        DCC <span className="text-brand-orange">146/4</span>{" "}
                        <span className="text-stone-400 text-base font-normal">vs</span>{" "}
                        <span className="text-stone-300">RXI 183/8</span>
                      </div>
                      <div className="text-xs text-neutral-300 mt-1 font-medium">
                        Need 38 runs in 16 balls • RR: 8.43
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-brand-black transition-colors">
                      <ChevronRight className="w-5 h-5 text-brand-orange group-hover:text-brand-black transition-colors" />
                    </div>
                  </div>
                </Link>

                {/* Navigation Sections with Mobile Accordions */}
                <div className="space-y-1.5">
                  {NAV_SECTIONS.map((section) => {
                    const hasChildren = section.children && section.children.length > 0;
                    const isExpanded = expandedMobile === section.name;

                    if (!hasChildren) {
                      const active = pathname === section.href;
                      return (
                        <Link
                          key={section.name}
                          href={section.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                            active
                              ? "bg-[#EA6E18]/10 text-[#EA6E18] font-bold"
                              : "text-foreground-soft hover:text-brand-black hover:bg-black/[0.03]"
                          }`}
                        >
                          <span>{section.name}</span>
                          <ChevronRight className="w-4 h-4 text-stone-400" />
                        </Link>
                      );
                    }

                    return (
                      <div key={section.name} className="border border-stone-200/80 rounded-2xl overflow-hidden bg-stone-50/50">
                        <button
                          type="button"
                          onClick={() => setExpandedMobile(isExpanded ? null : section.name)}
                          className="w-full flex items-center justify-between px-3.5 py-3 text-base font-bold text-stone-900 focus:outline-none"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#EA6E18]" />
                            <span>{section.name}</span>
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                              isExpanded ? "rotate-90 text-[#EA6E18]" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="px-3 pb-3 pt-1 space-y-1 bg-white border-t border-stone-100">
                            {section.children?.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
                                    childActive
                                      ? "bg-[#EA6E18]/10 text-[#EA6E18] font-bold"
                                      : "text-stone-700 hover:text-stone-900 hover:bg-stone-50"
                                  }`}
                                >
                                  <span>{child.name}</span>
                                  {child.badge && (
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase bg-red-100 text-red-600">
                                      {child.badge}
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Club Footnote inside Drawer */}
              <div className="shrink-0 px-4 sm:px-6 py-3.5 border-t border-border bg-surface-soft text-center space-y-1">
                <p className="font-headline font-bold text-xs sm:text-sm tracking-wider uppercase text-brand-black">
                  Devpur Cricket Club • Devpur Gaam
                </p>
                <p className="text-[11px] text-muted">
                  PLAY • TRAIN • COMPETE • WIN • Est. 2013
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
