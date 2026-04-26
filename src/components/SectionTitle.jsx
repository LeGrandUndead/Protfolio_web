import { motion } from "framer-motion";
import { COLORS } from "../data/constants";
import { fadeUp } from "../utils/animations";

export default function SectionTitle({ children, accent }) {
  return (
    <div className="mb-12">
      <motion.p
        variants={fadeUp}
        className="text-xs font-mono tracking-[0.3em] uppercase mb-2"
        style={{ color: COLORS.neonBlue }}
      >
        // {accent}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: COLORS.text }}
      >
        {children}
      </motion.h2>
    </div>
  );
}
