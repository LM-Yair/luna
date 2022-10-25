import {getTweetByIdService} from "server/services/statuses/tweets/tweets";

export const getTweetByIdController = async ({id}) => {
  try{
    const tweet = await getTweetByIdService({id});
    return tweet;
  }catch(err){
    throw err;
  }
}
