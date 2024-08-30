export const removeIndentation = (text) => {
  return text.replace(/ {2,}/g, " ").replace(/\n /g, "");
};
