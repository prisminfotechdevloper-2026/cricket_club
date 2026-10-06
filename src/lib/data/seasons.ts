import { Season } from "../types/content";

export const seasons: Season[] = [
  {
    id: "season-2026-27",
    slug: "2026-27",
    name: "2026–27 Season",
    startDate: "October 2026",
    endDate: "March 2027",
    isCurrent: true,
    motto: "Discipline. Tenacity. Club Brotherhood.",
    matchesPlayed: 12,
    matchesWon: 9,
    trophiesWon: 1,
    captain: "Vikas Rathore",
    topRunScorer: {
      name: "Aarav Mehta",
      runs: 486,
    },
    topWicketTaker: {
      name: "Vikas Rathore",
      wickets: 21,
    },
    summary:
      "A landmark campaign witnessing DCC's march into the JPL Semi-Finals, bolstered by high-intensity pre-season conditioning and ruthless powerplay batting.",
    highlights: [
      "JPL Semi-Finalist (ongoing live run)",
      "Aarav Mehta's match-winning 92* in Quarter-Final",
      "Vikas Rathore 5-wicket haul (5/18) against Kota Stars",
      "Record 5-game consecutive winning streak",
    ],
    timeline: [
      {
        month: "OCT",
        stage: "Season Kickoff & Net Trials",
        description:
          "Intensive trials, fitness screening, net-pitch allocation, and squad selection across senior and developmental teams.",
      },
      {
        month: "NOV",
        stage: "Intensive Drills & Tactical Camps",
        description:
          "Daily batting masterclasses, death overs execution under lights, and fielding reflex camps.",
      },
      {
        month: "DEC",
        stage: "Tournament Participation",
        description:
          "Campaign kickoff in Jhalawar Premier League and Kota Cricket League weekend fixtures.",
      },
      {
        month: "JAN",
        stage: "Winter Cup & Competitive Clashes",
        description:
          "Host the annual Winter Cricket Cup and compete in top-tier state invitational derbies.",
      },
      {
        month: "FEB",
        stage: "Knockout Push & Semi-Finals",
        description:
          "High-pressure knockout stages, tournament quarter-finals, and semi-final campaigns.",
      },
      {
        month: "MAR",
        stage: "Season Wrap & Club Honors",
        description:
          "Annual DCC Awards Night celebrating batter of the season, bowling maestro, and emerging youth player.",
      },
    ],
  },
  {
    id: "season-2025-26",
    slug: "2025-26",
    name: "2025–26 Season",
    startDate: "October 2025",
    endDate: "March 2026",
    isCurrent: false,
    motto: "Relentless Focus. Historic Triumph.",
    matchesPlayed: 24,
    matchesWon: 18,
    trophiesWon: 2,
    captain: "Rahul Sharma",
    topRunScorer: {
      name: "Aarav Mehta",
      runs: 760,
    },
    topWicketTaker: {
      name: "Vikas Rathore",
      wickets: 32,
    },
    summary:
      "Championship season! DCC claimed the prestigious Winter Cricket Cup and finished runners-up in the Rajasthan Club Championship.",
    highlights: [
      "Champions — Winter Cricket Cup 2025",
      "Finalists — Rajasthan Club Championship",
      "Rohan Singh named Best Wicketkeeper with 26 dismissals",
      "Highest team score in club history: 218/3 in 20 overs",
    ],
    timeline: [
      {
        month: "OCT",
        stage: "Pre-Season Conditioning",
        description: "Focus on fitness foundation and squad cohesion.",
      },
      {
        month: "DEC",
        stage: "Winter Cup Dominance",
        description: "Unbeaten run culminating in the championship title.",
      },
      {
        month: "MAR",
        stage: "State Finals Appearance",
        description: "Hard-fought final at Sawai Mansingh Stadium auxiliary.",
      },
    ],
  },
  {
    id: "season-2024-25",
    slug: "2024-25",
    name: "2024–25 Season",
    startDate: "October 2024",
    endDate: "March 2025",
    isCurrent: false,
    motto: "Laying The Foundation.",
    matchesPlayed: 20,
    matchesWon: 13,
    trophiesWon: 1,
    captain: "Rahul Sharma",
    topRunScorer: {
      name: "Kabir Sharma",
      runs: 540,
    },
    topWicketTaker: {
      name: "Mohit Choudhary",
      wickets: 24,
    },
    summary:
      "A transformational season marking the upgrade of the Devpur ground facilities, turf pitches, and youth development infrastructure.",
    highlights: [
      "Champions — Hadoti Trophy 2024",
      "Inauguration of DCC Center Turf Pitches",
      "Vikas Rathore awarded Best Young Bowler of the district",
    ],
    timeline: [
      {
        month: "OCT",
        stage: "Ground Redevelopment",
        description: "Laying 4 international-grade turf practice nets.",
      },
      {
        month: "JAN",
        stage: "Hadoti Trophy Title",
        description: "Dramatic 1-run win in the grand final.",
      },
    ],
  },
];
