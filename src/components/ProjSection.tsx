import { useState } from "react";
import CardActions from "./CardActions";
import CardMultiColor from "./CardMultiColor";

type PropTypes = {
  sectionName: string;
  projects: any[];
};

const ProjSection = ({ sectionName, projects }: PropTypes) => {
  const [clientX, setClientX] = useState(100);
  const [clientY, setClientY] = useState(100);

  return (
    <section className="container mx-auto">
      <h2 className="my-10">{sectionName} Projects</h2>

      <div
        className="grid grid-cols-3 gap-2 group/outer"
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
              <CardActions projFrame={proj.frame} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjSection;
