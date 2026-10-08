"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Match } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { LiveBadge } from "../common/LiveBadge";
import { sponsors } from "@/lib/data/sponsors";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,
  Share2,
  ExternalLink,
} from "lucide-react";

interface LiveScoreCentreProps {
  match: Match;
}

type TabType = "scorecard" | "commentary" | "overs" | "teams";

export function LiveScoreCentre({ match }: LiveScoreCentreProps) {
  const [activeTab, setActiveTab] = useState<TabType>("scorecard");
  const [commentaryFilter, setCommentaryFilter] = useState<"all" | "boundaries" | "wickets">("all");
  const [isCopied, setIsCopied] = useState(false);

  const liveDetails = match.liveDetails;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const filteredCommentary = liveDetails?.commentary.filter((c) => {
    if (commentaryFilter === "boundaries") return c.type === "boundary" || c.type === "six";
    if (commentaryFilter === "wickets") return c.type === "wicket";
    return true;
  });

  return (
    <div className="py-6 sm:py-10 bg-background min-h-screen">
      <Container>
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link
            href="/matches"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-brand-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Matches Center</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="https://cricclubs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-semibold text-foreground-soft hover:bg-stone-50 transition-colors"
            >
              <span>External Cric Club Scorecard</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted" />
            </a>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-semibold text-foreground-soft hover:bg-stone-50 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{isCopied ? "Link Copied!" : "Share Match"}</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            MATCH CENTRE HERO BANNER (Light, Athletic & Clean)
           ========================================================================= */}
        <div className="rounded-3xl bg-surface border border-border shadow-md overflow-hidden mb-8">
          <div className="h-1.5 bg-gradient-to-r from-brand-maroon via-brand-red to-brand-copper" />

          <div className="p-5 sm:p-8">
            {/* Top Bar: Tournament & Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border/80">
              <div className="flex items-center gap-2.5">
                <LiveBadge size="lg" text="LIVE NOW" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-copper">
                  {match.tournament} • {match.matchType}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-muted font-medium">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-copper" />
                  {match.date}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-copper" />
                  {match.time}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-copper" />
                  {match.venue}
                </span>
              </div>
            </div>

            {/* Teams & Giant Live Scores */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
              {/* Devpur Cricket Club */}
              <div className="p-5 sm:p-6 rounded-2xl bg-surface-soft border border-border flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-headline text-2xl sm:text-4xl font-extrabold text-brand-black tracking-tight">
                      Devpur Cricket Club
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded font-extrabold bg-brand-charcoal text-white">
                      DCC
                    </span>
                  </div>
                  <span className="text-xs font-bold text-brand-copper mt-1 block">
                    Batting 2nd • {match.dccOvers} Overs
                  </span>
                  <span className="text-xs text-muted mt-0.5 block">
                    Current Run Rate: {liveDetails?.currentRunRate}
                  </span>
                </div>

                <div className="text-right">
                  <div className="font-headline text-4xl sm:text-6xl font-extrabold text-brand-black tracking-tight leading-none">
                    {match.dccScore}
                  </div>
                  <span className="text-xs font-bold text-brand-copper bg-brand-copper/10 px-2.5 py-0.5 rounded-full inline-block mt-2">
                    4 Wkts Down
                  </span>
                </div>
              </div>

              {/* Royal XI */}
              <div className="p-5 sm:p-6 rounded-2xl bg-surface-soft/60 border border-border/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-headline text-2xl sm:text-3xl font-bold text-foreground-soft tracking-tight">
                      {match.opponent}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded font-bold bg-stone-200 text-stone-700">
                      {match.opponentShort}
                    </span>
                  </div>
                  <span className="text-xs text-muted font-medium mt-1 block">
                    Innings 1 • {match.opponentOvers} Overs
                  </span>
                  <span className="text-xs text-muted mt-0.5 block">
                    Target Set: {liveDetails?.target}
                  </span>
                </div>

                <div className="text-right">
                  <div className="font-headline text-3xl sm:text-5xl font-bold text-foreground-soft tracking-tight leading-none">
                    {match.opponentScore}
                  </div>
                  <span className="text-xs text-muted inline-block mt-2 font-medium">
                    Innings Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Equation Strip */}
            {liveDetails && (
              <div className="p-4 rounded-2xl bg-brand-charcoal text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="font-headline text-xl sm:text-2xl font-bold text-brand-peach">
                    DCC need {liveDetails.requiredRuns} runs in {liveDetails.remainingBalls} balls
                  </div>
                  <div className="text-xs text-neutral-300">
                    Required Run Rate: {liveDetails.requiredRunRate} RPO • Current Run Rate: {liveDetails.currentRunRate} RPO
                  </div>
                </div>

                {/* Last 6 Deliveries */}
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                    Recent Balls:
                  </span>
                  <div className="flex items-center gap-1.5">
                    {liveDetails.recentBalls.map((b, n) => ({ ball: b, ballId: `recent-ball-${n}` })).map((item) => (
                      <span
                        key={item.ballId}
                        className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                          item.ball === "6"
                            ? "bg-purple-600 text-white"
                            : item.ball === "4"
                            ? "bg-blue-600 text-white"
                            : item.ball === "W"
                            ? "bg-brand-red text-white"
                            : "bg-white/20 text-white"
                        }`}
                      >
                        {item.ball}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Current Batters & Bowler Quick Box */}
            {liveDetails && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border/80">
                {liveDetails.currentBatters.map((b) => (
                  <div
                    key={b.id}
                    className="p-3.5 rounded-xl bg-stone-50 border border-border/80 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-copper" />
                        <span className="font-bold text-sm text-brand-black">
                          {b.name} {b.isStriker && "*"}
                        </span>
                      </div>
                      <span className="text-[11px] text-muted block mt-0.5">
                        SR: {b.strikeRate} • {b.fours}x4, {b.sixes}x6
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="font-headline text-2xl font-bold text-brand-black leading-none">
                        {b.runs}
                      </div>
                      <span className="text-xs text-muted font-medium">({b.balls}b)</span>
                    </div>
                  </div>
                ))}

                <div className="p-3.5 rounded-xl bg-stone-50 border border-border/80 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-red" />
                      <span className="font-bold text-sm text-brand-black">
                        {liveDetails.currentBowler.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-muted block mt-0.5">
                      Econ: {liveDetails.currentBowler.economy}
                    </span>
                  </div>

                  <div className="text-right font-mono text-sm font-bold text-foreground-soft">
                    {liveDetails.currentBowler.overs}-{liveDetails.currentBowler.maidens}-
                    {liveDetails.currentBowler.runs}-{liveDetails.currentBowler.wickets}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="px-4 sm:px-8 bg-surface-soft border-t border-border flex items-center gap-2 overflow-x-auto scrollbar-none">
            {(
              [
                { id: "scorecard", label: "Full Scorecard" },
                { id: "commentary", label: "Live Commentary" },
                { id: "overs", label: "Overs Summary" },
                { id: "teams", label: "Playing XI & Teams" },
              ] as { id: TabType; label: string }[]
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? "border-brand-copper text-brand-black bg-white"
                    : "border-transparent text-muted hover:text-brand-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Matchday Sponsors Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-copper" />
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              Live Matchday Powered by Official DCC Partners:
            </span>
          </div>

          <div className="flex items-center gap-6 overflow-x-auto py-1">
            {sponsors.slice(0, 5).map((s) => (
              <div key={s.id} className="relative h-6 w-20 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-[filter,opacity] shrink-0">
                <Image
                  src={s.logo}
                  alt={s.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            TAB CONTENT PANELS
           ========================================================================= */}
        {activeTab === "scorecard" && liveDetails && (
          <div className="space-y-8">
            {/* 2nd Innings: DCC (Currently Batting) */}
            <div className="rounded-3xl bg-surface border border-border shadow-sm p-5 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border mb-6">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-brand-black">
                    Devpur Cricket Club — 2nd Innings
                  </h3>
                  <p className="text-xs text-muted">
                    Chasing target of 184 runs • {match.dccOvers} Overs bowled
                  </p>
                </div>
                <div className="font-headline text-2xl font-bold text-brand-copper">
                  {liveDetails.scorecard.secondInnings.totalScore} ({liveDetails.scorecard.secondInnings.overs})
                </div>
              </div>

              {/* Batting Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border/80 text-xs uppercase font-extrabold text-muted">
                      <th className="py-2.5 px-3">Batter</th>
                      <th className="py-2.5 px-3">Dismissal</th>
                      <th className="py-2.5 px-3 text-right">R</th>
                      <th className="py-2.5 px-3 text-right">B</th>
                      <th className="py-2.5 px-3 text-right">4s</th>
                      <th className="py-2.5 px-3 text-right">6s</th>
                      <th className="py-2.5 px-3 text-right">SR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {liveDetails.scorecard.secondInnings.batters.map((b) => (
                      <tr key={b.id} className="hover:bg-surface-soft/60">
                        <td className="py-3 px-3 font-bold text-brand-black">
                          {b.name} {b.isStriker && <span className="text-brand-copper font-black">*</span>}
                        </td>
                        <td className="py-3 px-3 text-xs text-muted">
                          {b.dismissal}
                        </td>
                        <td className="py-3 px-3 text-right font-headline text-lg font-bold text-brand-black">
                          {b.runs}
                        </td>
                        <td className="py-3 px-3 text-right text-muted">{b.balls}</td>
                        <td className="py-3 px-3 text-right text-muted">{b.fours}</td>
                        <td className="py-3 px-3 text-right text-muted">{b.sixes}</td>
                        <td className="py-3 px-3 text-right font-medium">{b.strikeRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bowling Table */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-xs uppercase font-bold tracking-wider text-muted mb-3">
                  Royal XI Bowling
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/80 text-xs uppercase font-extrabold text-muted">
                        <th className="py-2.5 px-3">Bowler</th>
                        <th className="py-2.5 px-3 text-right">O</th>
                        <th className="py-2.5 px-3 text-right">M</th>
                        <th className="py-2.5 px-3 text-right">R</th>
                        <th className="py-2.5 px-3 text-right">W</th>
                        <th className="py-2.5 px-3 text-right">Econ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {liveDetails.scorecard.secondInnings.bowlers.map((bw) => (
                        <tr key={bw.id} className="hover:bg-surface-soft/60">
                          <td className="py-3 px-3 font-bold text-brand-black">{bw.name}</td>
                          <td className="py-3 px-3 text-right font-mono">{bw.overs}</td>
                          <td className="py-3 px-3 text-right text-muted">{bw.maidens}</td>
                          <td className="py-3 px-3 text-right font-headline text-base font-bold text-brand-black">
                            {bw.runs}
                          </td>
                          <td className="py-3 px-3 text-right font-headline text-base font-bold text-brand-red">
                            {bw.wickets}
                          </td>
                          <td className="py-3 px-3 text-right font-mono">{bw.economy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 1st Innings: Royal XI */}
            <div className="rounded-3xl bg-surface border border-border shadow-sm p-5 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border mb-6">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-brand-black">
                    Royal XI — 1st Innings
                  </h3>
                  <p className="text-xs text-muted">20.0 Overs completed</p>
                </div>
                <div className="font-headline text-2xl font-bold text-foreground-soft">
                  {liveDetails.scorecard.firstInnings.totalScore} ({liveDetails.scorecard.firstInnings.overs})
                </div>
              </div>

              {/* Batting Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border/80 text-xs uppercase font-extrabold text-muted">
                      <th className="py-2.5 px-3">Batter</th>
                      <th className="py-2.5 px-3">Dismissal</th>
                      <th className="py-2.5 px-3 text-right">R</th>
                      <th className="py-2.5 px-3 text-right">B</th>
                      <th className="py-2.5 px-3 text-right">4s</th>
                      <th className="py-2.5 px-3 text-right">6s</th>
                      <th className="py-2.5 px-3 text-right">SR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {liveDetails.scorecard.firstInnings.batters.map((b) => (
                      <tr key={b.id} className="hover:bg-surface-soft/60">
                        <td className="py-3 px-3 font-bold text-brand-black">{b.name}</td>
                        <td className="py-3 px-3 text-xs text-muted">{b.dismissal}</td>
                        <td className="py-3 px-3 text-right font-headline text-lg font-bold text-brand-black">
                          {b.runs}
                        </td>
                        <td className="py-3 px-3 text-right text-muted">{b.balls}</td>
                        <td className="py-3 px-3 text-right text-muted">{b.fours}</td>
                        <td className="py-3 px-3 text-right text-muted">{b.sixes}</td>
                        <td className="py-3 px-3 text-right font-medium">{b.strikeRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* DCC Bowling Table */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-xs uppercase font-bold tracking-wider text-muted mb-3">
                  Devpur Cricket Club Bowling
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/80 text-xs uppercase font-extrabold text-muted">
                        <th className="py-2.5 px-3">Bowler</th>
                        <th className="py-2.5 px-3 text-right">O</th>
                        <th className="py-2.5 px-3 text-right">M</th>
                        <th className="py-2.5 px-3 text-right">R</th>
                        <th className="py-2.5 px-3 text-right">W</th>
                        <th className="py-2.5 px-3 text-right">Econ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {liveDetails.scorecard.firstInnings.bowlers.map((bw) => (
                        <tr key={bw.id} className="hover:bg-surface-soft/60">
                          <td className="py-3 px-3 font-bold text-brand-black">{bw.name}</td>
                          <td className="py-3 px-3 text-right font-mono">{bw.overs}</td>
                          <td className="py-3 px-3 text-right text-muted">{bw.maidens}</td>
                          <td className="py-3 px-3 text-right font-headline text-base font-bold text-brand-black">
                            {bw.runs}
                          </td>
                          <td className="py-3 px-3 text-right font-headline text-base font-bold text-brand-copper">
                            {bw.wickets}
                          </td>
                          <td className="py-3 px-3 text-right font-mono">{bw.economy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Commentary Feed */}
        {activeTab === "commentary" && liveDetails && (
          <div className="rounded-3xl bg-surface border border-border shadow-sm p-5 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border">
              <h3 className="font-headline text-2xl font-bold text-brand-black">
                Ball-by-Ball Live Commentary
              </h3>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 text-xs">
                {(["all", "boundaries", "wickets"] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setCommentaryFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider transition-colors ${
                      commentaryFilter === filter
                        ? "bg-brand-charcoal text-white"
                        : "bg-surface-soft text-foreground-soft hover:bg-stone-100"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-border/80">
              {filteredCommentary?.map((ball) => (
                <div key={ball.overBall} className="py-4.5 flex items-start gap-4">
                  {/* Ball Badge */}
                  <div className="shrink-0 flex flex-col items-center">
                    <span className="font-headline text-lg font-bold text-brand-black leading-none">
                      {ball.overBall}
                    </span>
                    <span
                      className={`mt-1.5 px-2 py-0.5 rounded text-[11px] font-extrabold uppercase ${
                        ball.type === "six"
                          ? "bg-purple-100 text-purple-800"
                          : ball.type === "boundary"
                          ? "bg-blue-100 text-blue-800"
                          : ball.type === "wicket"
                          ? "bg-red-100 text-red-800"
                          : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      {ball.type === "six"
                        ? "6 RUNS"
                        : ball.type === "boundary"
                        ? "4 RUNS"
                        : `${ball.runs} RUN`}
                    </span>
                  </div>

                  {/* Commentary Text */}
                  <div className="flex-1 space-y-1">
                    <div className="text-xs font-bold text-muted">
                      {ball.bowler} to {ball.batter} • {ball.timestamp}
                    </div>
                    <p className="text-sm sm:text-base text-brand-black leading-relaxed">
                      {ball.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Overs Summary */}
        {activeTab === "overs" && liveDetails && (
          <div className="rounded-3xl bg-surface border border-border shadow-sm p-5 sm:p-8 space-y-6">
            <h3 className="font-headline text-2xl font-bold text-brand-black pb-4 border-b border-border">
              Overs Summary
            </h3>

            <div className="space-y-4">
              {liveDetails.oversSummary.map((over) => (
                <div
                  key={over.overNumber}
                  className="p-4 sm:p-5 rounded-2xl bg-surface-soft border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="font-headline text-xl font-bold text-brand-black">
                      Over {over.overNumber} • {over.bowler}
                    </div>
                    <div className="text-xs text-muted font-medium">
                      {over.runs} Runs conceded • {over.wickets} Wickets
                    </div>
                  </div>

                  {/* Balls sequence */}
                  <div className="flex items-center gap-2">
                    {over.balls.map((b, n) => ({ ball: b, ballKey: `over-${over.overNumber}-ball-${n}` })).map((item) => (
                      <span
                        key={item.ballKey}
                        className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                          item.ball === "6"
                            ? "bg-purple-600 text-white"
                            : item.ball === "4"
                            ? "bg-blue-600 text-white"
                            : item.ball === "W"
                            ? "bg-brand-red text-white"
                            : "bg-stone-200 text-stone-800"
                        }`}
                      >
                        {item.ball}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Playing XI */}
        {activeTab === "teams" && liveDetails && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* DCC Playing XI */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <h3 className="font-headline text-2xl font-bold text-brand-black">
                  Devpur Cricket Club (DCC)
                </h3>
                <span className="text-xs font-bold text-brand-copper uppercase">Playing XI</span>
              </div>
              <ul className="divide-y divide-border/60 text-sm">
                {liveDetails.playingXI.dcc.map((name, i) => (
                  <li key={name} className="py-2.5 flex items-center justify-between">
                    <span className="font-semibold text-brand-black">
                      {i + 1}. {name}
                    </span>
                    <span className="text-xs text-muted">Devpur CC</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opponent Playing XI */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <h3 className="font-headline text-2xl font-bold text-brand-black">
                  Royal XI
                </h3>
                <span className="text-xs font-bold text-muted uppercase">Playing XI</span>
              </div>
              <ul className="divide-y divide-border/60 text-sm">
                {liveDetails.playingXI.opponent.map((name, i) => (
                  <li key={name} className="py-2.5 flex items-center justify-between">
                    <span className="font-semibold text-foreground-soft">
                      {i + 1}. {name}
                    </span>
                    <span className="text-xs text-muted">Royal XI</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
