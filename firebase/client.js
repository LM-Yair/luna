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
import { getStorage, ref, uploadBytes } from "firebase/storage";
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

export const upLoadImage = (file, tweetId) => {
  const storage = getStorage();
  const storageRef = ref(storage, `images/tweets/${tweetId}/${file.name}`);
  return uploadBytes(storageRef, file.data);
};

export const createNewTweet = async ({ uid, avatar, name, email, content }) => {
  const newtweet = {
    uid,
    avatar,
    name,
    email,
    date: Timestamp.fromDate(new Date()),
    content: {
      message: content.message,
      image: {
        status: content.image.status,
        name: content.image.name,
        src: "images/tweets/tweet_id/filename.ext",
      },
    },
  };
  return addDoc(collection(db, "tweets"), newtweet)
    .then((res) => {
      if (content.image.status === IMAGE_STATE.OK)
        return upLoadImage(
          { name: content.image.name, bytes: content.image.data },
          res.id
        );
    })
    .catch(console.warn);
};
