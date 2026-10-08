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
    <header className="h-16 px-4 sm:px-6 bg-white/95 backdrop-blur-md border-b border-[#E8E3DD] flex items-center justify-between gap-4 sticky top-0 z-30 shadow-2xs">
      {/* Left Breadcrumb & Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-xl text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-stone-400 hidden sm:inline font-semibold">DCC Admin</span>
          <ChevronRight className="w-3.5 h-3.5 text-stone-300 hidden sm:inline" />
          <span className="font-headline font-bold text-[#0B0B0D] tracking-wide text-base">
            {TAB_TITLES[activeTab] || "Overview"}
          </span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Gaam Motto Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA6E18]/10 border border-[#EA6E18]/20 text-[#C2520E] text-[11px] font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#EA6E18]" />
          <span>Proudly Representing Devpur Gaam</span>
        </div>

        {/* Public Site Button */}
        <Link
          href="/"
          target="_blank"
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 border border-stone-200 text-stone-700 hover:text-stone-900 text-xs font-semibold flex items-center gap-2 transition-colors shadow-2xs"
          title="Visit Public Website"
        >
          <Globe className="w-4 h-4 text-[#EA6E18]" />
          <span className="hidden sm:inline">View Site</span>
        </Link>

        {/* Logout Quick Action */}
        <button
          onClick={logout}
          className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-red-50 hover:border-red-200 text-stone-700 hover:text-red-600 border border-stone-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
          title="Sign out of Admin Portal"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}
