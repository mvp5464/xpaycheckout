import Wrapper from "../Wrapper";

const InfoSection = () => {
  return (
    <div>
      <Wrapper>
        <div className=" bg-fuchsia-400">
          <div className=" grid grid-cols-2">
            <div>image</div>
            <div className=" grid grid-cols-3">
              <div>
                <div>xPay</div>
                <div>Documentation</div>
                <div>Waitlist</div>
                <div>Pricing</div>
              </div>
              <div>
                <div>Policies</div>
                <div>Terms and Conditions</div>
                <div>Privacy Policy</div>
                <div>Shipping Policy</div>
                <div>Cancellation and Refund Policy</div>
              </div>
              <div>
                <div>Contact</div>
                <div>(image) LinkedIn</div>
                <div>(image) Email</div>
                <div>(image) Talk to Founder</div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default InfoSection;
