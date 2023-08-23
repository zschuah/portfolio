import { useEffect } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { IoBackspace, IoEnter } from "react-icons/io5";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { ProjectType } from "../App";
import Button from "../layout/Button";

type PropTypes = {
  projectList: ProjectType[];
};

const Info = ({ projectList }: PropTypes) => {
  const navigate = useNavigate();
  const params = useParams();
  const { name, year, descFull, imgList, url, iconList, github } =
    projectList.find((proj) => proj.id === params.id) || {};

  const handleOpenWindow = (link: string | undefined) => {
    window.open(link, "_blank", "noreferrer");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!name) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-gradient-to-b from-[#006E87] to-[#222]">
      <section className="container mx-auto pt-32 px-8 md:px-20 text-center">
        <h1 className="text-5xl md:text-7xl">{name}</h1>

        <div className="flex gap-4 justify-center mt-8 mb-4">
          {iconList?.map((icon) => (
            <div key={icon.name}>
              <Tooltip id={icon.name} opacity={1} />
              <img
                data-tooltip-id={icon.name}
                data-tooltip-content={icon.name}
                className="h-12"
                src={icon.img}
                alt={icon.name}
              />
            </div>
          ))}
        </div>

        <h2>{year}</h2>
        <small className="font-mono">ID:{params.id}</small>

        <p className="py-10 text-sm sm:text-base">{descFull}</p>

        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate(-1)}>
            <IoBackspace className="text-3xl" />
            <span className="hidden sm:inline">Go Back</span>
          </Button>
          <Button onClick={() => handleOpenWindow(github)}>
            <FaGithubSquare className="text-3xl" />
            <span className="hidden sm:inline">GitHub</span>
          </Button>
          <Button onClick={() => handleOpenWindow(url)}>
            <IoEnter className="text-3xl" />
            <span className="hidden sm:inline">Go to Site</span>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 py-10">
          {imgList?.map((item, index) => (
            <div className="flex-1" key={index}>
              <img
                className="rounded-xl h-full w-full object-cover"
                src={item}
                alt={name}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Info;
