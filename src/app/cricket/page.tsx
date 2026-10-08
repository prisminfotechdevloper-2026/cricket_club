import type { Metadata } from "next";
import { ClubLifeView } from "@/components/club-life/ClubLifeView";
import { trainingSessions } from "@/lib/data/training";
import { coaches } from "@/lib/data/coaches";

export const metadata: Metadata = {
  title: "Cricket Life, Practice & Coaching | Devpur Cricket Club",
  description:
    "Explore cricket practice at Devpur Cricket Club — 3-day weekly turf net training at Matunga Ground, professional coaching under Coach Aditya Koli, and match preparation.",
};

export default function CricketPage() {
  return <ClubLifeView sessions={trainingSessions} coaches={coaches} />;
}
