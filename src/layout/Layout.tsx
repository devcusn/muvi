import React from "react";
import { Box } from "@mui/material";

import { LayoutProps } from "./types";

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Layout;
