import React, { useState } from 'react';
import Menu from './menu';
import './efootball.css'
import Points from './points';
import MatchdayCarousel from './matchday';
import Footer from './footer';

function Efootball() {
return(<>
<Menu/>
        <div class="overlay">
        <div className='container-head-1'>
        <div className="pt-5 text-white">
          <header className="py-5 mt-5">
            <h4 className="lead mb-0">ZQG</h4>
            <h1 className='dm-serif-display-regular'>Efootball Tournament 2024</h1>
            <h4 className="lead mb-0">Esports</h4>
          </header>
          </div>
          </div>
        </div>
        <div className="container-body">
        <p className="lead" ><strong className="">MATCHDAY</strong></p>
        <MatchdayCarousel/>
        <p className="lead" ><strong className="">POINTS TABLE</strong></p>
        <Points/>
        <p className="lead" ><strong className="">RULES</strong></p>
        <p>
          1) Participants: 15 <br />
          2) Entry fees: ₹20 <br />
          3) 10 mins match. No extra time <br />
          4) Team conditions: Good <br />
          5) 7 special cards allowed (trending or highlights) <br />
          6) No epic, big time, and show time cards allowed <br />
          7) 4 base cards should be in your team. <br />
          8) If you play with more than 7 special cards and ss is provided, direct victory to the opponent and ban if this is repeated. <br />
          9) No simultaneous back passes to the gk allowed. If screen recording is provided, direct victory to the opponent and ban if repeated. <br />
          10) Network issue complaints shall be dealt with accordingly.
        </p>
        </div>
        <Footer/>
</>)
}

export default Efootball;
