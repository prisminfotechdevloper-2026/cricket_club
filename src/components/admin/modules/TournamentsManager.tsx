"use client";

import React from "react";
import { Trophy } from "lucide-react";
import { useAdmin } from "@/lib/admin/adminStore";

export function TournamentsManager() {
  const { tournaments } = useAdmin();

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E3DD]">
        <div>
          <h2 className="font-headline text-3xl font-bold text-[#090A0C] tracking-tight">
            TOURNAMENTS &amp; SEASON CAMPAIGNS
          </h2>
          <p className="text-xs text-stone-500 font-medium">
            KVO ecosystem tournament records, annual rankings, and championship silverware archive.
          </p>
        </div>
      </div>

      {/* Official Sporting Standing Banner */}
      <div className="p-6 rounded-3xl bg-white border border-[#E8E3DD] shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
          <span className="text-xs font-headline font-bold uppercase tracking-wider text-stone-500 block">KVO Ecosystem Standing</span>
          <span className="font-headline text-3xl font-bold text-[#D7833D] block">Rank 10</span>
          <p className="text-xs text-stone-600 font-medium">Among all active community cricket clubs</p>
        </div>
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
          <span className="text-xs font-headline font-bold uppercase tracking-wider text-stone-500 block">Silverware &amp; Honours</span>
          <span className="font-headline text-3xl font-bold text-stone-900 block">2 Trophies</span>
          <p className="text-xs text-stone-600 font-medium">Official tournament runners-up trophies</p>
        </div>
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
          <span className="text-xs font-headline font-bold uppercase tracking-wider text-stone-500 block">Active Campaign Target</span>
          <span className="font-headline text-3xl font-bold text-[#B96623] block">Championship Push</span>
          <p className="text-xs text-stone-600 font-medium">Targeting top 5 finish in 2026–27 season</p>
        </div>
      </div>

      {/* Tournaments List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tournaments.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl bg-white border border-[#E8E3DD] shadow-xs hover:border-[#D7833D]/30 hover:shadow-md transition-all space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#D7833D]/10 text-[#B96623] border border-[#D7833D]/25 text-xs font-headline font-bold uppercase tracking-wider inline-block mb-1.5">
                  {t.season}
                </span>
                <h3 className="font-headline text-2xl font-bold text-[#090A0C]">
                  {t.name}
                </h3>
                <p className="text-xs text-stone-500 font-medium mt-0.5">
                  Organized by {t.organizer} • {t.location}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200 text-[#D7833D]">
                <Trophy className="w-5 h-5" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 grid grid-cols-3 gap-2 text-center">
              <div>
                <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Played</span>
                <span className="text-stone-900 font-headline text-2xl font-bold">{t.matchesPlayed}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Won</span>
                <span className="text-emerald-700 font-headline text-2xl font-bold">{t.wins}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Finish</span>
                <span className="text-[#D7833D] font-headline text-2xl font-bold">{t.finishStage}</span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              {t.summary}
            </p>

            {t.topPerformer && (
              <div className="pt-3 border-t border-[#E8E3DD] flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Top Performer:</span>
                <span className="text-[#B96623] font-headline font-bold text-sm tracking-wide">
                  {t.topPerformer.playerName} ({t.topPerformer.stat})
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
