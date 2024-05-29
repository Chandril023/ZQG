import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './menu.css'; // Custom CSS
import { Link } from 'react-router-dom';

function Menu() {
  const [navbarActive, setNavbarActive] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <Navbar 
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          className={`navbar navbar-expand-lg fixed-top py-3 ${navbarActive || expanded ? 'active' : ''}`} 
          expand="lg">
          <Container>
            <Navbar.Brand href="#" className="text-uppercase font-weight-bold">ZQG Esports</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Button 
                className="close-btn"
                onClick={() => setExpanded(false)}
              >&times;</Button>
              <Nav className="ml-auto nav-centered">
                <Nav.Link href="#" className="text-uppercase font-weight-bold"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link href="#about" className="text-uppercase font-weight-bold">About</Nav.Link>
                <Nav.Link href="#join" className="text-uppercase font-weight-bold">Join Us</Nav.Link>
                
                <li className="dropdown">
              <Nav.Link href="#" className="text-uppercase font-weight-bold" data-toggle="dropdown" >Tournaments</Nav.Link>
              <ul className="dropdown-menu">
              <li><Link to="/efootball">E-Football Tournament</Link></li>
            </ul>
          </li>
                <Nav.Link href="#contact" className="text-uppercase font-weight-bold">Contact</Nav.Link>
                <Nav.Link href="#" className="text-uppercase font-weight-bold"><Link to="/admin/login">Admin</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      
      
    </>
  );
}

export default Menu;
