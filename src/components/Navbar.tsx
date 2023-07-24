import { twMerge } from "tailwind-merge";
import HeroButton from "./HeroButton";

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

      <HeroButton className="ml-auto">Home</HeroButton>
      <HeroButton>Pages</HeroButton>
      <HeroButton>Contact</HeroButton>
    </nav>
  );
};

export default Navbar;
