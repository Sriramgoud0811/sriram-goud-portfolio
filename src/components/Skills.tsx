import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Sparkles, 
  Database, 
  BarChart3, 
  Binary, 
  Network, 
  Server, 
  Compass,
  CheckCircle2,
  Box,
  Fingerprint
} from 'lucide-react';
import { SKILLS_ECOSYSTEM, SKILL_CATEGORIES_METADATA } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const displayedSkills = activeCategory === 'ALL' 
    ? SKILLS_ECOSYSTEM 
    : SKILLS_ECOSYSTEM.filter(s => s.category === activeCategory);

  const categoryColorMap: Record<string, { badge: string; border: string; glow: string }> = {
    DATA: { badge: 'text-sky-400 bg-sky-950/40 border-sky-500/30', border: 'hover:border-sky-500/40', glow: 'from-sky-500/10' },
    ANALYTICS: { badge: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30', border: 'hover:border-emerald-500/40', glow: 'from-emerald-500/10' },
    BI: { badge: 'text-amber-400 bg-amber-950/40 border-amber-500/30', border: 'hover:border-amber-500/40', glow: 'from-amber-500/10' },
    ML: { badge: 'text-purple-400 bg-purple-950/40 border-purple-500/30', border: 'hover:border-purple-500/40', glow: 'from-purple-500/10' },
    AI: { badge: 'text-teal-400 bg-teal-950/40 border-teal-500/30', border: 'hover:border-teal-500/40', glow: 'from-teal-500/10' },
    GENAI: { badge: 'text-pink-400 bg-pink-950/40 border-pink-500/30', border: 'hover:border-pink-500/40', glow: 'from-pink-500/10' },
    ENGINEERING: { badge: 'text-indigo-400 bg-indigo-950/40 border-indigo-500/30', border: 'hover:border-indigo-500/40', glow: 'from-indigo-500/10' }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono font-medium text-emerald-400 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNOLOGY ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Interactive Competence Matrix
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Explorable technical infrastructure spanning Data Ingestion, Statistical Modeling, Machine Learning, and Generative AI architectures.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SKILL_CATEGORIES_METADATA.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedSkill(null);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-105'
                    : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-zinc-300 text-zinc-900' : 'bg-zinc-800 text-zinc-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid - Floating Magnetic Tiles */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => {
              const colorInfo = categoryColorMap[skill.category] || {
                badge: 'text-zinc-400 bg-zinc-900 border-zinc-700',
                border: 'hover:border-zinc-500',
                glow: 'from-zinc-500/10'
              };

              const isSelected = selectedSkill?.name === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedSkill(isSelected ? null : skill)}
                  className={`group relative p-4 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 ${colorInfo.border} transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected ? 'ring-2 ring-emerald-400 bg-zinc-900/90 border-transparent shadow-[0_0_30px_rgba(16,185,129,0.15)]' : ''
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-widest ${colorInfo.badge}`}>
                        {skill.category}
                      </span>
                      {skill.highlight && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>CORE</span>
                        </span>
                      )}
                    </div>
                    <div className="text-base font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                      {skill.name}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>

                  <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400">
                    <span>ENTERPRISE SPEC</span>
                    <span>CLICK TO EXPAND</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Skill Detail Modal / Banner */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-2xl bg-zinc-900/90 border border-emerald-500/40 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  {selectedSkill.category} ECOSYSTEM SPECIFICATION
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs font-mono text-zinc-400">PRODUCTION DEPLOYED</span>
              </div>
              <h3 className="text-2xl font-extrabold font-display text-white">
                {selectedSkill.name}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono tracking-wider transition-colors cursor-pointer shrink-0"
            >
              CLOSE SPEC
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};
