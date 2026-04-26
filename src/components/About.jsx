import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS, NAME, BIO } from "../data/constants";
import { fadeUp, stagger } from "../utils/animations";
import { IconCode2, IconLayers, IconStar, IconZap } from "../icons/Icons";
import SectionTitle from "./SectionTitle";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <SectionTitle accent="01. intro">À propos de moi</SectionTitle>
            <motion.p variants={fadeUp} className="text-base leading-relaxed mb-6" style={{ color: COLORS.textDim }}>
              {BIO}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              {[
                ["🎓", "Master Informatique"],
                ["🚀", "Objectif : Alternance"],
                ["📍", "France · Remote OK"],
                // TODO: Ajoute tes propres infos
              ].map(([emoji, text]) => (
                <div key={text} className="flex items-center gap-3 text-sm font-mono" style={{ color: COLORS.textDim }}>
                  <span>{emoji}</span>
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — stat cards */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {[
              { num: "10+", label: "Projets perso", icon: <IconCode2 size={20} /> },
              { num: "3", label: "Langages maîtrisés", icon: <IconLayers size={20} /> },
              { num: "2025", label: "Entrée en Master", icon: <IconStar size={20} /> },
              { num: "∞", label: "Curiosité", icon: <IconZap size={20} /> },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ scale: 1.04, borderColor: COLORS.neonBlue }}
                className="p-6 rounded-2xl border flex flex-col gap-3 cursor-default transition-colors"
                style={{ background: COLORS.bgCard, borderColor: COLORS.border }}
              >
                <div style={{ color: COLORS.neonBlue }}>{stat.icon}</div>
                <div className="text-3xl font-black" style={{ color: COLORS.text }}>{stat.num}</div>
                <div className="text-xs font-mono" style={{ color: COLORS.textMuted }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
