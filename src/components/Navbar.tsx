import { IoCall, IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import NavButton from "./NavButton";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className={twMerge(
        "my-5 flex rounded-xl overflow-hidden text-xl",
        "backdrop-blur-sm bg-white/20 shadow-lg shadow-white",
        "fixed w-11/12 container left-1/2 -translate-x-1/2 z-50"
      )}
    >
      <p className="px-6 py-3 sm:px-12 sm:py-6">@zschuah</p>

      <NavButton className="ml-auto" onClick={() => navigate("/")}>
        <IoHome />
        <span className="hidden sm:inline">Home</span>
      </NavButton>
      <NavButton>
        <IoCall />
        <span className="hidden sm:inline">Contact</span>
      </NavButton>
    </nav>
  );
};

export default Navbar;
