import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { matches } from "@/lib/data/matches";
import { LiveScoreCentre } from "@/components/matches/LiveScoreCentre";
import { CompletedMatchDetail } from "@/components/matches/CompletedMatchDetail";

interface MatchDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: MatchDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const match = matches.find((m) => m.slug === slug);

  if (!match) {
    return {
      title: "Match Not Found",
    };
  }

  return {
    title: `${match.status === "live" ? "🔴 LIVE: " : ""}${match.tournament} — DCC vs ${match.opponent}`,
    description: `Match details and live score updates for Devpur Cricket Club vs ${match.opponent} at ${match.venue}.`,
  };
}

export default async function MatchDetailPage({ params }: MatchDetailPageProps) {
  const { slug } = await params;
  const match = matches.find((m) => m.slug === slug);

  if (!match) {
    notFound();
  }

  if (match.status === "live") {
    return <LiveScoreCentre match={match} />;
  }

  return <CompletedMatchDetail match={match} />;
}
