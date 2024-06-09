import WaitlistButton from "../WaitlistButton";
import Wrapper from "../Wrapper";

const HeroSection = () => {
  return (
    <div>
      <Wrapper>
        <div className=" bg-blue-400">
          <div className=" flex justify-between ">
            <div>
              <div>
                payments from any country via cards, bank accounts & more
              </div>
              <div>
                Go live in US, EU, MENA and SEA via a single integration in
                1/10th the time
              </div>
              <WaitlistButton />
            </div>
            <div>Globe image</div>
          </div>
          <div>Backed by Y cominator (image)</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
