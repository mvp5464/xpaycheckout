import WaitlistButton from "./WaitlistButton";

const FeaturesText = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className=" pr- bg-fuchsias-400">
      <div className=" inline border border-[#ccc7c7] rounded-lg py-1 px-2 ">
        <span className="">&#9679;&nbsp;&nbsp;</span>
        <span className=" text-xs">FEATURES</span>
      </div>
      <div className=" text-4xl font-[500] my-8">{title}</div>
      <div className=" my-5 text-lg text-slate-500">{body}</div>
      <WaitlistButton />
    </div>
  );
};

export default FeaturesText;
