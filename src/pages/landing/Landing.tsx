import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Button, styled } from "@mui/material";

import image from "../../assets/img/background.webp";

const Landing = styled("div")({
  backgroundImage: `url(${image})`,
});

const LandingPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Landing sx={{ minHeight: "100vh" }}>
      <Grid sx={{ backgroundColor: "rgba(0,0,0,0.4)", minHeight: "100vh" }}>
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
              color: "red",
              fontSize: "70px",
              fontWeight: "bold",
            }}
          >
            MUVI
          </Box>
          <Box sx={{ color: "#fafafa", fontSize: "40px" }}>
            You will find all the latest and greatest films
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <Button
              variant='contained'
              sx={{
                color: "#fafafa",
                fontSize: "25px",
                fontWeight: "bold",
                backgroundColor: "red",
              }}
              onClick={() => {
                navigate("/membership");
              }}
            >
              Are you student ?
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Landing>
  );
};

export default LandingPage;
