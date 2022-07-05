import React from 'react';
import './Navbar.css';

const Navbar = (props) => {

const renderConnectButton = () => {
    if (!props.currentAccount) {
        return (<div className="navbarItem" id="connectbutton" onClick={props.connectWalletAction}>Connect</div>);
    }
}


    return (
    <div>
    <div id="navbar">
        <div className="navbarItem" id="homenavb" onClick={(e) => {props.handleClickView(e);}}>Home</div>
        <div className="navbarItem" id="grooveboxnavb" onClick={(e) => {props.handleClickView(e);}}>Groovebox</div>
        <div className="navbarItem" id="soundsystemnavb" onClick={(e) => {props.handleClickView(e);}}>Sound System</div>
        <div className="navbarItem" id="rulesnavb" onClick={(e) => {props.handleClickView(e);}}>How to Play</div>            
        {renderConnectButton()} 
        
    </div>
    
    </div>

    );
}

export default Navbar;