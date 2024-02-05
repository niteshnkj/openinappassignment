import logo2 from "../assets/logo2.svg";
import { PiSquaresFourFill } from "react-icons/pi";
import { LuBarChart2 } from "react-icons/lu";
import { HiOutlineTicket } from "react-icons/hi";
import { TiDocumentText } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";
import {
  IoNotifications,
  IoSettingsOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const MenuItems = ({ onCloseMenu }) => {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const handleMenuItemClick = (path) => {
    onCloseMenu();
    navigate(path);
    setActiveLink(path);
  };
  return (
    <div className="w-full md:w-[218px] h-[1047px] bg-white font-nunito text-[16px] font-semibold flex flex-col gap-16">
      <div className="flex justify-between md:align-middle md:absolute h-[42px] md:w-[111px] w-auto mx-6 mt-6 md:mx-0 md:mt-0 md:top-[50px] md:left-[56px] ">
        <div className="flex gap-2 md:gap-4 ">
          <img src={logo2} alt="logo" />
          <p className="text-2xl font-semibold self-center">Base</p>
        </div>
        <div className=" h-10 w-10 md:hidden self-end">
          <IoCloseOutline className="h-10 w-10" onClick={onCloseMenu} />
        </div>
      </div>
      <div className="absolute top-[142px] text-[16px]">
        <ul className="flex flex-col gap-4 text-[#030229]/50 w-[218px] cursor-pointer">
          <li className=" flex gap-[14px]">
            <div className="w-[53px] h-[48px] grid grid-cols-2 place-content-center">
              <PiSquaresFourFill className="h-6 w-6 col-span-1 col-start-2 justify-items-center" />
            </div>
            <p className="pt-3">Dashboard</p>
          </li>
          <li className="flex gap-[14px]">
            <div
              className={`w-[53px] h-[48px] ${
                activeLink === "/dashboard/upload"
                  ? "bg-gradient-to-r from-[#ACA9FF]/20"
                  : ""
              }  grid grid-cols-2 place-content-center`}
            >
              <LuBarChart2
                className={`h-6 w-6 col-span-1 col-start-2 justify-items-center ${
                  activeLink === "/dashboard/upload" ? "text-[#605BFF]" : ""
                } `}
              />
            </div>
            <p
              className={`pt-3 ${
                activeLink === "/dashboard/upload" ? "text-[#605BFF]" : ""
              } `}
              onClick={() => handleMenuItemClick("/dashboard/upload")}
            >
              Upload
            </p>
          </li>
          <li className="flex gap-[14px]">
            <div className="w-[53px] h-[48px] grid grid-cols-2 place-content-center">
              <HiOutlineTicket className="h-6 w-6 col-span-1 col-start-2 justify-items-center" />
            </div>
            <p className="pt-3">Invoice</p>
          </li>
          <li className="flex gap-[14px]">
            <div className="w-[53px] h-[48px] grid grid-cols-2 place-content-center">
              <TiDocumentText className="h-6 w-6 col-span-1 col-start-2 justify-items-center" />
            </div>
            <p className="pt-3">Schedule</p>
          </li>
          <li className="flex gap-[14px]">
            <div className="w-[53px] h-[48px] grid grid-cols-2 place-content-center">
              <FaCalendarAlt className="h-6 w-6 col-span-1 col-start-2 justify-items-center" />
            </div>
            <p className="pt-3">Calander</p>
          </li>
          <li className="flex gap-[14px]">
            <div className="w-[53px] h-[48px]  grid grid-cols-2 place-content-center">
              <IoNotifications className="h-6 w-6 col-span-1 col-start-2 justify-items-center" />
            </div>
            <p className="pt-3">Notification</p>
          </li>
          <li className="flex gap-[14px]">
            <div className="w-[53px] h-[48px] grid grid-cols-2 place-content-center">
              <IoSettingsOutline className="h-6 w-6 col-span-1 col-start-2 justify-items-center" />
            </div>
            <p className="pt-3">Settings</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;
