/* ============================================================
   🎨 DESIGN TOKENS
   ============================================================ */
export const COLORS = {
  bg: "#07071a",
  bgCard: "#0e0e2a",
  bgCardHover: "#13133a",
  border: "#1e1e4a",
  borderAccent: "#6d28d9",
  neonBlue: "#818cf8",
  neonViolet: "#a78bfa",
  neonCyan: "#c4b5fd",
  text: "#e2e0f9",
  textMuted: "#6b7280",
  textDim: "#a5a3c8",
};

/* ============================================================
   📝 CONTENT
   ============================================================ */

export const NAME = "Kevin William";
export const ROLE = "Développeur Full-Stack";
export const BIO = `Étudiant en L3 Informatique, je construis des applications web robustes avec React, Node.js et Python. Passionné par l'ingénierie logicielle et l'expérience utilisateur, je m'oriente vers un Master pour aller encore plus loin — et créer des produits qui font une vraie différence.`;

export const LINKS = {
  github: "https://github.com/LeGrandUndead",
  linkedin: "https://www.linkedin.com/in/kevin-william-2a4391210/",
  email: "kevinmowilli@email.com",
  cv: "/cv.pdf",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Sales Forecast AI",
    description: "Pipeline deep learning de prévision de ventes avec un réseau LSTM empilé (2 couches, 128→64 units). Traite des données historiques 2019–2024 via fenêtres glissantes de 30 jours. Entraîné sur GPU (RTX 3060).",
    tags: ["Python", "TensorFlow", "LSTM", "Pandas"],
    github: "https://github.com/LeGrandUndead/sales-forecast-AI",
    live: null,
    stars: 0,
    size: "large",
    gradient: "from-violet-700/25 to-indigo-600/15",
  },
  {
    id: 2,
    title: "Pathfinding Agent",
    description: "Agent rationnel naviguant dans un environnement en grille. Compare A* et BFS avec visualisation terminal animée et benchmarking multi-scénarios.",
    tags: ["Python", "A*", "BFS", "IA"],
    github: "https://github.com/LeGrandUndead/pathfinding-agent",
    live: null,
    stars: 0,
    size: "medium",
    gradient: "from-indigo-700/25 to-violet-600/15",
  },
  {
    id: 3,
    title: "Homemade Adam",
    description: "Implémentation from scratch de l'optimiseur Adam et SGD pour entraîner un MLP sur MNIST. Comparaison des convergences avec visualisations des gradients et des poids.",
    tags: ["Python", "PyTorch", "Deep Learning", "NumPy"],
    github: "https://github.com/LeGrandUndead/Homemade-Adam-Implementation",
    live: null,
    stars: 0,
    size: "medium",
    gradient: "from-purple-700/25 to-indigo-700/15",
  },
  {
    id: 4,
    title: "Distributed QCM",
    description: "Système de QCM distribué en Java via MQTT (Mosquitto). Architecture client/serveur multi-machines avec persistance des scores JSON et protocole TDD.",
    tags: ["Java", "MQTT", "Gradle", "Systèmes distribués"],
    github: "https://github.com/LeGrandUndead/Distribued-systems",
    live: null,
    stars: 0,
    size: "medium",
    gradient: "from-violet-800/25 to-purple-600/15",
  },
  {
    id: 5,
    title: "Uni Game Jam",
    description: "Jeu vidéo développé en équipe lors d'une Game Jam universitaire (module main501 à l'URCA). Conçu et livré sous contrainte de temps.",
    tags: ["Unity", "C#", "Game Design"],
    github: "https://github.com/LeGrandUndead/Uni_Game_Jam",
    live: null,
    stars: 0,
    size: "small",
    gradient: "from-indigo-800/25 to-violet-700/15",
  },
];

export const SKILLS = {
  Frontend: [
    { name: "React", level: 80 },
    { name: "TypeScript", level: 65 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Framer Motion", level: 60 },
    { name: "HTML / CSS", level: 85 },
  ],
  Backend: [
    { name: "Node.js / Express", level: 75 },
    { name: "Python", level: 85 },
    { name: "Java", level: 75 },
    { name: "REST APIs", level: 78 },
    { name: "SQL / PostgreSQL", level: 65 },
  ],
  Outils: [
    { name: "Git & GitHub", level: 85 },
    { name: "TensorFlow / PyTorch", level: 70 },
    { name: "Linux / Bash", level: 72 },
    { name: "Unity / C#", level: 60 },
    { name: "Docker", level: 50 },
  ],
};

export const TERMINAL_COMMANDS = {
  help: `Commandes disponibles :
  → contact    Mes coordonnées
  → about      Qui suis-je ?
  → cv         Télécharger mon CV
  → social     Réseaux sociaux
  → clear      Effacer le terminal`,

  contact: `📧 Email    : kevinmowilli@email.com
📍 Location  : France (disponible en remote)
💼 Dispo     : Stage / Alternance Master`,

  about: `👨‍💻 Kevin William
🎓 Master Informatique
🔧 Full-Stack & AI/ML Developer
⚡ Passionné par les systèmes distribués et le deep learning`,

  cv: `📄 Téléchargement du CV en cours...
→ Ouverture de /cv.pdf`,

  social: `🐙 GitHub   : https://github.com/LeGrandUndead
💼 LinkedIn : https://www.linkedin.com/in/kevin-william-2a4391210/`,

  clear: "__CLEAR__",
};