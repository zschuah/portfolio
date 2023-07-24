import { FaGithubSquare } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Button from "../layout/Button";

type PropTypes = {
  projFrame: string;
};

const CardActions = ({ projFrame }: PropTypes) => {
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
      <Button>
        <FaGithubSquare className="text-4xl" />
      </Button>
      <Button>
        <FaGithubSquare className="text-4xl" />
      </Button>
      <Button>
        <FaGithubSquare className="text-4xl" />
      </Button>
    </div>
  );
};

export default CardActions;