import { useSelector } from "react-redux";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Project/Projects";
import Skills from "./components/Skill/Skills";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const darkModeEnabled = useSelector((state) => state.darkMode.isEnabled);
  return (
    <div className={`${darkModeEnabled ? "dark" : ""}`}>
      <div className="bg-white dark:bg-[#0F0F0F] overflow-x-hidden">
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Skills />
        <Contact />
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
