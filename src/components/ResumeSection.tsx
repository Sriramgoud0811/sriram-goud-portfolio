import React from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Award,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenModal: () => void;
  onDownload: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal, onDownload }) => {
  return (
    <section id="resume" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#0b0c10]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-medium text-emerald-400 uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" />
            <span>Document & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Curriculum Vitae & Verified Resume
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Every entry across education, internship responsibilities, Kaggle rankings, and certifications is verified from official academic records.
          </p>
        </div>

        {/* Resume Preview Presentation Box */}
        <div className="bg-zinc-900/60 border border-zinc-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Overview & Download CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Recruiter Fast Track
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                  Ready for MNC Data & AI Evaluation
                </h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                  Download the ATS-friendly, meticulously formatted PDF resume or inspect the interactive digital version directly in your browser.
                </p>
              </div>

              {/* Verified Sections List */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Education:</strong> B.Tech CSE (AI & ML) • MRCET • 8.68 CGPA</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Internship:</strong> AIPulse Enterprise Analytics (150K+ records, 43 attributes)</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Benchmark:</strong> Kaggle Top 2% Global Rank (2,000 / 100,000+)</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Certifications:</strong> AWS Cloud Foundations, Salesforce Developer, Cambridge C1</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onDownload}
                  id="resume-section-download-btn"
                  className="px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD VERIFIED RESUME</span>
                </button>

                <button
                  onClick={onOpenModal}
                  id="resume-section-preview-btn"
                  className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-emerald-500/50 text-zinc-200 font-mono text-xs font-medium flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-emerald-400" />
                  <span>INSPECT FULL DOCUMENT</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-zinc-500">
                Single Source of Truth: All statistics cross-referenced with GitHub & certificates.
              </div>
            </div>

            {/* Right Col: Visual Realistic Resume Page Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div 
                onClick={onOpenModal}
                className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl cursor-pointer group hover:border-emerald-500/50 transition-all duration-300"
              >
                {/* Visual Glass Overlay Tag */}
                <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  CLICK TO EXPAND
                </div>

                {/* Mock Header */}
                <div className="border-b border-zinc-800 pb-4 space-y-1">
                  <div className="text-lg font-bold font-display text-white">
                    SRI RAM GOUD
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400">
                    Data Analyst • Machine Learning • AI Engineer
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500">
                    Hyderabad, India • sriramgoudc@gmail.com
                  </div>
                </div>

                {/* Mini Sections */}
                <div className="mt-4 space-y-3 text-[11px]">
                  <div>
                    <div className="font-mono text-zinc-400 font-semibold uppercase text-[9px]">
                      EDUCATION
                    </div>
                    <div className="text-zinc-200 font-medium">B.Tech CSE (AI/ML) — CGPA 8.68 / 10</div>
                  </div>

                  <div>
                    <div className="font-mono text-zinc-400 font-semibold uppercase text-[9px]">
                      INTERNSHIP
                    </div>
                    <div className="text-zinc-300">Data Analytics Intern — AIPulse (150K+ records)</div>
                  </div>

                  <div>
                    <div className="font-mono text-zinc-400 font-semibold uppercase text-[9px]">
                      KEY SKILLS
                    </div>
                    <div className="text-zinc-400 font-mono text-[10px]">
                      Python • SQL • Pandas • Power BI • Scikit-learn • GenAI
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-zinc-400 font-semibold uppercase text-[9px]">
                      HONORS
                    </div>
                    <div className="text-amber-300 font-mono text-[10px]">
                      ★ Kaggle Top 2% Global Rank (2,000 / 100,000+)
                    </div>
                  </div>
                </div>

                {/* Subtle Hover Bar */}
                <div className="mt-4 pt-3 border-t border-zinc-800 text-center text-xs font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors flex items-center justify-center gap-1">
                  <span>Open Full Interactive Document Viewer</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
