import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectType } from "../App";
import CardActions from "./CardActions";
import CardMultiColor from "./CardMultiColor";

type PropTypes = {
  sectionName: string;
  projects: ProjectType[];
};

const ProjSection = ({ sectionName, projects }: PropTypes) => {
  const [clientX, setClientX] = useState(100);
  const [clientY, setClientY] = useState(100);

  return (
    <section className="container mx-auto px-4 sm:px-8">
      <h2 className="my-10">{sectionName} Projects</h2>

      <div
        className={twMerge(
          "grid grid-cols-1 gap-2 group/outer",
          "lg:grid-cols-2 2xl:grid-cols-3"
        )}
        onMouseMove={(e) => {
          setClientX(e.clientX);
          setClientY(e.clientY);
        }}
      >
        {projects
          .filter((proj) => proj.frame === sectionName.toLowerCase())
          .map((proj) => (
            <div key={proj.id} className="relative">
              <CardMultiColor clientX={clientX} clientY={clientY} proj={proj} />
              <CardActions
                projId={proj.id}
                projFrame={proj.frame}
                projUrl={proj.url}
                projGit={proj.github}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjSection;
