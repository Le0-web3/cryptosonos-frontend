import React, { useEffect, useState } from 'react';
import './Home.css';
import MiniGroovebox from './../Groovebox/MiniGroovebox.js';
import BuildedSono from './../Soundsystem/BuildedSono.js';

const Home = (props) => {



    return (
    <div>
        <h1>Welcome to <div id="title">Crypto Sonos</div></h1>
        <div id="cards">
            <div className="buttoncolumn">        
                <MiniGroovebox    
                    id="grooveboxbuttonimage"    
                    mood={props.mood}
                    sequence={props.sequence}
                    />
                <div className="card" id="grooveboxcard" onClick={(e) => {props.handleClickView(e);}}>Groovebox</div>
            </div>
            <div className="buttoncolumn">     
                <div className="sonoimage"> 
                <BuildedSono    
                    id="soundsystembuttonimage"    
                    builded={props.builded}
                    setBuilded={props.setBuilded}
                    />
                </div>  
                <div className="card" id="soundsystemcard" onClick={(e) => {props.handleClickView(e);}}>Sound System</div>
            </div>      

        </div>

    </div>


    );
}

export default Home;