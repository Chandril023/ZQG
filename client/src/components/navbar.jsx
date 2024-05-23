import React, { useState } from 'react';
import './navbar.css';
import Carousel from './carousal';
import { Link } from 'react-router-dom';
import Points from './points';
function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="wrapper">
      <nav id="sidebar" className={sidebarActive ? 'active' : ''}>
        <div className="sidebar-header">
          <h3>ZQG Esports</h3>
        </div>

        <ul className="list-unstyled components">
          <p>Menu</p>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/register">Register</Link>
          </li>
          <li>
          <Link to="/home">Tournaments</Link>
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
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-align-justify"></i>
            </button>
            
          </div>
        </nav>

        <h2>ZQG Efootball 2024 is here ! <Link to="/register">Register Now</Link></h2>
         <Carousel/>

        <div className="line"></div>

        <h2>Registrations Open</h2>
        <p>Registraions are live.Entry fees Rs 20. Click here to Register </p>
        <button type="button" class="btn btn-dark"><Link to="/register">Register</Link></button>

        <div className="line"></div>

        <h2>Rules</h2>
        <p>
1) Participants :- 15 
2) Entry fees :- ₹20 
3) 10 mins match. No extra time 
4) Team conditions :- Good 
5) 7 special cards allowed ( trending or highlights) 
6) No epic , big time and show time cards allowed 
7) 4 base cards should be in your team . 
8) If you play with more than 7 special cards and ss is provided, direct victory to the opponent and ban if this is repeated . 
9) No simultaneous back passes to the gk allowed. If screen recording is provided, direct victory to the opponent and ban if repeated. 
10) Network issue complaints shall be dealt accordingly.</p>

        <div className="line"></div>

        <h2>Standings</h2>
        <p><Points /></p>
      </div>
    </div>
  );
}

export default Navbar;
