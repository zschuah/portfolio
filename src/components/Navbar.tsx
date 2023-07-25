import { twMerge } from "tailwind-merge";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className={twMerge(
        "my-5 flex text-xl rounded-xl overflow-hidden",
        "backdrop-blur-sm bg-white/20 shadow-lg text-black",
        "hover:shadow-white hover:text-white transition",
        "fixed w-full container left-1/2 -translate-x-1/2 z-50"
      )}
    >
      <p className="px-12 py-6">@zschuah</p>

      <NavButton onClick={() => navigate("/")} className="ml-auto">
        Home
      </NavButton>
      <NavButton>Contact</NavButton>
    </nav>
  );
};

export default Navbar;
