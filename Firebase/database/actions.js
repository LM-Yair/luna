import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

import { db } from "Firebase/client";
import { IMAGE_STATE } from "CONSTANTS/IMAGE_STATES";
import { getImageUrl, upLoadImage } from "Firebase/storage/actions";

export const listenLatestTweets = (cb) => {
  const tweetRef = collection(db, "tweets");
  const q = query(tweetRef, orderBy("date", "desc"));
  const unsub = onSnapshot(q, ({ docs }) => cb(docs));
  return unsub;
};

export const createNewTweet = async ({ uid, avatar, name, email, content }) => {
  try {
    const image = {
      status: IMAGE_STATE.NOT_IMG,
    };
    if (content.image.status === IMAGE_STATE.OK) {
      const imagepath = `images/tweets/${content.image.name}`;
      const imagedata = content.image.data;
      const metadata = {
        contentType: content.image.type,
      };
      const uploadTask = await upLoadImage(imagepath, imagedata, metadata);
      const path = await getImageUrl(uploadTask.metadata.fullPath);
      image.status = IMAGE_STATE.OK;
      image.path = path;
    }
    const newtweet = {
      uid,
      avatar,
      name,
      email,
      date: Timestamp.fromDate(new Date()),
      content: {
        message: content.message,
        image,
      },
    };
    return addDoc(collection(db, "tweets"), newtweet);
  } catch (err) {
    throw err;
  }
};
