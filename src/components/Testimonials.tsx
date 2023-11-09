const Testimonials = () => {
  return (
    <>
      <h3 className="mt-24 font-poppins text-xl font-medium lg:text-4xl lg:w-[90%]">
        “Fast and outstanding resutls. Edie understands their customer's needs.
        They have a young and talented team.”
      </h3>
      <div className="h-20 flex mt-8">
        <img src="person4.png" className=" rounded-xl h-full mr-4" />
        <div className="h-full flex flex-col justify-between py-3">
          <div className="font-poppins font-medium text-xl">Carlos</div>
          <div className=" font-poppins font-medium text-lg text-[#828282]">
            The Decorate Gatsby
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
