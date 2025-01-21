import React from 'react';

const SponsorsTicker = ({ allSponsors }) => {
  // Calculate total width for proper timing
  const SCROLL_DURATION = allSponsors.length * 0.75; // Adjust timing based on number of sponsors

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-4">
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {/* First set of sponsors */}
          <div className="flex shrink-0 justify-around items-center gap-8">
            {allSponsors.map((sponsor, index) => (
              <div 
                key={`first-${index}`} 
                className="flex items-center px-4"
              >
                <img
                  src={sponsor.path}
                  alt={sponsor.name}
                  className="h-8 sm:h-12 md:h-16 w-auto duration-300 transform hover:scale-110 object-contain opacity-75 hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Second set of sponsors for seamless loop */}
          <div className="flex shrink-0 justify-around items-center gap-8">
            {allSponsors.map((sponsor, index) => (
              <div 
                key={`second-${index}`} 
                className="flex items-center px-4"
              >
                <img
                  src={sponsor.path}
                  alt={sponsor.name}
                  className="h-8 sm:h-12 md:h-16 w-auto duration-300 transform hover:scale-110 object-contain opacity-75 hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Third set for extra smoothness */}
          <div className="flex shrink-0 justify-around items-center gap-8">
            {allSponsors.map((sponsor, index) => (
              <div 
                key={`third-${index}`} 
                className="flex items-center px-4"
              >
                <img
                  src={sponsor.path}
                  alt={sponsor.name}
                  className="h-8 sm:h-12 md:h-16 w-auto duration-300 transform hover:scale-110 object-contain opacity-75 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          animation: scroll ${SCROLL_DURATION}s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SponsorsTicker;