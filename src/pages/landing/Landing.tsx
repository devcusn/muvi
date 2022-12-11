import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Button,
  styled,
  useMediaQuery,
} from "@mui/material";

import image from "../../assets/img/background.png";
import Layout from "../../layout/Layout";
import AuthContext from "../../context/AuthContext";

const Background = styled("div")({
  backgroundImage: `url(${image})`,
  minHeight: "100vh",
});

const LandingPage: React.FunctionComponent = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:800px)", { noSsr: true });

  useEffect(() => {
    if (auth) {
      navigate("/membership");
    }
  }, [navigate, auth]);

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
          <Typography
            variant={matches ? "h1" : "h4"}
            sx={{ color: "red", fontWeight: "bold" }}
          >
            MovieUVI
          </Typography>
          <Box
            sx={{
              color: "#fafafa",
              fontSize: matches ? "40px" : "20px",
              textAlign: "center",
            }}
          >
            You will find all the latest and greatest films
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <Button
              variant='contained'
              sx={{
                color: "#fafafa",
                fontSize: matches ? "25px" : "15px",
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
