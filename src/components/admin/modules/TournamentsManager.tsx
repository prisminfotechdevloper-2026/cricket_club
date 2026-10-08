"use client";

import React from "react";
import { Trophy } from "lucide-react";
import { useAdmin } from "@/lib/admin/adminStore";

export function TournamentsManager() {
  const { tournaments } = useAdmin();

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="font-headline text-3xl font-bold text-white tracking-tight">
            TOURNAMENTS &amp; SEASON CAMPAIGNS
          </h2>
          <p className="text-xs font-mono text-stone-400">
            KVO ecosystem tournament records, annual rankings, and championship silverware archive.
          </p>
        </div>
      </div>

      {/* Official Sporting Standing Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#17191F] via-[#121418] to-[#0E1013] border border-brand-gold/30 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
          <span className="text-[10px] font-mono uppercase text-stone-400 block">KVO Ecosystem Standing</span>
          <span className="font-headline text-3xl font-bold text-brand-gold block">Rank 10</span>
          <p className="text-xs text-stone-400">Among all active community cricket clubs</p>
        </div>
        <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
          <span className="text-[10px] font-mono uppercase text-stone-400 block">Silverware &amp; Honours</span>
          <span className="font-headline text-3xl font-bold text-white block">2 Trophies</span>
          <p className="text-xs text-stone-400">Official tournament runners-up trophies</p>
        </div>
        <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
          <span className="text-[10px] font-mono uppercase text-stone-400 block">Active Campaign Target</span>
          <span className="font-headline text-3xl font-bold text-brand-orange block">Championship Push</span>
          <p className="text-xs text-stone-400">Targeting top 5 finish in 2026–27 season</p>
        </div>
      </div>

      {/* Tournaments List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tournaments.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl bg-[#14161B] border border-white/10 hover:border-brand-orange/30 transition-colors space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30 text-[10px] font-mono font-bold uppercase inline-block mb-1.5">
                  {t.season}
                </span>
                <h3 className="font-headline text-2xl font-bold text-white">
                  {t.name}
                </h3>
                <p className="text-xs font-mono text-stone-400 mt-0.5">
                  Organized by {t.organizer} • {t.location}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-brand-gold">
                <Trophy className="w-5 h-5" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div>
                <span className="text-[10px] text-stone-500 block uppercase">Played</span>
                <span className="text-white font-bold">{t.matchesPlayed}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-500 block uppercase">Won</span>
                <span className="text-emerald-400 font-bold">{t.wins}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-500 block uppercase">Finish</span>
                <span className="text-brand-orange font-bold">{t.finishStage}</span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {t.summary}
            </p>

            {t.topPerformer && (
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-stone-400">Top Performer:</span>
                <span className="text-brand-orange-light font-semibold">
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
