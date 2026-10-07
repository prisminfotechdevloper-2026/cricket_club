import React from "react";
import { Container } from "../common/Container";

export function SeasonStatsStrip() {
  const stats = [
    {
      idx: "01",
      label: "Matches This Season",
      value: "12",
      subtext: "9 Wins • 75% Win Rate",
    },
    {
      idx: "02",
      label: "Top Run Scorer",
      value: "486",
      subtext: "Aarav Mehta (SR 151.2)",
    },
    {
      idx: "03",
      label: "Top Wicket Taker",
      value: "21",
      subtext: "Vikas Rathore (Econ 6.45)",
    },
    {
      idx: "04",
      label: "Season Highlights",
      value: "9",
      subtext: "Individual Feats & Records",
    },
  ];

  return (
    <div className="py-6 sm:py-8 border-b border-border/80 bg-surface">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-mono">
          {stats.map((s) => (
            <div
              key={s.idx}
              className="p-4 sm:p-5 rounded-2xl bg-surface-soft border border-border/80 flex items-center gap-4 transition-[border-color] hover:border-brand-copper/40"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-brand-orange text-xs font-bold flex items-center justify-center shrink-0">
                {s.idx}
              </div>
              <div>
                <div className="font-headline text-3xl sm:text-4xl font-bold text-brand-black leading-none tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs font-bold text-foreground-soft mt-1">
                  {s.label}
                </div>
                <div className="text-[11px] text-muted">
                  {s.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
