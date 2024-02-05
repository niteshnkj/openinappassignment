import React, { useState } from "react";
import MenuItems from "./MenuItems";
import logo2 from "../assets/logo2.svg";
import { IoMenu } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="md:grid md:grid-cols-12 bg-[#F8FAFF] ">
      <div
        className={`absolute rounded-tr-lg rounded-br-lg md:rounded-none md:col-span-2 bg-white ${
          isMenuVisible ? "block w-full" : "hidden"
        } md:block`}
      >
        <MenuItems onCloseMenu={closeMenu} />
      </div>
      <div className="col-span-10 col-start-3 flex flex-col gap-32">
        <div className="flex justify-between bg-white md:bg-transparent h-20 md:h-8">
          <div className="W-[1052px] h-8 pt-[50px] font-figtree text-2xl font-semibold hidden md:block">
            <p>Upload Csv</p>
          </div>
          <div className="flex items-center gap-10">
            <div className=" md:hidden h-6 w-6 self-center ml-2">
              <button onClick={toggleMenu}>
                <IoMenu className="h-10 w-10" />
              </button>
            </div>
            <div className="block md:hidden self-center">
              <div className="flex gap-4">
                <img src={logo2} alt="logo" />
                <p className="text-2xl font-semibold self-center">Base</p>
              </div>
            </div>
          </div>
          <div className="  md:pt-[50px] pr-4 flex gap-4 items-center ">
            <FaRegBell className="h-7 w-7" />
            <div>
              <FaRegUserCircle className="h-7 w-7" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center align-middle">
          <div className=" font-figtree text-black text-2xl font-semibold block md:hidden self-start pl-2">
            <p>Upload Csv</p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
