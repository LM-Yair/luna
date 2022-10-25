const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const isDateTimeformatSupported =
  typeof Intl !== "undefined" && Intl.DateTimeFormat;

const getDateDiff = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;
  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

const alternativeTime = (timestamp, config) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en", config);
};

export const timeAgo = (tweetDate) => {
  const config = {
    style: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: 'numeric',
    hour12: false,
  };
  if (!isDateTimeformatSupported) {
    return alternativeTime(tweetDate, config);
  }
  const { value, unit } = getDateDiff(tweetDate);
  const rtf = new Intl.RelativeTimeFormat("en", config);
  return rtf.format(value, unit);
};
