const getMonth = (monthNumber) => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return months[monthNumber];
};
export const getDate = (tweetDate = {}) => {
  const currentDate = {
    seconds: new Date().getSeconds(),
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
  if (currentDate.year !== tweetDate.year) {
    return `${tweetDate.day} ${getMonth(tweetDate.month)} ${tweetDate.year}`;
  }
  if (
    currentDate.month !== tweetDate.month ||
    currentDate.day !== tweetDate.day
  ) {
    return `${tweetDate.day} ${getMonth(tweetDate.month)}`;
  }
  if (currentDate.hours !== tweetDate.hours) {
    return `${currentDate.hours - tweetDate.hours}h`;
  }
  if (currentDate.minutes !== tweetDate.minutes) {
    return `${currentDate.minutes - tweetDate.minutes}min`;
  }
  return `${currentDate.seconds - tweetDate.seconds}s`;
};
