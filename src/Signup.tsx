import img from "./assets/f072fb2d51d4c603b7e9808ddab8ccc8.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";

function Signup() {
  return (
    // <div>
    <section className="xl:w-[100%] lg:w-[100%] xl:h-[1024px] lg:h-[100dvh] bg-green-900 relative">
      {/* <div className=" bg-black absolute flex xl:h-full  opacity-35 w-[inherit] h-[1099px]"></div> */}
      <img
          className="object-cover w-[inherit] h-[inherit] "
          src={img}
          alt=""
        />
      <form className="absolute top-0 xl:h-[1024px] gap-4 lg:w-[48.8%] lg:h-full justify-center items-center flex flex-col bg-white xl:w-[48.8%]">
        <span className="w-[121px] h-[39px] font-inter font-semibold text-[32px]  tracking-[0%]">
          Sign Up
        </span>
        <span className="w-[265px] h-[19px] font-inter font-medium text-[16px]">
          Already have an account?{" "}
          <a href="" className="text-[#2E56AD]">
            Log in
          </a>
        </span>
        <span className="w-[41px] h-[19px] font-inter font-medium text-[16px] leading-[19.36px] tracking-[0%]">
          Email
        </span>
        <input
          placeholder="example@gmail.com"
          type="Email"
          className="border-[1.2px] pl-2 placeholder-inter placeholder-font-medium placeholder-text-[14px] placeholder-gray-500 text-[gray-400] border-gray-400 outline-none focus:border-blue-500 focus:border-[2px] hover:border-blue-500 hover:border-[2px] w-[491px] h-[71px] rounded-[8px]  border-solid border-[#0000004D]"
        />
        <span className="w-[41px] h-[19px] font-inter font-medium text-[16px] ">
          Password
        </span>
        <input
          placeholder="At least 8 characters..."
          type="Password"
          className="border-[1.2px] pl-2 placeholder-inter placeholder-font-medium placeholder-text-[14px] placeholder-gray-500 text-[gray-400] border-gray-400 outline-none focus:border-blue-500 focus:border-[2px] hover:border-blue-500 hover:border-[2px] w-[491px] h-[71px] rounded-[8px]  border-solid border-[#0000004D]"
        />

        <button className="w-[491px] h-[75px] font-inter font-semibold text-[18px] rounded-[48px] bg-[#008080] text-white  pt-[11px] pr-[163px] pb-[11px] pl-[163px] gap-[10px]">
          Sign Up
        </button>
        <span className="w-[317px] h-[30px]  text-gray-500 font-inter font-medium text-[12px] leading-[14.52px] tracking-[0%] text-center">
          By continuing you agree to Meetio’s{" "} <br />
          <a href="" className="text-[#2E56AD]">
            Terms of Service
          </a>{" "}
        </span>
        <span className=" text-gray-500 h-[19px] items-center flex gap-2  font-inter font-medium text-[16px] leading-[19.36px]">
          <hr className="w-[176px] border-[1px]" />
          <p>or</p>
          <hr className="w-[172px] border-[1px]" />
        </span>
        <button className="w-[491px] h-[75px] relative font-inter font-medium text-[16px] rounded-[43px] border-[1px]">
          <span className="w-[26px] h-[26px] absolute top-[21px] left-[103px]">
            <FcGoogle className="w-full h-full" />
          </span>{" "}
          Sign Up with Google
        </button>
        <button className="w-[491px] h-[75px]  font-inter relative font-medium text-[16px] rounded-[43px] border-[1px]">
          <span className="w-[26px] h-[26px] absolute top-[21px] left-[103px]">
            <FaFacebook className="w-full text-blue-500 h-full" />
          </span>{" "}
          Sign Up FaceBook
        </button>
      </form>
      <span className=" md:hidden text-white w-[231px] h-[78px] absolute top-[46%] left-[189px] font-montserrat font-bold text-[64px] leading-[78.02px] tracking-[0%]">
        Meetio
      </span>
    </section>
    // </div>
  );
}

export default Signup;
