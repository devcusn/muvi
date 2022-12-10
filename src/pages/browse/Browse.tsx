import React, { useEffect, useState } from "react";

import Layout from "../../layout/Layout";
import MovieCard from "../../components/MovieCard/MovieCard";
import Title from "../../components/Title/Title";
import ScrollList from "../../components/ScrollList/ScrollList";

import { getMovies, getSeries } from "../../services/endpoints";
import { Movie } from "../../services/types";

const BrowsePage: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<Movie[]>([]);

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

  useEffect(() => {
    moviesServices();
    seriesServices();
  }, []);

  const Movies = movies.map((movie) => (
    <MovieCard
      title={movie.Title}
      url={movie.Poster}
      imdbID={movie.imdbID}
      key={movie.imdbID}
    />
  ));
  const Series = series.map((serie) => (
    <MovieCard
      title={serie.Title}
      url={serie.Poster}
      imdbID={serie.imdbID}
      key={serie.imdbID}
    />
  ));

  return (
    <Layout>
      <Title title='Movies' subtitle='Recommended for you' />
      <ScrollList>{Movies}</ScrollList>
      <Title title='Series' subtitle='Recommended for you' />
      <ScrollList>{Series}</ScrollList>
    </Layout>
  );
};

export default BrowsePage;
