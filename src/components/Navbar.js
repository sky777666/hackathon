import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        
        
        <nav className="navbar">
        <div className="container"> 
        
               
            <Link className="navbar-brand" to="/">
            <img className="navpicture1" src="https://i.imgur.com/aOLqwQl.jpg"  alt=" face"  />  
            </Link>
            <Link className="navbar-brand" to="/profile">
            <img className="navpicture2" src="https://image.flaticon.com/icons/svg/117/117479.svg"  alt=" face" />  
            </Link>
        </div> 
        </nav>
    )
}

export default Navbar;


