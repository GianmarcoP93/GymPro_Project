import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./store/dataSlice";
import authReducer from "./store/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
  },
});
