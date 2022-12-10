import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";

import MovieCard from "../../components/MovieCard/MovieCard";
import Layout from "../../layout/Layout";

import { searchGeneral } from "../../services/endpoints";
import { Movie } from "../../services/types";
import { cssNameTransform } from "@aws-amplify/ui";

const ExplorePage: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loader, setloader] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const searchListService = useCallback(async () => {
    setloader(true);
    let searchValue = searchParams.get("s");
    const res = await searchGeneral(searchValue, page);

    if (res.data.Response) {
      if (res.data.Search) {
        setMovies((prev) => [...prev, ...res.data.Search]);
      }
    } else {
      setNotFound(true);
    }
    setloader(false);
  }, [page, searchParams]);

  const handleScroll = () => {
    const height = document.documentElement.scrollHeight;
    const top = document.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    if (!notFound) {
      if (innerHeight + top === height) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    searchListService();
  }, [page, searchListService]);

  useEffect(() => {
    setPage(1);
    setMovies([]);
  }, [location]);

  const movieCards = movies?.map((movie) => (
    <MovieCard
      title={movie.Title}
      url={movie.Poster}
      imdbID={movie.imdbID}
      key={movie.imdbID + Math.random()}
    />
  ));
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {movieCards}
      </Box>
      {loader && (
        <Box
          sx={{
            color: "red",
            fontSize: "30px",
            textAlign: "center",
            padding: "40px",
          }}
        >
          Loding
        </Box>
      )}
      {!notFound && !loader && (
        <Box
          sx={{
            color: "red",
            fontSize: "30px",
            textAlign: "center",
            padding: "40px",
          }}
        >
          Not Found
        </Box>
      )}
    </Layout>
  );
};

export default ExplorePage;
