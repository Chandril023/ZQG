import React, { useState } from 'react';
import './navbar.css';
import Carousel from './carousal';
import { Link } from 'react-router-dom';
import Points from './points';

function Coop() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="wrapper">
      <nav id="sidebar" className={sidebarActive ? 'active' : ''}>
        <div className="sidebar-header">
          <h3>ZQG Esports</h3>
          <h2></h2>
        </div>
        <ul className="list-unstyled components">
          <p>Menu</p>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li className="dropdown">
            <a href="#tournaments" data-toggle="dropdown" aria-expanded="false">Tournaments</a>
            <ul className="dropdown-menu">
              <li><Link to="/efootball">E-Football Tournament</Link></li>
              <li><Link to="/efootballcoop">E-Football Coop Tournament</Link></li>
              <li><Link to="/tournament3">Tournament 3</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/admin/login">Admin Login</Link>
          </li>
          <li>
            <a href="#points">Points</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>

      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={toggleSidebar}>
              <i className="fas fa-align-left"></i>
              <span>ZQG</span>
            </button>
            <h2>ZQG Esports</h2>
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-align-justify"></i>
            </button>
          </div>
        </nav>

        <h2>ZQG Efootball 2024 is here! <Link to="/register">Register Now</Link></h2>
        <Carousel />

        <div className="line"></div>

        <Points />

        <div className="line"></div>

        <h2>Rules</h2>
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

        <div className="line"></div>
        
      </div>
    </div>
  );
}

export default Coop;
