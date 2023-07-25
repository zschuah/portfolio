import { twMerge } from "tailwind-merge";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#00c896] via-[#006e87] to-[#222]">
      <div className="container mx-auto overflow-auto">
        <div
          className={twMerge(
            "flex flex-col justify-center items-center",
            "h-[75vh] gap-8 px-8"
          )}
        >
          <h1 className="text-5xl md:text-8xl">@zschuah</h1>
          <h3 className="text-center text-base md:text-2xl">
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
