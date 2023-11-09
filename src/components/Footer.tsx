import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <div className="bg-[#100E1D] text-white mt-20">
      <div className="p-12 flex flex-col gap-y-16 lg:flex-row lg:justify-between lg:max-w-5xl mx-auto lg:px-0">
        <ul className="font-poppins flex flex-col gap-3 text-lg font-normal">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Our Works</a>
          </li>
          <li>
            <a href="#testimonials">Clients</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#team">Contact</a>
          </li>
        </ul>
        <div>
          <h1 className="font-heebo font-extrabold text-4xl">Edie</h1>
          <div className="flex gap-3 mt-3">
            <img src="instagram.svg" />
            <img src="linkedin.svg" />
            <img src="twitter.svg" />
          </div>
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
      <div className="mt-40 lg:mt-10 pb-10 font-montserrat font-medium text-center">
        created by{" "}
        <a
          href="https://github.com/Deekshithrathod"
          className="font-bold underline">
          Deekshith
        </a>
        <div className="font-poppins text-xs font-normal mt-3">
          © 2021 Edie. All rights reserved
        </div>
      </div>
    </div>
  );
};
export default Footer;
