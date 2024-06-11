import Image from "next/image";
import WaitlistButton from "../WaitlistButton";
import Wrapper from "../Wrapper";

const HeroSection = () => {
  return (
    <div className=" bg-[#141414] text-white ">
      <Wrapper>
        <div>
          <div className=" grid grid-cols-12 pb-5">
            <div className=" col-span-7 pl-2">
              <div className=" font-medium text-5xl leading-tight	my-4">
                Market, Sell and Ship to customers from 150+ countries
              </div>
              <div className=" text-2xl mb-10">
                Go live in US, EU, MENA and SEA via a single integration in
                1/10th the time
              </div>
              <WaitlistButton color={"white"} />
            </div>
            <div className=" col-span-5">
              <Image
                src={"/GlobeImage.avif"}
                alt={"Logo"}
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className=" flex gap-1 justify-center items-center font-extralight text-xl pb-10">
            <span>Backed by </span>
            <Image
              src={"/Y-Combinator.avif"}
              alt={"Logo"}
              width={150}
              height={100}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
