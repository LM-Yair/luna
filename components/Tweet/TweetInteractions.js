import Comment from "components/Icons/Comment";
import Like from "components/Icons/Like";
import ReTweet from "components/Icons/Retweet";
import Send from "components/Icons/Send";
import { useEffect, useState } from "react";

const TweetInteractions = ({ id }) => {
  const [interactions, setInteractions] = useState(null);
  useEffect(() => {
    fetch(`/api/statuses/interactions/tweets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInteractions(data.interaction);
      })
      .catch(console.log);
  }, []);
  if (!interactions) {
    return (
      <div className="py-2 flex justify-between">
        <Comment />
        <Like />
        <ReTweet />
      </div>
    );
  }
  return (
    <div className="py-2 flex justify-between">
      <Comment count={interactions.comments} size={20} />
      <Like count={interactions.likes} size={20} />
      <ReTweet count={interactions.retweets} size={20} />
      <Send size={20} />
    </div>
  );
};

export default TweetInteractions;
