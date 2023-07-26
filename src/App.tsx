import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import projects from "./assets/projects";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contact from "./pages/Contact";

const projectList = projects();
export type ProjectType = (typeof projectList)[number];

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home projectList={projectList} />} />
        <Route path="/info/:id" element={<Info projectList={projectList} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <div className="mt-20"></div>
    </div>
  );
}

export default App;
