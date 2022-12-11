import React from "react";
import { Box, Skeleton } from "@mui/material";

import { range } from "../../app/helper/range";

const SkeletonComment: React.FunctionComponent<{ amount?: number }> = ({
  amount = 1,
}) => {
  const skeleton = range(amount).map((skeleton) => (
    <Skeleton
      variant='rectangular'
      sx={{ padding: "40px", maxWidth: "800px", width: "80%" }}
    />
  ));
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "space-around",
      }}
    >
      {skeleton}
    </Box>
  );
};

export default SkeletonComment;
