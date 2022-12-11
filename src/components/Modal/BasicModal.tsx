import React from "react";
import { Box, Modal, Typography } from "@mui/material";

import { BasicModalProps } from "./types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fafafa",
  boxShadow: 24,
  p: 4,
};

const BasicModal: React.FunctionComponent<BasicModalProps> = ({
  children,
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default BasicModal;
