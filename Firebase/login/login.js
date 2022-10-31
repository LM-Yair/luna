import {
  getAuth,
  GithubAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

export const loginGitHub = () => {
  const loginGitHubProvider = new GithubAuthProvider();
  const auth = getAuth();
  return signInWithRedirect(auth, loginGitHubProvider);
};
