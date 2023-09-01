import { useSelector } from "react-redux";
import { ProfileDescription } from "../components/shared/ProfileDescription";
import { Sidebar } from "../components/shared/Sidebar";
import { UserBmiChart } from "../components/UserBmiChart";
import ResponsiveNavbar from "../components/shared/ResponsiveNavbar";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

export const UserDashboard = () => {
  const data = useSelector((state) => state.data.me);
  const loading = useSelector((state) => state.data.userLoading);

  const [error, setError] = useState(false);

  const handleError = () => {
    setError(!error);
  };

  return (
    <>
      {!loading && data && (
        <>
          <ToastContainer
            toastStyle={{
              backgroundColor: error ? "red" : "#F87A2C",
            }}
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <div className="flex p-6 gap-6 min-h-[100vh] h-full max-sm:flex-col">
            <Sidebar isGym={false} />
            <div className="flex flex-col flex-grow max-w-section justify-between gap-4 mx-auto max-sm:mx-0">
              <ProfileDescription
                name={data.username}
                email={data.email}
                subscription={new Date(
                  data && data.subscriptionExp
                ).toLocaleDateString()}
                isGym={false}
                tel={data.tel}
                proPic={data && data.proPic}
                dashboardError={handleError}
              />

              <UserBmiChart />
            </div>
          </div>
          <ResponsiveNavbar />
        </>
      )}
    </>
  );
};
