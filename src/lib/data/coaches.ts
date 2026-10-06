import { Coach } from "../types/cricket";

export const coaches: Coach[] = [
  {
    id: "coach-1",
    slug: "rahul-sharma",
    name: "Rahul Sharma",
    role: "Head Coach & High Performance Director",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    experience: "14+ Years in State & Club Cricket",
    bio: "Former First-Class domestic cricketer with BCCI Level-2 coaching credentials. Oversees DCC's seasonal syllabus, squad tactical preparation, and mental resilience under match pressure.",
    coachingFocus: [
      "Tactical Game Awareness",
      "Death Overs Strategy",
      "Mental Toughness",
      "Match Simulation Drills",
    ],
  },
  {
    id: "coach-2",
    slug: "amit-verma",
    name: "Amit Verma",
    role: "Senior Batting & Fielding Coach",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    experience: "10+ Years Specialized Batting Coaching",
    bio: "Specializes in modern top-order shot execution, boundary finding in powerplays, and athletic ground-fielding fundamentals. Trains both junior prospects and senior club captains.",
    coachingFocus: [
      "Head Position & Balance",
      "Power Hitting Mechanics",
      "Infield Reaction Agility",
      "Running Between Wickets",
    ],
  },
  {
    id: "coach-3",
    slug: "sandeep-rathore",
    name: "Sandeep Rathore",
    role: "Fast Bowling & Conditioning Specialist",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    experience: "8+ Years Pace Bowling Development",
    bio: "Ex-district speedster turned biomechanics coach. Focuses on seam presentation, repeatable run-ups, yorker accuracy under lights, and athletic injury-prevention regimens.",
    coachingFocus: [
      "Seam & Swing Control",
      "Run-up Biomechanics",
      "Yorker & Slower Ball Accuracy",
      "Pace Endurance & Recovery",
    ],
  },
];
