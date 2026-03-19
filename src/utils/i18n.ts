import { translations } from "../constants/translations";

const currentLang = "en"; // change here only for configurable language

export const t = (key: keyof typeof translations.en): string => {
  return translations[currentLang][key];
};
