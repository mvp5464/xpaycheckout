"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import RightArrow from "../icons/RightArrow";
import { useState } from "react";

const Appbar = () => {
  const [sidebarOpen, isSidebarOpen] = useState<boolean>(false);

  return (
    <div className=" bg-[#141414] text-[#ebebeb] w-full sticky top-0 z-10  ">
      <div className=" flex justify-between items-center h-20 md:h-24 blur-[.5px] max-w-[85%] mx-auto ">
        <div>
          <Image src={"/Logo.avif"} alt={"Logo"} width={90} height={50} />
        </div>
        <div className=" md:flex gap-6 hidden">
          <button>Pricing</button>
          <button>Waitlist</button>
          <button>Contact</button>
          <button>Blogs</button>
          <motion.div
            whileHover={{ scaleX: 1.05 }}
            style={{ originX: 1 }}
            transition={{ duration: 0.2 }}
          >
            <button className=" flex bg-white hover:bg-[#141414] hover:text-white border border-white text-[#141414] rounded-full py-[0.7rem] px-6 transition ease-linear delay-150">
              <span>Talk to Founder&nbsp;</span> <RightArrow />
            </button>
          </motion.div>
        </div>
        <div className=" md:hidden block">
          <button
            onClick={() => isSidebarOpen((p) => !p)}
            className="flex flex-col justify-center items-center"
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm ${
                sidebarOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-1 ${
                        sidebarOpen ? "opacity-0" : "opacity-100"
                      }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        sidebarOpen
                          ? "-rotate-45 -translate-y-1"
                          : "translate-y-0.5"
                      }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
