import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { Auth } from "aws-amplify";

import MovieCard from "../MovieCard/MovieCard";

import { searchGeneral } from "../../services/endpoints";
import { Movie } from "../../services/types";

const TopBar: React.FunctionComponent = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [searchResult, setSearchResult] = useState<Movie[]>([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const [search, setSearch] = useState<string>();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const searchGeneralServices = async (value: string) => {
    try {
      const res = await searchGeneral(value);
      if (res.data.Response) {
        setSearchResult(res.data.Search);
        setNotFound(false);
      } else {
        setNotFound(true);
      }

      setLoading(false);
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
  const handleSearch = () => {
    const value = (
      inputRef.current?.children[0].children[0].children[0] as HTMLInputElement
    ).value;
    setNotFound(true);
    if (value.trim() === "") {
      setActiveSearch(false);
    } else {
      setSearch(value);
      searchGeneralServices(value);
      setActiveSearch(true);
    }
  };
  const initSearch = () => {
    (
      inputRef.current?.children[0].children[0].children[0] as HTMLInputElement
    ).value = "movie";
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
          <Autocomplete
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Search Movies or Series'
                color='secondary'
                sx={{ width: "100%" }}
                onChange={handleSearch}
                onClick={initSearch}
                ref={inputRef}
              />
            )}
            ref={inputRef}
            options={
              searchResult
                ? searchResult?.map((opt) => opt.Title).slice(0, 2)
                : []
            }
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
            {movieCards?.length && !loading ? (
              movieCards
            ) : !notFound ? (
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
            ) : (
              <Box
                sx={{
                  color: "red",
                  fontSize: "20px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Loading
              </Box>
            )}
            {movieCards && (
              <Button
                sx={{
                  color: "red",
                  fontSize: "25px",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => navigate(`/explore?s=${search}`)}
              >
                Show More Results
              </Button>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default TopBar;
