import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    roleInterest: 'Data Analyst / AI Role',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link with pre-filled content
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formState.roleInterest} - ${formState.name}`);
    const body = encodeURIComponent(
      `Hello Sri Ram,\n\nName: ${formState.name}\nEmail: ${formState.email}\nTopic/Opportunity: ${formState.roleInterest}\n\nMessage:\n${formState.message}\n\nBest regards,\n${formState.name}`
    );
    
    window.location.href = `mailto:sriramgoudc@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-medium text-sky-400 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Let’s Discuss Data & AI Impact
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Actively open to full-time Data Analyst, Machine Learning, Data Science, and AI Engineer positions at global technology leaders and high-growth MNCs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Direct Line
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                  Get In Touch Directly
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  I typically respond to technical recruiters and engineering managers within 24 hours.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3">
                {/* Email */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-sky-400" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">Email Address</div>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-emerald-400 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">Mobile Phone</div>
                      <a 
                        href={`tel:${PERSONAL_INFO.phone}`} 
                        className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-emerald-400 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white shrink-0 cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Base Location</div>
                    <div className="text-xs sm:text-sm text-zinc-200 font-medium">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                  Contact Form
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                  Send a Direct Inquiry
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-xs font-mono focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-xs font-mono focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">Inquiry Purpose / Opportunity</label>
                  <select
                    value={formState.roleInterest}
                    onChange={(e) => setFormState({ ...formState, roleInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-xs font-mono focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
                  >
                    <option value="Data Analyst / BI Opportunity">Data Analyst / Business Intelligence Role</option>
                    <option value="Machine Learning / AI Role">Machine Learning / Data Science Role</option>
                    <option value="Generative AI & LLM Systems">Generative AI & Full-Stack AI Engineer</option>
                    <option value="Technical Interview / Recruiter Outreach">Technical Interview / Recruiter Outreach</option>
                    <option value="Project Collaboration / Consultation">Project Collaboration / Consultation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding the role, timeline, or project scope..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-xs font-mono focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/10 active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4 text-zinc-950" />
                  <span>DISPATCH MESSAGE</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-center text-xs font-mono text-emerald-400 animate-in fade-in">
                    ✓ Opening email client to send your message to sriramgoudc@gmail.com!
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
