import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SignIn from "../Auth/SignIn";
import { logout } from "../../redux/authSlice";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/logo (1).png";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileEl, setProfileEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [showAppointmentDialog, setShowAppointmentDialog] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user: currentUser } = useSelector((state) => state.auth);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const openMenu = Boolean(anchorEl);
  const openProfileMenu = Boolean(profileEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setProfileEl(null);
  };

  const handleMenuItemClick = (text) => {
    setSelectedItem(text);
    handleClose();
    switch (text) {
      case "Diamond CheckInput":
        navigate("/check");
        break;
      case "Diamond Calculate":
        navigate("/calculate");
        break;
      case "Rules":
        navigate("/rules");
        break;
      case "HOME":
        navigate("/");
        break;
      case "ABOUT":
        navigate("/about");
        break;
      case "PRICES":
        navigate("/prices");
        break;
      case "BLOG":
        navigate("/blog");
        break;
      case "Appointment":
        if (!currentUser) {
          setShowAppointmentDialog(true);
        } else {
          navigate("/appointment");
        }
        break;
      case "Register":
        navigate("/register");
        break;
      case "Profile":
        navigate("/profile");
        break;
      case "Appointments":
        navigate("/appointments");
        break;
      case "Logout":
        dispatch(logout());
        navigate("/");
        break;
      default:
        break;
    }
  };

  const handleProfileClick = (event) => {
    setProfileEl(event.currentTarget);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 60px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 1000,
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          height: 45,
          width: 45,
          bgcolor: "white",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            display: "block",
            width: "auto",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>
      <Typography
        noWrap
        component="div"
        sx={{ ml: 1, fontWeight: 800, fontSize: 14, color: "#3e6272" }}
      >
        H&T Diamond
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", flex: 1, gap: 3 }}>
        <Button
          onClick={() => handleMenuItemClick("HOME")}
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
          onClick={() => handleMenuItemClick("ABOUT")}
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
            selected={selectedItem === "Diamond CheckInput"}
            onClick={() => handleMenuItemClick("Diamond CheckInput")}
          >
            Diamond Check
          </MenuItem>
          <MenuItem
            selected={selectedItem === "Diamond Calculate"}
            onClick={() => handleMenuItemClick("Diamond Calculate")}
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
          onClick={() => handleMenuItemClick("BLOG")}
          sx={{
            color: "#3e6272",
            textTransform: "none",
            fontSize: 16,
            "&:hover": {
              color: "#000",
            },
          }}
        >
          BLOG
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => handleMenuItemClick("Appointment")}
          variant="outlined"
          sx={{
            borderColor: "#98690c8a",
            color: "#98690c",
            fontSize: 16,
            borderRadius: 1,
            textTransform: "none",
            px: 2,
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
        {currentUser ? (
          <>
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
              <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
            </Button>
            <Menu
              anchorEl={profileEl}
              open={openProfileMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleMenuItemClick("Profile")}>
                <Box mr={1}>
                  <PermIdentityOutlinedIcon />
                </Box>
                Profile
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("Appointments")}>
                <Box mr={1}>
                  <AccountBoxOutlinedIcon />
                </Box>
                Appointments
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("Logout")}>
                <Box mr={1}>
                  <LogoutOutlinedIcon />
                </Box>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            {/*<Button*/}
            {/*  sx={{*/}
            {/*    color: "#3e6282",*/}
            {/*    textTransform: "none",*/}
            {/*    fontSize: 17,*/}
            {/*    "&:hover": {*/}
            {/*      color: "#000",*/}
            {/*    },*/}
            {/*  }}*/}
            {/*  onClick={() => handleMenuItemClick("Register")}*/}
            {/*>*/}
            {/*  Register*/}
            {/*</Button>*/}
            <Button
              onClick={handleDialogOpen}
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
              SIGN IN
            </Button>
            <Dialog open={openDialog} onClose={handleDialogClose}>
              <DialogContent>
                <SignIn open={openDialog} onClose={handleDialogClose} />
              </DialogContent>
            </Dialog>
            <Dialog
              open={showAppointmentDialog}
              onClose={() => setShowAppointmentDialog(false)}
            >
              <DialogContent sx={{ textAlign: "center" }}>
                <div>
                  <p>You need to sign in to create an Appointment!</p>
                  <Button
                    onClick={() => {
                      setShowAppointmentDialog(false);
                      handleDialogOpen();
                    }}
                  >
                    Sign In
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </>
        )}
      </Box>
    </Box>
  );
}
