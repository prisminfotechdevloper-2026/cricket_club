"use client";

import React, { useState } from "react";
import {
  Trophy,
  Plus,
  Search,
  Edit2,
  Trash2,
  Radio,
  ExternalLink,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";
import { useAdmin } from "@/lib/admin/adminStore";
import { Match } from "@/lib/types/cricket";
import { MatchEditModal } from "../modals/MatchEditModal";
import { LiveScoreUpdateModal } from "../modals/LiveScoreUpdateModal";

export function MatchesManager() {
  const { matches, createMatch, updateMatch, deleteMatch, updateLiveScore } = useAdmin();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMatch, setEditingMatch] = useState<Match | null>(null);

  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);
  const [liveSelectedMatch, setLiveSelectedMatch] = useState<Match | null>(null);

  const filteredMatches = matches.filter((m) => {
    const matchesSearch =
      m.opponent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.tournament.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.venue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || m.status === statusFilter;
    const matchesType =
      typeFilter === "all" ||
      (typeFilter === "leather" && m.competitionType === "Red Ball") ||
      (typeFilter === "white" && m.competitionType === "White Ball") ||
      (typeFilter === "practice" && m.competitionType === "Practice Match");

    return matchesSearch && matchesStatus && matchesType;
  });

  const handleEdit = (match: Match) => {
    setEditingMatch(match);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingMatch(null);
    setIsModalOpen(true);
  };

  const handleOpenLiveModal = (match: Match) => {
    setLiveSelectedMatch(match);
    setIsLiveModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E3DD]">
        <div>
          <h2 className="font-headline text-3xl font-bold text-[#090A0C] tracking-tight">
            MATCH FIXTURES &amp; LIVE SCORES
          </h2>
          <p className="text-xs text-stone-500 font-medium">
            Manage upcoming tournament dates, update active match scores, and archive season results.
          </p>
        </div>
        <button
          onClick={handleAddNew}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D7833D] to-[#C27332] hover:from-[#C27332] text-white font-headline text-sm font-bold uppercase tracking-wider transition-opacity cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-md shadow-[#D7833D]/20"
        >
          <Plus className="w-4 h-4" />
          <span>Schedule New Match</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-[#E8E3DD] shadow-xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by opponent, tournament, or ground..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 text-xs font-medium focus:border-[#D7833D] focus:bg-white outline-hidden transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-xs font-semibold focus:border-[#D7833D] focus:bg-white outline-hidden cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="upcoming">Upcoming</option>
            <option value="live">Live Now</option>
            <option value="completed">Completed</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-xs font-semibold focus:border-[#D7833D] focus:bg-white outline-hidden cursor-pointer"
          >
            <option value="all">All Formats</option>
            <option value="leather">Red Ball (Leather)</option>
            <option value="white">White Ball</option>
            <option value="practice">Practice Match</option>
          </select>
        </div>
      </div>

      {/* Matches Grid / Table */}
      <div className="grid grid-cols-1 gap-4">
        {filteredMatches.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white border border-[#E8E3DD] shadow-xs">
            <Trophy className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <h3 className="text-stone-900 font-semibold text-sm">No matches found</h3>
            <p className="text-xs text-stone-500 mt-1">Try adjusting your search criteria</p>
          </div>
        ) : (
          filteredMatches.map((m) => {
            const isLive = m.status === "live";
            const isCompleted = m.status === "completed";

            return (
              <div
                key={m.id}
                className="p-5 rounded-2xl bg-white border border-[#E8E3DD] shadow-xs hover:border-[#D7833D]/40 hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-5"
              >
                {/* Left match summary */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {isLive && (
                      <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-headline font-bold uppercase tracking-wider flex items-center gap-1 animate-pulse">
                        <Radio className="w-3 h-3" /> LIVE NOW
                      </span>
                    )}
                    {isCompleted && (
                      <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200 text-xs font-headline font-bold uppercase tracking-wider">
                        COMPLETED
                      </span>
                    )}
                    {!isLive && !isCompleted && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#D7833D]/10 text-[#B96623] border border-[#D7833D]/25 text-xs font-headline font-bold uppercase tracking-wider">
                        UPCOMING
                      </span>
                    )}
                    <span className="text-xs font-semibold text-stone-800">
                      {m.tournament}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="text-xs text-stone-500 font-medium">
                      {m.competitionType || "Leather Ball"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-headline text-2xl font-bold text-[#090A0C] tracking-tight">
                      Devpur Cricket Club
                    </span>
                    <span className="font-headline text-xl font-bold text-stone-400">VS</span>
                    <span className="font-headline text-2xl font-bold text-[#D7833D] tracking-tight">
                      {m.opponent}
                    </span>
                  </div>

                  {/* Scores line if live or completed */}
                  {(isLive || isCompleted) && (
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-stone-600 font-medium">
                        DCC: <strong className="text-stone-900 font-headline text-base">{m.dccScore || "—"}</strong> ({m.dccOvers || "—"} ov)
                      </span>
                      <span className="text-stone-300">|</span>
                      <span className="text-stone-600 font-medium">
                        {m.opponentShort || m.opponent}: <strong className="text-stone-900 font-headline text-base">{m.opponentScore || "—"}</strong> ({m.opponentOvers || "—"} ov)
                      </span>
                      {m.result && (
                        <>
                          <span className="text-stone-300">|</span>
                          <span className="text-[#B96623] font-headline font-bold text-sm tracking-wide">{m.result}</span>
                        </>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 font-medium pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D7833D]" />
                      {m.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B96623]" />
                      {m.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      {m.venue}
                    </span>
                  </div>
                </div>

                {/* Right actions */}
                <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#E8E3DD]">
                  <button
                    onClick={() => handleOpenLiveModal(m)}
                    className="px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-xs font-headline font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                  >
                    <Radio className="w-3.5 h-3.5 text-red-600" />
                    <span>Live Score</span>
                  </button>

                  <button
                    onClick={() => handleEdit(m)}
                    className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer shadow-2xs"
                    aria-label="Edit match"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      if (confirm(`Delete fixture against ${m.opponent}?`)) {
                        deleteMatch(m.id);
                      }
                    }}
                    className="p-2 rounded-xl bg-white hover:bg-red-50 border border-stone-200 text-stone-400 hover:text-red-600 transition-colors cursor-pointer shadow-2xs"
                    aria-label="Delete match"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {m.scoreUrl && (
                    <a
                      href={m.scoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-600 hover:text-[#D7833D] transition-colors shadow-2xs"
                      title="Open external live score page"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Match Edit Modal */}
      <MatchEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMatch={editingMatch}
        onSave={(data) => {
          if (editingMatch) {
            updateMatch(editingMatch.id, data);
          } else {
            createMatch(data as Omit<Match, "id">);
          }
        }}
      />

      {/* Live Score Modal */}
      <LiveScoreUpdateModal
        isOpen={isLiveModalOpen}
        onClose={() => setIsLiveModalOpen(false)}
        match={liveSelectedMatch}
        onUpdate={updateLiveScore}
      />
    </div>
  );
}
