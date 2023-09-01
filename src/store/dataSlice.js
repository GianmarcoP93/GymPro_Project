import { createSlice } from "@reduxjs/toolkit";

const dataSlice = () => {
  return createSlice({
    name: "data",
    initialState: {
      allUsers: [],
      me: null,
      userLoading: false,
      allUsersLoading: false,
      image: "",
    },
    reducers: {
      setAllUsers: (state, action) => {
        state.allUsers = action.payload;
      },
      updateAllUsers: (state, action) => {
        state.allUsers.push(action.payload);
      },
      deleteUser: (state, action) => {
        state.allUsers = state.allUsers.filter(
          (user) => user._id != action.payload
        );
      },
      updateUserCard: (state, action) => {
        state.allUsers = state.allUsers.map((item) => {
          return item._id === action.payload.id
            ? { ...item, cardInfo: action.payload.card }
            : item;
        });
      },
      setImage: (state, action) => {
        state.image = action.payload;
      },
      setMe: (state, action) => {
        state.me = action.payload;
      },
      setUserLoading: (state, action) => {
        state.userLoading = action.payload;
      },
      setAllUsersLoading: (state, action) => {
        state.allUsersLoading = action.payload;
      },
    },
  });
};

export const {
  setAllUsers,
  setMe,
  setAllUsersLoading,
  setUserLoading,
  updateAllUsers,
  deleteUser,
  updateUserCard,
  setImage,
} = dataSlice().actions;

export default dataSlice().reducer;
