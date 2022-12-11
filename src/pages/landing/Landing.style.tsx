import { styled } from "@mui/material";

import image from "../../assets/img/background.png";

export const Background = styled("div")({
  backgroundImage: `url(${image})`,
  minHeight: "100vh",
});
