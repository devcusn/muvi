import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { API } from "aws-amplify";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  TextField,
  Button,
  IconButton,
  Skeleton,
} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";

import * as mutations from "../../graphql/mutations";

import Layout from "../../layout/Layout";
import { getById } from "../../services/movies/endpoints";
import { Movie } from "../../services/types";

const DetailPage: React.FunctionComponent = () => {
  const [movie, setMovie] = useState<Movie>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [favorite, setAddFavorite] = useState(false);
  const movieID = searchParams.get("id");

  const addFavorite = async () => {
    setAddFavorite(true);
    try {
      const newFavorite = await API.graphql({
        query: mutations.createFavoriteMovie,
        variables: { input: { movieID: movieID } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const movieService = useCallback(async () => {
    const res = await getById(movieID);
    setMovie(res.data);
  }, [movieID]);

  useEffect(() => {
    movieService();
    setAddFavorite(false);
  }, [movieService, searchParams]);

  return (
    <Layout>
      <Grid container direction='column' alignItems='center'>
        {movie && (
          <Box sx={{ display: "flex", paddings: "20px" }}>
            <Box>
              <img src={movie.Poster} alt='movie poster' />
            </Box>
            <Box
              sx={{
                padding: "0px 20px",
                width: "500px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ height: "100%" }}>
                <Typography variant='h4'>{movie.Title}</Typography>
                <p>{movie.Plot}</p>
                <Box>
                  Type: {movie.Type} - Time: {movie.Runtime} - Released:{" "}
                  {movie.Released}
                </Box>
                <Box>Writer: {movie.Writer}</Box>
                <Box>IMDB Rating: {movie.imdbRating}</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <IconButton color='info'>
                  <Share />
                </IconButton>
                <Button
                  onClick={addFavorite}
                  startIcon={<Favorite />}
                  sx={{ color: favorite ? "#35c922" : "red" }}
                >
                  {favorite ? "Added" : "Add Favorite"}
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {!movie && (
          <Box sx={{ display: "flex" }}>
            <Skeleton variant='rectangular' width={210} height={400} />
            <Box sx={{ padding: "0px 20px" }}>
              <Skeleton variant='rectangular' width={400} height={60} />
              <Skeleton
                variant='rounded'
                width={400}
                height={330}
                sx={{ marginTop: "10px" }}
              />
            </Box>
          </Box>
        )}
        <Box sx={{ width: "100%", maxWidth: "800px", marginTop: "20px" }}>
          <TextField
            sx={{ width: "100%" }}
            label='Add Your Comment'
            color='secondary'
            variant='standard'
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "800px", marginTop: "20px" }}>
          <Box
            sx={{
              backgroundColor: "#202020",
              padding: "10px",
              borderRadius: "8px",
              marginTop: "4px",
            }}
          >
            <Avatar>U</Avatar>
          </Box>
        </Box>
      </Grid>
    </Layout>
  );
};

export default DetailPage;
