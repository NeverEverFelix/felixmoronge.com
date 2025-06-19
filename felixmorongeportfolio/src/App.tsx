import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Tutorial from "./pages/Tutorial";
import Tutorial2 from "./pages/Tutorial2";


import './styles/landing.css';




export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Enterprise-Grade CI/CD Case Study" element={<Projects />} />
          <Route path="/Fabrics Web with Production-Grade DevOps Case Study" element={<Project2 />} />
          <Route path="/StoryBuilder My entry point to DevOps Case Study" element={<Project3 />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Tutorial2" element={<Tutorial2 />} />

        </Routes>
      </Router>
    </div>
  );
}
