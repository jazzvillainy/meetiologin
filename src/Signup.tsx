import img from "./assets/f072fb2d51d4c603b7e9808ddab8ccc8.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
// import { FaApple } from "react-icons/fa";
// import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    // Basic form validation
    if (!email.includes("@")) {
      setErrors((prev) => ({
        ...prev,
        email: 'Email must include "@"',
      }));
      return;
    }

    if (password.length < 8) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters long",
      }));
      return;
    }
    console.log("Form submitted:", { email, password });
    setEmail("")
    setPassword("")
    // Continue with form submission logic (e.g., API call)
  };

  return (
    <section className="xl:w-full lg:w-full xl:h-[1024px] lg:h-[100dvh] bg-white relative">
      <img
        className="object-cover w-full p-[2.5%] h-full"
        src={img} // Replace with actual image URL
        alt="Background"
      />
      <form
        onSubmit={handleSubmit}
        className="absolute top-0 xl:h-[1024px] lg:h-full justify-center items-center flex flex-col gap-4 bg-white xl:w-[48.8%] p-6"
      >
        <span className="w-[121px] h-[39px] font-inter font-semibold text-[32px] tracking-[0%]">
          Sign Up
        </span>
        <span className="w-[265px] h-[19px] font-inter font-medium text-[16px]">
          Already have an account?{" "}
          <a href="" className="text-[#2E56AD]">
            Log in
          </a>
        </span>

        {/* Email Input */}
        <span className="w-[491px]">
          <p className="w-[41px] h-[19px] font-inter font-medium text-[16px]">
            Email
          </p>
        </span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          type="email"
          value={email}
          className={`border-[1.2px] pl-2 placeholder-inter placeholder-font-medium placeholder-text-[14px] placeholder-gray-500 text-gray-400 ${
            errors.email ? "border-red-400" : "border-gray-400"
          } outline-none focus:border-blue-500 focus:border-[2px] hover:border-blue-500 hover:border-[2px] w-[491px] h-[71px] rounded-[8px] border-solid border-[#0000004D]`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}

        {/* Password Input */}
        <span className="w-[491px]">
          <p className="w-[41px] h-[19px] font-inter font-medium text-[16px]">
            Password
          </p>
        </span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters..."
          type="password"
          value={password}
          className={`border-[1.2px] pl-2 placeholder-inter placeholder-font-medium placeholder-text-[14px] placeholder-gray-500 text-gray-400  outline-none focus:"border-blue-500 ${
            errors.password ? "border-red-500" : "border-gray-400"
          } focus:border-[2px] hover:border-blue-500 hover:border-[2px] w-[491px] h-[71px] rounded-[8px] border-solid border-[#0000004D]`}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}

        {/* Sign Up Button */}
        <button className="w-[491px] h-[75px] font-inter font-semibold text-[18px] rounded-[48px] bg-[#008080] text-white pt-[11px] pr-[163px] pb-[11px] pl-[163px] gap-[10px]">
          Sign Up
        </button>

        {/* Terms of Service */}
        <span className="w-[317px] h-[30px] text-gray-500 font-inter font-medium text-[12px] leading-[14.52px] tracking-[0%] text-center">
          By continuing you agree to Meetio’s <br />
          <a href="" className="text-[#2E56AD]">
            Terms of Service
          </a>{" "}
        </span>

        {/* Or Divider */}
        <span className="text-gray-500 h-[19px] items-center flex gap-2 font-inter font-medium text-[16px] leading-[19.36px]">
          <hr className="w-[176px] border-[1px]" />
          <p>or</p>
          <hr className="w-[172px] border-[1px]" />
        </span>

        {/* Google and Facebook Buttons */}
        <button className="w-[491px] h-[75px] relative font-inter font-medium text-[16px] rounded-[43px] border-[1px]">
          <span className="w-[26px] h-[26px] absolute top-[21px] left-[103px]">
            <FcGoogle className="w-full h-full" />
          </span>{" "}
          Sign Up with Google
        </button>
        <button className="w-[491px] h-[75px] font-inter relative font-medium text-[16px] rounded-[43px] border-[1px]">
          <span className="w-[26px] h-[26px] absolute top-[21px] left-[103px]">
            <FaFacebook className="w-full text-blue-500 h-full" />
          </span>{" "}
          Sign Up with Facebook
        </button>
      </form>

      {/* Mobile Logo */}
      <span className="max-md:hidden text-white w-[231px] h-[78px] absolute top-[46%] right-[189px] z-50 font-montserrat font-bold text-[64px] leading-[78.02px] tracking-[0%]">
        Meetio
      </span>
    </section>
  );
};

export default Signup;
