import TestimonialsCard from "../TestimonialsCard";
import Wrapper from "../Wrapper";

const Testimonials = () => {
  return (
    <div className=" bg-white text-black">
      <Wrapper>
        <div className=" py-20">
          <div className=" md:font-[550] font-[500] md:text-5xl text-[1.65rem] text-center leading-tight mb-12">
            Testimonials
          </div>
          <div className=" grid md:grid-cols-3 gap-6">
            <div>
              <TestimonialsCard
                content={
                  "Cheers to the xPay crew for their top-notch product! Transitioning from other services to xPay was a breeze—appreciate the streamlined process and clear API documentation."
                }
                image={"/person1.avif"}
                name={"Shubham Sinha"}
                founder={"Co-Founder Peppyhop"}
              />
            </div>
            <div>
              <TestimonialsCard
                content={
                  "The team at xPay has made integration a breeze. Their prompt support had us up and running in no time. It's simplicity done right."
                }
                image={"/person2.avif"}
                name={"Prateek Sachan"}
                founder={"Founding Team Bolna"}
              />
            </div>
            <div>
              <TestimonialsCard
                content={
                  "Absolutely thrilled with the quick service! My first payment of $600 was processed seamlessly, and I'm excited for more transactions this week. Big thanks to the team for making this happen!"
                }
                image={"/person3.avif"}
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
