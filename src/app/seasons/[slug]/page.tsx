import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seasons } from "@/lib/data/seasons";
import { SeasonArchiveDetail } from "@/components/seasons/SeasonArchiveDetail";

interface SeasonDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: SeasonDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const season = seasons.find((s) => s.slug === slug);

  if (!season) {
    return {
      title: "Season Not Found",
    };
  }

  return {
    title: `${season.name} Archive — Devpur Cricket Club`,
    description: `Season narrative, operational timeline, and player honors for Devpur Cricket Club ${season.name}.`,
  };
}

export default async function SeasonDetailPage({
  params,
}: SeasonDetailPageProps) {
  const { slug } = await params;
  const season = seasons.find((s) => s.slug === slug);

  if (!season) {
    notFound();
  }

  return <SeasonArchiveDetail season={season} />;
}
