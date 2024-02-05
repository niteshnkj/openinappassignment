import React from "react";
import logo from "../assets/logo.svg";
import Socialicons from "./Socialicons";

const HomePageLeftcontainer = () => {
  return (
    <div className="flex flex-col md:justify-between items-center h-[100vh] ">
      <div className="pl-[61px] pt-[54.32px] self-start">
        <div className="bg-white w-[80px] h-[80px] rounded-full flex items-center justify-center self-start ">
          <img src={logo} alt="Logo_Image" className="block md:absolute " />
        </div>
      </div>
      <div className="md:w-[205px] md:h-[88px] font-montserrat md:text-[72px] font-bold text-white ">
        <p>BASE</p>
      </div>
      <div className="col-span-3  w-[300px] h-[48px]  pb-[67px] hidden md:block">
        <Socialicons />
      </div>
    </div>
  );
};

export default HomePageLeftcontainer;
