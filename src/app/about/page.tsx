import type { Metadata } from "next";
import { AboutClubView } from "@/components/about/AboutClubView";

export const metadata: Metadata = {
  title: "About DCC & Club Heritage | Devpur Cricket Club",
  description:
    "Discover Devpur Cricket Club's origin, 2013 inception, Devpur Gaam heritage, club life, and community cricket values.",
};

export default function AboutPage() {
  return <AboutClubView />;
}
