import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

import { TitleProps } from "./types";

const Title: React.FunctionComponent<TitleProps> = ({ title, subtitle }) => {
  const matches = useMediaQuery("(min-width:700px)", { noSsr: true });
  return (
    <Box
      sx={{
        padding: matches ? "20px 50px 20px 50px" : "20px 50px 20px 20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {title && (
        <Typography
          sx={{ fontSize: matches ? "40px" : "20px", marginRight: "20px" }}
        >
          {title}
        </Typography>
      )}

      {subtitle && (
        <Typography sx={{ fontSize: matches ? "17px" : "15px" }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default Title;
