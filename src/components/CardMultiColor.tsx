import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectType } from "../App";
import { useProjContext } from "../context/ProjContext";

type PropTypes = {
  clientX: number;
  clientY: number;
  proj: ProjectType;
};

const CardMultiColor = ({ clientX, clientY, proj }: PropTypes) => {
  const cardRef = useRef<HTMLDivElement>(null!);
  const [posX, setPosX] = useState(100);
  const [posY, setPosY] = useState(100);

  const { openId, handleOpenId } = useProjContext();

  const handleMouseMove = () => {
    const bounds = cardRef.current.getBoundingClientRect();
    setPosX(clientX - Math.round(bounds.left));
    setPosY(clientY - Math.round(bounds.top));
    cardRef.current.style.setProperty("--grad-x", posX + "px");
    cardRef.current.style.setProperty("--grad-y", posY + "px");
  };

  useEffect(() => {
    handleMouseMove();
  }, [clientX, clientY]);

  return (
    <div
      onClick={() => handleOpenId(proj.id)}
      className={twMerge(
        "rounded-lg h-60 relative group/inner cursor-pointer z-40",
        openId === proj.id && "-translate-y-20",
        "transition hover:shadow-lg hover:shadow-white",
        proj.frame === "angular" && "hover:shadow-red-500",
        proj.frame === "vue" && "hover:shadow-green-500",
        proj.frame === "react" && "hover:shadow-blue-500"
      )}
      ref={cardRef}
    >
      {/* BEFORE ELEMENT - more transparent */}
      <span
        className={twMerge(
          "rounded-lg absolute inset-0 z-30 bg-gradient-radial-lg opacity-0",
          "transition duration-500 group-hover/inner:opacity-100",
          "to-white/[0.06]",
          proj.frame === "angular" && "to-red-500/[0.1]",
          proj.frame === "vue" && "to-green-500/[0.1]",
          proj.frame === "react" && "to-blue-500/[0.1]"
        )}
      ></span>

      {/* CARD CONTENT - opaque middle part */}
      <div className="rounded-lg absolute inset-1 z-20 bg-zinc-800 flex overflow-hidden">
        <div className="w-1/3">
          <img
            className="w-full h-full object-cover"
            src={proj.imgList[0]}
            alt="nature"
          />
        </div>

        <div className="w-2/3 p-2">
          {/* <p>{posX}</p>
          <p>{posY}</p> */}
          <h4>{proj.name}</h4>
          <small>{proj.year}</small>
          <p>{proj.desc}</p>
        </div>
      </div>

      {/* CARD BORDER - less transparent */}
      <span
        className={twMerge(
          "rounded-lg absolute inset-0 z-10 bg-gradient-radial-sm opacity-0",
          "transition duration-500 group-hover/outer:opacity-100",
          "to-white/[0.3]",
          proj.frame === "angular" && "to-red-500/[0.9]",
          proj.frame === "vue" && "to-green-500/[0.9]",
          proj.frame === "react" && "to-blue-500/[0.9]"
        )}
      ></span>
    </div>
  );
};

export default CardMultiColor;
