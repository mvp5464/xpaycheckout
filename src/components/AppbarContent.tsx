import { motion } from "framer-motion";
import RightArrow from "./icons/RightArrow";

const AppbarContent = () => {
  return (
    <>
      <button>Pricing</button>
      <button>Waitlist</button>
      <button>Contact</button>
      <motion.div
        whileHover={{ scaleX: 1.05 }}
        style={{ originX: 1 }}
        transition={{ duration: 0.2 }}
      >
        <button className=" flex bg-white hover:bg-[#141414] hover:text-white border border-white text-[#141414] rounded-full py-[0.7rem] md:px-6 px-2 transition ease-linear delay-150">
          <span>Talk&nbsp;to&nbsp;Founder&nbsp;</span> <RightArrow />
        </button>
      </motion.div>
    </>
  );
};

export default AppbarContent;
