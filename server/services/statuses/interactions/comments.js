import Comments from "db/comments";

export const getTweetCommentsByIdService = ({ id }) => {
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
    const comments = Comments.find((comment) => comment.id === id);
    return comments;
  } catch (err) {
    throw err;
  }
};
