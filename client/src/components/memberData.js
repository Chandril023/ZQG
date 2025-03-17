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
    profession: "Hizruboi"
  },
  {
    id: 3,
    name: "ZQG Blaze",
    photo: "/api/placeholder/300/300",
    designation: "Team Captain",
    inGameName: "xxBlaze",
    gamesInvolved: [ "PUBG-Mobile", "E-Football"],
    profession: "BGMI-Paglu"
  },
  {
    id: 4,
    name: "ZQG LordSid",
    photo: "/api/placeholder/300/300",
    designation: "Team Captain",
    inGameName: "LordSidOP",
    gamesInvolved: ["Valorant", "Overwatch 2", "CS:GO"],
    profession: "Competitive Challenge Taker",
  },
  {
    id: 5,
    name: "ZQG Saphronix",
    photo: "/api/placeholder/300/300",
    designation: "Team Captain",
    inGameName: "Saphronix",
    gamesInvolved: ["CS:GO", "Valorant", "PUBG"],
    profession: "PES-Paglu",
    achievements: ["Tournament MVP 2024", "Highest Entry Success Rate", "Community Choice Award"],
    socialMedia: {
      twitter: "@swiftblade_fps",
      twitch: "swiftblade_pro",
      instagram: "kai_gaming"
    }
  },
  {
    id: 6,
    name: "ZQG Rohan",
    photo: "/api/placeholder/300/300",
    designation: "Team Captain",
    inGameName: "bostiboyrohan",
    gamesInvolved: ["Valorant", "Overwatch 2", "League of Legends"],
    profession: "Steroid Paglu",
    achievements: ["Best Support Player 2024", "100+ Tournament Matches", "Team Player Award"],
    socialMedia: {
      twitter: "@healinglight_ow",
      twitch: "healinglight",
      instagram: "luna_gaming_pro"
    }
  },
  {
    id: 7,
    name: "ZQG SINS",
    photo: "/api/placeholder/300/300",
    designation: "Team Captain",
    inGameName: "SINS",
    gamesInvolved: ["CS:GO", "Valorant", "Apex Legends"],
    profession: "Chutpaglu final boss",
    achievements: ["Best IGL 2023", "Strategic Play Award", "Shot Caller of the Year"],
    socialMedia: {
      twitter: "@mastermind_igl",
      youtube: "MasterMindTactics",
      instagram: "james_wilson_gaming"
    }
  },
  {
    id: 8,
    name: "ZQG SRC",
    photo: "/api/placeholder/300/300",
    designation: "Team Captain",
    inGameName: "srclife",
    gamesInvolved: ["Valorant", "Overwatch 2", "Apex Legends"],
    profession: "BT-Paglu",
    achievements: ["Multi-Role Expert", "Adaptability Award 2024", "Community Favorite"],
    socialMedia: {
      twitter: "@flexqueen_gaming",
      twitch: "flexqueen",
      instagram: "sophia_flex_gaming"
    }
  },
  {
    id: 9,
    name: "ZQG Hate",
    photo: "/api/placeholder/300/300",
    designation: "First in Command",
    inGameName: "Dagabazz",
    gamesInvolved: ["CS:GO", "Valorant", "Rainbow Six Siege"],
    profession: "Editor in Chief",
    achievements: ["Highest AWP Success Rate", "Clutch King 2024", "Perfect Accuracy Award"],
    socialMedia: {
      twitter: "@silentscope_pro",
      twitch: "silentscope_sniper",
      instagram: "david_sniper_kim"
    }
  },
  {
    id: 9,
    name: "ZQG Zernius",
    photo: "/api/placeholder/300/300",
    designation: "First in Command",
    inGameName: "Bantu",
    gamesInvolved: ["CS:GO", "Valorant", "Rainbow Six Siege"],
    profession: "Vegpaglu final boss",
    achievements: ["Highest AWP Success Rate", "Clutch King 2024", "Perfect Accuracy Award"],
    socialMedia: {
      twitter: "@silentscope_pro",
      twitch: "silentscope_sniper",
      instagram: "david_sniper_kim"
    }
  },
  {
    id: 9,
    name: "ZQG Rage",
    photo: "/api/placeholder/300/300",
    designation: "First in Command",
    inGameName: "Ragaygaming",
    gamesInvolved: ["CS:GO", "Valorant", "Rainbow Six Siege"],
    profession: "Cringepaglu final boss",
    achievements: ["Highest AWP Success Rate", "Clutch King 2024", "Perfect Accuracy Award"],
    socialMedia: {
      twitter: "@silentscope_pro",
      twitch: "silentscope_sniper",
      instagram: "david_sniper_kim"
    }
  },
  {
    id: 10,
    name: "ZQG Hellfire",
    photo: "/api/placeholder/300/300",
    designation: "First in Command",
    inGameName: "Noiggo",
    gamesInvolved: ["CS:GO", "Valorant", "Rainbow Six Siege"],
    profession: "Professional chapri",
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