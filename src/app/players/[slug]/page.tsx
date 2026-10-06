import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { players } from "@/lib/data/players";
import { PlayerProfileDetail } from "@/components/players/PlayerProfileDetail";

interface PlayerDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PlayerDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const player = players.find((p) => p.slug === slug);

  if (!player) {
    return {
      title: "Player Not Found",
    };
  }

  return {
    title: `${player.name} (${player.role})`,
    description: `Career statistics and match performances for ${player.name}, ${player.role} at Devpur Cricket Club.`,
  };
}

export default async function PlayerDetailPage({
  params,
}: PlayerDetailPageProps) {
  const { slug } = await params;
  const player = players.find((p) => p.slug === slug);

  if (!player) {
    notFound();
  }

  return <PlayerProfileDetail player={player} />;
}
