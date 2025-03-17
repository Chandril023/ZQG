import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Home, ChevronDown } from 'lucide-react';
import { User } from 'lucide-react';
import logo from '../components/photos/zero.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileTournamentDropdown, setMobileTournamentDropdown] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tournaments', href: '#', dropdown: true },
    { label: 'Members', href: '/members' },
    { label: 'About Us', href: '#' },
    { label: 'Join', href: '#' },
  ];

  const tournamentOptions = [
    { label: 'Efootball 2025', href: '/efootball' }
  ];

  const comingSoon = () => {
    alert('Coming Soon!');
  };

  const redirectToLogin = () => {
    window.location.href = '/admin/login';
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileTournamentDropdown = () => {
    setMobileTournamentDropdown(!mobileTournamentDropdown);
  };

  return (
    <nav className="bg-black text-white py-3 fixed top-0 left-0 w-full z-50">
      <div className="px-auto sm:px-6 lg:px-auto flex items-center justify-between">

        {/* Mobile Menu and Search */}
        <div className="flex items-center space-x-4 md:hidden px-3">
          <button 
            className="hover:bg-zinc-800 p-2 rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24}/>
          </button>
          <button className="hover:bg-zinc-800 p-2 rounded transition-colors">
            <Home size={24} onClick={() => window.location.href = '/'} />
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
              item.dropdown ? (
                <div 
                  key={item.label} 
                  className="relative"
                >
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center text-sm font-medium text-white hover:text-gray-300 no-underline transition-colors duration-200"
                  >
                    {item.label}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute bg-black text-white py-2 mt-2 rounded shadow-lg w-48">
                      {tournamentOptions.map((option) => (
                        <a 
                          key={option.label}
                          href={option.href} 
                          className="block px-4 py-2 hover:bg-zinc-800 transition-colors"
                        >
                          {option.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-gray-300 no-underline transition-colors duration-200 visited:text-white"
                >
                  {item.label}
                </a>
              )
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
              <Search size={20} onClick={comingSoon}/>
            </button>
            <button className="hover:bg-zinc-800 p-2 rounded transition-colors">
              <ShoppingBag size={20} onClick={comingSoon}/>
            </button>
            <button className="md:inline-block hover:bg-zinc-800 p-2 rounded-full transition-colors md:bg-white md:text-black md:px-4 md:py-2 md:rounded md:hover:bg-gray-200">
              <span className="hidden md:inline font-medium" onClick={redirectToLogin}>Log In</span>
              <User size={20}
                className="md:hidden w-6 h-6 rounded-full"
                onClick={redirectToLogin}
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
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={toggleMobileTournamentDropdown}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white hover:bg-black no-underline "
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className={`transition-transform ${mobileTournamentDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileTournamentDropdown && (
                    <div className="bg-black pl-8">
                      {tournamentOptions.map((option) => (
                        <a
                          key={option.label}
                          href={option.href}
                          className="block px-4 py-3 text-sm text-white hover:bg-black no-underline"
                        >
                          {option.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-white hover:bg-black no-underline transition-colors duration-200"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;