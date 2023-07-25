import { useState } from "react";
import { ProjectType } from "../App";
import Hero from "../components/Hero";
import ProjSection from "../components/ProjSection";
import { ProjProvider } from "../context/ProjContext";

type PropTypes = {
  projectList: ProjectType[];
};

const Home = ({ projectList }: PropTypes) => {
  const [sectionList] = useState(["React", "Angular", "Vue"]);

  return (
    <main>
      <Hero />
      <ProjProvider>
        {sectionList.map((section) => (
          <ProjSection
            key={section}
            sectionName={section}
            projects={projectList}
          />
        ))}
      </ProjProvider>
    </main>
  );
};

export default Home;
