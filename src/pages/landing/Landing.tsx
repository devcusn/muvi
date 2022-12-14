import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

import Layout from "../../layout/Layout";
import AuthContext from "../../context/AuthContext";
import { Center } from "../../components/Grid/Grid";
import { Background } from "./Landing.style";

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
        <Center>
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
        </Center>
      </Background>
    </Layout>
  );
};

export default LandingPage;
