import Image from "next/image";
import FeaturesText from "../../FeaturesText";

const Subscription = () => {
  return (
    <div>
      <div className=" bg-red-400s">
        <div className=" grid grid-cols-2 gap-20 items-center">
          <div className="py-10">
            <Image
              src={"/SubscriptionImage.webp"}
              alt={"Logo"}
              width={450}
              height={450}
            />
          </div>
          <FeaturesText
            title={"Subscription"}
            body={
              "Create subscriptions easily for anywhere in the world using a single API"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
