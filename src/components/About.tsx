import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Target, 
  Cpu, 
  Database, 
  LineChart, 
  Sparkles, 
  MapPin, 
  CheckCircle2,
  BrainCircuit,
  Compass,
  Layers,
  BarChart3,
  Binary
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const verifiedMetrics = [
    { value: '8.68', suffix: ' / 10', label: 'CGPA ACADEMIC RECORD', detail: 'B.Tech CSE (AI & ML)' },
    { value: '150K+', suffix: '', label: 'RECORDS ANALYZED', detail: 'Enterprise AI Adoption Study' },
    { value: '43', suffix: ' Attributes', label: 'DIMENSIONS EVALUATED', detail: 'Multi-Year Longitude' },
    { value: '4', suffix: ' Years', label: 'LONGITUDINAL HORIZON', detail: '2023 – 2026 Analytics' },
    { value: '7+', suffix: ' KPIs', label: 'EXECUTIVE METRICS', detail: 'Interactive Power BI' },
    { value: '100K+', suffix: '', label: 'TRANSACTIONS ANALYZED', detail: 'E-Commerce RFM Modeling' }
  ];

  const focusDomains = [
    { name: 'DATA ANALYTICS', icon: LineChart, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20' },
    { name: 'MACHINE LEARNING', icon: Cpu, color: 'text-sky-400 border-sky-500/30 bg-sky-950/20' },
    { name: 'ARTIFICIAL INTELLIGENCE', icon: BrainCircuit, color: 'text-teal-400 border-teal-500/30 bg-teal-950/20' },
    { name: 'DATA SCIENCE', icon: Database, color: 'text-amber-400 border-amber-500/30 bg-amber-950/20' },
    { name: 'GENERATIVE AI', icon: Sparkles, color: 'text-purple-400 border-purple-500/30 bg-purple-950/20' }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono font-medium text-emerald-400 uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>EXECUTIVE BRIEF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Engineering Rigor Meets Commercial Value
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            A Computer Science graduate focused on turning high-dimensional enterprise data into quantifiable business outcomes and intelligent production systems.
          </p>
        </div>

        {/* Short Premium Introduction Narrative */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 font-display font-light leading-relaxed">
            I am <span className="font-semibold text-white">Chinnolla Sriram Goud</span>, an engineering graduate from <span className="text-emerald-300">Malla Reddy College of Engineering and Technology</span> (CGPA 8.68). My work unites statistical hypothesis validation, large-scale data analytics, and modern AI engineering to build dependable solutions for top global technology enterprises.
          </p>

          {/* 5 Core Competence Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {focusDomains.map((domain) => {
              const Icon = domain.icon;
              return (
                <div 
                  key={domain.name}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-mono font-semibold tracking-wider uppercase transition-transform hover:scale-105 ${domain.color}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{domain.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verified Highlight Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {verifiedMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-emerald-500/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]"
            >
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {metric.value}
                  <span className="text-xs font-mono text-zinc-400 font-normal">{metric.suffix}</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-300 leading-tight">
                  {metric.label}
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-zinc-800/60 text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                {metric.detail}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
