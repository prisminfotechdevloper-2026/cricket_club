import { GalleryAlbum, GalleryItem } from "../types/content";

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "gal-1",
    slug: "championship-silverware-and-victory-moments",
    title: "Championship Silverware & Trophy Glory",
    season: "2026–27",
    date: "28 Feb 2026",
    category: "celebrations",
    photoCount: 4,
    coverImage: "/images/winning_time_with_group.png",
    description:
      "Pure euphoria, roaring chants, and gleaming silverware! Unforgettable nights when Devpur Cricket Club celebrated hard-fought tournament achievements surrounded by club members, mentors, and supporters.",
    location: "Matunga Gymkhana & Mumbai Community Grounds",
    items: [
      {
        id: "g1-1",
        url: "/images/winning_time_with_group.png",
        caption:
          "Silverware on the Podium! The grand celebration under floodlights with club members, founders, and the DCC squad.",
        category: "celebrations",
        aspect: "landscape",
        date: "28 Feb 2026",
      },
      {
        id: "g1-2",
        url: "/images/winning.png",
        caption:
          "Lifting the Silverware: Pure emotion and pride as the team raises the trophy into the night sky.",
        category: "celebrations",
        aspect: "portrait",
        date: "28 Feb 2026",
      },
      {
        id: "g1-3",
        url: "/images/achivement_winning.png",
        caption:
          "Medals, Pride & Team Smiles: Every hour in the nets rewarded on the tournament podium.",
        category: "celebrations",
        aspect: "portrait",
        date: "15 Jan 2026",
      },
      {
        id: "g1-4",
        url: "/images/achivement_winning2.png",
        caption:
          "Runners-Up Silverware Honors: Squad standing proud on the podium with medals and trophy.",
        category: "celebrations",
        aspect: "portrait",
        date: "24 Jan 2026",
      },
    ],
  },
  {
    id: "gal-2",
    slug: "orange-and-purple-cap-champions",
    title: "Individual Honors: Orange & Purple Cap Pride",
    season: "2026–27",
    date: "02 Mar 2026",
    category: "celebrations",
    photoCount: 2,
    coverImage: "/images/orange_cap_player.png",
    description:
      "Individual excellence propelling collective greatness. Honoring DCC's highest run-scorer and strike bowler awarded the tournament Orange and Purple Caps.",
    location: "KVO Community Grounds, Mumbai",
    items: [
      {
        id: "g2-1",
        url: "/images/orange_cap_player.png",
        caption:
          "The Orange Cap King: Leading tournament run-scorer awarded the prestigious cap on the podium for fearless batting and consistent fifties.",
        category: "celebrations",
        aspect: "portrait",
        date: "02 Mar 2026",
      },
      {
        id: "g2-2",
        url: "/images/purpal_cap_player.png",
        caption:
          "The Purple Cap Wrecker: Spearhead strike bowler recognized as the leading wicket-taker with lethal inswinging yorkers and sharp bouncers.",
        category: "celebrations",
        aspect: "portrait",
        date: "02 Mar 2026",
      },
    ],
  },
  {
    id: "gal-3",
    slug: "brotherhood-weddings-and-smiles",
    title: "Squad Brotherhood: Weddings, Travel & Pure Happiness",
    season: "2025–26",
    date: "18 Dec 2025",
    category: "team-moments",
    photoCount: 4,
    coverImage: "/images/team_wedding_party.png",
    description:
      "Beyond boundaries and scorecards lies a family for life. Cherishing teammate wedding celebrations, memorable train tours to away fixtures, post-match feasts, and lifelong friendships.",
    location: "Team Tour Journeys & Celebrations",
    items: [
      {
        id: "g3-1",
        url: "/images/team_wedding_party.png",
        caption:
          "Teammate's Big Day: The entire DCC brotherhood dressed in traditional kurtas, sharing joy, laughter, and blessings on the wedding stage!",
        category: "team-moments",
        aspect: "landscape",
        date: "18 Dec 2025",
      },
      {
        id: "g3-2",
        url: "/images/party.png",
        caption:
          "Post-Victory Feast: Roaring laughs, delicious food, and cheerful toasts celebrating unforgettable tournament memories.",
        category: "team-moments",
        aspect: "landscape",
        date: "10 Feb 2026",
      },
      {
        id: "g3-3",
        url: "/images/train_travel.png",
        caption:
          "Tour Life on Tracks: Away match journeys by train — kit bags in the berths, strategic talks, and non-stop banter.",
        category: "team-moments",
        aspect: "landscape",
        date: "05 Dec 2025",
      },
      {
        id: "g3-4",
        url: "/images/buddies.png",
        caption:
          "Partners in Cricket & Life: Lifelong friendship and mutual trust forged on 22 yards and carried off the pitch.",
        category: "team-moments",
        aspect: "landscape",
        date: "14 Nov 2025",
      },
    ],
  },
  {
    id: "gal-4",
    slug: "sweat-and-drills-turf-conditioning",
    title: "Practice & Nets: Turf Preparation at Matunga",
    season: "2026–27",
    date: "12 Oct 2026",
    category: "training",
    photoCount: 3,
    coverImage: "/images/training_team.png",
    description:
      "Where consistency is built! Morning net practice, fitness routines, and match simulation on turf nets at Matunga Ground.",
    location: "Turf Practice Nets, Matunga Ground, Mumbai",
    items: [
      {
        id: "g4-1",
        url: "/images/training_team.png",
        caption:
          "Morning Net Session: Members gathered for regular net practice under Coach Aditya Koli at Matunga Ground.",
        category: "training",
        aspect: "landscape",
        date: "12 Oct 2026",
      },
      {
        id: "g4-2",
        url: "/images/exersise.png",
        caption:
          "Fitness & Agility: Full-squad fitness drills, running between wickets, and injury prevention on the outfield.",
        category: "training",
        aspect: "landscape",
        date: "08 Oct 2026",
      },
      {
        id: "g4-3",
        url: "/images/ground_playing.png",
        caption:
          "Match Simulation: Batters facing pace and spin variations during regular weekly net practice.",
        category: "training",
        aspect: "square",
        date: "15 Oct 2026",
      },
    ],
  },
  {
    id: "gal-5",
    slug: "match-day-squads-and-playing-xi",
    title: "Match Day Squads: The Playing XI & Club Pride",
    season: "2026–27",
    date: "20 Nov 2026",
    category: "match-day",
    photoCount: 6,
    coverImage: "/images/ground_players_group.png",
    description:
      "Whites on, caps tight, hearts high. The matchday lineups, squad contingents, and dedicated club members standing united under the Devpur crest.",
    location: "Matunga Ground & Mumbai Community Grounds",
    items: [
      {
        id: "g5-1",
        url: "/images/ground_players_group.png",
        caption:
          "The Devpur Cricket Family: Complete player contingent assembled across the green turf.",
        category: "match-day",
        aspect: "landscape",
        date: "20 Nov 2026",
      },
      {
        id: "g5-2",
        url: "/images/team_group_11.png",
        caption:
          "The Matchday XI: Starters geared up before stepping over the boundary rope in community matches.",
        category: "match-day",
        aspect: "portrait",
        date: "14 Nov 2026",
      },
      {
        id: "g5-3",
        url: "/images/team_group.png",
        caption:
          "United We Stand: Full tournament squad in official DCC team kits ready for competition matches.",
        category: "match-day",
        aspect: "portrait",
        date: "01 Nov 2026",
      },
      {
        id: "g5-4",
        url: "/images/team.png",
        caption:
          "Official Squad Lineup: Focused determination and collective club identity ahead of the match opener.",
        category: "match-day",
        aspect: "portrait",
        date: "22 Oct 2026",
      },
      {
        id: "g5-5",
        url: "/images/team_members.png",
        caption:
          "Squad Brotherhood: Dedicated members backing each other through every delivery.",
        category: "match-day",
        aspect: "landscape",
        date: "18 Oct 2026",
      },
      {
        id: "g5-6",
        url: "/images/members.png",
        caption:
          "The Club Pillars: Senior club members, mentors, and supporters whose guidance keeps Devpur Cricket Club growing.",
        category: "match-day",
        aspect: "landscape",
        date: "05 Oct 2026",
      },
    ],
  },
  {
    id: "gal-6",
    slug: "roots-nostalgia-and-historic-memories",
    title: "Timeless Roots: Historic Memories & Club Heritage",
    season: "Heritage Archives",
    date: "2013 to Present",
    category: "tournaments",
    photoCount: 4,
    coverImage: "/images/memories.png",
    description:
      "The journey of a community! From the club's 2013 inception through milestone seasons to the present day — honoring the members who built and sustain Devpur Cricket Club.",
    location: "Devpur Cricket Club Archives",
    items: [
      {
        id: "g6-1",
        url: "/images/memories.png",
        caption:
          "The Golden Archive: Historic squad picture documenting the pioneering team that laid DCC's foundation.",
        category: "tournaments",
        aspect: "landscape",
        date: "Early Era",
      },
      {
        id: "g6-2",
        url: "/images/5year_age_memories.png",
        caption:
          "5-Year Throwback: Young dreamers and early club beginnings — where passion turned into a lifelong legacy.",
        category: "tournaments",
        aspect: "landscape",
        date: "5-Year Archive",
      },
      {
        id: "g6-3",
        url: "/images/memories_2018.png",
        caption:
          "Season 2018 Milestone: The dedicated squad that established Devpur Cricket Club in the community tournament circuit.",
        category: "tournaments",
        aspect: "landscape",
        date: "Season 2018",
      },
      {
        id: "g6-4",
        url: "/images/memories_with_players.png",
        caption:
          "Bond of Generations: Cherished post-match smiles and memories between senior mentors and rising stars.",
        category: "tournaments",
        aspect: "landscape",
        date: "Timeless",
      },
    ],
  },
];

export const galleryItems: GalleryItem[] = galleryAlbums.flatMap((a) => a.items);
