"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { useAdmin } from "@/lib/admin/adminStore";
import { DEMO_CREDENTIALS } from "@/lib/admin/adminAuth";

export function AdminLoginView() {
  const { login } = useAdmin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfoMessage(null);
    setIsSubmitting(true);

    setTimeout(() => {
      const res = login(email, password);
      if (!res.success) {
        setError(res.error || "Authentication failed. Please verify credentials.");
        setIsSubmitting(false);
      }
    }, 350);
  };

  const handleQuickSecureAccess = () => {
    setEmail(DEMO_CREDENTIALS.email);
    setPassword(DEMO_CREDENTIALS.password);
    setError(null);
    setInfoMessage("Authorized credentials loaded. Click Login to access.");
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    setInfoMessage(
      "Please contact the DCC Managing Committee lead (admin@devpurcc.com) for administrative access recovery."
    );
  };

  // Reusable Form Body used in both Desktop & Mobile Layouts
  const renderFormContent = (idPrefix: string) => (
    <>
      {/* Feedback Alerts */}
      {error && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2 animate-fade-in">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {infoMessage && (
        <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-[#C2581A] shrink-0 mt-0.5" />
          <span>{infoMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
        {/* Email Address */}
        <div>
          <label
            htmlFor={`${idPrefix}-email`}
            className="block text-xs font-semibold text-stone-700 mb-1"
          >
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              id={`${idPrefix}-email`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full bg-white border border-stone-200/90 rounded-xl pl-9 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C2581A]/20 focus:border-[#C2581A] transition-[border-color,box-shadow] shadow-2xs"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor={`${idPrefix}-password`}
            className="block text-xs font-semibold text-stone-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              id={`${idPrefix}-password`}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full bg-white border border-stone-200/90 rounded-xl pl-9 pr-9 py-2 sm:py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C2581A]/20 focus:border-[#C2581A] transition-[border-color,box-shadow] shadow-2xs"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1 cursor-pointer focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-3.5 h-3.5" />
              ) : (
                <Eye className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Options Row: Remember Me & Forgot Password */}
        <div className="flex items-center justify-between pt-0.5 text-xs">
          <label className="flex items-center gap-1.5 cursor-pointer text-stone-600 select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-3.5 h-3.5 rounded border-stone-300 text-[#C2581A] focus:ring-[#C2581A] accent-[#C2581A]"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={handleForgotPassword}
            className="font-semibold text-[#C2581A] hover:underline cursor-pointer focus:outline-none"
          >
            Forgot password?
          </button>
        </div>

        {/* Primary Submit Button: → Login */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#B95015] via-[#C85D1B] to-[#D56F27] hover:from-[#A84510] hover:to-[#C25B18] active:scale-[0.99] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#C85D1B]/20 transition-[opacity,transform,background-color] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2.5"
        >
          {isSubmitting ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
              <span>Login</span>
            </>
          )}
        </button>
      </form>

      {/* 'or' Divider */}
      <div className="relative flex py-2 sm:py-2.5 items-center">
        <div className="flex-grow border-t border-stone-200/90" />
        <span className="flex-shrink mx-3 text-stone-400 text-xs font-mono">
          or
        </span>
        <div className="flex-grow border-t border-stone-200/90" />
      </div>

      {/* Secondary Action: Secure Admin Access */}
      <button
        type="button"
        onClick={handleQuickSecureAccess}
        className="w-full py-2 px-3 rounded-xl border border-stone-300 hover:border-[#C2581A]/60 bg-white hover:bg-stone-50 active:bg-stone-100 text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition-[border-color,background-color] shadow-2xs cursor-pointer group"
      >
        <Shield className="w-3.5 h-3.5 text-[#C2581A] transition-transform group-hover:scale-110" />
        <span>Secure Admin Access</span>
      </button>

      {/* Footer Info inside Form Card */}
      <div className="pt-2.5 text-center space-y-0.5">
        <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-stone-500">
          <Shield className="w-3.5 h-3.5 text-stone-400" />
          <span>Devpur Cricket Club Admin Panel</span>
        </div>
        <div className="text-[10px] text-stone-400">
          Secure • Private • Authorized Access Only
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen w-full bg-[#0B101D] text-stone-900 selection:bg-[#EA6E18]/20 selection:text-[#EA6E18] flex items-center justify-center p-2 sm:p-3 md:p-4 relative overflow-hidden">
      {/* Ambient background glows outside the card */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C2581A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#182C4E]/40 rounded-full blur-3xl pointer-events-none" />

      {/* =========================================================================
          1. MOBILE LAYOUT (< md):
          Matches 1:1 user's provided UI mockup:
          - Full-screen background image (public/admin/mobile_screen.png) anchored to bottom
          - Top DCC Logo + DEVPUR CRICKET CLUB in the sky
          - Floating white login card in center
          - Bat, helmet & ball clearly visible on grass below card
          ========================================================================= */}
      <div className="md:hidden min-h-screen w-full relative flex flex-col justify-between items-center py-5 px-4 overflow-y-auto z-10">
        {/* Full Mobile Background Image (Pinned to bottom to show bat, helmet & ball) */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/admin/mobile_screen.png"
            alt="Devpur Cricket Club Matchfield"
            fill
            priority
            className="object-cover object-bottom"
            sizes="100vw"
          />
          {/* Subtle soft gradient wash at top for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent via-50% to-black/10 pointer-events-none" />
        </div>

        {/* Top Mobile Bar: Public Site Back link + DCC Crest & Title */}
        <div className="relative z-10 w-full flex flex-col items-center text-center pt-1 pb-2">
          <div className="w-full flex justify-between items-center px-1 mb-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-stone-700 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-2xs border border-white/60 hover:text-[#C2581A] transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Public Site</span>
            </Link>
            <span className="text-[10px] font-mono font-bold text-stone-600 bg-white/70 backdrop-blur-xs px-2 py-0.5 rounded-md">
              DCC Auth
            </span>
          </div>

          <div className="relative w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
            <Image
              src="/logo/dcc-logo.png"
              alt="Devpur Cricket Club Emblem"
              fill
              priority
              className="object-contain"
              sizes="64px"
            />
          </div>
          <span className="font-headline font-black text-2xl tracking-wider text-[#0F1E36] leading-none mt-2">
            DEVPUR
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#C2581A] mt-0.5">
            CRICKET CLUB
          </span>
        </div>

        {/* Floating White Login Card (Centered on Mobile Screen) */}
        <div className="relative z-10 w-full max-w-[360px] bg-white rounded-3xl shadow-2xl p-5 sm:p-6 border border-white/80 my-auto animate-fade-in">
          <div className="text-center mb-4">
            <h2 className="font-headline text-2xl sm:text-3xl font-black text-[#0F1E36] tracking-tight">
              Admin <span className="text-[#C2581A]">Login</span>
            </h2>
            <p className="text-[11px] sm:text-xs text-stone-500 mt-1 leading-relaxed">
              Welcome back! Please login to your admin account to continue.
            </p>
          </div>

          {renderFormContent("mobile")}
        </div>

        {/* Bottom spacer so cricket bat, ball & helmet remain visible on grass */}
        <div className="relative z-10 h-24 sm:h-32 pointer-events-none" />
      </div>

      {/* =========================================================================
          2. DESKTOP / TABLET LAYOUT (>= md):
          Matches 1:1 user instruction:
          - Screen ke exact center mai
          - Width: compact & balanced (w-[92%] max-w-5xl)
          - Height: reduced (h-auto md:h-[510px] lg:h-[530px] max-h-[86vh]) for zero-scroll on laptop screens
          - Left: Brand showcase with cricket ground image & helmet/bat
          - Right: Clean luxury white login card (single footer, no duplicates)
          ========================================================================= */}
      <div className="hidden md:flex w-[92%] max-w-5xl h-auto md:h-[510px] lg:h-[530px] max-h-[86vh] rounded-3xl shadow-2xl border border-stone-200/20 overflow-hidden bg-white flex-row relative z-10 my-auto">
        {/* Left Half: Brand & Atmosphere Showcase */}
        <div className="relative w-1/2 h-full flex flex-col justify-between p-6 lg:p-7 overflow-hidden bg-stone-900">
          {/* Sunset cricket pitch image background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/admin/mobile_screen.png"
              alt="Devpur Cricket Club Matchfield"
              fill
              priority
              className="object-cover object-[center_60%]"
              sizes="50vw"
            />
            {/* Subtle soft daylight wash on top for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/25 via-40% to-black/25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/45 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Top Header of Left Half */}
          <div className="relative z-10 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="relative w-9 h-9 lg:w-10 lg:h-10 shrink-0 drop-shadow-md transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo/dcc-logo.png"
                  alt="Devpur Cricket Club Emblem"
                  fill
                  priority
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline font-black text-lg lg:text-xl tracking-wide text-[#0F1E36] leading-none">
                  DEVPUR
                </span>
                <span className="text-[9px] lg:text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#C2581A] leading-tight mt-0.5">
                  CRICKET CLUB
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-1.5 text-[11px] font-medium text-stone-700 tracking-wide">
              <span>Play</span>
              <span className="text-stone-400">|</span>
              <span>Practice</span>
              <span className="text-stone-400">|</span>
              <span>Progress</span>
              <span className="text-stone-400">|</span>
              <span className="font-semibold text-stone-900">Together</span>
            </div>
          </div>

          {/* Center / Upper-Mid Content of Left Half */}
          <div className="relative z-10 my-auto py-3 max-w-md">
            <h1 className="font-headline tracking-tight leading-[1.08]">
              <span className="block text-2xl lg:text-3xl font-black text-[#0F1E36]">
                Manage. Organize.
              </span>
              <span className="block text-2xl lg:text-3xl font-black text-[#C2581A] mt-1">
                Grow the Club.
              </span>
            </h1>

            <div className="mt-2.5 space-y-0.5">
              <p className="text-xs lg:text-sm font-semibold text-stone-800">
                Admin panel for Devpur Cricket Club
              </p>
              <p className="text-[11px] lg:text-xs text-stone-700 font-medium">
                — build a stronger community, on and off the field.
              </p>
            </div>
          </div>

          {/* Bottom subtle bar of left column */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-stone-800 bg-white/55 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/50 w-fit">
            <span>DEVPUR GAAM // EST. 2013</span>
            <span className="mx-2 text-stone-400">•</span>
            <span>50+ MEMBERS</span>
          </div>
        </div>

        {/* Right Half: Admin Login Card (Light Luxury Theme - Single clean form, no duplicate footer) */}
        <div className="relative w-1/2 h-full flex flex-col justify-between items-center p-5 sm:p-6 lg:p-7 bg-[#FAF8F5] overflow-y-auto">
          {/* Subtle champagne diagonal ribbons */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#F2E3D5]/80 via-[#FDF8F3]/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#EEDFD2]/70 via-[#FDF9F5]/40 to-transparent pointer-events-none" />

          {/* Top utility row: Return link */}
          <div className="w-full flex justify-between items-center z-10 shrink-0">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-500 hover:text-[#C2581A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Public Site</span>
            </Link>
            <span className="text-[10px] font-mono font-semibold text-stone-400">
              DCC Auth v4.2
            </span>
          </div>

          {/* Center Card Area */}
          <div className="w-full max-w-[370px] my-auto py-1 z-10">
            {/* Centered DCC Crest */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-11 h-11 lg:w-12 lg:h-12 drop-shadow-md transition-transform hover:scale-105 duration-300">
                <Image
                  src="/logo/dcc-logo.png"
                  alt="Devpur Cricket Club Crest"
                  fill
                  priority
                  className="object-contain"
                  sizes="48px"
                />
              </div>

              <h2 className="font-headline text-xl lg:text-2xl font-black text-[#0F1E36] tracking-tight mt-1.5">
                Admin <span className="text-[#C2581A]">Login</span>
              </h2>
              <p className="text-[11px] lg:text-xs text-stone-500 mt-0.5 max-w-xs leading-relaxed">
                Welcome back! Please login to your admin account to continue.
              </p>
            </div>

            <div className="mt-3">
              {renderFormContent("desktop")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
