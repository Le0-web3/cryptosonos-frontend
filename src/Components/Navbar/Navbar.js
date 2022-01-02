import React from 'react';
import './Navbar.css';

const Navbar = (props) => {

    return (
    
    <div id="navbar">
        <div className="navbarItem" id="homenavb" onClick={(e) => {props.handleClickView(e);}}>Home</div>
        <div className="navbarItem" id="grooveboxnavb" onClick={(e) => {props.handleClickView(e);}}>Groovebox</div>
        <div className="navbarItem" id="soundsystemnavb" onClick={(e) => {props.handleClickView(e);}}>Sound System</div>
    </div>

    );
}

export default Navbar;