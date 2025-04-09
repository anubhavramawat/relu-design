import React from "react";
import home from "../assets/home.png";
import setting from "../assets/setting.png";
import favorite from "../assets/favorite.png";
import heart from "../assets/heart.png";
import message from "../assets/message.png";
import profile from "../assets/profile.png";
import notification from "../assets/notification.png";
import logout from "../assets/logout.png";

const Sidebar = () => {
  return (
    <div className="absolute top-[150px] left-[200px] w-[260px] h-[707px] bg-white rounded-[10px] opacity-100">
      <ul className="absolute top-[42px] left-[36px] flex flex-col gap-[40px]">
        {[
          { icon: home, label: "Home" },
          { icon: notification, label: "Notifications" },
          { icon: heart, label: "Shop" },
          { icon: message, label: "Converstion" },
          { icon: favorite, label: "Subscription" },
          { icon: profile, label: "My Profile" },
          { icon: setting, label: "Settings" },
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-[10px] cursor-pointer px-2 py-1 hover:border-l-4 border-transparent hover:border-[#3AC4A0] transition-all duration-200"
          >
            <img
              src={item.icon}
              alt={item.label.toLowerCase()}
              className="w-[16px] h-[17px] bg-no-repeat bg-left-top bg-transparent opacity-100"
            />
            <p
              className="text-[16px] leading-[19px] font-semibold text-[#101010] opacity-100"
              style={{ fontFamily: "Gilroy", fontStyle: "normal" }}
            >
              {item.label}
            </p>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <div className="absolute bottom-6 left-[36px] flex items-center gap-[10px] cursor-pointer hover:border-l-4 border-transparent hover:border-[#3AC4A0] px-2 py-1 transition-all duration-200">
        <img
          src={logout}
          alt="logout"
          className="w-[16px] h-[17px] bg-no-repeat bg-left-top bg-transparent opacity-100"
        />
        <p
          className="text-[16px] leading-[19px] font-semibold text-[#88C2BB]"
          style={{ fontFamily: "Gilroy", fontStyle: "normal" }}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
