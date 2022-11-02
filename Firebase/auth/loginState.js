import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { USER_STATES } from "CONSTANTS/USER_STATES";
import { app } from "Firebase/client";

// destructuring user data
const userData = (user) => {
  const { photoURL, reloadUserInfo, displayName, email, uid } = user;
  const { screenName } = reloadUserInfo;
  return {
    uid,
    name: screenName || displayName,
    email,
    avatar: photoURL,
  };
};

export const logginState = (onChange) => {
  const auth = getAuth(app);
  return onAuthStateChanged(auth, (user) => {
    if (!user) return onChange({ status: USER_STATES.NOT_LOGGED });
    const userIsLogged = userData(user);
    onChange({ status: USER_STATES.IS_LOGGED, ...userIsLogged });
    return;
  });
};

export const logOut = () => {
  const auth = getAuth(app);
  return signOut(auth);
};
