import React from "react";
import { Box, useMediaQuery } from "@mui/material";

import { NoticeProps } from "./types";

const Notice: React.FunctionComponent<NoticeProps> = ({ text }) => {
  const matches = useMediaQuery("(min-width:700px)", { noSsr: true });
  return (
    <Box
      sx={{
        color: "red",
        fontSize: matches ? "30px" : "15px",
        textAlign: "center",
        padding: "40px",
      }}
    >
      {text}
    </Box>
  );
};

export default Notice;
