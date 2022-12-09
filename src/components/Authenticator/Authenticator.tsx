import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

import { AuthenticatorProps } from "./types";

const Authenticator: React.FunctionComponent<AuthenticatorProps> = ({
  user,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = user?.signInUserSession.accessToken.jwtToken;

    if (jwtToken) {
      localStorage.setItem("token-auth", jwtToken);
      navigate("/browse");
    }
  }, [navigate, user]);

  return <></>;
};

export default withAuthenticator(Authenticator);
