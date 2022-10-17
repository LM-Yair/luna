import { useEffect, useState } from "react";

import { logginState } from "/firebase/client";

export const USER_STATES = {
  IS_LOGGED: true,
  NOT_LOGGED: null,
  UNKNOW: undefined,
};

export default function useUser() {
  const [user, setUser] = useState({
    status: USER_STATES.NOT_LOGGED,
  });
  useEffect(() => {
    logginState(setUser);
  }, []);
  return { user };
}
