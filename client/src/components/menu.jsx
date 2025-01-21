import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import logo from '../components/photos/zero.png';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLive, setShowLive] = useState(false);
  
  const navItems = [
    { label: 'Esports', href: '#' },
    { label: 'Tournaments', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Join', href: '#' },
  ];

  return (
    <nav className="bg-black text-white py-3 fixed top-0 left-0 w-full z-50">
      <div className="px-auto sm:px-6 lg:px-auto flex items-center justify-between">

        {/* Mobile Menu and Search */}
        <div className="flex items-center space-x-4 md:hidden px-3">
          <button 
            className="hover:bg-zinc-800 p-2 rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
          <button className="hover:bg-zinc-800 p-2 rounded transition-colors">
            <Search size={24} />
          </button>
        </div>

        {/* Center Logo for Mobile, Left for Desktop */}
        <div className="flex items-center md:space-x-8 md:px-6">
        <div className="flex items-center mb-4">
          <img
            src={logo}
            alt="ZQG"
            className="h-8 sm:h-12 md:h-16 w-auto duration-300 transform scale-110 object-contain opacity-80 hover:opacity-100"
          />
        </div>
          {/* Navigation Items - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white hover:text-gray-300 no-underline transition-colors duration-200 visited:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4 px-3 md:px-6">
          <div className="flex items-center space-x-2">
            <button className="hidden md:block hover:bg-zinc-800 text-white px-4 py-2 rounded transition-colors font-medium">
              Intl
            </button>
            <button className="hidden md:block hover:bg-zinc-800 p-2 rounded transition-colors">
              <Search size={20} />
            </button>
            <button className="hover:bg-zinc-800 p-2 rounded transition-colors">
              <ShoppingBag size={20} />
            </button>
            <button className="hidden md:block hover:bg-zinc-800 px-4 py-2 rounded transition-colors font-medium">
              Log In
            </button>
            <button className="md:inline-block hover:bg-zinc-800 p-2 rounded-full transition-colors md:bg-white md:text-black md:px-4 md:py-2 md:rounded md:hover:bg-gray-200">
              <span className="hidden md:inline font-medium">Sign Up</span>
              <img 
                src="/api/placeholder/24/24"
                alt="User"
                className="md:hidden w-6 h-6 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-50">
          <div className="flex justify-between items-center p-4 border-b border-zinc-800">
            <span className="text-lg font-medium">Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-zinc-800 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-white hover:text-gray-300 no-underline transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 border-t border-zinc-800">
              <div className="p-4">
                <div className="flex items-center space-x-3 bg-zinc-900 p-3 rounded-lg">
                  <img 
                    src="/api/placeholder/40/40"
                    alt="Streamer Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">Skullface</span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span className="text-xs text-gray-400 ml-1">Live Now</span>
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">27 Viewers</span>
                  </div>
                </div>
                <button className="w-full mt-2 py-2 text-sm text-gray-400 hover:text-white transition-colors">
                  + Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
