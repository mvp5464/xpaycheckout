import RightArrow from "./icons/RightArrow";

const WaitlistButton = ({ color = "black" }: { color?: "white" | "black" }) => {
  return (
    <div>
      <button
        className={`${
          color === "black" ? "bg-[#141414] text-white" : "bg-white text-black"
        } flex gap-2 rounded-full py-3 px-6`}
      >
        <span>Join Waitlist</span> <RightArrow />
      </button>
    </div>
  );
};

export default WaitlistButton;
