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
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="settings" element={<Settings />} />
        <Route path="user" element={<UserDashboard />} />
        <Route path="admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;
