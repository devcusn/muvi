import { styled } from "@mui/material";

export const Card = styled("div")(
  (props: { type: "horizontal" | "vertical" }) => ({
    maxWidth: "fit-content",
    display: props.type === "vertical" ? "block" : "flex",
    height: props.type === "vertical" ? "fit-content" : "200px",
    backgroundColor: "#181818",
    cursor: "pointer",
    "& img ": {
      height: props.type === "vertical" ? "400px" : "200px",
    },
    "& div ": {
      "& p": {
        fontSize: props.type === "vertical" ? "15px" : "15px",
        width: props.type === "vertical" ? "100%" : "100px",
        textAlign: props.type === "vertical" ? "center" : "none",
      },
    },
  })
);

export const Img = styled("img")({
  height: "400px",
});

export const CardImg = styled("div")({});

export const CardTitle = styled("div")({
  textAlign: "center",
  padding: "20px",
});
