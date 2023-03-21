import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://app.1inch.io/#/1/simple/swap/ETH/DAI';
      }}
    >
       Launch dApp
      <KeyboardArrowRightIcon />
    </Button>
  );
};

export default LaunchButton;