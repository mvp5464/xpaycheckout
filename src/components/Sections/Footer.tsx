import ScrollToTop from "../ScrollToTop";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <div>
      <Wrapper>
        <div className=" text-[#a3a3a3] text-sm md:mb-12 mb-4">
          <div className=" mb-3">
            Spiggle Technologies Private Limited | Payport Inc
          </div>
          <div>
            Go Global, Effortlessly - Experience the Future of Payments with
            xPay. © 2024. All rights reserved.
          </div>
        </div>
      </Wrapper>
      <ScrollToTop />
    </div>
  );
};

export default Footer;
