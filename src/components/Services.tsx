import { Code, Edit, Storage } from "@mui/icons-material";
import { MainHeading } from "./Hero";

const ServiceCard = ({
  hex,
  title,
  children,
}: {
  hex: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="px-6 py-14 mt-12 rounded-3xl hover:shadow-custom-shadow group">
      <div className={`bg-[${hex}] rounded-2xl p-4 w-fit text-white`}>
        {children}
      </div>
      <div className="font-poppins font-bold text-2 mt-8">{title}</div>
      <div className="font-poppins font-normal text-base text-[#4F4F4F] mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac
        nulla consequat aliquet id quis turpis.
      </div>
      <button className="bg-[#E0E0E0] rounded-xl px-3 py-2 text-[#828282] font-poppins font-medium mt-8 group-hover:bg-[#2D9CDB] group-hover:text-[white] ">
        Get Started
      </button>
    </div>
  );
};

const Services = () => {
  const servicesList = [
    {
      hex: "#2D9CDB",
      title: "UI/UX Design",
      children: <Edit />,
    },
    {
      hex: "#27AE60",
      title: "Front end",
      children: <Code />,
    },
    {
      hex: "#EB5757",
      title: "Back End",
      children: <Storage />,
    },
  ];

  return (
    <div className="mt-24">
      <div className="w-[70%] px-6">
        <MainHeading headline="We offer high demand services" />
      </div>

      {/* Service Cards */}
      <div className="flex flex-col lg:flex-row ">
        {servicesList.map((service, index) => (
          <ServiceCard
            title={service.title}
            children={service.children}
            hex={service.hex}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Services;
