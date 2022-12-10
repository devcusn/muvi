import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const NotFoundPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        backgroundColor: "#101010",
        color: "red",
      }}
    >
      <Box sx={{ fontSize: "100px", color: "red" }}>404</Box>
      <Box>Page Not Found</Box>
      <Button
        sx={{ color: "red" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
