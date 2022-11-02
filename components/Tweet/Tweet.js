import Avatar from "components/avatar/avatar";
import { IMAGE_STATE } from "CONSTANTS/IMAGE_STATES";
import { timeAgo } from "helpers/front/tweets/date";
import { shortName } from "helpers/front/tweets/tweetData";
import Link from "next/link";
import TweetInteractions from "./TweetInteractions";

const Tweet = ({ uid, id, name, avatar, at, date, content }) => {
  const hasImage = content.image.status === IMAGE_STATE.OK;
  const timeago = timeAgo(date);
  return (
    <article className="p-4 border-b border-neutral-300 flex gap-2">
      <div className="w-[50px] min-h-full">
        <Avatar avatar={avatar} avatarSize={50} />
      </div>
      <div className="w-full">
        {/*Tweet head*/}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="font-bold">{shortName(name, 20)}</span>
            <span className="text-neutral-500">{at}</span>
            <time className="text-neutral-500">{timeago}</time>
          </div>
          <div>
            <span className="text-neutral-500 text-l">...</span>
          </div>
        </div>
        {/*Tweet content*/}
        <Link href={`/tweets/${id}`}>
          <a>
            <div className="whitespace-pre-wrap">{content.message}</div>
            <div className="w-full max-h-96 overflow-hidden bg-neutral-400/50">
              {hasImage && (
                <img
                  className="w-full h-auto"
                  src={content.image.path}
                  alt={`image upload by ${name}`}
                />
              )}
            </div>
          </a>
        </Link>
        {/*Tweet interactions*/}
        <TweetInteractions id={id} />
      </div>
    </article>
  );
};

export default Tweet;
