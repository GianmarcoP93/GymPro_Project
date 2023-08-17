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
    updateUserSub: (state, action) => {
      state.userSubData = [...state.userSubData, action.payload];
    },
  },
});

export const { login, logout, setPost, updateUserSub } = userReducer.actions;
export default userReducer.reducer;
