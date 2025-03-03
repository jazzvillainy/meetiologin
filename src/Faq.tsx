import { useState } from "react";
import Accordion from "./Accordion";

type FAQ = {
  item: {question: string;
  answer: string;}
}

function Faq({item}:FAQ) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div
      className={
        accordionOpen
          ? `w-[77.8%] py-[25px] rounded-tl-[50px] rounded-tr-[16px] rounded-br-[16px] bg-[#00808033]`
          : `w-[77.8%]  rounded-[16px] py-[25px] shadow-[0px_4px_21.2px_-12px_rgba(0,0,0,0.25)]`
      }
    >
      <Accordion
        // allCollapse={allCollapsed}
          item={item}
        accordionOpen={accordionOpen}
        setAccordionOpen={setAccordionOpen}
      />
    </div>
  );
}

export default Faq;
