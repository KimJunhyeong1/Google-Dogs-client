import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const initialState = { authData: {} };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthorized(state, action) {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.authData = action.payload;
    },
    setUnauthorized(state, action) {
      localStorage.clear();
      state.authData = {};
    },
  },
});

export const { setAuthorized, setUnauthorized } = authSlice.actions;

export default authSlice.reducer;
