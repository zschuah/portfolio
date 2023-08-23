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
            Frontend developer driven by passion for React, Vue and Angular.
            Working experience in developing banking applications and teaching
            React.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
