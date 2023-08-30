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
import { ModalProfiloAdmin } from "./Pages/ModalProfiloAdmin";
import { Faq } from "./Pages/Faq";
import { DataFetcher } from "./components/DataFetcher";
import { Assistance } from "./Pages/Assistance";

const App = () => {
  const ProtectedUserRoute = ({ children }) => {
    const userToken = useSelector((state) => state.auth.userToken);

    if (!userToken) return <Navigate to="/login" />;

    return <DataFetcher userToken={userToken}>{children}</DataFetcher>;
  };

  const ProtectedAdminRoute = ({ children }) => {
    const adminToken = useSelector((state) => state.auth.adminToken);
    const adminId = useSelector((state) => state.auth.adminId);

    if (!adminToken) return <Navigate to="/login" />;

    return (
      <DataFetcher adminToken={adminToken} adminId={adminId}>
        {children}
      </DataFetcher>
    );
  };

  const AlreadyLogged = ({ children }) => {
    const adminToken = useSelector((state) => state.auth.adminToken);
    const userToken = useSelector((state) => state.auth.userToken);

    if (userToken) {
      return <Navigate to="/user" />;
    }

    if (adminToken) {
      return <Navigate to="/admin/dashboard" />;
    }

    return children;
  };

  const FaqDataFetcher = ({ children }) => {
    const adminToken = useSelector((state) => state.auth.adminToken);
    const userToken = useSelector((state) => state.auth.userToken);

    if (adminToken) {
      return (
        <DataFetcher adminToken={adminToken} isFaq={true}>
          {children}
        </DataFetcher>
      );
    }
    if (userToken) {
      return <DataFetcher userToken={userToken}>{children}</DataFetcher>;
    }
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
        <Route path="card" element={<PersonalCard />} />
        <Route path="settings" element={<Settings />} />
        <Route
          path="assistance"
          element={
            <FaqDataFetcher>
              <Assistance />
            </FaqDataFetcher>
          }
        />
        <Route
          path="faq"
          element={
            <FaqDataFetcher>
              <Faq />
            </FaqDataFetcher>
          }
        />
      </Routes>
    </>
  );
};

export default App;
