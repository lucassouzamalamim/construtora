import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we are on a detail page or not to decide initial transparency
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always solid on internal pages, or solid on scroll on homepage
  const navBackground = isHomePage && !isScrolled ? 'bg-transparent py-6' : 'bg-primary shadow-lg py-4';
  const linkColor = 'text-white'; // Always white on dark bg

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50">
          <div className="flex flex-col leading-none">
            <span className={`text-2xl font-bold tracking-widest text-white font-sans`}>
              AURA
            </span>
            <span className="text-[10px] tracking-[0.3em] text-secondary uppercase">
              Construtora
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`${linkColor} text-sm font-medium tracking-widest uppercase hover:text-secondary transition-colors relative group`}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link to="/contato">
             <button className="border border-secondary text-secondary px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all duration-300">
                Área do Cliente
             </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Menu */}
        <div className={`fixed inset-0 bg-primary transform transition-transform duration-300 ease-in-out z-40 flex flex-col items-center justify-center ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center space-y-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light text-white hover:text-secondary transition-colors font-sans"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;