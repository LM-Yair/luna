import {getTweetByIdService} from "server/services/statuses/tweets/tweets";

export const getTweetByIdController = ({id}) => {
  try{
    const tweet = getTweetByIdService({id});
    return tweet;
  }catch(err){
    throw err;
  }
}
