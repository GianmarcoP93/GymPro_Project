import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    post: {},
    userSubData: []
  },
  reducers: {
    updateUserSub: (state, action) => {
      state.userSubData = [...state.userSubData, action.payload]
    }
  }
})

export const { setPost, updateUserSub } = userSlice.actions;
export default userSlice.reducer;