import { useState } from "react";
import Image from "next/image";

import CrossIcon from "components/Icons/Cross";
import ImageIcon from "components/Icons/Image";
import Loader from "components/Loader/Loader";

export const IMAGE_STATE = {
  ERROR: -1,
  NOT_IMG: 0,
  OK: 1,
  IS_LOADING: 2,
  NOT_LOADING: 3,
};

const ImageTweet = ({ form, setForm }) => {
  const [img, setImg] = useState(form.image.status);
  const removeImage = () => {
    setImg(IMAGE_STATE.NOT_IMG);
    setForm({
      ...form,
      image: {
        status: IMAGE_STATE.NOT_IMG,
        data: "",
      },
    });
  };
  const handleLoadImage = (e) => {
    const reader = new FileReader();
    const image = e.target.files[0];
    reader.addEventListener("error", (e) => {
      console.warn(e);
      setImg(IMAGE_STATE.ERROR);
    });
    reader.addEventListener("loadstart", () => {
      setImg(IMAGE_STATE.IS_LOADING);
    });
    reader.addEventListener("loadend", () => {
      setImg(IMAGE_STATE.OK);
      setForm({
        ...form,
        image: {
          status: IMAGE_STATE.OK,
          data: reader.result,
          name: image.name,
        },
      });
    });
    image && reader.readAsDataURL(image);
  };
  if (img === IMAGE_STATE.IS_LOADING) {
    return (
      <div className="w-[50px] h-[50px]">
        <Loader size={50} />
      </div>
    );
  }
  if (img === IMAGE_STATE.OK && form.image.status === IMAGE_STATE.OK) {
    return (
      <div className="w-[50px] h-[50px] relative">
        <div
          onClick={removeImage}
          className="w-[20px] h-[20px] absolute z-10 top-0 right-0 rounded-full bg-neutral-100 cursor-pointer scale-90"
        >
          <CrossIcon size={18} />
        </div>
        <Image
          className="rounded-xl"
          src={form.image.data}
          width={50}
          height={50}
        />
      </div>
    );
  }
  return (
    <div className="w-[50px] h-[50px] stroke-blue-500/50 hover:stroke-blue-500 relative">
      <ImageIcon size={50} />
      <input
        className="w-[50px] h-[50px] absolute z-20 left-0 top-0 opacity-0"
        onChange={handleLoadImage}
        type="file"
      />
    </div>
  );
};

export default ImageTweet;
