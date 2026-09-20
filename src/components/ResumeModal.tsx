import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-display text-white">
                Official Curriculum Vitae
              </h2>
              <div className="text-[11px] font-mono text-zinc-400">
                Verified Candidate Data • Chinnolla Sriram Goud
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onDownload}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-mono text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body (Structured Paper Design) */}
        <div className="p-6 sm:p-10 max-h-[78vh] overflow-y-auto space-y-8 bg-[#09090b] text-zinc-300 font-sans">
          
          {/* Header Contact Block */}
          <div className="border-b border-zinc-800 pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              CHINNOLLA SRIRAM GOUD
            </h1>
            <div className="text-sm font-semibold text-emerald-400 font-mono">
              Data Analyst | AI / Machine Learning | Data Science | Generative AI
            </div>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-zinc-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                sriramgoudc@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                +91 9398441219
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                Hyderabad, India
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-zinc-500" />
                github.com/Sriramgoud0811
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 border-b border-zinc-800 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              B.Tech in Computer Science and Engineering specializing in AI/ML (CGPA 8.68/10) with practical expertise in end-to-end Data Analytics, Machine Learning algorithms, Business Intelligence dashboard development, and Generative AI systems. Proven experience evaluating 150,000+ enterprise records across 43 attributes, engineering regularized predictive pipelines ranking Top 2% globally on Kaggle, and developing full-stack healthcare risk intelligence applications.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 border-b border-zinc-800 pb-1">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <div className="text-sm font-bold text-white">
                  B.Tech in Computer Science and Engineering (AI & ML)
                </div>
                <div className="text-xs text-zinc-400">
                  Malla Reddy College of Engineering and Technology (Autonomous), Hyderabad
                </div>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-emerald-400 font-semibold">
                <span>CGPA: 8.68 / 10</span>
                <span className="text-zinc-500 block text-[11px]">2022 – 2026</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 border-b border-zinc-800 pb-1">
              Work Experience
            </h3>
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.company} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <div className="text-sm font-bold text-white">
                      {exp.role} — <span className="text-zinc-300 font-medium">{exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-zinc-400">
                      Project: {exp.projectTitle}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-zinc-400 text-left sm:text-right">
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Key Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 border-b border-zinc-800 pb-1">
              Key Projects & Systems
            </h3>
            <div className="space-y-4">
              {PROJECTS_DATA.slice(0, 4).map((p) => (
                <div key={p.name} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm font-bold text-white">
                      {p.name}
                      {p.liveUrl && <span className="ml-2 text-[10px] font-mono text-emerald-400 font-normal">[Live Platform Available]</span>}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {p.techStack.slice(0, 4).join(' • ')}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    <strong>Solution:</strong> {p.solution}
                  </p>
                  <p className="text-xs text-emerald-300/90 font-mono">
                    <strong>Impact:</strong> {p.resultImpact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 border-b border-zinc-800 pb-1">
              Technical Proficiencies
            </h3>
            <div className="space-y-1.5 text-xs text-zinc-300 font-mono">
              <div><strong className="text-white">Programming & Data:</strong> Python, SQL, Pandas, NumPy, Scikit-learn, MySQL</div>
              <div><strong className="text-white">Analytics & Statistics:</strong> Data Cleaning, Validation, Transformation, EDA, Hypothesis Testing, Trend Analysis</div>
              <div><strong className="text-white">Business Intelligence:</strong> Power BI, Advanced Excel, DAX, KPI Reporting, Cohort Analysis</div>
              <div><strong className="text-white">Machine Learning:</strong> Regression, Classification, Regularization (Ridge/Lasso), Cross-Validation, SVM, XGBoost</div>
              <div><strong className="text-white">Generative AI:</strong> Prompt Engineering, RAG Architectures, Vector Embeddings, LangChain, Ollama, Mistral</div>
              <div><strong className="text-white">Web & Tools:</strong> FastAPI, React, Git, GitHub, Jupyter Notebook, MySQL Workbench, VS Code</div>
            </div>
          </div>

          {/* Certifications & Honors */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 border-b border-zinc-800 pb-1">
              Certifications & Honors
            </h3>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-300">
              <li><strong>AWS Academy Cloud Foundations</strong> — Amazon Web Services</li>
              <li><strong>Salesforce Developer</strong> — Agentblazer Champion Program</li>
              <li><strong>Cambridge English C1</strong> — Cambridge Assessment English</li>
              <li><strong>Kaggle Top 2% Global Benchmark</strong> — Advanced Regression Techniques (Rank 2,000 / 100,000+)</li>
            </ul>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900/80 flex items-center justify-between text-xs font-mono">
          <span className="text-zinc-500">Official Candidate Profile • Printable</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onDownload}
              className="px-4 py-2 rounded-lg bg-emerald-400 text-zinc-950 font-semibold flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Clean PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
