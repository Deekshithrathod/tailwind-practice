import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <nav className="flex justify-between my-3 w-full">
      <div className="text-2xl font-heebo font-extrabold lg:text-4xl">Edie</div>
      <ol className="max-lg:hidden capitalize flex gap-5 text-lg">
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#projects">Our works</a>
        </li>
        <li>
          <a href="#testimonials">Clients</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
      </ol>
      <div className="lg:hidden">
        <MenuIcon />
      </div>
    </nav>
  );
};
export default Navbar;
