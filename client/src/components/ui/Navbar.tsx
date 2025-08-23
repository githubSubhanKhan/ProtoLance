import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/components/images/removedbglogo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links data
  const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Work', href: '#work' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact Us', href: '#contact' }
];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-darkcustom text-whitecustom sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-whitecustom font-bold text-2xl cursor-pointer"
              style={{ fontFamily: 'Poppins' }}
            >
              ProtoLance.
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-whitecustom px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-offwhitecustom hover:text-darkcustom"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-whitecustom hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-darkcustom border-t border-gray-700">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-whitecustom hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;