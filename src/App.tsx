import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { getProjects } from "./assets/projects";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  const projectList = getProjects();

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
