import React from "react";
import { Box, Typography } from "@mui/material";

import { TitleProps } from "./types";

const Title: React.FunctionComponent<TitleProps> = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        padding: "20px 50px 20px 50px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {title && (
        <Typography sx={{ fontSize: "40px", marginRight: "20px" }}>
          {title}
        </Typography>
      )}

      {subtitle && (
        <Typography sx={{ fontSize: "17px" }}> {subtitle}</Typography>
      )}
    </Box>
  );
};

export default Title;
