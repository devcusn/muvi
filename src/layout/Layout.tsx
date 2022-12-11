import React from "react";
import { Box, useMediaQuery } from "@mui/material";

import TopBar from "../components/Navigation/TopBar";
import { LayoutProps } from "./types";

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  pageType = "inside",
}) => {
  const matches = useMediaQuery("(min-width:700px)", { noSsr: true });

  return (
    <Box sx={{ paddingBottom: "60px" }}>
      <TopBar pageType={pageType} />
      {pageType !== "landing" && (
        <Box sx={{ height: matches ? "100px" : "150px" }} />
      )}

      {children}
    </Box>
  );
};

export default Layout;
