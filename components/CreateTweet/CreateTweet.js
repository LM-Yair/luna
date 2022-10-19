import { useState } from "react";

import Avatar from "components/avatar/avatar";
import { createNewTweet } from "/firebase/client";
import { useRouter } from "next/router";

const initialState = {
  message: "",
  images: [],
  videos: [],
  files: [],
};

const CreateTweet = ({ user }) => {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const isButtonDisabled = form.message.trim().length < 1 || loading;
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ [name]: value });
    return;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const newtweet = {
      uid: user.uid,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      content: {
        text: form.message.trim(),
      },
    };
    createNewTweet(newtweet)
      .then(() => {
        router.push("/home");
        return;
      })
      .catch(console.log)
      .finally(() => setLoading(false));
    setForm(initialState);
    return;
  };
  return (
    <div className="p-3 flex gap-2">
      <div className="">
        <Avatar avatar={user.avatar} avatarSize={50} />
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="text-xl h-28 w-full bg-transparent outline-none resize-none overflow-y-auto"
          placeholder="¡share something positive to the world!"
        ></textarea>
        <div>
          <input
            className="text-neutral-300 py-2 px-4 bg-neutral-800 rounded-xl cursor-pointer"
            type="submit"
            value={"Share"}
            disabled={isButtonDisabled}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTweet;
