import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type PropTypes = {
  clientX: number;
  clientY: number;
  color: string;
};

const CardMultiColor = ({ clientX, clientY, color }: PropTypes) => {
  const cardRef = useRef<HTMLDivElement>(null!);
  const [posX, setPosX] = useState(100);
  const [posY, setPosY] = useState(100);

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
      className={twMerge(
        "rounded-lg h-60 relative group/inner cursor-pointer",
        "transition hover:shadow-lg",
        color === "red" && "hover:shadow-red-500",
        color === "green" && "hover:shadow-green-500",
        color === "blue" && "hover:shadow-blue-500"
      )}
      ref={cardRef}
    >
      {/* BEFORE ELEMENT - more transparent */}
      <span
        className={twMerge(
          "rounded-lg absolute inset-0 z-30 bg-gradient-radial-lg opacity-0 transition duration-500 group-hover/inner:opacity-100",
          color === "red" && "to-red-500/[0.1]",
          color === "green" && "to-green-500/[0.1]",
          color === "blue" && "to-blue-500/[0.1]"
        )}
      ></span>

      {/* CARD CONTENT - opaque middle part */}
      <div className="rounded-lg absolute inset-1 z-20 bg-zinc-800 flex overflow-hidden">
        <div className="w-1/3">
          <img
            className="w-full h-full object-cover"
            src="https://source.unsplash.com/random/?nature"
            alt="nature"
          />
        </div>

        <div className="w-2/3 p-2">
          <p>{posX}</p>
          <p>{posY}</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sint
            pariatur quod, at ratione doloribus culpa blanditiis ab est debitis.
          </p>
        </div>
      </div>

      {/* CARD BORDER - less transparent */}
      <span
        className={twMerge(
          "rounded-lg absolute inset-0 z-10 bg-gradient-radial-sm opacity-0 transition duration-500 group-hover/outer:opacity-100",
          color === "red" && "to-red-500/[0.9]",
          color === "green" && "to-green-500/[0.9]",
          color === "blue" && "to-blue-500/[0.9]"
        )}
      ></span>
    </div>
  );
};

export default CardMultiColor;
