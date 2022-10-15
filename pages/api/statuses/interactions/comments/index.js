import Comments from "db/comments";

const comments = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(Comments);
};

export default comments;
