import Avatar from "components/avatar/avatar";
import { timeAgo } from "helpers/front/tweets/date";
import TweetInteractions from "./TweetInteractions";

const Tweet = ({ uid, id, name, avatar, at, date, content }) => {
  const timeago = timeAgo(date);
  return (
    <div className="p-4 border-b border-neutral-300 flex gap-2">
      <div className="w-[50px] min-h-full">
        <Avatar avatar={avatar} avatarSize={50} />
      </div>
      <div className="w-full">
        {/*Tweet head*/}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="font-bold">{name}</span>
            <span className="text-neutral-500">{at}</span>
            <span className="text-neutral-500">{timeago}</span>
          </div>
          <div>
            <span className="text-neutral-500 text-l">...</span>
          </div>
        </div>
        {/*Tweet content*/}
        <div className="whitespace-pre-wrap">{content.text}</div>
        {/*Tweet interactions*/}
        <TweetInteractions id={id} />
      </div>
    </div>
  );
};

export default Tweet;
