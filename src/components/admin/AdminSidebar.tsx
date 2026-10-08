"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  ExternalLink,
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
    <aside aria-label="Admin Navigation" className="w-64 sm:w-72 bg-[#0E1013] border-r border-white/10 flex flex-col justify-between h-full select-none">
      {/* Top Brand Header */}
      <div className="p-5 border-b border-white/10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 p-1 rounded-xl bg-black/60 border border-brand-orange/40 shrink-0">
            <Image
              src="/logo/dcc-logo.png"
              alt="DCC Crest"
              fill
              className="object-contain p-0.5"
            />
          </div>
          <div>
            <span className="font-headline font-bold text-lg text-white block leading-tight">
              DEVPUR CRICKET CLUB
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-orange-light block">
              COMMITTEE ADMIN
            </span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Mode: Dummy Staging</span>
          </div>
          <Link
            href="/"
            className="text-stone-300 hover:text-brand-orange transition-colors flex items-center gap-1"
            title="View public site in new tab"
            target="_blank"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">
          Core Operations
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleSelectTab(item.id)}
              className={`w-full px-3.5 py-2.5 rounded-xl font-mono text-xs flex items-center justify-between transition-colors cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-brand-orange to-brand-copper text-white font-bold shadow-md shadow-brand-orange/20"
                  : "text-stone-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-white" : "text-stone-400"
                  }`}
                />
                <span className="truncate">{item.label}</span>
              </div>

              {item.badge !== undefined && (
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                    isActive
                      ? "bg-black/30 text-white"
                      : "bg-white/5 text-stone-400"
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
      <div className="p-4 border-t border-white/10 space-y-3">
        {/* Reset Demo Data button */}
        <button
          onClick={() => {
            if (confirm("Reset all test edits back to original club demo data?")) {
              resetDemoData();
            }
          }}
          className="w-full py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 text-stone-400 hover:text-stone-200 text-[11px] font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
          <span>Reset Demo Edits</span>
        </button>

        {/* User Card & Logout */}
        <div className="p-3 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center font-headline text-sm font-bold text-brand-orange shrink-0">
              {session?.user.name.charAt(0) || "A"}
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold text-white block truncate">
                {session?.user.name || "DCC Committee"}
              </span>
              <span className="text-[10px] font-mono text-stone-500 block truncate">
                {session?.user.role || "Admin"}
              </span>
            </div>
          </div>

          <button
            onClick={logout}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-stone-400 hover:text-red-300 transition-colors cursor-pointer shrink-0"
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
