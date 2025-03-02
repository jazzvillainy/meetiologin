import facebook from "./assets/logos_facebook.png"
import x from "./assets/Group.png"
import linkedIn from "./assets/skill-icons_linkedin.png"
function Footer() {
  return (
    <section className=" max-sm:hidden max-lg:pr-[12px] max-lg:px-4 lg:pl-[63px] max-lg:gap-[40px] lg:pr-[159px] pt-[46px] h-[399px] flex flex-col justify-between">
      <div className="flex w-full max-lg:flex-col max-lg:gap-10 max-lg:w-full">
        <div className="flex flex-col w-1/2 max-lg:w-full  max-lg:items-center">
          <span className="font-montserrat font-semibold text-3xl leading-[42.67px] text-teal-500">
            Meetio
          </span>
          <span className="mt-[10px]font-montserrat font-small text-[20px] ">
            Keep in touchnit with Meetio News and updates
          </span>
          <form className="mt-[16px] flex justify-between items-center pr-[4px] pl-[16px] w-[372px] h-[52px]  rounded-[46px] border-[1px] border-[#00000033] bg-white">
            <input className="" placeholder="Email..." type="text" />
            <button className="font-montserrat font-medium text-[16px] text-[rgba(255,255,255,1)] w-[126px]  h-[44px] top-[4px] left-[242px] rounded-[46px] pt-[8px] pr-[33px] pb-[8px] pl-[33px] gap-[10px] bg-teal-500">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col w-1/2 max-lg:items-center max-lg:w-full">
          <span className="flex max-lg:gap-10 max-lg:flex-col">
            <span className="w-[120px] flex flex-col font-inter font-medium text-[12px]  text-[rgba(0,0,0,0.5)]">
              <span className="flex mb-[12px] font-montserrat font-semibold text-[22px] text-[rgba(0,0,0,1)]">
                <span className="w-[120px]">About</span>
              </span>
              <span>Our Team</span>
              <span>About Meetio</span>
              <span>Company News</span>
              <span>Privacy at Meetio</span>
              <span>Investors</span>
              <span>Diversity & Inclusion</span>
              <span>Careers at Meetio</span>
            </span>
            <span className="lg:ml-[51px] mr-[38px] w-[181px] flex flex-col font-inter font-medium text-[12px]  text-[rgba(0,0,0,0.5)]">
              <span className="flex mb-[12px] font-montserrat font-semibold text-[22px] text-[rgba(0,0,0,1)]">
                <span className="w-[181px]  mr-[38px]">Resources</span>
              </span>
              <span>Meeting Features</span>
              <span>Collaboration Tools</span>
              <span>User Experience & Interaction</span>
              <span>Security & Privacy</span>
            </span>
            <span className="w-[89px] flex flex-col font-inter font-medium text-[12px] text-[rgba(0,0,0,0.5)]">
              <span className="flex mb-[12px] font-montserrat font-semibold text-[22px] text-[rgba(0,0,0,1)]">
                <span className="w-[89px]">Support</span>
              </span>
              <span>Account</span>
              <span>Support Center</span>
              <span>Contact Us</span>
              <span>Feedback</span>
            </span>
          </span>
        </div>
      </div>
      <div className="">
        <span>
          <hr />
        </span>
        <span className="mt-[20px] mb-[19px] flex justify-between font-inter font-medium text-[11px] leading-[13.31px] tracking-normal text-[rgba(0,0,0,0.5)]">
          <span>© 2025 Meetio. All rights reserved</span>
          <span className="flex justify-around">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Legal</p>
          </span>
          <span className="flex w-[58px] justify-between">
            <img src={linkedIn} alt="" />
            <img src={x} alt="" />
            <img src={facebook} alt="" />
          </span>
        </span>
      </div>
    </section>
  );
}

export default Footer;
