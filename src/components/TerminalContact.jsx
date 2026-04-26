import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS, NAME, LINKS, TERMINAL_COMMANDS } from "../data/constants";
import { fadeUp, stagger } from "../utils/animations";
import { IconMail, IconExternalLink, IconLink, IconChevronRight, IconTerminal } from "../icons/Icons";
import SectionTitle from "./SectionTitle";

export default function TerminalContact() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", text: `Bienvenue sur le terminal de ${NAME}.\nTape "help" pour voir les commandes disponibles.` },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const result = TERMINAL_COMMANDS[trimmed];

    setHistory((prev) => [...prev, { type: "input", text: cmd }]);

    if (!result) {
      setHistory((prev) => [
        ...prev,
        { type: "error", text: `Commande inconnue : "${trimmed}". Tape "help".` },
      ]);
      return;
    }

    if (result === "__CLEAR__") {
      setHistory([]);
      return;
    }

    if (trimmed === "cv") {
      window.open(LINKS.cv, "_blank");
    }

    setHistory((prev) => [...prev, { type: "output", text: result }]);
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <SectionTitle accent="04. contact">Prendre contact</SectionTitle>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
            {[
              { href: LINKS.github, icon: <IconLink size={18} />, label: "GitHub" },
              { href: LINKS.linkedin, icon: <IconExternalLink size={18} />, label: "LinkedIn" },
              { href: `mailto:${LINKS.email}`, icon: <IconMail size={18} />, label: LINKS.email },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, borderColor: COLORS.neonBlue }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono border transition-colors"
                style={{ borderColor: COLORS.border, color: COLORS.textDim, background: COLORS.bgCard }}
              >
                <span style={{ color: COLORS.neonBlue }}>{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Terminal window */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: COLORS.border, background: "#050810" }}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ borderColor: COLORS.border, background: "#080b14" }}
            >
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-xs font-mono flex items-center gap-1" style={{ color: COLORS.textMuted }}>
                <IconTerminal size={12} />
                portfolio@{NAME.split(" ")[1]?.toLowerCase() || "user"}: ~
              </span>
            </div>

            {/* Output */}
            <div className="p-4 h-64 overflow-y-auto font-mono text-sm space-y-2">
              {history.map((line, i) => (
                <div key={i}>
                  {line.type === "input" && (
                    <div className="flex gap-2">
                      <span style={{ color: COLORS.neonBlue }}>❯</span>
                      <span style={{ color: COLORS.text }}>{line.text}</span>
                    </div>
                  )}
                  {line.type === "output" && (
                    <pre className="whitespace-pre-wrap leading-relaxed" style={{ color: COLORS.textDim }}>
                      {line.text}
                    </pre>
                  )}
                  {line.type === "error" && (
                    <div style={{ color: "#f87171" }}>{line.text}</div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-t"
              style={{ borderColor: COLORS.border }}
            >
              <IconChevronRight size={14} style={{ color: COLORS.neonBlue }} />
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Tape une commande..."
                className="flex-1 bg-transparent outline-none font-mono text-sm"
                style={{ color: COLORS.text, caretColor: COLORS.neonBlue }}
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          </motion.div>

          {/* Quick command chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-4">
            {["help", "contact", "cv", "social"].map((cmd) => (
              <motion.button
                key={cmd}
                onClick={() => runCommand(cmd)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 rounded-lg text-xs font-mono border"
                style={{ borderColor: COLORS.border, color: COLORS.textMuted, background: COLORS.bgCard }}
              >
                {cmd}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
