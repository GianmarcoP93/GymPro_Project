import position from "../assets/images/icons/position.png";
import watch from "../assets/images/icons/watch.png";
import phone from "../assets/images/icons/phone.png";
import proPic from "../assets/images/gymPropicBig.png";

export const ProfileDescription = ({ name, email, address, isGym }) => {
  return (
    <div className="flex py-4 px-8 bg-gray rounded-2xl justify-between">
      <div className="flex flex-col gap-4">
        <p className="text-secondary-100 font-bold text-2xl">{name}</p>
        <p className="text-white-100">{email}</p>
        {address && (
          <p className="flex items-center text-white-100 gap-1">
            <span>
              <img src={position} />
            </span>
            {address}
          </p>
        )}
        {isGym && (
          <p className="flex items-center text-green gap-1 m-[-3px]">
            <span>
              <img src={watch} />
            </span>
            Aperto
          </p>
        )}
        <p className="flex items-center text-white-100 gap-1">
          <span>
            <img src={phone} />
          </span>
          +39 3333333333
        </p>
      </div>
      <div className="w-24 h-24 rounded-full">
        <img src={proPic} alt="profile picture" />
      </div>
    </div>
  );
};
