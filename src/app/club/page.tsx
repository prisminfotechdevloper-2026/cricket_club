import type { Metadata } from "next";
import { ClubView } from "@/components/club/ClubView";

export const metadata: Metadata = {
  title: "Club & Heritage | Devpur Cricket Club",
  description:
    "Devpur Cricket Club was incepted in 2013 to unite our community through sport. Proudly representing Devpur Gaam with 50+ members training at Matunga Ground.",
};

export default function ClubPage() {
  return <ClubView />;
}
