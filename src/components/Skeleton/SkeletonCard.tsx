import React from "react";
import { Box, Skeleton } from "@mui/material";

const SkeletonCard: React.FunctionComponent = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Skeleton variant='rectangular' width={100} height={300} />
    </Box>
  );
};

export default SkeletonCard;
