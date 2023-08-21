import { useDispatch, useSelector } from "react-redux";
import { OrangeButton } from "../components/shared/OrangeButton";
import { Plans } from "../components/Plans";
import { ProfileDescription } from "../components/shared/ProfileDescription";
import { Sidebar } from "../components/shared/Sidebar";
import { UserBmiChart } from "../components/UserBmiChart";
import { UserSubscription } from "../components/UserSubscription";
import { useAxios } from "../hooks/useAxios";
import { serverURL } from "../constants/constants";
import { setPost } from "../store/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

export const AdminDashboard = () => {
  const post = useSelector((state) => state.user.post);
  const dispatch = useDispatch();

  const { error, update } = useAxios(`${serverURL}/api/users/register`, {
    method: "POST",
    data: post,
    headers: { "Content-Type": "application/json" },
  });

  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await update();

    dispatch(
      setPost({
        username: "",
        subscription: "",
        passNumber: "",
        email: "",
        tel: "",
        plan: "",
      })
    );

    setDidSubmit(true);
  };

  const notifyError = () => {
    toast.error(error.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifySuccess = () => {
    toast.success("Utente registrato con successo!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    if (error && didSubmit) {
      notifyError();
      setDidSubmit(false);
    } else if (!error && didSubmit) {
      notifySuccess();
      setDidSubmit(false);
    }
  }, [didSubmit]);

  return (
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

      <div className="flex p-6 gap-6">
        <Sidebar name="FlowGym" email="Flowgym@gmail.com" isGym={true} />
        <div className="flex flex-col flex-grow max-w-section gap-4 mx-auto">
          <ProfileDescription
            name="Palestra FlowGym"
            email="Flowgym@gmail.com"
            address="Via Pierre de Coubertin, 4, 20100 Milano MI"
            isGym={true}
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-10 rounded-2xl bg-gray gap-4"
          >
            <div className="flex justify-between gap-32">
              <UserSubscription />
              <Plans />
            </div>
            <OrangeButton
              text="Aggiungi utente"
              twProp="self-end"
              type="submit"
            />
          </form>
          <UserBmiChart />
        </div>
      </div>
    </>
  );
};
