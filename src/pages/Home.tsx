import { useState } from "react";
import { Project } from "../assets/projects";
import Hero from "../components/Hero";
import ProjSection from "../components/ProjSection";
import { ProjProvider } from "../context/ProjContext";

type PropTypes = {
  projectList: Project[];
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
