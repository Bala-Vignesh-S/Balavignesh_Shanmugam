import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { LogoLoop, LogoItem } from "./ui/LogoLoop";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython, SiPytorch, SiTensorflow, SiOpencv, SiEthereum, SiSolidity, SiDocker, SiAmazonwebservices, SiPostgresql, SiFlask, SiGit, SiGithub, SiVercel, SiMysql, SiMongodb, SiJupyter, SiPostman } from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaMicrosoft } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { BiBrain } from "react-icons/bi";
import { FlaskConical } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type SkillItem = {
  name: string;
  icon?: IconType | LucideIcon;
  imageSrc?: string;
  color?: string;
  url: string;
};

type SkillCategory = {
  name: "Tech Stack" | "Tools";
  items: SkillItem[];
};

// Categorized skills structure (simplified into two groups)
const skillCategories: SkillCategory[] = [
  {
    name: "Tech Stack",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB", url: "https://www.python.org/" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", url: "https://pytorch.org/" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", url: "https://www.tensorflow.org/" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8", url: "https://opencv.org/" },
      { name: "Solidity", icon: SiSolidity, color: "#363636", url: "https://soliditylang.org/" },
      { name: "Ethereum", icon: SiEthereum, color: "#3C3C3D", url: "https://ethereum.org/" },
      { name: "Flask", icon: SiFlask, color: "#000000", url: "https://flask.palletsprojects.com/" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", url: "https://www.postgresql.org/" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#232F3E", url: "https://aws.amazon.com/" },
      { name: "Docker", icon: SiDocker, color: "#2496ED", url: "https://www.docker.com/" },
      { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
      { name: "TypeScript", icon: SiJavascript, color: "#3178c6", url: "https://www.typescriptlang.org/" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
      { name: "GitHub", icon: SiGithub, url: "https://github.com/" },
      { name: "VS Code", icon: VscVscode, color: "#007acc", url: "https://code.visualstudio.com/" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626", url: "https://jupyter.org/" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", url: "https://www.postman.com/" },
      { name: "Cursor IDE", icon: BiBrain, color: "#00d4aa", url: "https://cursor.sh/" },
    ],
  },
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("Tech Stack");

  const filterOptions = [
    { label: "Tech Stack", value: "Tech Stack" },
    { label: "Tools", value: "Tools" },
  ];

  const activeCategory = useMemo(
    () => skillCategories.find((category) => category.name === activeFilter) ?? skillCategories[0],
    [activeFilter]
  );

  const skillRows = useMemo(() => {
    const midpoint = Math.ceil(activeCategory.items.length / 2);
    return [activeCategory.items.slice(0, midpoint), activeCategory.items.slice(midpoint)].filter((row) => row.length > 0);
  }, [activeCategory]);

  const logosByRow = useMemo(
    () =>
      skillRows.map((row) =>
        row.map((skill): LogoItem => {
          const Icon = skill.icon;
          return {
            href: skill.url,
            title: skill.name,
            ariaLabel: `${skill.name} documentation`,
            node: (
              <span className="inline-flex items-center gap-2.5 px-1 py-1 text-[17px] font-semibold text-gray-100 transition-colors duration-300">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${skill.color ?? "#3b82f6"}1A` }}
                >
                  {skill.imageSrc ? (
                    <img src={skill.imageSrc} alt={skill.name} className="h-6 w-6 object-contain" loading="lazy" />
                  ) : Icon ? (
                    <Icon size={22} color={skill.color} className={!skill.color ? "text-[var(--accent-cyan)]" : undefined} />
                  ) : null}
                </span>
                <span className="whitespace-nowrap">{skill.name}</span>
              </span>
            ),
          };
        })
      ),
    [skillRows]
  );

  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="A modern tech stack designed for impact, efficiency, and scale ðŸ“ˆ">Skills</SectionTitle>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filterOptions.map((option) => (
              <motion.button
                key={option.value}
                type="button"
                onClick={() => setActiveFilter(option.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${activeFilter === option.value
                    ? "border-[var(--accent-cyan)]/50 bg-[var(--accent-cyan)] text-[#000000] shadow-lg shadow-[var(--accent-cyan)]/20"
                    : "border-white/10 text-[var(--text-secondary)] hover:border-[var(--accent-cyan)]/30 hover:text-[var(--accent-cyan)] bg-white/5"
                  }`}
              >
                {option.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="relative -mx-6 md:-mx-8"
            >
              <div className="space-y-3">
                {logosByRow.map((logos, index) => (
                  <LogoLoop
                    key={`${activeCategory.name}-${index}`}
                    logos={logos}
                    speed={index % 2 === 0 ? 86 : 72}
                    direction={index % 2 === 0 ? "left" : "right"}
                    gap={24}
                    logoHeight={44}
                    pauseOnHover
                    fadeOut
                    scaleOnHover
                    ariaLabel={`${activeCategory.name} skill carousel row ${index + 1}`}
                    className="py-1"
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </SectionBackground>
  );
}