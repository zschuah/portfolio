import { twMerge } from "tailwind-merge";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section
      className={twMerge(
        "h-[75vh] bg-gradient-to-b",
        "from-[#00c896] via-[#006e87] to-[#222222]"
      )}
    >
      <div className="container mx-auto overflow-auto">
        <Navbar />

        <div className="text-center">
          <h1 className="text-9xl">@zschuah</h1>
          <h3>
            An engineering graduate with a strong interest in web development,
            using React, Vue and Angular, with over 18 months of working
            experience in the banking sector and half a year of teaching React
            to new trainees.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
