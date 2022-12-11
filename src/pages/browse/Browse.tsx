import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../layout/Layout";
import MovieCard from "../../components/MovieCard/MovieCard";
import Title from "../../components/Title/Title";
import ScrollList from "../../components/ScrollList/ScrollList";
import SkeletonCard from "../../components/Skeleton/SkeletonCard";

import { getMovies, getSeries } from "../../services/movies/endpoints";
import { Movie } from "../../services/types";

const BrowsePage: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<Movie[]>([]);
  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  const moviesServices = async () => {
    try {
      const res = await getMovies("random");
      setMovies(res.data.Search);
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  };
  const seriesServices = async () => {
    try {
      const res = await getSeries("random");
      setSeries(res.data.Search);
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
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
      onClick={() => {
        navigate(`/detail?id=${movie.imdbID}`);
      }}
    />
  ));

  const Series = series.map((serie) => (
    <MovieCard
      title={serie.Title}
      url={serie.Poster}
      imdbID={serie.imdbID}
      key={serie.imdbID}
      onClick={() => {
        navigate(`/detail?id=${serie.imdbID}`);
      }}
    />
  ));

  return (
    <Layout>
      <Title title='Movies' subtitle='Recommended for you' />
      <ScrollList>{loader ? <SkeletonCard /> : Movies}</ScrollList>
      <Title title='Series' subtitle='Recommended for you' />
      <ScrollList>{loader ? <SkeletonCard /> : Series}</ScrollList>
    </Layout>
  );
};

export default BrowsePage;
