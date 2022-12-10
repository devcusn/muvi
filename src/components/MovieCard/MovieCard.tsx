import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { MovieCardProps } from "./types";

const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  title,
  url,
  imdbID,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ width: "300px", backgroundColor: "#181818", cursor: "pointer" }}
      onClick={() => {
        navigate(`/detail?id=${imdbID}`);
      }}
    >
      <Box>
        <img
          src={url}
          alt='movie film'
          style={{ width: "300px", height: "400px", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ textAlign: "center", padding: "20px", hegiht: "100px" }}>
        <Typography sx={{ fontSize: "20px" }}>{title.slice(0, 40)}</Typography>
      </Box>
    </Box>
  );
};

export default MovieCard;
