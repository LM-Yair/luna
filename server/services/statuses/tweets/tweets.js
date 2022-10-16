import Tweets from 'db/tweets';

export const getTweetByIdService = ({id}) => {
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
    if (!Tweets) {
      throw {
        statusCode: 500,
        statusText: {
          es: "no se pudo acceder a la base de datos de Tweets",
          en: "cannot be to access to Tweets db",
        },
      };
    }
    const tweet = Tweets.find(
      (interaction) => interaction.id === id
    );
    return tweet;
  } catch (err) {
    console.log({err});
    throw err;
  }
}
