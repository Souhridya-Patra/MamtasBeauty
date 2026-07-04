import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react';
import { cn } from '../lib/utils';
import logo from '../../assets/brand_MamtasBeautyParlour_logo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out h-20 flex items-center border-b border-[#FCE7EF] bg-white/40 backdrop-blur-sm'
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Mamta's Beauty Parlour"
                className="h-14 w-14 rounded-full object-cover shadow-sm"
              />
              <span className="flex flex-col leading-none">
                <span className="font-playfair text-2xl font-bold tracking-tight text-[#C88A8A]">MAMTAS</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mt-1 font-poppins">Beauty Parlour</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-poppins text-xs uppercase tracking-widest font-semibold text-[#2C2C2C]/70 hover:text-[#C88A8A] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              className="px-6 py-2.5 bg-gradient-to-r from-[#C88A8A] to-[#E87EA1] text-white text-xs uppercase tracking-widest font-poppins font-bold rounded-full shadow-lg shadow-[#C88A8A]/20 transition-transform active:scale-95 hover:shadow-xl"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[#2C2C2C]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FFF9F8] border-b border-[#FCE7EF]"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-[#2C2C2C] hover:bg-[#FCE7EF] hover:text-[#C88A8A]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center mt-4 px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#C88A8A] to-[#E87EA1]"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
