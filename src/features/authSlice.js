import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const initialState = {
  authData: {},
  loggedIn: JSON.parse(localStorage.getItem("profile")) ? true : false,
};

export const socialLogin = createAsyncThunk("auth/login", async (user) => {
  const { token } = await user.getIdTokenResult();
  const response = await api.login(token);

  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUnauthorized(state, action) {
      localStorage.clear();
      state.authData = {};
      state.loggedIn = false;
    },
  },
  extraReducers: {
    [socialLogin.fulfilled]: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.authData = action.payload;
      state.loggedIn = true;
    },
  },
});

export const { setAuthorized, setUnauthorized } = authSlice.actions;

export default authSlice.reducer;
