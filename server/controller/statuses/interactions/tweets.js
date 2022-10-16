import { getInteractionsTweetByIdService } from "server/services/statuses/interactions/tweets";

export const getInteractionsTweetByIdController = ({id}) => {
  try{
    const interactionTweet = getInteractionsTweetByIdService({id});
    return interactionTweet;
  }catch(err){
    throw err;
  }
}
