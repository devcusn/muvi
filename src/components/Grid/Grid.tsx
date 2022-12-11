import React from "react";
import { Box } from "@mui/material";

import { ComponentProps, FlexProps } from "./types";

export const Center: React.FunctionComponent<ComponentProps> = ({
  children,
  bg,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        color: "red",
        backgroundColor: bg ? bg : "rgba(0,0,0,0.5)",
      }}
    >
      {children}
    </Box>
  );
};

export const Flex: React.FunctionComponent<FlexProps> = ({
  children,
  matches,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: matches ? "row" : "column",
        justifyContent: "space-around",
        alignItems: matches ? "initial" : "center",
        gap: "30px",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {children}
    </Box>
  );
};
