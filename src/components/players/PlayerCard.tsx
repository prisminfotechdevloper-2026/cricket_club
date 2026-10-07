import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Player } from "@/lib/types/cricket";
import { ArrowRight } from "lucide-react";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const isBowler =
    player.role === "Fast Bowler" || player.role === "Spin Bowler";

  return (
    <div className="group rounded-3xl bg-surface border border-border/80 overflow-hidden sports-card flex flex-col justify-between hover:border-brand-copper/60 hover:shadow-xl transition-[border-color,box-shadow] duration-300">
      {/* Player Image and Badge */}
      <div className="relative aspect-[4/3] w-full bg-stone-900 overflow-hidden">
        <Image
          src={player.photo}
          alt={player.name}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

        {/* Athletic Jersey Number Watermark Badge */}
        <div className="absolute top-3 right-3 font-mono text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 tracking-widest">
          #{player.jerseyNumber}
        </div>

        {/* Role Pill & Squad Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-white/95 text-brand-black shadow-xs">
            {player.role}
          </span>
          {player.featured && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-peach bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              CORE SQUAD
            </span>
          )}
        </div>
      </div>

      {/* Content & Stats */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-brand-copper font-bold mb-1">
            DEV-PUR CC
          </div>
          <h3 className="font-headline text-2xl font-bold text-brand-black tracking-tight group-hover:text-brand-copper transition-colors">
            {player.name}
          </h3>
          <p className="text-xs text-muted font-medium mt-1 line-clamp-1">
            {player.battingStyle} {player.bowlingStyle ? `• ${player.bowlingStyle}` : ""}
          </p>
        </div>

        {/* Athletic Telemetry Numbers Grid */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-surface-soft border border-border/80 text-center">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-mono font-bold text-muted block tracking-wider">
              MAT
            </span>
            <span className="font-headline text-xl font-bold text-brand-black">
              {player.currentSeasonStats.matches}
            </span>
          </div>

          <div className="space-y-0.5 border-x border-border/60">
            <span className="text-[10px] uppercase font-mono font-bold text-brand-copper block tracking-wider">
              {isBowler ? "WKTS" : "RUNS"}
            </span>
            <span className="font-headline text-xl font-bold text-brand-copper">
              {isBowler
                ? player.currentSeasonStats.wickets
                : player.currentSeasonStats.runs}
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-mono font-bold text-muted block tracking-wider">
              {isBowler ? "ECON" : "S/R"}
            </span>
            <span className="font-headline text-xl font-bold text-brand-black">
              {isBowler
                ? player.currentSeasonStats.economy
                : player.currentSeasonStats.strikeRate}
            </span>
          </div>
        </div>

        {/* View Profile Action */}
        <Link
          href={`/players/${player.slug}`}
          className="inline-flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-surface-soft hover:bg-stone-200/70 text-xs font-mono font-bold uppercase tracking-wider text-brand-black transition-colors group/btn"
        >
          <span>VIEW ATHLETE PROFILE</span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-copper transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
