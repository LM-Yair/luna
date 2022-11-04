import Link from "next/link";
import { useContext } from "react";

import Avatar from "components/avatar/avatar";
import { IMAGE_STATE } from "CONSTANTS/IMAGE_STATES";
import { timeAgo } from "helpers/front/tweets/date";
import TweetInteractions from "./TweetInteractions";
import { shortName } from "helpers/front/tweets/tweetData";
import FileViewerContext from "context/FileViewer";

const TweetCard = ({ uid, id, name, avatar, at, date, content }) => {
  const { addFileData } = useContext(FileViewerContext);
  const hasImage = content.image.status === IMAGE_STATE.OK;
  const timeago = timeAgo(date);

  const elementsActions = {
    image: () =>
      addFileData({
        src: content.image.path,
        alt: `image upload by ${name}`,
      }),
  };

  const handlerClick = (e) => {
    const target = e.target.id;
    elementsActions[target] && elementsActions[target]();
  };
  return (
    <article
      onClick={handlerClick}
      className="p-4 border-b border-neutral-300 flex gap-2"
    >
      <div className="w-[50px] min-h-full">
        <Avatar avatar={avatar} avatarSize={50} />
      </div>
      <div className="w-full">
        {/*Tweet head*/}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="font-bold">{shortName(name, 20)}</span>
            <span className="text-neutral-500">{at}</span>
            <Link href={`/tweets/${id}`}>
              <a className="cursor-pointer decoration-neutral-500 underline-offset-1 hover:underline">
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
              id="image"
              className="w-full h-auto cursor-pointer"
              src={content.image.path}
              alt={`image upload by ${name}`}
            />
          )}
        </div>
        {/*Tweet interactions*/}
        <TweetInteractions id={id} />
      </div>
    </article>
  );
};

export default TweetCard;
