import { MainHeading } from "./Hero";

const Team = () => {
  return (
    <div className="mt-24 lg:flex lg:justify-center" id="team">
      <div className="w-[70%] lg:my-auto">
        <div className="text-xl font-normal text-[#EB5757]">Meet the team</div>
        <MainHeading headline="We are chilled and a laidback team" />
        <p className="font-poppins font-normal text-md text-[#4f4f4f] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Team Cards */}
      <div className="mt-12 lg:mt-0">
        <div className="flex gap-x-3 flex-wrap align-middle">
          <div className="w-[52%] flex flex-col justify-center">
            <img src="person3.png" className="rounded-3xl" />
          </div>
          <div className="w-[45%] flex flex-col gap-y-3">
            <img src="person1.png" className="w-[90%] rounded-3xl" />
            <img src="person2.png" className="rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
