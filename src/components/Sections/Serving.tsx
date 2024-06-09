import SingleServing from "../ServingCard";
import Wrapper from "../Wrapper";

const Serving = () => {
  return (
    <div>
      <Wrapper>
        <div className=" bg-fuchsia-400">
          <div>Serving global companies in global industries</div>
          <div className=" grid grid-cols-4">
            <div>
              <SingleServing
                image={"imagelink/path"}
                title={"Ecommerce"}
                body={
                  "Why pay shopify 15% for something you can do at 6%? Save 9% with just an API"
                }
              />
            </div>
            <div>
              <SingleServing
                image={"imagelink/path"}
                title={"SAAS"}
                body={
                  "Sell software in any country around the globe without setting up an entity!"
                }
              />
            </div>
            <div>
              <SingleServing
                image={"imagelink/path"}
                title={"Ed-Tech"}
                body={
                  "Scale to 100s of countries with the same content - don’t leave revenue on the table"
                }
              />
            </div>
            <div>
              <SingleServing
                image={"imagelink/path"}
                title={"Travel"}
                body={
                  "Boost card success rates by 30%. Provide local payment methods in every country. Experiment with new gateways via a single click."
                }
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Serving;
