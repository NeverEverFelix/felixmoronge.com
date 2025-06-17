import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Project2 from "./pages/Project2";
import './styles/landing.css';




export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Project2" element={<Project2 />} />
          
        </Routes>
      </Router>
    </div>
  );
}
