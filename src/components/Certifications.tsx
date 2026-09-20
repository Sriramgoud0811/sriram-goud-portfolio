import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  FileCheck, 
  X,
  Cloud,
  Layers,
  Sparkles
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types/portfolio';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const getBadgeIcon = (iconType: Certification['iconType']) => {
    switch (iconType) {
      case 'aws':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'salesforce':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'cambridge':
        return <FileCheck className="w-5 h-5 text-emerald-400" />;
      case 'kaggle':
        return <Award className="w-5 h-5 text-yellow-400" />;
      default:
        return <Award className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#0b0c10]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-medium text-amber-400 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Industry-recognized credentials verifying cloud architecture, enterprise developer competency, professional communication, and competitive machine learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer shadow-xl relative overflow-hidden"
            >
              {/* Top Card Bar */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                    {getBadgeIcon(cert.iconType)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    VERIFIED
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-zinc-400 mt-1">
                    {cert.issuer}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-0.5">
                    {cert.date}
                  </div>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-zinc-950 text-[10px] font-mono text-zinc-400 border border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-zinc-950 text-[10px] font-mono text-zinc-500 border border-zinc-800">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Hint */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-zinc-200">
                <span>View Certificate</span>
                <span className="text-amber-400">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal Lightbox */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {getBadgeIcon(selectedCert.iconType)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">
                      Verified Certificate
                    </span>
                    <h3 className="text-lg font-bold font-display text-white">
                      {selectedCert.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Certificate Certificate Presentation Frame */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800/80 text-center space-y-4 shadow-inner">
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                  Awarded To
                </div>
                <div className="text-xl font-bold font-display text-white">
                  SRI RAM GOUD
                </div>
                <div className="text-xs text-zinc-400">
                  Issued by <strong>{selectedCert.issuer}</strong>
                </div>

                {selectedCert.credentialId && (
                  <div className="p-2.5 rounded-lg bg-black/60 border border-zinc-800 font-mono text-xs text-emerald-300">
                    ID: {selectedCert.credentialId}
                  </div>
                )}

                <div className="pt-2 text-left">
                  <div className="text-[11px] font-mono text-zinc-400 mb-1.5 uppercase font-semibold">
                    Competencies Validated:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-zinc-900 text-xs font-mono text-zinc-300 border border-zinc-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Link */}
              <div className="flex items-center justify-between pt-2">
                {selectedCert.verificationUrl ? (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:underline"
                  >
                    <span>Official Authority Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : <span />}

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-200"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
