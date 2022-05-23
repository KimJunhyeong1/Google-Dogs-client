import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import authReducer from "../features/authSlice";
import docsReducer from "../features/docsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    docs: docsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
