import interactions from "db/interactions";

const tweetsId = (req, res) => {
  const { id } = req.query;
  const [interactionTweet] = interactions.filter(
    (interaction) => interaction.id == id
  );
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({
    interaction: interactionTweet,
  });
};

export default tweetsId;
