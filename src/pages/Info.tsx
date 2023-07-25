import { ProjectType } from "../App";
import { useParams } from "react-router-dom";

type PropTypes = {
  projectList: ProjectType[];
};

const Info = ({ projectList }: PropTypes) => {
  const { id } = useParams();
  const project = projectList.find((proj) => proj.id === id);

  return (
    <div className="container mx-auto pt-28">
      <h1>Info</h1>
      <h3>{id}</h3>
      <h3>{project?.name}</h3>
      <p>{project?.descFull}</p>
    </div>
  );
};

export default Info;
