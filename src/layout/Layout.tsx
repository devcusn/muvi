import React from "react";
import { Box } from "@mui/material";

import TopBar from "../components/Navigation/TopBar";
import { LayoutProps } from "./types";

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <TopBar />
      <Box sx={{ height: "150px" }}></Box>
      {children}
    </Box>
  );
};

export default Layout;
