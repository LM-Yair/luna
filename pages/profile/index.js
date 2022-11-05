import Head from "next/head";
import Image from "next/image";

import useUser from "hooks/useUser";

import Header from "components/Header/Header";
import Loader from "components/Loader/Loader";
import AvatarImage from "components/avatar/avatarImage";

const Profile = () => {
  const { user } = useUser();
  if (!user) {
    return (
      <section>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <title>Luna - User</title>
        </Head>
        <div className="p-2 flex justify-center items-center">
          <Loader />
        </div>
      </section>
    );
  }
  return (
    <section>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <title>Luna - {user.name}</title>
      </Head>
      <Header pageName={user.name} />
      <section>
        <div className="h-32 relative">
          <div className="w-full h-full flex justify-center items-end overflow-hidden">
            <img
              className="w-full h-auto"
              src="/profile.jpg"
              alt="Image Profile"
            />
          </div>
          {user.avatar && (
            <figure className="p-0.5 mx-2 bg-neutral-200 rounded-full flex justify-center items-center overflow-hidden z-20 absolute -bottom-1/2">
              <AvatarImage avatar={user.avatar} size={100} alt={user.name} />
            </figure>
          )}
          <div className="min-h-[60px] pl-32 pt-2">
            <h3 className="text-lg font-bold">{user.name}</h3>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
