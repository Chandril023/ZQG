import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './matchdaycarousal.css';

// Example data structure for matches, organized by matchday
const matchData = [
  [  {match: 'MatchDay 1'},
    { match: ' Ronin 2-1 Blaze' },
    { match: ' Hellfire 4-0 Rage'  },
    { match: ' Tubu 1-0 Risabh' },
    { match: ' Neel 2-0 Analysis' },
    { match: ' Saphronix 2-0 Sampreet' },
    { match: ' Pyro 1-0 Mou' },
    { match: ' Avigyan 2-1 LordSid' },
    
  ],
  [ {match: 'MatchDay 2'},
    { match: ' Rishabh 6-3 Banty' },
    { match: ' Blaze 1-1 Hellfire'  },
    { match: ' Tuban 3-2 Analysis' },
    { match: ' Saphronix 3-1 Ronin' },
    { match: ' Neel 2-0 Pyro' },
    { match: ' Sampreet 2-0 Lordsid' },
    { match: ' Avigyan 4-0 Mou' },
  
  ],
  [  {match: 'MatchDay 3'},
    { match: ' Lorsid 2-1 Ronin' },
    { match: ' Blaze 2-0 Rage'  },
    { match: ' Saphronix 6-2 Hellfire' },
    { match: ' Neel 2-2 Avigyan' },
    { match: ' Sampreet 5-2 Mou' },
    { match: ' Banty 3-0 Analysis' },
    { match: ' Tuban - Pyro' },
  
  ],
  [ {match: 'MatchDay 4'},
    { match: ' Ronin 4-0 Mou' },
    { match: ' Saphronix 3-0 Rage'  },
    { match: ' Hellfire 3 -0 Lordsid' },
    { match: ' Avigyan 2-3 Tuban' },
    { match: ' Sampreet 5-1 Neel' },
    { match: ' Pyro - Banty' },
    { match: ' Analysis - Rishabh' },
  
  ],
 
  // Add more matchdays as needed
];

const renderMatches = (matchday) => {
  return matchday.map((match, index) => (
    <div key={index} className="match-info">
      <p className='dm-serif-display-regular'>{match.match}</p>
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
