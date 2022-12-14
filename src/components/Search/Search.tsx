import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, useMediaQuery } from "@mui/material";

import MovieCard from "../MovieCard/MovieCard";
import Notice from "../Notice/NoticeText";
import SkeletonCard from "../Skeleton/SkeletonCard";
import { SearchProps } from "./types";

const Search: React.FunctionComponent<SearchProps> = ({
  movies,
  loading,
  notFound,
  search,
  setActiveSearch,
}) => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:700px)", { noSsr: true });

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
        top: matches ? "90px" : "145px",
        width: "100%",
        height: matches ? "calc(100vh - 90px)" : "calc(100vh - 200px)",
        overflowY: "scroll",
        zIndex: 10,
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          flexDirection: !matches ? "column" : "row",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          display: "flex",
          gap: "20px",
          padding: "20px",
          height: "min-content",
        }}
      >
        {loading && <SkeletonCard amount={20} />}
        {movieCards?.length && !loading ? (
          movieCards
        ) : !notFound ? (
          <Notice text='There is no result' />
        ) : (
          <Notice text='Loading' />
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
