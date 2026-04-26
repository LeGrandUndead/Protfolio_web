import { AnimatePresence } from "framer-motion";
import { COLORS } from "./data/constants";

import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TerminalContact from "./components/TerminalContact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative" style={{ background: COLORS.bg, color: COLORS.text }}>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <TerminalContact />
      </main>
      <Footer />
    </div>
  );
}
