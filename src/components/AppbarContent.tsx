import { motion } from "framer-motion";
import RightArrow from "./icons/RightArrow";
import Link from "next/link";

const AppbarContent = () => {
  return (
    <>
      <button>
        <Link href={"#pricing"}>Pricing</Link>
      </button>
      <button>
        <Link href={"#waitlist"}>Waitlist</Link>
      </button>
      <button>
        <Link href={"/Contact-Us"}>Contact</Link>
      </button>
      <motion.div
        whileHover={{ scaleX: 1.05 }}
        style={{ originX: 1 }}
        transition={{ duration: 0.2 }}
      >
        <button className=" flex bg-white hover:bg-[#141414] hover:text-white border border-white text-[#141414] rounded-full py-[0.7rem] md:px-6 px-2 transition ease-linear delay-150">
          <span>
            <Link
              href={
                "https://calendly.com/aniket-vem/talk-payments-with-xpay-pst"
              }
            >
              Talk&nbsp;to&nbsp;Founder&nbsp;
            </Link>
          </span>
          <RightArrow />
        </button>
      </motion.div>
    </>
  );
};

export default AppbarContent;
