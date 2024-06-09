import TestimonialsCard from "../TestimonialsCard";
import Wrapper from "../Wrapper";

const Testimonials = () => {
  return (
    <div>
      <Wrapper>
        <div className=" bg-orange-400">
          <div>Testimonials</div>
          <div className=" grid grid-cols-3">
            <div>
              <TestimonialsCard
                content={
                  "Cheers to the xPay crew for their top-notch product! Transitioning from other services to xPay was a breeze—appreciate the streamlined process and clear API documentation."
                }
                image={"image"}
                name={"Shubham Sinha"}
                founder={"Co-Founder Peppyhop"}
              />
            </div>
            <div>
              <TestimonialsCard
                content={
                  "The team at xPay has made integration a breeze. Their prompt support had us up and running in no time. It's simplicity done right."
                }
                image={"image"}
                name={"Prateek Sachan"}
                founder={"Founding Team Bolna"}
              />
            </div>
            <div>
              <TestimonialsCard
                content={
                  "Absolutely thrilled with the quick service! My first payment of $600 was processed seamlessly, and I'm excited for more transactions this week. Big thanks to the team for making this happen!"
                }
                image={"image"}
                name={"Gaurav Toora"}
                founder={"Founder at Rhym"}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Testimonials;
