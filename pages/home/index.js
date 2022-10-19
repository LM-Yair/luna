import Head from "next/head";
import { useEffect, useState } from "react";

import ContainerPage from "/components/ContainerPage/ContainerPage";
import Avatar from "components/avatar/avatar";
import Tweet from "components/Tweet/Tweet";
import Navigation from "components/Navigation/Navigation";
import useUser, { USER_STATES } from "hooks/useUser";
import { getLatestTweets } from "/firebase/client";

const Home = () => {
  const { user } = useUser();
  const [timeline, setTimeline] = useState({});
  useEffect(() => {
    user.status === USER_STATES.IS_LOGGED &&
      getLatestTweets()
        .then((tweets) => {
          setTimeline({ tweets });
        })
        .catch(console.log);
  }, [user]);
  return (
    <ContainerPage>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <title>Luna - Home</title>
      </Head>
      <section className="w-full min-h-full">
        <header className="p-2 sticky top-0 left-0 flex justify-between bg-neutral-200/75 backdrop-blur-sm">
          <div className="w-16 flex items-center justify-center">
            {user.status === USER_STATES.IS_LOGGED && (
              <Avatar avatar={user.avatar} avatarSize={35} />
            )}
          </div>
          <div className="w-full flex items-center">
            <h2 className="text-xl font-bold ml-2">Home</h2>
          </div>
          <div className="w-16 flex items-center justify-center"></div>
        </header>
        {/*Tweets*/}
        <section>
          {timeline.tweets &&
            timeline.tweets.map((tweet) => (
              <Tweet
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
        </section>
        <p className="text-lg text-center mt-6 text-neutral-500">
          Esto es todo por el momento :(
        </p>
      </section>
      <Navigation />
    </ContainerPage>
  );
};

export default Home;
