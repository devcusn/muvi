import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Grid, Input, IconButton } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { Auth } from "aws-amplify";

import MovieCard from "../MovieCard/MovieCard";

import { searchGeneral } from "../../services/endpoints";
import { Movie } from "../../services/types";

const TopBar: React.FunctionComponent = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [searchResult, setSearchResult] = useState<Movie[]>();
  const [activeSearch, setActiveSearch] = useState(false);
  const navigate = useNavigate();

  const searchGeneralServices = async (value: string) => {
    try {
      const res = await searchGeneral(value);
      setSearchResult(res.data.Search);
    } catch (err) {
      console.log(err);
    }
  };
  const exit = async () => {
    try {
      await Auth.signOut();
      navigate("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };
  const handleSearch = (event: React.ChangeEvent) => {
    const value = (inputRef.current?.children[0] as HTMLInputElement).value;
    if (value.trim() === "") {
      setActiveSearch(false);
    } else {
      searchGeneralServices(value);
      setActiveSearch(true);
    }
  };

  const initSearch = () => {
    (inputRef.current?.children[0] as HTMLInputElement).value = "movie";
    setActiveSearch(true);
    searchGeneralServices("movie");
  };

  const movieCards = searchResult?.map((movie) => (
    <MovieCard
      title={movie.Title}
      url={movie.Poster}
      type='horizontal'
      key={movie.imdbID}
      imdbID={movie.imdbID}
    />
  ));

  return (
    <>
      <Grid
        container
        direction='row'
        alignItems='center'
        sx={{ position: "fixed", padding: "20px", backgroundColor: "#131212" }}
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
            onClick={initSearch}
            onChange={handleSearch}
            ref={inputRef}
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
      {activeSearch && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: "100px",
            width: "100%",
            height: "100vh",
            zIndex: 10,
            backgroundColor: "black",
          }}
        >
          <Box
            sx={{
              flexWrap: "wrap",
              width: "100%",
              display: "flex",
              gap: "20px",
              padding: "20px",
              height: "min-content",
            }}
          >
            {movieCards?.length ? (
              movieCards
            ) : (
              <Box
                sx={{
                  color: "red",
                  fontSize: "20px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                There is no result
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default TopBar;
