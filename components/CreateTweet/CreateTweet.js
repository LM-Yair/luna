import { useState } from "react";
import { useRouter } from "next/router";

import Avatar from "components/avatar/avatar";
import { createNewTweet } from "/firebase/client";
import Loader from "components/Loader/Loader";
import ImageTweet, { IMAGE_STATE } from "./ImageTweet";
import ButtonSend from "./ButtonToSend";

const initialState = {
  message: "",
  image: {
    status: IMAGE_STATE.NOT_IMG,
    data: "",
    name: "",
  },
};

const CreateTweet = ({ user }) => {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [sendingTweet, setSendingTweet] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendingTweet(true);
    const newtweet = {
      uid: user.uid,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      content: {
        message: form.message.trim(),
        image: {
          status: form.image.status,
          data: form.image.data,
          name: form.image.name,
        },
      },
    };
    createNewTweet(newtweet)
      .then(() => {
        // router.push("/home");
        return;
      })
      .catch(console.warn)
      .finally(() => setSendingTweet(false));
    setForm(initialState);
    return;
  };
  return (
    <div className="p-3 flex gap-2">
      <div className="">
        <Avatar avatar={user.avatar} avatarSize={50} />
      </div>
      <form
        className="w-full flex flex-col items-start"
        onSubmit={handleSubmit}
      >
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="text-xl h-28 w-full bg-transparent outline-none resize-none overflow-y-auto"
          placeholder="¡share something positive to the world!"
        ></textarea>
        <div className="my-2">
          <ImageTweet form={form} setForm={setForm} />
        </div>
        <div className="flex items-center gap-2">
          <ButtonSend form={form} handleSubmit={handleSubmit} />
          {sendingTweet && <Loader />}
        </div>
      </form>
    </div>
  );
};

export default CreateTweet;
