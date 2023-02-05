export function getRelativeTime(mt: Date): String {
  const hours = mt.getHours().toString().padStart(2, "0");
  const minutes = mt.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes} `;
}
