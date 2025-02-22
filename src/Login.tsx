import img from "./assets/f072fb2d51d4c603b7e9808ddab8ccc8.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function Login() {
  return (
    <section className="flex justify-center">
      <div className=" bg-black w-[1280px] relative h-[1099px]">
        <div className=" bg-black absolute opacity-35 w-[inherit] h-[1099px]"></div>
        <img
          className="object-cover w-[inherit] h-[inherit] "
          src={img}
          alt=""
        />
        <div className="bg-white w-[637px] h-[81%] absolute flex flex-col top-[84px] left-[606px] rounded-[8px]">
          <span className="w-[349px] h-[39px] absolute top-[52px] left-[144px] font-inter font-semibold text-[32px]  tracking-[0%]">
            Log in to your Account
          </span>
          <span className="w-[265px] h-[19px] absolute top-[103px] left-[187px] font-inter font-medium text-[16px]">
            New to Meetio?{" "}
            <a href="" className="text-[#2E56AD]">
              Create an account
            </a>
          </span>
          <span className="w-[41px] h-[19px] absolute top-[165px] left-[130px] font-inter font-medium text-[16px] leading-[19.36px] tracking-[0%]">
            Email
          </span>
          <input
            placeholder="Enter email"
            type="Email"
            className="border-[1.2px] pl-2 placeholder-inter placeholder-font-medium placeholder-text-[14px] placeholder-gray-500 text-[gray-400] border-gray-400 outline-none focus:border-blue-500 focus:border-[2px] hover:border-blue-500 hover:border-[2px] w-[380px] h-[54px] absolute top-[189px] left-[130px] rounded-[8px]  border-solid border-[#0000004D]"
          />
          <span className="w-[41px] h-[19px] absolute top-[260px] left-[130px] font-inter font-medium text-[16px] leading-[19.36px] tracking-[0%]">
            Password
          </span>
          <input
            placeholder="Enter password"
            type="Password"
            className="border-[1.2px] pl-2 placeholder-inter placeholder-font-medium placeholder-text-[14px] placeholder-gray-500 text-[gray-400] border-gray-400 outline-none focus:border-blue-500 focus:border-[2px] hover:border-blue-500 hover:border-[2px] w-[380px] h-[54px] absolute top-[284px] left-[130px] rounded-[8px]  border-solid border-[#0000004D]"
          />
          <span className="w-[120px] h-[17px] absolute top-[346px] left-[130px] font-inter font-medium text-[14px] leading-[16.94px] tracking-[0%]">
            <a href="" className="text-[#2E56AD]">
              {" "}
              Forgot password?
            </a>
          </span>
          <button className="w-[379px] h-[54px] font-inter font-semibold text-[18px] leading-[21.78px] tracking-[0%] bg-[#008080] text-white absolute top-[395px] left-[130px] rounded-[8px] pt-[11px] pr-[163px] pb-[11px] pl-[163px] gap-[10px]">
            Log In
          </button>
          <span className="w-[317px] h-[30px] absolute top-[457px] text-gray-500 left-[161px] font-inter font-medium text-[12px] leading-[14.52px] tracking-[0%] text-center">
            By logging in, you agree to Meetio’s{" "}
            <a href="" className="text-[#2E56AD]">
              Terms of Service
            </a>{" "}
            <br />
            and{" "}
            <a className="text-[#2E56AD]" href="">
              Privacy Statement
            </a>
          </span>
          <span className="w-[364px] text-gray-500 h-[19px] items-center flex gap-2 absolute top-[550px] left-[129px] font-inter font-medium text-[16px] leading-[19.36px]">
            <hr className="w-[176px] border-[1px]" />
            <p>or</p>
            <hr className="w-[172px] border-[1px]" />
          </span>
          <button className="w-[379px] h-[54px] absolute top-[610px] left-[130px] font-inter font-medium text-[16px] rounded-[43px] border-[1px]">
            <span className="w-[26px] h-[26px] absolute top-[14px] left-[50.5px]">
              <FcGoogle className="w-full h-full" />
            </span>{" "}
            Continue with Google
          </button>
          <button className="w-[379px] h-[54px] absolute top-[686px] left-[130px] font-inter font-medium text-[16px] rounded-[43px] border-[1px]">
            <span className="w-[26px] h-[26px] absolute top-[14px] left-[50.5px]">
              <FaFacebook className="w-full text-blue-500 h-full" />
            </span>{" "}
            Continue with Facebook
          </button>
          <button className="w-[379px] h-[54px] absolute top-[762px] left-[130px] font-inter font-medium text-[16px] rounded-[43px] border-[1px]">
            <span className="w-[26px] h-[26px] absolute top-[14px] left-[50.5px]">
              <FaApple className="w-full h-full" />
            </span>{" "}
            Continue with Apple
          </button>
          <span className="absolute flex items-center text-gray-500 gap-2 top-[832px] font-inter font-medium text-[12px] leading-[14.52px] tracking-[0%] left-[272px]">
            <input
              id="check"
              className="w-[15px] h-[14px] accent-black  rounded-[4px] "
              type="checkbox"
            />
            <label htmlFor="check">Stay signed in</label>
          </span>
        </div>
        <span className="text-white w-[231px] h-[78px] absolute top-[516px] left-[189px] font-montserrat font-bold text-[64px] leading-[78.02px] tracking-[0%]">
          Meetio
        </span>
      </div>
    </section>
  );
}

export default Login;
