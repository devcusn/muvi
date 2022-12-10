import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

import MovieCard from "../MovieCard/MovieCard";
import { SearchProps } from "./types";

const Search: React.FunctionComponent<SearchProps> = ({
  movies,
  loading,
  notFound,
  search,
  setActiveSearch,
}) => {
  const navigate = useNavigate();

  const movieCards = movies?.map((movie) => (
    <MovieCard
      title={movie.Title}
      url={movie.Poster}
      type='horizontal'
      key={movie.imdbID}
      imdbID={movie.imdbID}
      onClick={() => {
        navigate(`/detail?id=${movie.imdbID}`);
        setActiveSearch(false);
      }}
    />
  ));

  return (
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
            onClick={() => {
              setActiveSearch(false);
              navigate(`/explore?s=${search ? search : "movie"}`, {
                replace: true,
              });
            }}
          >
            Show More Results
          </Button>
        )}

        <Button
          sx={{
            color: "red",
            fontSize: "25px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => setActiveSearch(false)}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default Search;
