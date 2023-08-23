import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Settings } from "./Pages/Settings";
import { AdminDashboard } from "./Pages/AdminDashboard";
import LoginPage from "./Pages/LoginPage";
import { UserManagement } from "./components/UserManagement";
import RegisterPage from "./Pages/RegisterPage";
import { UserDashboard } from "./Pages/UserDashboard";
import { useSelector } from "react-redux";
import { PersonalCard } from "./components/shared/PersonalCard";

const App = () => {
  const ProtectedRoute = ({ children }) => {
    const token = useSelector((state) => state.user.token);

    if (token === null) return <Navigate to="/login" />;
    return children;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="settings" element={<Settings />} />
        <Route
          path="user"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="admin">
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage" element={<UserManagement />} />
        </Route>
        <Route path="card" element={<PersonalCard />} />
      </Routes>
    </>
  );
};

export default App;
