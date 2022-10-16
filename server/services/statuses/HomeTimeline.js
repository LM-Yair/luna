import Tweets from "db/tweets";

export const getTweetsLatestService = () => {
  try {
    if (!Tweets) {
      throw {
        statusCode: 500,
        statusText: {
          es: "no se pudo acceder a la base de datos",
          en: "cannot be access to databse",
        },
      };
    }
    return Tweets;
  } catch (err) {
    throw err;
  }
};
