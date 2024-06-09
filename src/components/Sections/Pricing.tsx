import PricingCard from "../PricingCard";
import Wrapper from "../Wrapper";

const Pricing = () => {
  return (
    <div>
      <Wrapper>
        <div className="bg-green-400">
          <div>Premium features without premium pricing</div>
          <div className=" flex">
            <PricingCard type={"basic"} />
            <PricingCard type={"enterprise"} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Pricing;
