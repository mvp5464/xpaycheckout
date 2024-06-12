import Image from "next/image";
import FeaturesText from "../../FeaturesText";

const PaymentLinks = () => {
  return (
    <div>
      <div className=" ">
        <div className=" grid md:grid-cols-2 gap-12 items-center">
          <div className=" bg-red-400s">
            <FeaturesText
              title={"Payment Links"}
              body={
                "Create a single payment link that works seamlessly throughout the world. Easy management, tracking and automated follow ups"
              }
            />
          </div>
          <div className="py-10">
            <Image
              src={"/PLinksImage.webp"}
              alt={"Logo"}
              width={450}
              height={450}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentLinks;
