import React from "react";
import SignIn from "./SignIn";
import HomePageLeftcontainer from "./HomePageLeftcontainer";
import Socialicons from "./Socialicons";
import logo3 from "../assets/logo3.svg";

const Home = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="grid grid-rows-10 md:grid-rows-none md:grid-cols-2 home justify-center ">
      <div className="col-span-1 hidden md:block">
        <HomePageLeftcontainer />
      </div>
      <div className="md:hidden row-span-1 row-start-1 h-20  bg-[#605BFF] flex items-center">
        <div className="flex gap-1 p-6 ">
          <img src={logo3} alt="logo" className="" />
          <p className="text-2xl font-semibold self-center text-white ">
            Base
          </p>
        </div>
      </div>
      <div
        className={` flex justify-center align-middle md:col-span-1 ${
          isMobile ? "row-span-8 row-start-2 " : ""
        }`}
      >
        <SignIn />
      </div>
      <div className="flex md:hidden row-span-1 row-start-10 place-content-between justify-center pb-4">
        <Socialicons />
      </div>
    </div>
  );
};

export default Home;
