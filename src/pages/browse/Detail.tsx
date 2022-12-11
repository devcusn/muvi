import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { API } from "aws-amplify";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";

import Layout from "../../layout/Layout";
import * as mutations from "../../graphql/mutations";
import SkeletonMovieDetail from "../../components/Skeleton/Skeleton";
import Comment from "../../components/Comment/Comment";
import BasicModal from "../../components/Modal/BasicModal";

import { getById } from "../../services/movies/endpoints";
import { Movie } from "../../services/types";
import { sendMail } from "../../services/mail/endpoints";

const DetailPage: React.FunctionComponent = () => {
  const messageComponent = useRef(null);
  const mailInput = useRef(null);
  const [movie, setMovie] = useState<Movie>();
  const [favorite, setAddFavorite] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const movieID = searchParams.get("id");
  const [modal, setModal] = useState(false);
  const matches = useMediaQuery("(min-width:700px)", { noSsr: true });

  const addFavorite = async () => {
    setAddFavorite(true);
    try {
      await API.graphql({
        query: mutations.createFavoriteMovie,
        variables: { input: { movieID: movieID } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const addComment = async () => {
    try {
      await API.graphql({
        query: mutations.createMessages,
        variables: { input: { movieID: movieID, message: message } },
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

  const addMessage = (event: React.KeyboardEvent) => {
    const key = event.key;
    const text = (messageComponent.current as any).children[1].children[0]
      .value;
    setMessage(text);
    if (key === "Enter") {
      addComment();
      setMessage("");
      (messageComponent.current as any).children[1].children[0].value = "";
      setMessages((prev) => [...prev, message]);
    }
  };
  const mailProcess = async (e: any) => {
    e.preventDefault();
    const res = await sendMail(mailInput.current);
    console.log(res);
    setModal(false);
  };
  const messagesComponents = messages.map((m, index) => (
    <Comment message={m} key={index} />
  ));
  useEffect(() => {
    movieService();
    setAddFavorite(false);
  }, [movieService, searchParams]);

  return (
    <Layout>
      <Grid container direction='column' alignItems='center'>
        {movie && (
          <Box
            sx={{
              display: "flex",
              flexDirection: matches ? "row" : "column",
              justifyContent: "center",
              paddings: "20px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={movie.Poster} alt='movie poster' />
            </Box>
            <Box
              sx={{
                marginTop: !matches ? "20px" : "0px",
                padding: "0px 20px",
                width: !matches ? "100%" : "500px",
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
                <IconButton color='info' onClick={() => setModal(true)}>
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
        {!movie && <SkeletonMovieDetail />}
        <Box sx={{ width: "90%", maxWidth: "800px", marginTop: "20px" }}>
          <TextField
            sx={{ width: "100%" }}
            label='Add Your Comment'
            color='secondary'
            variant='standard'
            onKeyUp={addMessage}
            ref={messageComponent}
          />
        </Box>
        {messagesComponents}
      </Grid>
      <BasicModal open={modal} onClose={() => setModal(false)}>
        <form ref={mailInput} onSubmit={mailProcess} style={{ padding: "5px" }}>
          <input
            style={{ padding: "10px", width: "100%" }}
            type='email'
            name='user_email'
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <button
              style={{
                padding: "5px",
                width: "100px",
                border: "none",
                backgroundColor: "red",
                color: "#ffffff",
                borderRadius: "4px",
              }}
            >
              Send
            </button>
          </Box>
        </form>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}></Box>
      </BasicModal>
    </Layout>
  );
};

export default DetailPage;
