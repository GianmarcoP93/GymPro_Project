import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store/userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
