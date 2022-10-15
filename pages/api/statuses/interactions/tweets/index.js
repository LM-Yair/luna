import Interactions from "db/interactions";

const interactions = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(Interactions);
};

export default interactions;
