import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { API, Auth } from "aws-amplify";
import { useMediaQuery } from "@mui/material";

import Layout from "../../layout/Layout";

import * as queries from "../../graphql/queries";
import { getById } from "../../services/movies/endpoints";
import { Movie } from "../../services/types";
import MovieCard from "../../components/MovieCard/MovieCard";
import Notice from "../../components/Notice/NoticeText";
import { Flex } from "../../components/Grid/Grid";
import SkeletonCard from "../../components/Skeleton/SkeletonCard";

const FavoritesPage: React.FunctionComponent = () => {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:700px)", { noSsr: true });

  const getFavorites = async () => {
    const userId = (await Auth.currentAuthenticatedUser()).username;
    try {
      const favorites = await API.graphql({
        query: queries.listFavoriteMovies,
        variables: { owner: userId },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      setLoader(false);
      setFavorites((favorites as any).data.listFavoriteMovies.items);
    } catch (err) {
      console.log(err);
    }
  };

  const getFilms = useCallback(async () => {
    for (const results of favorites) {
      const res = await getById((results as any).movieID);
      setMovies((prev) => {
        return [...prev, res.data];
      });
    }
  }, [favorites]);

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    getFilms();
  }, [favorites, getFilms]);

  const favoriteMovies = movies.map((serie) => (
    <MovieCard
      title={serie.Title}
      url={serie.Poster}
      imdbID={serie.imdbID}
      key={serie.imdbID + Math.random()}
      onClick={() => {
        navigate(`/detail?id=${serie.imdbID}`);
      }}
    />
  ));

  return (
    <Layout>
      <Flex matches={matches}>
        {loader && <SkeletonCard amount={20} />}
        {favorites ? (
          favoriteMovies
        ) : (
          <Notice text="You don't have any favorite movies" />
        )}
      </Flex>
    </Layout>
  );
};

export default FavoritesPage;
