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
} from "../../services/api.js";
import * as Yup from "yup";
import { useFormik } from "formik";

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
  errorText: {
    color: "red",
    fontSize: "0.75rem", // Smaller font size
    fontStyle: "italic", // Italic font style
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

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    identityDocument: Yup.string().required("Identity document is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const [originalUser] = useState(user);

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const fullName = `${user.firstName} ${user.lastName}`;

  const changeField = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    formik.setFieldValue(name, value); // Update Formik values
    formik.setFieldTouched(name, true); // Mark field as touched
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
    console.log("Changed fields:", JSON.stringify(changedFields, null, 2));
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
      await formik.handleSubmit();
    }
    edit.disabled = !edit.disabled;
    edit.isEdit = !edit.isEdit;
    update({ ...edit });
  };

  const formik = useFormik({
    initialValues: {
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      phone: props.phone || "",
      email: props.email || "",
      address: props.address || "",
      identityDocument: props.identityDocument || "",
    },
    validationSchema,
    onSubmit: handleUpdate,
  });

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
                onBlur={formik.handleBlur}
                title="First Name"
                dis={edit.disabled}
                req={edit.required}
                error={formik.touched.firstName && !!formik.errors.firstName}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>

            <Grid item xs={6}>
              <CustomInput
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={changeField}
                onBlur={formik.handleBlur}
                title="Last Name"
                dis={edit.disabled}
                req={edit.required}
                error={formik.touched.lastName && !!formik.errors.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>

            <Grid item xs={6}>
              <CustomInput
                id="phone"
                name="phone"
                value={user.phone}
                onChange={changeField}
                onBlur={formik.handleBlur}
                title="Phone Number"
                dis={edit.disabled}
                req={edit.required}
                error={formik.touched.phone && !!formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>

            <Grid item xs={6}>
              <CustomInput
                type="address"
                id="address"
                name="address"
                value={user.address}
                onChange={changeField}
                onBlur={formik.handleBlur}
                title="Address"
                dis={edit.disabled}
                req={edit.required}
                error={formik.touched.address && !!formik.errors.address}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>

            <Grid item xs={6}>
              <CustomInput
                type="identityDocument"
                id="identityDocument"
                name="identityDocument"
                value={user.identityDocument}
                onChange={changeField}
                onBlur={formik.handleBlur}
                title="Identity Document"
                dis={edit.disabled}
                req={edit.required}
                error={
                  formik.touched.identityDocument &&
                  !!formik.errors.identityDocument
                }
                helperText={
                  formik.touched.identityDocument &&
                  formik.errors.identityDocument
                }
              />
            </Grid>
            <Grid item xs={6}>
              <CustomInput
                id="email"
                name="email"
                value={user.email}
                onChange={changeField}
                onBlur={formik.handleBlur}
                title="Email"
                dis={edit.disabled}
                req={edit.required}
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
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
