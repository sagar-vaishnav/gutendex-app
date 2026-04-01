import { translations } from "../constants/translations";

export const t = (key: keyof typeof translations.en): string => {
  const currentLang = (localStorage.getItem("lang") || "en") as keyof typeof translations;
  return translations[currentLang][key];
};
