"use client";

import React, { useState } from "react";
import { X, Trophy } from "lucide-react";
import { Match, MatchStatus } from "@/lib/types/cricket";

interface MatchEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (matchData: Omit<Match, "id"> | Partial<Match>) => void;
  initialMatch?: Match | null;
}

function MatchFormInner({
  initialMatch,
  onClose,
  onSave,
}: {
  initialMatch?: Match | null;
  onClose: () => void;
  onSave: (matchData: Omit<Match, "id"> | Partial<Match>) => void;
}) {
  const [formData, setFormData] = useState(() => ({
    opponent: initialMatch?.opponent || "",
    opponentShort: initialMatch?.opponentShort || "",
    tournament: initialMatch?.tournament || "KVO Premier League 2026",
    tournamentSlug: initialMatch?.tournamentSlug || "kvo-premier-league-2026",
    season: initialMatch?.season || "2026–27",
    competitionType: initialMatch?.competitionType || ("White Ball" as "White Ball" | "Red Ball" | "Practice Match"),
    matchType: initialMatch?.matchType || "League Match",
    date: initialMatch?.date || "18 Oct 2026",
    time: initialMatch?.time || "09:30 AM IST",
    venue: initialMatch?.venue || "Matunga Gymkhana Ground, Mumbai",
    status: initialMatch?.status || ("upcoming" as MatchStatus),
    dccScore: initialMatch?.dccScore || "",
    dccOvers: initialMatch?.dccOvers || "",
    opponentScore: initialMatch?.opponentScore || "",
    opponentOvers: initialMatch?.opponentOvers || "",
    result: initialMatch?.result || "",
    scoreUrl: initialMatch?.scoreUrl || "https://cricclubs.com/devpurcc",
    featured: !!initialMatch?.featured,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = `dcc-vs-${formData.opponent.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now().toString().slice(-4)}`;
    onSave({
      ...formData,
      slug: initialMatch ? initialMatch.slug : slug,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-[#14161B] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-orange/15 border border-brand-orange/30 text-brand-orange">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">
                {initialMatch ? "EDIT MATCH FIXTURE" : "SCHEDULE NEW MATCH"}
              </h3>
              <p className="text-xs font-mono text-stone-400">
                Official Devpur Cricket Club Seasonal Fixture Record
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
                Opponent Team Name *
              </label>
              <input
                type="text"
                required
                value={formData.opponent}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    opponent: e.target.value,
                    opponentShort: e.target.value.substring(0, 4).toUpperCase(),
                  }))
                }
                placeholder="e.g. Royal XI Cricket Club"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
                Opponent Short Code
              </label>
              <input
                type="text"
                value={formData.opponentShort}
                onChange={(e) => setFormData((prev) => ({ ...prev, opponentShort: e.target.value }))}
                placeholder="e.g. RXI"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
                Tournament / Cup *
              </label>
              <input
                type="text"
                required
                value={formData.tournament}
                onChange={(e) => setFormData((prev) => ({ ...prev, tournament: e.target.value }))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
                Competition Ball
              </label>
              <select
                value={formData.competitionType}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    competitionType: e.target.value as "White Ball" | "Red Ball" | "Practice Match",
                  }))
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
              >
                <option value="White Ball">White Ball</option>
                <option value="Red Ball">Red Ball (Leather)</option>
                <option value="Practice Match">Club Practice Match</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
                Match Status
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, status: e.target.value as MatchStatus }))
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
              >
                <option value="upcoming">Upcoming</option>
                <option value="live">Live Now</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
                Date
              </label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                placeholder="e.g. 24 Oct 2026"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
                Time
              </label>
              <input
                type="text"
                value={formData.time}
                onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
                placeholder="e.g. 09:30 AM IST"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
                Venue
              </label>
              <input
                type="text"
                value={formData.venue}
                onChange={(e) => setFormData((prev) => ({ ...prev, venue: e.target.value }))}
                placeholder="Matunga Gymkhana Ground"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
              />
            </div>
          </div>

          {/* Scores (if live or completed) */}
          {(formData.status === "live" || formData.status === "completed") && (
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider block">
                Scores &amp; Result Details
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="text-[10px] font-mono text-stone-400 block mb-1">DCC Score</label>
                  <input
                    type="text"
                    value={formData.dccScore}
                    onChange={(e) => setFormData((prev) => ({ ...prev, dccScore: e.target.value }))}
                    placeholder="184/5"
                    className="w-full px-3 py-2 rounded-lg bg-black/80 border border-white/10 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-stone-400 block mb-1">DCC Overs</label>
                  <input
                    type="text"
                    value={formData.dccOvers}
                    onChange={(e) => setFormData((prev) => ({ ...prev, dccOvers: e.target.value }))}
                    placeholder="20.0"
                    className="w-full px-3 py-2 rounded-lg bg-black/80 border border-white/10 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-stone-400 block mb-1">Opponent Score</label>
                  <input
                    type="text"
                    value={formData.opponentScore}
                    onChange={(e) => setFormData((prev) => ({ ...prev, opponentScore: e.target.value }))}
                    placeholder="165/9"
                    className="w-full px-3 py-2 rounded-lg bg-black/80 border border-white/10 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-stone-400 block mb-1">Opponent Overs</label>
                  <input
                    type="text"
                    value={formData.opponentOvers}
                    onChange={(e) => setFormData((prev) => ({ ...prev, opponentOvers: e.target.value }))}
                    placeholder="20.0"
                    className="w-full px-3 py-2 rounded-lg bg-black/80 border border-white/10 text-white text-xs font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-mono text-stone-400 block mb-1">Match Result / Summary</label>
                <input
                  type="text"
                  value={formData.result}
                  onChange={(e) => setFormData((prev) => ({ ...prev, result: e.target.value }))}
                  placeholder="e.g. DCC won by 19 runs"
                  className="w-full px-3 py-2 rounded-lg bg-black/80 border border-white/10 text-white text-xs font-mono"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
              Live Score Link (CricClubs / External Portal)
            </label>
            <input
              type="url"
              value={formData.scoreUrl}
              onChange={(e) => setFormData((prev) => ({ ...prev, scoreUrl: e.target.value }))}
              placeholder="https://cricclubs.com/..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-white/10 text-stone-300 hover:bg-white/5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-headline text-base font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer shadow-md shadow-brand-orange/20"
            >
              {initialMatch ? "Save Match Changes" : "Create Match"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function MatchEditModal({
  isOpen,
  onClose,
  onSave,
  initialMatch,
}: MatchEditModalProps) {
  if (!isOpen) return null;

  return (
    <MatchFormInner
      key={initialMatch ? initialMatch.id : "new-match"}
      initialMatch={initialMatch}
      onClose={onClose}
      onSave={onSave}
    />
  );
}
