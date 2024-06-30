// IMPORTS
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DialogTitle, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import CustomInput from "./CustomerInput.jsx";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  updateCustomerInformation,
  updateCustomerPassword,
} from "../../services/api.js"; // Import the update API functions

const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1",
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499",
  },
};

export default function ProfileCard(props) {
  const [user, setUser] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
    phone: props.phone,
    email: props.email,
    address: props.address,
    identityDocument: props.identityDocument,
    username: props.username,
    customerID: props.customerID,
    authID: props.authID,
  });

  const [originalUser] = useState(user);

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const fullName = `${user.firstName} ${user.lastName}`;

  const changeField = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const changePasswordField = (event) => {
    setPasswords({ ...passwords, [event.target.name]: event.target.value });
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // BUTTON STATES
  const [edit, update] = useState({
    required: true,
    disabled: true,
    isEdit: true,
  });

  const getChangedFields = () => {
    const changedFields = {};
    for (const key in user) {
      if (user[key] !== originalUser[key]) {
        changedFields[key] = user[key];
      }
    }
    return changedFields;
  };

  const handleUpdate = async () => {
    const changedFields = getChangedFields();
    try {
      await updateCustomerInformation(user.customerID, changedFields);
      toast.success("Customer information updated successfully!");
    } catch (error) {
      toast.error("Failed to update customer information.");
      console.error("Failed to update customer information", error);
    }
  };

  const handlePasswordUpdate = async () => {
    try {
      await updateCustomerPassword(user.authID, passwords);
      toast.success("Password updated successfully!");
      handleClose();
    } catch (error) {
      toast.error("Failed to update password.");
      console.error("Failed to update password", error);
    }
  };

  // EDIT -> UPDATE
  const changeButton = async (event) => {
    event.preventDefault();
    if (!edit.disabled) {
      await handleUpdate();
    }
    edit.disabled = !edit.disabled;
    edit.isEdit = !edit.isEdit;
    update({ ...edit });
  };

  return (
    <Card variant="outlined" sx={{ height: "730px", width: "96%" }}>
      <ToastContainer />
      {/* MAIN CONTENT CONTAINER */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* CARD HEADER START */}
        <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
          {/* PROFILE PHOTO */}
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar
              sx={{ width: 100, height: 100, mb: 1.5 }}
              src={props.avatar}
            />
          </Badge>
          <Typography variant="h6">{fullName}</Typography>
          <Typography>{user.username}</Typography>
        </Grid>

        <Grid item style={styles.details} sx={{ width: "100%" }}></Grid>
      </Grid>
      <CardContent
        sx={{
          p: 3,
          maxHeight: { md: "40vh" },
          textAlign: { xs: "center", md: "start" },
        }}
      >
        <FormControl fullWidth>
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            columnSpacing={5}
            rowSpacing={3}
          >
            <Grid item xs={6}>
              <CustomInput
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={changeField}
                title="First Name"
                dis={edit.disabled}
                req={edit.required}
              />
            </Grid>

            <Grid item xs={6}>
              <CustomInput
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={changeField}
                title="Last Name"
                dis={edit.disabled}
                req={edit.required}
              />
            </Grid>

            <Grid item xs={6}>
              <CustomInput
                id="phone"
                name="phone"
                value={user.phone}
                onChange={changeField}
                title="Phone Number"
                dis={edit.disabled}
                req={edit.required}
              />
            </Grid>

            <Grid item xs={6}>
              <CustomInput
                type="address"
                id="address"
                name="address"
                value={user.address}
                onChange={changeField}
                title="Address"
                dis={edit.disabled}
                req={edit.required}
              />
            </Grid>

            <Grid item xs={6}>
              <CustomInput
                type="identityDocument"
                id="identityDocument"
                name="identityDocument"
                value={user.identityDocument}
                onChange={changeField}
                title="Identity Document"
                dis={edit.disabled}
                req={edit.required}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomInput
                id="newEmail"
                name="newEmail"
                value={user.email}
                onChange={changeField}
                title="Email"
                dis={edit.disabled}
                req={edit.required}
              />
            </Grid>

            <Grid item xs={6}>
              <Button color="primary" onClick={handleClickOpen}>
                Change Password
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Change Password</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="oldPassword"
                    name="oldPassword"
                    label="Old Password"
                    type="password"
                    fullWidth
                    onChange={changePasswordField}
                  />
                  <TextField
                    margin="dense"
                    id="newPassword"
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth
                    onChange={changePasswordField}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handlePasswordUpdate}>Update</Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-end" }}
            item
            xs={6}
          >
            <Button
              sx={{ p: "1rem 2rem", my: 2, height: "3rem" }}
              component="button"
              size="large"
              variant="contained"
              color="secondary"
              onClick={changeButton}
            >
              {edit.isEdit === false ? "UPDATE" : "EDIT"}
            </Button>
          </Grid>
        </FormControl>
      </CardContent>
    </Card>
  );
}
