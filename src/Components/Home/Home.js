import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = (props) => {



    return (
    <div>
        <h1>Welcome to <div id="title">Crypto Sonos</div></h1>
        <h2>Play for free. Earn NFT and $SONO making music and building sound systems.</h2>
        <h3>Game will be available in Q1 2022. More infos coming soon.</h3>
        <div id="cards">
            <div className="card" id="grooveboxcard" onClick={(e) => {props.handleClickView(e);}}>Groovebox</div>
            <div className="card" id="soundsystemcard" onClick={(e) => {props.handleClickView(e);}}>Sound System</div>
        </div>
    </div>


    );
}

export default Home;