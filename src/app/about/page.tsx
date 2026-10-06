import type { Metadata } from "next";
import { AboutClubView } from "@/components/about/AboutClubView";

export const metadata: Metadata = {
  title: "About DCC & Club Heritage",
  description:
    "Discover Devpur Cricket Club's origin, coaching philosophy, international-grade turf net facilities, and sportsmanship values.",
};

export default function AboutPage() {
  return <AboutClubView />;
}
