"use client";

import React from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Trophy,
  Users,
  Handshake,
  Calendar,
  Medal,
  Camera,
  MessageSquare,
  LogOut,
  RotateCcw,
} from "lucide-react";
import { useAdmin, AdminTab } from "@/lib/admin/adminStore";

interface AdminSidebarProps {
  onCloseMobile?: () => void;
}

export function AdminSidebar({ onCloseMobile }: AdminSidebarProps) {
  const {
    activeTab,
    setActiveTab,
    logout,
    session,
    matches,
    players,
    sponsors,
    inquiries,
    resetDemoData,
  } = useAdmin();

  const navItems: {
    id: AdminTab;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string | number;
  }[] = [
    { id: "overview", label: "Dashboard Overview", icon: LayoutDashboard },
    { id: "matches", label: "Matches & Live Scores", icon: Trophy, badge: matches.length },
    { id: "members", label: "50+ Squad & Members", icon: Users, badge: players.length },
    { id: "sponsors", label: "Sponsors & 2026–29 MOU", icon: Handshake, badge: sponsors.length },
    { id: "training", label: "Matunga Practice Nets", icon: Calendar },
    { id: "tournaments", label: "Tournaments & Seasons", icon: Medal },
    { id: "memories", label: "Memories & Archives", icon: Camera },
    {
      id: "inquiries",
      label: "Inquiries & Contact",
      icon: MessageSquare,
      badge: inquiries.filter((i) => i.status === "new").length || undefined,
    },
  ];

  const handleSelectTab = (tab: AdminTab) => {
    setActiveTab(tab);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <aside aria-label="Admin Navigation" className="w-64 sm:w-72 bg-white border-r border-[#E8E3DD] flex flex-col justify-between h-full select-none shadow-2xs">
      {/* Top Brand Header */}
      <div className="p-5 border-b border-[#E8E3DD] space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 p-1 rounded-xl bg-[#FAF8F5] border border-stone-200 shrink-0 shadow-2xs">
            <Image
              src="/logo/dcc-logo.png"
              alt="DCC Crest"
              fill
              className="object-contain p-0.5"
            />
          </div>
          <div>
            <span className="font-headline font-bold text-lg text-[#090A0C] block leading-tight">
              DEVPUR CRICKET CLUB
            </span>
            <span className="text-[11px] font-headline uppercase tracking-widest text-[#C2520E] block font-bold">
              COMMITTEE ADMIN
            </span>
          </div>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
        <div className="px-3 pb-2 text-[11px] font-headline font-bold uppercase tracking-widest text-stone-400">
          Core Operations
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleSelectTab(item.id)}
              className={`w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-[#EA6E18] via-[#C85D1B] to-[#D56F27] text-white font-bold shadow-md shadow-[#EA6E18]/20"
                  : "text-stone-700 hover:bg-stone-100 hover:text-stone-950 font-semibold"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isActive ? "text-white scale-110" : "text-stone-400"
                  }`}
                />
                <span className="font-headline text-[16px] font-bold tracking-wide leading-none truncate">
                  {item.label}
                </span>
              </div>

              {item.badge !== undefined && (
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-headline font-bold leading-none shrink-0 ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-stone-100 text-stone-600 border border-stone-200"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Profile and Utilities */}
      <div className="p-4 border-t border-[#E8E3DD] space-y-3">
        {/* Reset Demo Data button */}
        <button
          onClick={() => {
            if (confirm("Reset all test edits back to original club demo data?")) {
              resetDemoData();
            }
          }}
          className="w-full py-2.5 px-3 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 text-xs font-headline font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
        >
          <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
          <span>Reset Demo Edits</span>
        </button>

        {/* User Card & Logout */}
        <div className="p-3 rounded-2xl bg-[#F6F5F3] border border-[#E8E3DD] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#EA6E18]/15 border border-[#EA6E18]/30 flex items-center justify-center font-headline text-sm font-bold text-[#EA6E18] shrink-0">
              {session?.user.name.charAt(0) || "A"}
            </div>
            <div className="min-w-0">
              <span className="text-sm font-headline font-bold text-stone-900 block truncate leading-tight">
                {session?.user.name || "DCC Committee"}
              </span>
              <span className="text-[11px] text-stone-500 font-medium block truncate">
                {session?.user.role || "Admin"}
              </span>
            </div>
          </div>

          <button
            onClick={logout}
            className="p-1.5 rounded-lg bg-white hover:bg-red-50 hover:border-red-200 border border-stone-200 text-stone-500 hover:text-red-600 transition-colors cursor-pointer shrink-0 shadow-2xs"
            title="Sign Out"
            aria-label="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
