import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { AnalyticsPipeline } from './components/AnalyticsPipeline';
import { Projects } from './components/Projects';
import { AIProgression } from './components/AIProgression';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { downloadResumeFile } from './utils/resumeGenerator';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleDownloadResume = () => {
    downloadResumeFile();
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navigation */}
      <Navbar onOpenResumeModal={handleOpenResume} />

      {/* Main Portfolio Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero 
          onOpenResumeModal={handleOpenResume} 
          onDownloadResume={handleDownloadResume} 
        />

        {/* 2. Positioning & About Section */}
        <About />

        {/* 3. AIPulse Data Analytics Internship Experience */}
        <Experience />

        {/* 4. Interactive Skill Universe & Thematic Showcase (Python, NumPy, SQL) */}
        <Skills />

        {/* 5. 9-Stage Data Analytics Pipeline */}
        <AnalyticsPipeline />

        {/* 6. Featured Engineering & Data Science Projects */}
        <Projects />

        {/* 7. AI & Generative AI Progression Journey */}
        <AIProgression />

        {/* 8. Verified Certifications Gallery */}
        <Certifications />

        {/* 9. Verified Achievements & Global Benchmarks */}
        <Achievements />

        {/* 10. Interactive Resume Section & One-Click Download */}
        <ResumeSection 
          onOpenModal={handleOpenResume} 
          onDownload={handleDownloadResume} 
        />

        {/* 11. Contact & Dialogue Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Document Printable / Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownload={handleDownloadResume}
      />
    </div>
  );
}
