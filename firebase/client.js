import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  Timestamp,
  query,
  orderBy,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import { USER_STATES } from "hooks/useUser";
import { IMAGE_STATE } from "components/CreateTweet/ImageTweet";

const firebaseConfig = {
  apiKey: "AIzaSyAq4LuYWQjEdCAnvaERkeNbEinJLKypAWw",
  authDomain: "luna-85820.firebaseapp.com",
  projectId: "luna-85820",
  storageBucket: "luna-85820.appspot.com",
  messagingSenderId: "764355860670",
  appId: "1:764355860670:web:00cd9f53df6d9c0e9e26ef",
  measurementId: "G-HVBHJWSMK1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// destructuring user data to use
const userLogged = (user) => {
  const { photoURL, reloadUserInfo, displayName, email, uid } = user;
  const { screenName } = reloadUserInfo;
  return {
    uid,
    status: USER_STATES.IS_LOGGED,
    name: screenName || displayName,
    email,
    avatar: photoURL,
  };
};

export const logginState = (onChange) => {
  const auth = getAuth();
  return onAuthStateChanged(auth, (user) => {
    const userIsLogged = user
      ? userLogged(user)
      : {
          status: USER_STATES.UNKNOW,
        };
    onChange(userIsLogged);
    return;
  });
};

export const loginGitHub = () => {
  const loginGitHubProvider = new GithubAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, loginGitHubProvider);
};

export const getLatestTweets = async () => {
  const tweetRef = collection(db, "tweets");
  const q = query(tweetRef, orderBy("date", "desc"));
  return getDocs(q)
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const date = data.date.seconds * 1000;
        const id = doc.id;
        return { id, ...data, date };
      });
    })
    .catch(console.log);
};

export const upLoadImage = (file) => {
  const storage = getStorage();
  const metadata = {
    contentType: file.type,
  };
  const storageRef = ref(storage, `images/tweets/${file.name}`);
  return uploadBytesResumable(storageRef, file.data, metadata);
};

export const getImageUrl = async (path) => {
  const storage = getStorage();
  const gsReference = ref(storage, `gs://luna-85820.appspot.com/${path}`);
  return getDownloadURL(gsReference);
};

export const getSrcToImage = (path) => {
  const storage = getStorage();
  const reference = ref(storage, path);
  return getDownloadURL(reference);
}

export const createNewTweet = async ({ uid, avatar, name, email, content }) => {
  try {
    const newtweet = {
      uid,
      avatar,
      name,
      email,
      date: Timestamp.fromDate(new Date()),
      content: {
        message: content.message,
        image: {
          status: IMAGE_STATE.NOT_IMG,
        },
      },
    };
    if (content.image.status === IMAGE_STATE.OK) {
      const uploadTask = await upLoadImage({
        name: content.image.name,
        type: content.image.type,
        data: content.image.data,
      });
      const path = await getImageUrl(uploadTask.metadata.fullPath);
      newtweet.content.image = {
        status: IMAGE_STATE.OK,
        path,
      };
      return addDoc(collection(db, "tweets"), newtweet);
    }
    return addDoc(collection(db, "tweets"), newtweet);
  } catch (err) {
    throw err;
  }
};
