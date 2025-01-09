
import Footer from "./footer"
import Menu from "./menu"
import './landing.css'
import { Link } from 'react-router-dom'
import Skills from "./skills"

export default function Landing()
{
    return(<>
    <Menu/>
    <div className="container-head">
        <div className="pt-5 text-white">
          <header className="py-5 mt-5">
            <h4 className="lead mb-0">bienvenue dans l'e-sport </h4>
            <h1 className='dm-serif-display-regular'>ZERO QUANTUM GRAVITY</h1>
            <h4 className="lead mb-0">Esports ◦ Recreation ◦ Entertainment</h4>
          </header>
          </div>
          </div>
          <Skills/>
          <div className='container-body'>
          <div className="py-5">
          <p className="lead"><strong className="">ONGOING EVENTS</strong></p>
            <ul className="list">
            <li >E-Football Tournament 2024-<Link to="/efootball">LIVE</Link></li>
            <li >E-Football Coop Tournament 2024-Coming Soon</li>
            </ul>
            <div className="efootball-logo"></div>
          </div>
          <div className="py-5">
          <p className="lead" id="about"><strong className=" ">ABOUT US</strong></p>
           <p className="lead mb-0">We are an Esports Organization based out of Kolkata , India .Zero Quantum Gravity was born out of a shared love for gaming and a desire to create a vibrant community where gamers of all levels could come together to compete, connect, and celebrate their passion for esports. Founded in 2019, our journey began with a vision to level by fostering a supportive environment for players to showcase their skills and achieve their dreams.</p>
          </div>
          <div className="py-5">
            <p className="lead" id="join"><strong className="">GET INVOLVED</strong></p>
            <p className="lead mb-0">

            Ready to join the ZQG eSports community? 
            </p><p className="lead mb-0">Whether you're looking to compete, connect, or learn, there's a place for you here. At ZQG eSports, the game never stops, and neither does the fun. Join us today and be part of something truly special!
           Check out our upcoming events, join our Discord server, or reach out to us on social media to get started.</p>
           
          </div>
          </div>
          <Footer />
    </>)
}