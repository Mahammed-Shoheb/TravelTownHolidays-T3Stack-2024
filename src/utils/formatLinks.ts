export default function formatLinks(text: string, addDashes = true): string {
  const separator = "-";
  if (addDashes) {
    // Add dashes replacing spaces
    return text.replace(/\s/g, separator);
  } else {
    // Remove dashes replacing with spaces
    return text.replace(new RegExp(`${separator}+`, "g"), " ");
  }
}
