import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COLORS, NAME, LINKS } from "../data/constants";
import { IconLink } from "../icons/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["À propos", "Projets", "Compétences", "Contact"];
  const anchors = ["about", "projects", "skills", "contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
      style={{
        background: scrolled ? "rgba(8,11,20,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
        transition: "all 0.3s ease",
      }}
    >
      <motion.span
        className="font-mono font-bold text-sm"
        style={{ color: COLORS.neonBlue }}
        whileHover={{ scale: 1.05 }}
      >
        &lt;{NAME.split(" ")[0].toLowerCase()} /&gt;
      </motion.span>

      <div className="hidden md:flex gap-8">
        {navLinks.map((link, i) => (
          <motion.a
            key={link}
            href={`#${anchors[i]}`}
            className="text-sm font-mono transition-colors"
            style={{ color: COLORS.textDim }}
            whileHover={{ color: COLORS.neonBlue }}
          >
            {link}
          </motion.a>
        ))}
      </div>

      <motion.a
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono border"
        style={{ borderColor: COLORS.border, color: COLORS.textDim, background: "rgba(255,255,255,0.03)" }}
      >
        <IconLink size={14} />
        GitHub
      </motion.a>
    </motion.nav>
  );
}
