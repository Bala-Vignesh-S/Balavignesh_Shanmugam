import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { SiLeetcode } from "react-icons/si";

export function Leetcode() {
  return (
    <SectionBackground>
      <section id="leetcode">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="Coding isn't just practice — it's how I sharpen problem-solving daily 🚀">Leetcode Progress</SectionTitle>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="https://leetcard.jacoblin.cool/Balavignesh_Shanmugam?theme=dark&font=Arapey&ext=activity"
                  alt="LeetCode Stats Card"
                  title="LeetCode Stats Card"
                  className="w-full h-auto rounded-xl glass-card hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="max-w-2xl">
              <h3 className="text-center lg:text-left text-2xl font-bold text-[var(--accent-cyan)] mb-4">
                My Leetcode Journey
              </h3>
              <p className="text-center lg:text-left text-lg text-[var(--text-secondary)] mb-4">
                Solving problems on Leetcode has helped me strengthen my Data
                Structures and Algorithms skills. I enjoy tackling challenges that
                push my problem-solving abilities and prepare me for technical
                interviews.
              </p>
              <p className="text-center lg:text-left text-lg text-[var(--text-secondary)]">
                I've completed hundreds of problems across a variety of topics,
                including arrays, trees, graphs, and dynamic programming. My goal
                is to keep improving and stay consistent in learning and solving
                new problems daily.
              </p>

              <div className="mt-6 flex justify-center lg:justify-start">
                <a
                  href="https://leetcode.com/u/Dinesh_coder30/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 gradient-btn px-4 py-2 rounded-lg"
                >
                  <SiLeetcode className="w-5 h-5" /> View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
