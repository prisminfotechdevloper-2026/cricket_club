import { Tournament } from "../types/cricket";
import { matches } from "./matches";

export const tournaments: Tournament[] = [
  {
    id: "tour-1",
    slug: "jhalawar-premier-league-2026",
    name: "Jhalawar Premier League 2026",
    organizer: "District Cricket Association, Jhalawar",
    location: "Jhalawar District Stadium, Rajasthan",
    season: "2026–27",
    dates: "Oct 2026 – Ongoing",
    matchesPlayed: 5,
    wins: 4,
    losses: 1,
    finishStage: "Semi-Finals (In Progress)",
    topPerformer: {
      playerName: "Aarav Mehta",
      playerSlug: "aarav-mehta",
      stat: "282 runs @ 158.4 SR",
    },
    summary:
      "The premier white-ball club championship in the Hadoti region. DCC qualified for the knockouts topping Group B with dominant wins against Kota Dynamos and Hadoti Blasters.",
    coverImage: "/images/winning_time_with_group.png",
    featuredMatches: matches.filter(
      (m) => m.tournamentSlug === "jhalawar-premier-league-2026"
    ),
  },
  {
    id: "tour-2",
    slug: "kota-cricket-league-2026",
    name: "Kota Cricket League 2026",
    organizer: "Hadoti Sports Foundation",
    location: "Kota Sports Ground & Devpur",
    season: "2026–27",
    dates: "Sep 2026 – Oct 2026",
    matchesPlayed: 4,
    wins: 3,
    losses: 1,
    finishStage: "Super-4 Contender",
    topPerformer: {
      playerName: "Vikas Rathore",
      playerSlug: "vikas-rathore",
      stat: "11 wickets @ 14.8 Avg",
    },
    summary:
      "A fast-paced multi-tier league testing squad depth with back-to-back weekend fixtures. DCC demonstrated clinical bowling performances restricting opponents to low scores.",
    coverImage: "/images/ground_playing.png",
    featuredMatches: matches.filter(
      (m) => m.tournamentSlug === "kota-cricket-league-2026"
    ),
  },
  {
    id: "tour-3",
    slug: "rajasthan-club-championship-2026",
    name: "Rajasthan Club Championship 2026",
    organizer: "State Club Cricket Council",
    location: "Barkatullah Stadium, Jodhpur",
    season: "2026–27",
    dates: "Nov 2026 – Dec 2026",
    matchesPlayed: 2,
    wins: 2,
    losses: 0,
    finishStage: "Group Stage (Upcoming)",
    topPerformer: {
      playerName: "Kabir Sharma",
      playerSlug: "kabir-sharma",
      stat: "72 runs & 4 wickets",
    },
    summary:
      "Statewide championship attracting the top 16 registered cricket clubs from Jaipur, Jodhpur, Udaipur, and Kota divisions.",
    coverImage: "/images/train_travel.png",
    featuredMatches: matches.filter(
      (m) => m.tournamentSlug === "rajasthan-club-championship-2026"
    ),
  },
  {
    id: "tour-4",
    slug: "winter-cricket-cup-2027",
    name: "Winter Cricket Cup 2027",
    organizer: "Devpur Cricket Club Invitational",
    location: "Devpur Cricket Ground",
    season: "2026–27",
    dates: "Jan 2027",
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    finishStage: "Scheduled",
    topPerformer: {
      playerName: "Rohan Singh",
      playerSlug: "rohan-singh",
      stat: "Defending Champions (2025)",
    },
    summary:
      "Annual flagship tournament hosted on DCC home turf featuring turf-pitch games under floodlights during peak winter.",
    coverImage: "/images/achivement_winning2.png",
    featuredMatches: [],
  },
];
