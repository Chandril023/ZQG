import React, { useState } from 'react';
import { ArrowRight, Trophy, Users, Gamepad } from 'lucide-react';

const ZQGBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    { icon: Trophy, label: 'Championships', value: '15+' },
    { icon: Users, label: 'Pro Players', value: '50+' },
    { icon: Gamepad, label: 'Active Teams', value: '8' }
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-900 opacity-50" />
      
      {/* Diagonal stripe decoration */}
      <div className="absolute -right-16 top-0 h-full w-32 bg-orange-500 transform rotate-12 opacity-20" />
      <div className="absolute -left-16 bottom-0 h-full w-32 bg-orange-500 transform -rotate-12 opacity-20" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
        {/* Header section */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
            WE ARE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              ZERO QUANTUM GRAVITY
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            LEADING THE FUTURE OF COMPETITIVE GAMING
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <Icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-orange-500" />
              <div className="text-lg md:text-xl font-bold">{value}</div>
              <div className="text-xs md:text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-auto flex flex-col items-center">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-lg bg-orange-500 px-6 py-3 font-bold transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              DISCOVER
              <ArrowRight 
                className={`w-4 h-4 transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`}
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform transition-transform duration-300 group-hover:translate-x-full" />
          </button>
          <a href="#more" className="mt-4 text-sm text-gray-400 hover:text-orange-500 transition-colors">
            About us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ZQGBanner;