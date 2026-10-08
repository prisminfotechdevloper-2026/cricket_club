/**
 * DCC Data Service Adapter Layer
 * Satisfies Section 34 of OPTIMIZE_V4.md
 * Provides typed domain query methods that currently read local verified data,
 * and will seamlessly map to Hono API / PostgreSQL endpoints in the backend phase.
 */

import { matches } from "@/lib/data/matches";
import { players } from "@/lib/data/players";
import { seasons } from "@/lib/data/seasons";
import { sponsors } from "@/lib/data/sponsors";
import { galleryAlbums } from "@/lib/data/gallery";
import { trainingSessions } from "@/lib/data/training";
import { coaches } from "@/lib/data/coaches";
import { Match, Player, Coach } from "@/lib/types/cricket";
import { Season, Sponsor, GalleryAlbum, TrainingSession } from "@/lib/types/content";

export interface HomepageData {
  todayMatch: Match | null;
  upcomingMatches: Match[];
  completedMatches: Match[];
  featuredMembers: Player[];
  officialSponsors: Sponsor[];
  currentSeason: Season | null;
  recentAlbums: GalleryAlbum[];
}

export function getTodayMatch(): Match | null {
  // Check for an ongoing live match or a match scheduled for today
  const live = matches.find((m) => m.status === "live");
  if (live) return live;
  
  const today = matches.find((m) => m.date.toLowerCase() === "today");
  return today || null;
}

export function getUpcomingMatches(limit = 4): Match[] {
  return matches
    .filter((m) => m.status === "upcoming")
    .slice(0, limit);
}

export function getCompletedMatches(limit = 6): Match[] {
  return matches
    .filter((m) => m.status === "completed")
    .slice(0, limit);
}

export function getPlayers(): Player[] {
  return players;
}

export function getPlayerBySlug(slug: string): Player | null {
  return players.find((p) => p.slug === slug) || null;
}

export function getSeasons(): Season[] {
  return seasons;
}

export function getSeasonBySlug(slug: string): Season | null {
  return seasons.find((s) => s.slug === slug) || null;
}

export function getMemories(category?: string): GalleryAlbum[] {
  if (!category || category === "all") {
    return galleryAlbums;
  }
  return galleryAlbums.filter((album) => album.category === category);
}

export function getSponsors(): Sponsor[] {
  return sponsors;
}

export function getCoaches(): Coach[] {
  return coaches;
}

export function getClubLifeContent(): {
  sessions: TrainingSession[];
  coaches: Coach[];
  schedule: {
    rhythm: string;
    location: string;
    duration: string;
    days: string[];
  };
} {
  return {
    sessions: trainingSessions,
    coaches: coaches,
    schedule: {
      rhythm: "3 Days / Week",
      location: "Matunga Ground, Mumbai",
      duration: "~2 Hours per session",
      days: ["Monday", "Wednesday", "Friday"],
    },
  };
}

export function getHomepageData(): HomepageData {
  const currentSeason = seasons.find((s) => s.isCurrent) || seasons[0] || null;

  return {
    todayMatch: getTodayMatch(),
    upcomingMatches: getUpcomingMatches(3),
    completedMatches: getCompletedMatches(4),
    featuredMembers: players.filter((p) => p.featured).slice(0, 4),
    officialSponsors: sponsors,
    currentSeason,
    recentAlbums: galleryAlbums.slice(0, 6),
  };
}
