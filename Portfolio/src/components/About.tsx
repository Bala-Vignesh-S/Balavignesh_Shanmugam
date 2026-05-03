import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "An AI/ML Engineer with an interest in deep learning and blockchain.",
      "Enjoy building intelligent systems and data-driven solutions.",
      "Always exploring cutting-edge AI technologies.",
    ],
    color: "from-cyan-400 to-blue-500",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Develop high-performance AI models and blockchain agents.",
      "Solve algorithmic problems and optimize pipeline efficiency.",
      "Contribute to open-source and follow AI/Web3 trends.",
    ],
    color: "from-purple-400 to-violet-500",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Build tech products that solve real-world challenges at scale.",
      "Advance as an AI Engineer and Data Scientist.",
      "Grow the dev community through open-source contributions.",
    ],
    color: "from-emerald-400 to-green-500",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Technology should simplify lives, not complicate them.",
      "Great software solves problems, not just writes code.",
      "Continuous learning keeps you ahead in tech.",
    ],
    color: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
];

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle subtitle="Passionate developer building innovative solutions and solving real-world problems.">About Me</SectionTitle>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-10 text-center"
          >
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Hey there! 👋 I'm <span className="text-[var(--accent-cyan)] font-semibold">Balavignesh Shanmugam</span>,
              a B.Tech Artificial Intelligence & Data Science student passionate about building intelligent systems and solving real-world problems.
              I've created projects like VORTUX AI for football match analysis and PurePath AI for water risk orchestration.
              With skills in Python, PyTorch, LangChain, and Blockchain, I love exploring cutting-edge AI technologies, solving DSA problems, and building autonomous agents.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex justify-center"
            >
              <span className="text-sm sm:text-base inline-block glass-card px-4 py-2 text-[var(--accent-cyan)] border-[var(--accent-cyan)]/20">
                🚀 I like to build smart solutions for future
              </span>
            </motion.div>
          </motion.div>

          {/* About Section Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {aboutSections.map(({ icon: Icon, title, description, iconBg, iconColor }, index) => (
              <motion.div
                key={title}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="glass-card-hover p-6">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className={`p-3 ${iconBg} rounded-lg border border-white/5`}>
                      <Icon className={`w-6 h-6 ${iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-[var(--text-secondary)] space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </SectionBackground>
  );
}
