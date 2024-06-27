import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { register } from "../../redux/authSlice";
import { clearMessage } from "../../redux/messageSlide";
//import SignIn from "./SignIn.jsx";
//import background from "../../assets/images/background.png";

const defaultTheme = createTheme();

export default function Register() {
  const [successful, setSuccessful] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const { message } = useSelector((state) => state.message);

  //const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  // useEffect(() => {
  //   if (successful && openLoginDialog) {
  //     console.log(successful, openLoginDialog);
  //     navigate("/", { replace: true });
  //   }
  // }, [successful, openLoginDialog, navigate]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    identityDocument: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "The first name must be alphabetic.")
      .test(
        "len",
        "The first name must be between 2 and 30 characters.",
        (val) =>
          val && val.toString().length >= 2 && val.toString().length <= 30,
      )
      .required("First name is required!"),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "The last name must be alphabetic.")
      .test(
        "len",
        "The last name must be between 2 and 30 characters.",
        (val) =>
          val && val.toString().length >= 2 && val.toString().length <= 30,
      )
      .required("Last name is required!"),
    username: Yup.string()
      .matches(/^[A-Za-z]+$/, "The username must be alphabetic.")
      .test(
        "len",
        "The username must be between 6 and 24 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 24,
      )
      .required("Username is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("Email is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 20 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 20,
      )
      .test(
        "contains-number",
        "The password must contain at least 1 number.",
        (val) => {
          // Check if the password contains at least one digit
          return /\d/.test(val);
        },
      )
      .required("Password is required!"),
    phone: Yup.string()
      .test(
        "len",
        "The phone number must be 10 characters.",
        (val) => val && val.toString().length === 10,
      )
      .test("is-numbers", "Phone number must only contain numbers.", (val) => {
        // Check if the phone number contains only digits
        return /^\d+$/.test(val);
      })
      .required("Phone number is required!"),
    address: Yup.string()
      .test(
        "len",
        "The address must be between 3 and 40 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 40,
      )
      .required("Address is required!"),
    identityDocument: Yup.string()
      .test(
        "len",
        "The identity document must be 12 characters.",
        (val) => val && val.toString().length === 12,
      )
      .required("Identity document is required!"),
  });

  const handleRegister = async (formValue) => {
    console.log(formValue);
    const {
      username,
      password,
      email,
      firstName,
      lastName,
      phone,
      address,
      identityDocument,
    } = formValue;

    try {
      await dispatch(
        register({
          username,
          password,
          email,
          firstName,
          lastName,
          phone,
          address,
          identityDocument,
        }),
      );
      console.log("Register success");
      console.log(message);
      // After successful registration
      setSuccessful(true);
      setOpenLoginDialog(true);
    } catch (error) {
      console.log("Register failed:", error.message);
      // Handle any errors if registration fails
      setSuccessful(false);
      setOpenLoginDialog(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          // backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 1,
              marginBottom: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleRegister}
            >
              {({ errors, touched }) => (
                <Form>
                  <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.firstName &&
                            Boolean(formik.errors.firstName)
                          }
                          helperText={
                            formik.touched.firstName && formik.errors.firstName
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.lastName &&
                            Boolean(formik.errors.lastName)
                          }
                          helperText={
                            formik.touched.lastName && formik.errors.lastName
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="username"
                          label="Username"
                          name="username"
                          autoComplete="username"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.username &&
                            Boolean(formik.errors.username)
                          }
                          helperText={
                            formik.touched.username && formik.errors.username
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email"
                          name="email"
                          autoComplete="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                          }
                          helperText={
                            formik.touched.password && formik.errors.password
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="phone"
                          label="Phone"
                          name="phone"
                          autoComplete="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.phone && Boolean(formik.errors.phone)
                          }
                          helperText={
                            formik.touched.phone && formik.errors.phone
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="address"
                          label="Address"
                          name="address"
                          autoComplete="address"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.address &&
                            Boolean(formik.errors.address)
                          }
                          helperText={
                            formik.touched.address && formik.errors.address
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="identityDocument"
                          label="Identity Document"
                          name="identityDocument"
                          autoComplete="identityDocument"
                          value={formik.values.identityDocument}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.identityDocument &&
                            Boolean(formik.errors.identityDocument)
                          }
                          helperText={
                            formik.touched.identityDocument &&
                            formik.errors.identityDocument
                          }
                        />
                      </Grid>
                    </Grid>
                    {message && (
                      <Typography
                        color={"error"}
                        fontSize={12}
                        fontStyle={"italic"}
                        sx={{ mt: 1 }}
                      >
                        **{message}
                      </Typography>
                    )}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, mb: 2 }}
                      onClick={formik.handleSubmit}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link
                          href="#"
                          variant="body2"
                          onClick={() => navigate("/login")}
                        >
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </Box>

      {/*<SignIn*/}
      {/*  open={openLoginDialog}*/}
      {/*  onClose={() => setOpenLoginDialog(false)}*/}
      {/*/>*/}
    </ThemeProvider>
  );
}
