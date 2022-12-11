import React, { useEffect, useState, useContext } from "react";
import { Auth } from "aws-amplify";

import AuthContext from "../context/AuthContext";

const Guard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const listenToAutoSignInEvent = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuth(true);
    } catch (err) {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    listenToAutoSignInEvent();
  }, []);

  if (!isAuth) {
    localStorage.removeItem("token-auth");
  }
  console.log(isAuth);
  return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>;
};

export default Guard;
