import Appbar from "@/components/Sections/Appbar";
import HeroSection from "@/components/Sections/HeroSection";
import OneTimePayments from "@/components/Sections/Features/OneTimePayments";
import Slider from "@/components/Sections/Slider";
import YoutubeFrame from "@/components/Sections/YoutubeFrame";
import PaymentLinks from "@/components/Sections/Features/PaymentLinks";
import Subscription from "@/components/Sections/Features/Subscription";
import Benefits from "@/components/Sections/Benefits";
import Serving from "@/components/Sections/Serving";
import Pricing from "@/components/Sections/Pricing";
import Testimonials from "@/components/Sections/Testimonials";
import EmailWaitlist from "@/components/Sections/EmailWaitlist";
import FaqPage from "@/components/Sections/FaqPage";
import InfoSection from "@/components/Sections/InfoSection";
import Footer from "@/components/Sections/Footer";

export default function Home() {
  return (
    <div>
      <Appbar />
      <HeroSection />
      <Slider />
      <YoutubeFrame />
      <OneTimePayments />
      <PaymentLinks />
      <Subscription />
      <Benefits />
      <Serving />
      <Pricing />
      <Testimonials />
      <EmailWaitlist />
      <FaqPage />
      <InfoSection />
      <Footer />
    </div>
  );
}
