import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        'home',
        'about',
        'experience',
        'skills',
        'pipeline',
        'projects',
        'progression',
        'certifications',
        'achievements',
        'resume',
        'contact'
      ];

      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'pipeline', label: 'Pipeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certs' },
    { id: 'achievements', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#09090b]/85 backdrop-blur-xl border-b border-zinc-800/70 shadow-2xl shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group flex items-center gap-3 text-left focus:outline-none"
            id="brand-logo-button"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-sky-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm tracking-tighter group-hover:border-emerald-400/60 transition-colors">
              SR
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold font-display tracking-tight text-zinc-100 flex items-center gap-1.5">
                <span className="hidden sm:inline">CHINNOLLA SRIRAM GOUD</span>
                <span className="sm:hidden">SRIRAM GOUD</span>
                <span className="hidden md:inline-flex items-center text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 text-emerald-400 border border-zinc-700/50">
                  Data & AI
                </span>
              </div>
              <div className="text-[11px] text-zinc-400 font-mono tracking-wide hidden sm:block">
                MNC Ready Portfolio
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-item-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-zinc-800/90 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Direct Resume View Button */}
            <button
              onClick={onOpenResumeModal}
              id="nav-view-resume-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium rounded-lg text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>

            {/* Let's Connect CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              id="nav-connect-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg text-zinc-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResumeModal}
              className="p-2 text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg sm:hidden"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-zinc-400 hover:text-zinc-100 bg-zinc-900/80 border border-zinc-800 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0e]/95 backdrop-blur-2xl border-b border-zinc-800/80 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-zinc-800/60">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${
                  activeSection === link.id
                    ? 'text-emerald-400 bg-emerald-950/30 border border-emerald-800/40'
                    : 'text-zinc-300 hover:bg-zinc-800/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              View & Download Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-400 text-zinc-950 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              Let's Connect
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
