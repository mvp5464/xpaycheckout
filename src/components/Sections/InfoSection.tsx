import Image from "next/image";
import Wrapper from "../Wrapper";

const InfoSection = () => {
  return (
    <div className=" bg-white">
      <Wrapper>
        <div className=" border-b border-dashed ">
          <div className=" grid md:grid-cols-2 md:gap-3 gap-10 py-10">
            <div>
              <Image
                src={"/xPayBlackIcon.avif"}
                alt={"Logo"}
                width={150}
                height={50}
              />
            </div>
            <div className=" grid md:grid-cols-3 gap-3">
              <div>
                <div className=" text-lg font-semibold mb-4">xPay</div>
                <div className=" text-sm mb-2">Documentation</div>
                <div className=" text-sm mb-2">Waitlist</div>
                <div className=" text-sm md:mb-2 mb-12">Pricing</div>
              </div>
              <div>
                <div className=" text-lg font-semibold mb-4 ">Policies</div>
                <div className=" text-sm mb-2">Terms and Conditions</div>
                <div className=" text-sm mb-2">Privacy Policy</div>
                <div className=" text-sm mb-2">Shipping Policy</div>
                <div className=" text-sm md:mb-2 mb-12">
                  Cancellation and Refund Policy
                </div>
              </div>
              <div>
                <div className=" text-lg font-semibold mb-4">Contact</div>
                <div className=" text-sm mb-1 flex justify-start items-center gap-2">
                  <Image
                    src={"/linkedinIcon.avif"}
                    alt={"Logo"}
                    width={25}
                    height={25}
                  />
                  <span>LinkedIn</span>
                </div>
                <div className=" text-sm mb-1 flex justify-start items-center gap-2">
                  <Image
                    src={"/emailIcon.avif"}
                    alt={"Logo"}
                    width={25}
                    height={25}
                  />
                  <span>Email</span>
                </div>
                <div className=" text-sm mb-1 flex justify-start items-center gap-2 ">
                  <Image
                    src={"/phoneIcon.avif"}
                    alt={"Logo"}
                    width={25}
                    height={25}
                  />
                  <span>Talk to Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default InfoSection;
