import Head from "next/head";

import Navigation from "components/Navigation/Navigation";
import useUser from "hooks/useUser";
import { USER_STATES } from "CONSTANTS/USER_STATES";
import UserMenu from "components/Navigation/UserMenu";
import HomeHeader from "components/Header/HomeHeader";
import { ModalProvider } from "context/Modal";
import TimeLine from "components/TimeLine/TimeLine";

const Home = () => {
  const { user } = useUser();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="description" content="clone inspired by twitter" />
        <link rel="icon" href="/favicon.ico" />
        <title>Luna - Home</title>
      </Head>
      {user.status === USER_STATES.IS_LOGGED && (
        <section className="min-h-full flex flex-col justify-between">
          <ModalProvider>
            <HomeHeader user={user} />
            <UserMenu user={user} />
          </ModalProvider>
          <ModalProvider>
            <TimeLine user={user} />
          </ModalProvider>
          <Navigation />
        </section>
      )}
    </>
  );
};

export default Home;
