import React from 'react';

const ZQGBanner = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[80vh] bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp9767056.jpg')",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 text-center p-8">
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-red-500 font-bold text-5xl md:text-6xl tracking-wider">
            ZERO QUANTUM GRAVITY
          </h1>
          <div className="text-4xl md:text-5xl font-bold leading-tight tracking-wider text-white">
            <div>6+ YEARS OF LEADING</div>
            <div>ESPORTS PERFORMANCE</div>
          </div>
          <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          Rendezvous ◦ Recreation ◦ Entertainment 
          </p>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default ZQGBanner;
