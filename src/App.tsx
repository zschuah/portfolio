import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import ProjSection from "./components/ProjSection";
import db from "./data/db.json";

function App() {
  const [sectionList] = useState(["React", "Angular", "Vue"]);

  return (
    <div className="App">
      <Hero />

      <main className="container mx-auto">
        {sectionList.map((section) => (
          <ProjSection sectionName={section} projects={db.projects} />
        ))}
      </main>

      <div className="mt-60"></div>
    </div>
  );
}

export default App;
