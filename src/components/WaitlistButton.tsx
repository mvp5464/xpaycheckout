const WaitlistButton = ({ color = "black" }: { color?: "white" | "black" }) => {
  return (
    <div>
      <button className={`${color === "black" ? "bg-black" : "bg-white"}`}>
        Join Waitlist (arrow)
      </button>
    </div>
  );
};

export default WaitlistButton;
