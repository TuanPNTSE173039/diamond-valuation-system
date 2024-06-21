import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service.js";
import { setMessage } from "./messageSlide.js";

const user = JSON.parse(localStorage.getItem("auth"))?.userInformation;

export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      username,
      password,
      email,
      firstName,
      lastName,
      phone,
      address,
      identityDocument,
    },
    thunkAPI,
  ) => {
    try {
      const response = await AuthService.register(
        username,
        password,
        email,
        firstName,
        lastName,
        phone,
        address,
        identityDocument,
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ usernameOrEmail, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(usernameOrEmail, password);
      return { user: data.userInformation };
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await AuthService.logout();
    return null;
  } catch (error) {
    const message =
      error?.response?.data?.message || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.error = action.payload; // Add error to state
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

const { reducer } = authSlice;
export default reducer;
