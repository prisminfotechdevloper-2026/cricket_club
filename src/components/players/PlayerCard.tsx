import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Player } from "@/lib/types/cricket";
import { ArrowRight, Award } from "lucide-react";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const isBowler =
    player.role === "Fast Bowler" || player.role === "Spin Bowler";

  return (
    <div className="group rounded-3xl bg-surface border border-border overflow-hidden sports-card flex flex-col justify-between">
      {/* Player Image and Badge */}
      <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
        <Image
          src={player.photo}
          alt={player.name}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Jersey Number */}
        <div className="absolute top-3 right-3 font-headline text-lg font-extrabold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-lg border border-white/10">
          #{player.jerseyNumber}
        </div>

        {/* Role Pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/90 text-brand-black backdrop-blur-md">
            {player.role}
          </span>
          {player.featured && (
            <span className="flex items-center gap-1 text-[11px] font-bold text-brand-peach bg-brand-charcoal/80 backdrop-blur-sm px-2 py-0.5 rounded-md">
              <Award className="w-3 h-3 text-brand-orange" />
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content & Stats */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-headline text-2xl font-bold text-brand-black tracking-tight group-hover:text-brand-copper transition-colors">
            {player.name}
          </h3>
          <p className="text-xs text-muted font-medium mt-0.5 line-clamp-1">
            {player.battingStyle} {player.bowlingStyle ? `• ${player.bowlingStyle}` : ""}
          </p>
        </div>

        {/* Season Numbers Grid */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-surface-soft border border-border/80 text-center">
          <div>
            <span className="text-[10px] uppercase font-bold text-muted block tracking-wider">
              Matches
            </span>
            <span className="font-headline text-xl font-bold text-brand-black">
              {player.currentSeasonStats.matches}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold text-muted block tracking-wider">
              {isBowler ? "Wickets" : "Runs"}
            </span>
            <span className="font-headline text-xl font-bold text-brand-copper">
              {isBowler
                ? player.currentSeasonStats.wickets
                : player.currentSeasonStats.runs}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold text-muted block tracking-wider">
              {isBowler ? "Econ" : "SR"}
            </span>
            <span className="font-headline text-xl font-bold text-brand-black">
              {isBowler
                ? player.currentSeasonStats.economy
                : player.currentSeasonStats.strikeRate}
            </span>
          </div>
        </div>

        {/* View Profile Button */}
        <Link
          href={`/players/${player.slug}`}
          className="inline-flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-surface-soft hover:bg-stone-100 text-xs font-bold uppercase tracking-wider text-brand-black transition-colors group/btn"
        >
          <span>View Profile & Stats</span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-copper transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
