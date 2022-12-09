import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";

import { AuthenticatorProps } from "./types";

const Authenticator: React.FunctionComponent<AuthenticatorProps> = ({
  user,
}) => {
  return <></>;
};

export default withAuthenticator(Authenticator);
