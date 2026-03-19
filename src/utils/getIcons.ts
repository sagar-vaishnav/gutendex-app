export const getIcon = (iconName: string) => {
  return new URL(`../assets/icons/${iconName}`, import.meta.url).href;
};
