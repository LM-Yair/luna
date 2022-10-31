import { useState } from "react";
import { useRouter } from "next/router";

import ImageTweet from "./ImageTweet";
import ButtonSend from "./ButtonToSend";
import Avatar from "components/avatar/avatar";
import Loader from "components/Loader/Loader";
import { IMAGE_STATE } from "CONSTANTS/IMAGE_STATES";
import { createNewTweet } from "Firebase/database/actions";

export const initialStateImage = {
  status: IMAGE_STATE.NOT_IMG,
  data: "",
  type: "image/.[png,jpg]",
  preview: "",
  name: "",
};

const initialState = {
  message: "",
  image: initialStateImage,
};

const CreateTweet = ({ user }) => {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [sendingTweet, setSendingTweet] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, message: e.target.value });
    return;
  };
  const setImageForm = ({ status, data, type, preview, name }) => {
    setForm({
      ...form,
      image: {
        data: data || form.image.data,
        type: type || form.image.type,
        name: name || form.image.name,
        status: status || form.image.status,
        preview: preview || form.image.preview,
      },
    });
  };
  const resetImageForm = () => {
    setForm({
      ...form,
      image: initialStateImage,
    });
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
        router.push("/home");
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
          <ImageTweet
            form={form}
            setImage={setImageForm}
            resetImage={resetImageForm}
          />
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
