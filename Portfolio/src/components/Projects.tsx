import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact, SiNodedotjs, SiFirebase, SiTailwindcss, SiTypescript,
  SiNextdotjs, SiMongodb, SiPrisma, SiShadcnui, SiFramer,
  SiSocketdotio, SiStripe, SiAppwrite, SiHtml5, SiCss3,
  SiJavascript, SiBootstrap, SiRedux, SiVite, SiSupabase,
  SiGooglegemini, SiFormspree, SiNetlify, SiN8N, SiGooglesheets,
  SiAnthropic, SiPython, SiOpencv, SiFlask, SiTensorflow, SiEthereum
} from 'react-icons/si';
import { VscJson } from "react-icons/vsc";

const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#ffffff' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#ffffff' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
  redux: { icon: SiRedux, name: 'Redux', color: '#764ABC' },
  vite: { icon: SiVite, name: 'Vite', color: '#646CFF' },
  supabase: { icon: SiSupabase, name: 'Supabase', color: '#3ecf8e' },
  gemini: { icon: SiGooglegemini, name: 'Google Gemini AI', color: '#8f63f4' },
  formspree: { icon: SiFormspree, name: 'Formspree', color: '#e03c31' },
  netlify: { icon: SiNetlify, name: 'Netlify', color: '#00ad9f' },
  n8n: { icon: SiN8N, name: "n8n", color: '#ff6584' },
  json: { icon: VscJson, name: "JSON", color: '#fbbf24' },
  sheets: { icon: SiGooglesheets, name: "Google Sheets", color: '#34a853' },
  claude: { icon: SiAnthropic, name: "Claude", color: '#d97757' },
  python: { icon: SiPython, name: "Python", color: '#3776AB' },
  opencv: { icon: SiOpencv, name: "OpenCV", color: '#5C3EE8' },
  flask: { icon: SiFlask, name: "Flask", color: '#000000' },
  tensorflow: { icon: SiTensorflow, name: "TensorFlow", color: '#FF6F00' },
  ethereum: { icon: SiEthereum, name: "Web3/Ethereum", color: '#3C3C3D' },
};

const projects = [
  {
    title: 'VORTUX AI — Football Match Analysis Platform',
    description: 'Built a full-stack AI-powered VAR system using custom YOLO models for player detection, ball tracking, foul recognition, and offside analysis. Includes a team analytics dashboard with heatmaps.',
    image: '/assets/aqi.png', // Using existing placeholder
    github: 'https://github.com/Bala-Vignesh-S',
    techStack: [techStacks.python, techStacks.opencv, techStacks.flask, techStacks.react, techStacks.tailwind],
  },
  {
    title: 'LifeGuard AI — Elderly Care App',
    description: 'Developed a cross-platform mobile app for elderly care with on-device ML and cloud-based AI integration. Implemented real-time fall detection using TensorFlow Lite with automated emergency alerts via Twilio.',
    image: '/assets/neu.png', // Using existing placeholder
    github: 'https://github.com/Bala-Vignesh-S',
    techStack: [techStacks.typescript, techStacks.tensorflow, techStacks.gemini, techStacks.react],
  },
  {
    title: 'GOAT Wallet Agent',
    description: 'Engineered an autonomous blockchain AI agent for fund management using real-time market and on-chain signals. Integrated a Telegram bot interface for natural language control.',
    image: '/assets/_con.png', // Using existing placeholder
    github: 'https://github.com/Bala-Vignesh-S',
    techStack: [techStacks.python, techStacks.ethereum, techStacks.node],
  },
  {
    title: 'PurePath AI',
    description: 'Built a multi-agent system using LangChain to predict water scarcity risks in rural communities. Designed specialized agents for risk prediction and stakeholder mapping.',
    image: '/assets/mgv.png', // Using existing placeholder
    github: 'https://github.com/Bala-Vignesh-S',
    techStack: [techStacks.python, techStacks.gemini, techStacks.json],
  },
];

export function Projects() {
  return (
    <SectionBackground>
      <section id="projects">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Every project, a product. Every product, a solution with a story">Projects</SectionTitle>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} index={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
