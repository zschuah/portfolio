import { FaGithubSquare } from "react-icons/fa";
import { IoEnter, IoInformationCircle } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import { twMerge } from "tailwind-merge";
import Button from "../layout/Button";

type PropTypes = {
  projFrame: string;
  projUrl: string;
};

const CardActions = ({ projFrame, projUrl }: PropTypes) => {
  const handleOpenWindow = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      className={twMerge(
        "absolute left-0 right-0 bottom-0 h-1/3",
        "flex justify-around items-center",
        "bg-zinc-700 rounded-lg",
        projFrame === "angular" && "bg-red-900",
        projFrame === "vue" && "bg-green-900",
        projFrame === "react" && "bg-blue-900"
      )}
    >
      <Tooltip id="tt-github" className="z-50 shadow" />
      <Button data-tooltip-id="tt-github" data-tooltip-content="Github">
        <FaGithubSquare className="text-3xl" />
      </Button>

      <Tooltip id="tt-info" className="z-50 shadow" />
      <Button data-tooltip-id="tt-info" data-tooltip-content="Info">
        <IoInformationCircle className="text-3xl" />
      </Button>

      <Tooltip id="tt-site" className="z-50 shadow" />
      <Button
        onClick={() => handleOpenWindow(projUrl)}
        data-tooltip-id="tt-site"
        data-tooltip-content="Go to Site"
      >
        <IoEnter className="text-3xl" />
      </Button>
    </div>
  );
};

export default CardActions;
