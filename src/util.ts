export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function toTitleCase(str: string) {
  return str.toLowerCase().split(" ").map(capitalize).join(" ");
}
