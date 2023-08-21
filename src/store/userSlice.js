import { createSlice } from "@reduxjs/toolkit";
import { internalMemory } from "../utility/internalMemory.mjs";

const userReducer = createSlice({
  name: "user",
  initialState: {
    token: internalMemory.get("token") || null,
    user: internalMemory.get("user") || null,
    post: {
      username: "",
      subscription: "",
      passNumber: "",
      email: "",
      tel: "",
      plan: "",
    },
    data: [],
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      internalMemory.save("token", action.payload.token);
      internalMemory.save("user", action.payload.user);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      internalMemory.remove("token");
      internalMemory.remove("user");
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { login, logout, setPost, setData } = userReducer.actions;
export default userReducer.reducer;
