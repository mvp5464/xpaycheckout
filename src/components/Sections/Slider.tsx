import Image from "next/image";
import Wrapper from "../Wrapper";

const Slider = () => {
  return (
    <div className=" bg-[#ebebeb]q bg-white py-1">
      <Wrapper>
        <div className=" my-16 py-16 bg-[#f2fbff] rounded-lg">
          <div className=" text-center text-2xl text-[#141414] font-medium mb-8">
            Helping teams at the world's best companies
          </div>
          <div className=" flex gap-16 overflow-x-auto mx-8">
            <Image src={"/cLogo1.avif"} alt={"Logo"} width={180} height={50} />
            <Image src={"/cLogo2.avif"} alt={"Logo"} width={200} height={100} />
            <Image src={"/cLogo3.avif"} alt={"Logo"} width={200} height={100} />
            <Image src={"/cLogo4.avif"} alt={"Logo"} width={200} height={100} />
            <Image src={"/cLogo5.svg"} alt={"Logo"} width={200} height={100} />
            <Image src={"/cLogo6.avif"} alt={"Logo"} width={200} height={100} />
            <Image src={"/cLogo7.avif"} alt={"Logo"} width={200} height={100} />
            <Image src={"/cLogo8.avif"} alt={"Logo"} width={200} height={100} />
            <Image src={"/cLogo9.webp"} alt={"Logo"} width={200} height={100} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Slider;
