import type { Metadata } from "next";
import { TrainingHub } from "@/components/training/TrainingHub";
import { trainingSessions } from "@/lib/data/training";
import { coaches } from "@/lib/data/coaches";

export const metadata: Metadata = {
  title: "Training & Coaching Syllabus",
  description:
    "Explore Devpur Cricket Club training sessions, video demonstrations, turf net practice, fitness routines, and certified coaching staff.",
};

export default function TrainingPage() {
  return <TrainingHub sessions={trainingSessions} coaches={coaches} />;
}
