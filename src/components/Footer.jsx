import { COLORS, NAME } from "../data/constants";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t text-center" style={{ borderColor: COLORS.border }}>
      <p className="text-xs font-mono" style={{ color: COLORS.textMuted }}>
        Conçu & codé par{" "}
        <span style={{ color: COLORS.neonViolet }}>{NAME}</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
