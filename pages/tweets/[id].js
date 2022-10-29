import Header from "components/Header/Header";
import Loader from "components/Loader/Loader";
import Tweet from "components/Tweet/Tweet";
import { TWEET_STATE } from "CONSTANTS/TWEET_STATE";
import { filterTweetData } from "helpers/front/tweets/tweetData";
import useUser from "hooks/useUser";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
}

const TweetPage = ({ id }) => {
  useUser();
  const [tweetState, setTweetState] = useState(TWEET_STATE.NULL);
  const [tweetContent, setTweetContent] = useState(TWEET_STATE.NULL);
  useEffect(() => {
    setTweetState(TWEET_STATE.LOADING);
    fetch(`/api/statuses/tweets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTweetState(TWEET_STATE.OK);
        setTweetContent(filterTweetData(id, data.tweet));
      })
      .catch((e) => {
        console.log("ERROR_TWEET_NOT_FOUND", e);
        setTweetContent(TWEET_STATE.NULL);
        setTweetState(TWEET_STATE.ERROR);
      });
  }, []);

  if (tweetState === TWEET_STATE.NULL) {
    return (
      <section>
        <Header pageName="Tweet" />
      </section>
    );
  }
  if (tweetState === TWEET_STATE.LOADING) {
    return (
      <section>
        <Header pageName="Tweet" />
        <div className="h-24 flex justify-center items-center">
          <Loader size={35} />
        </div>
      </section>
    );
  }
  if (tweetState === TWEET_STATE.ERROR) {
    return (
      <section>
        <Header pageName="Tweet" />
        <div className="h-24 flex justify-center items-center">
          Tweet not found {":("}
        </div>
      </section>
    );
  }
  return (
    <section>
      <Header pageName="Tweet" />
      <Tweet
        uid={tweetContent.uid}
        id={tweetContent.id}
        name={tweetContent.name}
        avatar={tweetContent.avatar}
        date={tweetContent.date}
        content={tweetContent.content}
      />
    </section>
  );
};

export default TweetPage;
