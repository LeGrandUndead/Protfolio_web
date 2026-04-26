import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COLORS, NAME, LINKS } from "../data/constants";
import { IconArrowRight, IconDownload } from "../icons/Icons";

function TypewriterText({ words }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words]);

  return (
    <span>
      <span style={{ color: COLORS.neonCyan }}>{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ color: COLORS.neonBlue }}
      >
        |
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono mb-8 border"
          style={{ borderColor: COLORS.border, color: COLORS.textDim, background: "rgba(59,130,246,0.08)" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Recherche Alternance en Master (ASR / IA / Sécurité)
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-4" 
          style={{ color: COLORS.text }}
        >
          {NAME}
        </motion.h1>

        <motion.div className="text-2xl md:text-4xl font-bold mb-6">
          <span style={{ color: COLORS.textMuted }}>Expertise en </span>
          <TypewriterText words={["Systèmes & Réseaux.", "Deep Learning.", "Développement Sécurisé.", "Unity & 3D.", "Data Engineering."]} />
        </motion.div>

        <p className="text-base md:text-lg max-w-2xl mb-10 leading-relaxed" style={{ color: COLORS.textDim }}>
          Futur ingénieur spécialisé dans la conception d'architectures logicielles robustes. 
          Expertise prouvée en nettoyage de données massives aux USA [cite: 34] et en analyse d'images par IA au laboratoire CRESTIC[cite: 43, 134].
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-6 py-3 rounded-xl font-semibold text-sm bg-indigo-600 text-white">
            Parcourir mes travaux
          </a>
          <a href={LINKS.cv} download className="px-6 py-3 rounded-xl font-semibold text-sm border" style={{ color: COLORS.textDim }}>
             Mon CV Complet (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}