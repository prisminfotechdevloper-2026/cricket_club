import type { Metadata } from "next";
import { TournamentsDirectory } from "@/components/tournaments/TournamentsDirectory";
import { tournaments } from "@/lib/data/tournaments";

export const metadata: Metadata = {
  title: "Tournament Campaigns & Participation",
  description:
    "Explore the regional and state tournaments Devpur Cricket Club has participated in, including match records, knockout finishes, and top performances.",
};

export default function TournamentsPage() {
  return <TournamentsDirectory tournaments={tournaments} />;
}
