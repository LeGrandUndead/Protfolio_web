import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS, PROJECTS } from "../data/constants";
import { fadeUp, stagger } from "../utils/animations";
import { IconLink, IconExternalLink, IconStar } from "../icons/Icons";
import SectionTitle from "./SectionTitle";

function ProjectCard({ project, delay }) {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-1",
    small: "md:col-span-1",
  };

  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay }}
      whileHover={{ scale: 1.02, borderColor: COLORS.neonBlue }}
      className={`relative overflow-hidden rounded-2xl border p-6 flex flex-col justify-between group cursor-pointer ${sizeClasses[project.size]}`}
      style={{ background: COLORS.bgCard, borderColor: COLORS.border, minHeight: 200 }}
    >
      {/* Gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-70 transition-opacity`} />

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ boxShadow: `inset 0 0 60px ${COLORS.neonBlue}18` }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold" style={{ color: COLORS.text }}>{project.title}</h3>
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <IconLink size={16} style={{ color: COLORS.textMuted }} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <IconExternalLink size={16} style={{ color: COLORS.textMuted }} />
              </motion.a>
            )}
          </div>
        </div>
        <p className="text-sm mb-4 leading-relaxed" style={{ color: COLORS.textDim }}>{project.description}</p>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-md text-xs font-mono border"
            style={{ borderColor: `${COLORS.neonBlue}40`, color: COLORS.neonBlue, background: `${COLORS.neonBlue}10` }}
          >
            {tag}
          </span>
        ))}
        <span className="ml-auto flex items-center gap-1 text-xs font-mono" style={{ color: COLORS.textMuted }}>
          <IconStar size={12} /> {project.stars}
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <SectionTitle accent="02. work">Mes Projets</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
