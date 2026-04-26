import { motion } from "framer-motion";
import { COLORS } from "../data/constants";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(${COLORS.neonViolet} 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.neonViolet} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px opacity-20"
        style={{ background: `linear-gradient(90deg, transparent, ${COLORS.neonViolet}, transparent)` }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      {/* Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ background: "#4c1d95", top: "10%", left: "-10%" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: "#3730a3", bottom: "20%", right: "-5%" }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
