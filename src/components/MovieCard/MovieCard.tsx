import React from "react";
import { Box, Typography } from "@mui/material";
import { MovieCardProps } from "./types";

const MovieCard: React.FunctionComponent<MovieCardProps> = ({ title, url }) => {
  return (
    <Box sx={{ width: "400px" }}>
      <Box>
        <img src={url} alt='movie film' style={{ height: "400px" }} />
      </Box>
      <Box>
        <Typography sx={{ fontSize: "20px" }}>{title}</Typography>
      </Box>
    </Box>
  );
};

export default MovieCard;
