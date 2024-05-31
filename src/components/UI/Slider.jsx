import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `{value}`;
}

export default function UISilder() {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        aria-label="Always visible"
        defaultValue={1}
        getAriaValueText={valuetext}
        step={0.01}
        valueLabelDisplay="on"
        max={5}
      />
    </Box>
  );
}
