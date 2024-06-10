import Wrapper from "../Wrapper";

const EmailWaitlist = () => {
  return (
    <div>
      <Wrapper>
        <div className=" py-20">
          <div className=" flex flex-col justify-around items-center gap-5s p-12 rounded-xl bg-gradient-to-r from-[#252525] to-[#101010] text-white ">
            <div className=" font-[650] text-[2.7rem]">
              Join the waitlist now
            </div>
            <div className=" text-2xl mb-10 ">
              Sign up for xPay now and get 20% discount on international payment
              fees
            </div>
            <div className=" bg-sfuchsia-400 w-full flex justify-center items-center gap-3">
              <input
                className=" h-14 w-[60%] rounded-lg placeholder:pl-5"
                type="text"
                placeholder="Email Address"
              />
              <div>
                <button className=" py-4 px-4 rounded-xl bg-[#45abff] ">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default EmailWaitlist;
