"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "../common/Container";
import {
  Home,
  BookOpen,
  Image as ImageIcon,
  HeartHandshake,
  Trophy,
  Activity,
  Phone,
  ChevronRight,
  MapPin,
  Mail,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const NAV_LINKS: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "History", href: "/history", icon: BookOpen },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Sponsors", href: "/sponsors", icon: HeartHandshake },
  { name: "Score Board", href: "/score-board", icon: Trophy },
  { name: "Cricket", href: "/cricket", icon: Activity },
];

const emptySubscribe = () => () => {};
const useIsMounted = () =>
  React.useSyncExternalStore(emptySubscribe, () => true, () => false);

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
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

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const isLinkActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
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

            {/* Desktop Navigation Links (Clean & Direct) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm rounded-full transition-all duration-150 cursor-pointer ${
                      active
                        ? "bg-[#D7833D] text-white font-bold shadow-sm"
                        : "text-stone-700 hover:text-stone-950 font-semibold hover:bg-black/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: Contact */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-headline font-bold uppercase tracking-wider rounded-full transition-all duration-150 shadow-sm ${
                  isLinkActive("/contact")
                    ? "bg-[#D7833D] text-white"
                    : "bg-[#111A2E] text-white hover:bg-black hover:scale-105"
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#D7833D] text-white shadow-xs"
              >
                Contact
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-xl border border-border text-brand-black hover:bg-black/[0.04] active:scale-95 transition-all flex items-center justify-center w-10 h-10 cursor-pointer"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
              >
                <div className="relative w-5 h-4 flex flex-col justify-between items-center pointer-events-none">
                  <span
                    className={`h-0.5 w-5 rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                      isOpen
                        ? "translate-y-[7px] rotate-45 bg-[#D7833D]"
                        : "bg-current translate-y-0 rotate-0"
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 bg-current rounded-full transition-all duration-200 ease-in-out ${
                      isOpen
                        ? "opacity-0 scale-x-0 -translate-x-1"
                        : "opacity-100 scale-x-100 translate-x-0"
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                      isOpen
                        ? "-translate-y-[7px] -rotate-45 bg-[#D7833D]"
                        : "bg-current translate-y-0 rotate-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </Container>

        {/* Live Running Sports Ticker */}
        <div className="bg-[#0D131F] text-stone-200 border-t border-white/[0.08] py-1.5 overflow-hidden flex items-center text-xs font-mono select-none">
          <div className="shrink-0 flex items-center gap-1.5 px-3 sm:px-4 py-0.5 bg-[#F0A04B] text-white font-black uppercase text-[10px] tracking-widest rounded-r-full shadow-sm z-10 mr-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span>DCC PULSE</span>
          </div>

          <div className="overflow-hidden flex-1 marquee-mask">
            <div className="animate-marquee-rtl flex items-center gap-8 text-[11px] font-semibold text-stone-300">
              {[1, 2].map((key) => (
                <div key={key} className="flex items-center gap-8 shrink-0">
                  <Link
                    href="/score-board"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#D7833D] animate-pulse" />
                    <span className="text-white font-bold">MATCH CENTER:</span>
                    <span>Follow DCC live fixtures, scores &amp; season results</span>
                  </Link>
                  <span className="text-stone-600">/</span>
                  <Link
                    href="/cricket"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-[#D7833D] font-bold">TURF NETS:</span>
                    <span>Mon • Wed • Fri 7:00 AM @ Matunga Ground with Coach Aditya Koli</span>
                  </Link>
                  <span className="text-stone-600">/</span>
                  <Link
                    href="/history"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-[#D7833D] font-bold">HERITAGE:</span>
                    <span>50+ Dedicated Members Proudly Representing Devpur Gaam</span>
                  </Link>
                  <span className="text-stone-600">/</span>
                  <Link
                    href="/sponsors"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white font-bold">PARTNERS:</span>
                    <span>Official Club Sponsors Powering DCC 2026–2029 Cycle</span>
                  </Link>
                  <span className="text-stone-600">/</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer: Smooth Right-to-Left slide-in */}
      {mounted &&
        createPortal(
          <div
            id="mobile-nav-portal-root"
            className={`lg:hidden fixed inset-0 z-[9999] overflow-hidden transition-[visibility] ${
              isOpen
                ? "visible pointer-events-auto duration-0"
                : "invisible pointer-events-none delay-[300ms] duration-0"
            }`}
            aria-hidden={!isOpen}
          >
            {/* Backdrop */}
            <div
              onClick={() => setIsOpen(false)}
              className={`fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer transition-opacity duration-300 ease-out ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            />

            {/* Slide-in Drawer */}
            <div
              id="mobile-navigation-drawer"
              className={`fixed inset-y-0 right-0 w-full sm:max-w-md bg-surface flex flex-col justify-between shadow-2xl z-10 border-l border-border transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Top Drawer Header */}
              <div className="shrink-0 flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 border-b border-border bg-surface z-20">
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
                    <span className="font-headline font-bold text-base sm:text-lg tracking-tight text-brand-black leading-tight">
                      DEVPUR CRICKET CLUB
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-copper">
                      Est. 2013 • Devpur Gaam
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <span className="text-xl font-bold leading-none">&times;</span>
                </button>
              </div>

              {/* Drawer Links List */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-2">
                {NAV_LINKS.map((link) => {
                  const active = isLinkActive(link.href);
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl transition-all duration-150 cursor-pointer ${
                        active
                          ? "bg-[#D7833D] text-white font-bold shadow-md"
                          : "bg-surface-soft hover:bg-stone-100 text-stone-800 font-semibold"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-5 h-5 ${
                            active ? "text-white" : "text-[#F0A04B]"
                          }`}
                        />
                        <span className="font-headline text-base tracking-wide">
                          {link.name}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          active ? "text-white" : "text-stone-400"
                        }`}
                      />
                    </Link>
                  );
                })}

                {/* Contact Nav Item */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl transition-all duration-150 cursor-pointer ${
                    isLinkActive("/contact")
                      ? "bg-[#D7833D] text-white font-bold shadow-md"
                      : "bg-stone-900 hover:bg-black text-white font-semibold"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#F0A04B]" />
                    <span className="font-headline text-base tracking-wide">
                      Contact &amp; Support
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </Link>
              </div>

              {/* Drawer Footer Info */}
              <div className="shrink-0 p-4 sm:p-6 border-t border-border bg-surface-soft space-y-2 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F0A04B] shrink-0" />
                  <span>Matunga Gymkhana Pavilion, Mumbai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#F0A04B] shrink-0" />
                  <span>contact@devpurcricketclub.com</span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
