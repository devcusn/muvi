import React from "react";
import { Box } from "@mui/material";

import { NoticeProps } from "./types";

const Notice: React.FunctionComponent<NoticeProps> = ({ text }) => {
  return (
    <Box
      sx={{
        color: "red",
        fontSize: "30px",
        textAlign: "center",
        padding: "40px",
      }}
    >
      {text}
    </Box>
  );
};

export default Notice;
