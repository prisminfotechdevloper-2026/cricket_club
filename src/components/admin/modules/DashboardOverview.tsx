"use client";

import React, { useState } from "react";
import {
  Users,
  Trophy,
  Handshake,
  Calendar,
  Radio,
  Plus,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useAdmin } from "@/lib/admin/adminStore";
import { MatchEditModal } from "../modals/MatchEditModal";
import { MemberEditModal } from "../modals/MemberEditModal";
import { SponsorEditModal } from "../modals/SponsorEditModal";
import { LiveScoreUpdateModal } from "../modals/LiveScoreUpdateModal";
import { Match, Player } from "@/lib/types/cricket";
import { Sponsor } from "@/lib/types/content";

export function DashboardOverview() {
  const {
    matches,
    players,
    sponsors,
    setActiveTab,
    createMatch,
    createPlayer,
    createSponsor,
    updateLiveScore,
  } = useAdmin();

  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);

  // Find live match or next upcoming
  const liveMatch = matches.find((m) => m.status === "live") || matches[0];

  return (
    <div className="space-y-6">
      {/* Top Banner / Club Welcome */}
      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#17191F] via-[#121418] to-[#0D0F13] border border-white/10 relative overflow-hidden shadow-xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-brand-orange/15 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange-light text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
              <span>Devpur Gaam Committee Dashboard</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
              DEVPUR CRICKET CLUB CONSOLE
            </h2>
            <p className="text-sm text-stone-300 max-w-2xl leading-relaxed">
              Season 2026–27 Command Centre. Coordinate match schedules, update live scorecards, track 2026–2029 sponsor deliverables, and manage 50+ active members training at Matunga Ground.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setIsMatchModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold hover:from-brand-orange-light text-white font-headline text-sm font-bold uppercase tracking-wider transition-opacity cursor-pointer flex items-center gap-2 shadow-md shadow-brand-orange/20"
            >
              <Plus className="w-4 h-4" />
              <span>Schedule Fixture</span>
            </button>
            <button
              onClick={() => setIsMemberModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-brand-gold" />
              <span>Enroll Member</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Members */}
        <div
          onClick={() => setActiveTab("members")}
          className="p-5 rounded-2xl bg-[#14161B] border border-white/10 hover:border-brand-orange/40 transition-colors cursor-pointer group"
        >
          <div className="flex items-center justify-between text-stone-400 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider">Active Members</span>
            <div className="p-2 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:scale-110 transition-transform">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-headline text-4xl font-bold text-white">50+</span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Devpur Gaam
            </span>
          </div>
          <p className="text-xs text-stone-400 mt-2 font-mono">
            {players.length} members cataloged on active roster
          </p>
        </div>

        {/* Card 2: Matches */}
        <div
          onClick={() => setActiveTab("matches")}
          className="p-5 rounded-2xl bg-[#14161B] border border-white/10 hover:border-brand-orange/40 transition-colors cursor-pointer group"
        >
          <div className="flex items-center justify-between text-stone-400 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider">Matches &amp; Tournaments</span>
            <div className="p-2 rounded-xl bg-brand-gold/10 text-brand-gold group-hover:scale-110 transition-transform">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-headline text-4xl font-bold text-white">25+</span>
            <span className="text-xs font-mono text-brand-gold-light">Leather-ball/Yr</span>
          </div>
          <p className="text-xs text-stone-400 mt-2 font-mono">
            {matches.length} fixtures scheduled / archived
          </p>
        </div>

        {/* Card 3: Sponsors MOU */}
        <div
          onClick={() => setActiveTab("sponsors")}
          className="p-5 rounded-2xl bg-[#14161B] border border-white/10 hover:border-brand-orange/40 transition-colors cursor-pointer group"
        >
          <div className="flex items-center justify-between text-stone-400 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider">Sponsorship MOU</span>
            <div className="p-2 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:scale-110 transition-transform">
              <Handshake className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-headline text-4xl font-bold text-white">{sponsors.length} Partners</span>
            <span className="text-xs font-mono text-emerald-400">2026–2029</span>
          </div>
          <p className="text-xs text-stone-400 mt-2 font-mono">
            ₹60,000 / Yr • ₹1,80,000 3-Yr Term
          </p>
        </div>

        {/* Card 4: Practice Sessions */}
        <div
          onClick={() => setActiveTab("training")}
          className="p-5 rounded-2xl bg-[#14161B] border border-white/10 hover:border-brand-orange/40 transition-colors cursor-pointer group"
        >
          <div className="flex items-center justify-between text-stone-400 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider">Net Practice</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-headline text-4xl font-bold text-white">3 Days/Wk</span>
            <span className="text-xs font-mono text-purple-300">Matunga Ground</span>
          </div>
          <p className="text-xs text-stone-400 mt-2 font-mono">
            Head Coach: Aditya Koli (Kanga B Div)
          </p>
        </div>
      </div>

      {/* Featured Live / Upcoming Match Control Bar */}
      {liveMatch && (
        <div className="p-5 sm:p-6 rounded-3xl bg-[#121418] border border-brand-orange/30 shadow-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {liveMatch.status === "live" ? (
                  <span className="px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 text-[11px] font-mono font-bold flex items-center gap-1.5 animate-pulse uppercase">
                    <Radio className="w-3.5 h-3.5" /> LIVE MATCHDAY STATUS
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30 text-[11px] font-mono font-bold uppercase">
                    FEATURED FIXTURE
                  </span>
                )}
                <span className="text-xs font-mono text-stone-400">
                  {liveMatch.tournament} • {liveMatch.competitionType || "Leather Ball"}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                <div>
                  <span className="text-xs font-mono text-stone-400 block uppercase">DCC Score</span>
                  <span className="font-headline text-3xl font-bold text-brand-orange">
                    {liveMatch.dccScore || "172/4"}
                  </span>
                  <span className="text-xs font-mono text-stone-400 ml-1.5">
                    ({liveMatch.dccOvers || "18.3"} ov)
                  </span>
                </div>

                <div className="text-stone-500 font-headline text-2xl font-bold">VS</div>

                <div>
                  <span className="text-xs font-mono text-stone-400 block uppercase">
                    {liveMatch.opponent}
                  </span>
                  <span className="font-headline text-3xl font-bold text-white">
                    {liveMatch.opponentScore || "168/8"}
                  </span>
                  <span className="text-xs font-mono text-stone-400 ml-1.5">
                    ({liveMatch.opponentOvers || "20.0"} ov)
                  </span>
                </div>
              </div>

              <p className="text-xs font-mono text-stone-300 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>{liveMatch.venue}</span>
                <span className="text-stone-600">•</span>
                <Clock className="w-3.5 h-3.5 text-brand-gold" />
                <span>{liveMatch.date} ({liveMatch.time})</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsLiveModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 shadow-md shadow-red-600/20"
              >
                <Radio className="w-4 h-4" />
                <span>Update Live Score</span>
              </button>
              <button
                onClick={() => setActiveTab("matches")}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>All Fixtures</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid: 2026–2029 MOU Tracker + Practice Routine Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Box 1: MOU Deliverables Checklist */}
        <div className="p-6 rounded-3xl bg-[#14161B] border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Handshake className="w-5 h-5 text-brand-orange" />
              <h3 className="font-headline text-xl font-bold text-white tracking-tight">
                2026–2029 SPONSORSHIP MOU TRACKER
              </h3>
            </div>
            <button
              onClick={() => setActiveTab("sponsors")}
              className="text-xs font-mono text-brand-orange hover:underline uppercase"
            >
              View All ({sponsors.length})
            </button>
          </div>

          <p className="text-xs text-stone-400 font-mono">
            Mandated deliverables per Schedule A of Official DCC Sponsorship MOU:
          </p>

          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-0.5">
                <span className="text-white font-semibold block">Match Jersey Branding</span>
                <span className="text-stone-400">Up to approximately 25 competitive leather-ball matches per season</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-0.5">
                <span className="text-white font-semibold block">Social Media Presence</span>
                <span className="text-stone-400">Promotions across match reels (~1K avg estimated reach per reel)</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-0.5">
                <span className="text-white font-semibold block">Commercial Agreement</span>
                <span className="text-stone-400">₹60,000/- annual sponsorship (₹1,80,000/- over 3-season term)</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-mono text-stone-400 border-t border-white/5">
            <span>DCC Committee Signatory Verified</span>
            <span className="text-emerald-400 font-semibold">Active &amp; In Good Standing</span>
          </div>
        </div>

        {/* Box 2: Practice Nets & Routine Tracker */}
        <div className="p-6 rounded-3xl bg-[#14161B] border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-gold" />
              <h3 className="font-headline text-xl font-bold text-white tracking-tight">
                MATUNGA GROUND PRACTICE NETS
              </h3>
            </div>
            <button
              onClick={() => setActiveTab("training")}
              className="text-xs font-mono text-brand-gold hover:underline uppercase"
            >
              Session Logs
            </button>
          </div>

          <p className="text-xs text-stone-400 font-mono">
            Official club practice routine led by Head Coach Aditya Koli (Kanga B Division):
          </p>

          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-3 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[11px] font-mono text-brand-orange block font-bold uppercase">TUE</span>
              <span className="text-sm font-semibold text-white block mt-1">Batting Drills</span>
              <span className="text-[10px] text-stone-500 font-mono">6:30 – 9:00 AM</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[11px] font-mono text-brand-gold block font-bold uppercase">THU</span>
              <span className="text-sm font-semibold text-white block mt-1">Bowling &amp; Nets</span>
              <span className="text-[10px] text-stone-500 font-mono">6:30 – 9:00 AM</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[11px] font-mono text-emerald-400 block font-bold uppercase">SAT</span>
              <span className="text-sm font-semibold text-white block mt-1">Simulated Match</span>
              <span className="text-[10px] text-stone-500 font-mono">3:30 – 6:30 PM</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-xs">
            <div className="text-stone-300 font-semibold">Coach Aditya Koli Tenet:</div>
            <p className="text-stone-400 text-xs italic">
              &ldquo;Structured preparation, discipline, and match situation awareness build consistent match-winners.&rdquo;
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-mono text-stone-400 border-t border-white/5">
            <span>Matunga Gymkhana Turf Nets</span>
            <span className="text-brand-orange-light font-semibold">Season 2026–27 Scheduled</span>
          </div>
        </div>
      </div>

      {/* Modals */}
      <MatchEditModal
        isOpen={isMatchModalOpen}
        onClose={() => setIsMatchModalOpen(false)}
        onSave={(data) => createMatch(data as Omit<Match, "id">)}
      />

      <MemberEditModal
        isOpen={isMemberModalOpen}
        onClose={() => setIsMemberModalOpen(false)}
        onSave={(data) => createPlayer(data as Omit<Player, "id">)}
      />

      <SponsorEditModal
        isOpen={isSponsorModalOpen}
        onClose={() => setIsSponsorModalOpen(false)}
        onSave={(data) => createSponsor(data as Omit<Sponsor, "id">)}
      />

      <LiveScoreUpdateModal
        isOpen={isLiveModalOpen}
        onClose={() => setIsLiveModalOpen(false)}
        match={liveMatch}
        onUpdate={updateLiveScore}
      />
    </div>
  );
}
