import { useEffect } from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
  IoPerson,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import headshot from "../assets/headshot.png";

const Contact = () => {
  const NAME = "Zhun Song";
  const EMAIL = "zschuah@hotmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/zhun-song-chuah-363b80192/";
  const GITHUB = "https://github.com/zschuah";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#8685EF] to-[#222]">
      <section
        className={twMerge(
          "container mx-auto py-32 px-8 md:px-20",
          "flex justify-around flex-wrap min-h-screen"
        )}
      >
        <div>
          <h1 className="text-6xl">Contact</h1>
          <div className="py-10 space-y-2">
            <h4>
              <IoPerson />
              <span>{NAME}</span>
            </h4>
            <h4>
              <IoMail />
              <span>{EMAIL}</span>
            </h4>
            <h4>
              <IoLogoLinkedin />
              <span>Message me on LinkedIn </span>
              <Link
                className="underline cursor-pointer"
                to={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                here
              </Link>
            </h4>
            <h4>
              <IoLogoGithub />
              <span>View my projects </span>
              <Link
                className="underline cursor-pointer"
                to={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                here
              </Link>
            </h4>
          </div>
        </div>

        <div className="w-80 h-96">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={headshot}
            alt="headshot"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
