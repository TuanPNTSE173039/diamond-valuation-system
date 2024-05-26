import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileEl, setProfileEl] = useState(null);

  const openMenu = Boolean(anchorEl);
  const openProfileMenu = Boolean(profileEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClick = (event) => {
    setProfileEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setProfileEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: 1440,
        height: 101,
        backgroundColor: "white",
        borderRadius: 1,
        position: "relative",
        px: 6,
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontFamily: "Epilogue-Bold, Helvetica",
          fontWeight: "bold",
          color: "#171a1f",
          fontSize: 30,
          lineHeight: "44px",
          cursor: "pointer",
          position: "absolute",
          top: 30,
          left: 60,
        }}
      >
        Logo
      </Typography>
      <Box sx={{ display: "flex", gap: 3, ml: "auto", mr: 6 }}>
        {["HOME", "ABOUT"].map((item, index) => (
          <Button
            key={index}
            sx={{
              color: "#3e6272",
              textTransform: "none",
              fontSize: 16,
              "&:hover": {
                color: "#000",
              },
            }}
          >
            {item}
          </Button>
        ))}
        <Button
          onClick={handleClick}
          sx={{
            color: "#3e6272",
            textTransform: "none",
            fontSize: 16,
            "&:hover": {
              color: "#000",
            },
          }}
          endIcon={openMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          SERVICE
        </Button>
        <Menu anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Diamond Check</MenuItem>
          <MenuItem onClick={handleClose}>Diamond Valuation</MenuItem>
          <MenuItem onClick={handleClose}>Rules</MenuItem>
        </Menu>
        <Button
          sx={{
            color: "#3e6272",
            textTransform: "none",
            fontSize: 16,
            "&:hover": {
              color: "#000",
            },
          }}
        >
          PRICES
        </Button>
        <Button
          sx={{
            color: "#3e6272",
            textTransform: "none",
            fontSize: 16,
            "&:hover": {
              color: "#000",
            },
          }}
        >
          POST
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#98690c8a",
            color: "#98690c",
            fontSize: 16,
            borderRadius: 1,
            textTransform: "none",
            px: 3,
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
            "&:active": {
              backgroundColor: "#ddd",
            },
          }}
        >
          Appointment
        </Button>
        <Button
          sx={{
            color: "#3e6282",
            textTransform: "none",
            fontSize: 17,
            "&:hover": {
              color: "#000",
            },
          }}
        >
          Register
        </Button>
        <Button
          onClick={handleProfileClick}
          sx={{
            color: "#3e6272",
            minWidth: 50,
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
            "&:active": {
              backgroundColor: "#ddd",
            },
          }}
        >
          <PersonIcon sx={{ fontSize: 30 }} />
        </Button>
        <Menu anchorEl={profileEl} open={openProfileMenu} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
