import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <Link to="/"><h1 className="navbar--logo">Website name</h1></Link>
              <nav>
                <ul className="menu-bar">
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}
