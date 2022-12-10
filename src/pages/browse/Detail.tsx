import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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

import Layout from "../../layout/Layout";
import { getById } from "../../services/endpoints";
import { Movie } from "../../services/types";
import { Favorite, Share } from "@mui/icons-material";

const DetailPage: React.FunctionComponent = () => {
  const [movie, setMovie] = useState<Movie>();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieID = searchParams.get("id");

  const movieService = async () => {
    const res = await getById(movieID);
    console.log(res);
    setMovie(res.data);
  };
  useEffect(() => {
    movieService();
  }, []);

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
                <Button startIcon={<Favorite />}>Add Favorite</Button>
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
