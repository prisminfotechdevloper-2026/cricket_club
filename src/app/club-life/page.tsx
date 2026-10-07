import type { Metadata } from "next";
import { ClubLifeView } from "@/components/club-life/ClubLifeView";
import { trainingSessions } from "@/lib/data/training";
import { coaches } from "@/lib/data/coaches";

export const metadata: Metadata = {
  title: "Club Life & Development | Devpur Cricket Club",
  description:
    "Life inside Devpur Cricket Club — net practice at Matunga Ground, coach-led skill development under Aditya Koli, fitness routines, and community bonding.",
};

export default function ClubLifePage() {
  return <ClubLifeView sessions={trainingSessions} coaches={coaches} />;
}
