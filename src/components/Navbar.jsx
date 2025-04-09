import React from "react";
import "./Navbar.css";
import search from "../assets/Component32.png";
import filter from "../assets/Component39.png";

const Navbar = () => {
  return (
    <div>
      <div className="w-[260px] h-[80px] bg-white rounded-[10px] opacity-100 absolute top-[40px] left-[200px]">
        <div
          className="absolute top-[20px] left-[20px] text-left text-[32px] leading-[44px] font-normal text-[#101010] opacity-100"
          style={{ fontFamily: "Mongolian Baiti" }}
        >
          LOGO
        </div>
      </div>
      <div className="absolute top-[40px] left-[490px] w-[620px] h-[80px] bg-white rounded-[10px] flex items-center justify-between px-6 shadow-md">
        <div className="flex items-center gap-3">
          <img src={search} alt="Search Icon" className="w-[20px] h-[20px]" />
          <input
            type="text"
            placeholder="Search here..."
            className="outline-none text-gray-600 placeholder-gray-400 w-[400px]"
          />
        </div>
        <div className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium">
          <img src={filter} alt="Filter Icon" className="w-[20px] h-[20px]" />
          <span>Filters</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-[40px] left-[1140px] w-[260px] h-[80px] bg-[#88C2BB] rounded-[10px] flex items-center justify-center">
          <span className="absolute w-[120px] h-[19px] text-center text-white font-semibold text-[16px] leading-[19px] font-[Gilroy]">
            Become a seller
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
