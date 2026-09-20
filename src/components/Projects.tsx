import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Layers, 
  Sparkles, 
  ChevronRight,
  Database,
  Cpu,
  BarChart3,
  Award
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('ALL');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'ALL', label: 'All Projects' },
    { id: 'DATA ANALYTICS', label: 'Data Analytics' },
    { id: 'BUSINESS INTELLIGENCE', label: 'Business Intelligence' },
    { id: 'MACHINE LEARNING', label: 'Machine Learning' },
    { id: 'AI', label: 'AI & Healthcare' },
    { id: 'WEB APPLICATIONS', label: 'Web Applications' }
  ];

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-medium text-emerald-400 uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Verified Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Featured Engineering & Analytics Projects
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Real repositories and verified data science systems. Click any card to inspect full case study objectives, datasets, feature engineering, and business impact.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start sm:justify-center">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-emerald-400 text-zinc-950 font-bold shadow-md shadow-emerald-500/10'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group bg-zinc-900/40 hover:bg-zinc-900/80 border rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden ${
                project.isFeatured 
                  ? 'border-zinc-700/80 hover:border-emerald-500/50 shadow-xl' 
                  : 'border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {/* Subtle top card gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent group-hover:via-emerald-400 transition-all" />

              <div className="space-y-4">
                {/* Meta Top: Category Tag + Featured Flag */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-950 text-emerald-400 border border-zinc-800">
                    {project.category}
                  </span>
                  {project.liveUrl && (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Platform
                    </span>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <div>
                  <h3 
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1.5 leading-snug">
                    {project.tagline}
                  </p>
                </div>

                {/* Key Problem & Solution Snippet */}
                <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/70 space-y-2 text-xs">
                  <div>
                    <span className="font-mono text-zinc-400 font-semibold block text-[10px] uppercase">
                      Problem Addressed:
                    </span>
                    <span className="text-zinc-300 line-clamp-2">
                      {project.problem}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-emerald-400 font-semibold block text-[10px] uppercase">
                      Engineering Solution:
                    </span>
                    <span className="text-zinc-300 line-clamp-2">
                      {project.solution}
                    </span>
                  </div>
                </div>

                {/* Metrics Pill Strip (if available) */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="px-2.5 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-center">
                        <div className="text-xs font-bold font-display text-emerald-400">{m.value}</div>
                        <div className="text-[9px] font-mono text-zinc-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-950 text-[11px] font-mono text-zinc-400 border border-zinc-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-zinc-950 text-[10px] font-mono text-zinc-500 border border-zinc-800">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: GitHub Link + Case Study CTA + Live Demo */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-800/60 text-emerald-400 text-xs font-mono font-medium flex items-center gap-1 transition-colors"
                      title="Launch Live Application"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800/70 hover:bg-zinc-700 text-xs font-mono text-zinc-200 hover:text-white transition-colors cursor-pointer"
                >
                  Case Study →
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for In-depth Case Study */}
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />

      </div>
    </section>
  );
};
