import Wrapper from "../Wrapper";

const Appbar = () => {
  return (
    <div>
      {/* <div className=""> */}
      <Wrapper>
        <div className=" flex justify-between items-center h-20 bg-fuchsia-400">
          <div>pay</div>
          <div className=" flex gap-4">
            <button>Pricing</button>
            <button>Waitlist</button>
            <button>Contact</button>
            <button>Blogs</button>
            <button>Talk to founder (arrow)</button>
          </div>
        </div>
      </Wrapper>
      {/* </div> */}
    </div>
  );
};

export default Appbar;
