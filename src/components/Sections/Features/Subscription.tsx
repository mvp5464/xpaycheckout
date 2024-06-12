import Image from "next/image";
import FeaturesText from "../../FeaturesText";

const Subscription = () => {
  return (
    <div>
      <div className=" bg-red-400s">
        <div className=" grid md:grid-cols-2 gap-20 items-center">
          <div className="py-10 order-2">
            <Image
              src={"/SubscriptionImage.webp"}
              alt={"Logo"}
              width={450}
              height={450}
              unoptimized
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
