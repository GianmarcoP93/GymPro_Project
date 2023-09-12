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

  const handleError = (value) => {
    setError(value);
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
          <div className="flex p-6 gap-6 min-h-[100vh] h-full max-sm:flex-col max-dashboard:overflow-x-scroll scrollbar">
            <Sidebar isGym={false} />
            <div className="flex flex-col flex-grow max-w-section justify-between gap-4 mx-auto">
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
