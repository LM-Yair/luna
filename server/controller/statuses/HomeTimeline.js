import {getTweetsLatestService} from "server/services/statuses/HomeTimeline";

export const getTweetsLatestController = () => {
  try{
    const tweets = getTweetsLatestService();
    return tweets;
  }catch(err){
    throw err;
  }
}
