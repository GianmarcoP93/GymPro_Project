import { createSlice } from "@reduxjs/toolkit";

const dataSlice = () => {
  return createSlice({
    name: "data",
    initialState: {
      allUsers: [],
      me: null,
      userloading: false,
      allUsersLoading: false,
    },
    reducers: {
      setAllUsers: (state, action) => {
        state.allUsers = action.payload;
      },
      setMe: (state, action) => {
        state.me = action.payload;
      },
      setUserLoading: (state, action) => {
        state.userloading = action.payload;
      },
      setAllUsersLoading: (state, action) => {
        state.allUsersLoading = action.payload;
      },
    },
  });
};

export const { setAllUsers, setMe, setAllUsersLoading, setUserLoading } =
  dataSlice().actions;

export default dataSlice().reducer;
