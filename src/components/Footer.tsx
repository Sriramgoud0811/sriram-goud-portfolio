import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 bg-[#050507] text-zinc-400 py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                SR
              </div>
              <span className="text-base font-bold font-display text-white tracking-tight">
                CHINNOLLA SRIRAM GOUD
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              B.Tech Computer Science graduate specializing in AI/ML from Malla Reddy College of Engineering & Technology. Focused on enterprise data analytics, predictive intelligence, and generative AI systems.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Verified Profile — All Metrics Backed by Academic & GitHub Evidence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs font-mono">
            <div className="text-zinc-200 font-semibold uppercase tracking-wider mb-2 text-[11px]">
              Fast Navigation
            </div>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Professional Background</a></li>
              <li><a href="#experience" className="hover:text-emerald-400 transition-colors">AIPulse Analytics Internship</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Skills & Thematic Showcase</a></li>
              <li><a href="#pipeline" className="hover:text-emerald-400 transition-colors">9-Stage Analytics Pipeline</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Featured Engineering Projects</a></li>
              <li><a href="#certifications" className="hover:text-emerald-400 transition-colors">Verified Credentials & Honors</a></li>
            </ul>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="text-zinc-200 font-semibold uppercase tracking-wider text-[11px] font-mono">
                Connect Channels
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Chinnolla Sriram Goud. Designed for Global MNC Technical Evaluation.
          </div>
          <div className="flex items-center gap-1 text-zinc-500">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
};
