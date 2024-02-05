import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

const Socialicons = () => {
  return (
    <div className="flex gap-2 md:justify-between items-center"> 
    <div className="h-11 w-11 ">
      <FaGithub className="w-full h-full fill-[#858585] md:fill-[#FFFFFF]" />
    </div>
    <div className="h-11 w-11">
      <AiFillTwitterCircle className="w-full h-full fill-[#858585] md:fill-[#FFFFFF]" />
    </div>
    <div className="h-11 w-11">
      <FaLinkedin className="w-full h-full fill-[#858585] md:fill-[#FFFFFF]" />
    </div>
    <div className="h-11 w-11">
      <IoLogoDiscord className="w-full h-full fill-[#858585] md:fill-[#FFFFFF]" />
    </div>
    </div>
  )
}

export default Socialicons