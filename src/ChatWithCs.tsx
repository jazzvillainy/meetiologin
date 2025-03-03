function ChatWithCs({
  icon,
  lineOne,
  lineTwo,
  lineThree,
}: {
  icon: React.ReactNode;
  lineOne: string;
  lineTwo: string;
  lineThree: string;
}) {
  return (
    <div className=" border-[rgba(0,0,0,0.11)] flex flex-col justify-between w-[310px] h-[236px] border-[1px] rounded-[8px] p-[16px]">
      <span className=" rounded-[8px]  border-rgba(0, 0, 0, 0.2)  w-[59px] h-[51px]">
        {icon}
      </span>
      <span>
        <span className="font-montserrat font-semibold text-[20px] leading-[24.38px] ">
          {lineOne}
        </span>
        <p className="font-montserrat font-semibold text-[15px] leading-[18.29px] tracking-normal text-[rgba(0,0,0,0.5)]">
          {lineTwo}
        </p>
        <p className="font-montserrat w-fit font-semibold text-[15px] leading-[18.29px] tracking-normal border-black border-b-[2px]">
          {lineThree}
        </p>
      </span>
    </div>
  );
}

export default ChatWithCs;
