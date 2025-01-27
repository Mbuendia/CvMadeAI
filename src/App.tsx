import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, FileDown, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import DownloadPage from './pages/DownloadPage';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 animate-gradient bg-gradient-to-br from-blue-900 via-purple-900 to-rose-900 opacity-50" />
      
      <header className="fixed w-full z-20 top-0">
        <div className="glass-card mx-4 mt-4 rounded-2xl">
          <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-white hover:text-teal-300 transition-all duration-300">
              <Home className="w-6 h-6" />
              <span className="text-xl font-bold">John Doe</span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-teal-300 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" icon={<Home className="w-4 h-4" />} active={location.pathname === "/"}>
                Home
              </NavLink>
              <NavLink to="/projects" icon={<Briefcase className="w-4 h-4" />} active={location.pathname === "/projects"}>
                Projects
              </NavLink>
              <NavLink to="/download" icon={<FileDown className="w-4 h-4" />} active={location.pathname === "/download"}>
                Download CV
              </NavLink>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} px-6 py-4 border-t border-white/10`}>
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                icon={<Home className="w-4 h-4" />} 
                active={location.pathname === "/"}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/projects" 
                icon={<Briefcase className="w-4 h-4" />} 
                active={location.pathname === "/projects"}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/download" 
                icon={<FileDown className="w-4 h-4" />} 
                active={location.pathname === "/download"}
                onClick={() => setIsMenuOpen(false)}
              >
                Download CV
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-28 min-h-screen relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </main>

      <footer className="relative z-10">
        <div className="glass-card mx-4 mb-4 rounded-2xl">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <SocialLink href="https://github.com" icon={<Github className="w-6 h-6" />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-6 h-6" />} />
              <SocialLink href="mailto:contact@example.com" icon={<Mail className="w-6 h-6" />} />
            </div>
            <p className="text-center text-gray-400 mt-6 text-sm md:text-base">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active: boolean;
  onClick?: () => void;
}

function NavLink({ to, icon, children, active, onClick }: NavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        active
          ? "bg-white/10 text-teal-300"
          : "hover:bg-white/5 text-gray-300 hover:text-teal-300"
      }`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-lg text-gray-400 hover:text-teal-300 hover:bg-white/5 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

export default App;