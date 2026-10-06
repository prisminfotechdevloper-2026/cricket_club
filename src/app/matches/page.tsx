import type { Metadata } from "next";
import { MatchesDirectory } from "@/components/matches/MatchesDirectory";
import { matches } from "@/lib/data/matches";

export const metadata: Metadata = {
  title: "Matches & Fixtures",
  description:
    "Explore Devpur Cricket Club match schedule, live score updates, upcoming tournament fixtures, and completed match scorecards.",
};

export default function MatchesPage() {
  return <MatchesDirectory initialMatches={matches} />;
}
