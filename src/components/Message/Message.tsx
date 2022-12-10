import React from "react";
import { Box, Avatar } from "@mui/material";

import { MessagesProps } from "./types";

const Message: React.FunctionComponent<MessagesProps> = ({ message }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: "800px", marginTop: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#202020",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "4px",
        }}
      >
        <Avatar>U</Avatar>
        <Box sx={{ marginLeft: "10px" }}>as asdlas dmasasdasd dad lads</Box>
      </Box>
    </Box>
  );
};

export default Message;
