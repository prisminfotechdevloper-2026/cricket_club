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
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E3DD] relative overflow-hidden shadow-sm">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#f39a3b]/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f39a3b]/10 border border-[#f39a3b]/25 text-[#f39a3b] text-xs font-headline font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f39a3b]" />
              <span>Devpur Gaam Committee Dashboard</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#090A0C] tracking-tight">
              DEVPUR CRICKET CLUB CONSOLE
            </h2>
            <p className="text-sm text-stone-600 max-w-2xl leading-relaxed">
              Season 2026–27 Command Centre. Coordinate match schedules, update live scorecards, track 2026–2029 sponsor deliverables, and manage 50+ active members training at Matunga Ground.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setIsMatchModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#f39a3b] to-[#f39a3b] hover:from-[#f39a3b] text-white font-headline text-sm font-bold uppercase tracking-wider transition-opacity cursor-pointer flex items-center gap-2 shadow-md shadow-[#f39a3b]/20"
            >
              <Plus className="w-4 h-4" />
              <span>Schedule Fixture</span>
            </button>
            <button
              onClick={() => setIsMemberModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 border border-stone-200 text-stone-800 font-headline text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 shadow-2xs"
            >
              <Plus className="w-4 h-4 text-[#f39a3b]" />
              <span>Enroll Member</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Members */}
        <button
          type="button"
          onClick={() => setActiveTab("members")}
          className="text-left p-5 rounded-2xl bg-white border border-[#E8E3DD] hover:border-[#f39a3b]/40 transition-[border-color,box-shadow] shadow-2xs hover:shadow-md cursor-pointer group"
        >
          <div className="flex items-center justify-between text-stone-500 mb-3">
            <span className="text-xs font-headline font-bold uppercase tracking-wider">Active Members</span>
            <div className="p-2 rounded-xl bg-[#f39a3b]/10 text-[#f39a3b] group-hover:scale-110 transition-transform">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-headline text-4xl font-bold text-[#090A0C]">50+</span>
            <span className="text-xs text-emerald-600 flex items-center gap-1 font-semibold">
              <TrendingUp className="w-3.5 h-3.5" /> Devpur Gaam
            </span>
          </div>
          <p className="text-xs text-stone-500 mt-2 font-medium">
            {players.length} members cataloged on active roster
          </p>
        </button>

        {/* Card 2: Matches */}
        <button
          type="button"
          onClick={() => setActiveTab("matches")}
          className="text-left p-5 rounded-2xl bg-white border border-[#E8E3DD] hover:border-[#f39a3b]/40 transition-[border-color,box-shadow] shadow-2xs hover:shadow-md cursor-pointer group"
        >
          <div className="flex items-center justify-between text-stone-500 mb-3">
            <span className="text-xs font-headline font-bold uppercase tracking-wider">Matches &amp; Tournaments</span>
            <div className="p-2 rounded-xl bg-[#f39a3b]/15 text-[#f39a3b] group-hover:scale-110 transition-transform">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-headline text-4xl font-bold text-[#090A0C]">25+</span>
            <span className="text-xs text-[#f39a3b] font-semibold">Leather-ball/Yr</span>
          </div>
          <p className="text-xs text-stone-500 mt-2 font-medium">
            {matches.length} fixtures scheduled / archived
          </p>
        </button>

        {/* Card 3: Sponsors MOU */}
        <button
          type="button"
          onClick={() => setActiveTab("sponsors")}
          className="text-left p-5 rounded-2xl bg-white border border-[#E8E3DD] hover:border-[#f39a3b]/40 transition-[border-color,box-shadow] shadow-2xs hover:shadow-md cursor-pointer group"
        >
          <div className="flex items-center justify-between text-stone-500 mb-3">
            <span className="text-xs font-headline font-bold uppercase tracking-wider">Sponsorship MOU</span>
            <div className="p-2 rounded-xl bg-[#f39a3b]/10 text-[#f39a3b] group-hover:scale-110 transition-transform">
              <Handshake className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-headline text-4xl font-bold text-[#090A0C]">{sponsors.length} Partners</span>
            <span className="text-xs text-emerald-600 font-semibold">2026–2029</span>
          </div>
          <p className="text-xs text-stone-500 mt-2 font-medium">
            ₹60,000 / Yr • ₹1,80,000 3-Yr Term
          </p>
        </button>

        {/* Card 4: Practice Sessions */}
        <button
          type="button"
          onClick={() => setActiveTab("training")}
          className="text-left p-5 rounded-2xl bg-white border border-[#E8E3DD] hover:border-[#f39a3b]/40 transition-[border-color,box-shadow] shadow-2xs hover:shadow-md cursor-pointer group"
        >
          <div className="flex items-center justify-between text-stone-500 mb-3">
            <span className="text-xs font-headline font-bold uppercase tracking-wider">Net Practice</span>
            <div className="p-2 rounded-xl bg-purple-100 text-purple-700 group-hover:scale-110 transition-transform">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-headline text-4xl font-bold text-[#090A0C]">3 Days/Wk</span>
            <span className="text-xs text-purple-700 font-semibold">Matunga Ground</span>
          </div>
          <p className="text-xs text-stone-500 mt-2 font-medium">
            Head Coach: Aditya Koli (Kanga B Div)
          </p>
        </button>
      </div>

      {/* Featured Live / Upcoming Match Control Bar */}
      {liveMatch && (
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#f39a3b]/30 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {liveMatch.status === "live" ? (
                  <span className="px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-headline font-bold flex items-center gap-1.5 animate-pulse uppercase tracking-wider">
                    <Radio className="w-3.5 h-3.5" /> LIVE MATCHDAY STATUS
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full bg-[#f39a3b]/10 text-[#f39a3b] border border-[#f39a3b]/20 text-xs font-headline font-bold uppercase tracking-wider">
                    FEATURED FIXTURE
                  </span>
                )}
                <span className="text-xs text-stone-500 font-medium">
                  {liveMatch.tournament} • {liveMatch.competitionType || "Leather Ball"}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                <div>
                  <span className="text-xs text-stone-500 block uppercase font-semibold">DCC Score</span>
                  <span className="font-headline text-3xl font-bold text-[#f39a3b]">
                    {liveMatch.dccScore || "172/4"}
                  </span>
                  <span className="text-xs text-stone-500 ml-1.5 font-medium">
                    ({liveMatch.dccOvers || "18.3"} ov)
                  </span>
                </div>

                <div className="text-stone-400 font-headline text-2xl font-bold">VS</div>

                <div>
                  <span className="text-xs text-stone-500 block uppercase font-semibold">
                    {liveMatch.opponent}
                  </span>
                  <span className="font-headline text-3xl font-bold text-[#090A0C]">
                    {liveMatch.opponentScore || "168/8"}
                  </span>
                  <span className="text-xs text-stone-500 ml-1.5 font-medium">
                    ({liveMatch.opponentOvers || "20.0"} ov)
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-600 flex items-center gap-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#f39a3b]" />
                <span>{liveMatch.venue}</span>
                <span className="text-stone-300">•</span>
                <Clock className="w-3.5 h-3.5 text-[#f39a3b]" />
                <span>{liveMatch.date} ({liveMatch.time})</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsLiveModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-headline text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 shadow-md shadow-red-600/20"
              >
                <Radio className="w-4 h-4" />
                <span>Update Live Score</span>
              </button>
              <button
                onClick={() => setActiveTab("matches")}
                className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 font-headline text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <span>All Fixtures</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid: 2026–2029 MOU Tracker + Practice Routine Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Box 1: MOU Deliverables Checklist */}
        <div className="p-6 rounded-3xl bg-white border border-[#E8E3DD] shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E3DD]">
            <div className="flex items-center gap-2">
              <Handshake className="w-5 h-5 text-[#f39a3b]" />
              <h3 className="font-headline text-xl font-bold text-[#090A0C] tracking-tight">
                2026–2029 SPONSORSHIP MOU TRACKER
              </h3>
            </div>
            <button
              onClick={() => setActiveTab("sponsors")}
              className="text-xs font-headline text-[#f39a3b] font-bold hover:underline uppercase tracking-wide cursor-pointer"
            >
              View All ({sponsors.length})
            </button>
          </div>

          <p className="text-xs text-stone-500 font-medium">
            Mandated deliverables per Schedule A of Official DCC Sponsorship MOU:
          </p>

          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs space-y-0.5">
                <span className="text-stone-900 font-semibold block">Match Jersey Branding</span>
                <span className="text-stone-500">Up to approximately 25 competitive leather-ball matches per season</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs space-y-0.5">
                <span className="text-stone-900 font-semibold block">Social Media Presence</span>
                <span className="text-stone-500">Promotions across match reels (~1K avg estimated reach per reel)</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs space-y-0.5">
                <span className="text-stone-900 font-semibold block">Commercial Agreement</span>
                <span className="text-stone-500">₹60,000/- annual sponsorship (₹1,80,000/- over 3-season term)</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-200 font-medium">
            <span>DCC Committee Signatory Verified</span>
            <span className="text-emerald-700 font-semibold">Active &amp; In Good Standing</span>
          </div>
        </div>

        {/* Box 2: Practice Nets & Routine Tracker */}
        <div className="p-6 rounded-3xl bg-white border border-[#E8E3DD] shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E3DD]">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#f39a3b]" />
              <h3 className="font-headline text-xl font-bold text-[#090A0C] tracking-tight">
                MATUNGA GROUND PRACTICE NETS
              </h3>
            </div>
            <button
              onClick={() => setActiveTab("training")}
              className="text-xs font-headline text-[#f39a3b] font-bold hover:underline uppercase tracking-wide cursor-pointer"
            >
              Session Logs
            </button>
          </div>

          <p className="text-xs text-stone-500 font-medium">
            Official club practice routine led by Head Coach Aditya Koli (Kanga B Division):
          </p>

          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-sm font-headline text-[#f39a3b] block font-bold uppercase tracking-wider">TUE</span>
              <span className="text-sm font-semibold text-stone-900 block mt-1">Batting Drills</span>
              <span className="text-[11px] text-stone-500 font-medium">6:30 – 9:00 AM</span>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-sm font-headline text-[#f39a3b] block font-bold uppercase tracking-wider">THU</span>
              <span className="text-sm font-semibold text-stone-900 block mt-1">Bowling &amp; Nets</span>
              <span className="text-[11px] text-stone-500 font-medium">6:30 – 9:00 AM</span>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-sm font-headline text-emerald-600 block font-bold uppercase tracking-wider">SAT</span>
              <span className="text-sm font-semibold text-stone-900 block mt-1">Simulated Match</span>
              <span className="text-[11px] text-stone-500 font-medium">3:30 – 6:30 PM</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-stone-50/70 border border-stone-200 space-y-1 text-xs">
            <div className="text-stone-800 font-semibold">Coach Aditya Koli Tenet:</div>
            <p className="text-stone-600 text-xs italic">
              &ldquo;Structured preparation, discipline, and match situation awareness build consistent match-winners.&rdquo;
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-200 font-medium">
            <span>Matunga Gymkhana Turf Nets</span>
            <span className="text-[#f39a3b] font-semibold">Season 2026–27 Scheduled</span>
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
