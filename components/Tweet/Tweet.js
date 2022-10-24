import Avatar from "components/avatar/avatar";
import { IMAGE_STATE } from "components/CreateTweet/ImageTweet";
import { getSrcToImage } from "/firebase/client";
import { timeAgo } from "helpers/front/tweets/date";
import TweetInteractions from "./TweetInteractions";
import { useEffect, useState } from "react";

const Tweet = ({ uid, id, name, avatar, at, date, content }) => {
  const [image, setImage] = useState(null);
  const hasImage = content.image.status === IMAGE_STATE.OK;
  const timeago = timeAgo(date);
  useEffect(() => {
    if (hasImage) {
      getSrcToImage(content.image.path).then(setImage).catch(console.warn);
    }
  }, []);
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
        <div className="whitespace-pre-wrap">{content.message}</div>
        <div className="w-full max-h-96 overflow-hidden bg-neutral-400/50">
          {image && (
            <img
              className="w-full h-auto"
              src={image}
              alt={`image upload by ${name}`}
            />
          )}
        </div>
        {/*Tweet interactions*/}
        <TweetInteractions id={id} />
      </div>
    </div>
  );
};

export default Tweet;
