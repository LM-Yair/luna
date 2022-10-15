import tweets from "db/tweets";

const HomeTimeline = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(tweets);
};

export default HomeTimeline;
