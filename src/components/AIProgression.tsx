import React from 'react';
import { 
  Sparkles, 
  Terminal, 
  Database, 
  Cpu, 
  BrainCircuit, 
  Layers, 
  ArrowDown, 
  CheckCircle2,
  Workflow
} from 'lucide-react';
import { AI_PROGRESSION_STAGES } from '../data/portfolioData';

export const AIProgression: React.FC = () => {
  return (
    <section id="progression" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-medium text-purple-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI & Generative AI Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            From Statistical Foundations to Autonomous AI
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            A disciplined trajectory evolving from core computational data engineering into production machine learning, retrieval-augmented generation (RAG), and clinical intelligence applications.
          </p>
        </div>

        {/* Cinematic Vertical Progression Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-sky-500 to-purple-500 -translate-x-1/2 opacity-30" />

          <div className="space-y-12 relative">
            {AI_PROGRESSION_STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={stage.step}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-10`}
                >
                  {/* Timeline Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-purple-500/60 items-center justify-center text-xs font-mono font-bold text-purple-300 z-20 shadow-lg shadow-purple-500/10">
                    {stage.step}
                  </div>

                  {/* Empty Spacer Half on Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Half */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className="bg-zinc-900/50 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700/80 rounded-2xl p-6 transition-all duration-300 shadow-xl space-y-3 relative group">
                      
                      {/* Mobile Node Badge */}
                      <div className="md:hidden absolute -left-12 top-6 w-7 h-7 rounded-full bg-zinc-950 border-2 border-purple-500/60 flex items-center justify-center text-[10px] font-mono font-bold text-purple-300">
                        {stage.step}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-950/40 border border-purple-800/40 px-2 py-0.5 rounded">
                          {stage.badge}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500">
                          Milestone {idx + 1}/6
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                        {stage.title}
                      </h3>
                      
                      <div className="text-xs font-mono text-zinc-400">
                        {stage.subtitle}
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        {stage.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {stage.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-zinc-950 text-[11px] font-mono text-zinc-300 border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Takeaway Quote */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs font-mono text-zinc-400">
          <span className="text-purple-400 font-semibold">Architectural Philosophy:</span> Generative AI and LLMs are built upon robust data cleaning, statistical evaluation, and reproducible software engineering.
        </div>

      </div>
    </section>
  );
};
