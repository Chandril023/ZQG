// memberData.js
import analysis from "../components/photos/analysis.jpg";
export const members = [
  {
    id: 1,
    name: "ZQG Muzan",
    photo: "",
    designation: "Team Captain",
    inGameName: "MuzanSama",
    gamesInvolved: ["Valorant", "PUBG-Mobile", "E-Football"],
    profession: "Software Engineer",
  },
  {
    id: 2,
    name: "ZQG Analysis",
    photo: { analysis },
    designation: "Team Captain",
    inGameName: "AnalysisOp",
    gamesInvolved: ["Valorant", "PUBG-Mobile", "E-Football"],
    profession: "Software Engineer"
  },
  {
    id: 3,
    name: "ZQG Blaze",
    photo: "/api/placeholder/300/300",
    designation: "Team Captain",
    inGameName: "xxBlaze",
    gamesInvolved: [ "PUBG-Mobile", "E-Football"],
    profession: "Software Engineer"
  },
  {
    id: 4,
    name: "ZQG LordSid",
    photo: "/api/placeholder/300/300",
    designation: "Team Captain",
    inGameName: "LordSidOP",
    gamesInvolved: ["Valorant", "Overwatch 2", "CS:GO"],
    profession: "Engineer",
  },
  {
    id: 5,
    name: "Kai Nakamura",
    photo: "/api/placeholder/300/300",
    designation: "Entry Fragger",
    inGameName: "SwiftBlade",
    gamesInvolved: ["CS:GO", "Valorant", "PUBG"],
    profession: "Professional FPS Player",
    achievements: ["Tournament MVP 2024", "Highest Entry Success Rate", "Community Choice Award"],
    socialMedia: {
      twitter: "@swiftblade_fps",
      twitch: "swiftblade_pro",
      instagram: "kai_gaming"
    }
  },
  {
    id: 6,
    name: "Luna Williams",
    photo: "/api/placeholder/300/300",
    designation: "Support Specialist",
    inGameName: "HealingLight",
    gamesInvolved: ["Valorant", "Overwatch 2", "League of Legends"],
    profession: "Professional Support Player",
    achievements: ["Best Support Player 2024", "100+ Tournament Matches", "Team Player Award"],
    socialMedia: {
      twitter: "@healinglight_ow",
      twitch: "healinglight",
      instagram: "luna_gaming_pro"
    }
  },
  {
    id: 7,
    name: "James Wilson",
    photo: "/api/placeholder/300/300",
    designation: "IGL & Strategist",
    inGameName: "MasterMind",
    gamesInvolved: ["CS:GO", "Valorant", "Apex Legends"],
    profession: "In-Game Leader",
    achievements: ["Best IGL 2023", "Strategic Play Award", "Shot Caller of the Year"],
    socialMedia: {
      twitter: "@mastermind_igl",
      youtube: "MasterMindTactics",
      instagram: "james_wilson_gaming"
    }
  },
  {
    id: 8,
    name: "Sophia Zhang",
    photo: "/api/placeholder/300/300",
    designation: "Flex Player",
    inGameName: "FlexQueen",
    gamesInvolved: ["Valorant", "Overwatch 2", "Apex Legends"],
    profession: "Professional Flex Player",
    achievements: ["Multi-Role Expert", "Adaptability Award 2024", "Community Favorite"],
    socialMedia: {
      twitter: "@flexqueen_gaming",
      twitch: "flexqueen",
      instagram: "sophia_flex_gaming"
    }
  },
  {
    id: 9,
    name: "David Kim",
    photo: "/api/placeholder/300/300",
    designation: "Sniper Specialist",
    inGameName: "SilentScope",
    gamesInvolved: ["CS:GO", "Valorant", "Rainbow Six Siege"],
    profession: "Professional Sniper",
    achievements: ["Highest AWP Success Rate", "Clutch King 2024", "Perfect Accuracy Award"],
    socialMedia: {
      twitter: "@silentscope_pro",
      twitch: "silentscope_sniper",
      instagram: "david_sniper_kim"
    }
  }
];

// Optional: Add team statistics
export const teamStats = {
  totalTournaments: 45,
  tournamentsWon: 28,
  totalPrizeMoney: "$750,000",
  currentRank: 3,
  region: "North America",
  establishedYear: 2022
};

// Optional: Add achievement categories for filtering
export const achievementCategories = [
  "Tournament Victories",
  "Individual Awards",
  "Team Awards",
  "Community Recognition",
  "Competitive Rankings"
];


export const gameCategories = [
  "All Games",
  "Valorant",
  "CS:GO", 
  "Apex Legends",
  "League of Legends",
  "Dota 2",
  "Fortnite",
  "Overwatch"
];