import type { Metadata } from "next";
import { SeasonsDirectory } from "@/components/seasons/SeasonsDirectory";
import { seasons } from "@/lib/data/seasons";

export const metadata: Metadata = {
  title: "Season Archives & Club History",
  description:
    "Explore the year-wise historical archives of Devpur Cricket Club. Review season-by-season match records, championship trophies, and player statistics.",
};

export default function SeasonsPage() {
  return <SeasonsDirectory seasons={seasons} />;
}
