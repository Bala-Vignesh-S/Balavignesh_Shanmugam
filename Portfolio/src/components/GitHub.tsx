import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { Github } from "lucide-react";

interface Repo {
  name: string;
  description?: string;
  stars: number;
  forks: number;
  language?: string;
  html_url: string;
}

interface UserProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

export function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Bala-Vignesh-S")
      .then((response) => response.json())
      .then((data: UserProfile) => setUser(data));

    const specificRepos = [
      {
        name: "VORTUX-AI-Football-Match-Analysis",
        description: "A full-stack AI-powered VAR system using custom YOLO models.",
        stars: 4, forks: 1, language: "Python",
        html_url: "https://github.com/Bala-Vignesh-S/VORTUX-AI",
      },
      {
        name: "GOAT-Wallet-Agent",
        description: "Autonomous blockchain AI agent for fund management.",
        stars: 5, forks: 2, language: "Python",
        html_url: "https://github.com/Bala-Vignesh-S/GOAT-Wallet-Agent",
      },
      {
        name: "PurePath-AI",
        description: "Multi-agent system using LangChain to predict water scarcity risks.",
        stars: 3, forks: 0, language: "Jupyter Notebook",
        html_url: "https://github.com/Bala-Vignesh-S/PurePath-AI",
      },
    ];
    setRepos(specificRepos);
  }, []);

  return (
    <SectionBackground>
      <section id="github">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="Code that lives, breathes, and contributes — open source and beyond 👾">GitHub Contributions</SectionTitle>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { src: 'https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Bala-Vignesh-S&theme=github_dark', alt: 'GitHub Profile Details', label: 'Profile Overview' },
              { src: 'https://streak-stats.demolab.com/?user=Bala-Vignesh-S&theme=dark&hide_border=true&background=0D1117&stroke=30363d&ring=FFD700&fire=FFD700&currStreakNum=c9d1d9&sideNums=c9d1d9&currStreakLabel=FFD700&sideLabels=8b949e&dates=8b949e', alt: 'GitHub Streak Stats', label: 'Contribution Streak' },
            ].map((card, i) => (
              <motion.div
                key={card.alt}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ scale: 1.012, y: -4 }}
                className="group relative min-w-0 w-full overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:border-[var(--accent-cyan)]/30 hover:shadow-[0_0_32px_rgba(0,212,255,0.12)]"
              >
                <img src={card.src} alt={card.alt} className="w-full h-auto block rounded-2xl" loading="lazy"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = 'none';
                    const parent = el.parentElement;
                    if (parent) {
                      parent.style.minHeight = '160px';
                      parent.innerHTML += `<div style="display:flex;align-items:center;justify-content:center;width:100%;min-height:160px;color:#8b949e;font-size:0.875rem;">${card.label} unavailable</div>`;
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Top Repositories */}
          <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="block glass-card-hover p-6"
              >
                <h3 className="text-xl font-semibold text-[var(--accent-cyan)]">{repo.name}</h3>
                <p className="text-[var(--text-secondary)] line-clamp-3 mt-2">{repo.description}</p>
                <div className="mt-4 flex items-center justify-between text-[var(--text-muted)]">
                  <span>{repo.language}</span>
                  <div className="flex space-x-4">
                    <span>⭐ {repo.stars}</span>
                    <span>🍴 {repo.forks}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* GitHub Profile Widget */}
          {user && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row items-center justify-between glass-card p-6"
            >
              <div className="flex items-center space-x-4">
                <motion.img
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                  src={user.avatar_url}
                  alt="GitHub Avatar"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[var(--accent-cyan)]/40"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-100">{user.name}</h3>
                  <p className="text-[var(--text-muted)]">@{user.login}</p>
                </div>
              </div>
              <p className="hidden md:block text-[var(--text-secondary)] flex-1 text-center md:text-left mx-6">{user.bio}</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 text-[var(--text-muted)] mt-4 md:mt-0">
                <span className="flex items-center gap-1 text-sm">👥 {user.followers} Followers</span>
                <span className="flex items-center gap-1 text-sm">📦 {user.public_repos} Repos</span>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center flex items-center justify-center gap-2 gradient-btn px-4 py-2 rounded-lg mt-3 md:mt-0"
                >
                  <Github className="w-5 h-5" /> View Profile
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </SectionBackground>
  );
}
