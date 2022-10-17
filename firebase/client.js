import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAq4LuYWQjEdCAnvaERkeNbEinJLKypAWw",
  authDomain: "luna-85820.firebaseapp.com",
  projectId: "luna-85820",
  storageBucket: "luna-85820.appspot.com",
  messagingSenderId: "764355860670",
  appId: "1:764355860670:web:00cd9f53df6d9c0e9e26ef",
  measurementId: "G-HVBHJWSMK1",
};

initializeApp(firebaseConfig);

const userLogged = (user) => {
  const { photoURL, reloadUserInfo, displayName } = user;
  const { screenName } = reloadUserInfo;
  return { name: screenName || displayName, avatar: photoURL };
};

export const logginState = (onChange) => {
  const auth = getAuth();
  return onAuthStateChanged(auth, (user) => {
    const userIsLogged = user ? userLogged(user) : undefined;
    onChange(userIsLogged);
    return;
  });
};

export const loginGitHub = () => {
  const loginGitHubProvider = new GithubAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, loginGitHubProvider);
};
