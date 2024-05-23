
import Navbar from "./navbar"
import { Link } from 'react-router-dom'

export default function Landing()
{
    return(<>
    <div className='whole'>
    <div className="navbar"><Navbar /></div>
    <div className='registration'>
        <Link to="/home">
        <img src='https://www.konami.com/games_cms/promo/eu/uploads/002_efootball_championship_2024_open_keyvisual-600x338.jpg'/>
        </Link>
    </div>
    <div className="tournament">
       <Link to="/home"> 
        <img src='https://wallpapercave.com/wp/wp13111906.jpg'/>
        </Link>
    </div>
    </div>
    </>)
}