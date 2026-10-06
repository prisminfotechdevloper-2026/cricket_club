import React from "react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { PlayerCard } from "../players/PlayerCard";
import { players } from "@/lib/data/players";

export function FeaturedPlayersSection() {
  const featuredSquad = players.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
      <Container>
        <SectionHeading
          eyebrow="Club Squad"
          title="Featured Players & Match Winners"
          description="Meet the core leaders of Devpur Cricket Club. From explosive top-order stroke-makers to lethal death-overs pace spearheads."
          actionText="View Complete Squad Roster"
          actionHref="/players"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSquad.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </Container>
    </section>
  );
}
