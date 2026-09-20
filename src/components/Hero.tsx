import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowDown, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  ExternalLink,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  Terminal,
  Monitor
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onDownloadResume }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();

  // Subtle parallax transformations for background typography and workstation frame
  const bgTextY = useTransform(scrollY, [0, 600], [0, 120]);
  const workstationY = useTransform(scrollY, [0, 600], [0, -40]);
  const workstationScale = useTransform(scrollY, [0, 600], [1, 0.96]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden bg-[#09090b]"
    >
      {/* 1. Cinematic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep ambient radial glow behind workstation */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-gradient-to-b from-emerald-500/10 via-zinc-800/10 to-transparent blur-[140px] opacity-70 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Subtle architectural matrix grid */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Delicate metallic horizon divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />
      </div>

      {/* 2. Massive Background Typographic Watermark (CHINNOLLA SRIRAM GOUD) */}
      <motion.div 
        style={{ y: bgTextY }}
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0 opacity-[0.035] sm:opacity-[0.045] overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.045, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-[14vw] font-black tracking-tighter leading-none text-zinc-100 font-display">
          CHINNOLLA
        </span>
        <span className="text-[14vw] font-black tracking-tighter leading-none text-zinc-100 font-display">
          SRIRAM
        </span>
        <span className="text-[14vw] font-black tracking-tighter leading-none text-zinc-100 font-display">
          GOUD
        </span>
      </motion.div>

      {/* 3. Hero Interactive Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Personal Brand Identity & Storytelling (7 cols) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            
            {/* Status Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.12)] backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300 tracking-wider uppercase">
                {PERSONAL_INFO.status}
              </span>
              <span className="text-zinc-700 font-mono text-xs">•</span>
              <span className="text-xs font-mono text-zinc-400">
                HYDERABAD, INDIA
              </span>
            </motion.div>

            {/* Full Name & Title Reveal */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>MNC-GRADE DATA & AI ARCHITECT</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
                CHINNOLLA <br />
                <span className="bg-gradient-to-r from-zinc-100 via-emerald-200 to-teal-300 bg-clip-text text-transparent">
                  SRIRAM GOUD
                </span>
              </h1>
            </div>

            {/* Professional Roles Array */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              {[
                { label: 'DATA ANALYST', border: 'border-emerald-500/30 text-emerald-300 bg-emerald-950/25' },
                { label: 'AI / ML', border: 'border-sky-500/30 text-sky-300 bg-sky-950/25' },
                { label: 'DATA SCIENCE', border: 'border-teal-500/30 text-teal-300 bg-teal-950/25' },
                { label: 'GENERATIVE AI', border: 'border-purple-500/30 text-purple-300 bg-purple-950/25' }
              ].map((role) => (
                <span 
                  key={role.label}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold tracking-wider uppercase border backdrop-blur-md transition-all hover:scale-105 ${role.border}`}
                >
                  {role.label}
                </span>
              ))}
            </div>

            {/* Professional Tagline */}
            <p className="text-lg sm:text-xl text-zinc-200 font-normal leading-relaxed max-w-2xl">
              &ldquo;{PERSONAL_INFO.tagline}&rdquo;
            </p>

            {/* Supporting Statement */}
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-xl">
              {PERSONAL_INFO.supportingStatement}
            </p>

            {/* Action Buttons: VIEW PROJECTS | DOWNLOAD RESUME | LET'S CONNECT */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              {/* Button 1: View Projects */}
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm tracking-wide shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all active:scale-95 cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Button 2: Download Resume */}
              <button
                onClick={onDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-medium text-sm tracking-wide transition-all active:scale-95 cursor-pointer shadow-lg hover:border-emerald-500/40"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>DOWNLOAD RESUME</span>
              </button>

              {/* Button 3: Let's Connect */}
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-transparent hover:bg-zinc-900/60 text-zinc-300 border border-zinc-800 hover:border-zinc-700 font-medium text-sm tracking-wide transition-all active:scale-95 cursor-pointer"
              >
                <span>LET&apos;S CONNECT</span>
              </button>
            </div>

            {/* Social Channels Strip */}
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-3 border-t border-zinc-800/80 w-full max-w-md">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700 font-mono text-xs">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-sky-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700 font-mono text-xs">•</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: High-End Cinematic Workstation Composition with Real Photograph (5 cols) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center relative"
            style={{ y: workstationY, scale: workstationScale }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient workstation perimeter glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-sky-500/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            {/* Workstation Outer Hardware Chassis Frame */}
            <div className="relative w-full max-w-[430px] rounded-2xl bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-2 sm:p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(16,185,129,0.12)] border border-zinc-700/60">
              
              {/* Top Workstation Display Bezel Header */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-zinc-950/80 rounded-t-xl border-b border-zinc-800/80 text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-zinc-500 pl-1 font-mono text-[10px]">WORKSTATION // CS-AI-01</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>LIVE // HYD</span>
                </div>
              </div>

              {/* Main Screen Glass Vessel with Genuine Portrait */}
              <div className="relative overflow-hidden rounded-b-xl bg-[#09090b] aspect-[4/5] sm:aspect-[3/4]">
                
                {/* Genuine Photo - Chinnolla Sriram Goud */}
                <img
                  src="/sriram-profile.png"
                  alt="Chinnolla Sriram Goud at Modern Workstation"
                  className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98] transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Cinematic Glass Reflections & Gradient Lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
                
                {/* Angled Glass Sheen Highlight */}
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none rotate-12" />

                {/* Workstation Screen Telemetry Overlay: Top Right Badge */}
                <div className="absolute top-3.5 right-3.5 backdrop-blur-md bg-zinc-950/80 border border-zinc-700/60 rounded-lg px-2.5 py-1.5 flex items-center gap-2 shadow-lg">
                  <Monitor className="w-3.5 h-3.5 text-emerald-400" />
                  <div className="text-left">
                    <div className="text-[9px] font-mono text-zinc-400 uppercase leading-none">Status</div>
                    <div className="text-[11px] font-mono font-bold text-zinc-100 leading-tight">ACTIVE</div>
                  </div>
                </div>

                {/* Workstation Screen Telemetry Overlay: Bottom HUD */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 backdrop-blur-md bg-zinc-950/85 border border-zinc-700/70 rounded-xl p-3.5 shadow-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-semibold">
                        IDENTITY VERIFIED
                      </div>
                      <div className="text-sm font-bold text-white tracking-tight">
                        CHINNOLLA SRIRAM GOUD
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] font-mono text-zinc-400 uppercase">CGPA</div>
                      <div className="text-sm font-bold font-mono text-emerald-300">8.68 / 10</div>
                    </div>
                  </div>

                  {/* Telemetry Micro-Pills */}
                  <div className="flex items-center justify-between pt-1 border-t border-zinc-800 text-[10px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-sky-400" />
                      <span>Kaggle Top 2%</span>
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="flex items-center gap-1">
                      <Layers className="w-3 h-3 text-teal-400" />
                      <span>150K+ Records</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Workstation Base / Laptop Hinge Stand Illusion */}
              <div className="mt-2 pt-1 border-t border-zinc-800/80 flex items-center justify-between px-3 text-[10px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  <span>SYSTEM CALIBRATED</span>
                </span>
                <span>B.TECH CSE (AI/ML)</span>
              </div>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Cue at Bottom */}
      <motion.div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 text-[10px] font-mono tracking-widest uppercase cursor-pointer hover:text-zinc-300 transition-colors"
        onClick={scrollToProjects}
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-emerald-400" />
      </motion.div>
    </section>
  );
};
