import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import { getMovies, getRandom, getSeries } from "../../services/movies";
import Layout from "../../layout/Layout";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Movie } from "../../services/types";
import Title from "../../components/Title/Title";

const BrowsePage: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<Movie[]>([]);
  const [random, setRandom] = useState<Movie>();

  const moviesServices = async () => {
    try {
      const res = await getMovies("random");
      setMovies(res.data.Search);
    } catch (err) {
      console.log(err);
    }
  };
  const seriesServices = async () => {
    try {
      const res = await getSeries("random");
      setSeries(res.data.Search);
    } catch (err) {
      console.log(err);
    }
  };
  const randomServices = async () => {
    try {
      const res = await getRandom("random");
      setRandom(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    moviesServices();
    seriesServices();
    randomServices();
  }, []);
  console.log(random);
  const Movies = movies.map((movie) => (
    <MovieCard title={movie.Title} url={movie.Poster} imdbID={movie.imdbID} />
  ));
  const Series = series.map((serie) => (
    <MovieCard title={serie.Title} url={serie.Poster} imdbID={serie.imdbID} />
  ));
  return (
    <Layout>
      <Title title='Movies' subtitle='Recommended for you' />
      <Grid
        container
        justifyContent='space-around'
        gap='30px'
        padding='0px 20px'
      >
        {Movies}
      </Grid>
      <Title title='Series' subtitle='Recommended for you' />
      <Grid
        container
        justifyContent='space-around'
        gap='30px'
        padding='0px 20px'
      >
        {Series}
      </Grid>
    </Layout>
  );
};

export default BrowsePage;
