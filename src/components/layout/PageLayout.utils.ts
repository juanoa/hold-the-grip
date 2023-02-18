export const assemblePageTitle = (title?: string): string => {
  if (title) {
    return `${title} | Hold the grip`;
  }
  return `Hold the grip`;
};
