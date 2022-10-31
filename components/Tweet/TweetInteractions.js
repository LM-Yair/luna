import Comment from "components/Icons/Comment";
import Like from "components/Icons/Like";
import ReTweet from "components/Icons/Retweet";
import Send from "components/Icons/Send";

const TweetInteractions = () => {
  // const [interactions, setInteractions] = useState(null);
  // useEffect(() => {
  //   fetch(`/api/statuses/interactions/tweets/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInteractions(data.interaction);
  //     })
  //     .catch(console.log);
  // }, []);
  // if (!interactions) {
  //   return (
  //     <div className="py-2 flex justify-between">
  //       <Comment size={20} />
  //       <Like size={20} />
  //       <ReTweet size={20} />
  //       <Send size={20} />
  //     </div>
  //   );
  // }
  return (
    <div className="py-2 flex justify-between">
      <div className="py-2 flex justify-between">
        <Comment size={20} />
        <Like size={20} />
        <ReTweet size={20} />
        <Send size={20} />
      </div>
    </div>
  );
};

export default TweetInteractions;
