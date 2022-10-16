import { getTweetCommentsByIdService } from "server/services/statuses/interactions/comments";

export const getTweetCommentsByIdController = ({ id }) => {
  try {
    const comments = getTweetCommentsByIdService({ id });
    return comments;
  } catch (err) {
    throw err;
  }
};
