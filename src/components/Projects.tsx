import { ArrowRightAlt } from "@mui/icons-material";
import { MainHeading } from "./Hero";

const ProjectCard = ({
  img,
  title,
  subTitle,
}: {
  img: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="lg:odd:mt-28 ">
      <img src={img} className="w-full rounded-xl opacity-90" />
      <div className="mt-3 font-poppins font-light text-xs text-[#828282]">
        {subTitle}
      </div>
      <div className="font-poppins font-medium text-xl ">{title}</div>
    </div>
  );
};

const Projects = () => {
  const projectsList = [
    {
      img: "smarthome.jpg",
      title: "Smart home dashboard",
      subTitle: "Full stack application",
    },
    {
      img: "onboard.png",
      title: "Onboard application",
      subTitle: "UI/UX design",
    },
    {
      img: "booking.png",
      title: "Booking system",
      subTitle: "Mobile application",
    },
    {
      img: "juice-product.png",
      title: "Juice product homepage",
      subTitle: "Front End Application",
    },
  ];

  return (
    <div className="mt-20">
      <div className="w-[70%] mx-6">
        <MainHeading headline="Good design means good business" />
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-4">
        {projectsList.map((project, index) => (
          <ProjectCard
            img={project.img}
            title={project.title}
            subTitle={project.subTitle}
            key={index}
          />
        ))}
      </div>

      {/* See more button */}
      <button className=" bg-transparent text-[#2D9CDB] font-poppins font-medium mt-9 text-lg">
        see more <ArrowRightAlt />
      </button>
    </div>
  );
};
export default Projects;
