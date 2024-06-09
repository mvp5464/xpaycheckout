import FeaturesText from "../../FeaturesText";
import Wrapper from "../../Wrapper";

const Subscription = () => {
  return (
    <div>
      <Wrapper>
        <div className=" bg-red-400">
          <div className=" flex justify-between">
            <div>Image</div>
            <FeaturesText
              title={"One time payments"}
              body={
                "Accept one time payments easily in 30+ currencies including USD"
              }
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Subscription;
