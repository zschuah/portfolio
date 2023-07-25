import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import db from "./assets/db.json";
import Home from "./pages/Home";
import Info from "./pages/Info";

const projectList = db.projects;
export type ProjectType = (typeof projectList)[number];

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home projectList={projectList} />} />
        <Route path="/info/:id" element={<Info projectList={projectList} />} />
      </Routes>

      <div className="mt-60"></div>
    </div>
  );
}

export default App;
