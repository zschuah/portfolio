import { useState } from "react";
import CardMultiColor from "./CardMultiColor";

type PropTypes = {
  sectionName: string;
  projects: any[];
};

const ProjSection = ({ sectionName, projects }: PropTypes) => {
  const [clientX, setClientX] = useState(100);
  const [clientY, setClientY] = useState(100);

  const handleReturnColor = (name: string) => {
    switch (name) {
      case "React":
        return "blue";
      case "Angular":
        return "red";
      case "Vue":
        return "green";
    }
  };

  return (
    <section>
      <h2>{sectionName}</h2>
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
            <CardMultiColor
              key={proj.id}
              clientX={clientX}
              clientY={clientY}
              color={handleReturnColor(sectionName)}
              proj={proj}
            />
          ))}
      </div>
    </section>
  );
};

export default ProjSection;
