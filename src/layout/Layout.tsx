import React from "react";
import { Box } from "@mui/material";

import TopBar from "../components/Navigation/TopBar";
import { LayoutProps } from "./types";

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  pageType = "inside",
}) => {
  return (
    <Box sx={{ paddingBottom: "60px" }}>
      <TopBar pageType={pageType} />
      {pageType !== "landing" && <Box sx={{ height: "100px" }} />}

      {children}
    </Box>
  );
};

export default Layout;
