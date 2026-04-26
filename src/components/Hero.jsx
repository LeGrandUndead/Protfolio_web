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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono mb-8 border"
          style={{ borderColor: COLORS.border, color: COLORS.textDim, background: "rgba(59,130,246,0.08)" }}
        >
          <motion.span
            className="w-2 h-2 rounded-full"
            style={{ background: "#22c55e" }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Disponible pour une alternance Master
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-4 leading-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: COLORS.text }}
        >
          {NAME}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-4xl font-bold mb-6"
        >
          <span style={{ color: COLORS.textMuted }}>Je construis </span>
          <TypewriterText words={["des apps React.", "des APIs Node.js.", "des scripts Python.", "des UIs qui captivent.", "des IA.", "Des réseaux."]} />
        </motion.div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ color: COLORS.textDim }}
        >
          Étudiant en Master Informatique. Passionné par les interfaces réactives, les architectures propres et tout ce qui rend le code élégant.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: `0 0 24px ${COLORS.neonBlue}55` }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ background: `linear-gradient(135deg, ${COLORS.neonViolet}, #4f46e5)`, color: "#fff" }}
          >
            Voir mes projets <IconArrowRight size={16} />
          </motion.a>
          <motion.a
            href={LINKS.cv}
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border"
            style={{ borderColor: COLORS.border, color: COLORS.textDim, background: "rgba(255,255,255,0.03)" }}
          >
            <IconDownload size={16} /> Télécharger CV
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono" style={{ color: COLORS.textMuted }}>scroll</span>
          <motion.div
            className="w-px h-10"
            style={{ background: `linear-gradient(to bottom, ${COLORS.neonBlue}, transparent)` }}
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
