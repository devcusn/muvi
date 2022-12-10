import React from "react";
import { Box, Skeleton } from "@mui/material";

const SkeletonMovieDetail: React.FunctionComponent = () => {
  return (
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
  );
};

export default SkeletonMovieDetail;
