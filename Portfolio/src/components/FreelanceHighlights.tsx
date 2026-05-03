import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  PenTool, Megaphone, Target, Layout, Smartphone, Globe,
  Building2, Camera, Cpu, Award, TrendingUp, Film, Play, X,
} from 'lucide-react';

type FreelanceItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Design' | 'Development' | 'Marketing' | 'Branding';
  size?: 'wide' | 'tall';
  icon: React.ReactNode;
  videoSrc?: string;
};

const freelanceItems: FreelanceItem[] = [
  { title: 'Logo Design', description: 'Crafting memorable and premium logo systems for modern brands.', image: '/assets/logo2.png', tags: ['Professional', 'Branding', 'Premium'], category: 'Branding', icon: <PenTool className="h-5 w-5" /> },
  { title: 'Business & Event Poster', description: 'High-impact campaign visuals built for events and promotions.', image: '/assets/bus.png', tags: ['Professional', 'Promotion', 'Design'], category: 'Design', icon: <Megaphone className="h-5 w-5" />, size: 'wide' },
  { title: 'Product Ads Design', description: 'Converting product features into eye-catching ad creatives.', image: '/assets/pro.png', tags: ['Prototyping', 'Promotion', 'Typography'], category: 'Marketing', icon: <Target className="h-5 w-5" /> },
  { title: 'UI/UX Design', description: 'Human-centered interfaces with clean flows and visual clarity.', image: '/assets/uxm.jpg', tags: ['Prototyping', 'Wireframing', 'Design'], category: 'Design', icon: <Layout className="h-5 w-5" />, size: 'wide' },
  { title: 'Tourist Mobile App', description: 'Mobile-first travel app experiences with responsive interactions.', image: '/assets/app3.jpg', tags: ['Featured', 'Personalized', 'Responsive'], category: 'Development', icon: <Smartphone className="h-5 w-5" /> },
  { title: 'Portfolio Website', description: 'Showcase-focused web presence for creators and professionals.', image: '/assets/p2.png', tags: ['Showcase', 'Premium', 'Creative'], category: 'Development', icon: <Globe className="h-5 w-5" /> },
  { title: 'Business & Agency Website', description: 'Scalable website systems for lead generation and authority.', image: '/assets/cli.png', tags: ['Professional', 'Showcase', 'SEO'], category: 'Development', icon: <Building2 className="h-5 w-5" />, size: 'wide' },
  { title: 'Data Analyst AI Agent', description: 'Custom scalable digital storefronts designed to maximize online conversions.', image: '/assets/newn8n.png', tags: ['E-Commerce', 'Professional', 'UI/UX'], category: 'Development', icon: <Globe className="h-5 w-5" />, size: 'wide' },
  { title: 'Brand Identity Materials', description: 'Consistent multi-touchpoint assets for brand storytelling.', image: '/assets/mmm.png', tags: ['Professional', 'Personalized', 'Designs'], category: 'Branding', icon: <Award className="h-5 w-5" />, size: 'wide' },
  { title: 'SEO Campaign', description: 'Data-backed search strategy to improve visibility and ranking.', image: '/assets/seo2.jpg', tags: ['Keywords', 'Promotion', 'Ranking'], category: 'Marketing', icon: <TrendingUp className="h-5 w-5" /> },
  { title: 'Meta Ads Campaign', description: 'Custom scalable digital storefronts designed to maximize online conversions.', image: '/assets/adsrun.jpg', tags: ['Branding', 'Professional', 'Marketing'], category: 'Marketing', icon: <Globe className="h-5 w-5" />, size: 'wide' },
  { title: 'Smart Home Automation', description: 'Practical IoT prototypes integrating hardware and UX.', image: '/assets/iot.jpg', tags: ['IoT', 'ESP32', 'Microcontroller'], category: 'Development', icon: <Cpu className="h-5 w-5" /> },
];

export function FreelanceHighlights() {
  const [openItem, setOpenItem] = useState<FreelanceItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenItem(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <SectionBackground>
      <section id="freelance">
        <div className="container mx-auto px-6 sm:px-8">
          <SectionTitle subtitle="Design & branding work crafted for real clients and events ðŸŽ¨">Freelance Highlights</SectionTitle>
          <div className="mx-auto max-w-6xl pb-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              <AnimatePresence mode="popLayout">
                {freelanceItems.map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 14 }}
                    transition={{ duration: 0.35, delay: i * 0.03 }} role="button" tabIndex={0}
                    onClick={() => setOpenItem(item)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => { if (e.key === 'Enter') setOpenItem(item); }}
                    className="break-inside-avoid mb-4 cursor-pointer">
                    <div className="group/bento flex flex-col overflow-hidden rounded-xl glass-card transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-cyan)]/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]">
                      <div className="relative w-full overflow-hidden">
                        <img src={item.image} alt={item.title} className="block w-full h-auto bg-white/5" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent" />
                        <div className="absolute left-3 top-3 inline-flex rounded-full bg-[var(--accent-cyan)]/10 backdrop-blur-sm px-2 py-1 text-[10px] text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20 sm:px-2.5 sm:text-[11px]">
                          {item.category}
                        </div>
                        {item.videoSrc && (
                          <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[10px] text-white backdrop-blur-sm sm:px-2.5 sm:text-[11px]">
                            <Play size={12} /> Video
                          </div>
                        )}
                      </div>
                      <div className="p-3 sm:p-4 flex items-center gap-2">
                        <div className="flex-shrink-0 inline-flex items-center justify-center rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 p-2 text-[var(--accent-cyan)] shadow-sm transition-all duration-300 group-hover/bento:scale-110 group-hover/bento:bg-[var(--accent-cyan)]/15">
                          {item.icon}
                        </div>
                        <div className="font-sans font-bold leading-tight text-[clamp(0.85rem,1.6vw,1rem)] text-gray-100">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence>
            {openItem && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpenItem(null)} />
                <div className="relative z-10 flex h-full w-full items-center justify-center p-4">
                  <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }}
                    transition={{ duration: 0.25 }} className="relative w-full max-w-5xl">
                    <button aria-label="Close" onClick={() => setOpenItem(null)} className="absolute -top-10 right-0 text-white hover:text-[var(--accent-cyan)]">
                      <X size={28} />
                    </button>
                    <div className="overflow-hidden rounded-xl glass-card">
                      {openItem.videoSrc ? (
                        <video src={openItem.videoSrc} controls autoPlay className="h-auto max-h-[75vh] w-full" />
                      ) : (
                        <img src={openItem.image} alt={openItem.title} className="h-auto max-h-[75vh] w-full object-contain" />
                      )}
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-100 sm:text-xl">{openItem.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {openItem.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 px-2 py-1 text-[11px] text-[var(--accent-cyan)] sm:text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </SectionBackground>
  );
}
