import Wrapper from "../Wrapper";

const EmailWaitlist = () => {
  return (
    <div>
      <Wrapper>
        <div className=" bg-red-400">
          <div>Join the waitlist now</div>
          <div>
            Sign up for xPay now and get 20% discount on international payment
            fees
          </div>
          <div>
            <input type="text" placeholder="Email Address" />
            <button>Join</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default EmailWaitlist;
