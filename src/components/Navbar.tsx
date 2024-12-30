import React from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EVICO from '../assets/EVICO.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={EVICO} className="h-8 mt-2 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-amber-300">EVICO Contracting L.L.C</span>
            </Link>
          </div>
          
          <div className="text-amber-300 hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-amber-500">Home</Link>
            <Link to="/services" className="hover:text-amber-500">Services</Link>
            <Link to="/projects" className="hover:text-amber-500">Projects</Link>
            <Link to="/about" className="hover:text-amber-500">About</Link>
            <Link to="/contact" className="hover:text-amber-500">Contact</Link>
            <Link to="/quote" className="bg-amber-300 text-black px-4 py-2 rounded-md hover:bg-amber-500">
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-300 hover:text-amber-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 text-amber-300 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:text-amber-500">Home</Link>
            <Link to="/services" className="block px-3 py-2 hover:text-amber-500">Services</Link>
            <Link to="/projects" className="block px-3 py-2 hover:text-amber-500">Projects</Link>
            <Link to="/about" className="block px-3 py-2 hover:text-amber-500">About</Link>
            <Link to="/contact" className="block px-3 py-2 hover:text-amber-500">Contact</Link>
            <Link to="/quote" className="block px-3 py-2 bg-amber-300 text-black rounded-md hover:bg-amber-500">Get a Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
}