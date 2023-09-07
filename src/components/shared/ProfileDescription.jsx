import axios from "axios";
import defaultImage from "../../assets/images/placeholders/noPicture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { serverURL } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setImage } from "../../store/dataSlice";

export const ProfileDescription = ({
  name,
  email,
  tel,
  isGym,
  subscription,
  list,
  dashboardError,
}) => {
  const id = useSelector((state) => state.data.me._id);
  const proPic = useSelector((state) => state.data.me.proPic);

  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState("");
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const notifyError = () => {
    toast.error(error, {
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
    toast.success("Immagine aggiornata con successo!", {
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

  const handleFileChange = async (event) => {
    setError(null);
    dashboardError(null);
    const file = event.target.files[0];
    if (file) {
      const form = new FormData();
      form.append("image", file);
      try {
        const response = await axios.post(
          `${serverURL}/api/uploadImage/${id}`,
          form
        );
        setAvatar(response.data.image);
        dispatch(setImage(response.data.image));
        notifySuccess();
      } catch (error) {
        dashboardError(true);
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (error) {
      notifyError();
    }
  }, [error]);

  const newImage = avatar || proPic;

  return (
    <>
      <div
        className={clsx(
          "flex p-8 bg-gray rounded-2xl justify-between gap-8",
          isGym && "p-6"
        )}
      >
        <div className="flex flex-col gap-4">
          <p className="text-secondary-100 font-bold text-2xl">{name}</p>
          {isGym && (
            <>
              <p className="w-fit font-montserrat flex items-center text-white-100 gap-3 font-normal">
                <FontAwesomeIcon
                  size="2xl"
                  icon="fa-solid fa-users"
                  style={{ color: "#46af4d" }}
                />
                Utenti registrati: {list}
              </p>
            </>
          )}
          {!isGym && (
            <>
              <div className="flex gap-2 flex-col dashboard-sm:flex-row dashboard-sm:justify-center dashboard-sm:items-center items-start dashboard-sm:gap-20 ">
                <div className="flex flex-col justify-center gap-2 h-full">
                  <Link
                    to="../card"
                    className="w-fit font-montserrat flex items-center text-white-100 gap-3 font-normal underline underline-offset-4 hover:text-secondary-300"
                  >
                    <span className="block">
                      <FontAwesomeIcon
                        icon="fa-solid fa-dumbbell"
                        size="xl"
                        style={{ color: "#ffffff" }}
                      />
                    </span>
                    Scheda
                  </Link>
                  <p className="flex items-center text-white-100 gap-3 break-words ">
                    <span className="block">
                      <FontAwesomeIcon
                        icon="fa-solid fa-calendar-xmark"
                        size="xl"
                        style={{ color: "#ffffff" }}
                      />
                    </span>
                    Scadenza abbonamento: {subscription}
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-2 h-full">
                  <p className="flex items-center text-white-100 gap-3 break-all">
                    <span className="block break-words w-min">
                      <FontAwesomeIcon
                        icon="fa-solid fa-envelope"
                        size="xl"
                        style={{ color: "#ffffff" }}
                      />
                    </span>
                    {email}
                  </p>
                  <p className="flex items-center text-white-100 gap-3">
                    <span className="block">
                      <FontAwesomeIcon
                        icon="fa-solid fa-phone"
                        size="xl"
                        style={{ color: "#ffffff" }}
                      />
                    </span>
                    {tel}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          className="w-24 h-24 rounded-full relative flex-shrink-0 self-center xs:self-start cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-camera"
            size="2xl"
            style={{
              color: "#ffffff",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(${-50}%, ${-50}%)`,
              display: clsx(hovered && "block", !hovered && "none"),
              zIndex: "10",
            }}
          />
          <div className="h-full w-full absolute top-0 left-0 z-10">
            <img
              src={newImage ? `${serverURL}/${newImage}` : defaultImage}
              alt="profile picture"
              className={clsx(
                "rounded-full z-10 relative h-full w-full",
                hovered && "opacity-20"
              )}
            />
            <input
              type="file"
              className="absolute h-full w-full top-0 left-0 z-20 opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
