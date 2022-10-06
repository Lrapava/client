import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <Link to="/client"><h1 className="navbar--logo">Website name</h1></Link>
              <nav>
                <ul className="menu-bar">
                    <li><Link to="/client/search">Search</Link></li>
                    <li><Link to="/client/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}
