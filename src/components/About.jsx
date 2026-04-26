import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS, NAME, BIO } from "../data/constants";
import { fadeUp, stagger } from "../utils/animations";
import { IconCode2, IconLayers, IconStar, IconZap } from "../icons/Icons";
import SectionTitle from "./SectionTitle";


export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle accent="01. intro">Profil Ingénieur</SectionTitle>
            <p className="text-base leading-relaxed mb-6" style={{ color: COLORS.textDim }}>
              Mon parcours académique à l'Université de Reims [cite: 28] et mes expériences professionnelles m'ont permis de développer une rigueur technique polyvalente. 
              Que ce soit pour l'audit de 200+ entrées critiques via Google API [cite: 34, 72] ou le développement d'applications Unity[cite: 45, 92], je privilégie l'efficacité et la propreté du code.
            </p>
            <div className="space-y-3 font-mono text-sm" style={{ color: COLORS.textDim }}>
              <p>🌍 Anglais & Français : Courant [cite: 23, 24]</p>
              <p>🛠️ Tech : Administration Linux, Python, React, Java [cite: 14, 105]</p>
              <p>🎓 Master : ASR / IA / CHPS / DAS [cite: 2, 49, 96, 140]</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "200+", label: "Entrées Data Fiabilisées", icon: <IconZap size={20} /> },
              { num: "2", label: "Laboratoires de Recherche", icon: <IconLayers size={20} /> },
              { num: "M1", label: "Niveau Master", icon: <IconStar size={20} /> },
              { num: "3", label: "Pays d'expérience", icon: <IconCode2 size={20} /> },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl border bg-[#0e0e2a] border-[#1e1e4a]">
                <div style={{ color: COLORS.neonBlue }} className="mb-2">{stat.icon}</div>
                <div className="text-3xl font-black" style={{ color: COLORS.text }}>{stat.num}</div>
                <div className="text-xs font-mono uppercase tracking-tighter" style={{ color: COLORS.textMuted }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}