import React, { useState } from 'react';
import { 
  GitCommit, 
  ArrowRight, 
  ChevronRight, 
  Database, 
  Activity, 
  Layers, 
  BarChart3, 
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Workflow
} from 'lucide-react';
import { ANALYTICS_PIPELINE_STEPS } from '../data/portfolioData';

export const AnalyticsPipeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = ANALYTICS_PIPELINE_STEPS[activeStepIndex];

  return (
    <section id="pipeline" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono font-medium text-emerald-400 uppercase tracking-widest">
            <GitCommit className="w-3.5 h-3.5" />
            <span>END-TO-END METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            The 9-Stage Analytics Pipeline
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            A scientific methodology translating raw multi-source enterprise transactions into verified statistical insights and board-level strategic decisions.
          </p>
        </div>

        {/* High-Level Methodology Stages */}
        <div className="mb-12 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-center">
          {[
            { label: 'RAW DATA', detail: 'Ingestion & Schema Integrity', color: 'text-zinc-200' },
            { label: 'RIGOROUS ANALYSIS', detail: 'Hypothesis Testing & EDA', color: 'text-sky-300' },
            { label: 'EXECUTIVE INSIGHT', detail: 'DAX & KPI Quantification', color: 'text-amber-300' },
            { label: 'STRATEGIC ACTION', detail: 'Resource Allocation & ROI', color: 'text-emerald-400' }
          ].map((item, idx) => (
            <React.Fragment key={item.label}>
              <div className="flex-1 min-w-[140px] p-2">
                <div className={`text-xs sm:text-sm font-bold font-mono tracking-wider ${item.color}`}>
                  {item.label}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono mt-1">
                  {item.detail}
                </div>
              </div>
              {idx < 3 && (
                <div className="hidden lg:flex items-center text-zinc-700">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Interactive 9-Step Pipeline Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Step Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 px-1">
              Select Methodology Phase (01 to 09)
            </div>
            <div className="space-y-1.5 max-h-[540px] overflow-y-auto pr-1">
              {ANALYTICS_PIPELINE_STEPS.map((step, idx) => {
                const isCurrent = activeStepIndex === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isCurrent
                        ? 'bg-zinc-800/90 border-emerald-500/50 shadow-lg text-white'
                        : 'bg-zinc-900/40 border-zinc-800/60 hover:bg-zinc-900 hover:border-zinc-700/80 text-zinc-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isCurrent
                          ? 'bg-emerald-400 text-zinc-950'
                          : 'bg-zinc-950 text-zinc-500 border border-zinc-800'
                      }`}>
                        {step.step}
                      </span>
                      <span className="text-xs sm:text-sm font-medium tracking-tight">
                        {step.title}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isCurrent ? 'text-emerald-400 translate-x-1' : 'text-zinc-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Stage Deep Dive Card (7 Cols) */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Top Tag & Title */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1 rounded-full">
                STAGE {activeStep.step} OF 09
              </span>
              <span className="text-xs font-mono text-zinc-500">
                MNC ANALYTICAL BENCHMARK
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {activeStep.title}
              </h3>
              <div className="text-xs sm:text-sm font-mono text-emerald-300 mt-1">
                {activeStep.subtitle}
              </div>
              <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            {/* Visual Engineering Deliverable (No Code) */}
            <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Workflow className="w-4 h-4" />
                  <span>AUDIT ARTIFACT & DELIVERABLE</span>
                </span>
                <span className="text-[10px] text-zinc-500">VERIFIED</span>
              </div>
              
              <div className="text-sm font-medium text-zinc-200">
                {activeStep.visualArtifact}
              </div>

              <div className="pt-2 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-sky-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Verification Metric: {activeStep.deliverableMetric}</span>
              </div>
            </div>

            {/* Commercial Business Value Outcome */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono uppercase text-emerald-400 font-semibold">
                  Business Value & Stakeholder Outcome
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                  {activeStep.businessValue}
                </p>
              </div>
            </div>

            {/* Step Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-lg text-xs font-mono text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                ← Previous Stage
              </button>
              <button
                disabled={activeStepIndex === ANALYTICS_PIPELINE_STEPS.length - 1}
                onClick={() => setActiveStepIndex(prev => Math.min(ANALYTICS_PIPELINE_STEPS.length - 1, prev + 1))}
                className="px-4 py-2 rounded-lg text-xs font-mono font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                Next Stage →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
