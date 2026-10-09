"use client";

import React, { useState } from "react";
import { X, UserCheck } from "lucide-react";
import { Player, PlayerRole } from "@/lib/types/cricket";

interface MemberEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Omit<Player, "id"> | Partial<Player>) => void;
  initialPlayer?: Player | null;
}

const ROLES: PlayerRole[] = [
  "Opening Batter",
  "Middle Order Batter",
  "All-Rounder",
  "Fast Bowler",
  "Spin Bowler",
  "Wicketkeeper Batter",
];

function MemberFormInner({
  initialPlayer,
  onClose,
  onSave,
}: {
  initialPlayer?: Player | null;
  onClose: () => void;
  onSave: (data: Omit<Player, "id"> | Partial<Player>) => void;
}) {
  const [formData, setFormData] = useState(() => ({
    name: initialPlayer?.name || "",
    role: initialPlayer?.role || ("All-Rounder" as PlayerRole),
    jerseyNumber: initialPlayer?.jerseyNumber ?? (Math.floor(Math.random() * 80) + 1),
    battingStyle: initialPlayer?.battingStyle || "Right-hand bat",
    bowlingStyle: initialPlayer?.bowlingStyle || "Right-arm medium fast",
    joiningYear: initialPlayer?.joiningYear || 2021,
    bio: initialPlayer?.bio || "Active Devpur Cricket Club member training at Matunga Ground.",
    photo: initialPlayer?.photo || "/images/members.png",
    featured: !!initialPlayer?.featured,
    matches: initialPlayer?.careerStats?.matches || 15,
    runs: initialPlayer?.careerStats?.runs || 180,
    wickets: initialPlayer?.careerStats?.wickets || 8,
    highestScore: initialPlayer?.careerStats?.highestScore || "45",
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const playerPayload = {
      name: formData.name,
      slug: initialPlayer ? initialPlayer.slug : slug,
      role: formData.role,
      jerseyNumber: Number(formData.jerseyNumber),
      battingStyle: formData.battingStyle,
      bowlingStyle: formData.bowlingStyle,
      joiningYear: Number(formData.joiningYear),
      bio: formData.bio,
      photo: formData.photo,
      featured: formData.featured,
      careerStats: {
        matches: Number(formData.matches),
        runs: Number(formData.runs),
        wickets: Number(formData.wickets),
        average: 28.5,
        strikeRate: 124.0,
        highestScore: formData.highestScore,
        fifties: 2,
        hundreds: 0,
        fours: 25,
        sixes: 8,
        catches: 10,
        runouts: 2,
      },
      currentSeasonStats: {
        matches: 6,
        runs: 110,
        wickets: 4,
        average: 27.5,
        strikeRate: 120.0,
        highestScore: "38",
        fifties: 0,
        hundreds: 0,
        fours: 8,
        sixes: 2,
        catches: 3,
        runouts: 1,
      },
      recentPerformances: [],
    };

    onSave(playerPayload);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white border border-[#E8E3DD] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E3DD] mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D7833D]/10 border border-[#D7833D]/25 text-[#D7833D]">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-[#090A0C] tracking-tight">
                {initialPlayer ? "EDIT MEMBER PROFILE" : "ENROLL NEW MEMBER"}
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                Devpur Cricket Club 50+ Player Roster Registry
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Member Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="e.g. Yash Haria"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:border-[#D7833D] focus:bg-white outline-hidden font-medium transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Jersey #
              </label>
              <input
                type="number"
                required
                value={formData.jerseyNumber}
                onChange={(e) => setFormData((prev) => ({ ...prev, jerseyNumber: Number(e.target.value) }))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:border-[#D7833D] focus:bg-white outline-hidden font-headline font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Playing Discipline / Role *
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value as PlayerRole }))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:border-[#D7833D] focus:bg-white outline-hidden font-semibold cursor-pointer"
              >
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Joined DCC Year
              </label>
              <input
                type="number"
                value={formData.joiningYear}
                onChange={(e) => setFormData((prev) => ({ ...prev, joiningYear: Number(e.target.value) }))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:border-[#D7833D] focus:bg-white outline-hidden font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Batting Style
              </label>
              <input
                type="text"
                value={formData.battingStyle}
                onChange={(e) => setFormData((prev) => ({ ...prev, battingStyle: e.target.value }))}
                placeholder="Right-hand bat"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:border-[#D7833D] focus:bg-white outline-hidden font-medium transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Bowling Style
              </label>
              <input
                type="text"
                value={formData.bowlingStyle}
                onChange={(e) => setFormData((prev) => ({ ...prev, bowlingStyle: e.target.value }))}
                placeholder="Right-arm medium fast"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:border-[#D7833D] focus:bg-white outline-hidden font-medium transition-colors"
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F6F5F3] border border-[#E8E3DD] space-y-3">
            <span className="text-xs font-headline font-bold text-[#D7833D] uppercase tracking-wider block">
              Club Career Statistics
            </span>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <label className="text-[10px] text-stone-600 block mb-1 font-bold uppercase tracking-wider">Matches</label>
                <input
                  type="number"
                  value={formData.matches}
                  onChange={(e) => setFormData((prev) => ({ ...prev, matches: Number(e.target.value) }))}
                  className="w-full px-2.5 py-2 rounded-lg bg-white border border-stone-200 text-stone-900 text-xs font-semibold focus:border-[#D7833D] outline-hidden"
                />
              </div>
              <div>
                <label className="text-[10px] text-stone-600 block mb-1 font-bold uppercase tracking-wider">Runs</label>
                <input
                  type="number"
                  value={formData.runs}
                  onChange={(e) => setFormData((prev) => ({ ...prev, runs: Number(e.target.value) }))}
                  className="w-full px-2.5 py-2 rounded-lg bg-white border border-stone-200 text-stone-900 text-xs font-semibold focus:border-[#D7833D] outline-hidden"
                />
              </div>
              <div>
                <label className="text-[10px] text-stone-600 block mb-1 font-bold uppercase tracking-wider">Wkts</label>
                <input
                  type="number"
                  value={formData.wickets}
                  onChange={(e) => setFormData((prev) => ({ ...prev, wickets: Number(e.target.value) }))}
                  className="w-full px-2.5 py-2 rounded-lg bg-white border border-stone-200 text-stone-900 text-xs font-semibold focus:border-[#D7833D] outline-hidden"
                />
              </div>
              <div>
                <label className="text-[10px] text-stone-600 block mb-1 font-bold uppercase tracking-wider">HS</label>
                <input
                  type="text"
                  value={formData.highestScore}
                  onChange={(e) => setFormData((prev) => ({ ...prev, highestScore: e.target.value }))}
                  className="w-full px-2.5 py-2 rounded-lg bg-white border border-stone-200 text-stone-900 text-xs font-semibold focus:border-[#D7833D] outline-hidden"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              Member Bio &amp; Journey
            </label>
            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:border-[#D7833D] focus:bg-white outline-hidden font-medium transition-colors"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E8E3DD]">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-headline font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D7833D] to-[#C27332] text-white font-headline text-base font-bold uppercase tracking-wider hover:from-[#C27332] transition-opacity cursor-pointer shadow-md shadow-[#D7833D]/20"
            >
              {initialPlayer ? "Save Member Details" : "Add to Squad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function MemberEditModal({
  isOpen,
  onClose,
  onSave,
  initialPlayer,
}: MemberEditModalProps) {
  if (!isOpen) return null;

  return (
    <MemberFormInner
      key={initialPlayer ? initialPlayer.id : "new-player"}
      initialPlayer={initialPlayer}
      onClose={onClose}
      onSave={onSave}
    />
  );
}
