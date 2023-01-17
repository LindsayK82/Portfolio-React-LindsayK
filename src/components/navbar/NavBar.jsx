import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
    

    return (
        <nav className="n">
            <button><Link to="/">About Lindsay</Link></button>
            <button><Link to="/portfolio">Portfolio</Link></button>
            <button><Link to="/contact">Contact Me</Link></button>
        </nav>
    )
}

export default NavBar;