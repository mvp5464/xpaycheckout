import Image from "next/image";
import Wrapper from "../Wrapper";
import RightArrow from "../icons/RightArrow";

const Appbar = () => {
  return (
    <div className=" bg-[#141414] text-white sticky top-0 ">
      <Wrapper>
        <div className=" flex justify-between items-center h-20 ">
          <div>
            <Image src={"/Logo.avif"} alt={"Logo"} width={100} height={50} />
          </div>
          <div className=" flex gap-4">
            <button>Pricing</button>
            <button>Waitlist</button>
            <button>Contact</button>
            <button>Blogs</button>
            <button className=" flex bg-white text-black rounded-full py-3 px-6">
              <span>Talk to founder</span> <RightArrow />
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Appbar;
