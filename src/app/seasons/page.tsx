import type { Metadata } from "next";
import { SeasonsDirectory } from "@/components/seasons/SeasonsDirectory";
import { seasons } from "@/lib/data/seasons";

export const metadata: Metadata = {
  title: "Season Archive | Every Season Has A Story | Devpur Cricket Club",
  description:
    "Explore the year-wise historical archives of Devpur Cricket Club. Review season-by-season match records, community tournament participation, and club milestones since 2013.",
};

export default function SeasonsPage() {
  return <SeasonsDirectory seasons={seasons} />;
}
