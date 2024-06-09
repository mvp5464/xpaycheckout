import FeaturesText from "../../FeaturesText";
import Wrapper from "../../Wrapper";

const PaymentLinks = () => {
  return (
    <div>
      <Wrapper>
        <div className=" bg-green-400">
          <div className=" flex justify-between">
            <FeaturesText
              title={"Payment Links"}
              body={
                "Create a single payment link that works seamlessly throughout the world.  Easy management, tracking and automated follow ups"
              }
            />
            <div>Image</div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PaymentLinks;
