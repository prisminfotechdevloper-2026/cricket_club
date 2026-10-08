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

  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] text-stone-900 flex flex-col lg:flex-row selection:bg-[#EA6E18]/20 selection:text-[#EA6E18]">
      {/* =========================================================================
          LEFT HALF: BRAND & ATMOSPHERE SHOWCASE (CRICKET GROUND BACKGROUND)
          Matches 1:1 user mockup with cricket bat, helmet, red ball & typography
          ========================================================================= */}
      <div className="relative w-full lg:w-1/2 min-h-[520px] lg:min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-stone-900">
        {/* Master Background Image: Sunset cricket pitch with bat, helmet & ball */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/admin/mobile_screen.png"
            alt="Devpur Cricket Club Matchfield"
            fill
            priority
            className="object-cover object-[center_65%] sm:object-[center_60%] lg:object-[center_55%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle soft daylight wash on top for ultra-crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 via-35% to-black/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Top Header of Left Half: DCC Logo + Brand Name + Slogan */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 drop-shadow-md transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo/dcc-logo.png"
                alt="Devpur Cricket Club Emblem"
                fill
                priority
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-headline font-black text-xl sm:text-2xl tracking-wide text-[#0F1E36] leading-none">
                DEVPUR
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#C2581A] leading-tight mt-0.5">
                CRICKET CLUB
              </span>
            </div>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-stone-700 tracking-wide">
            <span>Play</span>
            <span className="text-stone-400">|</span>
            <span>Practice</span>
            <span className="text-stone-400">|</span>
            <span>Progress</span>
            <span className="text-stone-400">|</span>
            <span className="font-semibold text-stone-900">Together</span>
          </div>
        </div>

        {/* Center / Mid-Upper Content of Left Half */}
        <div className="relative z-10 my-auto pt-10 sm:pt-14 pb-16 lg:pb-24 max-w-lg">
          <h1 className="font-headline tracking-tight leading-[1.04]">
            <span className="block text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-[#0F1E36]">
              Manage. Organize.
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-[#C2581A] mt-1 sm:mt-1.5">
              Grow the Club.
            </span>
          </h1>

          <div className="mt-4 sm:mt-5 space-y-1">
            <p className="text-sm sm:text-base font-semibold text-stone-800">
              Admin panel for Devpur Cricket Club
            </p>
            <p className="text-xs sm:text-sm text-stone-700 font-medium">
              — build a stronger community, on and off the field.
            </p>
          </div>
        </div>

        {/* Bottom subtle bar of left column (allows cricket gear to shine below) */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-stone-800/80 bg-white/40 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/40 w-fit">
          <span>DEVPUR GAAM // EST. 2013</span>
          <span className="mx-2 text-stone-400">•</span>
          <span>50+ MEMBERS</span>
        </div>
      </div>

      {/* =========================================================================
          RIGHT HALF: ADMIN LOGIN FORM (LIGHT LUXURY THEME)
          Matches 1:1 user mockup with DCC logo, inputs, and button styling
          ========================================================================= */}
      <div className="relative w-full lg:w-1/2 min-h-screen flex flex-col justify-between items-center p-6 sm:p-10 lg:p-12 bg-[#FAF8F5] overflow-hidden">
        {/* Subtle geometric luxury ribbon gradients matching the mockup */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#F2E3D5]/80 via-[#FDF8F3]/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#EEDFD2]/70 via-[#FDF9F5]/40 to-transparent pointer-events-none" />

        {/* Top utility row: Return link */}
        <div className="w-full flex justify-between items-center z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-500 hover:text-[#C2581A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Public Site</span>
          </Link>
          <span className="text-[11px] font-mono font-semibold text-stone-400">
            DCC Auth v4.2
          </span>
        </div>

        {/* Center Card Container */}
        <div className="w-full max-w-[420px] my-auto py-8 z-10">
          {/* Centered DCC Crest */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 drop-shadow-md transition-transform hover:scale-105 duration-300">
              <Image
                src="/logo/dcc-logo.png"
                alt="Devpur Cricket Club Crest"
                fill
                priority
                className="object-contain"
                sizes="80px"
              />
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl font-black text-[#0F1E36] tracking-tight mt-4">
              Admin Login
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1.5 max-w-xs leading-relaxed">
              Welcome back! Please login to your admin account to continue.
            </p>
          </div>

          {/* Feedback Alerts */}
          {error && (
            <div className="mt-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {infoMessage && (
            <div className="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-[#C2581A] shrink-0 mt-0.5" />
              <span>{infoMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Email Address */}
            <div>
              <label
                htmlFor="admin-email"
                className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white border border-stone-200/90 rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C2581A]/20 focus:border-[#C2581A] transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="admin-password"
                className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full bg-white border border-stone-200/90 rounded-xl pl-10 pr-10 py-2.5 sm:py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C2581A]/20 focus:border-[#C2581A] transition-all shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1 cursor-pointer focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Options Row: Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1 text-xs sm:text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-stone-600 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-stone-300 text-[#C2581A] focus:ring-[#C2581A] accent-[#C2581A]"
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
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#B95015] via-[#C85D1B] to-[#D56F27] hover:from-[#A84510] hover:to-[#C25B18] active:scale-[0.99] text-white font-bold text-sm sm:text-base tracking-wide shadow-md shadow-[#C85D1B]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-5"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <ArrowRight className="w-4 h-4 text-white" />
                  <span>Login</span>
                </>
              )}
            </button>
          </form>

          {/* 'or' Divider */}
          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-stone-200/90" />
            <span className="flex-shrink mx-4 text-stone-400 text-xs font-mono">
              or
            </span>
            <div className="flex-grow border-t border-stone-200/90" />
          </div>

          {/* Secondary Action: Secure Admin Access */}
          <button
            type="button"
            onClick={handleQuickSecureAccess}
            className="w-full py-2.5 sm:py-3 px-4 rounded-xl border border-stone-300 hover:border-[#C2581A]/60 bg-white hover:bg-stone-50 active:bg-stone-100 text-stone-800 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 transition-all shadow-2xs cursor-pointer group"
          >
            <Shield className="w-4 h-4 text-[#C2581A] transition-transform group-hover:scale-110" />
            <span>Secure Admin Access</span>
          </button>
        </div>

        {/* Bottom Footer on Right Side */}
        <div className="w-full pt-4 text-center z-10 space-y-0.5">
          <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-stone-600">
            <Shield className="w-3.5 h-3.5 text-stone-500" />
            <span>Devpur Cricket Club Admin Panel</span>
          </div>
          <div className="text-[11px] text-stone-400">
            Secure • Private • Authorized Access Only
          </div>
        </div>
      </div>
    </div>
  );
}
