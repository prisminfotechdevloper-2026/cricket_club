import type { Metadata } from "next";
import { AchievementsHub } from "@/components/achievements/AchievementsHub";
import { achievements } from "@/lib/data/achievements";

export const metadata: Metadata = {
  title: "Trophy Shelf & Achievements",
  description:
    "Explore the championship trophies, player awards, and milestone achievements of Devpur Cricket Club.",
};

export default function AchievementsPage() {
  return <AchievementsHub achievements={achievements} />;
}
