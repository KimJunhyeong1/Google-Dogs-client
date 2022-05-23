import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const initialState = {
  byId: {},
  allIds: [],
};

export const getDocs = createAsyncThunk("docs/getDocs", async () => {
  const response = await api.fetchDocs();
  return response.data;
});

export const createDoc = createAsyncThunk("docs/addNewDoc", async (newDoc) => {
  const response = await api.createDoc(newDoc);
  return response.data;
});

const docsSlice = createSlice({
  name: "docs",
  initialState,
  reducers: {},
  extraReducers: {
    [getDocs.fulfilled]: (state, action) => {
      state.byId = {};
      state.allIds = [];

      action.payload.forEach((doc) => {
        const { _id, creator, content, createAt, title } = doc;
        state.byId[_id] = { _id, creator, content, createAt, title };
        state.allIds.push(_id);
      });
    },
    [getDocs.rejected]: (state, action) => {},
    [createDoc.fulfilled]: (state, action) => {
      const { _id, creator, content, createAt, title } = action.payload;
      state.byId[_id] = { _id, creator, content, createAt, title };
      state.allIds.push(_id);
    },
  },
});

export default docsSlice.reducer;
