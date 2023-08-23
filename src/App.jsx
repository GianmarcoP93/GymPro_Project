import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Settings } from "./Pages/Settings";
import { AdminDashboard } from "./Pages/AdminDashboard";
import LoginPage from "./Pages/LoginPage";
import { UserManagement } from "./Pages/UserManagement";
import RegisterPage from "./Pages/RegisterPage";
import { UserDashboard } from "./Pages/UserDashboard";
import { useSelector } from "react-redux";
import { ModalProfiloAdmin } from "./Pages/ModalProfiloAdmin";

const App = () => {
  const ProtectedUserRoute = ({ children }) => {
    const userToken = useSelector((state) => state.user.userToken);

    if (userToken === null) return <Navigate to="/login" />;
    return children;
  };

  const ProtectedAdminRoute = ({ children }) => {
    const adminToken = useSelector((state) => state.user.adminToken);

    if (adminToken === null) return <Navigate to="/login" />;
    return children;
  };

  const AlreadyLogged = ({ children }) => {
    const adminToken = useSelector((state) => state.user.adminToken);
    const userToken = useSelector((state) => state.user.userToken);

    if (userToken !== null) {
      return <Navigate to="/user" />;
    }

    if (adminToken !== null) {
      return <Navigate to="/admin/dashboard" />;
    }

    return children;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="login"
          element={
            <AlreadyLogged>
              <LoginPage />
            </AlreadyLogged>
          }
        />
        <Route path="register" element={<RegisterPage />} />
        <Route path="settings" element={<Settings />} />
        <Route
          path="user"
          element={
            <ProtectedUserRoute>
              <UserDashboard />
            </ProtectedUserRoute>
          }
        />
        <Route path="admin">
          <Route
            path="dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="manage"
            element={
              <ProtectedAdminRoute>
                <UserManagement />
              </ProtectedAdminRoute>
            }
          />
          <Route path="ModalProfiloAdmin" element={<ModalProfiloAdmin />} />
        </Route>
        <Route path="settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default App;
