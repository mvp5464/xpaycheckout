"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import RightArrow from "../icons/RightArrow";

const Appbar = () => {
  return (
    <div className=" bg-[#141414] text-[#ebebeb] sticky top-0 z-10">
      <div className=" flex justify-between items-center h-24 blur-[.5px]  max-w-[54rem] mx-auto">
        <div>
          <Image src={"/Logo.avif"} alt={"Logo"} width={90} height={50} />
        </div>
        <div className=" flex gap-6">
          <button>Pricing</button>
          <button>Waitlist</button>
          <button>Contact</button>
          <button>Blogs</button>
          <motion.div
            whileHover={{ scaleX: 1.05 }}
            style={{ originX: 1 }}
            transition={{ duration: 0.2 }}
          >
            <button className=" flex bg-white hover:bg-[#141414] hover:text-white border border-white text-[#141414] rounded-full py-[0.8rem] px-6 transition ease-linear delay-150">
              <span>Talk to Founder&nbsp;</span> <RightArrow />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
