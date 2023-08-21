import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import store from "./store.js";

library.add(
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faDumbbell,
  faCalendarXmark,
  faCamera,
  faUsers
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
