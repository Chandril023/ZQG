import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './matchdaycarousal.css';

// Example data structure for matches, organized by matchday
const matchData = [
  [
    { match: ' Saphronix 3-1 Ronin' },
    { match: ' Hellfire 1-1 Blaze'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Ronin 2-1 Blaze' },
    { match: ' Saphronix 6-2 Hellfire'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Lorsid 2-1 Ronin' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Ronin 2-1 Neel' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Ronin 2-0 Tuban' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Ronin 4-0 Mou' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Team A vs Team B' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Team A vs Team B' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Team A vs Team B' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Team A vs Team B' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Team A vs Team B' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Team A vs Team B' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Team A vs Team B' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  [
    { match: ' Team A vs Team B' },
    { match: ' Team C vs Team D'  },
    { match: ' Team E vs Team F' },
    { match: ' Team G vs Team H' },
    { match: ' Team I vs Team J' },
    { match: ' Team K vs Team L' },
    { match: ' Team M vs Team N' },
  ],
  // Add more matchdays as needed
];

const renderMatches = (matchday) => {
  return matchday.map((match, index) => (
    <div key={index} className="match-info">
      <p>{match.match}</p>
      <p>{match.time}</p>
    </div>
  ));
};

function MatchdayCarousel() {
  return (
    <Carousel>
      {matchData.map((matchday, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-background">
            {renderMatches(matchday)}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MatchdayCarousel;
