const PricingCard = ({ type }: { type: "basic" | "enterprise" }) => {
  return (
    <div>
      <div>
        <div>{type === "basic" ? "Basic" : "Enterprise"}</div>
        <div>
          {type === "basic"
            ? "Onboard. Integrate. Start collecting USD in 24 hours."
            : "White Glovemanaged solution for teams powering the world"}
        </div>
        <div>{type === "basic" ? "5%/transaction" : ""}</div>
        <button>
          Get in Touch for {type === "basic" ? "Enterprise" : "Pricing"}
        </button>
        {type === "basic" ? (
          <>
            <div>(tick) Accept payments in USD</div>
            <div>(tick) Collect from 100+ countries</div>
            <div>(tick) Get money in your INR account</div>
            <div>(tick) Create Global Payment Links</div>
          </>
        ) : (
          <>
            <div>(tick) Everything in Basic plus</div>
            <div>(tick) Accept payments in 30+ currencies</div>
            <div>(tick) Managed Sales tax solution</div>
            <div>(tick) High priority addition of new payment methods</div>
          </>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
