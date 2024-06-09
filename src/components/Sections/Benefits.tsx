import Wrapper from "../Wrapper";
import SingleBenefits from "../BenefitsCard";

const Benefits = () => {
  return (
    <div>
      <Wrapper>
        <div className=" bg-blue-400">
          <div>Single integration, many benefits</div>
          <div className="grid grid-cols-2">
            <div>
              <SingleBenefits
                image={"imagelink/path"}
                title={"Save 200+ Developer hours per month"}
                body={
                  "Your devs don't need to spend any time integrating several PGs or writing custom code"
                }
              />
            </div>
            <div>
              <SingleBenefits
                image={"imagelink/path"}
                title={"Boost success rates by 100%"}
                body={
                  "Users see Local Payment options leading to more trust and more payment options"
                }
              />
            </div>
            <div>
              <SingleBenefits
                image={"imagelink/path"}
                title={"Reduce transaction cost by 30%"}
                body={
                  "We average 4% on international transactions, while Stripe charges 6% and PayPal 9%"
                }
              />
            </div>
            <div>
              <SingleBenefits
                image={"imagelink/path"}
                title={"Enterprise grade security"}
                body={
                  "Our systems are highly secure and battle tested. We are compliant with national data and compliance laws in major geographies."
                }
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Benefits;
