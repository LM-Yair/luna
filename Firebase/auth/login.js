import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

export const loginGitHub = () => {
  const loginGitHubProvider = new GithubAuthProvider();
  const auth = getAuth();
  return signInWithRedirect(auth, loginGitHubProvider);
};

export const loginGoogle = () => {
  const loginGoogleProvider = new GoogleAuthProvider;
  const auth = getAuth();
  return signInWithRedirect(auth, loginGoogleProvider);
}
