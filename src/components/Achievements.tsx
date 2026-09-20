import React from 'react';
import { 
  Trophy, 
  Award, 
  CheckCircle, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Database,
  GraduationCap
} from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-medium text-amber-400 uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Global Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Verified Achievements & Benchmarks
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Quantifiable competitive rankings and academic milestones verified by global benchmark datasets and university records.
          </p>
        </div>

        {/* Big Spotlight Card: Kaggle Top 2% */}
        <div className="mb-10 bg-gradient-to-br from-amber-950/20 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold glow in corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Big Rank Badge & Number */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                GLOBAL COMPETITION RANK
              </span>
              
              <div className="text-5xl sm:text-7xl font-extrabold font-display bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                TOP 2%
              </div>

              <div className="text-sm font-mono text-zinc-300">
                Rank 2,000 of 100,000+ Participants
              </div>

              <div className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-lg">
                98th Percentile Worldwide
              </div>
            </div>

            {/* Right Col: Storytelling & Technical Details */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Kaggle House Prices: Advanced Regression Techniques
              </h3>
              
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Competed against more than 100,000 machine learning practitioners worldwide. Engineered advanced feature pipelines with log transformations, skewness correction, ANOVA hypothesis testing, and cross-validated regularized regression (Lasso, Ridge, and OLS) to achieve an elite 2,000 ranking.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center sm:text-left">
                  <div className="text-xs font-mono text-zinc-500">Benchmark Pool</div>
                  <div className="text-sm font-bold text-zinc-200 font-display mt-0.5">100,000+ Engineers</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center sm:text-left">
                  <div className="text-xs font-mono text-zinc-500">Evaluated Metrics</div>
                  <div className="text-sm font-bold text-zinc-200 font-display mt-0.5">R², MAE, RMSE</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center sm:text-left">
                  <div className="text-xs font-mono text-zinc-500">Algorithms</div>
                  <div className="text-sm font-bold text-zinc-200 font-display mt-0.5">Ridge & Lasso Tuning</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://github.com/Sriramgoud0811/House-Price-Prediction"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4"
                >
                  <span>Inspect Kaggle Competition Repository on GitHub →</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Secondary Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS_DATA.filter(a => a.id !== 'kaggle-top2').map((ach) => (
            <div
              key={ach.id}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded">
                    {ach.highlightBadge}
                  </span>
                  <span className="text-2xl font-bold font-display text-white">
                    {ach.metricValue}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white">
                  {ach.title}
                </h3>
                <div className="text-xs font-mono text-zinc-400">
                  {ach.headline} • {ach.organization}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 text-xs font-mono text-zinc-400 flex items-center justify-between">
                <span>{ach.poolSize}</span>
                <span className="text-emerald-400">{ach.percentile}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
