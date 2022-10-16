import Interactions from "db/interactions";

export const getInteractionsTweetByIdService = ({ id }) => {
  try {
    if (!id) {
      throw {
        statusCode: 400,
        statusText: {
          en: "'id' no esta definido",
          en: "'id' is missing",
        },
        input: id,
      };
    }
    if (!Interactions) {
      throw {
        statusCode: 500,
        statusText: {
          es: "no se pudo acceder a la base de datos de interacciones",
          en: "cannot be to access to interactions db",
        },
      };
    }
    const interactionTweet = Interactions.find(
      (interaction) => interaction.id === id
    );
    return interactionTweet;
  } catch (err) {
    console.log({err});
    throw err;
  }
};
