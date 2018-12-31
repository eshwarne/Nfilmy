import React from 'react';
import { Link } from 'react-router-dom'
import '../../navbar.css'
const Navbar = (props) => {
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo" id="logo">NFilmy</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/films">Log In</Link></li>
                    <li><Link to="/SignUp">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;