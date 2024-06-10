import Wrapper from "../Wrapper";
import OneTimePayments from "./Features/OneTimePayments";
import PaymentLinks from "./Features/PaymentLinks";
import Subscription from "./Features/Subscription";

const FeaturesSection = () => {
  return (
    <div className=" text-[#141414] bg-white py-1">
      <Wrapper>
        <div className=" flex flex-col justify-center items-center gap-20 my-20">
          <div className=" font-[500] text-5xl">Features</div>
          <OneTimePayments />
          <PaymentLinks />
          <Subscription />
        </div>
      </Wrapper>
    </div>
  );
};

export default FeaturesSection;
