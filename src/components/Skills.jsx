import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { COLORS, SKILLS } from "../data/constants";
import { fadeUp, stagger } from "../utils/animations";
import { IconGlobe, IconServer, IconWrench } from "../icons/Icons";
import SectionTitle from "./SectionTitle";

function SkillBar({ skill, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      className="flex flex-col gap-1"
    >
      <div className="flex justify-between text-xs font-mono mb-1">
        <span style={{ color: COLORS.textDim }}>{skill.name}</span>
        <span style={{ color: COLORS.textMuted }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: COLORS.border }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${COLORS.neonViolet}, #6d28d9)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const CATEGORY_ICONS = {
    Frontend: <IconGlobe size={16} />,
    Backend: <IconServer size={16} />,
    Outils: <IconWrench size={16} />,
  };

  return (
    <section id="skills" ref={ref} className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <SectionTitle accent="03. skills">Compétences</SectionTitle>

          {/* Tabs */}
          <motion.div variants={fadeUp} className="flex gap-2 mb-10 flex-wrap">
            {Object.keys(SKILLS).map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveTab(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono border transition-all"
                style={{
                  borderColor: activeTab === cat ? COLORS.neonBlue : COLORS.border,
                  color: activeTab === cat ? COLORS.neonBlue : COLORS.textMuted,
                  background: activeTab === cat ? `${COLORS.neonBlue}15` : "transparent",
                }}
              >
                {CATEGORY_ICONS[cat]}
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-5 p-6 rounded-2xl border"
              style={{ background: COLORS.bgCard, borderColor: COLORS.border }}
            >
              {SKILLS[activeTab].map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.08} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
