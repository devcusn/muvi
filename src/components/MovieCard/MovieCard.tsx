import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";

import { MovieCardProps } from "./types";
import { Card, CardImg, Img, CardTitle } from "./MovieCard.styled";
import { ImageNotSupported } from "@mui/icons-material";

const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  title,
  url,
  type = "vertical",
  onClick,
}) => {
  const matches = useMediaQuery("(min-width:700px)", { noSsr: true });
  return (
    <Card onClick={onClick} type={type} responsive={matches}>
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
        <Typography sx={{ fontSize: "20px" }}>{title}</Typography>
      </CardTitle>
    </Card>
  );
};

export default MovieCard;
