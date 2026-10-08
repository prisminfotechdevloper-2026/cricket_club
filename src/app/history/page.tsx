import type { Metadata } from "next";
import { ClubHistoryView } from "@/components/history/ClubHistoryView";

export const metadata: Metadata = {
  title: "History of DCC | Devpur Cricket Club",
  description:
    "Explore the journey, origin, and legacy of Devpur Cricket Club (DCC) since its inception in 2013 — representing Devpur Gaam at Matunga Ground.",
};

export default function HistoryPage() {
  return <ClubHistoryView />;
}
