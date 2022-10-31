import {
  ref,
  getStorage,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

export const upLoadImage = (path, file, metadata = {}) => {
  if (typeof path !== "string") return false;
  const storage = getStorage();
  const storageRef = ref(storage, path);
  return uploadBytesResumable(storageRef, file, metadata);
};

export const getImageUrl = async (path) => {
  const storage = getStorage();
  const gsReference = ref(storage, `gs://luna-85820.appspot.com/${path}`);
  return getDownloadURL(gsReference);
};
