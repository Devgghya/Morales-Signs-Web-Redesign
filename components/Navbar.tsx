import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-industrial-black/95 border-b border-metal-gray backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-2">
             <div className="w-10 h-10 bg-safety-orange flex items-center justify-center font-oswald font-bold text-black text-2xl skew-x-[-10deg]">
               M
             </div>
             <span className="font-oswald text-2xl tracking-wide uppercase text-white">
               Morales <span className="text-safety-orange">Signs</span>
             </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 font-roboto text-lg uppercase tracking-wider">
              <a href="#home" className="hover:text-safety-orange transition-colors duration-200">Home</a>
              <a href="#services" className="hover:text-safety-orange transition-colors duration-200">Services</a>
              <a href="#gallery" className="hover:text-safety-orange transition-colors duration-200">Portfolio</a>
              <a href="#contact" className="px-5 py-2 bg-safety-orange text-black font-bold hover:bg-white transition-colors duration-200 clip-path-slant">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-metal-gray focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-industrial-dark border-t border-metal-gray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-oswald uppercase">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-safety-orange">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-safety-orange">Services</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-safety-orange">Portfolio</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 mt-4 text-center bg-safety-orange text-black font-bold">
              Request Quote
            </a>
            <div className="flex items-center justify-center gap-2 py-4 text-gray-400">
               <Phone size={16} />
               <span>{PHONE_NUMBER}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;