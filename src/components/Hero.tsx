import { twMerge } from "tailwind-merge";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <section
      className={twMerge(
        "h-[75vh] bg-gradient-to-b",
        "from-[#00c896] via-[#006e87] to-[#222222]"
      )}
    >
      <div className="container mx-auto overflow-auto">
        <nav
          className={twMerge(
            "my-5 flex text-xl rounded-xl overflow-hidden",
            "backdrop-blur-sm bg-white/20 shadow-lg text-black",
            "hover:shadow-white hover:text-white transition"
          )}
        >
          <p className="px-12 py-6">Title</p>

          <HeroButton className="ml-auto">Home</HeroButton>
          <HeroButton>Pages</HeroButton>
          <HeroButton>Contact</HeroButton>
        </nav>

        <div className="text-center">
          <h1 className="text-9xl">Hero</h1>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
