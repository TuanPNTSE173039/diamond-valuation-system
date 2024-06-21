import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { login } from "../../redux/authSlice";
import { clearMessage, setMessage } from "../../redux/messageSlide";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import UICircularIndeterminate from "../UI/CircularIndeterminate";

export default function SignIn({ open, onClose }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    usernameOrEmail: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    usernameOrEmail: Yup.string().required("Username or Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (formValues) => {
    const { usernameOrEmail, password } = formValues;
    setLoading(true);

    try {
      await dispatch(login({ usernameOrEmail, password })).unwrap();
      setLoading(false);
      navigate("/", { replace: true });
      onClose(); // Close the dialog on successful login
    } catch (error) {
      setLoading(false);
      console.error("Login failed:", error.message);
      if (error.response && error.response.data.message) {
        const errorMessage = error.response.data.message;
        dispatch(setMessage(errorMessage)); // Set new error message
      }
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign in</DialogTitle>
      <DialogContent>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              margin: "10px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="usernameOrEmail"
                type="text"
                name="usernameOrEmail"
                label="Username or Email"
                value={formik.values.usernameOrEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.usernameOrEmail &&
                  Boolean(formik.errors.usernameOrEmail)
                }
                helperText={
                  formik.touched.usernameOrEmail &&
                  formik.errors.usernameOrEmail
                }
              />
              <TextField
                margin="normal"
                fullWidth
                id="password"
                name="password"
                type="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item>
                  {message && (
                    <Typography
                      color="error"
                      fontStyle="italic"
                      fontSize="13px"
                      sx={{ ml: 2 }}
                    >
                      **{message}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                {loading && <UICircularIndeterminate color={"secondary"} />}
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/auth/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
