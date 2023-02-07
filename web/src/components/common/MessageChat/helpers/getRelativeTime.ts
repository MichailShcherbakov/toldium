const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;

export function getRelativeTime(mt: Date) {
  const now = new Date();

  let localeDate = "";
  if (now.getDate() === mt.getDate()) {
    localeDate = "Today, at";
  } else if (now.getDate() === mt.getDate() + 1) {
    localeDate = "Tomorrow, at";
  } else {
    localeDate = mt
      .toLocaleDateString(undefined, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
      .replaceAll("/", ".");
  }

  const localeTime = mt.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  return {
    localeTime,
    localeDate,
    fullLocaleTime: `${localeDate} ${localeTime}`,
  };
}

export function isAtFiveMinutesPeriod(startTime: Date, endTime: Date) {
  return startTime.getTime() + 5 * MINUTE > endTime.getTime();
}
