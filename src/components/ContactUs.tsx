const ContactUs = () => {
  return (
    <>
      <p className="font-poppins text-[0.625rem] lg:text-sm font-normal text-[#828282]">
        Want us to contact you?
      </p>
      <div className="flex bg-[#F2F2F2] rounded-xl justify-between p-1 mt-2 lg:mt-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="bg-transparent pl-4 text-[#F2F2F2] font-medium font-poppins text-sm lg:text-lg "
        />
        <button className="bg-[#2D9CDB] text-white rounded-xl px-5 py-3 lg:text-lg ">
          Join
        </button>
      </div>
    </>
  );
};
export default ContactUs;
