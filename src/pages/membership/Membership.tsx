import React from "react";
import { Grid, Box } from "@mui/material";

import Authenticator from "../../components/Authenticator/Authenticator";

const MembershipPage: React.FunctionComponent = () => {
  return (
    <Grid>
      <Box>
        <Authenticator />
      </Box>
    </Grid>
  );
};

export default MembershipPage;
