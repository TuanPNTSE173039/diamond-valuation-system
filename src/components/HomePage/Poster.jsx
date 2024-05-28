import { Box } from "@mui/material";
import diamond from "../../assets/images/diamond_poster.png";

export default function Poster() {
  return (
      <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 560,
            bgcolor: '#717171',
            borderRadius: 4,
          }}
      >
        <Box
            sx={{
              position: 'absolute',
              width: 681,
              height: 555,
              top: 5,
              left: 5,
            }}
        >
            <img
                alt="Image"
                src={diamond}
            />
        </Box>
      </Box>
  );
}
