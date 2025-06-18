import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Tutorial from "./pages/Tutorial";


import './styles/landing.css';




export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Project2" element={<Project2 />} />
          <Route path="/Project3" element={<Project3 />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          

        </Routes>
      </Router>
    </div>
  );
}
