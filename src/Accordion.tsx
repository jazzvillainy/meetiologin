

function Accordion({ accordionOpen, setAccordionOpen }) {
  return (
    <div className="flex justify-between flex-col ">
      <button
        className="flex justify-between w-[inherit] pl-[17px]"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span className="font-montserrat max-md:text-[12px] text-start max-sm:text-[12px] font-semibold text-[24px] ">
            {/* question title */}
          1. How many participants can join a meeting?
        </span>

        {accordionOpen  ? (
          <span className="text-[24px] pr-[28px]">-</span>
        ) : (
          <span className="text-[24px] pr-[28px]">+</span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-[17px] pr-[166px]">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.orem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s.....
        </div>
      </div>
    </div>
  );
}

export default Accordion;
