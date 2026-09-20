import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  TrendingUp, 
  Database, 
  BarChart3, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Sparkles,
  Layers,
  Activity,
  DollarSign,
  PieChart,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const exp = EXPERIENCE_DATA[0];
  const [activeTab, setActiveTab] = useState<'kpis' | 'trends' | 'workflow'>('kpis');

  const adoptionYears = [
    { year: '2023', rate: 33.2, capex: '$2.41B', maturity: 'Emerging Baseline' },
    { year: '2024', rate: 35.1, capex: '$2.52B', maturity: 'Pilot Expansion' },
    { year: '2025', rate: 37.4, capex: '$2.63B', maturity: 'Strategic Core' },
    { year: '2026', rate: 39.4, capex: '$2.74B', maturity: 'Enterprise Scaled' },
  ];

  const analyticsDisciplines = [
    { name: 'Data Cleaning & Validation', detail: 'Imputed missing values and eliminated schema drift across 43 attributes' },
    { name: 'Data Transformation', detail: 'Standardized operational metrics, engineered ratios, and normalized variance' },
    { name: 'Exploratory Data Analysis', detail: 'Evaluated correlations between maturity tiers and organizational margins' },
    { name: 'Python & Pandas Analysis', detail: 'Executed tabular aggregation pipelines and statistical distribution tests' },
    { name: 'SQL Query Modeling', detail: 'Structured relational joins and multi-year time-series aggregations' },
    { name: 'Power BI Executive Dashboards', detail: 'Designed 7+ interactive KPI views with dynamic slicers and drill-downs' },
    { name: 'ROI & Maturity Analysis', detail: 'Demonstrated 2.3x cost efficiency velocity in mature AI enterprises' }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono font-medium text-emerald-400 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>VERIFIED PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Data Analytics Internship Experience
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Longitudinal Enterprise AI Adoption & Business Performance Analytics at AIPulse, tracking 150,000+ records and $2.7B in corporate capital allocation.
          </p>
        </div>

        {/* Experience Showcase Vessel */}
        <div className="bg-gradient-to-b from-zinc-900/70 via-zinc-900/40 to-zinc-950 border border-zinc-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Radial Light */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Bar: Company, Role & Meta Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-md">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>DATA ANALYTICS INTERNSHIP</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {exp.company} – {exp.projectTitle}
              </h3>
              <div className="text-sm font-mono text-zinc-400">
                Role: <span className="text-zinc-200 font-semibold">{exp.role}</span>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>{exp.period}</span>
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{exp.location}</span>
              </span>
            </div>
          </div>

          {/* Verified Highlight Metrics Strip */}
          <div className="my-8">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
              Empirical Scope & Dataset Scale
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {exp.metrics.map((metric) => (
                <div 
                  key={metric.label}
                  className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-emerald-500/30 transition-all text-center group"
                >
                  <div className="text-xl sm:text-2xl font-extrabold font-display text-white group-hover:text-emerald-300 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-zinc-400 mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Visual Dashboard Engine (No Code - Pure Business & Data Intelligence) */}
          <div className="mt-10 pt-8 border-t border-zinc-800/80 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  VISUAL ANALYTICS BENCHMARK
                </div>
                <h4 className="text-lg font-bold font-display text-white mt-0.5">
                  Longitudinal Findings & Executive KPI Suite
                </h4>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-zinc-950 rounded-lg border border-zinc-800">
                {[
                  { id: 'kpis', label: '7+ KPIs & ROI' },
                  { id: 'trends', label: '4-Year Trend Graph' },
                  { id: 'workflow', label: 'Analytics Disciplines' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-zinc-800 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab 1: 7+ KPIs & ROI */}
            {activeTab === 'kpis' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'AI Adoption Velocity', stat: '~33% → ~39%', desc: 'Annualized adoption compound rate across Fortune 1000 sectors' },
                  { title: 'Capital Investment', stat: '$2.4B → $2.7B', desc: 'Enterprise expenditure expansion over 4 consecutive survey cycles' },
                  { title: 'Operational Efficiency', stat: '2.3x Gain', desc: 'Observed margin lift in organizations reaching Maturity Tier 4' },
                  { title: 'Maturity Framework', stat: '5 Tiers', desc: 'Standardized index tracking organizational AI deployment levels' }
                ].map((kpi) => (
                  <div key={kpi.title} className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-2">
                    <div className="text-xs font-mono text-zinc-400">{kpi.title}</div>
                    <div className="text-2xl font-extrabold font-display text-emerald-400">{kpi.stat}</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{kpi.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: 4-Year Trend Graph */}
            {activeTab === 'trends' && (
              <div className="p-6 rounded-xl bg-zinc-950/90 border border-zinc-800 space-y-6">
                <div className="text-xs font-mono text-zinc-400 uppercase">
                  Longitudinal AI Adoption & Capital Allocation (2023–2026)
                </div>
                <div className="space-y-4">
                  {adoptionYears.map((item) => (
                    <div key={item.year} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-white">{item.year}</span>
                        <span className="text-emerald-400">Adoption: {item.rate}% | Investment: {item.capex}</span>
                        <span className="text-zinc-500 hidden sm:inline">{item.maturity}</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-zinc-900 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.rate / 45) * 100}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Analytics Disciplines */}
            {activeTab === 'workflow' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {analyticsDisciplines.map((disc) => (
                  <div key={disc.name} className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{disc.name}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-5.5">
                      {disc.detail}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
