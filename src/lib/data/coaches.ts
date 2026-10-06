import { Coach } from "../types/cricket";

export const coaches: Coach[] = [
  {
    id: "coach-1",
    slug: "rahul-sharma",
    name: "Rahul Sharma",
    role: "Head Coach & High Performance Director",
    photo: "/images/members.png",
    experience: "14+ Years in State & Club Cricket",
    bio: "Club mentor and BCCI Level-2 coaching certified director. Guides DCC's seasonal syllabus, tactical match preparation, and athletic fortitude across all age categories.",
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
    photo: "/images/training_team.png",
    experience: "10+ Years Specialized Batting Coaching",
    bio: "Specializes in modern top-order shot execution, power-hitting mechanics, and high-intensity ground fielding drills on turf pitches.",
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
    photo: "/images/exersise.png",
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
