import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationDot,
  faPhone,
  faClock,
  faEnvelope,
  faDumbbell,
  faCalendarXmark,
  faCamera,
  faUsers,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Provider, useDispatch } from "react-redux";
import store from "./store.js";
import { serverURL } from "./constants/constants.js";
import {
  setAllUsers,
  setMe,
  setUserLoading,
  setAllUsersLoading,
} from "./store/dataSlice.js";
import { useAxios } from "./hooks/useAxios.js";

library.add(
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faDumbbell,
  faCalendarXmark,
  faCamera,
  faUsers,
  faArrowRight
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
