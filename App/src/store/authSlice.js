import { createSlice } from "@reduxjs/toolkit";
import { internalMemory } from "../utility/internalMemory.mjs";

const userSlice = () => {
  const userToken = internalMemory.get("userToken") || null;
  const userId = internalMemory.get("userId") || null;
  const adminToken = internalMemory.get("adminToken") || null;
  const adminId = internalMemory.get("adminId") || null;

  return createSlice({
    name: "auth",
    initialState: {
      userToken: userToken,
      userId: userId,
      adminToken: adminToken,
      adminId: adminId,
      isExpiredError: false,
    },
    reducers: {
      login: (state, action) => {
        state.userToken = action.payload.token;
        state.userId = action.payload.id;
        internalMemory.save("userToken", action.payload.token);
        internalMemory.save("userId", action.payload.id);
      },
      adminLogin: (state, action) => {
        state.adminToken = action.payload.token;
        state.adminId = action.payload.id;
        internalMemory.save("adminToken", action.payload.token);
        internalMemory.save("adminId", action.payload.id);
      },
      logout: (state) => {
        state.userToken = null;
        state.userId = null;
        internalMemory.remove("userToken");
        internalMemory.remove("userId");
      },
      adminLogout: (state) => {
        state.adminToken = null;
        state.adminId = null;
        internalMemory.remove("adminToken");
        internalMemory.remove("adminId");
      },
      setIsExpiredError: (state, { payload }) => {
        state.isExpiredError = payload;
      },
      updateUserSub: (state, action) => {
        state.userSubData = [...state.userSubData, action.payload];
      },
    },
  });
};

export const {
  login,
  adminLogin,
  logout,
  adminLogout,
  updateUserSub,
  setIsExpiredError,
} = userSlice().actions;
export default userSlice().reducer;
