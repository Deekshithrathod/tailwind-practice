import pic from "../assets/heroImage.jpg";
import ContactUs from "./ContactUs";

export const MainHeading = ({ headline }: { headline: string }) => {
  return (
    <h1 className="font-poppins text-2xl font-medium leading-normal not-italic lg:text-5xl lg:w-[65%]">
      {headline}
    </h1>
  );
};

const Hero = () => {
  return (
    <div id="home" className="mt-12">
      <div className="px-6 lg:px-40">
        <div className="text-[#2D9CDB] text-xs lg:text-lg lg:mb-4">
          Unhappy with your website?
        </div>
        <MainHeading headline="We create beautiful and fast web services" />
      </div>
      <img
        src={pic}
        alt="Team working on a project"
        className="rounded-xl mt-4 "
      />
      <div className=" px-6 mt-6 lg:px-40">
        <MainHeading
          headline="
        Story, emotion and purpose"
        />
        <div className="lg:w-[60%]">
          <p className="font-poppins text-xs font-normal mt-4 leading-5 lg:text-lg">
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
          <div className="mt-10">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
