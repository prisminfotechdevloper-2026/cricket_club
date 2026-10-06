import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tournaments } from "@/lib/data/tournaments";
import { TournamentCampaignDetail } from "@/components/tournaments/TournamentCampaignDetail";

interface TournamentDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: TournamentDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = tournaments.find((t) => t.slug === slug);

  if (!tour) {
    return {
      title: "Tournament Not Found",
    };
  }

  return {
    title: `${tour.name} — Club Campaign`,
    description: `Campaign breakdown, match record, and player statistics for Devpur Cricket Club at ${tour.name}.`,
  };
}

export default async function TournamentDetailPage({
  params,
}: TournamentDetailPageProps) {
  const { slug } = await params;
  const tour = tournaments.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return <TournamentCampaignDetail tournament={tour} />;
}
