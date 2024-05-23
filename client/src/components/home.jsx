
import Navbar from "./navbar"
import './home.css'
import Footer from "./footer"

export default function Home()
{
    return (
        <>
          <div className="navbar"><Navbar /></div>
          <div id="footer"><Footer/></div>
        </>
      );
      
}