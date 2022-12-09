import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { getMovies } from "../../services/movies";
import Layout from "../../layout/Layout";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Movie } from "../../services/types";

const BrowsePage: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const moviesServices = async () => {
    try {
      const res = await getMovies("random");
      setMovies(res.data.Search);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    moviesServices();
  }, []);

  const Movies = movies.map((movie) => (
    <MovieCard title={movie.Title} url={movie.Poster} />
  ));

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0px 40px",
        }}
      >
        {Movies}
      </Box>
    </Layout>
  );
};

export default BrowsePage;
