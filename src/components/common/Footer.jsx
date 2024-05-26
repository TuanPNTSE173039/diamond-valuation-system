import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 1440,
        height: 346,
        backgroundColor: "gray.100",
        borderRadius: 1,
        p: 3,
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: 117,
          left: 60,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        The world's largest diamond marketplace.
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: 182,
          left: 60,
          display: "flex",
          gap: 4,
        }}
      >
        <IconButton
          sx={{
            width: 30,
            height: 30,
            color: "#3b5998",
            "&:hover": { color: "#2d4373" },
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{
            width: 30,
            height: 30,
            color: "#E1306C",
            "&:hover": { color: "#C13584" },
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{
            width: 30,
            height: 30,
            color: "#1DA1F2",
            "&:hover": { color: "#0A95E8" },
          }}
        >
          <TwitterIcon />
        </IconButton>
      </Box>
      <Typography
        sx={{
          position: "absolute",
          top: 37,
          left: 509,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 15,
          color: "#3e6272",
          lineHeight: "24px",
        }}
      >
        FEATURES
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 79,
          left: 515,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        <a href="">Price Calculator</a>
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 122,
          left: 515,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        Search
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 167,
          left: 515,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        Lab Grown Diamonds
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 211,
          left: 515,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        Price &amp; Quality Check
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 37,
          left: 741,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 15,
          color: "#3e6272",
          lineHeight: "24px",
        }}
      >
        PRICES
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 79,
          left: 747,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        Diamond Prices
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 122,
          left: 747,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        0.7 Carat Prices
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 167,
          left: 747,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        1 Carat Prices
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 211,
          left: 747,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        2 Carat Prices
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 37,
          left: 972,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 15,
          color: "#3e6272",
          lineHeight: "24px",
        }}
      >
        MORE
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 78,
          left: 979,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        Guides
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 122,
          left: 979,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "28px",
        }}
      >
        Blog
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 169,
          left: 979,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        Partners
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 211,
          left: 979,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        Local Jewelers
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 37,
          left: 1203,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 15,
          color: "#3e6272",
          lineHeight: "24px",
        }}
      >
        COMPANY
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 78,
          left: 1210,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "26px",
        }}
      >
        About
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: 122,
          left: 1210,
          fontFamily: "Inter-Regular, Helvetica",
          fontSize: 16,
          color: "#9095a0",
          lineHeight: "28px",
        }}
      >
        Privacy
      </Typography>
    </Box>
  );
}
