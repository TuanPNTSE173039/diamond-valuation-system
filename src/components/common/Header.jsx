import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileEl, setProfileEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

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

  const handleMenuItemClick = (text) => {
    setSelectedItem(text);
    handleClose(); // Close menu after selection
    // Perform navigation based on the selected text here
    switch (text) {
      case "Diamond Check":
        navigate("/diamond-check");
        break;
      case "Diamond calculate":
        navigate("/diamond-calculate");
        break;
      case "Rules":
        navigate("/rules");
        break;
      case "HOME":
        navigate("/home");
        break;
      case "ABOUT":
        navigate("/about");
        break;
      case "PRICES":
        navigate("/prices");
        break;
      case "POST":
        navigate("/post");
        break;
      case "Appointment":
        navigate("/appointment");
        break;
      case "Register":
        navigate("/register");
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 60px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <img src={logo} alt="logo" style={{ width: 70, height: 60, margin: 0 }} />

      <Box sx={{ display: "flex", gap: 3, ml: "auto", alignItems: "center" }}>
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
          HOME
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
          ABOUT
        </Button>
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
          <MenuItem
            selected={selectedItem === "Diamond Check"}
            onClick={() => handleMenuItemClick("Diamond Check")}
          >
            Diamond Check
          </MenuItem>
          <MenuItem
            selected={selectedItem === "Diamond calculate"}
            onClick={() => handleMenuItemClick("Diamond calculate")}
          >
            Diamond Calculate
          </MenuItem>
          <MenuItem
            selected={selectedItem === "Rules"}
            onClick={() => handleMenuItemClick("Rules")}
          >
            Rules
          </MenuItem>
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
          onClick={() => handleMenuItemClick("Appointment")}
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
