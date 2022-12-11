import React from "react";
import { Box } from "@mui/material";

import { ComponentProps } from "./types";

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
