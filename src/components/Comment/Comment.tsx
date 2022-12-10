import React from "react";
import { Box, Avatar, Button } from "@mui/material";

import { CommentProps } from "./types";
import { useNavigate } from "react-router-dom";

const Comment: React.FunctionComponent<CommentProps> = ({
  message,
  movieId,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "800px",
        marginTop: "20px",
        backgroundColor: "#202020",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "4px",
          flex: 1,
        }}
      >
        <Avatar>U</Avatar>
        <Box sx={{ marginLeft: "10px" }}>{message}</Box>
      </Box>
      {movieId && (
        <Button
          sx={{ marginRight: "20px" }}
          onClick={() => {
            navigate(`/detail?id=${movieId}`);
          }}
        >
          Let Go Film
        </Button>
      )}
    </Box>
  );
};

export default Comment;
