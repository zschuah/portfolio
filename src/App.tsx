import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import ProjSection from "./components/ProjSection";
import db from "./data/db.json";
import { ProjProvider } from "./context/ProjContext";

const projectList = db.projects;
export type ProjectType = (typeof projectList)[number];

function App() {
  const [sectionList] = useState(["React", "Angular", "Vue"]);

  return (
    <div className="App">
      <Hero />

      <main>
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

      <div className="mt-60"></div>
    </div>
  );
}

export default App;
