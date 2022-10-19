const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

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

export const timeAgo = (tweetDate) => {
  const { value, unit } = getDateDiff(tweetDate);
  const rtf = new Intl.RelativeTimeFormat("en", { style: "short" });
  return rtf.format(value, unit);
};
