import Image from "next/image";
import FeaturesText from "../../FeaturesText";

const OneTimePayments = () => {
  return (
    <div>
      <div className="">
        <div className=" grid md:grid-cols-2 gap-20 items-center">
          <div className="py-10 order-2 border rounded-[2rem]">
            <Image
              src={"/OTPayment.avif"}
              alt={"Logo"}
              width={450}
              height={450}
            />
          </div>
          <FeaturesText
            title={"One time payments"}
            body={
              "Accept one time payments easily in 30+ currencies including USD"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OneTimePayments;
