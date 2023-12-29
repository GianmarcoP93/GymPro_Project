import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Settings } from "./Pages/Settings";
import { AdminDashboard } from "./Pages/AdminDashboard";
import LoginPage from "./Pages/LoginPage";
import { UserManagement } from "./Pages/UserManagement";
import RegisterPage from "./Pages/RegisterPage";
import { UserDashboard } from "./Pages/UserDashboard";
import { useSelector } from "react-redux";
import { PersonalCard } from "./components/shared/PersonalCard";
import { Faq } from "./Pages/Faq";
import { DataFetcher } from "./components/DataFetcher";
import { Assistance } from "./Pages/Assistance";

const App = () => {
  const ProtectedUserRoute = ({ children, isFaq }) => {
    const userToken = useSelector((state) => state.auth.userToken);

    if (!userToken) return <Navigate to="/login" />;

    return (
      <DataFetcher userToken={userToken} isFaq={isFaq}>
        {children}
      </DataFetcher>
    );
  };

  const ProtectedAdminRoute = ({ children, isFaq }) => {
    const adminToken = useSelector((state) => state.auth.adminToken);
    const adminId = useSelector((state) => state.auth.adminId);
    if (!adminToken) return <Navigate to="/login" />;

    return (
      <DataFetcher adminToken={adminToken} adminId={adminId} isFaq={isFaq}>
        {children}
      </DataFetcher>
    );
  };

  const AlreadyLogged = ({ children }) => {
    const adminToken = useSelector((state) => state.auth.adminToken);
    const userToken = useSelector((state) => state.auth.userToken);

    if (userToken) {
      return <Navigate to="/user/dashboard" />;
    }

    if (adminToken) {
      return <Navigate to="/admin/dashboard" />;
    }

    return children;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AlreadyLogged>
              <LandingPage />
            </AlreadyLogged>
          }
        />
        <Route
          path="login"
          element={
            <AlreadyLogged>
              <LoginPage />
            </AlreadyLogged>
          }
        />
        <Route path="register" element={<RegisterPage />} />
        <Route path="user">
          <Route
            path="dashboard"
            element={
              <ProtectedUserRoute>
                <UserDashboard />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedUserRoute>
                <Settings />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="card"
            element={
              <ProtectedUserRoute>
                <PersonalCard />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="assistance"
            element={
              <ProtectedUserRoute isFaq={true}>
                <Assistance />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="faq"
            element={
              <ProtectedUserRoute isFaq={true}>
                <Faq />
              </ProtectedUserRoute>
            }
          />
        </Route>
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
          <Route
            path="settings"
            element={
              <ProtectedAdminRoute>
                <Settings />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="assistance"
            element={
              <ProtectedAdminRoute isFaq={true}>
                <Assistance />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="faq"
            element={
              <ProtectedAdminRoute isFaq={true}>
                <Faq />
              </ProtectedAdminRoute>
            }
          />
        </Route>
        <Route path="faq" element={<Faq />} />
      </Routes>
    </>
  );
};

export default App;
