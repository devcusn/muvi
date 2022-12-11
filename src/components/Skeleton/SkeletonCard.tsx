import React from "react";
import { Box, Skeleton } from "@mui/material";

import { range } from "../../app/helper/range";

const SkeletonCard: React.FunctionComponent<{ amount?: number }> = ({
  amount = 1,
}) => {
  const skeleton = range(amount).map((skeleton) => (
    <Skeleton
      variant='rectangular'
      width={200}
      height={300}
      sx={{ marginLeft: "20px" }}
    />
  ));
  return <Box sx={{ display: "flex" }}>{skeleton}</Box>;
};

export default SkeletonCard;
