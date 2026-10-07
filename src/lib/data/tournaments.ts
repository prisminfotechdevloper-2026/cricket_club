import { Tournament } from "../types/cricket";
import { matches } from "./matches";

export const tournaments: Tournament[] = [
  {
    id: "tour-1",
    slug: "kvo-community-cup-2026",
    name: "KVO Community Cup 2026",
    organizer: "KVO Cricket Committee",
    location: "Matunga Ground, Mumbai",
    season: "2026–27",
    dates: "Nov 2026 – Ongoing",
    matchesPlayed: 6,
    wins: 5,
    losses: 1,
    finishStage: "Semi-Finals (In Progress)",
    topPerformer: {
      playerName: "Aarav Mehta",
      playerSlug: "aarav-mehta",
      stat: "282 runs @ 158.4 SR",
    },
    summary:
      "Prestigious annual white-ball community tournament featuring teams from across the KVO ecosystem. DCC entered the semi-finals after topping Group B with clinical bowling and consistent chases.",
    coverImage: "/images/winning_time_with_group.png",
    featuredMatches: matches.filter(
      (m) => m.tournamentSlug === "kvo-community-cup-2026"
    ),
  },
  {
    id: "tour-2",
    slug: "kvo-premier-championship-2026",
    name: "KVO Premier Championship 2026",
    organizer: "KVO Sports Association",
    location: "Matunga Ground & Dadar Grounds, Mumbai",
    season: "2026–27",
    dates: "Oct 2026 – Dec 2026",
    matchesPlayed: 5,
    wins: 4,
    losses: 1,
    finishStage: "Super-4 Contender",
    topPerformer: {
      playerName: "Vikas Rathore",
      playerSlug: "vikas-rathore",
      stat: "14 wickets @ 12.8 Avg",
    },
    summary:
      "A fast-paced multi-village competition testing squad depth with back-to-back weekend fixtures. DCC demonstrated disciplined bowling under the guidance of Coach Aditya Koli.",
    coverImage: "/images/ground_playing.png",
    featuredMatches: matches.filter(
      (m) => m.tournamentSlug === "kvo-premier-championship-2026"
    ),
  },
  {
    id: "tour-3",
    slug: "devpur-gaam-invitational-2026",
    name: "Devpur Gaam Invitational 2026",
    organizer: "Devpur Mahajan Sports Wing",
    location: "Matunga Ground, Mumbai",
    season: "2026–27",
    dates: "Dec 2026 – Jan 2027",
    matchesPlayed: 3,
    wins: 3,
    losses: 0,
    finishStage: "Group Champions",
    topPerformer: {
      playerName: "Rohit Sharma",
      playerSlug: "rohit-sharma",
      stat: "189 runs @ 63.0 Avg",
    },
    summary:
      "Community tournament celebrating village heritage and sportsmanship. Played with professional leather balls, bringing together 50+ club members, families, and supporters.",
    coverImage: "/images/team_group.png",
    featuredMatches: matches.filter(
      (m) => m.tournamentSlug === "devpur-gaam-invitational-2026"
    ),
  },
  {
    id: "tour-4",
    slug: "kvo-community-championship-2025",
    name: "KVO Community Cricket Championship 2025",
    organizer: "KVO Central Sports Committee",
    location: "Matunga Ground, Mumbai",
    season: "2025–26",
    dates: "Dec 2025 – Feb 2026",
    matchesPlayed: 8,
    wins: 7,
    losses: 1,
    finishStage: "Runners-Up Trophy",
    topPerformer: {
      playerName: "Aarav Mehta",
      playerSlug: "aarav-mehta",
      stat: "394 runs @ 78.8 Avg",
    },
    summary:
      "Historic tournament campaign where DCC claimed the Runners-Up trophy among 16 top KVO community teams, confirming DCC's status among the top 10 KVO squads.",
    coverImage: "/images/winning.png",
    featuredMatches: matches.filter(
      (m) => m.tournamentSlug === "kvo-community-championship-2025"
    ),
  },
];
