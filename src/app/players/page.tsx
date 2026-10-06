import type { Metadata } from "next";
import { PlayersDirectory } from "@/components/players/PlayersDirectory";
import { players } from "@/lib/data/players";

export const metadata: Metadata = {
  title: "Squad & Players",
  description:
    "Meet the players of Devpur Cricket Club. Detailed career statistics, batting averages, bowling strike rates, and recent match performances.",
};

export default function PlayersPage() {
  return <PlayersDirectory initialPlayers={players} />;
}
