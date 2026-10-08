"use client";

import React, { useState } from "react";
import { X, Radio, RefreshCw } from "lucide-react";
import { Match } from "@/lib/types/cricket";

interface LiveScoreUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  match: Match | null;
  onUpdate: (
    matchId: string,
    dccScore: string,
    dccOvers: string,
    opponentScore?: string,
    opponentOvers?: string,
    result?: string
  ) => void;
}

export function LiveScoreUpdateModal({
  isOpen,
  onClose,
  match,
  onUpdate,
}: LiveScoreUpdateModalProps) {
  const [dccRuns, setDccRuns] = useState(match?.dccScore?.split("/")[0] || "172");
  const [dccWickets, setDccWickets] = useState(match?.dccScore?.split("/")[1] || "4");
  const [dccOvers, setDccOvers] = useState(match?.dccOvers || "18.3");

  const [oppRuns, setOppRuns] = useState(match?.opponentScore?.split("/")[0] || "168");
  const [oppWickets, setOppWickets] = useState(match?.opponentScore?.split("/")[1] || "8");
  const [oppOvers, setOppOvers] = useState(match?.opponentOvers || "20.0");

  const [resultSummary, setResultSummary] = useState(match?.result || "");
  const [markCompleted, setMarkCompleted] = useState(false);

  if (!isOpen || !match) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dccScore = `${dccRuns}/${dccWickets}`;
    const oppScore = `${oppRuns}/${oppWickets}`;

    onUpdate(
      match.id,
      dccScore,
      dccOvers,
      oppScore,
      oppOvers,
      markCompleted ? (resultSummary || "Match Completed") : undefined
    );
    onClose();
  };

  const handleQuickAddBoundary = (type: "four" | "six" | "single" | "wicket") => {
    const curRuns = parseInt(dccRuns, 10) || 0;
    const curWkts = parseInt(dccWickets, 10) || 0;

    if (type === "single") setDccRuns(String(curRuns + 1));
    if (type === "four") setDccRuns(String(curRuns + 4));
    if (type === "six") setDccRuns(String(curRuns + 6));
    if (type === "wicket" && curWkts < 10) setDccWickets(String(curWkts + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#14161B] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">
                MATCHDAY LIVE SCORE CONSOLE
              </h3>
              <p className="text-xs font-mono text-stone-400">
                Devpur Cricket Club vs {match.opponent}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Simulator Buttons */}
        <div className="mb-5 p-3 rounded-2xl bg-black/60 border border-white/5 space-y-2">
          <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider block">
            ⚡ Quick Ball Simulator
          </span>
          <div className="grid grid-cols-4 gap-2">
            <button
              type="button"
              onClick={() => handleQuickAddBoundary("single")}
              className="py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
            >
              +1 Run
            </button>
            <button
              type="button"
              onClick={() => handleQuickAddBoundary("four")}
              className="py-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-blue-200 border border-blue-500/30 font-mono text-xs font-bold transition-colors cursor-pointer"
            >
              +4 FOUR
            </button>
            <button
              type="button"
              onClick={() => handleQuickAddBoundary("six")}
              className="py-1.5 rounded-lg bg-brand-orange/30 hover:bg-brand-orange/40 text-brand-orange-light border border-brand-orange/40 font-mono text-xs font-bold transition-colors cursor-pointer"
            >
              +6 SIX
            </button>
            <button
              type="button"
              onClick={() => handleQuickAddBoundary("wicket")}
              className="py-1.5 rounded-lg bg-red-900/60 hover:bg-red-800 text-red-200 border border-red-500/30 font-mono text-xs font-bold transition-colors cursor-pointer"
            >
              WICKET!
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider block">
              DCC Current Innings
            </span>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-[10px] font-mono text-stone-400 block mb-1">Runs</label>
                <input
                  type="text"
                  value={dccRuns}
                  onChange={(e) => setDccRuns(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/80 border border-white/10 text-white text-base font-mono font-bold"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono text-stone-400 block mb-1">Wickets</label>
                <input
                  type="text"
                  value={dccWickets}
                  onChange={(e) => setDccWickets(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/80 border border-white/10 text-white text-base font-mono font-bold"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono text-stone-400 block mb-1">Overs</label>
                <input
                  type="text"
                  value={dccOvers}
                  onChange={(e) => setDccOvers(e.target.value)}
                  placeholder="19.2"
                  className="w-full px-3 py-2 rounded-xl bg-black/80 border border-white/10 text-white text-base font-mono font-bold"
                />
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
              Opponent ({match.opponentShort || match.opponent})
            </span>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-[10px] font-mono text-stone-400 block mb-1">Runs</label>
                <input
                  type="text"
                  value={oppRuns}
                  onChange={(e) => setOppRuns(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/80 border border-white/10 text-white text-sm font-mono"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono text-stone-400 block mb-1">Wickets</label>
                <input
                  type="text"
                  value={oppWickets}
                  onChange={(e) => setOppWickets(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/80 border border-white/10 text-white text-sm font-mono"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono text-stone-400 block mb-1">Overs</label>
                <input
                  type="text"
                  value={oppOvers}
                  onChange={(e) => setOppOvers(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/80 border border-white/10 text-white text-sm font-mono"
                />
              </div>
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-stone-300">
              <input
                type="checkbox"
                checked={markCompleted}
                onChange={(e) => setMarkCompleted(e.target.checked)}
                className="rounded border-stone-700 bg-stone-900 text-brand-orange focus:ring-brand-orange"
              />
              <span>Conclude &amp; Mark Match as Completed</span>
            </label>

            {markCompleted && (
              <input
                type="text"
                value={resultSummary}
                onChange={(e) => setResultSummary(e.target.value)}
                placeholder="e.g. DCC won by 14 runs"
                className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-mono"
              />
            )}
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
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-headline text-base font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer shadow-md shadow-brand-orange/20 flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Broadcast Score Update</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
