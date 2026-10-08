import type { Metadata } from "next";
import { ClubLifeView } from "@/components/club-life/ClubLifeView";
import { trainingSessions } from "@/lib/data/training";
import { coaches } from "@/lib/data/coaches";

export const metadata: Metadata = {
  title: "Club Life | Practice Together. Play Together. Stay Connected. | Devpur Cricket Club",
  description:
    "Life inside Devpur Cricket Club — regular net practice at Matunga Ground, professional coaching support under Mr. Aditya Koli, weekend practice matches, and community friendship.",
};

export default function ClubLifePage() {
  return <ClubLifeView sessions={trainingSessions} coaches={coaches} />;
}
