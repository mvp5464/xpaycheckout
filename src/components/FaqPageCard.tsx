"use client";
import { useState } from "react";
import PlusIcon from "./icons/PlusIcon";

const FaqPageCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <div className=" p-5 border-b border-[#c7d2fe] text-[#141414] ">
        <div className=" flex justify-between items-center">
          <span className="text-[1.35rem] py-3 ">{title}</span>
          <button onClick={() => setToggle((p) => !p)}>
            <PlusIcon
              className={` w-6 h-6  ${
                toggle === true ? "rotate-45" : "rotate-0"
              } `}
            />
          </button>
        </div>
        <div
          className={`text-lg pr-5 leading-snug ${
            toggle === true ? "block" : "hidden"
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default FaqPageCard;
