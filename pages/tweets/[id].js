import Header from "components/Header/Header";
import Tweet from "components/Tweet/Tweet";
import useUser from "hooks/useUser";
import { useEffect, useState } from "react";

const TWEET_STATE = {
  ERROR: undefined,
  NULL: null,
};

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
  const [tweet, setTweet] = useState(TWEET_STATE.NULL);
  useEffect(() => {
    fetch(`/api/statuses/tweets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const tweet = data.tweet;
        setTweet({ ...tweet, id });
      })
      .catch(() => {
        console.log("ERROR_TWEET_NOT_FOUND");
        setTweet(TWEET_STATE.ERROR);
      });
  }, []);

  if (tweet === TWEET_STATE.NULL) {
    return (
      <section>
        <Header pageName="Tweet" />
        Cargando...
      </section>
    );
  }
  if (tweet === TWEET_STATE.ERROR) {
    return (
      <section>
        <Header pageName="Tweet" />
        Tweet is not found
      </section>
    );
  }
  return (
    <section>
      <Header pageName="Tweet" />
      <Tweet
        uid={tweet.uid}
        id={tweet.id}
        name={tweet.name}
        avatar={tweet.avatar}
        date={tweet.date}
        content={tweet.content}
      />
    </section>
  );
};

export default TweetPage;
