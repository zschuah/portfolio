import { twMerge } from "tailwind-merge";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav
      className={twMerge(
        "my-5 flex text-xl rounded-xl overflow-hidden",
        "backdrop-blur-sm bg-white/20 shadow-lg text-black",
        "hover:shadow-white hover:text-white transition"
      )}
    >
      <p className="px-12 py-6">@zschuah</p>

      <NavButton className="ml-auto">Home</NavButton>
      <NavButton>Pages</NavButton>
      <NavButton>Contact</NavButton>
    </nav>
  );
};

export default Navbar;
