import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "20px 60px",
        backgroundColor: "#f1f0f0",
      }}
    >
      <Box sx={{ flex: "1 1 100%", maxWidth: "35%" }}>
        <Typography
          variant="body1"
          sx={{
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
            display: "flex",
            gap: 4,
            mt: 2,
          }}
        >
          <IconButton
            sx={{
              color: "#3b5998",
              "&:hover": { color: "#2d4373" },
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#E1306C",
              "&:hover": { color: "#C13584" },
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#1DA1F2",
              "&:hover": { color: "#0A95E8" },
            }}
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ flex: "1 1 auto", maxWidth: "50%" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 15,
            color: "#3e6272",
            lineHeight: "24px",
            mb: 1,
          }}
        >
          FEATURES
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 16,
            color: "#9095a0",
            lineHeight: "26px",
            mb: 1,
          }}
        >
          <a href="">Price Calculator</a>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 16,
            color: "#9095a0",
            lineHeight: "26px",
            mb: 1,
          }}
        >
          Search
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 16,
            color: "#9095a0",
            lineHeight: "26px",
            mb: 1,
          }}
        >
            Price &amp; Quality Check
        </Typography>

      </Box>
      <Box sx={{ flex: "1 1 auto", maxWidth: "25%" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 15,
            color: "#3e6272",
            lineHeight: "24px",
            mb: 1,
          }}
        >
          PRICES
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 16,
            color: "#9095a0",
            lineHeight: "26px",
            mb: 1,
          }}
        >
          Diamond Prices
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 16,
            color: "#9095a0",
            lineHeight: "26px",
            mb: 1,
          }}
        >
          1 Carat Prices
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 16,
            color: "#9095a0",
            lineHeight: "26px",
            mb: 1,
          }}
        >
          2 Carat Prices
        </Typography>

      </Box>
      <Box sx={{ flex: "1 1 auto", maxWidth: "25%" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 15,
            color: "#3e6272",
            lineHeight: "24px",
            mb: 1,
          }}
        >
          MORE
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 16,
            color: "#9095a0",
            lineHeight: "26px",
            mb: 1,
          }}
        >
            Blog
        </Typography>

      </Box>

      <Box sx={{ flex: "1 1 auto", maxWidth: "25%" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 15,
            color: "#3e6272",
            lineHeight: "24px",
            mb: 1,
          }}
        >
          COMPANY
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 16,
            color: "#9095a0",
            lineHeight: "26px",
            mb: 1,
          }}
        >
          About
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter-Regular, Helvetica",
            fontSize: 16,
            color: "#9095a0",
            lineHeight: "26px",
          }}
        >
          Rules
        </Typography>
      </Box>

    </Box>
  );
}
