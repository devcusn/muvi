import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";

import { MovieCardProps } from "./types";
import { Card, CardImg, Img, CardTitle } from "./MovieCard.styled";
import { ImageNotSupported } from "@mui/icons-material";

const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  title,
  url,
  imdbID,
  type = "vertical",
}) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/detail?id=${imdbID}`)} type={type}>
      <CardImg>
        {url !== "N/A" ? (
          <Img src={url} alt='movie film' />
        ) : (
          <Box
            sx={{
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <ImageNotSupported sx={{ color: "red", fontSize: "40px" }} />
          </Box>
        )}
      </CardImg>
      <CardTitle>
        <Typography sx={{ fontSize: "20px" }}>{title.slice(0, 40)}</Typography>
      </CardTitle>
    </Card>
  );
};

export default MovieCard;
