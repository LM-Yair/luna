import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { USER_STATES } from "CONSTANTS/USER_STATES";
import { logginState } from "Firebase/login/loginState";

export default function useUser() {
  const router = useRouter();
  const [user, setUser] = useState({
    status: USER_STATES.VERIFYING,
  });
  useEffect(() => {
    logginState(setUser);
  }, []);

  useEffect(() => {
    if (
      user.status === USER_STATES.UNKNOW ||
      user.status === USER_STATES.NOT_LOGGED
    )
      router.push("/");
  }, [user]);

  return { user };
}
