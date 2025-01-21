import React from 'react';

const SponsorsTicker = ({ allSponsors }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-4">
      <div className="marquee-container">
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {allSponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center flex-shrink-0 px-4">
              <img
                src={sponsor.path}
                alt={sponsor.name}
                className="h-8 sm:h-12 md:h-16 w-auto duration-300 transform hover:scale-110 object-contain opacity-75 hover:opacity-100"
              />
            </div>
          ))}
          {/* Duplicate sponsor content for infinite scrolling */}
          {allSponsors.map((sponsor, index) => (
            <div key={index + allSponsors.length} className="flex items-center flex-shrink-0 px-4">
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
  );
};

export default SponsorsTicker;