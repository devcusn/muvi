import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

import { MembershipProps } from "./types";

const Membership: React.FunctionComponent<MembershipProps> = ({ user }) => {
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

export default withAuthenticator(Membership);
