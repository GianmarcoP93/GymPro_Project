import proPic from "../assets/images/gymPropicBig.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProfileDescription = ({ name, email, address, isGym }) => {
  return (
    <div className="flex py-4 px-8 bg-gray rounded-2xl justify-between">
      <div className="flex flex-col gap-4">
        <p className="text-secondary-100 font-bold text-2xl">{name}</p>
        <div className="flex gap-20 justify-center items-center">
          <div className="flex flex-col justify-center gap-2 h-full">
            {isGym && (
              <p className="flex items-center text-green gap-3 ml-[-3px]">
                <span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-clock"
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </span>
                Aperto
              </p>
            )}
            {address && (
              <p className="flex items-center text-white-100 gap-3">
                <span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-location-dot"
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </span>
                {address}
              </p>
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 h-full">
            <p className="flex items-center text-white-100 gap-3">
              <span>
                <FontAwesomeIcon
                  icon="fa-solid fa-envelope"
                  size="xl"
                  style={{ color: "#ffffff" }}
                />
              </span>
              {email}
            </p>
            <p className="flex items-center text-white-100 gap-3">
              <span>
                <FontAwesomeIcon
                  icon="fa-solid fa-phone"
                  size="xl"
                  style={{ color: "#ffffff" }}
                />
              </span>
              +39 3333333333
            </p>
          </div>
        </div>
      </div>
      <div className="w-24 h-24 rounded-full">
        <img src={proPic} alt="profile picture" />
      </div>
    </div>
  );
};
