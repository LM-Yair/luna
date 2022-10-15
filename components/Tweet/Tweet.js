import TweetInteractions from "./TweetInteractions";

const Tweet = ({ tweetContent }) => {
  const date = `${tweetContent.date.hours}h`;
  return (
    <div className="p-4 border-b border-neutral-300 flex gap-2">
      <div className="w-16 min-h-full">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-600">
          Avatar
        </div>
      </div>
      <div className="w-full">
        {/*Tweet head*/}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="font-bold">{tweetContent.name}</span>
            <span className="text-neutral-500">{tweetContent.at}</span>
            <span className="text-neutral-500">{date}</span>
          </div>
          <div>
            <span className="text-neutral-500 text-l">...</span>
          </div>
        </div>
        {/*Tweet content*/}
        <div className="whitespace-pre-wrap">{tweetContent.content.text}</div>
        {/*Tweet interactions*/}
        <TweetInteractions id={tweetContent.id} />
      </div>
    </div>
  );
};

export default Tweet;
