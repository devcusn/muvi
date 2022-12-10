import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Button, styled } from "@mui/material";

import image from "../../assets/img/background.png";
import Layout from "../../layout/Layout";

const Background = styled("div")({
  backgroundImage: `url(${image})`,
  minHeight: "100vh",
});

const LandingPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Layout pageType='landing'>
      <Background>
        <Grid
          sx={{
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <Typography variant='h1' sx={{ color: "red", fontWeight: "bold" }}>
            MovieUVI
          </Typography>
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
      </Background>
    </Layout>
  );
};

export default LandingPage;
