import { Routes, Route, BrowserRouter } from "react-router";

import "./App.css";

import Tabs from "./components/Tabs.tsx";
import About from "./pages/About.tsx";
import Skillset from "./pages/Skillset.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="font-display text-blue-800 m-10">
        <Tabs>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skillset />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Tabs>
      </div>
    </BrowserRouter>
  );
}

export default App;
