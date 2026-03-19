// src/constants/genres.ts
export interface Genre {
  name: string;
  icon: string;
}

export const GENRES: Genre[] = [
  { name: "Fiction", icon: "Fiction.svg" },
  { name: "Drama", icon: "Drama.svg" },
  { name: "Humour", icon: "Humour.svg" },
  { name: "Politics", icon: "Politics.svg" },
  { name: "Philosophy", icon: "Philosophy.svg" },
  { name: "History", icon: "History.svg" },
  { name: "Adventure", icon: "Adventure.svg" }
];

export const ICONS = [  
    { name: "Back", icon: "Back.svg" },
    { name: "Cancel", icon: "Cancel.svg" },
    { name: "Next", icon: "Next.svg" },
    { name: "Pattern", icon: "Pattern.svg" },
    { name: "Search", icon: "Search.svg" }
];

