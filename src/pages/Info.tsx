import { FaGithubSquare } from "react-icons/fa";
import { IoBackspace, IoEnter } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectType } from "../App";
import Button from "../layout/Button";

type PropTypes = {
  projectList: ProjectType[];
};

const Info = ({ projectList }: PropTypes) => {
  const navigate = useNavigate();
  const params = useParams();
  const { name, year, descFull, imgList, url } =
    projectList.find((proj) => proj.id === params.id) || {};

  const handleOpenWindow = (link: string | undefined) => {
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <div className="bg-gradient-to-b from-[#006e87] to-[#222]">
      <section className="container mx-auto pt-28 px-2 md:px-20 text-center">
        <h1 className="text-7xl">{name}</h1>
        <h2>{year}</h2>
        <small>{params.id}</small>

        <p className="py-10">{descFull}</p>

        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate("/")}>
            <IoBackspace className="text-3xl" />
            <span className="hidden sm:inline">Go Back</span>
          </Button>
          <Button>
            <FaGithubSquare className="text-3xl" />
            <span className="hidden sm:inline">Github</span>
          </Button>
          <Button onClick={() => handleOpenWindow(url)}>
            <IoEnter className="text-3xl" />
            <span className="hidden sm:inline">Go to Site</span>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 py-10">
          {imgList?.map((item) => (
            <div className="flex-1">
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
