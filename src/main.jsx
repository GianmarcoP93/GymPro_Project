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
} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faPhone, faLocationDot, faClock);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
