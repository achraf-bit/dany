import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-700">
              Dany 
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-700 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-700 transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-700 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-700 transition-colors">
              Contact
            </a>
          </nav>

          {/* Emergency Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-blue-600">
              <Phone size={18} />
              <span className="font-semibold">(212) 123-4567</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Emergency Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-blue-700 transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-700 transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-700 transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-700 transition-colors">
                Contact
              </a>
              <div className="flex items-center space-x-2 text-blue-600 pt-4 border-t">
                <Phone size={18} />
                <span className="font-semibold">(212) 123-4567</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;