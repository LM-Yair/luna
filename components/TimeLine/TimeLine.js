import { useEffect, useState } from "react";

import { USER_STATES } from "CONSTANTS/USER_STATES";

import TweetCard from "components/Tweet/TweetCard";
import { listenLatestTweets } from "Firebase/database/actions";
import { filterTweetData } from "helpers/front/tweets/tweetData";
import Loader from "components/Loader/Loader";
import { FileViewerProvider } from "context/FileViewer";
import ImageViewer from "components/Modal/ImageViewer";

const TimeLine = ({ user }) => {
  const [timeline, setTimeline] = useState({});

  useEffect(() => {
    let unsubscribe = false;
    if (user.status === USER_STATES.IS_LOGGED) {
      unsubscribe = listenLatestTweets((docs) => {
        const tweets = docs.map((doc) => {
          return filterTweetData(doc.id, doc.data());
        });
        setTimeline({ tweets });
      });
    }
    return () => unsubscribe && unsubscribe();
  }, [user]);

  if (!user) {
    return <section className="grow"></section>;
  }
  if (!timeline.tweets) {
    return (
      <section className="grow">
        <div className="p-2 flex justify-center">
          <Loader size={35} />
        </div>
      </section>
    );
  }
  return (
    <section className="grow">
      <FileViewerProvider>
        <ImageViewer />
        {timeline.tweets &&
          timeline.tweets.map((tweet) => (
            <TweetCard
              key={tweet.id}
              id={tweet.id}
              uid={tweet.uid}
              name={tweet.name}
              avatar={tweet.avatar}
              at={tweet.at}
              date={tweet.date}
              content={tweet.content}
            />
          ))}
        <p className="text-lg text-center mt-6 text-neutral-500">
          {"Esto es todo por el momento :("}
        </p>
      </FileViewerProvider>
    </section>
  );
};

export default TimeLine;
