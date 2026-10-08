import type { Metadata } from "next";
import { PlayersDirectory } from "@/components/players/PlayersDirectory";
import { players } from "@/lib/data/players";

export const metadata: Metadata = {
  title: "Our Members | The People Behind The Crest",
  description:
    "Meet the 50+ members of Devpur Cricket Club — connected through regular practice, tournament competition, friendship and shared experiences representing Devpur Gaam.",
};

export default function PlayersPage() {
  return <PlayersDirectory initialPlayers={players} />;
}
