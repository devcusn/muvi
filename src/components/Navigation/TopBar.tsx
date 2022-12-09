import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Grid, Input, IconButton } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { Auth } from "aws-amplify";

const TopBar: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const exit = async () => {
    try {
      await Auth.signOut();
      navigate("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };
  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      sx={{ position: "fixed", padding: "20px", backgroundColor: "#000000" }}
    >
      <Box>
        <Typography
          sx={{ cursor: "pointer" }}
          color='red'
          variant='h3'
          fontWeight='bold'
          onClick={() => navigate("/browse")}
        >
          MUVI
        </Typography>
      </Box>

      <Box sx={{ flex: 2, color: "red", marginLeft: "20px" }}>
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: "15px",
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          Lay Back And Watch
        </Typography>
      </Box>
      <Box sx={{ flex: 3 }}>
        <Input
          color='secondary'
          sx={{ width: "100%" }}
          placeholder='Search Movies or Series'
          onClick={() => {
            navigate("/explore");
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 2,
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          onClick={() => {
            exit();
          }}
        >
          <ExitToApp fontSize='large' color='error' />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default TopBar;
