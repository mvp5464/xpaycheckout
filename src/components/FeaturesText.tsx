import WaitlistButton from "./WaitlistButton";

const FeaturesText = ({ title, body }: { title: string; body: string }) => {
  return (
    <div>
      <div>DotFeature</div>
      <div>{title}</div>
      <div>{body}</div>
      <WaitlistButton />
    </div>
  );
};

export default FeaturesText;
