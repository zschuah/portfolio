import { twMerge } from "tailwind-merge";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#00C896] via-[#006E87] to-[#222]">
      <div className="container mx-auto overflow-auto">
        <div
          className={twMerge(
            "flex flex-col justify-center items-center",
            "min-h-[75vh] gap-8 px-8"
          )}
        >
          <h1 className="text-5xl md:text-8xl">@zschuah</h1>
          <h3 className="text-center text-lg md:text-2xl max-w-5xl">
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
