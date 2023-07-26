import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Settings } from "./Pages/Settings";
import { UserDashboard } from "./Pages/UserDashboard";
import { AdminDashboard } from "./Pages/AdminDashboard";

const App = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;
