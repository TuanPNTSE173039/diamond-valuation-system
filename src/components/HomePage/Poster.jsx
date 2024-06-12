import { Box } from "@mui/material";
import diamond from "../../assets/images/diamond_poster.png";

export default function Poster() {
  return (
      <Box
          sx={{
            position: 'relative',
            height: "560px",
            bgcolor: '#717171',
            marginTop: '60px',
              marginBottom:'30px'
          }}
      >
          <Box
              component="img"
              src={diamond}
              alt="Diamond"
              sx={{
                  position: "absolute",
                  width: "681px",
                  height: "555px",
                  top: "5px",
                  left: "695px",
              }}
          />

      </Box>
  );
}
