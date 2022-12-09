import React, { useEffect, useState } from "react";
import { Hub } from "aws-amplify";
const Guard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const listenToAutoSignInEvent = () => {
    Hub.listen("auth", ({ payload }) => {
      const { event } = payload;
      if (event === "autoSignIn") {
        setIsAuth(true);
      } else if (event === "autoSignIn_failure") {
        setIsAuth(false);
      }
    });
  };

  useEffect(() => {
    listenToAutoSignInEvent();
  }, []);

  if (!isAuth) {
    localStorage.removeItem("token-auth");
  }
  return <div>{children}</div>;
};

export default Guard;
