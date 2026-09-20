import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Database, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Award,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900/60">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                {project.category}
              </span>
              {project.isFeatured && (
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-sky-950/60 border border-sky-800/60 text-sky-400">
                  FEATURED CASE STUDY
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              {project.name}
            </h2>
            <div className="text-xs sm:text-sm font-mono text-zinc-400">
              {project.tagline}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Action Links & Key Metrics Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-emerald-500/50 text-xs font-mono font-semibold text-zinc-200 flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>Source Code (GitHub)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 text-xs font-mono font-bold flex items-center gap-2 transition-colors shadow-md shadow-emerald-500/10"
                >
                  <ExternalLink className="w-4 h-4 text-zinc-950" />
                  <span>Launch Live Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
                </a>
              )}
            </div>

            {project.metrics && (
              <div className="flex items-center gap-3">
                {project.metrics.map(m => (
                  <div key={m.label} className="text-right">
                    <div className="text-xs font-bold font-display text-emerald-400">{m.value}</div>
                    <div className="text-[10px] font-mono text-zinc-500">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(t => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded bg-zinc-900 text-xs font-mono text-zinc-300 border border-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Double Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-red-950/10 border border-red-900/30 space-y-2">
              <div className="text-xs font-mono uppercase text-red-400 font-semibold tracking-wider">
                The Business / Clinical Problem
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/10 border border-emerald-900/30 space-y-2">
              <div className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                The Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deep-Dive Case Study: Objective & Dataset */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Case Study Methodology & Data Engineering
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1">
                <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">
                  Project Objective
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {project.caseStudy.objective}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1">
                <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">
                  Dataset Architecture
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {project.caseStudy.dataset}
                </p>
              </div>
            </div>

            {/* Data Preparation Steps */}
            <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800 space-y-3">
              <div className="text-xs font-mono uppercase text-sky-400 font-semibold flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                Data Preparation & Feature Engineering
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {project.caseStudy.dataPreparation.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Analysis & ML Approach */}
            <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800 space-y-3">
              <div className="text-xs font-mono uppercase text-purple-400 font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                Machine Learning & Statistical Approach
              </div>
              {project.caseStudy.mlApproach && (
                <p className="text-xs sm:text-sm text-zinc-200 font-mono pb-2 border-b border-zinc-800">
                  {project.caseStudy.mlApproach}
                </p>
              )}
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {project.caseStudy.analysis.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-400 font-mono font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Findings & Business Value */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
                <div className="text-xs font-mono uppercase text-amber-400 font-semibold">
                  Key Findings & Discoveries
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {project.caseStudy.keyFindings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-2">
                <div className="text-xs font-mono uppercase text-emerald-400 font-semibold">
                  Quantifiable Business / Operational Value
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  {project.caseStudy.businessValue}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900/80 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>Targeting Top MNC Recruiter Review</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
