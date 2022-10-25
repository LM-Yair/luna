import Avatar from "components/avatar/avatar";
import { IMAGE_STATE } from "components/CreateTweet/ImageTweet";
import { timeAgo } from "helpers/front/tweets/date";
import TweetInteractions from "./TweetInteractions";
import Link from "next/link";

const TweetCard = ({ uid, id, name, avatar, at, date, content }) => {
  const hasImage = content.image.status === IMAGE_STATE.OK;
  const _date = date.seconds * 1000;
  const timeago = timeAgo(_date);
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
            <Link href={`/tweets/${id}`}>
              <a className='cursor-pointer decoration-neutral-500 underline-offset-1 hover:underline'>
                <time className="text-neutral-500">{timeago}</time>
              </a>
            </Link>
          </div>
          <div>
            <span className="text-neutral-500 text-l">...</span>
          </div>
        </div>
        {/*Tweet content*/}
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
        {/*Tweet interactions*/}
        <TweetInteractions id={id} />
      </div>
    </div>
  );
};

export default TweetCard;
