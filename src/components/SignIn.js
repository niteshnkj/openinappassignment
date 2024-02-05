import { useGoogleLogin } from "@react-oauth/google";
import googleicon from "../assets/googleicon.svg";
import appleicon from "../assets/appleicon.svg";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const login = useGoogleLogin({
    onSuccess: () => navigate("/dashboard"),
    onError: () => navigate("/"),
  });

  const navigate = useNavigate();
  return (
    <div className="font-montserrat flex flex-col gap-10 md:gap-5 items-center">
      <div className="self-start p-6">
        <h1 className="font-bold text-3xl h-12 w-36 ">Sign In</h1>
        <p className="font-lato text-base font-normal">
          Sign in to your account
        </p>
      </div>
      <div className="flex gap-5">
        <button
          className="bg-white flex justify-center  gap-2 rounded-lg w-[153px] md:w-[198px] h-[32px] md:h-[34px]"
          onClick={() => login()}
        >
          <span className="pt-2 pl-2">
            <img src={googleicon} alt="google_icon" />
          </span>
          <p className="pt-2 text-[12px] w-[130px] h-[17px] text-[#858585]">
            Sign in with Google
          </p>
        </button>

        <button className="bg-white flex justify-center gap-2 rounded-lg w-[153px] md:w-[198px] h-[32px] md:h-[34px]">
          <span className="pt-2 pl-2">
            <img src={appleicon} alt="appleicon" />
          </span>
          <p className="pt-2 text-[12px] w-[130px] h-[17px] text-[#858585]">
            Sign in with Apple
          </p>
        </button>
      </div>
      <form className="flex flex-col items-center justify-center bg-white w-[328px]  md:w-[423px] h-[348px] rounded-[20px] font-lato">
        <div className="mb-4 flex flex-col gap-2">
          <div>
            <label className="text-16px">Email Address</label>
          </div>
          <div className="w-[277px] md:w-[357px] h-[44px] ">
            <input
              type="text"
              className="w-full h-full rounded-[10px] bg-[#F5F5F5] text-[16px] pl-4 outline-none"
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          <div>
            <label>Password</label>
          </div>
          <div className="w-[277px] md:w-[357px] h-[44px]">
            <input
              type="password"
              className="w-full h-full rounded-[10px] bg-[#F5F5F5] text-[16px] pl-4 outline-none"
            />
          </div>
        </div>
        <div className="mb-4 w-[277px] md:w-[357px] h-[44px]">
          <button className="text-[#346BD4] self-start">
            Forgot password?
          </button>
        </div>
        <div className="bg-[#605BFF] rounded-lg w-[277px] md:w-[357px] h-11 font-montserrat">
          <button className="text-[#F8FAFF] rounded-lg w-full h-full text-base font-bold">
            Sign In
          </button>
        </div>
      </form>

      <div className="flex flex-col md:flex-row justify-center items-center w-[423px] gap-6 md:gap-0 text-[16px]">
        <p className="">Don’t have an account?</p>
        <button className="text-[#346BD4]">Register here</button>
      </div>
    </div>
  );
};

export default SignIn;
