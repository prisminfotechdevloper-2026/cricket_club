import type { Metadata } from "next";
import { MatchesDirectory } from "@/components/matches/MatchesDirectory";
import { matches } from "@/lib/data/matches";

export const metadata: Metadata = {
  title: "Live Score Board & Match Centre | Devpur Cricket Club",
  description:
    "Follow live match scorecards, recent tournament results, and upcoming match fixtures for Devpur Cricket Club.",
};

export default function ScoreBoardPage() {
  return <MatchesDirectory initialMatches={matches} />;
}
