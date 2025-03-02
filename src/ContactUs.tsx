import img from "./assets/f072fb2d51d4c603b7e9808ddab8ccc8.jpeg";
import ChatWithCs from "./chatWithCs";
import img1 from "./assets/Frame 217.png";
import img2 from "./assets/Frame 218.png";
import img3 from "./assets/Frame 219.png";
import Faq from "./Faq";
import Footer from "./Footer";
// import { NavLink } from "react-router-dom";

function ContactUs() {  
  //   const FaqList: React.FC = () => {
  //     faqs.map((question) => {
  //       <Faq question={question} />;
  //     });
  //   };

  return (
    <section className="h-fit w-full bg-white">
      {/* image container div */}
      <div className="w-full flex justify-center items-center relative h-[509px]">
        <img
          src={img}
          className="object-cover z-0 w-[inherit] h-[inherit]"
          alt=""
        />
        <div className="absolute bg-black opacity-50 w-[inherit] h-[inherit]"></div>
        {/* floating text */}
        <span className=" absolute flex flex-col  items-center">
          <span className=" text-white font-montserrat font-bold max-sm:text-2xl text-4xl leading-[58.51px] tracking-normal">
            Contact Our Friendly Team
          </span>
          <p className="text-white font-montserrat max-sm:text-sm font-semibold text-base leading-[24.38px] tracking-normal">
            Let us know how we can help. Our customer <br /> service will
            provide quick and easy response.
          </p>
        </span>
      </div>
      {/* chat with cs */}
      <div className="px-[143px] max-lg:flex-col max-lg:gap-4 max-xl:px-[70px] gap-[2.5%] max-sm:flex-shrink max-lg:items-center py-[63px] flex justify-center w-full h-fit">
        <ChatWithCs
          icon={<img className="w-[59px] h-[51px]" src={img3} />}
          lineOne={"Chat with sales"}
          lineTwo={"Talk to our friendly sales team"}
          lineThree={"Sales@meetio.com"}
        />
        <ChatWithCs
          icon={<img className=" w-[59px] h-[51px]" src={img2} />}
          lineOne={"Chat with Support"}
          lineTwo={"We’re here to help"}
          lineThree={"Support@meetio.com"}
        />
        <ChatWithCs
          icon={<img className=" w-[59px] h-[51px] object-cover" src={img1} />}
          lineOne={"Call us"}
          lineTwo={"Mon - Fri from 8:00am - 4:00 pm"}
          lineThree={"0534-456-456"}
        />
      </div>
      {/* How can we help you */}
      <div className="h-[29px] mt-[33px] w-[inherit] text-center font-montserrat font-semibold text-[24px] leading-[29.26px]">
        How can we help you?
      </div>
      <div className="mt-[16px] w-full h-fit flex flex-col items-center">
        <input
          className="border-gray-400 border-[2px] rounded-md max-md:w-[80%] md:w-[65%] w-[840px] h-[72px]"
          type="text"
        />
      </div>
      <div className="w-full h-[44px] text-center mt-[320px] font-[Montserrat] font-bold text-[36px] leading-[43.88px]">
        Frequently Asked Questions
      </div>
      <div className="mt-[63px]  ml-[11%] max-md:justify-center flex gap-[16px] h-[30px] ">
        {/* <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 w-[50%]"
              : "text-white hover:text-blue-500 w-[50%]"
          }
          to={""}
        > */}
        <button className="text-[rgba(0,128,128,1)] font-montserrat font-semibold text-[24px] leading-[29.26px] max-sm:text-xl">
          Expand all
        </button>
        {/* </NavLink> */}
        <span>|</span>
        {/* <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 w-[50%]"
              : "text-white hover:text-blue-500 w-[50%]"
          }
          to={""}
        > */}
        <button className="font-montserrat font-semibold text-[24px] leading-[29.26px] max-sm:text-xl">
          Collapse all
        </button>
        {/* </NavLink> */}
      </div>
      <li className="mt-[35px] w-full h-fit gap-[32px] flex flex-col items-center">
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
      </li>
      ;
      <div className="flex font-montserrat font-semibold text-[20px] text-white">
        <button className="mt-[32px] w-[235px] h-[75px] bg-[#008080] mx-auto rounded-[44px] pt-[18px] pr-[47px] pb-[18px] pl-[47px] gap-[10px]">
          Load more
        </button>
      </div>
      <div className="mt-[80px] w-full h-[344px] max-sm:justify-center      text-white  max-sm:text-2xl bg-[#FFB901] flex flex-col items-center">
        <span className="font-montserrat text-center font-bold text-[32px] mt-[55px]">
          Ready to level up your online meetings?
        </span>
        <p className="mt-[22px] font-montserrat font-semibold  max-sm:text-lg text-[24px]">
          Get started with Meetio today
        </p>
        <button className="mt-[48px] w-[263px] h-[75px] font-montserrat font-medium text-[18px] rounded-[138px] pt-[19px] pr-[25px] pb-[19px] pl-[25px] bg-[#008080]">
          See Our Pricing Plans
        </button>
      </div>
      <Footer />
    </section>
  );
}

export default ContactUs;
