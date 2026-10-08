"use client";

import React from "react";
import Link from "next/link";
import {
  Menu,
  Globe,
  LogOut,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useAdmin, AdminTab } from "@/lib/admin/adminStore";

interface AdminTopBarProps {
  onOpenMobileMenu: () => void;
}

const TAB_TITLES: Record<AdminTab, string> = {
  overview: "Dashboard Overview",
  matches: "Matches & Live Scores",
  members: "50+ Squad & Members",
  sponsors: "Sponsors & 2026–2029 MOU",
  training: "Matunga Practice Nets",
  tournaments: "Tournaments & Seasons",
  memories: "Memories & Archives",
  inquiries: "Public Inquiries",
  settings: "Admin Settings",
};

export function AdminTopBar({ onOpenMobileMenu }: AdminTopBarProps) {
  const { activeTab, logout } = useAdmin();

  return (
    <header className="h-16 px-4 sm:px-6 bg-[#0E1013]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-4 sticky top-0 z-30">
      {/* Left Breadcrumb & Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-stone-500 hidden sm:inline">DCC Admin</span>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600 hidden sm:inline" />
          <span className="font-bold text-white tracking-wide">
            {TAB_TITLES[activeTab] || "Overview"}
          </span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Gaam Motto Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange-light text-[11px] font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
          <span>Proudly Representing Devpur Gaam</span>
        </div>

        {/* Public Site Button */}
        <Link
          href="/"
          target="_blank"
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-white text-xs font-mono flex items-center gap-2 transition-colors"
          title="Visit Public Website"
        >
          <Globe className="w-4 h-4 text-brand-gold" />
          <span className="hidden sm:inline">View Site</span>
        </Link>

        {/* Logout Quick Action */}
        <button
          onClick={logout}
          className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-red-500/20 text-stone-300 hover:text-red-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Sign out of Admin Portal"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}
