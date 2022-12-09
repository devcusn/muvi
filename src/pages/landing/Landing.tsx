import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";

import image from "../../assets/img/background.webp";

const LandingPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Grid sx={{ backgroundColor: "rgba(0,0,0,0.5)", minHeight: "100vh" }}>
      <Grid
        container
        direction='row'
        alignItems='center'
        sx={{
          color: "#fafafa",
          padding: "20px 100px",
        }}
      >
        <Grid sx={{ flex: 1 }}>
          <Typography color='red' variant='h3' fontWeight='bold'>
            MUVI
          </Typography>
        </Grid>
        <Box>
          <Button
            onClick={() => navigate("membership")}
            sx={{ fontSize: "23px", color: "red", width: "150px" }}
          >
            Login
          </Button>
        </Box>
      </Grid>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        width='100%'
        height='70vh'
      >
        <Box
          sx={{
            color: "#fafafa",
            fontSize: "70px",
            fontWeight: "bold",
          }}
        >
          MUVI
        </Box>
        <Box sx={{ color: "#fafafa", fontSize: "40px" }}>
          You will find all the latest and greatest films
        </Box>
        <Box sx={{ fontSize: "40px", marginTop: "30px" }}>
          <Button sx={{ color: "red", fontSize: "25px", fontWeight: "bold" }}>
            Family
          </Button>
          <Button sx={{ color: "red", fontSize: "25px", fontWeight: "bold" }}>
            Student
          </Button>
          <Button sx={{ color: "red", fontSize: "25px", fontWeight: "bold" }}>
            Account
          </Button>
        </Box>
      </Grid>
      <Grid
        sx={{
          position: "fixed",
          zIndex: -1,
          top: "0px",
        }}
      >
        <img src={image} className='App-logo' alt='logo' width='100%' />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
