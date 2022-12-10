import React from "react";
import { Grid } from "@mui/material";
import { ScrollListProps } from "./types";

const ScrollList: React.FunctionComponent<ScrollListProps> = ({ children }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        overflowX: "scroll",
        gap: "20px",
        padding: "20px",
      }}
    >
      {children}
    </Grid>
  );
};
export default ScrollList;
