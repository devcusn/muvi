import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

import { Center } from "../../components/Grid/Grid";

const NotFoundPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Center bg='#000000'>
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
    </Center>
  );
};

export default NotFoundPage;
